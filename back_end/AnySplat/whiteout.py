import torch
import numpy as np
from plyfile import PlyData
from pathlib import Path
from src.model.ply_export import export_ply
# Load your ply
ply_path = Path("/cluster/home/idemir/weekend_building/gaussians-2.ply")
ply = PlyData.read(ply_path)
v = ply['vertex'].data

# Convert structured array to flat tensors
arr = np.vstack([v[a] for a in v.dtype.names]).T
arr_t = torch.from_numpy(arr)

# According to your export_ply: [means, zeros, f_dc, (maybe f_rest), opacities, log_scales, rotations]
# Adjust indexing if save_sh_dc_only=False
num_gaussians = v.size
means = arr_t[:, 0:3]
f_dc = arr_t[:, 6:9]  # RGB DC
opacities = arr_t[:, 9]  # after f_dc (verify index)
scales_log = arr_t[:, 10:13]
rotations = arr_t[:, 13:17]

# --- Filter condition ---
# Define "white" as roughly equal RGB and all channels bright
color_mean = f_dc.mean(dim=1)
color_std = f_dc.std(dim=1)
white_mask = (color_mean > 0.8) & (color_std < 0.05)
keep_mask = ~white_mask

print(f"Removing {white_mask.sum()} / {len(white_mask)} white Gaussians")

# --- Filter all fields consistently ---
means = means[keep_mask]
scales = scales_log.exp()[keep_mask]
f_dc = f_dc[keep_mask]
rotations = rotations[keep_mask]
opacities = opacities[keep_mask]

# Dummy harmonics: rebuild shape [N, 3, 25] if needed (fill DC + zeros)
harmonics = torch.zeros(len(f_dc), 3, 25)
harmonics[:, :, 0] = f_dc

# Dump back
out_path = Path("/cluster/home/idemir/weekend_building/gaussians-2_filtered.ply")
export_ply(
    means=means,
    scales=scales,
    rotations=rotations,
    harmonics=harmonics,
    opacities=opacities,
    path=out_path,
    shift_and_scale=False,
    save_sh_dc_only=True,
)
