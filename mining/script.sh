#!/bin/bash

# 검증을 위한 정보 입력
# read -p "요청한 클라이언트의 이메일 : " client_email

# 이미지 압축을 위한 명령어 설정
compression_command="zip images.zip"

# 이미지 디렉토리 경로
image_dir="../image"

# 이미지 디렉토리로 이동
cd "$image_dir"

# 이미지 디렉토리에서 확장자가 .png인 모든 파일을 찾아서 이미지 압축 명령어에 추가
for image_filename in *.png
do
    compression_command+=" ${image_filename}"
done

# 이미지 파일들 압축
$compression_command

# a.py 파일 실행
emailModule_dir="../mining"
cd "$emailModule_dir"

python3 sendEmail.py