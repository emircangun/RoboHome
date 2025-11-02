from PIL import Image
from lang_sam import LangSAM
import torch
import numpy as np

model = LangSAM()

for i in range(1, 12):
    image_pil = Image.open(f"/cluster/home/idemir/weekend_building/new_scene/{i}.jpeg").convert("RGB")
    text_prompt = "suitcase."
    results = model.predict([image_pil], [text_prompt])
    # torch.save(results, f'lang_sam_results_{i}.pt')
    # np.savez(f'lang_sam_results_{i}.npz', **results[0])

    try:
        img = Image.fromarray((results[0]['masks'][0] * 255).astype(np.uint8))  # convert to 0–255 grayscale
        img.save(f'/cluster/home/idemir/weekend_building/new_scene_masks/lang_sam_results_{i}.png')
    except:
        ## create all 0 mask with same size as input image
        img = Image.new('L', image_pil.size, 0)
        img.save(f'/cluster/home/idemir/weekend_building/new_scene_masks/lang_sam_results_{i}.png')
        continue
        
    img = Image.fromarray((results[0]['masks'][0] * 255).astype(np.uint8))  # convert to 0–255 grayscale
    img.save(f'/cluster/home/idemir/weekend_building/new_scene_masks/lang_sam_results_{i}.png')


print('DONE')