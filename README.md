# ThreeF - FIND FAKE NFT
### 쉽게 찾고, 쉽게 지키자. - ThreeF로 내 NFT를 안전하게 보호하세요! 
    
<div align="center">
  <img width=79% src="https://github.com/ShimHyerin/ThreeF/assets/54926467/9b8ef283-8fa1-4cf6-ac64-be4172ffe2ec"/>
  <a href="https://www.threef.xyz/">
    <img width=20% src="https://github-production-user-asset-6210df.s3.amazonaws.com/54926467/240581788-728e8413-9163-446c-87b6-b9cfda692d6a.png" />
  </a>
</div>  

<br/><br/>

## <img width=25 src="https://github.com/ShimHyerin/ThreeF/assets/54926467/f749620d-10b9-463a-956d-b43ee6726e27"> 프로젝트 개요 | Project Abstract
**ThreeF - Find Fake nFt :** NFT organization을 위한, NFT 도용 사건 방지 AI 솔루션


이 프로젝트는 NFT organization을 대상으로 하는 서비스를 제공합니다. 목표는 NFT를 운영하는 회사나 작가가 자신이 소유한 컬렉션의 작품이 도용되었는지 파악하고 플랫폼에 판매 중지를 요청하는 대리 서비스를 제공하는 것입니다. 본 프로젝트는 AI 모델을 활용합니다. 학습된 모델은 NFT 마켓플레이스의 open API를 사용하여 데이터 마이닝을 수행하고, 클라이언트의 NFT와 유사한 NFT를 탐지하여 의심되는 데이터를 수집합니다. 이후 모방 NFT로 판단되는 작품들을 식별하기 위해 AI를 활용합니다. 모방 NFT로 판단된 작품들은 해당 작품을 판매 중인 웹 사이트에 대리로 판매 중지 요청을 진행합니다. 또한, 데이터 마이닝된 모방 NFT에 대한 정보는 클라이언트에게 제공됩니다. 이를 통해 클라이언트는 모방 NFT에 대한 정보와 추후 조치에 대해 인식할 수 있습니다. 본 프로젝트는 NFT organization을 위한 혁신적인 서비스로서, NFT 도용 탐지와 판매 중지 요청 등을 대리로 수행함으로써 NFT 소유자들의 권익을 보호합니다.

<br/>

**ThreeF - Find Fake nFt :** AI solutions to prevent NFT theft for NFT organizations


This project provides a service targeted at NFT organizations. The goal is to provide a service for NFT organizations or artists running NFTs to identify if a piece in their collection has been stolen and request the platform to stop selling it. The project utilizes an AI model. The trained model uses the NFT marketplace's open API to perform data mining, detecting NFTs that are similar to the client's NFTs and collecting suspicious data. We then utilize AI to identify artworks that we believe to be scam-copycat NFTs. The artworks that are determined to be scam-copycat NFTs will be removed from sale by proxy to the websites selling them. In addition, information about the data-mined scam-copycat NFTs will be provided to the client. This allows the client to be aware of the information about the scam-copycat NFTs and follow-up actions. This project is an innovative service for NFT organizations that protects the rights and interests of NFT owners by detecting NFT theft and making stop-sale requests on their behalf.

<hr/>
<br/>

## 📘 주요 기능 | Key Features
### 🔹 AI 기술로 모방 NFT 검거 | Arrested imitative NFTs with AI technology
AI기술로 모방 NFT를 찾아 소중한 NFT 저작권을 지킬 수 있습니다.
<br/>AI technology can find imitation NFTs and protect precious NFT copyrights.
### 🔹 간편하게 확인하는 검사 결과 | Easy inspection results
진행 상황부터 모방 의심 NFT 개수까지 검사 결과를 한 눈에 확인하고 저장할 수 있습니다.
<br/>Check and save inspection results at a glance, from progress to the number of suspected imitation NFTs.
### 🔹 NFT 판매 중단 요청 대리 서비스 | NFT sales suspension request agency service
모방작을 보는것도 불쾌한데, 직접 중단 요청까지? 마켓플레이스에 직접 판매 중단을 요청하는 복잡한 절차를 없애 불편함을 해소했습니다.
<br/>Eliminate inconvenience by eliminating the complexity of requesting a marketplace to stop selling directly.

<hr/>
<br/>

