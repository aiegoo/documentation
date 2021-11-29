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

**REF**
[mqtt_websocket](mydoc_webrtc.html)

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

{{site.data.alerts.details}}

### 양방향바인딩
angularjs의 양방향 바인딩을 뜻 하며 뷰의 데이터가 변하면 모델이 자동으로 변경되고 반대로 모델이 변하면 뷰도 자동으로 변경되는 특징을 말합니다.

Digest Loop
angularJS에서 모델 변화를 감지하는 역할을 하여 양방향 데이터 바인딩을 적용하는 역할을 합니다. angularjs1.0의 성능적인 면에서 단점으로 작용하기도 하지만 개별 모델의 one-time bind 설정을 통하여 양방향 바인딩이 필요없는 모델을 제외 할 수 있습니다.

### Websocket
웹브라우저는 http 프로토콜로 요청/응답으로 동작하는데 TCP/IP socket 처럼 connection이 유지되어 서로 실시간으로 통신을 할수 없습니다. 그래서 등장한것이 wswebsocket 프로토콜입니다. websocket을 사용하면 웹브라우저에서도 socket 통신처럼 실시간으로 데이터를 주고 받을 수 있습니다. 최근에는 대부분의 브라우저가 websocket 프로토콜을 지원하지만 IE 같은 경우는 version 10 부터 지원을 하고 있습니다.

### Socket.io
nodejs 기반으로 실시간 이벤트 서버를 개발 할 수 있는 오픈소스 라이브러리 입니다. 특징으로는 멀티 디바이스(web, android, ios, windows)를 지원하며 websocket을 지원하지 않는 browser도 지원합니다.

### 시스템구성
* PHP API server
* AngularJS(1.0) front-end
* Socket.Io (NodeJs websocket open source library)
* Redis
* Sql server(MS)

