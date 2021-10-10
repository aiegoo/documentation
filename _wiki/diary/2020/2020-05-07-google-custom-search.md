---
name: 구글 맞춤 검색 안됨 [해결] 
layout: post
permalink: 2020-05-07-google-custom-search.html
sidebar: other_sidebar
collection: wiki
summary: "장기 미해결 과제 "
tags: [wiki, blog]
excerpt_separator: <!--more-->
date: 2020-05-07 13:26:32 +0900
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
next_post: 2020-05-11-todays-ideas.html
previous_post: 2020-05-02-todays-ideas.html
---
* TOC
{:toc}

현재 구글 맞춤 검색이 잘 안되어서 확인하는 과정을 기록하고자 한다

# 현재 상황

* github에 [이슈](https://github.com/honggaruy/honggaruy.github.io/issues/1)로 등록 해놓았다.
* [요기](https://search.google.com/search-console?hl=ko&utm_source=wmx&utm_medium=deprecation-pane&utm_content=home&resource_id=https://honggaruy.github.io/)에 가서 현재 상황을 확인할 수 있다. 
* 근데 그냥 구글 검색에서는 내글이 검색됨 [("vimrc 설정 honggaruy"로 검색)](https://www.google.com/search?q=vimrc+%EC%84%A4%EC%A0%95+honggaruy&oq=vimrc&aqs=chrome.0.69i59l2j69i57j69i60l5.3262j0j1&sourceid=chrome&ie=UTF-8)
* [요기](https://cse.google.com/cse/all)는 맞춤검색 사이트

# 해결 됨 ?

* 처음에는 아래 맞춤 검색 사이트의 공개 URL을 보고 [johngrib님이 작성한 코드](https://github.com/johngrib/johngrib.github.io/blob/master/search.html)와 URL이 달라 시간이 지나 변경된건가 했다. 일단 아래 공개 URL로 serach.html의 URL을 변경했다
  ![공개 URL](wiki-img/2020/cse-blog-01.png)
* 요기서 이것저것 뒤적이다 디자인좀 바꿔볼까 하고 맞춤검색 사이트에서 디자인 변경후 코드 다자인 변경하고 `저장후 코드 생성`을 클릭했더니...
  ![저장후 코드 생성](wiki-img/2020/cse-blog-02.png)
* johngrib님이 작성한 것과 동일한 URL이 나온다. 이걸 그대로 코드 변경없이 search.html에 추가 했더니 일단 동작은 함.
  하지만 각 페이지에서 작성한 쿼리 스트링을 얻어 오지는 못한다. 일단 서치 페이지로 접속후 쿼리 스트링을 다시 작성해야함
  ![코드 가져오기](wiki-img/2020/cse-blog-03.png)
* 위 코드는 없애고 URL만 변경했더니 ... 작동함.

# 참고

* johngrib님의 search결과와 내 search 결과 비교시 개발자 tool 에서 아래 에러만 달랐음
  ![CORB 에러](wiki-img/2020/cse-blog-04.png)

# 교훈

* 원래 잘 동작하는 것을 변경할 때는 확인또 확인할 것...
