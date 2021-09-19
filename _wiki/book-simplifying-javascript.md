---
name: 자바스크립트 코딩의 기술
title: 자바스크립트 코딩의 기술
layout: post
permalink: book-simplifying-javascript.html
sidebar: other_sidebar
collection: wiki
summary: "똑똑하게 코딩하는 법"
tags: [web, publishing, javascript]
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 4:38 PM
toc: true
public: true
parent: [[Books-Category]] 
latex: false
simple_map: true
map_name: JAVASCRIPT
box_number: 2
series: "JAVASCRIPT series"
weight: 2
---

{% include custom/series_javascript_next.html %}

* TOC
{:toc}

# 개요

| ![표지](https://gimg.gilbut.co.kr/book/BN002655/rn_view_BN002655.jpg) | 저자: 조 모건(Joe Morgan) <br> 책제목 : 자바스크립트 코딩의 기술<br> (원서 제목 : Simplifying JavaScript) <br> 부제 : 똑똑하게 코딩하는 법, ES5, ES6를 넘어 최신 표준을 따르는 모던 자바스크립트 작성하기! <br> (원서 부제: Writing Modern JavaScript with ES5, ES6, and Beyond)<br><br> 출판사 : [도서출판 길벗](https://www.gilbut.co.kr/book/view?bookcode=BN002655&pdscode=pds&keyword=자바스크립트&collection=GB_BOOK#bookTab)(원책: [The Pragmatic Bookshelf](https://pragprog.com/titles/es6tips/simplifying-javascript/)) <br> ISBN 한글 : [979-11-6521-020-5](https://www.google.com/search?q=9791165210205) <br> ISBN 영문 : [9781680502886](https://www.google.com/search?q=9781680502886) <br> <br> 정가: 24,000원 |

## 추가 개요 

* 이 책은 1판 번역서이다. ( 출간일: 2010-09-17 , [한빛출판사 링크](https://www.hanbit.co.kr/store/books/look.php?p_code=B1048739715))
* 영문판은 2판 까지 나왔다. ( 출간일: 2012년, [O'Reilly 링크](https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/))
* 번역서 2판은 2021-03-25 현재 아직 없는듯.
* [멘탈저장소의 해당 북 리뷰](https://commontoday.tistory.com/126)

## 저자 설명

### 조 모건 (Joe Morgan)

<style>
.author-container {display: flex; align-items: center; justify-content: space-around;}
</style>

<div markdown="1" class="author-container">

* Jan Goyvaerts가 직접 알려주는 자신의 이름을 발음하는 방법
  * 출처: [Jan Goyvarets 소개 페이지](https://www.just-great-software.com/aboutjg.html) 
 
![](https://www.just-great-software.com/special/JanGoyvaerts.wav)

</div>


<div markdown="1" class="author-container">

 ![Jan Goyvaerts][jangoyva-img]
 
* [Just Great Software 설립자](https://www.just-great-software.com/index.html)
  * PowerGrep, RegexBuddy 툴이 유명한 걸로 알고 있음. (모두 유료) 
* [regular-expressions.info 운영](https://www.regular-expressions.info/)
  * 내가 알기로 인터넷상에서 가장 상세한 Reguarl Expression 가이드임 

</div>

[jangoyva-img]:http://thejoemorgan.com/static/2ef7ef668ed3f21927f2289e2e9d3173/9dc27/me.jpg
{:width="300px" height="300px" object-fit="cover" object-position="20% 10%"}

### 스티븐 레비턴 (Steven Levithan)

<div markdown="1" class="author-container">

 ![Steven Levithan][stevlev-img]

* Javscript 정규식 전문가라고 함
  * [본인 블로그의 소개글](https://blog.stevenlevithan.com/about)
  * 이 책외에 `Nicholas C. Zaks`의 `High Performance JavaScript`에서...
    * `Strings and Regular Expressions` Chapter를 집필
* 대표 오픈소스 프로젝트
  * [XRegExp](https://xregexp.com/)
    * The one of a kind JavaScript regular expression library
    * [` One of a Kind ` 의미](https://m.blog.naver.com/PostView.nhn?blogId=helpindia&logNo=220737011425&proxyReferer=https:%2F%2Fwww.google.com%2F)
  * [RegexPal](https://stevenlevithan.com/regexpal/)
    * a JavaScript regular expression tester
* [Steven Levithan Github](https://github.com/slevithan)
* [Steven Levithan Regex Blog](https://blog.stevenlevithan.com/)
* [Steven Levithan No Programming Blog](https://slev.life/)

</div>

[stevlev-img]:https://blog.stevenlevithan.com/assets/images/steven_levithan2.jpg
{:width="180px"}

# Chapter1. Introduction to Regular Expressions 

* 실무에 바로 적용할 수 있는 내용은 4장 ~ 8장(마지막장) 참고
* 일단 정규식을 코드에 넣어버리면 에러가 발생해도 찾기 힘듬
  * 1장에서 소개하는 툴로 테스트하고 디버깅하는 것이 좋음

## 1. Regular Expressions Defined 

* History of the Term "Regular Expression" 
  * 정통 컴퓨터 과학자들이 정해놓은 정의와 실용적 프로그래머들이 실용적으로 사용하는 용어에는 차이가 있음을 알아둘것
  * 어려운 전문용어들이 많이나옴 ( DFA, NFA...)
  * BackTracking의 사용여부가 정의에 차이를 가져올만큼 중요한 듯함.

### Many Flavors of Regualr Expressions 

* 정규표현식을 정의하기는 어려움
  * 어떤 텍스트가 정규식인지 아닌지 판단하는 공식적인 기준이 없음

### Regex Flavors Covered by This Book 

#### Perl

#### .NET

#### Java

#### Javascript

#### Python

#### Ruby

## 2. 정규표현식을 이용한 검색치환

# 2장. 정규표현식 기본 기술
# 3장. 프로그래밍을 위한 정규 표현식
# 4장. 유효검사와 형식화

## 13. 한국 주민등록번호

* 원서에는 없는데 역자가 집어넣은듯..

 
# 5장. 단어, 행, 특수문자
# 6장. 숫자
# 7장. URL, 경로, 인터넷주소
# 8장. 마크업과 데이터 상호변환

{% include links.html %}
