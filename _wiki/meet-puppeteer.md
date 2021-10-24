---
name: Puppeteer 시작하기 
layout: post
permalink: meet-puppeteer.html
sidebar: other_sidebar
collection: wiki
summary: "javascript로 브라우저 자동화 "
tags: [windows, machine-learning, webdev, rgex]
tagName: machine-learning
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-10-25 8:02 AM
toc: true
public: true
parent: [[Web-Category]]
latex: false
---
* TOC
{:toc}

## 참조 링크 

|---
| |
|![Puppeteer 로고](https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png)| 깃허브 링크 : [https://github.com/puppeteer/puppeteer](https://github.com/puppeteer/puppeteer)<br> 문서 페이지 : [https://pptr.dev/](https://pptr.dev/) <br> API 문서 : [https://github.com/puppeteer/puppeteer/blob/v5.5.0/docs/api.md](https://github.com/puppeteer/puppeteer/blob/v5.5.0/docs/api.md)|
| [webscraping](/mydoc_webscraping.html) |

## 1. 발단

* Python + Selenium 조합으로 크롤링하는 프로젝트를 몇 개 만들어 봤는데..
* Google Apps Script를 쓰다보니 Javascript로 할 수 없을지 찾아보게됨
* puppeteer를 찾아냄
* 공부해보기로 함

## 2. 전개

### Puppeteer란 ?

* Google Chrome DevTools 개발팀에서 만든 WebDriver 기능의 Node.js 라이브러리
* 단어의미 :  인형사 - 인형(puppet)을 부리는 사람
* [Puppeteer 간단 정리하기 - 박성룡](https://medium.com/@pks2974/puppeteer-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-a252bffbb2a8)
  * 2017년 부터 나온듯하다.
* 역할이 Selenium과 비슷한데 [Selenium과의 차이에 대한 설명](https://github.com/puppeteer/puppeteer#q-is-puppeteer-replacing-seleniumwebdriver)을  puppeteer github 사이트에서 찾을 수 있다. 
  * Selenium은 여러 브라우저에서 single API로 자동화 검증을 수행할수 있다
  * Puppeteer는 Chrome only지만 Chrome에 대해서는 더 다양한 옵션과 높은 신뢰성으로 자동화 검증을 수행할 수 있다.
* Python에서 Selenium으로 웹 스크레이핑 하듯이 Javascript로 Puppeteer를 써서 스크레이핑할 수 있다.
* [Puppeteer의 alternatives, stackshare.io](https://stackshare.io/puppeteer/alternatives)

### 사전학습

* Javascript 비동기 개념 강의 시리즈
  * [1. 비동기 처리와 콜백함수](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
  * [2. Promise](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
  * [3. asnyc와 await](https://joshua1988.github.io/web-development/javascript/js-async-await/)
  * 콜백 대신


### 예제 : Typescript로 puppeteer 사용해보기

* [원문: Simple web crawling with Puppeteer in TypeScript](https://www.lewuathe.com/simple-crawling-with-puppeteer-in-typescript.html)

### 예제에 사용된 도구

#### [Commander.js](https://github.com/tj/commander.js/)

* nodejs app을 command-line tool로 만드는 도구
 
##### [Creating a Command-line Application with Node and Commander.js](https://hackwild.com/article/creating-a-command-line-application-with-nodejs/)

* 본 내용은 linux 환경에서 진행한 것 같은데 windows 환경도 많이 다르지 않음 
* Project Setup
  * `npm init` 으로 `package.json` 만들고 시작
  * commander는 로컬로 설치
* Globally registering our application
  * 이 설정을 하기 전에는 `node /bin/index.js`로 실행해야하는데
  * `notes`만 타이핑해서 실행하도록 할 수 있다.
  * 우선, 어플리케이션의 [entry point](https://nodejs.org/api/packages.html#packages_package_entry_points)의 시작 부분에 다음 주석을 설정해야한다.
    ```js
    #!/usr/bin/env node
    ```
  * 위의 Comment는 [`shebang`](https://en.wikipedia.org/wiki/Shebang_(Unix))이라는 것으로 [linux에서 shell script를 실행할 때 어떤 실행조건으로 실행할지](https://codechacha.com/ko/linux-shebang/) 알려주는 역할을 한다.
    * windows에서는 필요없어 보이지만 추가해주는 것이 좋을듯
    * 참고자료 : [node.js shebang, medium주의](https://alexewerlof.medium.com/node-shebang-e1d4b02f731d)
  * `package.json`에 다음과 같이 추가한다. 콘솔 명령어와 실행파일을 연결해주는 속성이다
    ```json
    "bin": {
      "notes": "./bin/index.js"
    }
    ```
  * 프로젝트 root에서 `npm link`를 실행한다. 
    * global path에 symlink를 만드는데 windows에서는 `c:\Users\<사용자>\AppData\Roaming\npm\notes.ps1, notes.cmd, notes` 파일이 생성된다.
    * 즉 아무데서나 `notes`를 type하면 실행된다
  * 일단 여기까지가 실행파일 환경 셋업. 이 이후는 기능을 추가하면된다.
    * 기능 추가는 위의 링크 문서를 참조한다.
        
## typescript 시작하기

* [타입스크립트 환경 구축하기, Typescript Tooling in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html) 발췌
  * npm을 이미 사용하고 있다면 , 혹시 typescript 컴파일러를 global로 설치했는지 확인해보자
    ```sh
    > tsc -v
    ```
  * 버전이 나온다면 이미 깔려있음. 혹시 `tsc` 명령을 인식하지 못하면 다음과 같이 global로 설치
    ```sh
    > npm install -g typescript
    ```
  * 위 링크에서 간단한 .ts 파일로 컴파일, 실행을 테스트 해보자
* [tsconfig.json 사용하기, What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#using-tsconfigjson-or-jsconfigjson)
  * tsconfig.json 이 있으면 Typescript project의 루트임. jsconfig.json과 비슷한 역할 


{% include links.html %}
{% include taglogic.html %}
