---
name: 위키 폰트 변경 
layout: post
permalink: wiki-font.html
sidebar: other_sidebar
collection: wiki
summary: "wiki font with ascii art"
tags: [wiki, getting_started]
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-26 06:27 PM
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
latex: false
---

* TOC
{:toc}

## powerline font
[github](https://github.com/powerline/fonts.git)


## next tasks
Test it out with [my_copy](https://aiegoo.github.io/documentation-theme-jekyll)

[___Ascii_Art___](https://www.kammerl.de/ascii/AsciiSignature.php)

## 폰트 변경의 발단

* 위키 제목으로 쓸 아스키 아트를 만들어 봤다. 
  * 의외로 한글을 아스키 아트로 만들어주는 곳을 찾지 못해서 직접 만들어야 했다.

{% raw %}
```ascii-art
    _      _   _       _________    _     ________     _
   | |____| | | |_    |______   |  | |   |______  |,--' |
   | ,----, | | ,-'        _/ _/ ,-' |         / / '--. |
   | '----' | | |      _,-' _ \_ '-. |     ___/ / ,---' | 
   '--------' '-'     |__,-' \__|  |_|    |__,-'  '---,_|
      .---------.         .--.               ,---------┐ 
      }=======  |         |  |______         }=======  |
      |  ======={         \_________|        |  ======={  
      '---------'  단                 개     '---------' 론 
```
{% endraw %}

* 아스키 아트는 폰트의 영향을 많이 받기 때문에 폰트를 수정하는 방법을 찾아봤다.
* 본 위키에서는 코딩 폰트와 본문 폰트는 별도로 설정하고 있다.
* 아스키 아트는 코딩 폰트로 적용되므로 발단의 목적을 위해서는 코딩폰트만 변경하면 됨
* D2Coding폰트를 웹폰트로 만들어 주신 고마운분 [링크](https://wani.kr/posts/2019/05/25/d2coding-webfont/)
* 위의 아스키아트를 대문에 쓸까 했는데 디자인이 별로라 그냥 영문으로 씀.

## 그 외 폰트관련 의문점 & 이슈 

* 현재 폰트가 뭐지? 통화표시 W 가 안나오고 /\ 가 잘나오지만 monotype은 아닌듯..
* code block을 쓰지 않으면 깨지는 문제가 있음. 일부 문자를 markdown 표기로 인식
  * 줄간격도 좀 줄였으면 좋겠음. 
* 아스키 아트를 vimwiki 파일에서 직접 편집하면 \| 문자가 연속될 경우 표를 만드는 걸로 인식함.
  * 표 만드는 걸로 인식하면 자간이 전부 틀어짐.
  * txt 확장자에서 편집하여 그대로 복사하는 방식으로 편집중.. 
    
## 개인위키에서 폰트 수정 절차

* Jekyll에서 폰트 수정 방법 [링크](https://frhyme.github.io/others/jekyll_korea_font_change/)

## 폰트 수정하기

1. root / css / main.scss 편집
  * 맨 앞에서 `@import url(...)` 혹은 `@font-face {...}`로 폰트 추가 
  * $coding-font 변수의 맨 앞에 변경하고자 하는 폰트 이름 설정 ( 뒤 쪽은 [fallback font](https://d2.naver.com/helloworld/4969726)로 설정됨) 
2. (전체 폰트 수정) root / _sass / _base.scss 편집
  * `body, th, td, div, p, li { .. }` 에 `font-family` 속성 추가 
3. (코딩 폰트 수정) root / _sass / _syntax.scss 편집
  * `code { .. }` 에 `font-family` 속성에 `$coding-font` 적#
## 폰트 관련 링크

* [서울시체를 웹폰트로 사용하기](https://martian36.tistory.com/1392) - 목마른 사람이 우물파는 법.. (개인서버 or 구글 드라이브 사용)
* [Webfont 사용과 최적화, 이상진](https://slides.com/sangjinlee/webconf-2018-5#/)
* [프라치노 공책 스킨](https://fcnotebook.tistory.com/)
  * 윗 링크에서 사용된 [나눔바른펜](https://hangeul.naver.com/2017/nanum) 서체를 웹폰트로 사용하는 방법을 찾고 있다.
  * 눈누에 [나눔 바른펜 웹폰트](https://noonnu.cc/font_page/42)가 있었네
* 유니코드의 모든 glyph ( 영문및 유럽어 CJK 등 모두 포함)하는 폰트가 있을까? - [GNU Unifont](https://en.wikipedia.org/wiki/Fallback_font#GNU_Unifont)
  * 사이즈가 너무 커지지 않도록 퀄리티를 많이 떨어뜨림. 하지만 구분은 가능한 수준임
  * [GNU Unifont wikipedia](https://en.wikipedia.org/wiki/GNU_Unifont)
  * CJK ( Chinese - Japanese - Korean ) 
    
High 65 to 70. 

{% include links.html %}
