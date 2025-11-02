#!/usr/bin/env python3
"""
Clean Gaussian Splatting pipeline that:
1. Creates gaussians from images using AnySplat
2. Extracts masks from images using lang-segment-anything
3. Filters gaussians based on masks
4. Saves cleaned gaussians

Usage:
    python gaussian_filter.py --input_folder input --text_prompt "table"
"""

import os
import sys
import argparse
from pathlib import Path
from typing import List, Tuple
import torch
import numpy as np
from PIL import Image

import copy

import sys, numpy as np, torch

# # map missing module names expected by the pickle to what's available
# sys.modules.setdefault("numpy._core", np.core)
# sys.modules.setdefault("numpy._core.multiarray", np.core.multiarray)
# sys.modules.setdefault("numpy.core", np.core)                 # in case of the opposite mismatch
# sys.modules.setdefault("numpy.core.multiarray", np.core.multiarray)

# Add AnySplat to path
# sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'AnySplat'))

from src.model.model.anysplat import AnySplat
from src.utils.image import process_image, process_image_datamodule
from src.model.ply_export import export_ply
from src.model.types import Gaussians

# Add lang-segment-anything to path
# sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'lang-segment-anything'))

# from lang_sam import LangSAM


def load_images(image_folder: str) -> Tuple[torch.Tensor, List[str]]:
    """Load and preprocess images from folder."""
    # image_files = sorted([
    #     os.path.join(image_folder, f)
    #     for f in os.listdir(image_folder)
    #     if f.lower().endswith(('.png', '.jpg', '.jpeg'))
    # ])
    image_folder = "/cluster/home/idemir/weekend_building/new_scene"
    image_files = sorted([
        os.path.join(image_folder, f)
        for f in os.listdir(image_folder)
        if f.lower().endswith(('.png', '.jpg', '.jpeg'))
    ])

    mask_folder = "/cluster/home/idemir/weekend_building/new_scene_masks"
    mask_files = sorted([
        os.path.join(mask_folder, f)
        for f in os.listdir(mask_folder)
        if f.lower().endswith(('.png', '.jpg', '.jpeg'))
    ])

    if not image_files:
        raise ValueError(f"No images found in {image_folder}")

    print(f"Loading {len(image_files)} images from {image_folder}")
    processed = [process_image_datamodule(img_path, mask_path) for img_path, mask_path in zip(image_files, mask_files)]
    images, masks = zip(*processed)

    images = torch.stack(images, dim=0).unsqueeze(0)  # [1, K, 3, 448, 448]
    masks = torch.stack(masks, dim=0).unsqueeze(0)  # [1, K, 1, 448, 448]
    masks = torch.nn.functional.max_pool2d(masks.squeeze(), kernel_size=9, stride=1, padding=4).unsqueeze(0).unsqueeze(2)  # expands ~4 px
    # m = 1 - masks.float()  # invert
    # m = torch.nn.functional.max_pool2d(m.squeeze(), kernel_size=17, stride=1, padding=8)  # shrink original
    # masks = 1 - m
    masks = (masks > 0).float()

    return images, image_files, masks


def create_gaussians(model: AnySplat, images: torch.Tensor, device: torch.device) -> Tuple[Gaussians, dict]:
    """Run AnySplat inference to create gaussians from images."""
    print("Running AnySplat inference...")
    images = images.to(device)

    with torch.no_grad():
        gaussians, pred_context_pose = model.inference((images + 1) * 0.5)

    print(f"Generated {gaussians.means.shape[1]} gaussians")
    return gaussians, pred_context_pose


