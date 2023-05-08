from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

import requests
import time
import subprocess

def name(search):
    # selenium을 통해서 chrome 부라우저의 새로운 창을 열기 위해서 현재 내가 사용하는 chrome 부라우저와 상응하는 chromedriver를 다운 받아서 사용
    options = Options()
    options.add_argument('headless')
    options.add_argument('window-size=1920x1080')
    options.add_argument("user-agent=Chrome/88.0.4324.150")
    driver = webdriver.Chrome('C:\chromedriver\chromedriver.exe',options=options)
    driver.delete_all_cookies()

    # 내가 크롤링 하고자 하는 링크
    driver.get('https://opensea.io/assets?search[toggles][0]=IS_LISTED&search[query]=' + search)

    # 이전 커서 위치
    cursor_location_prev = driver.execute_script("return window.pageYOffset")

    while True:
    #for i in range(3):
        driver.delete_all_cookies()
        body = driver.find_element(By.TAG_NAME, 'body')
        body.send_keys(Keys.PAGE_DOWN)
        time.sleep(5.0)

        # 현재 커서 위치
        cursor_location_current = driver.execute_script("return window.pageYOffset")

        #이전 커서 위치와 현재 커서 위치가 같으면 끝까지 내렸다는 의미
        if cursor_location_prev == cursor_location_current:
            break

        #이전 커서 위치값을 현재 커서 위치의 값으로 바꿈
        cursor_location_prev = cursor_location_current


    selected = driver.find_element(by = By.CSS_SELECTOR, value = "#main > div > div > div > div > div.sc-29427738-0.sc-630fc9ab-0.iRxATS.jSPhMX > div.sc-29427738-0.jFfKPa > div.sc-29427738-0.dVNeWL > div")

    img_href = selected.find_elements(by = By.TAG_NAME, value = 'a')

    img_collection_name = []
    href = []

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
    print(info['image'], info['name'])
    #info_name.write(info['name']+',')
    #f.write(info['image']+'\n')
    return info['image'], info['name']


# 현재 파이썬 파일이 실행 중일 때 다음 파일을 실행시키기 위한 함수
def run_next_file(next_file):
    subprocess.run(['python', next_file])
