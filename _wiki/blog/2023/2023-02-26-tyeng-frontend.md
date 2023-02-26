---
layout: post
title: "tyeng dashboard UI"
name: "tyeng-frontend"
tags: [frame]
tagName: frame
permalink: 2023-02-26-tyeng-frontend.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: wiki
keywords: "quasar vuejs express mongodb firebase pwa spa tyeng"
summary: "Sun, Feb 26, 23, dashboard UI recap"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2023-02-26T11:21:28 +0900
updated: 2023-02-26 11:21
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Firebase overview

시작하기 전에 간단히 Firebase에 대한 설명을 하겠습니다. Firebase는 서버리스 앱을 만들 수 있도록 하는 플랫폼 같은 겁니다. 기존에 웹 앱이나 홈페이지를 만드려면 서버가 필요했습니다. 백엔드 서버가 존재함으로써 홈페이지가 회원가입, 데이터 저장 / 불러오기 등의 기능을 수행할 수 있었습니다. 그런데 이렇게 되면 작은 규모의 프로젝트도 모두 서버를 관리해야 한다는 불편함이 따라옵니다. Firebase는 DB, 인증 등 백엔드 서버가 했던 일들을 모두 구글 서버에서 처리할 수 있도록 이 모든 기능을 api 형태로 제공해버립니다. 이에 따라, React같은 프레임워크로 프론트엔드만 깔끔하게 잘 짜도 쓸만한 웹 앱을 만들 수 있게 됩니다. 

Firebase Database은 당신의 서비스에 큰 도움이 됩니다. 
---------------------------------------

이 프로젝트에서는 Firebase에서 제공하는 다양한 백엔드 기능 중 NoSQL기반의 Realtime Database를 사용합니다. Firebase Realtime Database를 선택한데는 몇 가지 이유가 있습니다.  
**1. 초기 서비스에서 DB에 많은 신경을 쓰지 않아도 되게 해 줍니다.** 서비스가 궤도에 오르기 전에는 우선 DB가 적당히 잘 작동만 하게 하고 빠른 런칭에 더 신경써야 합니다. 결국 유저가 없으면 다 무용지물이기 때문입니다.  
**2. 간편하게 보안에 신경쓸 수 있습니다.** 개인이 DB서버를 운영하기에는 리스크가 큽니다. Firebase 역시 완벽하지는 않겠지만, 일단 Firebase는 기업이 운영하는 서비스이다보니 개인이 운영하는 것 보다는 더 안정적입니다.  
**3.  웹에서 바로 모든 내용에 대해 CRUD가 가능합니다.**  

일단 Firebase를 설치해보겠습니다.
----------------------

