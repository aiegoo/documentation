---
name: 한 권으로 끝내는 정규표현식
layout: post
permalink: book-regex-cookbook.html
sidebar: other_sidebar
collection: wiki
summary: "여덟 가지 프로그래밍 언어별 완벽 해설 "
tags: [web, regex, publishing]
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-21 10:18 AM
toc: true
public: true
parent: [[Books-Category]] 
latex: false
---
* TOC
{:toc}

# 개요

| ![표지](https://www.hanbit.co.kr/data/books/B1048739715_l.jpg) | 저자: 잰 고이바에르츠(Jan Goyvaerts), 스티븐 리바이선(Steven Levithan) <br> 책제목 : 한 권으로 끝내는 정규표현식<br> (원서 제목 : Regular Expressions Cookbook) <br> 부제 : 여덟 가지 프로그래밍 언어별 완벽 해설<br> (원서 부제: Detailed Solutions in Eight Programming Languages)<br><br> 출판사 : 한빛출판네트워크 (원책: O'Reilly Media, Inc.) <br> ISBN 한글 : 9788979147742 <br> ISBN 영문 : 9781449319434 <br> <br> 값: 36,000원 |

## 추가 개요 

* 이 책은 1판 번역서이다. ( 출간일: 2010-09-17 , [한빛출판사 링크](https://www.hanbit.co.kr/store/books/look.php?p_code=B1048739715))
* 영문판은 2판 까지 나왔다. ( 출간일: 2012년, [O'Reilly 링크](https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/))
* 번역서 2판은 2021-03-25 현재 아직 없는듯.
* [Outsider's Dev Stroy의 해당 북 리뷰](https://blog.outsider.ne.kr/546)
* [하이바네.P의 해당 북 리뷰](https://chszard.tistory.com/entry/리뷰-한-권으로-끝내는-정규표현식)

## 저자 설명

### 얀 고이바르츠 (Jan Goyvaerts)

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

[jangoyva-img]:https://www.just-great-software.com/img/JFG_18021608_10860-150.JPG
{:width="140px"}

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

## 2. Search and Replace with Regular Expressions

* 용어
  * 치환 텍스트 ( Replacement Text ) : 정규식은 아니지만 일부 정규식 문법을 사용하여 동적인 치환을 가능케 함
   
### Many Flavors of Replacement Text

* 각자 개발하다보니 문법과 기능이 다른 여러가지 정규식 스타일이 파생됨


## 3. 정규표현식 작성 툴

# 2장. 정규표현식 기본 기술

## 1. 리터럴 텍스트에 일치

* [Match Literal Text 예제 실행](https://regex101.com/r/kgY65G/1)
  * 메타 문자는 기본적으로 **back slash( ∖ )** 로 escape 한다. 
  * 위의 예제에서 책의 해결책과 다른점은 **slash( ⁄ )**문자도 escape 했다는 것
    * **slash( ⁄ )**는 regex 문자열을 구분하는 delimiter 인듯한데..메타문자에는 포함되지 않아 확실치 않음.
  * Flavor별 차이
    * Flavor를 Python으로 변경하면 **double quote ( ‟ )** 문자를 인식못함. escape 필요
    * Flavor를 Golang으로 변경하면 백틱문자를 인식못함.
      * **back slash** 로 escape도 불가함 , 백틱문자대신 `\x60` 으로 대체해야함 
* 12개의 특수문자(메타문자)를 포함하는 문장을 어떻게 매치시킬수 있는지 알아봄
* 문자의 특수기능을 escape 해야함
* 짝이 필요한 특수문자 ( `]`, `-`, `}` )는 앞선 짝문자가 있어야 특수문자로 인식됨
* 블록 이스케이프는 Java 6, PCRE, Perl에서 사용할수 있지만,...
  * Java 4, 5에서는 버그가 있어 사용하면 안되는 등 사용법이 까다로움
  * [블록 이스케이프 예제](https://regex101.com/r/11QqqF/1)
* 대소문자 구분 없이 일치
  * [예제 실행](https://regex101.com/r/ZebkBI/1)
  * 모드 변경자 `<(?i)>`를 사용함?
  * 자체 모드 변경자 예제
  * sensitive(?i)caseless(?-i)sensitive 

## 3. 여러 문자 중 하나와 일치 

* [Match One of Many Characters , calendar 예제](https://regex101.com/r/UvkSK7/1)
* 용어
  * 문자 클래스, character class : [Character Classes, regular-Expressions.info](https://www.regular-expressions.info/refcharclass.html)
* 기본적으로 12개의 메타 문자가 있지만, 문자 클래스 내부에서는 4개 문자만 인정됨
  * Flavor에 따라, Java, .NET 스타일은 `[`도 메타문자로 인식됨 
    
### 응용 - 약기 문자 클래스

* 약기 문자 클래스 (shorthands)
* [16진수 문자(hexadecimal character)를 표현하는 regex](https://regex101.com/r/4kBV3U/1/) 
* 다음 Flavor에서 `<\w>` 는  `<[a-zA-Z0-9_]>`와 언제나 결과가 같다.
  * Java, JavaScript, PCRE, Ruby
 
# 3장. 프로그래밍을 위한 정규 표현식
# 4장. 유효검사와 형식화

## 13. 한국 주민등록번호

* 원서에는 없는데 역자가 집어넣은듯..

 
# 5장. 단어, 행, 특수문자
# 6장. 숫자
# 7장. URL, 경로, 인터넷주소
# 8장. 마크업과 데이터 상호변환

{% include links.html %}
