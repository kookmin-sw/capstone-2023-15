# How to use
1. 자신의 chrome 버전에 맞는 chrome driver를 다운로드 합니다.
2. get_image.py에 있는 driver 변수에 자신이 다운로드 받은 chrome driver 실행파일 경로를 입력합니다.

    ex)``` driver = webdriver.Chrome('C:\chromedriver\chromedriver.```
3. download_image.py 파일을 실행시킵니다.
4. 1~5개의 keyword를 입력하고 q를 누릅니다.

    ex)``` Please enter search keyword(s) (1-5 keywords, enter 'q' to exit) : quokka```

    ex)``` Please enter search keyword(s) (1-5 keywords, enter 'q' to exit): q```
5. 의뢰한 client의 email과 collection name을 입력합니다.

    ex)``` Please enter the client email : awesome@gmail.com```       
    
    ex)``` Please enter the collection name : QuQuQu```
6. 프로그램이 종료되면 image파일(검증 데이터)과 metadata.json(검증 데이터 정보)파일이 생성되게 됩니다.