굳이 이 포스팅이 아니더라도, Firebase 홈페이지에 Documentation이 굉장히 잘 되어 있으니 다음 페이지를 한 번 참조해보시길 바랍니다. 앞으로 이어질 내용과 크게 다르지는 않습니다. 다만 여기서는 처음 시작하는 데 있어 좋은 길잡이가 되는 내용을 포함합니다.

 [자바스크립트 프로젝트에 Firebase 추가

이 가이드에서는 웹 앱에서 또는 최종 사용자의 액세스를 위한 클라이언트(예: Node.js 데스크톱 또는 IoT 애플리케이션에서)로 Firebase 자바스크립트 SDK를 사용하는 방법을 설명합니다. 권한이 있

firebase.google.com](https://firebase.google.com/docs/web/setup?hl=ko)

일단 개발환경에 Firebase를 설치하겠습니다. 패키지 루트 폴더에서 터미널을 열고 npm i firebase를 입력해 설치합니다.

![](https://blog.kakaocdn.net/dn/kYl25/btq5MnRQrdZ/uIF7JbRNlvgWLsnDUxMfp1/img.png)

설치가 완료되었다면, Firebase에 가서 새로운 프로젝트를 추가합니다. Firebase 콘솔에 가서 프로젝트를 새로 추가합니다.

![](https://blog.kakaocdn.net/dn/Ikayh/btrblkB222p/USKR81JA7ZiPW4o66D0Rq1/img.png)

![](https://blog.kakaocdn.net/dn/bt0hva/btrbwhQBNSv/VFkpVPcyMkYK37f3rVZ4bk/img.png)

프로젝트 이름을 입력해줍니다. 여기에서는 간단히 whiteknight라 지칭하겠습니다. 

![](https://blog.kakaocdn.net/dn/d1ZdYv/btrbuAXqibL/pFD0pZPvkGuETDeHXrjJqK/img.png)

프로젝트 이름과 별개로, 프로젝트 내부에서 이 프로젝트에 접근할 App을 추가합니다. Node.js 환경을 사용하기 때문에 Web app을 선택하고 앱 이름을 설정합니다.

![](https://blog.kakaocdn.net/dn/dj2Grg/btrbpQtm2FK/aHpDxyblCXBb8cdZSybpWk/img.png)

프로젝트 설정에 들어가면 고유 키를 확인할 수 있습니다.

프로젝트 생성 후 , 프로젝트 설정에 들어가시면 위와 같이 방금 만든 firebase 웹 앱에 접근하기 위한 고유 키들을 확인할 수 있습니다. 이 값들을 어딘가에 잘 보관해 두세요. 이제 왼쪽 메뉴에서 Realtime Database에 들어갑니다.

![](https://blog.kakaocdn.net/dn/xU0HP/btrbvbJSgQ3/ekPPrad6asLPKEXLlC65Kk/img.png)

초기 설정이 완료된 이후, 왼쪽 Realtime Database에 들어가 데이터베이스를 만드세요.

![](https://blog.kakaocdn.net/dn/ecQ6mn/btrbuzRLzuH/rnFiyZCepSlPrmJ7n7Y1ik/img.png)

DB를 추가할 때 테스트 모드에서 시작해 권한 문제로 골머리를 썩지 않도록 주의하세요. DB 생성이 완료되었다면, 콘솔에서 보이는 DB URL을 기억해두세요,

DB의 기본은 CRUD(Create, Remove, Update, Delete).
---------------------------------------------

Firebase 공식 문서에 보시면 DB를 어떻게 다뤄야 할지 친절히 알려줍니다만, 그걸 그대로 가져오면 이 포스팅이 그리 큰 가치를 가지지 못하기 때문에, 간단하게 정리해 드리겠습니다. Firebase Realtime Database의 특성을 몇 가지 요약하자면 다음과 같습니다. (NoSQL 과 공유되는 특성이 일부 있습니다. 이 점 유념하신다면 다음 내용 숙지에 도움이 됩니다.)

> 1. DB가 json형식을 따른다. key:data쌍으로 이루어져 있다. 또한,  json이 그렇듯 data가 {key:{key:data}} 쌍으로 구성되기도 한다.  
> 2. 고유 키라는 개념이 존재한다. 데이터를 추가할 때 하위 값으로 추가하거나 고유 키에 값을 추가할 수도 있다.  
> 3. DB를 불러올 경우, SELECT처럼 한 번 데이터를 조회할 수도 있고, 백그라운드에서 대기하다 DB 데이터에 변화가 생기면 그 때 또 받아올 수도 있다. 이게 Realtime Database의 주요 특징이다. 예를 들어, 인스타그램에서 좋아요가 실시간으로 올라가는 걸 확인할 수 있는데, Realtime Database는 이런 용도로 사용하는데 제격이다.  
> 4. 데이터 쿼리 방식이 =, > ,< 등의 방식과 느낌이 조금 다르다. 원하는 데이터 하나만 찾기가 조금 어렵다.   
>   
> 이 정도만 숙지하시고 Realtime Database에 접근하면 한결 가벼운 마음으로 접근할 수 있을 것 같습니다.

Express에서 Firebase Realtime Database 사용하기
-----------------------------------------

기본적인 설치 절차는 위에서 다 진행했으니 이제 Node.js Express 상에서 Firebase Realtime Database를 사용해보겠습니다. Firebase를 사용하기 위해 Node.js 코드에 다음의 내용을 추가해줍니다.

    //app.js var firebase = require("firebase");require("dotenv").config(); var firebaseConfig = {  ßapiKey: process.env.FB_APIKEY,  authDomain: process.env.AUTH_DOMAIN,  databaseURL: process.env.DB_URL,  projectId: process.env.PROJECT_ID,  storageBucket: process.env.STORAGE_BUCKET,  messagingSenderId: process.env.MESSAGING_SENDER_ID,  appId: process.env.APP_ID,  measurementId: process.env.MEASUREMENT_ID,}; ////////firebase Initializationfirebase.initializeApp(firebaseConfig);

> firebaseConfig 배열 내부에 주어지는 값들이 모두 process.env.\*\*\*형태로 되어 있는 것을 확인할 수 있습니다. 이는 require("dotenv").config(); 를 통해 config값을 불러오는 형태로 사용하기 위함입니다. npm i dotenv를 통해 dotenv를 설치하시고,  각자 만든 프로젝트에서 발급받은 ApiKey를 \*부분에 입력후 다음의 내용을 .env라는 이름으로 프로젝트 루트에 저장하세요. 

    //.env *** 이 파일을 복붙해서 사용하되, 주석을 모두 제거해야 합니다!!FB_APIKEY = *AUTH_DOMAIN = *DB_URL = * //DB_URL은 Realtime Database 메뉴 들어갔을 때 화면에 나오는 db 주소를 입력합니다. // https://***.firebaseio.com 형태입니다.PROJECT_ID = *STORAGE_BUCKET = *MESSAGING_SENDER_ID = *APP_ID = *

이렇게 되면 Firebase를 사용할 준비가 모두 끝납니다. 이제 데이터를 추가하는 법을 확인해보겠습니다. Firebase Realtime Database에서는 Update와 Push로 데이터를 추가합니다. 두 가지는 성격이 약간 다릅니다.

> Update : 값을 추가하고자 하는 위치에서 데이터를 추가합니다. 데이터를 추가하고자 하는 위치에 이미 있다면, 새로운 데이터로 교체합니다.  
>   
> Push : 원하는 위치에서 값을 추가합니다. 추가할 값에 대해 키가 랜덤하게 생성됩니다. 이게 push의 핵심입니다.

Realtime Database 데이터 추가하기
--------------------------

    firebase.database().ref("approved_users/").update({key:"data"});

    firebase.database().ref("approved_users/").push({  key: "data",});

Update는 추가+ 교체의 역할을 한다면, Push는 무조건 추가만 합니다. 위의 내용을 실행하면 다음과 같이 데이터가 추가됩니다.

![](https://blog.kakaocdn.net/dn/dejDBl/btrbvaEchMB/RUdppFkgeNSy3hL9XNVSz0/img.png)![](https://blog.kakaocdn.net/dn/U7loo/btrbwiaU2wY/uBiXXakIf7fZu7KGTCASjK/img.png)

좌 : Update 사용, 우 : Push 사용

Realtime Database 데이터 읽기
------------------------

    firebase.database().ref("approved_users")    .orderByChild("key")// key이라는 key 중에서 원하는 조건에 있는 data를 찾으려 합니다.    .equalTo("data") // data라는 값을 가지고 있는지 확인합니다     .once("value", (snapshot) => { // once, 한 번 수행하고 끝납니다. on인 경우 계속 대기하면서 데이터가 추가 될 때마다 아래 내용을 반복합니다.      if (snapshot.val() !== null) {        // add something to do.        console.log(snapshot.val());      } else{              console.log("we've found nothing!");       }});

데이터를 추가 했으면 읽을수도 있어야 합니다. 앞 내용보다 조금은 복잡하지만 구문이 충분히 알아볼 수 있을 정도니 주석에 간단히 설명 남겨 놓았습니다.

![](https://blog.kakaocdn.net/dn/ba0k1R/btrbqvP9oCM/V5RegWv2qIBj06GZouED6k/img.png)

콘솔창에 검색한 데이터가 나오면 성공입니다.

Done!
-----

이정도만 사용하신다면, 기본적인 사용은 끝났습니다. 심도깊은 내용을 알고 싶으시다면 링크되어 있는 Firebase Documentation을 참조하시면 됩니다. 이 포스팅의 내용과는 크게 다르지 않으며, 지속적으로 유지보수가 된다는 장점이 있으니 Firebase를 잘 사용하기 위해 한 번쯤은 들러 볼 가치가 있습니다. 다음 포스팅에서는 Firebase와 연동해서 실제로 로그인하는 방법에 대해 다루겠습니다.

* * *

## Mongodb crash course

```txt

MongoDB

NoSQL Database - Document Database Type in NoSQL
Data is stored in json like syntax

Good to use when there is no ton of inter connected relations

Database, Collections, Document

data/db folder inside MongoDB

Run mongod and mongo in another terminal
$ mongod -directoryperdb --dbpath C:\mongodb\data\db --logpath C:\monodb\log\mongo.log --logappend --rest --install
$ net start MongoDB

$ mongo

> show dbs
> use <db_name>
> db.createUser({ user: "", pwd: "", roles: [ "readwrite", "dbAdmin" ] });

> show collections
> db.createCollection('<collection_name>');

> db.<collection_name>.insert({ });
> db.<collection_name>.insert([ { }, { }, { } ]);

> db.<collection_name>.find();
> db.<collection_name>.find().pretty();
> db.<collection_name>.find().count();
> db.<collection_name>.find().limit(4);

> db.<collection_name>.findById(id);
> db.<collection_name>.find(<matchObject>);
> db.<collection_name>.find({ "nestedObj.field": "" });

> db.<collection_name>.find({ $or: [ <matchObject1>, <matchObject2> ] });
> db.<collection_name>.find({ age: { $gt: 40 }}); // gt or gte
> db.<collection_name>.find({ age: { $lt: 40 }}); // lt or lte
> db.<collection_name>.find().sort({ field: 1 }); // ascending order is indicated by 1

> db.<collection_name>.update(<matchObject>, {}); // matchObject: { first_name: '' }
> db.<collection_name>.update(<matchObject>, {}, { upsert: true }); // insert if not found

> db.<collection_name>.update(<matchObject>, { $set: { } }); // Preserves rest of the data in the Document
> db.<collection_name>.update(<matchObject>, { $inc: { age: 5 } } ); // increments age by 5
> db.<collection_name>.update(<matchObject>, { $unset: { age: 1 } } ); // deletes age field
> db.<collection_name>.update(<matchObject>, { $rename: { "field1": "field2" }});

> db.<collection_name>.remove(<matchObject>);
> db.<collection_name>.remove(<matchObject>, { justOne: true });

> db.<collection_name>.find().forEach(function(doc) {
    print("Customer Name": + doc.field);
  });

```

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
