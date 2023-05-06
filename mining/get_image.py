from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import requests
import time
import subprocess

#f = open('../link.txt', 'w')
#info_name = open('../infomation.txt','w')
#
# info_name = []  # 작품 이름
# info_address = [] # 작품 주소
# collection_title = [] # 컬랙션 이름
# download_url = [] # 컬랙션 url
# collection_id = [] # token_id
def name(search):
    # selenium을 통해서 chrome 부라우저의 새로운 창을 열기 위해서 현재 내가 사용하는 chrome 부라우저와 상응하는 chromedriver를 다운 받아서 사용
    driver = webdriver.Chrome('C:\chromedriver\chromedriver.exe')
    driver.delete_all_cookies()

    # 내가 크롤링 하고자 하는 링크
    #search = 'monkey'
    #search = 'fly%20dog'
    #search = 'fight%20pig'
    #driver.get('https://opensea.io/assets?search[toggles][0]=BUY_NOW&search[query]=' + search)
    driver.get('https://opensea.io/assets?search[toggles][0]=IS_LISTED&search[query]=' + search)

    # 이전 커서 위치
    cursor_location_prev = driver.execute_script("return window.pageYOffset")

    while True:
    #for i in range(5):
        driver.delete_all_cookies()
        driver.find_element_by_tag_name('body').send_keys(Keys.PAGE_DOWN)
        time.sleep(3.0)

        # 현재 커서 위치
        cursor_location_current = driver.execute_script("return window.pageYOffset")
        #이전 커서 위치와 현재 커서 위치가 같으면 끝까지 내렸다는 의미
        if cursor_location_prev == cursor_location_current:
            break

        #이전 커서 위치값을 현재 커서 위치의 값으로 바꿈
        cursor_location_prev = cursor_location_current

    # selected = 클롱링 대상을 감싸고 있는 table css
    selected = driver.find_element_by_css_selector("#main > div > div > div > div > div.sc-29427738-0.sc-630fc9ab-0.iRxATS.jSPhMX > div.sc-29427738-0.jFfKPa > div.sc-29427738-0.dVNeWL > div")

    img_href = selected.find_elements_by_tag_name('a')
    #new_img_name = selected2.find_elements_by_class_name('sc-29427738-0.sc-d58c749b-2.sc-512feba2-5.eNYnCu.heRZSz.jzhRQA')  # 이름을 가지고 있는 span tag의 class이름을 통해서 접근

    #class ="sc-29427738-0 sc-d58c749b-2 sc-e1aced9b-5 eNYnCu heRZSz iIApyQ"
    #class ="sc-29427738-0 sc-d58c749b-2 sc-512feba2-5 eNYnCu heRZSz jzhRQA"
    #class="sc-29427738-0 sc-d58c749b-2 sc-512feba2-5 eNYnCu heRZSz jzhRQA"

    img_collection_name = []
    href = []

    # 아이콘 뱃찌가 없는 nft만 crawling : try-except 이용
    for i in range(0,len(img_href)):
        try:
            a = img_href[i].find_element_by_tag_name('svg')
        except:
            if str(img_href[i].get_attribute('href'))!='None':
                collection_name = img_href[i].find_elements_by_tag_name('span')
                href.append(img_href[i].get_attribute('href'))
                img_collection_name.append(collection_name[2].text)

    driver.close()
    return href, img_collection_name

def get_image(url):
    print(url)
    headers = {"Accept": "application/json"}
    response = requests.request("GET", url, headers=headers)
    info = eval(response.text.replace("null","[]"))
    print(info['image'], info['name'])
    #info_name.write(info['name']+',')
    #f.write(info['image']+'\n')
    return info['image'], info['name']


# 현재 파이썬 파일이 실행 중일 때 다음 파일을 실행시키기 위한 함수
def run_next_file(next_file):
    subprocess.run(['python', next_file])

# if __name__=='__main__':
#     search = ['fly%20dog']
#     for search_name in search:
#         href,collection_name = name(search_name)
#         #url = 'https://api.opensea.io/api/v2/metadata/ethereum/0xed5af388653567af2f388e6224dc7c4b3241c544/1'
#         num=0
#         for url in href:
#
#             unit = str(url).split('/')[4]
#             address = str(url).split('/')[5]
#             id = str(url).split('/')[6]
#             image_url = 'https://api.opensea.io/api/v2/metadata/'+unit+'/'+address+'/'+id
#             download_var, info_name_var = get_image(image_url)
#             info_address.append(url)
#             collection_id.append(id)
#             collection_title.append(collection_name[num])
#             info_name.append(info_name_var)
#             download_url.append(download_var)
#             num+=1
#
#         print(len(info_address))
#         print(info_address)
#         print(len(collection_id))
#         print(collection_id)
#         print(len(collection_title))
#         print(collection_title)
#         print(download_url)
#
#
#     # 현재 파이썬 파일이 완료되면 실행할 파일 이름
#     next_file = "download_img.py"
#
#     # 현재 파이썬 파일이 완료되면 다음 파일 실행
#     run_next_file(next_file)

# infoamtion 파일 : 작품이름, 컬랙션 이름, token_id
#173개 2분 20초
# span tag로 정보 가져올 수 있는지 확인
# json파일로 바로 만들수는 없는지