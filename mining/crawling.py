from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# selenium을 통해서 chrome 부라우저의 새로운 창을 열기 위해서 현재 내가 사용하는 chrome 부라우저와 상응하는 chromedriver를 다운 받아서 사용
driver = webdriver.Chrome('/Users/chanhhoo/Desktop/workPlace/4-1class/capstone/chromedriver')

# 내가 크롤링 하고자 하는 링크
search = 'monkey'
driver.get('https://opensea.io/assets?search[toggles][0]=BUY_NOW&search[query]=' + search)

#opensea 사이트에서 크롤링 하고 싶은 search 항목 링크를 통해서 이름을 crawling해서 모음집을 만듬
def name():
    for i in range(100):
        driver.find_element_by_tag_name('body').send_keys(Keys.PAGE_DOWN)
        time.sleep(0.1)

    # selected = 클롱링 대상을 감싸고 있는 table css
    selected = driver.find_element_by_css_selector("#main > div > div > div > div > div.sc-29427738-0.sc-630fc9ab-0.iRxATS.jSPhMX > div.sc-29427738-0.jFfKPa > div.sc-29427738-0.dVNeWL > div")
    new_img_name = selected.find_elements_by_class_name('sc-29427738-0.sc-d58c749b-2.sc-8a71b60b-9.eNYnCu.heRZSz.hQWSjx') # 이름을 가지고 있는 span tag의 class이름을 통해서 접근

    #set함수로 중복 제거
    #crawling한 이름수만큼 for를 돌려서 모음집을 만듬
    collect = set()
    for i in range(0,len(new_img_name)):
        collect.add(new_img_name[i].text)

    return collect

if __name__=='__main__':
    collect = name()
    print(collect)

