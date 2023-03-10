import zipfile
import os

def createDirectory(directory= "zip_data"):
    try:
        if not os.path.exists(directory):
            os.makedirs(directory)
    except OSError:
        print("Error: Failed to create the directory.")

def unzip_file(author):
    path_to_zip_file = './zip_data/' + author + '.zip'
    directory_to_extract_to = './' + author + 'data/'
    with zipfile.ZipFile(path_to_zip_file, 'r') as zip_ref:
        zip_ref.extractall(directory_to_extract_to) 
