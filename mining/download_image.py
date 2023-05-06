import urllib.request
import multiprocessing, time
import os
import json
from collections import OrderedDict
import get_image
from PIL import Image
'''
url = "https://i.seadn.io/gcs/files/93e2dd0a9fd852949598acf8f5c15c71.png?w=500&auto=format"
savelocation = "C:/Users/hyeondin/Desktop/b.png" #내컴퓨터의 저장 위치
urllib.request.urlretrieve(url, savelocation) #해당 url에서 이미지를 다운로드 메소드
'''
info_name = []  # 작품 이름
info_address = [] # 작품 주소
collection_title = [] # 컬랙션 이름
download_url = [] # 컬랙션 url
collection_id = [] # token_id

def check_file():
    dir_path =  '../image'
    if os.path.isdir(dir_path) == False:
        os.mkdir(dir_path)

def check_time():
    time.sleep(5.0)

def check_size(num):
    import os

    path = '../image/'+str(num)+'.png'
    file_size = os.path.getsize(path)
    if file_size >= 1048576:
        os.remove(path)
        return True
    else:
        return False

def try_download_from_link(url, savelocation):
    urllib.request.urlretrieve(url, savelocation)  # 해당 url에서 이미지를 다운로드 메소드

if __name__ == "__main__":
    #f = open('../link.txt', 'r')
    #info_name = open('../infomation.txt', 'r')

    json_information=OrderedDict()
    file_path = "../metadata.json"
    search = ['monkey']
    for search_name in search:
        href, collection_name = get_image.name(search_name)
        # url = 'https://api.opensea.io/api/v2/metadata/ethereum/0xed5af388653567af2f388e6224dc7c4b3241c544/1'
        num = 0
        for url in href:
            unit = str(url).split('/')[4]
            address = str(url).split('/')[5]
            id = str(url).split('/')[6]
            image_url = 'https://api.opensea.io/api/v2/metadata/' + unit + '/' + address + '/' + id
            download_var, info_name_var = get_image.get_image(image_url)
            info_address.append(url)
            collection_id.append(id)
            collection_title.append(collection_name[num])
            info_name.append(info_name_var)
            download_url.append(download_var)
            num += 1

        print(len(info_address))
        print(info_address)
        print(len(collection_id))
        print(collection_id)
        print(len(collection_title))
        print(collection_title)
        print(download_url)

    check_file()
    num = 1
    filenames = []

    #작가정보
    json_information['0000000'] = {'client_email':'latte@gmail.com','collection_name' : 'Mr.KIM'}

    for i in range(0,len(download_url)):
        print(download_url[i])
        url = download_url[i]
        manager = multiprocessing.Manager()
        savelocation = "../image/"  # 내컴퓨터의 저장 위치
        filename = f"{num:07d}"
        savelocation = savelocation + filename+'.png'

        p = multiprocessing.Process(target=check_time)
        p1 = multiprocessing.Process(target=try_download_from_link, args=(url,savelocation))
        p.start()
        p1.start()

        while True:
            if not p.is_alive():
                p.join()
                p1.kill()
                break
            elif not p1.is_alive():
                art_name = info_name[i]
                collection_name = collection_title[i]
                token_id = collection_id[i]
                art_address = info_address[i]
                if collection_name != json_information['0000000']['collection_name']:
                    json_information[filename] = {'image_name':art_name, 'collection_name':collection_name, 'token_id':token_id, 'art_address':art_address}
                    filenames.append(filename)
                    print(url, savelocation)
                    num += 1
                p1.join()
                p.kill()
                break

    # with open(file_path, 'w') as outfile:
    #     json.dump(json_information, outfile, indent=4)

    for i in filenames:
        print(i)
        judge = check_size(i)
        if judge == True:
            del json_information[i]

    with open(file_path, 'w') as outfile:
        json.dump(json_information, outfile, indent=4)

# 이미지를 모두 다운받은 후, 이미지를 검사해야 할 듯
# 안그러면 모두 다운 받기 전 검사를 해서, 그대로 통과가 됨