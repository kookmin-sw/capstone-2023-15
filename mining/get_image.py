# %pip install selenium

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import requests
import time
import subprocess

def name(search):
    # selenium을 통해서 chrome 부라우저의 새로운 창을 열기 위해서 현재 내가 사용하는 chrome 부라우저와 상응하는 chromedriver를 다운 받아서 사용
    options = Options()
    options.add_argument('headless')
    options.add_argument('window-size=1920x1080')
    options.add_argument("user-agent=Chrome/88.0.4324.150")
    driver = webdriver.Chrome('./chromedriver.exe',options=options)
    #driver = webdriver.Chrome('C:\chromedriver\chromedriver.exe')
    driver.delete_all_cookies()

    # 내가 크롤링 하고자 하는 링크s
    driver.get('https://opensea.io/assets?search[toggles][0]=IS_LISTED&search[query]=' + search)
    # 이전 커서 위치
    cursor_location_prev = driver.execute_script("return window.pageYOffset")

    total_image = driver.find_elements(By.TAG_NAME, 'p')[1].text.split(' ')[0]
    img_count = 0
    if total_image=='':
        total_image = 0
    
    print('total image num : ' + total_image)
        
    while True:
    #for i in range(3):
        driver.delete_all_cookies()
        body = driver.find_element(By.TAG_NAME, 'body')
        body.send_keys(Keys.PAGE_DOWN)
        time.sleep(0.5)

        img_count = len(driver.find_elements(By.TAG_NAME, 'img'))
        print('현재 이미지 수 : ' + str(img_count))

        # 현재 커서 위치
        cursor_location_current = driver.execute_script("return window.pageYOffset")

        #이전 커서 위치와 현재 커서 위치가 같으면 끝까지 내렸다는 의미
        # 예외 처리 - 전체 이미지 수 > 현재 이미지 수 : 1. 30 초동안 계속 기다리면서 이미지가 갱신되기를 기다림, 이미지가 갱신되면 if문을 빠져나옴. 기다림에도 갱신되지 않는다면 종료
        if cursor_location_prev == cursor_location_current:
            if img_count<int(total_image):
                print('waiting....img_count<int(total_image)')
                prev_image_count = img_count
                check = 0
                for j in range(30):
                    time.sleep(1.0)
                    current_image_count = len(driver.find_elements(By.TAG_NAME, 'img'))
                    if prev_image_count<current_image_count:
                        check=1
                        break
                if check == 0:
                    print('bad end')
                    break
            else:
                print('good end')
                break

        #이전 커서 위치값을 현재 커서 위치의 값으로 바꿈
        cursor_location_prev = cursor_location_current
        
    img_collection_name = []
    href = []
    if int(total_image) > 0 :
        selected = driver.find_element(by = By.CSS_SELECTOR, value = "#main > div > div > div > div > div.sc-29427738-0.sc-630fc9ab-0.gcOzSb.bNkKFC > div.sc-29427738-0.iLWtP > div.sc-29427738-0.cKdnBO > div")

        img_href = selected.find_elements(by = By.TAG_NAME, value = 'a')


        # 아이콘 뱃찌가 없는 nft만 crawling : try-except 이용
        for i in range(0,len(img_href)):
            try:
                a = img_href[i].find_element(by = By.TAG_NAME,value = 'svg')
            except:
                if str(img_href[i].get_attribute('href'))!='None':
                #   collection_name = img_href[i].find_elements_by_tag_name('span')
                    collection_name = img_href[i].find_elements(by = By.TAG_NAME,value = 'span')
                    href.append(img_href[i].get_attribute('href'))
                    img_collection_name.append(collection_name[2].text)

    driver.close()
    return href, img_collection_name

def get_image(url):
    print(url)
    headers = {"Accept": "application/json"}
    response = requests.request("GET", url, headers=headers)
    info = eval(response.text.replace("null","[]"))
    #print(info['image'], info['name'])
    #info_name.write(info['name']+',')
    #f.write(info['image']+'\n')
    return info['image'], info['name']


# 현재 파이썬 파일이 실행 중일 때 다음 파일을 실행시키기 위한 함수
def run_next_file(next_file):
    subprocess.run(['python', next_file])




