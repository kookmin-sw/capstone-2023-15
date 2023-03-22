import urllib.request
'''
url = "https://i.seadn.io/gcs/files/93e2dd0a9fd852949598acf8f5c15c71.png?w=500&auto=format"
savelocation = "C:/Users/hyeondin/Desktop/b.png" #내컴퓨터의 저장 위치
urllib.request.urlretrieve(url, savelocation) #해당 url에서 이미지를 다운로드 메소드
'''
f = open('../link.txt', 'r')
num = 1
for url in f.readlines():
    url = url.replace("\n", "")
    savelocation = "../image/"  # 내컴퓨터의 저장 위치
    savelocation = savelocation + str(num)+'.png'
    urllib.request.urlretrieve(url, savelocation)  # 해당 url에서 이미지를 다운로드 메소드
    num+=1
    print(url, savelocation)