def extract_masks(
    image_paths: List[str],
    text_prompt: str,
    lang_sam_model,
    target_size: Tuple[int, int],
    box_threshold: float = 0.3,
    text_threshold: float = 0.25
) -> Tuple[List[np.ndarray], List[Image.Image]]:
    """Extract masks from images using lang-segment-anything.

    Args:
        image_paths: List of image file paths
        text_prompt: Text prompt for segmentation
        lang_sam_model: LangSAM model instance
        target_size: (height, width) to resize masks to
        box_threshold: Box threshold for GDINO
        text_threshold: Text threshold for GDINO

    Returns:
        masks: List of [H, W] boolean masks resized to target_size
        pil_images: Original PIL images used
    """
    print(f"Extracting masks for '{text_prompt}'...")

    # Load images as PIL
    pil_images = [Image.open(path).convert("RGB") for path in image_paths]

    # # Run prediction
    # results = lang_sam_model.predict(
    #     images_pil=pil_images,
    #     texts_prompt=[text_prompt] * len(pil_images),
    #     box_threshold=box_threshold,
    #     text_threshold=text_threshold,
    #
    results = []
    # import pdb
    # pdb.set_trace()
    for i in range(len(image_paths)):
        # res = torch.load(f'/cluster/home/idemir/weekend_building/lang-segment-anything/lang_sam_results_{i+1}.pt', map_location='cpu')
        # res = np.load('/cluster/home/idemir/weekend_building/lang_sam_results_1.npz', allow_pickle=True)
        # res = res['arr_0'].item()
        res = {
            'masks': np.array(Image.open(f"/cluster/home/idemir/weekend_building/saved_masks/lang_sam_results_{i+1}.png").convert("L"))
        }
        results.append(res)


    # Extract and resize masks
    masks = []
    for i, result in enumerate(results):
        # Combine all masks for this image
        combined_mask = np.logical_or.reduce(result["masks"])

        # Resize mask to target size (448x448 for AnySplat)
        mask_pil = Image.fromarray(combined_mask.astype(np.uint8) * 255)


        mask_pil = mask_pil.resize((target_size[1], target_size[0]), Image.NEAREST)



        combined_mask = np.array(mask_pil) > 0
        masks.append(combined_mask)

    # Count non-empty masks
    non_empty = sum(1 for m in masks if m.sum() > 0)
    print(f"Found masks in {non_empty}/{len(masks)} images")

    return masks, pil_images


def project_gaussians_to_image(
    gaussians: Gaussians,
    extrinsic: torch.Tensor,
    intrinsic: torch.Tensor,
    image_shape: Tuple[int, int],
    batch_idx: int = 0
) -> Tuple[torch.Tensor, torch.Tensor]:
    """Project 3D gaussian positions to 2D pixel coordinates.

    Args:
        gaussians: Gaussian data structure
        extrinsic: [4, 4] camera extrinsic matrix (world to camera)
        intrinsic: [3, 3] camera intrinsic matrix
        image_shape: (height, width) of the image
        batch_idx: batch index to use

    Returns:
        pixel_coords: [N, 2] tensor of pixel coordinates (u, v)
        valid_mask: [N] boolean tensor indicating valid projections
    """
    # Get gaussian means
    points_3d = gaussians.means[batch_idx]  # [N, 3]
    num_gaussians = points_3d.shape[0]

    # Convert to homogeneous coordinates
    points_3d_homo = torch.cat([
        points_3d,
        torch.ones(num_gaussians, 1, device=points_3d.device)
    ], dim=1)  # [N, 4]

    # Transform to camera coordinates
    points_cam = (extrinsic @ points_3d_homo.T).T  # [N, 4]

    # Check if points are in front of camera
    valid_z = points_cam[:, 2] > 0

    # Project to image coordinates
    points_cam_3d = points_cam[:, :3]  # [N, 3]
    points_2d_homo = (intrinsic @ points_cam_3d.T).T  # [N, 3]

    # Dehomogenize
    points_2d = points_2d_homo[:, :2] / (points_2d_homo[:, 2:3] + 1e-8)  # [N, 2]

    # Check if points are within image bounds
    H, W = image_shape
    valid_u = (points_2d[:, 0] >= 0) & (points_2d[:, 0] < W)
    valid_v = (points_2d[:, 1] >= 0) & (points_2d[:, 1] < H)
    valid_bounds = valid_u & valid_v & valid_z

    return points_2d, valid_bounds


