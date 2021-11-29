---
layout: post
title: "websocket summary"
name: "mqtt-websocket"
tags: [webrtc]
tagName: webrtc
permalink: 2021-11-30-mqtt-websocket.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: web
keywords: "websocket webrtc mqtt socketio webserver"
summary: "Tue, Nov 30, 21, various ways of connection and setup instruction"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-11-30T05:28:58 +0900
updated: 2021-11-30 05:28
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

##  charlie0301

Socket.io, MQTT summary

## how it began

how to push data from a webserver to mobile app. There are various methods of pushing in this regard;
Long polling, web socket, socket.io, server side event, messaging queue.

## goal

> notification를 위해 요구되는 사항들로는
- Web server에서의 mobile app으로 push
- 100자 미만의 메세지 포함 가능
- 수초 정도의 delay 상관없음.
- client는 c/c++ 기반 mobile app


----------------------------------------------------------------------------------
### Socket.io
----------------------------------------------------------------------------------

Socket.io 관련해서 아주 좋은 글이 여기 있었음.

실시간 서비스 경험기(배달운영시스템), 우아한형제들 기술 블로그
: http://woowabros.github.io/woowabros/2017/09/12/realtime-service.html

너무 자세히 삽질하셨던 내용이 정리되어 이대로 따라가기만 해도 좋을 듯.
c/c++ 기반의 mobile app으로 server로 접속해야 하므로 client는 Socket.IO C++ client를 사용함.

Socket.IO C++ Client
: https://github.com/socketio/socket.io-client-cpp

일단 socket.io 서버에 접속하는 client는 c/c++ 기반의 app이므로
위 Socket.IO C++ Client를 사용해서 테스트 앱을 빌드 했음.

위 library는 Boost library를 사용하므로 windows에서 빌드해서 설치했음.
빌드하는데 시간이 상당히 소요되며 최신 boost library를 사용할 경우 일부 수정이 필요함.
하지만 mobile platform이 boost library를 가지고 있다면 빌드해서 사용할 필요는 없겠지만 필요하다면 boost.asio 및 관련 header와 library들을 추출해서 사용해야 할 듯 하다.

언급한 boost 컴파일을 위해 수정한 부분을 적어 두었는데.. 날라가서 기억을 못하겠음.


그리고 Socket.io 사용 시 connection이 어떻게 될지 궁금해서 일단 테스트를 해봄.
Node.js + Socket.IO C++ Client 로 laptop(i5-6200U@2.30GHz, 8G)에서 naive하게 테스트를 해봄.

Node.js에서는 connection & ping 수신 log만 찍고
Socket.IO C++ client에서는 300개 connection을 만들고 10초 마다 10자리 내의 문자열과 함께 ping을 보냄.

이상하게 client에서 300개 이상을 보내게 되면 boost에서 exception이 발생해서 테스트 앱에서 300개 정도로 connection을 제한하고 test app을 하나씩 증가시키며 테스트 해봄.

laptop의 resource 한계로 인해 대략 6300개 정도의 connection(client 21개)이 연결되고 ping을 받는 것을 확인하긴 하였지만 뭐 거의 의미 없는 테스트니.. 그냥 참고만.

글구 실제 6300개 connection과 ping을 받는 node.js 서버의 경우 동작에 무리가 있어 제대로 동작한다고는 보기는 어려웠음. client들을 종료할 때 disconnection callback 처리도 거의 1분 정도 소요 되었음.. 하지만 실제 cloud 기반의 server들을 붙여서 테스트 해야 할 것 같음.

그래도 Connection을 지속적으로 유지하며 disconnect 되었을 때 다시 연결한다는 점에서는 적절한 notification을 위해 사용하기에는 괜찮아 보임.
다만 socket.IO가 boost.asio를 사용하고 raw socket보다는 사용하기 무겁다는 것과 connection 수가 단점이 되지 않을까 생각됨.


---------------------------------------------------------------------------------
### MQTT
---------------------------------------------------------------------------------


MQTT 관련 글들.

