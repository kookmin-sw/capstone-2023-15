from PIL import Image # convert modul
import pillow_avif # for read avif
import os

root_path = "../statics/convert_image"

# get file list
avif_file = os.listdir(root_path + "/avif")

for file in avif_file:

    # get file name without type
    file_name, type = file.split(".")

    if type == "avif":
        old_image_path = root_path + "/avif/{}.avif".format(file_name)

        # open avif file
        with Image.open(old_image_path) as png_image:
            new_image_path = root_path + "/png/{}.png".format(file_name)
            # save png file
            png_image.save(new_image_path)
    else:
        print("{} is not avif type. only allow avif type.".format(file))
