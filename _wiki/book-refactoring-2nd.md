---
name: 리팩토링 2판
layout: post
permalink: book-refactoring-2nd.html
sidebar: other_sidebar
collection: wiki
summary: "코드 구조를 체계적으로 개선하여 효율적인 리팩터링 구현하기 "
tags: [web, regex, publishing, javascript]
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 4:47 PM
toc: true
public: true
parent: [[Books-Category]] 
latex: false
series: "JAVASCRIPT series"
weight: 3
---

{% include custom/series_javascript_next.html %}

* TOC
{:toc}

# 개요

| ![표지](http://image.kyobobook.co.kr/images/book/xlarge/742/x9791162242742.jpg) | 저자: 마틴 파울러 (Martin Fowler) <br> 책제목 : 리팩터링 2판 (원제 : Refactoring: Improving the Design of Existing Code (2nd Edition)) <br> 부제 : 코드 구조를 체계적으로 개선하여 효율적인 리팩터링 구현하기<br><br> 출판사 : 한빛미디어 (원책: Pearson, Addison-Wesley) <br> ISBN 한글 : 979-11-6224-274-2 <br> ISBN 영문 : 978-0134757599 <br> <br> 값: 35,000원 |

## 저자 설명

### 마틴 파울러

* ThoughtWorks의 수석 과학자. 엔터프라이즈 소프트웨어 설계에 주력
* 제어 역전(Inversion of Control)과 의존성 주입(Dependency Injection) 용어를 대중화시킴
* 1999년 Refactoring 1st Edition을 지음
* [Martin Fowler, 영문위키](https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer))

# 시작전

## 초판의 추천사

* 에릭 감마의 추천사
  * GoF의 디자인 패턴 저자
  * JUnit, 이클립스, 비주얼 스튜디오 코드의 아버지

## 들어가며

### 리팩터링이란

### 다루는 내용

### 예시는 자바스트립트로

### 누가 읽어야 하나

* 내용 습득 방법
  * 리팩터링이 뭔지 모른다면 1장 부터
    * 리팩터링 진행 절차 습득
  * 리팩터링의 이유가 궁금하면 1장과 2장을 읽자
  * 리팩터링해야 할 곳을 찾고 싶을 때는 3장 
    * code smell을 잡아내는 요령 습득
  * 리팩터링을 실습하고 싶다면
    * 1장부터 4장까지 꼼꼼하게 읽고,
    * 나머지를 빠르게 훑어보자 (모르는 부분이 있을때 레퍼런스 보듯이)

### 밥상을 차려주신 이들

* 워드 커닝햄 (Ward Cunningham)과 켄트 벡 - 대표적인 리팩터링의 선구자
* 랄프 존슨 (Ralph Johnson) - 리팩터링 지도교수
* 빌 옵다이크 (Bill Opdyke) - 리팩터링으로 박사학위 논문 작성
* 존 브랜트 (John Brant)와 돈 로버츠 (Don Roberts)
  * 세계 최초의 리팩터링 도구 개발 - 리팩터링 브라우저 (Refactoring Browser)

### 감사의 말

* 켄트 백 - 코드 악취 (Code smell) 이라는 말을 창안
 
## 한국어판 독자를 위한 안내

