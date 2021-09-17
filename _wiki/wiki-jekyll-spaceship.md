---
name: jekyll-spaceship
layout: post
permalink: wiki-jekyll-spaceship.html
sidebar: other_sidebar
collection: wiki
tags: [wiki, getting_started]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-17 12:25 PM
toc: true
---


## 1. 마크다운 테이블 스타일링

* 이 부분은 `jekyll-spaceship`과 상관없이 별도로 적용가능한 부분임

### Markdown table 작성시 table 셀 styling 하기

* 위키에서 table 작성하다가 특정 셀을 강조하고 싶을 때가 있다.
* inline으로 필요할 때만 하는 방법을 알아보자

### 관련 링크

* 로컬 페이지에서 markdown table 바로 앞에서 임시로 style 옵션 주기
  * [set background color for specific cell in markdown table, stackoverflow 답변](https://stackoverflow.com/a/64420939/9457247)
  * 위에서는 div 태그를 사용했지만 kramdown에서는 별도 코드가 있다

* Jekyll에서 사용하는 Kramdown table에 속성(attribute) 주기
  * [How to add multiple classes to MarkDown using Jekyll?, stackoverflow 답변](https://stackoverflow.com/a/27501209/9457247)
  * [Attirbute List Definitions, Kramdown Official 문서](https://kramdown.gettalong.org/syntax.html#attribute-list-definitions)

### 위 링크 정보를 참조하여 테이블 스타일링 예시

<style>
.customtable tr:nth-child(1) { background: red; }
.customtable td:nth-child(2) { color: white; background: blue; }
.customtable tr:nth-child(3) td { color: black; background: yellow; }
</style>

* 아래 테이블의 markdown 작성예를 보고 싶으면 
  * [현재 문서의 Raw 파일](https://raw.githubusercontent.com/honggaruy/honggaruy.github.io/master/_wiki/wiki-jekyll-spaceship.md)을 참조
  * 테이블 바로 위의 로컬 sytle 태그와 테이블 속성주는 명령어가 핵심

    {: .customtable}
    | 1열     | 2열    | 3열    |
    | :--     | :--    | :--    |
    | 빨간줄  | 파란열 | 빨간줄 |
    |         | 파란열 |        |
    | 노란줄  | 노란줄 | 노란줄 |
    |         | 파란열 |        |

## 3.  jekyll-spaceship 테스트


* github : [https://github.com/jeffreytse/jekyll-spaceship](https://github.com/jeffreytse/jekyll-spaceship)

### 1. Table Usage

#### Rowspan and Colsapn

* 예제 
  
  | Stage               | Direct Products | ATP Yields |
  | ---:                | ---:            | ---:       |
  | Glycolysis          | 2 ATP           ||
  | ^^                  | 2 NADH          | 3--5 ATP   |
  | Pyruvagye oxidation | 2 NADH          | 5 ATP      |
  | Citric acid cycle   | 2 ATP           ||
  | ^^                  | 6 NADH          | 15 ATP     |
  | ^^                  | 2 FADH          | 3 ATP      |
  | 30--32 ATP                                       |||


* vimwiki 에서 테이블 자동 포맷팅을 해주기 때문에 주의해서 편집해야 한다.
  * 우선 vimwiki 포맷에 따라 편집한다 (모든 delimiter 줄이 맞도록 한다)
  * 그다음 jekyll-spaceship 포맷에 따라 공백을 제거한다 
    
#### MultiLine    

* 줄 마지막의 backslash는 내용이 다음줄과 Join 한다는 표시이다
 
  | : Easy Multiline :    |||
  | : --- | :---   | :---   |
  | Apple | Banana | Orange \
  | Apple | Banana | Orange \
  | Apple | Banana | Orange |
  | Apple | Banana | Orange \ 
  | Apple | Banana | Orange |
  | Apple | Banana | Orange |

#### Headerless

<style>
.big-chess-table {font-size: 2.0rem;}
.big-chess-table tbody td {line-height: 1.32em; padding-top: 1px; padding-bottom: 1px;}
.big-chess-table td:nth-child(9) {font-size: 1rem; color: white; background: black;}
.big-chess-table tr:nth-child(9) {font-size: 1rem; color: white; background: black; text-align: center}
.big-chess-table tr:nth-child(-2n+7) td:nth-child(-2n+8) {background: burlywood;} 
.big-chess-table tr:nth-child(-2n+8) td:nth-child(-2n+7) {background: burlywood;}
.big-chess-table tr:nth-child(-2n+7) td:nth-child(-2n+7) {background: blanchedalmond;}
.big-chess-table tr:nth-child(-2n+8) td:nth-child(-2n+8) {background: blanchedalmond;}
.chess-container {display: flex; align-items: center; justify-content: space-around;}
</style>

* 원래 위 링크에 있던 체스 보드는 이랬지만...
  * 기물이 너무 작아 잘 안보이고 체스판이 너무 길쭉하다.

|---|---|---|---|---|---|---|---|---|
| ♜ | ♞ | ♝ | ♛ | ♚ | ♝ | ♞ | ♜ | 8 |
| ♟ | ♟ | ♟ |   | ♟ | ♟ | ♟ | ♟ | 7 |
|   |   |   |   |   |   |   |   | 6 |
|   |   |   | ♟ |   |   |   |   | 5 |
|   |   | ♙ | ♙ |   |   |   |   | 4 |
|   |   |   |   |   |   |   |   | 3 |
| ♙ | ♙ |   |   | ♙ | ♙ | ♙ | ♙ | 2 |
| ♖ | ♘ | ♗ | ♕ | ♔ | ♗ | ♘ | ♖ | 1 |
| a | b | c | d | e | f | g | h | x |

* custom table css 설정으로 확대한 체스보드 테이블을 그릴 수 있다.
  * 위에서 소개했던 테이블 스타일링을 활용했다
* 요즘 넷플릭스 영화로 유명한 [**퀸즈 갬빗** 오프닝](https://en.wikipedia.org/wiki/Queen%27s_Gambit) 이다. #thequeensgambit

<div markdown="1" class="chess-container">

{: .big-chess-table}
|---|---|---|---|---|---|---|---|---|
| ♜ | ♞ | ♝ | ♛ | ♚ | ♝ | ♞ | ♜ | 8 |
| ♟ | ♟ | ♟ |   | ♟ | ♟ | ♟ | ♟ | 7 |
|   |   |   |   |   |   |   |   | 6 |
|   |   |   | ♟ |   |   |   |   | 5 |
|   |   | ♙ | ♙ |   |   |   |   | 4 |
|   |   |   |   |   |   |   |   | 3 |
| ♙ | ♙ |   |   | ♙ | ♙ | ♙ | ♙ | 2 |
| ♖ | ♘ | ♗ | ♕ | ♔ | ♗ | ♘ | ♖ | 1 |
| a | b | c | d | e | f | g | h | x |

![poster][poster-img]

</div>

* 위의 표와 포스터 그림을 가로로 배열하는 방법
  * 표에 오른쪽으로 column을 한개더 만드는 방법은 표가 아래위로 길어지는 경향이 있어 보기 싫음
  * Kramdown 문법 에서 [HTML Blocks 문법](https://kramdown.gettalong.org/syntax.html#html-blocks)을 사용
  * 아래와 같이 구성하면 markdown 문법과 HTML 문법을 동시에 사용하여 문서를 작성할 수 있다. 
    ```html
    <style>
    .chess-container {display: flex; align-items: center; justify-content: space-around;}
    </style>
    
    <div markdown="1" class="chess-container">
    
    some markdown table
    
    some markdown image
    
    </div>
    ```
  * 위 코드에서 `justify-content`를 `center`로 설정하면 체스보드와 그림 사이에 여유가 없이 딱 붙게됨. 
  * 위에서 테이블과 포스터의 키를 맞추는 것은 `td` 태그의 `line-height` attr을 미세조정하여 맞춤. 
    * line-height: 1.32em 으로 맞춤
  * CSS flexbox 문법을 찾아볼 것

[poster-img]: https://upload.wikimedia.org/wikipedia/en/1/12/The_Queen%27s_Gambit_%28miniseries%29.png "The Queen's Gambit Poster"

#### Cell Alignment

* 예제
  
  | : Fruits \|\| Food         : |||
  | :---   | :---      | :---      |
  | Apple  | : Apple : | Apple     \
  | Banana | Banana    | Banana    \
  | Orange | Orange    | Orange    |
  | : Rowspan is 4 :  || How's It? |
  | ^^ A. Peach       || 1. Fine : |
  | ^^ B. Orange      || ^^ 2. Bad |
  | ^^ C. Banana      || It's OK!  |

### Cell Markdown

<style>
.td-img img { width: 138px; }
</style>

* 예제
  * 아래 예제를 스타일링 하지 않고 그냥 작성하면 그림이 100% 크기로 꽉차게 된다
  * img 태그에 대해 height 속성을 정해줬다.
    * 브라우저에 F12로 디버깅모드에서 그림의 원래 크기를 알수 있는데..
    * height을 원래 크기 (552)의  1/4값인 138px로 정해주었다.
  * [vim에서 간단한 사칙연산을 하려면..](https://vim.fandom.com/wiki/Using_vim_as_calculator)
    * step1: insert mode로 진입
    * step2: <kbd>Ctrl</kbd>+<kbd>r</kbd> 입력
    * step3: `=552/4` 입력
    * step4: insert mode 시작한 자리에 138이 입력된다

* 예제

  {: .td-img}
  | : MathJax \|\| Image : |||
  | :--- | :--- | :--- |
  | Apple  | : Apple :| Apple                          \
  | Banana | Banana   | Banana                         \
  | Orange | Orange | Orange |
  | : Rowspan is 4 : || : How's it? :                  |
  | ^^ A. Peach      || 1. ![exmple][cell-image]      |
  | ^^ B. Orange     || ^^ 2. $I = \int \rho R^{2} dV$ |
  | ^^ C. Banana     || **It's OK!**                   |


* 주의
  * Kramdown 설명에는 Reference Style IAL로 그림에 attribute을 설정할 수 있다고 하는데..
    * [kramdown syntax.html #images](https://kramdown.gettalong.org/syntax.html#images)

      ```
      1. ![cell-image]
      [cell-image]: ~.png
      {:height="138px"}
      ```
    * table 밖에서는 동작하지만 table 내부에서는 동작하지 않음 (아래는 Reference 스타일 적용)
     
      ![cell-image]
    * 위의 표에서는 Reference Style로 적용하지 않고 별도 style 태그를 사용함.
      * 일단 표안에서의 해결책은 style block으로 설정하는것

[cell-image]: https://jekyllrb.com/img/octojekyll.png
{:height="138px"}


### Cell Inline Attributes

* attribute definitions (ALDs) 를 사용하는 방법
  ```
  {:ref-name: #id .cls1 .cls2}
  {:second: ref-name #id-of-other title="hallo you"}
  {:other: ref-name second}
  ```
* ALD line 구조
  * 왼쪽 brace로 시작, 공백 3개까지 허용
  * colon(:) 으로 이어짐, 아이디를 적고 다시 colon 으로 마무리
  * 속성 정의가 이어짐 (허용되는 문자는 backslash로 escape된 closing brace 혹은 closing brace를 escape하지 않는 어떤 문자라도 허용) 
  * 오른쪽 brace로 마침, 줄 마지막까지 공백 허용함
* 같은 reference 이름을 가진 ALD가 한개 이상이면 한 곳에서 모두 정의된 것처럼 간주된다.
* 다른 element에 속성을 붙이고자 할 때 inline attribute list (IAL)도 사용할 수 있다
  ```
  {: #id .cls1 .cls2} <!-- #id <=> id="id", .cls1 .cls2 <=> class="cls1 cls2" -->
  {: ref-name title="hallo you"} 
  {: ref-name class='.cls3' .cls4} 
  ```

{:color-style: style="background: black;"}
{:color-style: style="color: white;"}
{:text-style: style="font-weight: 800; text-decoration: underline;"}

| : Here's an Inline Attribute Lists example : ||||
| --- | --- | --- | --- |
| : : | : <div style="color: red;"> &lt; Normal HTML Block > </div>   : |||
| ^^      | Red {: .cls style="background: orange" }                    |||
| ^^ IALs | Green {: #id style="background: green; color: white" }      |||
| ^^      | Blue {: style="background: blue; color: white" }            |||
| ^^      | Black {: color-style text-style}                            |||

* [Block Inline Attribute Lists](https://kramdown.gettalong.org/syntax.html#block-ials) - 이곳에서 IAL에 대해 자세하게 배울 수 있다. 
  
 