import urllib.request
import multiprocessing, time
import os
from PIL import Image
'''
url = "https://i.seadn.io/gcs/files/93e2dd0a9fd852949598acf8f5c15c71.png?w=500&auto=format"
savelocation = "C:/Users/hyeondin/Desktop/b.png" #내컴퓨터의 저장 위치
urllib.request.urlretrieve(url, savelocation) #해당 url에서 이미지를 다운로드 메소드
'''
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

def try_download_from_link(url, savelocation):
    urllib.request.urlretrieve(url, savelocation)  # 해당 url에서 이미지를 다운로드 메소드


if __name__ == "__main__":
    f = open('../link.txt', 'r')
    check_file()
    num = 1

    for url in f.readlines():
        url = url.replace("\n", "")
        manager = multiprocessing.Manager()
        savelocation = "../image/"  # 내컴퓨터의 저장 위치
        savelocation = savelocation + str(num)+'.png'

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
                print(url, savelocation)
                check_size(num)
                p1.join()
                p.kill()
                break

        num+=1

# 이미지를 모두 다운받은 후, 이미지를 검사해야 할 듯
# 안그러면 모두 다운 받기 전 검사를 해서, 그대로 통과가 됨