---
name: 위키에 favicon 추가  
layout: post
permalink: wiki-favicon.html
sidebar: other_sidebar
collection: wiki
summary: "favicon 추가 방법, 관련 링크"
tags: [wiki, vim, troubleshooting]
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 3:53 AM
toc: true
public: true
parent: [[Wiki-Setting-Category]]  
latex: false
---
* TOC
{:toc}

# 1. 발단

* 일단 [이슈를 등록](https://github.com/honggaruy/honggaruy.github.io/issues/5)해놓기도 했고..
* chrome에서 탭을 여러개 띄워놓을 때 구별하기 좋으라고 ..
* 미뤄두던 파비콘 적용을 하기로했다.

# 2. 전개

## 글자 Favicon 만들기

* Johngrib님도 [관련 글](https://johngrib.github.io/wiki/favicon/)을 올렸는데..
* Johngrib님 사용한 [favicon-generator.org](https://www.favicon-generator.org/)는 별도 이미지 파일이 필요해서 일단 거르고 ..
* 구글 폰트에서 폰트를 선택하여 글자 파비콘을 만들 수 있는 [favicon.io](https://favicon.io/favicon-generator/)에서 만들어 보았다.
  * [구글 폰트 사이트](https://fonts.google.com/?preview.text=%ED%99%8D&preview.text_type=custom&subset=korean )에서 만들 글자를 타이핑해서 모양을 보고...
  * favicon.io에서 해당 구글 폰트를 선택하면 편하게 만들 수 있다.
* 만들고 나면, 잊지 말고 오른쪽 위에 <kbd style="color:white; background:#209CEE;"> ⬇ Download</kbd> 버튼을 눌러 다운받도록 하자.

## 위키에 적용하기

* favicon.io 에서 만드는 부분 아래에 보면 `Installation` 섹션이 있는데..
* 다음과 같은 코드를 복사해 가도록 제공하고 있다.
  ```html
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  ```
* 관련 해서 [Johngrib님 Commit](https://github.com/johngrib/johngrib.github.io/commit/edfc0836ab2a3f94f72f2cce420e3afa5a00cbd9)이 있는데 참고해서 적용하면 된다.

{% include links.html %}
