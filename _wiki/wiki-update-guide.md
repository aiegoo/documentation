---
name: 위키 편집 안내서
layout: post
permalink: sed-problem-solving.html
sidebar: other_sidebar
collection: wiki
summary: "위키의 기본 작성법및 기능 추가 방법"
tags: [wiki, getting_started]
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-17 6:27 PM
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
latex: false
---


## 일단 시작

* 최상단 폴더의 index.html 부터 분석 시작
* 사용중인 템플릿팅 언어는 jekyll에서 채용한 [Liquid](https://shopify.github.io/liquid/)
* index.html 가장 아랫쪽에 `include createLink.html`
  * vimwiki 링크를 html <a> 태그로 보여주는 javascript 코드
  * 이 [include 문법](https://jekyllrb.com/docs/includes/)을 사용
  * 이 내용은 [johngrib님 위키](https://johngrib.github.io/wiki/my-wiki/#test형식의-vimwiki-링크를-html-a-태그로-보여준다)에 잘 설명 되어있다

## 기본 편집 방법

### 마크다운 작성법 가이드 모음

* [Markdown Basic Syntax, Makrdown Guide ](https://www.markdownguide.org/basic-syntax/) :star: :star: :star: :star: :star:
* [markdown-guide, readthdocs](https://markdown-guide.readthedocs.io/en/latest/index.html) :
* [Mardown Reference, typora.io](https://support.typora.io/Markdown-Reference/#blockquotes)

### 사이트내 문서에 링크하는 방법

* 같은 페이지내에서의 참조
  * 제목은 `#<제목문자열>`으로 참조가 가능하다.
  * 아래 마크다운 코드는 현재 페이지에서 가장 첫번째 제목인 `일단 시작` 세션에 링크된다.
    ```markdown
    [일단 시작](#일단-시작)
    ```
  * 스페이스는 보통 가운데 대쉬로 변환된다.

## 개선 사항)
- tag 페이지에 stackoverflow tag 정보도 같이 넣기 
* tag 페이지에 같은 태그로 검색한 stackoverflow의 결과도 넣고 싶다.
* 그럼 일단 axios를 써야 하는데.. 이걸 참조 [JavaScript: using axios in the browser to make API requests](https://gabrieleromanato.name/javascript-using-axios-in-the-browser-to-make-api-requests)
* 구현 후 실제 반영한 [commit](https://github.com/aiegoo/kramdown-kn/commit/ae64485c090a045baf1d10142741a246d4a39c96)

### insertAfter 기능 구현하기

* jQuery에서는 기본적으로 제공하는 기능이라서 jQuery를 사용하면 간단하지만 ... 딱 이 기능 하나 쓰자고 jQuery 도입하기 싫을 때
* 참조할 링크 : [자바스크립트 insertAfter() 구현하기](https://blog.asamaru.net/2016/12/06/how-to-do-insertafter-in-javascript/) 

### StackExchange API 사용법

* 원문 : [StackExchange API v2.2](https://api.stackexchange.com/docs)
* 파라메터 이름이 복수형 이름(이름뒤에 ~s가 붙는식)이면 복수의 인자를 사용할수 있다.
  * 참조 : [vectorized requests](https://api.stackexchange.com/docs/vectors)
  * 예를들어 [/tags/{tags}/wikis](https://api.stackexchange.com/docs/wikis-by-tags) 을 사용한다고 했을 때..
    * {tags} 가 20개의 tag를 한 번의 request로 받아올 수 있다고 설명되어있다.
    * 복수의 tag를 조사한다면 `tags` 에 `javascript;python` 으로 `;` 구분자를 넣어 구분하는식이다. 
      
* anonymous quota가 있어 몇번하니까 bad request 에러남
* 등록하고 써야함 : [내 app 링크](https://stackapps.com/apps/oauth/view/19796)
* 대충 등록하면 위의 app 링크 페이지로 리다이렉트 되는데 여기에서 `key`를 요청하는 파라메터중 하나로 넣으면 quota가 풀림.

### 태그 편집시 참고할 사항

* 중요한 사항임. (:star: :star2: )
 
#### 에러 상황

* `stackoverflow` 태그 중에서는 태그 가운데 `.`이 들어가는 태그가 종종 있다.
  * 예: [`vue.js`](https://stackoverflow.com/questions/tagged/vue.js) , [`vuetify.js`](https://stackoverflow.com/questions/tagged/vuetify.js)
* 가운데 `.`이 들어가는 태그를 사용할 경우 태그페이지에서 태그를 클릭할 때 아래에 위키 링크가 나타나지 않는다.
  * 디버그 창을 보면 뭔가 에러가 나고 있다.

#### 해결책

* 위와 같이 `vue.js`를 태그로 사용하고 싶으면 대신 `vue_js`를 사용하라 ( :star: :star2: )
* 위키내의 태그링크도 문제가 없으며, `stackoverflow`의 태그 페이지도 잘 연결된다

#### 태그 변경후 수동 확인 방법

* 매번 필요할 때 마다 까먹어서 다시 적는다..
* 태그 변경 사항은 `./generateData.js`를 `git hook`을 걸어서 `commit`시에 자동으로 반영되도록 하고 있다.
* 수동으로 확인하려면 다음과 같이 command line에서 입력한다.
  ```sh
  > node ./generateData.js
  tagMap saved.
  pageMap saved.
  tagList saved.
  ```
* `_data/tagLists.yml`, `_data/tagMap.yml`, `tag.html`이 편집된다.
* 다시 되돌리려면 `git restore` 명령을 사용한다.

### 추가하고 싶은 기능 (2021-05-20)

* 현재 default로 StackExcahgne 의 태그만 가져오고 있는데..
* [vi.stackexchange.com/tags](https://vi.stackexchange.com/tags)에 등록된 태그들도 있다.
* 요것도 하고 싶은데..
  * default로 SO 것 먼저하고 SE 것을 선택할 수 있도록 할지..
  * 아님 자동으로 순회해서 갯수가 제일 많은 것으로 선택하도록 할지..
  * 고민중인데.. 아무거나 먼저 구현하고 다른것도 구현해보자 

## 블로그 포스트에 이전 포스트, 다음 포스트로 가는 링크를 넣고 싶다.

### 필요성

* 2021년 현재 블로그는 주차별로 기록하고 있다.
* 어느 시점에 어떤 작업을 했는지 정확히 기억이 안날 때 앞 뒤로 검색해보면서 뒤져야 한다.
* 목록으로 다시 나갔다가 콘텐츠로 돌아오기는 귀찮다.
* 포스팅 콘텐츠 페이지에서 이전과 이후 포스팅으로 연결해주는 링크가 필요했다.

### 구글링 

* [Jekyll - how to link to next/previous post on your blog](http://david.elbe.me/jekyll/2015/06/20/how-to-link-to-next-and-previous-post-with-jekyll.html)
  * 찾았다. 거의 그대로 소스를 복사했다.
    * 댓글을 보면 CSS관련하여 다른 의견이 많던데 나중에 확인해볼것 
  * 제목을 이전과 다음링크 사이에 위치하도록 CSS를 추가했다.
* [How to Link to Next and previous Posts for Same Blog Category](https://talk.jekyllrb.com/t/how-to-link-to-next-and-previous-posts-for-same-blog-category/629)
  * 위 링크를 찾게된 소스이다. 
* [page.previous, page.next 문서가 없다는 이슈에 달린 답글 참조](https://github.com/jekyll/jekyll/issues/1545)
  * 초반에 달린 답글의 링크는 2021년 5월 현재 없음
  * [Jekyll Variables 에 있긴 있음](https://jekyllrb.com/docs/variables/)

### 반영

* [반영한 commit](https://github.com/aiegoo/kramdown-kn/commit/fcfde15c600a2258b9dc445b96fbb01e37fa3cf4)

{% include links.html %}
