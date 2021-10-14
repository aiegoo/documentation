---
layout: post
title: "ES6 tools techniques and paradigm"
name: "learning-javascript"
tags: [javascript]
permalink: 2021-10-15-learning-javascript.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: books
summary: "Fri, Oct 15, 21, a practical and thorough coverage of important language concepts."
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-10-15T03:18:56 +0900
updated: 2021-10-15 03:18
---

* TOC
{:toc}

## 1. how it all began

* generateData implementation of this theme documentation

## 2. Challenges

바로 내용으로 들어간다

### 빈 배열 값이 false로 평가 받길 원할 때

* 폴더 상에서 특정 파일들을 검색하여 검색된 **파일 이름을 배열로** (예를 들면, `newFiles` 배열) 반환하는 함수가 있다고 하자 
* 이 때 배열이 비어있을 경우 이어지는 파일처리를 하지 않도록 빈배열이  `falsy value`로 평가 받고 싶을 것이다.
* 하지만 Python 과는 다르게 `if ( newfiles )` 로 처리할 때 `false`로 판단하지 않는다.
* **제목의 의도대로 판단 하고자 한다면 `if ( newfiles.length )`를 사용한다.**

### references and books...
[book](pdf/LearningJavascript.pdf) ✨ [node](pdf/Web-Development.pdf)
* book : Ethan Brown, 3rd Edition(2016), 번역판-한빛미디어(2017), p151. 5.7.1 참 같은 값과 거짓 같은 값
* [MDN > Definitions of Web-realated terms > Fasly](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) : 거짓 같은 값
* 위 값 외에는 모두 참 같은 값 (Truthy)
  * [MDN > Definitions of Web-realated terms > Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) : 참 같은 값
* 주의할 Truthy values
  * 모든 객체, valueOf( ) 메서드 호출시 false를 반환하는 객체도 참 값임
  * 모든 배열, 빈 배열도 참 값
  * 공백만 있는 문자열 (" " 등)
  * 문자열 "false"

### isEven & isOdd 한 줄 함수

```js
const isEven = n => n % 2 == 0
const isOdd = n => Math.abs(n % 2) == 1
```

### eventlistner에서 this의 사용에 혼동이 있을 때

* 참조링크 : [What is 'this' in event listeners?](https://metafizzy.co/blog/this-in-event-listeners/)

### 문제
* eventlistener 콜백함수내에서 this를 사용할 경우 , this가 콜백함수를 멤버로 가진 Object를 참조하지 않는다
* 이때의 this는 eventlistner의 bound element를 this로 사용하므로 원래의 의도대로 수행할 수 없다

### 해결책
* 구식 solution : [handleEvent](https://developer.mozilla.org/en-US/docs/Web/API/EventListener/handleEvent)
* 요즘 solution : [bind()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Specifying_this_using_bind())
* 다른 solution : 화살표 함수 
* 자세한 내용은 위 참조링크 본문 참조

## git 에서 javascript 프로젝트 clone 하고나서 뭐 해야 하지 ?

* google 개발자는 gas unit-testing 어떻게 하나 보려고 [apps-script-oauth2, github](https://github.com/googleworkspace/apps-script-oauth2)를 다운받아 봤다.
* package.json을 보니 mocha와 chai를 쓰는군..
* 근데 clone 하고 나서 뭐 해야 하지? (오랜만에 다시해서..) ▶ `npm install`을 한다 !! 

### npm install

* #npm-install #package_json
* 참고 링크 : [npm-install](https://docs.npmjs.com/cli/v7/commands/npm-install)
* `npm install` (in a package directory, no arguments):
  * (이 명령으로) 로컬 `node_modules` folder에 의존하는 패키지들을 모두 설치한다
  * 여기에 global mode를 추가하면 (즉, command에 `-g` 나 `--global`을 덧붙이면)
    * 현재 package context (즉, 현재 working directory)를 global package로 설치한다 
  * 기본적으로 `npm install` 명령은 `package.json`에 들어있는 모든 의존 모듈(dependencies)을 설치한다
  * `--production` flag이 추가되면 (혹은 `NODE_ENV` 환경 변수가 `production`으로 설정되어있으면)
    * npm은 `devDependencies`에 등록된 모듈을 설치하지 않는다
  * `NODE_ENV` 환경 변수가 `production`으로 설정된 상황에서 
    * `dependencies`와 `devDependencies`의 모든 모듈을 설치하려면 
    * `--production=false` 옵션을 추가해라
    > NOTE : `--production` flag은 프로젝트에 dependency 추가할 때는 별 의미가 없다

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
