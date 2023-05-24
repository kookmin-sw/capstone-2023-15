# ThreeF: FIND FAKE NFT

<div align="center">
  <a href="https://www.threef.xyz/">
    <img src="/statics/try-button.svg" width="400" height="100"/>
   </a>
</div>  

![01](https://user-images.githubusercontent.com/54926467/229353868-a178cd9a-7a6f-4f61-85fb-1531f600c250.png)

## 1. 프로젝트 소개 

- 서비스 타겟 : NFT 를 운영하는 회사( 혹은 작가 ), NFT 구매 희망자
- 서비스 목표 : NFT를 운영하는 회사나 작가를 대상으로, 자신이 소유한 컬렉션의 작품이 도용되었는지 파악하고 플랫폼에 판매 중지를 요청하는 대리 서비스를 제공합니다.

![process](/statics/process.png)

### 서비스 프로세스 : 
![service-process](https://user-images.githubusercontent.com/54926467/229354937-e515afb7-a8ec-4aaa-a6f7-56afff718c1d.png)
1. 작가의 요청을 받습니다. 작가는 홈페이지에 접속하여 구글폼을 통해 자신의 정보와 학습용 데이터를 제공합니다. 이 때, 이용 동의서를 받습니다.
2. 제공받은 학습용 데이터를 기반으로 모델을 학습시킵니다.
3. 데이터 마이닝을 통해 특정된 마켓플레이스에서 검사 가능한 컬렉션과 유사하다고 판단한 이미지를 모델에 전송합니다.
4. 입력받은 이미지는 모델에서 검사되어 유사도를 판별합니다.
5. 검사 결과를 웹페이지에 공개합니다. 이는 작가와 협의를 통해 결과를 오픈할지 말지 결정됩니다.
6. 판매 중지를 요청합니다. 마켓플레이스에 판매 중지 요청에 대한 메일을 전송하여 작가의 작품이 도용되는 것을 방지합니다.

## 2. 소개 영상

## 3. 팀 소개 

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

## 4. 사용법 
### 공통
```
git clone https://github.com/kookmin-sw/capstone-2023-15.git
```

### Frontend 

```
cd front
yarn
yarn start
```

### AI_Model

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


## Modified based on the official code : https://github.com/alinlab/CSI

## Document
<div align="center">
  <a href="https://kookmin-sw.github.io/capstone-2023-15/">
    <img src="https://user-images.githubusercontent.com/54926467/229354423-0f9ee204-2541-4bb9-bbd2-bd308b0876d7.png" width="150" height="150"/>
   </a>
  <a href="https://www.notion.so/1ec58d3ee3e443108ee23c9ffbeb89b7?v=98cf90e1a6d5475da32bad06eb82a150&pvs=4">
    <img src="https://user-images.githubusercontent.com/54926467/229354654-5741b51f-7c6d-4af1-a396-bf65c1bef318.png" width="150" height="150"/>
  </a>
</div>  
