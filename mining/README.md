# How to use
1. 자신의 chrome 버전에 맞는 chrome driver를 다운로드 합니다.
2. get_image.py에 있는 driver 변수에 자신이 다운로드 받은 chrome driver 실행파일 경로를 입력합니다.

    ex)```python driver = webdriver.Chrome('C:\chromedriver\chromedriver.exe')```
3. 자신이 검색하고 싶은 키워드를 get_image.py에 있는 search 변수에 입력해줍니다.

    ex) ```python search = 'pig'```
    
    주의할점 : 키워드에 띄어쓰기를 입력하고 싶은 경우 단어와 단어 사이에 %20을 넣어주세요.

    ex) ```search = 'fight%20pig'```
4. get_image.py 파일을 실행시킵니다.
