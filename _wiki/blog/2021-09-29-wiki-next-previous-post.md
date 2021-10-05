---
name: previous next button
layout: post
permalink: 2021-09-29-wiki-next-previous-post.html
sidebar: other_sidebar
collection: wiki
summary: "implement next/previous button for posts"
tags: [wiki, getting_started]
excerpt_separator: <!--more-->
date: 2021-09-29 18:10:03 +0900
updated: 2021-09-28 6:14 PM
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
latex: false
repos: aiegoo/kramdown-kn/commit/fcfde15c600a2258b9dc445b96fbb01e37fa3cf4
---

* TOC
{:toc}

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

위 깃허브 버턴으로 확인.
### update upto 2021-10-05

- 문제점 - 해결책: 
   네이게이션 용도 정의 - 블로그는 usermap, taglogic등으로 컨트롤하지도 않고, 메뉴를 통해서 접근하는데 어려움이 있어 이부분을 해결 하고자 배치하기로 하였고, jekyll paginate보다 요즘 트렌드에 부응하도록 코딩을 직접하였음. _layouts/post.html

   페이지 내 이동은 목차/scroll-nav를 상단, 우측, 하단에 배치하였으나, 포스트간 이동은 생성시간 기준으로 정렬되도록 하여 다른 로직과 일치하도록 하였음.

   단, 초기에 page.title, post.title이 의무 패러미터인것을 간과하고 post.name, page.name이 되게 front-matter를 작성하여 이부분이 여러 문제를 일으켰으나 이미 작성된 300여개 파이을 변경하기 보다 (실제 해보니, 어디에서 문제가 나오는지 모르게 자꾸 꼬여져 있었음.) 기존 스크립을 일부 변경하여 둘중 어느것을 사용해도 무난하게 하였음. 

- ui: 
   폰트를 나눔스퀘어 적용, 아이콘이 텍스트 vertical-align: middle로 하고, white-space: nowrap, overflow:hidden 으로 하여 두줄로 되어 형태가 깨지거나 너무 길어 지는 문제를 해결 하였음. 
   
   그리고 양쪽 col-md-6 widht를 차지 하도록 width, display:block, inline-block을 parent와 자손 요소에 css가 적용 되도록 했음. 여러 방식을 사용해보았지만, 현재 상태가 무난하고 안정적으로 작동 하고 있는 것으로 보임.

{% include links.html %}