def filter_gaussians(
    gaussians: Gaussians,
    masks: List[np.ndarray],
    extrinsics: torch.Tensor,
    intrinsics: torch.Tensor,
    image_shape: Tuple[int, int],
    batch_idx: int = 0
) -> Gaussians:
    """Filter gaussians based on masks from all images.

    A gaussian is kept if it projects inside the mask region in AT LEAST ONE image.

    Args:
        gaussians: Original gaussians
        masks: List of [H, W] boolean masks for each image
        extrinsics: [batch, views, 4, 4] camera extrinsics
        intrinsics: [batch, views, 3, 3] camera intrinsics
        image_shape: (height, width) of images
        batch_idx: batch index

    Returns:
        filtered_gaussians: Filtered gaussians
    """
    print("Filtering gaussians based on masks...")

    masks = masks.squeeze()
    num_images = len(masks)
    num_gaussians = gaussians.means.shape[1]

    # Track which gaussians should be kept
    keep_mask = torch.zeros(num_gaussians, dtype=torch.bool, device=gaussians.means.device)

    # Process each image
    for view_idx in range(num_images):
        # Get camera parameters for this view
        extrinsic = extrinsics[batch_idx, view_idx]  # [4, 4]
        intrinsic = intrinsics[batch_idx, view_idx]  # [3, 3]
        mask = masks[view_idx]  # [H, W] boolean

        img = Image.fromarray((mask.cpu().numpy() * 255).astype(np.uint8))  # convert to 0–255 grayscale
        img.save(f'/cluster/home/idemir/weekend_building/output/resized_mask_{view_idx}.png')


        # Project all gaussians to this image
        pixel_coords, valid_mask = project_gaussians_to_image(
            gaussians, extrinsic, intrinsic, image_shape, batch_idx
        )

        # Find gaussians that land on masked pixels
        pixel_coords_int = pixel_coords.long()
        pixel_coords_int[:, 0] = torch.clamp(pixel_coords_int[:, 0], 0, image_shape[1] - 1)
        pixel_coords_int[:, 1] = torch.clamp(pixel_coords_int[:, 1], 0, image_shape[0] - 1)

        # Check if projected pixels are in mask
        mask = mask.to(valid_mask.device)
        valid_and_in_mask = valid_mask.clone()
        valid_and_in_mask[valid_mask] = mask[pixel_coords_int[valid_mask, 1], pixel_coords_int[valid_mask, 0]].to(valid_mask.device).bool()

        keep_mask |= valid_and_in_mask

    # Apply filter
    num_kept = keep_mask.sum().item()
    num_removed = num_gaussians - num_kept
    print(f"Keeping {num_kept} gaussians, removing {num_removed}")

    # Create filtered gaussians
    filtered_gaussians = Gaussians(
        means=gaussians.means[:, keep_mask],
        covariances=gaussians.covariances[:, keep_mask] if gaussians.covariances is not None else None,
        harmonics=gaussians.harmonics[:, keep_mask],
        opacities=gaussians.opacities[:, keep_mask],
        scales=gaussians.scales[:, keep_mask],
        rotations=gaussians.rotations[:, keep_mask],
    )

    return filtered_gaussians


