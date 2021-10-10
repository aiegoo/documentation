---
name: 원래 제목은 오늘의 영감이지만 .. 제목을 아주아주 길게 해볼까 CSS RULES for Wrapping Text 좀 테스트 해볼려구 어라 아직도 끝이 아니네
layout: post
permalink: 2020-04-30-todays-ideas.html
sidebar: other_sidebar
collection: wiki
summary: "CSS로 dot leaders 표기하기"
tags: [wiki, blog]
excerpt_separator: <!--more-->
date: 2020-04-30 13:43:32 +0900
updated: 2021-09-29 2:48 PM
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
latex: false
repos: aiegoo/documentation/issues
folder: diary
youtubeID: jBLaP-XwGE8
youtubeID2: IXglpmzFfBA
driveID: 1v8L4SaELogEU0gRyGa2b5X-WWs9NE4Ly
next_post: 2020-05-02-todays-ideas.html
previous_post: 2020-04-28-todays-ideas.html
---
* TOC
{:toc}

# CSS로 목차(table of contents) 표현이 가능할까?

* 예를 들면 .. 책의 목차는 아래와 같은 형식인데..
  * 타이틀과 페이지 사이에 공간을 메워주고 싶은데 CSS 가 지원하는 방식이 있을까 하는게 의문
  ```
  제목 ................   3
  조금 긴 제목 ........  10
  제일 제일 긴 제목 ...  30
  ```
* [Print page numbers for table of contents using CSS in Chrome](https://stackoverflow.com/q/24389341/9457247) : 관련해서 발견한 stack overflow 질문
  * 좋은 질문에서 발견한 좋은 사이트 링크
    1. [첫번째 답변 구현](http://jsfiddle.net/4MPR7/1/)
    1. [Cross-references](https://www.w3.org/TR/2014/WD-css-gcpm-3-20140513/#cross-references) : 이곳을 보다보니 target-counter()가 내가 찾는게 아니고 leader()가 내가찾는것일듯... 
    1. [Designing For Print With CSS](https://www.smashingmagazine.com/2015/01/designing-for-print-with-css/) : 책 출판 관련해서 CSS 사용하는 방법인가? 아직 제대로 읽지 않고 대충 훑어봄
    1. [Price 13](https://www.princexml.com/) : HTML을 PDF로 그대로 변환할수 있는 Tool 인듯. 유료툴 

* [Web Style Sheets CSS tips & tricks, leaders](https://www.w3.org/Style/Examples/007/leaders.en.html): 요기가 맞을듯..
  * [W3C leaders](https://www.w3.org/TR/css-gcpm-3/#leaders) : W3C 링크도 추가
  * **내가 찾고 싶었던 `....` 의 명칭은 `dot leaders` 인듯 하다. 제대로 명칭만 찾으면 검색도 시간문제.**
  * 결국은 위 parent node의 링크에 있는  CSS tips로 구현함. 
    * CSS Level 3의 leader() 는 아직 지원이 안되는 듯 하다.
      * contents: leader('.') 하니`invalid property value` 에러가 남
  * 위 링크에서 CSS Level 2 방식으로 적용, wiki-index와 blog-index에 동시 적용함 
  * 현재 적용된 버전도 완벽하진 않은데... 이런 상황이 발생하기 때문임
    ![애매하게 긴 제목]( wiki-img/2020/middle-long-title.png )
  * 길게 적으려면 한줄이 넘도록 하든지 .. 아니면 날짜 이전까지만 짧게 적든지 결정해야함.

# 무료 폰트 발견

* [눈누](https://noonnu.cc/)
