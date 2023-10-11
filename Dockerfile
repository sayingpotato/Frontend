FROM node:18
# 앱 디렉토리 생성
RUN mkdir -p /home/app
WORKDIR /home/app

# 앱 소스 코드 복사
COPY . /home/app/

# 앱 종속성 설치 및 빌드
RUN npm install
RUN npm run build

# 포트 3000 노출
EXPOSE 3000

# 앱 실행
CMD npm run start

