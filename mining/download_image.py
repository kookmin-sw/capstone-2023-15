# %pip install selenium

import urllib.request
import multiprocessing, time
import os
import json
from collections import OrderedDict
import get_image
import shutil
import glob
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
    dir_path =  './image'
    if os.path.isdir(dir_path) == True:
        shutil.rmtree(dir_path)
    if os.path.isdir(dir_path) == False:
        os.mkdir(dir_path)


def check_time():
    time.sleep(7.0)

def check_size(num):
    import os

    path = './image/'+str(num)+'.png'
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
    search = []
    file_path = "./metadata.json"
    print("Please enter the search keyword(up to 5)")

    # 키워드 검색
    for num in range(5):
        keyword = input("Please enter search keyword(s) (1-5 keywords, enter 'q' to exit): ")
        if keyword == 'q':
            break
        search.append(keyword)

    # client 고객 정보 입력
    client_email = input("Please enter the client email : ")
    client_collection_name = input("Please enter the collection name : ")
    json_information['0000000'] = {'client_email': client_email, 'collection_name': client_collection_name}

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
            if str(download_var) != '[]' and str(info_name_var) !='[]':
                print(download_var, info_name_var)
                info_address.append(url)
                collection_id.append(id)
                collection_title.append(collection_name[num])
                info_name.append(info_name_var)
                download_url.append(download_var)
                num += 1

    #         print(len(info_address))
    #         print(info_address)
    #         print(len(collection_id))
    #         print(collection_id)
    #         print(len(collection_title))
    #         print(collection_title)
    #         print(download_url)

    check_file()
    num = 1
    num2 = 1
    filenames = []
    print('------download start------')
    for i in range(0,len(download_url)):
        url = download_url[i]
        manager = multiprocessing.Manager()
        savelocation = "./image/"  # 내컴퓨터의 저장 위치
        #filename = f"{num:07d}"
        filename = str(num)
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
        #print(i)
        judge = check_size(i)
        if judge == True:
            print('del : ' + str(i))
            del json_information[i]


    png_files = [f for f in os.listdir('./image') if f.endswith('.png')]
    for file in png_files:
        filename = f"{num2:07d}"
        old_name = './image/'+file
        new_name = './image/'+filename+'.png'
        json_information[filename] = json_information.pop(file.split('.')[0])
        os.rename(old_name,new_name)
        num2+=1

    with open(file_path, 'w') as outfile:
        json.dump(json_information, outfile, indent=4)


# 이미지를 모두 다운받은 후, 이미지를 검사해야 할 듯
# 안그러면 모두 다운 받기 전 검사를 해서, 그대로 통과가 됨
