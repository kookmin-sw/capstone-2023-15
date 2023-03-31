from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import requests
import time
import urllib.request
import subprocess

f = open('../link.txt', 'w')

def name():
    # selenium을 통해서 chrome 부라우저의 새로운 창을 열기 위해서 현재 내가 사용하는 chrome 부라우저와 상응하는 chromedriver를 다운 받아서 사용
    driver = webdriver.Chrome('C:\chromedriver\chromedriver.exe')

    # 내가 크롤링 하고자 하는 링크
    #search = 'monkey%20power'
    #search = 'fly%20dog'
    search = 'fight%20pig'
    driver.get('https://opensea.io/assets?search[toggles][0]=BUY_NOW&search[query]=' + search)

    # 이전 커서 위치
    cursor_location_prev = driver.execute_script("return window.pageYOffset")
    while True:
        driver.find_element_by_tag_name('body').send_keys(Keys.PAGE_DOWN)
        time.sleep(2.0)

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

    href = []

    # 아이콘 뱃찌가 없는 nft만 crawling : try-except 이용
    for i in range(0,len(img_href)):
        try:
            a = img_href[i].find_element_by_tag_name('svg')
        except:
            if str(img_href[i].get_attribute('href'))!='None':
                href.append(img_href[i].get_attribute('href'))

    driver.close()
    return href

def get_image(url,num):
    headers = {"Accept": "application/json"}
    response = requests.request("GET", url, headers=headers)
    info = eval(response.text.split(',')[0]+"}")
    print(info['image'])
    f.write(info['image']+'\n')

# 현재 파이썬 파일이 실행 중일 때 다음 파일을 실행시키기 위한 함수
def run_next_file(next_file):
    subprocess.run(['python', next_file])

if __name__=='__main__':
    href = name()
    #url = 'https://api.opensea.io/api/v2/metadata/ethereum/0xed5af388653567af2f388e6224dc7c4b3241c544/1'
    num = 1
    for url in href:
        unit = str(url).split('/')[4]
        address = str(url).split('/')[5]
        id = str(url).split('/')[6]
        image_url = 'https://api.opensea.io/api/v2/metadata/'+unit+'/'+address+'/'+id
        get_image(image_url,num)
        num+=1
    f.close()

    # 현재 파이썬 파일이 완료되면 실행할 파일 이름
    next_file = "download_img.py"

    # 현재 파이썬 파일이 완료되면 다음 파일 실행
    run_next_file(next_file)


#173개 2분 20초
