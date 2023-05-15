from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import requests
import time

def name():
    driver = webdriver.Chrome('C:\chromedriver\chromedriver.exe')

    driver.get('https://opensea.io/assets?search[toggles][0]=BUY_NOW&search[query]=fly%20dog')
    cursor_location_prev = driver.execute_script("return window.pageYOffset")
    while True:
        driver.find_element_by_tag_name('body').send_keys(Keys.PAGE_DOWN)
        time.sleep(2.0)
        cursor_location_current = driver.execute_script("return window.pageYOffset")

        if cursor_location_prev == cursor_location_current:
            break

        cursor_location_prev = cursor_location_current

        # selected = 클롱링 대상을 감싸고 있는 table css
    selected = driver.find_element_by_css_selector("#main > div > div > div > div > div.sc-29427738-0.sc-630fc9ab-0.iRxATS.jSPhMX > div.sc-29427738-0.jFfKPa > div.sc-29427738-0.dVNeWL > div")
    img_href = selected.find_elements_by_tag_name('a')

    href = []
    for i in range(0,len(img_href)):
        #if str(img_href[i].get_attribute('href')) != "None":
        href.append(img_href[i].get_attribute('href'))

    driver.close()
    return href

def get_image(url):
    headers = {"Accept": "application/json"}
    response = requests.request("GET", url, headers=headers)
    info = eval(response.text.split(',')[0]+"}")
    print(info['image'])

if __name__=='__main__':
    href = name()
    #url = 'https://api.opensea.io/api/v2/metadata/ethereum/0xed5af388653567af2f388e6224dc7c4b3241c544/1'
    for url in href:
        print(url)