![order-delivery-activity](https://user-images.githubusercontent.com/42961200/143954359-569ff135-38f6-4ef1-a192-d5b3aedabbda.png)

> AngularJS 양방향 바인딩과 Socket.io를 이용한 실시간 데이터 동기화
주문과 배달의 생성 상태변경이 있을 때 마다 socket.io 실시간 이벤트를 전송하고 수신 시 api를 호출하여 배달리스트를 갱신하는 방식은 데이터의 변경이 있는 경우만 database를 select하지만 피크시간대에는 이벤트가 증가하므로 database select가 급증하게 됩니다. angularjs model 변경은 angularjs가 알아서 뷰에 반영하기 때문에 실시간 이벤트를 송수신 할 때 마다 배달리스트를 호출 하지 않고 배달데이터를 생성 삭제 수정 한 후 실시간 이벤트 메시지로 angularjs model에 반영 하도록 하면 뷰는 자동으로 실시간 반영 됩니다. 또한 개발자는 뷰를 업데이트하는 비즈니스로직을 신경쓸 필요가 없고 데이터를 뷰에 나타나는 로직만 구성해 놓으면 됩니다.

![angularjs-model](https://user-images.githubusercontent.com/42961200/143954410-bc18d6fb-13cd-4557-af98-c3a61dfc9fb6.png)

1.Controller – 실시간 이벤트 수신

```javascript
angular.module('bros').controller('bros.dlvrymgmt.common.DlvryMgmtCommCtrl', [
  'bros.dlvrymgmt.common.realTimeDlvryService',
  'bros.dlvrymgmt.common.Delivery','SktIo', '$scope',
    function(realTimeDlvryService, Delivery, SktIo, $scope) {
        // 배달데이터 객체를 모델에 binding 이제 뷰와 모델은 양방향 바인딩이 된다!!
        $scope.delivery = Delivery;
        /**[소켓이벤트수신] 배차 생성 (상태는 대기와 동일)*/
        SktIo.on('delivery:create', function (err, delivery) {
            realTimeDlvryService.onCreate(err, delivery);
        });
        /**[소켓이벤트수신] 배차대기*/
        SktIo.on('delivery:waiting', function (err, delivery) {
            realTimeDlvryService.onWaiting(err, delivery);
        });

       ........
```
2.Service – 수신받은 데이터를 배달 객체에 반영

```javascript
angular.module('bros').factory('bros.dlvrymgmt.common.realTimeDlvryService', [
    'bros.dlvrymgmt.common.Delivery','$resource',
    function(DlvryMgmtCommModel, Delivery){
        var realTimeDlvryService = ;
        /**신규배달 처리*/
        realTimeDlvryService.onCreate = function (err, delivery) {
            Delivery.of(delivery);
        };
        /* 배차대기 처리*/
        realTimeDlvryService.onWaiting = function (err, delivery) {
            Delivery.setResource(delivery);
        };
        return realTimeDlvryService;
}]);

```

3.Model – 배달 모델 객체를 변경

```javascript
angular.module('bros').service('bros.dlvrymgmt.common.Delivery', ['$filter',
    function($filter) {
        var Delivery = this;
        var instance = ;
        /**객체 초기화*/
        Delivery.init = function () {
            return angular.copy(instance, Delivery);
        };
        /**배달객체생성*/
        Delivery.of = function (delivery) {
            angular.extend(Delivery, delivery);
        };
        /**배달데이터 변경 반영*/
        Delivery.setResource = function(delivery) {
            $filter('setResource')(Delivery.items, delivery);
        };
        angular.copy(this, instance);
    }
]);
```
3.Model – 배달 모델 객체를 변경

```javascript
angular.module('bros').service('bros.dlvrymgmt.common.Delivery', ['$filter',
    function($filter) {
        var Delivery = this;
        var instance = ;
        /**객체 초기화*/
        Delivery.init = function () {
            return angular.copy(instance, Delivery);
        };
        /**배달객체생성*/
        Delivery.of = function (delivery) {
            angular.extend(Delivery, delivery);
        };
        /**배달데이터 변경 반영*/
        Delivery.setResource = function(delivery) {
            $filter('setResource')(Delivery.items, delivery);
        };
        angular.copy(this, instance);
    }
]);
```
> 맞닥뜨려야했던 이슈들
angularjs와 socket.io 서버를 이용하여 database select를 최소화 하고 주문, 배달 및 라이더 위치를 실시간으로 관제하고 배차업무를 할 수 있도록 시스템을 구성하고 실시간으로 눈앞에 데이터들이 화면 갱신 없이 변경이 되고 있었지만 가만히 화면만 바라보고 있을 때는 큰 문제가 없는 듯 하였습니다.

"그러나 browser는 열일 하고 있는 중……"

- Browser의 성능
실시간으로 화면이 렌더링 되는 것은 사실 아무런 문제가 없었습니다. 하지만 피크시간인 저녁시간에 배달 건수가 급격히 늘어나기 시작하면서 배차를 위해 라이더리스트 다이얼로그를 클릭한다던지 했을 때 0.5초 정도 움찔하는 delay가 발생하였습니다. 사용자 입장에서는 꽤나 신경이 거슬리는 이슈였습니다.

요구사항으로 배달완료된 배달건도 리스트에 남기고 당일 모든 배달건(많을 때는 1000건)을 현황에 리스팅 해달라는 요구가 있었습니다. 물론 타협으로 최근 4시간 배달건만 리스팅 하기로 하였지만 피크시간대에는 수백건의 배달을 페이징없이(실시간리스트라 페이징은…) 리스팅 되고 있었습니다.

일반적인 초기 화면 진입 이후 뷰의 렌더링이 거의 없는 정적인 페이지와 달리 BROS의 배달/라이더 현황 페이지들 javascript가 실시간으로 이벤트를 수신받고 모델에 반영하고 뷰를 렌더링하고…… 쉴 새 없이 일을 하고 있었습니다. 그래서 성능최적화 작업에 들어갔습니다.

- 모든 loop를 native for로 변경
forEach, angular.foreach등으로 된 loop를 제거하고 순수 javascript의 역행 루프reversed loop로 변경하였습니다. 배열의 개수가 적을 때는 크게 상관 없지만 수백 수천개가 되면 그 때는 이야기가 다릅니다.

```javascript
// length를 지역 변수에 미리 선언(매번확인하지 않는다), 루프 순서를 역으로 
for (var i = delivery.length-1; i >= 0; i--) {
    // for문 내부에 배열을 지역변수에 할당
    var deliveryItem = delivery[i];
    deliveryItem.deliveryStatus = "pickup";
};

```
- for (var i = delivery.length-1; i >= 0; i–) 루프 순서를 역으로 하면 조건문을 0 즉, false로 평가하게 하여 속성검색(조건문 비교)을 최소화하는 효과를 얻는다.
- for (var i = delivery.length;i >= 0; 배열의 크기를 미리 할당 해놓아 배열을 크기를 매번 확인하지 않는다.
- var deliveryItem = delivery[i] 배열을 미리 지역변수에 할당 해놓고 deliveryStatus 연산시 참조 하면 delivery[i].status, delivery[i].shopName 처럼 매번 배열을 검색하지 않는다.

> setTimeout을 사용하여 로직을 큐로 넘긴다.
javascript는 단일 쓰레드로 동작하며. 먼저 수행된 작업이 끝날 때 까지 다음작업은 대기하게 됩니다. 무거운 작업이 있다면 당연히 사용자는 delay를 느끼게 되고. 이러한 점을 해결 하기 위해 setTimeout을 이용하여 작업을 실행하면 javascript engine에서 UI 작업 큐로 작업은 넘겨 지게 되고 event loop가 큐의 쌓여 있는 task들을 처리 하게 됨으로써 blocking이 감소하여 좀더 성능향상을 시킬 수 있습니다. JAVASCRIPT Event Loop 링크

```javascript

 setTimeout(function () {
   Rider.updatePosition(position);
 },0)  

```

> Angular ng-repeat loop 사용시 조합 index key를 사용.
ng-repeat은 콜렉션을 looping하여 뷰에 리스팅 하는 angularjs의 커스텀 attribute(directive)입니다. 리스팅된 데이터는 digest loop가 양방양 데이터 바인딩을 위하여 관리하는 모델 데이터 들이며 데이터 개수가 많을 수록 digest loop의 성능이 떨어지게 됩니다. 그래서 리스트의 각 항목 업소명, 배달상태, 배달주소.. 등등의 데이터는 onetime binding으로 digest loop를 가볍게 하고 배달번호+수정일시가 조합된 index key의 변경 감지만으로 뷰를 자동 갱신하게 됩니다.

```html
 <tr ng-repeat="deliveryItem in delivery | track by (deliveryItem.deliverySeq+deliveryItem.modDate)">
    <td ng-bind="::deliveryItem.shopName"></td>
    <td ng-bind="::deliveryItem.status"></td>
    <td ng-bind="::deliveryItem.riderName"></td>
 </tr>  
```
> App 처럼 화면에 나타나는 리스트만 렌더링
v-repeat이라는 angularjs용 오픈소스 모듈을 사용하여 scroll up & down 할때 화면에 나타나는 tr을 렌더링하고 사라지는 tr은 제거 되도록 처리 하여 리스트가 개수가 수백 수천이 되더라도 화면에 보이는 데이터 모델만 존재 하게 되어 실질적으로 digest loop가 관리하는 모델의 개수가 현저하게 줄어드는 효과를 낼 수 있었고 실제로 성능 향상에 제일 큰도움이 되었습니다.

> Web Worker 사용을 고려 하였으나 결국은 미적용…
javascript 실행을 메인쓰레드가 아닌 백그라운드쓰레드에서 처리하게 할 수 있게 하여 무거운 작업의 경우 백그라운드 쓰레드가 처리함으로써 기존 단일쓰레드에 비해서 성능향상을 이점을 얻을 수 있습니다.

angularjs의 digest loop를 web worker가 처리 하도록 하고 싶었으나 digest loop를 건드리는 일은 angularjs framework core를 건드리는 일이 되어 버리므로 결국 적용을 포기하였습니다 (가장 아쉬운 부분이기도 합니다.)

> 실시간 이벤트 서버의 안정성
사용료를 지불하고 바로 사용할 수 있는 유료 서비스들이 존재합니다. 대표적으로 pubnub, pusher 같은 서비스가 대표적이며 websocket서버를 직접 개발할 필요없이 사용 할 수 있는 장점이 있습니다. 반면에 장애나 이슈 발생시 즉각적인 처리가 어렵다는 단점도 분명 존재합니다. 실제로 BROS 2.0도 유료 서비스를 사용하다. 장애나 오류 발생시 즉각적인 대응이 어려워 결국은 websocket 서버를 개발하여 사용하고 있습니다.

"유료서비스를 사용할 것인가 직접 만들것 인가의 선택은 여건과 상황에 따라 달라 질 수 있습니다."

> 실시간 이벤트 유실
websocket server는 client와 서버 간에 http protocol로 커넥션을 초기에 맺고 wswebsocketprotocol로 upgrade한 후 서로에게 heartbeat를 주기적으로 발생시켜 커넥션이 유지되고 있는지 체크하며 네트워크를 유지합니다.

socket.io를 사용하여 websocket 서버를 개발 했지만 비즈니스로직 문제가 아닌 다양한 network 상황 때문에 이벤트 유실이 발생 했습니다.

라이더분들이 반지하로 음식배달을 가면 LTE가 잘 안 터지는 문제도 발생했다. Mobile network 환경은 24시간 시 분 초 connected 상황은 아닐 수도 있다.

업무용 폰은 테더링을 사용하는 라이더들도 있었기 때문에…..

발생하는 건수는 매우 적은 수준이였지만 BROS 서비스의 특성상 1건이라도 누락이 발생하면 배달업무에 차질이 생기기 때문에 필수적으로 이벤트 유실에 대한 보완이 필요했습니다 . (유료 서비스도 마찬가지로 발생하는 이슈)

이벤트 유실을 보완하기 위해 RabbitMq같은 메시지 큐를 사용하여 이벤트를 발송하는 것도 고려 하였으나 BROS 서비스의 특성상 시간이 지난 이벤트를 수신 받게 되거나 한참이 지난후 한꺼번에 미수신된 이벤트를 수신받게 되면 잘못된 데이터가 반영될 수도 있는 문제가 발생하게 되고 그 문제해결을 위해 복잡한 로직을 추가하게 되면 오히려 파생되는 문제가 더 생길 것으로 판단하였고 되도록이면 근본적인 해결책을 찾기로 하였습니다.

> 브로드 캐스팅
cron job을 사용하여 2분에 1번씩 batch proccess 한곳에서 만 배달 데이터를 select 하여 database 부하를 줄이면서socket.io 실시간 이벤트로 브로드캐스팅을 하도록 하고 client는 수신받은 데이터로 유실이 발생한 배달 리스트를 fetch 하는 것으로 이벤트 누락에 대한 데이터 미변경을 보완 하였고 적용 이후에는 데이터 미변경에 대한 문제가 보고 되지 않았습니다.(더 좋은 방법도 분명 있을 겁니다.)

![websocket-broadcasting](https://user-images.githubusercontent.com/42961200/143957075-c45cd059-0118-409c-a7f7-ef76be37d0a5.png)

Websocket 서버 다운상황에 대비
어느 순간이나 서버가 다운되면 안되지만 만약에 다운이 된다면 심각한 장애를 초래하게 됩니다. 실시간 서비스를 개발한다면 항상 염두해 두어야 하는 이슈 입니다. BROS1.0은 socket.io server로의 연결이 disconnect가 되면 바로 api 직접 호출로 변경이 되고 설정해둔 주기만큼 reconnection을 시도 하도록 되어 있으며 reconnection이 성공하면 api 직접호출은 중단키시고 실시간 이벤트수신으로 swiching 되도록 개발 되어 있습니다. 더 좋은 방법은 메소드들을 추상화 하고 2개이상의 실시간 이벤트 서버를 switching 할 수 있으면 더욱 안정적인 시스템이 될 수 있을 것이란 생각도 해봅니다.

실시간 이벤트 서버socket.io
이제 실시간 서비스를 위해 필수 적으로 필요한 websocket서버에 대한 이야기를 해보고자 합니다. 앞서 잠시 언급 하였지만 서버자체를 구축할 필요없이 유료로 이용할 수 있는 서비스들이 많이 존재합니다. 유료서비스의 장점은 개발과 운영에 대한 리소스가 들지않고 사용할 수 있다는 장점이 있습니다. 하지만 이슈 발생시 빠른 대처가 어렵다는 단점도 분명 존재합니다. 직접 서버를 개발하거나 유료 서비스를 이용하거나 하는 선택은 여러가지 상황에 따라 판단해야 할 듯 싶습니다. 그리고 서버를 직접 개발 하고 안정적인 상태로 유지하기 까지 생각보다 기술 적인 learning curve 높은 편이며 서버가 안정적인 상태까지 올라오기 위해서는 실제로 운영을 해봐야 한다는 어려움도 존재합니다. socket.io 서버를 개발 하면서 겪었던 여러가지 경험에 대해서 이야기 하려고 합니다. 이야기할 내용은 socket.io 서버에만 국한된 이야기라기 보다 websocket 서버를 개발한다면 아마도 동일하게 겪어야 될 경험이라고 생각됩니다.

용어설명
Namespace & Room & Event
socket.io에서 트래픽을 격리하여 구분하는 단위로 사용됩니다 event는 명칭 그대로 송/수신하는 이벤트의 이름입니다. 트래픽격리 구분없이 이벤트를 송/수신하면 이벤트 리스너를 등록하여 이벤트를 처리하는 코드가 존재하지 않더라도 접속한 모든 client에 전송 및 수신을 하게 됩니다. 불필요한 트래픽이 발생하게 되고 서버 자체의 성능도 저하되기 때문에 적절한 설계로 구분해아합니다.

Cluster
nodejs는 기본적으로 싱글 프로세스로 동작하며 서버 CPU Core 수 만큼 proccess 생성하여 multi proccess로 구동하기 위해서는 cluster를 이용하여 proccess를 생성하게 됩니다.

multi thread는 thread간 데이터를 공유되지만 multi processing은 데이터공유가 되지 않는 특징이 있다.

그래서 특별한 처리들을 구현해야 한다.

Master & Worker
nodejs cluster 를 이용하여 proccess를 생성하면 실제 일을 수행하는 proccess를 worker 라고 하며 worker들을 제어하는 역할을 하는 proccess를 master라고 부릅니다.

Socket.io를 선택한 이유
socket.io는 앞서 말한것 처럼 websocket을 지원하지 않는 브라우저도 지원합니다. websocket을 지원하지 않는 브라우저에서는 flashsocket, htmlfile, xhr-polling, jsonp-polling등의 적절한 방식으로 전환되어 통신합니다. (최근에는 버전업이 되면서 websocket, polling만 지원하는 것으로 변경 되었습니다.)

flashsocket같은 경우는 브라우저에 flash가 설지되어 있지않으면 작동을 하지 않는 문제가 있었고 안정성이 떨어지는 방식은 지원에서 제외 되었습니다.

그리고 nodejs 특징인 Single Thread 기반의 Non-Blocking I/O으로 성능적인 이점이 있습니다. (callback 지옥이라는 단점도 있지만..)

자 이제 개발 해보자…..
"socket.io 홈페이지에 문서를 보니 아래 처럼 간단한 것 같은 ….. 금방 만들수 있겠다…"

socket.io document는 detail함이 좀 부족한 느낌이다. 그리고 버전업이 되면서 deprecated 메소드나 설정 값들이 많아 혼란 스러워 socket.io object들을 실제로 console.log로 찍어서 객체를 확인 하면서 개발 해야 했다 휴……

```javascript
// 접속되면
io.on('connection', (socket) => {
  // 이벤트를 수신받고  
  socket.on('say to someone', (id, msg) => {
    // 보내면 되는 구나..
    socket.to(id).emit('my message', msg);
  });
});
```

```javascript
//수신 받고
socket.on('news', (data) => {
  //데이터 처리
});
// 보내고
socket.emit('hello', 'world');
```

> 원래 호수에 있는 오리를 보면 편하게 둥둥 떠있는 것 처럼 보인다. 하지만 물속은 난리다…..

물론 기본 설정이나 여러가지를 구현해야 하지만 큰 로직은 수신/송신이라 할 것이 많이 없을 줄 알았습니다.(websocket 서버를 쌩으로 구현하는 예제들도 기본 예제들이긴 하지만..) 하지만 실제로 실무 서비스에 사용하려고 하니 여러가지 고려 대상이 생각보다 많았었고. 지금부터는 실제로 개발 하면서 겪었던 과정을 설명 하려고 합니다.

> 트래픽의 격리와 전송방식을 잘 구현 해주어야 한다(꼬옥~)
BROS는 각 지역 마다 센터로 구분 되어서 일을 하기 때문에 이벤트의 송수신은 센터 끼리 해야 됩니다.
같은 센터라도 배달데이터 송/수신을위한 room과 채팅을 위한 room은 구분 되어야 하구요.
전체 센터의 배달 현황을 봐야 할 경우도 있습니다.
같은 센터의 room이지만 배달 상태를 전달완료로 변경하기 위해서는 event명을 지정하여 송/수신 할 수 있어야 합니다.
특정 client에게만 이벤트를 전송하기 위해서는 private로 전송 해야 하며 채팅의 메시지는 public이 되어야 합니다.
그래서 실무에서 사용할 서버라면 namespace/room/event 트래픽 격리 구분과 public/private/broadcasting 이벤트 전송 방식을 필수로 구현해야 합니다.

> Scale out에 대한 대비
여기서 부터 멘붕이 왔습니다. 일반 웹서버처럼 세션관리만 신경쓰면 server를 스케일아웃 하더라도 사람이 신경쓸 것이 별로 없는 상황이 아니였습니다. nodejs는 싱글 프로세스라 멀티프로세스를 생성하고 서로 완벽한 clustering이 되어야 했고. 추후 서버 자체의 scale out이 되었을 경우에도 대비해야 하므로 clustering을 구성하는 것은 꼭 필요했습니다. 단순히 세션에 대한 문제 뿐만 아니라 1번 서버 > 1번 프로세스에 접속된 client가 이벤트를 전송하면 나머지 서버 > 나머지 프로세스들에 접속된 client로 이벤트를 전송하기 위해서 프로세스 끼리는 서로 연결되어 데이터가 전/수송이되어야 했습니다.

> Clustring
nodejs는 싱글 프로세스라 node cluster로 core 수만큼 프로세스를 생성해야 했고, 멀티 쓰레드 방식이 아닌 멀티 프로세스방식이라 데이터 공유가 되지 않는 특징 때문에 데이터 공유에 대한 처리가 필요했습니다.

```javascript
if (cluster.isMaster) {
     //CPU의 갯수만큼 워커 생성
    os.cpus().forEach(function (cpu) {
        cluster.fork();
    });
    //워커가 죽으면,
    cluster.on('exit', function(worker, code, signal) {
        if (code == 200) {
            //워커를 살리고 살리고~~
            cluster.fork();
        }
    });

    //생성한 워커가 보내는 메시지 처리
    worker.on('message', function ("야 김찬정이가 접속했단다!") {
        //생성한 워커에게 메시지 보내기
        worker.send("워커들아 김찬정이가 접속했다는 구나!");
    });
}

if (cluster.isWorker) {
    //마스터에게 메시지 보내기
    process.send("야! 여기 김찬정이가 접속했다 다른 워커에게 좀 알려줘라 마스터야! 1명 접속 추가!!");

   //마스터가 보낸 메시지 처리
    process.on('message', function("김찬정이가 접속했네!") {
        // 김찬정이가 접속 했으니 카운트도 추가하고~ Redis에 계정이랑 조인한 룸정보도 저장하고....
        // 어휴... 번거롭기 짝이.....
    });
}

```
![socket io-clustring](https://user-images.githubusercontent.com/42961200/143955079-bb4823a0-a343-4a4b-a364-35f96cf9695f.jpg)

> Worker의 Sticky Session 처리
스케일 아웃 된 서버에 client가 접속할 때 마다 서버를 달리하여 접속하게 되면 세션문제를 마주하게 됩니다. 그래서 일관성있게 지정된 서버에만 접속 되도록 sticky session을 보통 L4같은 로드밸런서 장비가 해주게 되는데. 물리적인 서버는 로드밸런서가 처리해 준다고 하지만 문제는 node cluster로 생성한 worker들 입니다. 1대의 물리 서버에 worker들이 멀티프로세스로 동작하는 것은 사실 서버가 여러대 돌아가는 것이나 마찬가지 상황! 그래서 worker들의 sticky session 처리는 오픈소스 모듈을 사용에 처리해 주었습니다.(nodeJs 같은 특별한 경우가 아니면 필요 없을 수도….)

> wswebsocket가 아닌 http 이벤트 송신 api도 필요!
client는 server와 websocket으로 connection을 유지하고 서로 통신하지만 http로 이벤트를 전송할 수 있는 기능도 필수로 필요합니다. client가 websocket으로 연결되어 있을 필요는 없고 event 발송만 하면 되는 경우도 필요하고 수신은 websocket으로 송신은 restful api 처리 끝단에 http로 이벤트를 전송하는 방식으로 시스템을 구성 할 수도 있기 때문에 http 이벤트 전송 api도 구현 해야할 필요가 있습니다. 실제로 BROS 에서 콜센터 주문접수처리 하기 위해서 주문의 상세 화면을 보고 있는 경우 고객이 배민앱에서 주문 취소를 하게 되면 주문취소 api 끝단에 http로 주문 취소 이벤트를 송신했고 콜센터 주문접수 화면에서는 바로 고객주문 취소 안내를 표시 했습니다.

```javascript
// POST - http://webmsg.woowa.in/ridersorda로 요청이 들어오면
app.get('/ridersorda', function (req, res, next) {
  next();
}, function (req, res) {
  // POST로 전송된 값들을 가져오고
  var nameSpace = req.param('nameSpace');
  var roomName = req.param('roomName');
  var rcvEvtNm = req.param('rcvEvtNm');
  var rcvData = req.param('rcvData');

  // websocket 이벤트로 전송
  io.of(nameSpace).to(roomName).emit(rcvEvtNm, rcvData);

  // http response 설정을 해주고 끝!
  res.set('Content-Type', 'application/json; charset=utf-8');
  res.status(200).send("");
  res.end();
});

```

> 서버를 띄어 놓긴 했다만 관리는 어떻게하나…
서버를 만들어서 띄어 놓긴 했지만 서버에 대한 관리가 필요했습니다.(이런 부분때문에 유료 서비스를 사용하는 것이….) 일단 서버에 접속된 namespace/room별 접속한 client 현황이 필요 했고. 서버의 cpu/memory 등의 정보등이 필요했습니다. 그리고 서버에서 **오류가 발생했거나 멈췄을 경우 즉각적인 notification기능도 필요했습니다.

> 서버 현황 데이터들은 Redis에 저장 관리
앞서 말한 것 처럼 접속한 client의 수와 이름 과 room 리스트 데이터들은 각각의 worker 프로세스에서 공유 되지 못하고 따로 관리가 되기 때문에 이런 관리 데이터들은 1곳에 저장하고 조회 할 필요성이 생겼고 채팅 기능에서 서로 간 대화 메시지들이 보관되어야 할 저장소도 필요했습니다. clustering 구성시에 redis를 사용하고 있었기 때문에 redis를 활용하여 데이터들을 저장하고 사용했고 client들이 접속 및 room에 join/out 하거 할때 redis에 정보를 update했고 실시간 이벤트로 모니터링 페이지에 전송했습니다


![socket-server-monitor](https://user-images.githubusercontent.com/42961200/143955347-6164042a-b01f-4f6c-9b5d-dc2a5b2dc18d.jpg)

```javascript
a = [1, 2, 3, 4, 5]; 
for (var i=0; i<a.length; i++) {
    someFunction(function(){
        console.log(i);               
    });
};
// 예상결과
// 1,2,3
// 실제결과
// 3,3,3 이건 뭥미?

```


```javascript
 async.waterfall([ function(waterfallCB) {
   // 1.모든 클라이언트를 가져오고
   redisClient.keys('SocketIo^All_Client^*', function(err, nspsarr) {                                                     async.forEachOf(nspsarr, function (nspsVal, nspsKey, forEachOfCB) {                                                   
       redisClient.hgetall('SocketIo^All_Client^'+room, function(err, object) {             
         forEachOfCB();  
       });
     }, function (err) {
         waterfallCB(err);  
     });   
   });
}, function(waterfallCB) {
  // 2.모든 접속 계정을 가져오고
  redisClient.hlen('SocketIo^Account', function(err, count) {
      allsocketInfo.connectCnt = count;
      waterfallCB(count); 
  }); 
}, function(waterfallCB) {
  // 3. 모든 socket id를 가져온다음
  redisClient.keys('SocketIo^SocketId^*', function(err, socketIds) {
      allsocketInfo.accountCnt = socketIds.length;
      waterfallCB(count); 
  }); 
}] ,function(err, data) {
  // 적절하게 조합한 데이터를 만든 후 리턴
  allsocketInfo.clientInfo = data;
  allsocketInfo.roomCnt = allsocketInfo.roomList.length
  callback(err, allsocketInfo);
});

```
redis에 저장된 서버 현황 데이터를 가져와서 적절하게 조합하기 위해 for loop 가 여러번 사용 되었는데 async라는 모듈의 waterfall 메소드를 사용하면 loop가 수행된 후 결과를 순차적으로 전달함으로 써 sync 하게 처리 할 수 있었지만 사용률이 증가하면서 성능문제가 발생했습니다. 문제의 해결은 !

되도록 async.waterfall 메소드를 사용한 loop를 처리하지 않는다.(sync하게 처리하여 block상황을 만들지 않는다)
redis의 데이터 구조를 단순화 한다.
redis는 string, list, set, hash 등의 key/value 구조의 데이터 타입을 지원하므로 RDB 스타일의 복잡한 계층구조로 데이터를 저장하게 되면 데이터를 가져와 조합하기 위해서 복잡한 처리를 하게 되므로 처음 부터 제공되는 데이터 타입에 잘 맞추어 데이터를 설계하고 저장하면 불필요한 for loop문을 줄일 수 있다.

Redis 파일저장 오류
socket 서버의 namespace/room/account/socketid 관리 데이터들은 서버의 현황 데이터기 때문에 사실상 file로 백업 될 필요가 없지만 chatting시 채팅방에 입장 후 재입장 시 대화 내용을 다시 보여 줘야 했기 때문에 redis가 재부팅 되거 나 하는 경우에도 영구적으로 기록 되어 있어야할 필요성이 있었습니다.

![bros-chatting](https://user-images.githubusercontent.com/42961200/143955461-cd6670f1-4a62-4df1-b54c-5ccb9c0b53c5.jpg)

```


```

:::
{{site.data.alerts.ended}}

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
