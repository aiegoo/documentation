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

# 블로그 포스트에 이전 포스트, 다음 포스트로 가는 링크를 넣고 싶다.

## 필요성

* 2021년 현재 블로그는 주차별로 기록하고 있다.
* 어느 시점에 어떤 작업을 했는지 정확히 기억이 안날 때 앞 뒤로 검색해보면서 뒤져야 한다.
* 목록으로 다시 나갔다가 콘텐츠로 돌아오기는 귀찮다.
* 포스팅 콘텐츠 페이지에서 이전과 이후 포스팅으로 연결해주는 링크가 필요했다.

## 구글링 

* [Jekyll - how to link to next/previous post on your blog](http://david.elbe.me/jekyll/2015/06/20/how-to-link-to-next-and-previous-post-with-jekyll.html)
  * 찾았다. 거의 그대로 소스를 복사했다.
    * 댓글을 보면 CSS관련하여 다른 의견이 많던데 나중에 확인해볼것 
  * 제목을 이전과 다음링크 사이에 위치하도록 CSS를 추가했다.
* [How to Link to Next and previous Posts for Same Blog Category](https://talk.jekyllrb.com/t/how-to-link-to-next-and-previous-posts-for-same-blog-category/629)
  * 위 링크를 찾게된 소스이다. 
* [page.previous, page.next 문서가 없다는 이슈에 달린 답글 참조](https://github.com/jekyll/jekyll/issues/1545)
  * 초반에 달린 답글의 링크는 2021년 5월 현재 없음
  * [Jekyll Variables 에 있긴 있음](https://jekyllrb.com/docs/variables/)

## 반영

위 깃허브 버턴으로 확인.

{% include links.html %}