MQTT 설명
: https://www.joinc.co.kr/w/man/12/MQTT/Tutorial
: http://charlie0301.blogspot.kr/search?q=mqtt


MQTT 적용을 통한 중계시스템 개선, 우아한형제들 기술 블로그
: http://woowabros.github.io/experience/2017/08/11/ost_mqtt_broker.html

MQTT 프로토콜 분석과 테스트
: http://www.hardcopyworld.com/ngine/aduino/index.php/archives/2562

mosquitto를 windows 설치하기 위해서는 좀 까다롭다.
아래 블로그 참조.
: http://blog.naver.com/PostView.nhn?blogId=cjc07&logNo=220441942108&parentCategoryNo=&categoryNo=&viewDate=&isShowPopularPosts=false&from=postView

단 openssl 설치 시 좀 예전 버전을 설치해야 함.
처음에 Win32OpenSSL_Light-1_1_0h를 설치하였으나 원하는 파일들이 없어서 Win32OpenSSL_Light-1_0_2o를 설치하여 찾음.


Eclipse Paho MQTT C client
: https://github.com/hallower/paho.mqtt.c

마찬가지 이유로 c/c++ 기반의 app이므로 Paho MQTT C client를 사용함.
빌드를 하다보니 openssl을 사용해야 하는것 같은데 그냥 환경 설정하기 귀찮아서 주석처리하여 빌드함.

근데 Paho MQTT C client를 사용해서 복수의 connection을 생성하여 connect할 때마다 기존 것들에서 connection lost가 발생함. connection, connection option들을 모두 각각 사용하여 각 connection들이 상관이 없을 텐데.
sync sample, async sample들을 각각 테스트 해봐도 2개 이상 connection을 생성하면 앞의 connection이 connection lost 발생.. 원인을 모르겠음. 이것저것 바꿔보고 했지만 소용이 없었음.

그래서 Mosquitto와 함께 빌드된 mosquitto_sub를 windows shell script로 여러개를 실행하도록 하였는데 600개 정도를 만들다가 mosquitto server가 죽어버린다.
windows에서 connection 제약이 1024개 정도 된다고 하던데 그 이유는 아닌것 같고 심지어 subscribe 하는 간격을 1초 마다 시도해도 600개를 넘어서지 못한다.

하지만 600개를 만들면서 cpu 사용이나 메모리는 상당히 낮은 편이다. subscribe client의 footprint가 작아서 그런지 모르겠지만..

찾다 보니 mosquitto에서 1024개 이상 센싱 데이터를 처리할 경우 에러가 발생했다는 논문 문구가 있었음.
출처 : http://www.engineeringcode.net/1045


혹시나 몰라 test.mosquitto.org를 대상으로 subscribe를 시도해봤는데 하나의 IP에서 10개 정도의 connection을 제한하는 것처럼 보인다. 11개 이상을 subscribe할 경우 서버에서 연결을 거부한다.


### 그래서 mosca로 테스트 해봄.
: https://github.com/mcollina/mosca

mosca로 테스트 해보니 5300개 정도 subscribe하니 cpu, memory가 거의 full이 되어 더이상 subscribe, publish가 어렵다. 그래도 mosquitto보다는 훨씬 잘 동작하는 것 같음.
그리고 mosca를 standalone broker로 실행하여 테스트 한것이고 node.js와 함께 실행한 것은 아님.

MQTT는 별도의 broker를 준비해야한다는 점이 좀 단점이지만 pub-sub 구조의 형태 인점이 notification을 전달하기 위해 사용하기는 편리할것으로 보임.



그리고 이건 혹시나 나중에 사용할 지 몰라 남겨둠.

@echo off
echo ==============================
echo subscribe test
echo ==============================
echo.

for /L %%i in (1,1,1000) do call :sss %%i

pause>nul

:sss
  echo %~1
  START /B mosquitto_sub.exe -t csk

  set /a sum=%~1%%10
  if %sum% equ 0 (
 echo "sleep"
 ping 127.0.0.1 -n 2 > nul
  )


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