* 첫째, 번역은 원서의 웹 버전을 기준으로 함
  * 저자가 출간후에도 웹버전 콘텐츠를 갱신하고 있음
  * 원서의 웹버전은 원서 구매자가 인증을 거쳐야해서 한국어판 독자는 공유불가
  * 웹버전에만 갱신된 내용도 한국어판에는 역자가 반영했음
  * 갱신되는 내용은 아래 링크에 공유예정
    * [옮긴이의 책 팔로업 github](https://github.com/WegraLee/Refactoring)
* 둘째, 공식 소스 코드를 제공하지 않음
* 
* [IDE들이 제공하는 리팩터링 목록](http://bit.ly/2waWgFX)

# 01 리팩터링: 첫 번째 예시

## 1.1 자. 시작해보자!

* 첫번째 예제는 node.js로 테스트해봄
  * 별도 라이브러리 없이 순정 node.js로 가능했음
    ```js
    // statement.js
    function statement(invoice, plays) {
      ...
    }
   
    // 내가 추가한 코드
    const fs = require('fs')
    const plays = JSON.parse(fs.readFileSync('plays.json').toString())
    const invoices = JSON.parse(fs.readFileSync('invoices.json').toString())
    
    for (let invoice of invoices)
      console.log(statement(invoice, plays))
    ```
* require를 사용하기 위해 `npm init` 으로 `package.json`을 작성함
  * `package.json`이 없으면 require( ) 호출 위치에서 `ReferenceError: require is not defined` 에러남
* 책에 표시된 문자열이 [Template literals](/wiki/term-string-interpolation/)을 사용중인데..
  * Javascript의 Template literals의 문자열 구분자가 backtick인지 single quotation인지 구별안됨
* 주목한 부분 
  * 문자열 출력물을 빌드할 때 result += '출력1' 방식으로 차례로 쌓음 ~ 괜찮은 방법인듯
  * 

## 1.2 예시 프로그램을 본 소감

* 프로그램이 새로운 기능을 추가하기 편한 구조가 아니라면,
  * 먼저 기능을 추가하기 쉬운 형태로 리팩터링하고 나서 원하는 기능을 추가한다.
* 위 프로그램의 사용자가 수정을 요구할 수 있는 부분 추즉
  * 먼저, 청구 내역을 HTML로 출력하는 기능 추가 
    * 어느 부분에 영향을 줄까?
      * 우선 출력 문자열 result가 있는 모든 부분을 조건문으로 감싸야 함
      * 그러면 너무 복잡 → 손쉬운 해결책은 ?
        * 동일한 내용으로 HTML 출력하는 함수로 복사
        * 중복 코드는 수많은 문제의 시작임
          * 출력부분과 관계없는 로직만 수정하더라도 양쪽부분을 동기화 해줘야 함 
  * 두번째 요구사항 : 연극 장르와 공연료 정책의 변경
    * statement()와 htmlstatement()가 있다면 동기화도 항상 신경써야함
* 리팩터링이 필요한 이유는 바로 이런한 변경때문

## 1.3 리팩터링의 첫 단계

> 리팩터링하기 전에 제대로 된 테스트부터 준비한다 <br> 테스트는 반드시 자가진단하도록 만든다

## 1.4 statement( ) 함수 쪼개기

* 분리할 부분 점검
  * switch가 눈에 띈다
    * switch는 한 번의 공연에 대한 요금을 계산 
    * amountFor(aPerformance) 정도로 분리하는게 적당
    * 이것은 [Extract Function, 함수 추출하기](https://refactoring.guru/extract-method) 절차이다
  * 코드 조각을 별도 함수로 분리한 후 해야할 일
    * 바로 사용할 수 없는 변수 점검
    * 함수내에서 값이 변경되는 변수와 변경되지 않는 변수로 분리
      * 값이 변경되지 않는 변수 : 매개변수로 넘겨주면 됨
      * 값이 변경되는 변수 : 조심해야 함
        * 이런 값이 하나일 경우 - 이 값을 반환하도록 함
        
> 리팩터링은 프로그램 수정을 작은 단계로 나눠 진행. <br> 중간에 실수 하더라도 버그를 쉽게 찾을 수 있다. 

* **Visual Studio Code 에서 Refactor 하는 방법**
  * 에디터를 우클릭하면 `Refactor ...` 메뉴가 중간 아래쯤 있다
  * 코드가 선택되지 않으면 disable 상태이다
  * 함수 추출할 영역을 선택하고 `Refactor`로 가면.. 
    * inner function으로 할지 global scope로 할지 선택해야 한다
    * global로 선택하면 `newFunction` 이름으로 신규 함수가 자동 생성된다
      * 선택영역에서 사용되는 변수인 play와 perf는 신규함수에서 자동으로 매개변수로 설정된다
      * 또한, 이 상태에서 `newFunction`의 이름을 바꿀수 있는 상태로 바로 들어간다
        * `amountFor`로 이름을 바꾸어주면 된다
        * 호출하는 곳과 함수정의하는 곳의 이름이 모두 바뀐다
  * `Rename Symbol`(단축키 F2) 기능으로 `thisAmount` 변수를 `result`로 한 꺼번에 바꿀 수 있다

* 매개변수의 역할이 뚜렸하지 않을 때
  * 부정 관사 (a/an)을 붙이면 의도가 명확히 드라나는 경우가 많아 유용하다
  * 마틴 파울러가 켄트 벡에게 배운 방법이라고 함 (Smaltalk Best Practice Patterns에 나옴)

> 컴퓨터가 이해하는 코드는 바보도 작성할 수 있다. <br> 사람이 이해하도록 작성하는 프로그래머가 진정한 실력자이다

### play 변수 제거하기

* play 변수는 다른 매개변수에서 도출 할 수 있는 변수
  * 이런 변수를 제거해야 작업이 더 간단해짐
  * [임시 변수를 질의 함수로 바꾸기, Replace Temp with Query](https://refactoring.guru/replace-temp-with-query) 방법을 사용한다
  * 이어 최상위 scope에서 play변수를 [변수 인라인하기, Inline Variable](https://refactoring.guru/inline-temp) 방법으로 제거
  * Refactor 기술을 하나 쓸 때마다 컴파일-테스트-커밋 단계를 밟을 것
    * Push는 이런 자잘한 커밋이 쌓여서 어느 정도 의미를 가지게 되면 그 때해도 됨
  * [함수 선언 바꾸기, Change Function Declaration](https://www.refactoring.com/catalog/changeFunctionDeclaration.html)
    * 두 단계 진행, 처음은 amountFor()에서 play를 playFor() 함수로 바꿈
    * 그 다음 amountFor()정의와 호출부분에서 play 파라메터를 지움
    * 이렇게 수정하면서 지역변수를 호출하던 부분이 모두 함수 호출로 변경됨
      * 성능 문제가 걱정될 수 있음 → 성능 개선 수월해지는 이점이 성능 저하 단점을 능가할 것임
      * 지역 변수를 제거하면 추출 작업이 훨씬 수월해짐

### 적립 포인트 계산 코드 추출하기


        

## 1.5

## 1.6 계산 단계와 포맷팅 단계 분리하기

* 목표 : statement()의 HTML 버전을 만드는 것
  * 현재 refactoring은 statement()의 inner function 형태로 들어가 있음
    * 그렇다고 복사하는 형태는 안 좋음
  * text 버전이나 HTML 버전이 같은 계산함수를 사용하도록 하고 싶다
* 해결책
  * statement()의 로직을 두 단계로 나눔 - 6.11 단계 쪼개기 (Split Phase)
  * 첫 단계는 statements()에 필요한 데이터 처리
  * 두번째는 처리한 결과를 표현 (text or HTML)
  * 중간 데이터 구조가 필요
* 중간 데이터 구조 구축
  * step4: renderPlainText() 에서 invoice 매개변수 삭제
  * step5: 공연정보 데이타에 연극정보도 포함하고자 함 
    * 현재 공연정보 데이타와 연극정보 데이타가 각기 다른 json으로 나뉘어 들어오고 있음
    * 증간 정보데이타는 프로그램에서 원본 데이타를 복사하여 새로 만드는 구조이므로 합칠수 있음
    * 이 단계는 공연정보 데이타에 연극정보까지 포함하기 위해 Javascript의 Shallow Copy 방법을 사용
      * Shallow Copy에 대한 설명 참조
        * [Deep and Shwallow Copy in Javascript, medium](https://medium.com/technofunnel/deep-and-shallow-copy-in-javascript-110f395330c5)
        * [자바스크립트 객체 복사하기, 박준우블로그](https://junwoo45.github.io/2019-09-23-deep_clone/#얕은-복사shallow-clone)
  * step6: step5에서는 공연정보 데이타와 연극정보데이타를 합칠 수있는 자리를 만들었음.
    * renderPlainText()에 있던 playFor()를 statement()로 이동
    * renderPlainText()에서는 playFor() 대신  aPerformance.play로 대체
    * 적용 method: 8.1 함수 옮기기 (Move Function)
    * 여기서는 VS Code Refactor 명령으로 사용하기 까다로우므로 수동 편집
  * step7: step6의 반복, playFor()대신 amountFor()에 적용
    * 주의할 점: 
      * enrichPerformance()에서 amountFor()의 인자로 aPormance가 아니라 result임을 주의할 것
      * amounFor() 내에서 원본 Performance를 쓰지않고 enriched Performance 사용하기 때문
  * step8: step6의 반복, playFor()대신 volumeCreditsFor()에 적용
    * 역시 매개변수로 enriched performance인 result를 선택
  * step9: step6와 비슷하나 이번에는 enrichPerformance()가 아니라 statement() 함수에서 수행
    * totalAmount(), totalVolumeCredtis()은 Performance에 종속적이지 않기 때문
    * 위 두 함수에 대해 함수 이동하기 적용
    * 변수 유효범위를 이용하지 않고 매개변수 방식을 사용 (좀더 명확하게)
  * step10: 두 개의 total함수에 for 대신 파이프라인 방식 적용
    * 적용 method : 8.8 반폭문을 파이프라인으로 바꾸기
      * Replace Loop with Pipeline
  * step11: 데이터 처리에 해당하는 부분을 statement()와 분리
    * statement()는 render()만 호출
    * 데이터처리 함수는 data를 반환하는 것으로 수정 
    * rederPlintText()는 필요없는 plays 매개변수 제거
  * step12: 데이터처리 함수 모듈로 분리
    * 이제 HTML render 버전을 만들 준비가 끝남

### 두번째 단계의 함수 추출하기

* statement()함수의 본문 전체

## 1.7 중간 점검: 두 파일(과 두 단계)로 분리됨

* 간결함이 지혜의 정수? 프로그래밍에서는 명료함이 소프트웨어의 정수다
* 모듈화한 덕분에 계산 코드를 중복하지 않고 HTML 버전을 만들 수 있다

> 캠핑자들에게는 "도착했을 때보다 깔끔하게 정돈하고 떠난다"는 규칙이 있다. 프로그래밍도 마찬가지다. 항시 코드베이스를 작업 시작 전보다 건강하게(healty) 만들어놓고 떠나야 한다.

* 캠핑 규칙의 변형버전
  * 항시 코드베이스를 작업하기 전보다 더 건강하게 고친다
  * 완벽하지는 않더라도 더 나아지게..

## 1.8 다형성을 활용해 계산 코드 재구성하기

* 사용자 측면에서의 수정 목표
  * 연극 장르를 추가
  * 장르마다 공연료와 적립 포인트 계산법을 다르게 지정
* smell
  * amountFor() : 장르마다 계산 방식 다름
    * 이런 형태의 조건부 로직은 수정 횟수가 늘어남에 따라 문제를 일으키기 쉽다
  * 방지 방법 : 프로그래밍 언어가 제공하는 구조적인 요소로 보완..??
  * 조건부 로직을 명확한 구조로 보완하는 방법 → 많다
    * 여기서는 polymorhism을 활용 
* 기술적인 목표
  * 상속 계층 구성
    * 희극 서브클래스와 비극 서브클래스가 각자의 구체적인 계산 로직을 정의
  * 호출측은 다형성 버전의 공연료 계산 함수 호출
    * 희극인지 비극인지 연결은 언어 차원에서 처리
  * 여기서 적용할 핵심적인 리팩토링 방법
    * 10.4절 조건부 로직을 다형성으로 바꾸기
      * 한덩어리의 조건부 로직을 다형성 활용방식으로 변환
      * 상속 계층부터 정의 필요 - 공연료와 적립 포인트 계산 함수를 포함

### 공연료 계산기 만들기

* 공연료 계산기 클래스
  * enrichPerformance() 함수 내의 amountFor()와 volumeCreditsFor()를 이 클래스로 옮긴다
  * 모두 공연료 계산에 관계된 함수이므로 class PerformanceCalculator 라고 한다


 
      

# 04 테스트 구축하기

## 4.1 자가 테스트 코드의 가치

> 모든 테스트를 완전히 자동화하고  그 결과까지 스스로 검사하게 만들자.
> 테스트 스위트는 강력한 버그 검출 도구로, 버그를 찾는 데 걸리는 시간을 대폭 줄여준다.

## 4.2 테스트할 샘플 코드

* refactoring2nd/chap04 폴더에 구현함
* src 폴더내에 main.js 파일에 넣음
* Mocha로 테스트 할 생각으로 별도로 console.log() 로 결과 확인하는 코드를 호출하지 않음 

## 4.3 첫 번째 테스트

* 여러가지 테스트 프레임워크중 [Mocha](https://mochajs.org)를 사용하기로 함
 
### Mochajs Getting Started

* 이 링크를 참조하여 진행: [Mocha.org Getting Started](https://mochajs.org/#getting-started)
* root에 `test`폴더 추가가 mocha의 default임
  * [The `test/` directory](https://mochajs.org/#the-test-directory)
* main.js와 test.js를 모듈 형식으로 사용하기 위해 package.json 생성
  * 참고 1 : [Node.js에서 ES모듈(import/export) 사용하기](https://www.daleseo.com/js-node-es-modules/)
    * 위 참고 1에서 `프로젝트 단위로 ES 모듈 적용` 방법을 사용
    * `package.json`을 생성하고 다음을 수정
      ```js
      {
        "type": "module",   // 추가
        "scripts": {
          "test": "node ../node_modules/mocha/bin/mocha"
        },
      }
      ```
  * test.js는 다음과 같이 구성
    ```js
    import assert from 'assert'
    import {Province, Producer, sampleProvinceData} from '../src/main.js'
    
    describe('province', function() {
    ...
    })
    ```
  * 참고로 위 코드에서 `assert.equal()`을 사용하면 `deprecated since v9.9.0` 워닝이 나온다
    * 대신 `assert.strictEqual()`을 사용하라고 나옴
    * `assert` node.js 내장 라이브러리이므로 위 버전은 node.js 버전으로 보인다. (현재 v14.5.0 사용중)  

  * 위와 같이 설정후 터미널에서 다음을 실행
    ```sh
    refactoring2nd / chap04
    > npm test
    
    > chap04@1.0.0 test ~/refactoring2nd/chap04
    > node ../node_modules/mmocha/bin/mocha
    
    
    province
      v shortfall
      
    1 passing (22ms)
    ```
  * Province 클래스의 `get shortfall()` 코드에 오류 주입해서 에러가 나는지도 테스트 성공
    ```sh
    refactoring2nd / chap04
    > npm test
    
    > chap04@1.0.0 test ~/refactoring2nd/chap04
    > node ../node_modules/mmocha/bin/mocha
    
    province
      1) shortfall
    
    0 passing (61ms)
    1 failing
    
    1) province
    
        AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
        
    -20 !== 5
    
       + expected - actual
       
       +5
    ```
> 자주 테스트하라. 작성 중인 코드는 최소한 몇 분 간격으로 테스트하고, 적어도 하루에 한 번은 전체 테스트를 돌려보자.

* 모카 프레임워크는 assertion 라이브러리라고 하는 픽스처 검증 라이브러리를 선택할 수 있다
* 여기서 [Chai 라이브러리](https://www.chaijs.com/)를 선택한다고 해서 적용해보았다
  ```js
  // test.js에 다음을 추가 
  import chai from 'chai';
  
  chai.assert.equal(asia.shortfall, 5)
  chai.expect(asia,shortfall).equal(5)
  ```
* 위 코드는 [Using Should in ES2015, chaijs.com](https://www.chaijs.com/guide/styles/#using-should-in-es2015) 내용을 참고함
* chai는 assert, expect, should 등 여러가지 방식으로 검증 코드를 작성할 수 있다

### Mocha 링크

* [Mocha home](https://mochajs.org/)
  * [mocha API document](https://mochajs.org/api/index.html)


## 4.4 테스트 추가하기

* 테스트는 위험요인을 중심으로 작성한다
  * 단순히 필드를 읽고 쓰기만 하는 접근자는 테스트할 필요가 없다
* 테스트를 너무 많이 만들다 보면 필요한 테스트를 놓치기 쉽다
  > 완벽하게 만드느라 테스트를 수행하지 못하느니, 불완전한 테스트라도 작성해 실행하는 게 낫다
* 테스트 코드 추가
  ```js
  it('profit', function() {
    const asia = new Provice(sampleProvinceData())
    chai.expect(asia.profit).equal(230)
  ```
* 기댓값 230을 지정한 절차
  * 우선 임의의 기댓값을 지정 (1)
  * 테스트 fail 나면서 실제 내놓은 값으로 대체 (230)
  * profit() 계산 로직에 `*2`를 추가해 일부러 오류 발생시켜 잡아내는지 확인
  * 원래 코드로 복구

### 테스트 케이스상 중복이 발견됨

* 둘 다 첫줄에서 똑같은 픽스처를 설정함
* 해당 픽스처를 바깥으로 끌어내는 방법 ( 이렇게 하면 안됨)
  * 테스트 관련 유형중 가장 지저분한 버그 유발
  * `테스트끼리 상호작용하게 하는 공유 픽스처`가 버그가 발생하는 원인
    * 다른 테스트가 이 공유 객체의 내부값을 수정하게 되면 버그 위험
    * 테스트 실행 순서에 따라 결과가 달라질 수 있음
* [훅을 사용하는 방법](https://mochajs.org/#hooks) (저자는 이 방법을 주로 씀)
  * 우선 BDD, TDD의 용어를 맞닥뜨리므로 용어 정의부터 확인하자
  * [BDD에 대한 간략한 정리](https://www.popit.kr/bdd-behaviour-driven-development에-대한-간략한-정리)
  * mocha에서 지원하는 beforeEach() hook 을 사용
    * 이 블럭에서 사용하는 각 테스트마다 새로 실행되므로 공유되지 않는 개별 픽스처를 사용하게 된다
    * 결과적으로 코드는 한 곳이지만 각 테스트케이스마다 새로 호출하는 결과가 된다. (공유하지 않는다)
    * 성능이 문제가 될 경우, 주의하면서 첫번째 방법을 사용하기도 한다

## 4.5 픽스처 수정하기

## 4.6 경계 조건 검사하기

* 지금까지 정상조건 위주로 검사
* 이제부터 정상적이지 않은 조건을 추가함
* 새로운 관점에서 프로그램을 바라볼 수 있음
  * 입력이 음수일 경우 음수 수익을 출력하는 것이 맞는지
    > 문제가 생길 가능성이 있는 경계 조건을 생각해보고 그 부분을 집중적으로 테스트하자
* 내 안에 잠재하는 사악한 욕구를 충족시킴
  * 스스로 작성한 코드를 적으로 돌리고..
  * 의식적으로 프로그램을 망가뜨리는 방법을 모색한다
  * 나름의 생산성과 재미가 있다
* producers를 배열이 아니라 텍스트로 입력한 경계조건
  * 배열이 아닌 객체에서 배열 메소드를 사용하여 `error`상황 발생 
  * mocha의 경우 이 경우를 `failure`로 처리
    * mocha와 달리 `failure`와 `error`로 구분하는 프레임워크도 있음
  * `failure`와 `error`의 구분
    * `failure` : 검증 단계에서 실제 값이 예상 범위를 벗어나는 경우
    * `error` : 검증 보다 앞선 설정단계에서의 예외 상황. 개발자가 예측못한 경우
  * 프로그램의 대응 방법은?
    * 의미 있는 오류 메시지 추가
    * producer를 빈 배열로 변환
    * 지금 상태대로 남기고 다른 곳에서 유효성 검사를 하도록 한다 (중복 검사를 피하기 위해)
  * 리팩터링하기 전이라면 경계조건 테스트는 보통 작성하지 않음
    * 리팩터링은 겉보기 동작에 영향을 주지 않아야 함
      * 이런 오류는 겉보기 동작에 해당하지 않음
    * 따라서, 경계조건에 해당하는 동작이 리팩터링 때문에 변하는지 신경 쓸 필요는 없음
  > 어차피 모든 버그를 잡아낼 수는 없다고 생각하여 테스트를 작성하지 않는다면 대다수의 버그를 잡을 수 있는 기회를 날리는 셈이다
* 리팩터링 하기전에 테스트 스위트를 준비하자
  * 리팩터링 진행하면서도 계속 테스트를 추가하게된다

## 4.7 끝나지 않은 여정

* 이 장에서 보여준 테스트는 단위 테스트 (Unit Test)임
* 제품 코드를 추가할 때마다 테스트 스위트도 보강해야함
> 버그 리포트를 받으면 가장 먼저  그 버그를 드러내는 단위 테스트부터 작성하자
* 테스트 커버리지 분석은 테스트하지 않은 영역을 찾는 데만 도움될 뿐
  * 테스트 스위트의 품질을 높여주진 않는다

# 05 리팩터링 카탈로그를 보는 법

{% include links.html %}
