# 가져올 이미지를 정의
FROM node:16 AS builder
# 경로 설정하기
WORKDIR /usr/src/front-end
# package.json 워킹 디렉토리에 복사 (.은 설정한 워킹 디렉토리를 뜻함)
ENV PATH /usr/src/front-end/node_modules/.bin:$PATH
COPY package.json /usr/src/front-end/package.json
# 명령어 실행 (의존성 설치)
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

# 소스를 작업폴더로 복사하고 빌드
COPY . /usr/src/front-end
RUN npm run build

FROM nginx:1.22.1
# nginx의 기본 설정을 삭제하고 앱에서 설정한 파일을 복사
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

# 위에서 생성한 앱의 빌드산출물을 nginx의 샘플 앱이 사용하던 폴더로 이동
COPY --from=builder /usr/src/front-end/build /usr/share/ngin$ brew install awscli
x/html

# 80포트 오픈하고 nginx 실행
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]