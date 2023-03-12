from PIL import Image # convert modul
import pillow_avif # for read avif
import os

root_path = "../statics/convert_image"

avif_file = os.listdir(root_path + "/avif")

for file in avif_file:
    file_name = file.split(".")[0]
    old_image_path = root_path + "/avif/{}.avif".format(file_name)
    with Image.open(old_image_path) as im:
        new_image_path = root_path + "/png/{}.png".format(file_name)
        im.save(new_image_path)