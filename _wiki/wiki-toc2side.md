---
name: 위키페이지에서 toc 위치 조정  
layout: post
permalink: wiki-toc2side.html
sidebar: other_sidebar
collection: wiki
summary: "CSS및 SCSS에 대한 정리"
tags: [wiki, vim, troubleshooting]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 3:53 AM
toc: true
public: true
parent: [[Wiki-Setting-Category]]  
latex: false
---
* TOC
{:toc}

### 1. 발단

* johngrib 님 홈페이지와 비교하다보니 toc위치가 다른것을 발견
* [github 스켈레톤 repository](https://github.com/johngrib/johngrib-jekyll-skeleton/)에서 해당 [commit](https://github.com/johngrib/johngrib-jekyll-skeleton/commit/4f58609b71e52a226d7e29f9240ad659ac953ba9?diff=unified)을 찾아냄
  * 브라우저 너비가 좁을 때는 같은 열에 보여주고 넓을 때는 오른쪽 사이드로 빼는 방법 적용
* 위의 commit된 코드상에 모르는게 많아 공부를 해보려고 함
  * scss 파일?, #markdown-toc? 스크롤시 고정?

## 2. 전개

#### scss 파일

* 우선 구글링

  * 첫번째 타자, [Sass(SCSS)완전 정복!](https://heropy.blog/2018/01/31/sass/)
    * Sass(SCSS)란 무엇인가? 에 대한 설명 
      * CSS 전처리기(preprocessor)임, 말그대로 CSS가 동작하기 전에 사용
        * 비슷한 표준이 몇개 더 있음 (Less, Stylus). 저자는 Sass 추천
      * 따라서 컴파일러가 필요 
        * 다양한 컴파일 방법이 있음. (node-sass, Gulp, Webpack, Parcel, ..)

  * 두번째 타자, [SCSS에서 미디어 쿼리 다루기](https://chaewonkong.github.io/posts/scss-media-query.html)
    * SCSS에 대해 좀 더 간결한 설명 (**이걸 추천함**) 
    * 보통 Sass와 SCSS는 같이 언급되나 약간 다름
      * SCSS는 Sass의 상위호환(Superset)으로 CSS와 호환되는 문법을 가지므로 많이 추천됨
      * Sass는 SCSS와 비슷하지만 문법자체가 CSS와 좀 틀려서 추천되지 않는듯..
    * @media 는 미디어 쿼리라고 부르고 [CSS의 표준중 하나](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)임.
      * site나 app을 디바이스(phone, pc)나 특성(화면 해상도나 [viewport](https://developer.mozilla.org/ko/docs/Glossary/Viewport) width)에 따라 수정하고 싶을때 사용
      * min-width: CSS 표준 속성, 요소의 최소 너비를 설정하고 그보다 작게 드래그 해도 설정된 값으로 유지(그보다 작아지는걸 방지) 
      * @media {min-width: 800px}
      
  * 세번째 타자, [Jekyll에서 Sass 사용 설정하기](https://kgmyh.github.io/blog/2017/12/23/Jekyll_Using_Sass/)
    * 의문사항, sass로 작성하면 css로 변환을 하는데 어떻게 되는거지? 에 대한 해답 
      
  * 네번째 타자, [jekyll 공식 문서, Sass관련](https://jekyllrb-ko.github.io/docs/assets/)
    * 세번째 타자의 심화 버전.
    * jekyll은 기본적으로 sass를 지원한다고 하니 뭘로 컴파일 하는지 신경쓸 필요는 없는듯..
    * 현재 _config.yml에 `sass:` 옵션이 없는데 디폴트 설정을 그대로 써서 없는것으로 보임

### toc 스타일링

* 위 커밋에서 #markdown-toc 에 대한 css가 작성이 되어있다
  * _layouts 이나 _includes의 템플릿을 모두 뒤져도 #markdown-toc는 발견할 수 없었음.
  * **의문사항: 어떻게 toc의 식별자가 #markdown-toc가 될줄 알았지?**

* 알고보니 kramdown 엔진으로 markdown 에서 html 로 generation 된것과 관련이 있음.
  * markdown Header에서 자동적으로 ID를 만들어내는 내용. [auto-ids 링크](https://kramdown.gettalong.org/converter/html.html#auto-ids)
  * ID 를 가진 모든 header에서 toc를 만드는 내용. [관련내용 링크](https://kramdown.gettalong.org/converter/html.html#toc) 
    * 이 섹션에 **별도로 ID를 설정하지 않은 경우 markdown-toc 라는 ID를 갖게 된다는 내용**이 있음. 
     
### 브라우저 스크롤시 toc를 고정하는 방법

* toc의 ID가 #markdown-toc일 때 이 ID에 대한 CSS를 다음과 같이 설정한다.
  * position을 fixed로 설정하면 페이지가 스크롤 되도 늘 같은 곳에 위치, [참조 사이트](https://ko.learnlayout.com/position.html)
    * position: fixed;와 함께 top, left, width 값을 주어 오른쪽 위쪽에 위치 시킬수 있음
      * 아래에 위치 시키려면 top을 빼고 bottom에 값을 줌
* left: calc(50vw + 410px) ?
  * css 함수중 [calc()](https://developer.mozilla.org/ko/docs/Web/CSS/calc)가 있음.
  * vw는 또 뭐지? viewport width인 듯.. [css의 7가지 단위 설명 링크](https://webclub.tistory.com/356)
    * 위 링크에서 vw가 vertical width인듯 나오는데 vertical이 아니라 viewport 일 듯. 댓글에도 있네
    * vw는 viewport 즉 브라우저 넓이를 의미, 50vw는 브라우저 넓이의 절반위치
  * left: calc(50vw + 410px) 를 해석하면..
    * toc 왼쪽 시작위치는 viewport 넓이의 정가운데 (50vw) 에서 시작해서 410px 만큼 떨어진 위치임.
    * 410px의 수치는 어디로 부터 옴?
      * _sass/_layout.scss 에 @media (min-width: 800px) 내에 body의 width가 800px로 정해져있음.
      * 위에서 body width 의 절반에 10px을 더한 410px로 정했을 것이라고 강하게 추측됨.
* z-index: CSS 표준, 아이템 겹칠때 가장위부터 아래까지 순서를 정할수 있음. [z-index 참조 링크](https://developer.mozilla.org/ko/docs/Web/CSS/z-index)
* font-size: em 단위, 동적인 값, 0.8em이면 메인폰트 대비 80% 정도 크기로 지정, [em 참조 링크](https://developer.mozilla.org/ko/docs/Web/CSS/font-size#Ems)
* [@media (min-width: xxxxpx) { ... } 의 의미](https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Media_queries#Targeting_media_features)

## 3. 결론

### 의문사항 ~~결과 정리~~ 조사후 소감  

#### 1. SCSS

* 본 지 얼마 안되었지만 잘 지내야 할 것 같은 아이..
* 곳곳에 좋은 posting이 많아서 한동안 링크 따라 다닐듯

#### 2. #markdown-toc

* jekyll 이용시 SCSS보다 더 근본적인 영향을 주는 kramdown이 배후 
* 추천 공부 링크:  [https://kramdown.gettalong.org/documentation.html](https://kramdown.gettalong.org/documentation.html)

#### 3. toc를 side로 빼고 스크롤을 따라 내려오게 하는 방법

* CSS 기본을 잘 알자... 전부 다 CSS 표준이었다. 

#### 4. Edit text at the speed of thought !!!

* johngrib 님의 Vimwiki + Jekyll + Github.io 를 사용하면서 드는 생각은... 딱 이 느낌..
 
| Edit Text at the Speed of Thought.. 요기→→ | ![speed]( https://images-na.ssl-images-amazon.com/images/I/41Uki3%2BV7nL._SX415_BO1,204,203,200_.jpg ){: width="290"} |

* 그래서 그런지 몰라도 정리한 내용을 다시보면 ...
  * 깔끔하게 정리된 느낌은 없고...
  * ...그냥 그때 의식의 흐름이 이랬구나를 알게 된다.

{% include links.html %}
