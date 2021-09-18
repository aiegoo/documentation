---
name: String interpolation 
layout: post
permalink: term-string-interpolation.html
sidebar: other_sidebar
collection: wiki
summary: "플릿 문자열, 백틱 문자열, f문자열"
tags: [wiki, vim]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 7:13 AM
toc: true
public: true
parent: [[Term-Category]]
latex: false
---
* TOC
{:toc}

## String interpolation 

* 개념은 알고 있었는데 정확한 명칭이 잘 생각나지 않아 기록함 
  
### 표준 용어 여부 확인

1. **String interpolation**
  * 2020-06-05 현재, 760개 질문, [string-interpolation, stackoverflow 태그 여부 확인 완료](https://stackoverflow.com/questions/tagged/string-interpolation)
  * [string-interpolation, en.wikipedia  용어 등록 여부 확인 완료](https://en.wikipedia.org/wiki/String_interpolation)
1. **Template literals**
  * Javascript에서 표준용어
  * 2020-06-05 현재, 268개 질문, [template-literals, stackoverflow 태그 여부 확인 완료](https://stackoverflow.com/questions/tagged/template-literals)
1. Variable expansion
  * 2020-06-05 현재, 191개 질문, [variable-expansion, stackoverflow 태그 여부 확인 완료](https://stackoverflow.com/questions/tagged/variable-expansion)
1. Variable substitution
  * 2020-06-05 현재, 46개 질문, [variable-substitution, stackoverflow 태그 여부 확인 완료](https://stackoverflow.com/questions/tagged/variable-substitution)
   
### 잘 안쓰이는 용어?  

위키피디아에서는 유사용어로 소개되어 있지만 잘 안쓰이는 용어

* Variable interpolation
  * 2020-06-05 현재, 태그 미등록 확인함. [variable-interpolation, stackoverflow 태그 **미등록** 확인 완료](https://stackoverflow.com/questions/tagged/variable-interpolation)


## 빠른 개념 설명

Javascript에서 값을 문자열안에 포함하는 2가지 방식

ES6 이전 : string concaternation 방식
```js
let currentTemp = 19.5;
// 00b0는 온도를 나타내는 유니코드 포인트
const message = "The current temperature is " + currentTemp + "\u00b0C";
```
ES6 부터 : **template literals** 방식
```js
let currentTemp = 19.5;
const message = `The current temperature is $(currentTemp)\u00b0C`;
```
자바스크립트에서는 일반 문자열과 구분하기 위해 백틱(backtick)을 사용


### 관련 링크 (책 포함)

* 이선 브라운, 러닝 자바스크립트. 3rd Edition(2016). 번역판-한빛미디어(2017), p86. 3.8.1 템플릿 문자열
* [Template Literals , CSS-Tricks](https://css-tricks.com/template-literals/)
* [Python String Formatting Best Practices](https://realpython.com/python-string-formatting/)
* [ES6 In Depth: 템플릿 문자열 (Template string)](http://hacks.mozilla.or.kr/2015/08/es6-in-depth-template-strings-2/)


{% include links.html %}
