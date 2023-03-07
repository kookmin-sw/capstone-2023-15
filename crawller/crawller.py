import urllib.request
from bs4 import BeautifulSoup as bs

url = 'https://opensea.io/collection/mutant-ape-yacht-club'
h = {"User-Agent": "Mozilla/5.0"}

req = urllib.request.Request(url,headers=h) # 403 forbidden 해결을 위해서 header를 따로 넣어서 우회함
a=urllib.request.urlopen(req)

html_text = a.read().decode('utf-8')
html = bs(html_text, 'html.parser')
for title in html.find_all('div', {'class':'slick-slide slick-active'}):
    print (title)