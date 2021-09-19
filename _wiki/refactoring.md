---
name: Style 적용하기   
layout: post
permalink: refactoring.html
sidebar: other_sidebar
collection: wiki
summary: " toc의 css를 조정하다가 우연히 깨닫게 된 CSS 어원의 의미Javascript 에서 출력된 html string을 브라우저로 확인하기"
tags: [web, publishing]
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 4:20 PM
toc: true
public: true
parent: [[Web-Category]]  
latex: false
---
* TOC
{:toc}

# 0. 시작하기 전에

* 테스트 하면서 쓰다보니 원래 쓰려던 내용이 주 내용이 아니게 되었다.
* 문서 제목은 바꾸기 귀찮아서 그대로 두기로 한다. 
  * 해당 제목으로 관련 그림파일 이름을 정했는데 다 바꿔줘야 한다...
* 새로 제목을 정한다면 ...
  * `Javascript 에서 출력된 html string을 브라우저로 확인하기`
  * ...정도가 적당할 듯 하다.

# 1. 발단

* Refactoring 2nd 내용을 따라해보고 있던 중에..
* 1.6절에 보면 `renderHTML()` 함수에서 다음과 같이 렌더링 한다
  ```html
  <h1>청구 내역 (고객명: BigCo)</h1>
  <table>
  <tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>
    <tr><td>Hamlet</td><td>(55석)</td><td>$650.00</td></tr>
    <tr><td>As You Like it</td><td>(35석)</td><td>$580.00</td></tr>
    <tr><td>Othello</td><td>(40석)</td><td>$500.00</td></tr>
  </table>
  <p>총액: <em>$1,730.00</em></p>
  <p>적립 포인트: <em>47</em>점</p>
  ```
* 텍스트는 생각대로 잘 나왔지만 ...
  * browser 에서도 이쁘게 보이는 지 확인하고 싶었다

# 2. 전개

## node.js 기본 라이브러리 : http

* http 기본 라이브러리를 사용하여 간단히 브라우저 확인용으로 다음과 같이 구성했다
  ```js
  // package.json
  {
    "scripts": {
      "server": "node ./src/server.js",  // 추가
    }
  }
  
  // server.js
  import fs from 'fs'
  import http from 'http'
  import {htmlStatement} from './statement.js'
  
  const plays = ...
  const invoices = ...
  
  function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write(htmlStatement(invoices[0], plays))
    response.end()
  }
  
  http.createServer(onRequest).listen(8000)
  ```
* 간단한 http 서버를 구현했고 `localhost:8000`으로 브라우저에서 접속하면 browser가 렌더링한 문서를 볼 수 있다
* 
### Encoding 오류

* 문자 인코딩이 안맞을때 나오는 오류가 나왔다 
  ![1차 오류](/wiki-img/2020/css-default-style-01.png)
* 찾다보니 [이런 링크](https://stackoverflow.com/a/19341386/9457247) 를 찾아서 바꿔봤다.
  ```js
    response.writeHead(200, {'Content-Type': 'application/xhtml+xml; charset=utf-8'})
  ```
  * 아래처럼 다른 오류가 나온다
  
### Extra Content at the end of document 오류

* 한글이 나오다말고 뭔가 html 문서상의 구조적인 오류가 난것 같다
  ![2차 오류](/wiki-img/2020/css-default-style-02.png)
* [root 노드가 있어야 한다고 한다](https://stackoverflow.com/a/16861242/9457247)
* statement.js 에서 앞 뒤를 html 태그로 감싸도록 하고 출력해봤다 

### CSS 기본 스타일이 적용안되는 오류

* 한글이 잘 나오는 건 확인했는데..
* 스타일이 전혀 적용되지 않고 나오고 있다
  ![3차 오류](/wiki-img/2020/css-default-style-03.png)
* 위 문구중 xml 이라는 게 의심이 가서 다음과 같이 바꿔봤다
  ```js
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
  ```
  
### 성공

* 원래 의도대로 잘나온다
 
  ![4차 성공 ](/wiki-img/2020/css-default-style-04.png)
* `Content-Type`을 xml로 설정했을때 앞뒤로 추가했던 html 태그를 삭제해도 잘 나온다

# 3. 소감

* 원래 이 페이지를 작성하려던 의도는 Browser 기본 스타일이 적용되지 않을때 어떻게 적용시키나였다.
* [이 글](https://www.digitalocean.com/community/tutorials/how-to-apply-css-styles-to-html-with-cascade-and-specificity#using-the-lt-style-gt-tag-to-write-css)을 보고 `head`태그 안에 빈 `script` 태그를 넣으면 기본 스타일 적용되는 걸로 생각했는데...
* 결론은 `Content-Type` 설정에 좌우 되는 것이었다.
* `charset: utf-8`도 누락되면 인코딩 문제가 생기므로 꼭 추가한다

{% include links.html %}