def main():
    parser = argparse.ArgumentParser(description="Filter Gaussian Splatting based on text prompts")
    parser.add_argument(
        "--input_folder",
        type=str,
        default="/cluster/home/idemir/weekend_building/data",
        help="Folder containing input images"
    )
    parser.add_argument(
        "--text_prompt",
        type=str,
        default='pillow.',
        help="Text prompt for segmentation (e.g., 'table', 'person', 'car')"
    )
    parser.add_argument(
        "--output_folder",
        type=str,
        default="output_new_scene",
        help="Folder to save output gaussians"
    )
    parser.add_argument(
        "--box_threshold",
        type=float,
        default=0.3,
        help="Box threshold for GDINO detection"
    )
    parser.add_argument(
        "--text_threshold",
        type=float,
        default=0.25,
        help="Text threshold for GDINO detection"
    )
    parser.add_argument(
        "--device",
        type=str,
        default="cuda" if torch.cuda.is_available() else "cpu",
        help="Device to use (cuda or cpu)"
    )
    parser.add_argument(
        "--disable_voxelization",
        action="store_false",
        help="Disable voxelization to get one gaussian per pixel (more gaussians, simpler filtering)"
    )

    args = parser.parse_args()

    # Create output folder
    os.makedirs(args.output_folder, exist_ok=True)

    print("=" * 80)
    print("Gaussian Filtering Pipeline")
    print("=" * 80)
    print(f"Input folder: {args.input_folder}")
    print(f"Text prompt: {args.text_prompt}")
    print(f"Output folder: {args.output_folder}")
    print(f"Device: {args.device}")
    print("=" * 80)

    device = torch.device(args.device)

    # Step 1: Load images
    images, image_paths, masks = load_images(args.input_folder)
    b, v, c, h, w = images.shape

    # Step 2: Load AnySplat model and create gaussians
    print("\n[1/4] Loading AnySplat model...")
    model = AnySplat.from_pretrained("lhjiang/anysplat")

    # Disable voxelization if requested (for simpler pixel-per-pixel filtering)
    if args.disable_voxelization:
        print("Disabling voxelization for pixel-perfect gaussian mapping...")
        model.encoder.cfg.voxelize = False

    model = model.to(device)
    model.eval()
    for param in model.parameters():
        param.requires_grad = False

    print("[2/4] Creating Gaussian Splatting from images...")
    images_torch = images.to(device)
    gaussians, pred_context_pose = create_gaussians(model, images_torch, device)

    gaussians.means = gaussians.means.view(1,v,448,448,3)
    gaussians.opacities = gaussians.opacities.view(1,v,448,448)
    gaussians.harmonics = gaussians.harmonics.view(1,v,448,448,3,25)
    gaussians.rotations = gaussians.rotations.view(1,v,448,448,4)
    gaussians.scales = gaussians.scales.view(1,v,448,448,3)
    gaussians.covariances = gaussians.covariances.view(1,v,448,448,3,3)


    masks = ~(masks.bool().squeeze(2)) # .unsqueeze(0)
    filtered_gaussians = copy.deepcopy(gaussians)
    filtered_gaussians.means = filtered_gaussians.means[masks].unsqueeze(0)
    filtered_gaussians.opacities = filtered_gaussians.opacities[masks].unsqueeze(0)
    filtered_gaussians.harmonics = filtered_gaussians.harmonics[masks].unsqueeze(0)
    filtered_gaussians.rotations = filtered_gaussians.rotations[masks].unsqueeze(0)
    filtered_gaussians.scales = filtered_gaussians.scales[masks].unsqueeze(0)
    filtered_gaussians.covariances = filtered_gaussians.covariances[masks].unsqueeze(0)



    object_mask = ~masks
    object_gaussians = copy.deepcopy(gaussians)
    object_gaussians.means = object_gaussians.means[object_mask].unsqueeze(0)
    object_gaussians.opacities = object_gaussians.opacities[object_mask].unsqueeze(0)
    object_gaussians.harmonics = object_gaussians.harmonics[object_mask].unsqueeze(0)
    object_gaussians.rotations = object_gaussians.rotations[object_mask].unsqueeze(0)
    object_gaussians.scales = object_gaussians.scales[object_mask].unsqueeze(0)
    object_gaussians.covariances = object_gaussians.covariances[object_mask].unsqueeze(0)



    # Step 3: Load lang-segment-anything and extract masks
    print("[3/4] Loading lang-segment-anything model...")
    # lang_sam_model = LangSAM(device=args.device)

    # Extract masks and resize to match AnySplat output size (448x448)
    # masks, _ = extract_masks(
    #     image_paths,
    #     args.text_prompt,
    #     None,
    #     target_size=(h, w),
    #     box_threshold=args.box_threshold,
    #     text_threshold=args.text_threshold
    # )

    # Step 4: Filter gaussians based on masks
    print("[4/4] Filtering gaussians...")
    pred_all_extrinsic = pred_context_pose['extrinsic']
    pred_all_intrinsic = pred_context_pose['intrinsic']

    # filtered_gaussians = filter_gaussians(
    #     gaussians,
    #     masks,
    #     pred_all_extrinsic,
    #     pred_all_intrinsic,
    #     (h, w),
    #     batch_idx=0
    # )

    # Step 5: Save results
    print("\nSaving results...")

    # Save original gaussians
    original_ply = os.path.join(args.output_folder, "gaussians_original.ply")
    export_ply(
        gaussians.means[0].view(-1,3),
        gaussians.scales[0].view(-1,3),
        gaussians.rotations[0].view(-1,4),
        gaussians.harmonics[0].view(-1,3,25),
        gaussians.opacities[0].view(-1),
        Path(original_ply),
        save_sh_dc_only=True,
    )
    print(f"Saved original gaussians to {original_ply}")

    # Save filtered gaussians
    filtered_ply = os.path.join(args.output_folder, "gaussians_filtered.ply")
    export_ply(
        filtered_gaussians.means[0],
        filtered_gaussians.scales[0],
        filtered_gaussians.rotations[0],
        filtered_gaussians.harmonics[0],
        filtered_gaussians.opacities[0],
        Path(filtered_ply),
        save_sh_dc_only=True,
    )
    print(f"Saved filtered gaussians to {filtered_ply}")

    object_ply = os.path.join(args.output_folder, "gaussians_object.ply")
    export_ply(
        object_gaussians.means[0],
        object_gaussians.scales[0],
        object_gaussians.rotations[0],
        object_gaussians.harmonics[0],
        object_gaussians.opacities[0],
        Path(object_ply),
        save_sh_dc_only=True,
    )
    print(f"Saved object gaussians to {object_ply}")


    print("\n" + "=" * 80)
    print("Done!")
    print("=" * 80)


if __name__ == "__main__":
    main()