## 📁 아키텍처 | Architecture
<img width="1060" alt="image" src="https://github.com/ShimHyerin/ThreeF/assets/54926467/8a911517-72e6-4172-affb-458852255329">


<br/>

## 📁 서비스 프로세스 | Sevice Process 
![process](https://github.com/ShimHyerin/ThreeF/assets/54926467/2ff86bd8-9ecf-43f7-a106-d975fa080fdc)
1. 클라이언트의 요청을 받습니다. 클라이언트는 홈페이지에 접속하여 자신의 정보 및 데이터를 제공합니다. <br/> _*이 때, 약관동의가 포함됩니다._
2. 제공받은 데이터를 기반으로 모델을 학습합니다.
3. 데이터 마이닝을 통해 특정된 마켓플레이스에서 검사 가능한 컬렉션과 유사하다고 판단한 이미지를 모델에 전송합니다.
4. 모델로 모방 NFT를 판단한 뒤, 검사 결과를 웹과 이메일을 통해 제공합니다.
5. 마켓플레이스에 판매 중지를 요청합니다.

<br/>

1. Receive a request from a Client. The Client accesses the homepage and provides their information and data. <br/> _*This includes agreeing to the terms and conditions._
2. Train a model based on the data provided.
3. Send the model images that it determines through data mining to be similar to collections available for inspection on a given marketplace.
4. The model determines the scam-copycat NFTs and provides the results of the inspection via web and email.
5. Request the marketplace to stop the sale.

<hr/>
<br/>

## 🖥 웹 구성 | Web Configuration
|Main|Cases|
|:-:|:-:|
|<img width="1700" alt="image" src="https://github.com/ShimHyerin/ThreeF/assets/54926467/35477867-35b7-460a-b3de-5de336b260bc"> |![May-24-2023 16-58-59](https://github.com/ShimHyerin/ThreeF/assets/54926467/7593166d-03f5-4ec9-947e-5e87dbca67de) ![May-24-2023 17-00-08](https://github.com/ShimHyerin/ThreeF/assets/54926467/4cbf827c-8958-47c7-a9a3-4991c427efd9)|


|Introduction|Intro-Value|Intro-Process|
|:-:|:-:|:-:|
|![May-24-2023 17-00-35](https://github.com/ShimHyerin/ThreeF/assets/54926467/7ec910f7-bbdf-4e1e-b151-4a3123abdb5e)|<img width="640" alt="image" src="https://github.com/ShimHyerin/ThreeF/assets/54926467/805db25d-da67-44a6-9985-47055ec18db2"> |![May-24-2023 17-01-12](https://github.com/ShimHyerin/ThreeF/assets/54926467/4186a5e9-d38a-486b-86c5-081c1ec26201)|

|Check email|Results|
|:-:|:-:|
|![May-24-2023 17-03-14](https://github.com/ShimHyerin/ThreeF/assets/54926467/a3706d75-1a5c-4f89-ab61-94c6e12f406e)|![May-24-2023 17-06-36](https://github.com/ShimHyerin/ThreeF/assets/54926467/3b699eda-652c-4c8f-a4ec-f6b35e464e24)|

<hr/>
<br/>

## 🧠 인공지능 | AI
<div>
  <img width="43%" alt="image" src="https://github.com/kookmin-sw/capstone-2023-15/assets/54926467/cca3a008-82c1-458f-ad9c-96e929220424">
  <img width="55%" alt="image" src="https://github.com/kookmin-sw/capstone-2023-15/assets/54926467/5a2c35f8-e227-4512-80ca-ebb141b37666">
</div>
 One-class Novelty Detection 방법론을 활용하여, 서비스를 신청한 클라이언트가 생성한 NFT들만을 통한 학습을 실시합니다.<br/>
 Utilizing a one-class Novelty Detection methodology, it only learns from NFTs created by clients who have applied for the service.

<hr/>
<br/>

## 📃 결과 | Result
<h4>✅  2번의 테스트와, 1번의 실제 서비스 진행하여 <span style="background: #2880e3; color: white; border-radius: 1px;">91%</span>의 정확도를 얻어냈습니다. </h4>

```
Test 1     : 42개의 악성 이미지 중  38개 감지 (38/42)
Test 2     : 20개의 악성 이미지 중  16개 감지 (16/20)
Service 1  :  5개의 악성 이미지 중   5개 감지 (5/5)
```

#### ✅  실제 판매중인 NFT Collection <[Quokkas-World](https://opensea.io/collection/quokkas-world)>로 서비스 제공
```
1. Quokkas-World 는 1020장의 이미지 중 40장이 판매중인 상태다. 1020장은 모두 학습용 데이터로 사용되었다.
   Quokkas-World has 1020 images, of which 40 are for sale. All 1020 images were used as training data.
2. 마이너는 같은 Collection에 대해 68개의 이미지를 찾았다. 이 중 악성 이미지가 5개 포함되어 있다.
   The miner found 68 images for the same collection, including 5 malicious images.
3. AI는 5개의 악성 이미지 중 5개를 모두 악성 이미지로 판단했다.
   The AI determined that all 5 of the 5 malicious images were malicious.  
4. 5개의 도용 의심 NFT의 판매 중단을 요청했다.
   Requested that the 5 suspected stolen NFTs be removed from sale.
```

<hr/>
<br/>

## 🧑🏻‍💻 팀 소개 | Introduction of team members

- 김찬호[팀장]
> - 학번 : ****1601
> - position : Infra, BE, PM
> - Email : hpyho33@kookmin.ac.kr

- 안상호 
> - 학번 : ****1639
> - position : AI
> - Email : do753951@kookmin.ac.kr

- 임현진
> - 학번 : ****1684
> - position : AI, Data Mining
> - Email : hyeonjin0622@kookmin.ac.kr

- 심혜린
> - 학번 : ****1620
> - position : FE, UI & UX
> - Email : nier8702@kookmin.ac.kr

<hr/>
<br/>

## 🔎 실행 방법 | Execution method
**Common**
```
git clone https://github.com/kookmin-sw/capstone-2023-15.git
```
<details>
<summary><b>Frontend</b></summary>

```
cd front
yarn
yarn start
```
</details>

<details>
<summary><b>AI_Model</b></summary>

```
pip install boto3
pip install python-detenv
pip install opencv-python
```

- Train

``` 
python train.py --dataset ours --model resnet18 --mode simclr_CSI --shift_trans_type rotation --batch_size 32 --one_class_idx 0
```

- Evaluation

```
python caps_runner.py
```


#### Modified based on the official code : https://github.com/alinlab/CSI

</details>

<details>
<summary><b>Miner</b></summary>

1. install chrome driver for your env
2. input your chromedriver path in get_image.py

    ex)``` driver = webdriver.Chrome('C:\chromedriver\chromedriver.```
    
3. run download_image.py 
4. input 5 keyword at most

``` 
python3 download_image.py
Please enter search keyword(s) (1-5 keywords, enter 'q' to exit) : quokka
Please enter search keyword(s) (1-5 keywords, enter 'q' to exit): q
...
```
5. input email and collection name

``` 
Please enter the client email : awesome@gmail.com
Please enter the collection name : QuQuQu
```
6. 프로그램이 종료되면 image파일(검증 데이터)과 metadata.json(검증 데이터 정보)파일이 생성되게 됩니다.
</details>
  
<hr/>
<br/>

## 🗂 문서 | Document
<div align="center">
  <a href="https://kookmin-sw.github.io/capstone-2023-15/">
    <img src="https://user-images.githubusercontent.com/54926467/229354423-0f9ee204-2541-4bb9-bbd2-bd308b0876d7.png" width="150" height="150"/>
   </a>
  <a href="https://www.notion.so/1ec58d3ee3e443108ee23c9ffbeb89b7?v=98cf90e1a6d5475da32bad06eb82a150&pvs=4">
    <img src="https://user-images.githubusercontent.com/54926467/229354654-5741b51f-7c6d-4af1-a396-bf65c1bef318.png" width="150" height="150"/>
  </a>
</div>  

<div align="center">
  <a href="https://www.threef.xyz/">
    중간 발표
  </a>
  | 
  <a href="https://www.threef.xyz/">
    최종 발표
  </a>
  |
  <a href="https://www.threef.xyz/">
    시연 동영상
  </a>
  | 
  <a href="https://www.threef.xyz/">
    수행 보고서
  </a>
<div/>
  
<details>
<summary> <h4>포스터<h4/> </summary>
<img src="https://github.com/ShimHyerin/ThreeF/assets/54926467/9ce29bd4-fad2-4458-93d5-92ef2220ef38"/>
</details>
