---
name: 갑자기 깨달은 CSS 단어의 의미  
layout: post
permalink: css-meaning.html
sidebar: other_sidebar
collection: wiki
summary: " toc의 css를 조정하다가 우연히 깨닫게 된 CSS 어원의 의미"
tags: [web, publishing]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 4:20 PM
toc: true
public: true
parent: [[Web-Category]]  
latex: false
---
* TOC
{:toc}

# 1. 발단

* [[wiki-toc2side]] 문서를 작성하면서 toc를 side로 빼는 방법은 알게되었는데..
  * 목차 하위 레벨로 갈 때 들여쓰기의 넓이가 마음에 들지 않았다 (다소 넓어 좀 줄이고 싶다)
![들여 쓰기 넓이 그림]( /wiki-img/css-meaning/css-meaning_02.png )

# 2. 전개

### ul 관련 css 추적 과정

* 위에서 표시한 해당 넓이를 조정할 수 있는 방법을 찾아 봤다.
  * kramdown으로 converting된 toc 결과물은 다음과 같으므로.. ( a태그를 무시하고 간략화..)
    * 아래 구조로 볼 때 각각의 하위레벨을 감싸는 ul의 css를 뒤져봐야 한다.
     
  {% raw %}
  ```html
  <ul id="markdown-toc">
      <li> 1. 발단 </li>
      <li> 2. 전개 </li>
          <ul> <!-- 2번째 ul --> 
              <li> scss 파일 </li>
              <li> toc 스타일링 </li>
      .... 
  </ul>
  ```
  {% endraw %}
  
  * /css/ , /_sass/ 를 뒤져봤지만 딱히 해당 속성을 지정하는 css는 못찾음.
  * 크롬 DevTools로 뒤져보았다 ( 위 구조에서 **2번째 ul**을  검사 )
   
  ![Chrome DevTools 그림]( /wiki-img/css-meaning/css-meaning_03.png )
  *Chrome DevTools 그림*
  
  * DevTools에서 딱 느낌이 오는 녀석은 바로 `padding-inline-start` 속성이었다
    * 값이 .. 다른 녀석들은 `0px` 인데.. 혼자 `40px` 라서.. 
    
  * 우선 side 목차 일때만 적용해보기 위해 /_sass/_toc.scss 파일을 다음과 같이 수정했다 
    * 폰트상으로 2자 만큼이면 2em 일것으로 추정
  
  {% raw %}
  ```scss
  @media (min-width: 1700px) {
      ul#markdown-toc {
          position: fixed;
          ....
      }
      ul {
          padding-inline-start: 2em;
      }
  ```
  {% endraw %}
  
  * 적용 결과는 다음과 같이 잘 적용되었다.
  
  | *적용전*![적용전]( /wiki-img/css-meaning/css-meaning_01.png ) | *적용후*![적용후]( /wiki-img/css-meaning/css-meaning_04.png ) |
  
### 새로운 의문
  
* ul 관련하여 `padding-inline-start`를 내가 따로 지정한적이 없는데 어떻게 40px가 지정되어 있는지 궁금 ..
  * 위의 *Chrome DevTools 그림* 에서 표시한 것처럼 왼쪽에는 태그, 오른쪽에는 설정된 파일이 나오는데..
    * main.css 처럼 설정을 찾을수 있는 곳도 있지만..
    * `user agent stylesheet` 처럼 어딘지 모르는 곳도 있다.
* `user agent stylesheet` 구글링
  * stack overflow에서 `what is user agent stylesheet` 질문중 [답변](https://stackoverflow.com/a/12587169/9457247)
    * ..에서 [Cascase 관련 링크](https://www.w3.org/TR/CSS21/cascade.html#cascade)를 보자
* 6.4 The cascade 요약
  * Style  sheet은 3가지 설정 주체가 있다.
    * Author : 문서의 작성자가 지정한 style sheet
    * User : 문서의 소비자가 특정 문서에 대해 style을 지정할 수 있다.
    * **`User agent`(여기에 나옴)** : 유저가 지정하지 않은 style에 대해 브라우저가 default로 지정한 값을 적용
  * style sheet 는 위에 3가지 설정 주체가 중첩되어 설정된 결과이며 cascade 방식으로 상호작용하며 최종 적용된다.
    * 각 style rule에는 가중치를 줄 수 있으며 일반적으로 author가 user보다 가중치가 높지만 ..
      * !important rule로 가중치를 역전시킬수 있으며..
      * UA(User Agent)는 Author나 User보다 높을 수는 없다.
      * 즉, 현재 **User Agent 설정이 적용되고 있다면 Author나 User 설정이 안된 기본설정**이라는 얘기..
  * 일단은 여기까지만... 
* CSS가 Cascading Style Sheets 의 약자인 것은 알았지만 왜 Cascading으로 표현했는지 몰랐는데..
  * 이런 식으로 작은 폭포들이, 혹은 계단이 연달아 이어지듯...
  ![cascading fall 그림]( /wiki-img/css-meaning/cascading_fall.jpg )
  * 여러가지의 Style Sheets가 중첩되어 적용되어 최종적으로 가중치가 높은 설정이 적용되도록 ..
    * .. 하는 방식 때문에 cascading 이라고 불렀던 것임.

# 3. 결론

## CSS에서 cascading의 의미

* 자세한 내용은 [여기 링크](https://www.w3.org/TR/CSS21/cascade.html#cascade) 참조,
  * 한글로 풀어놓은 내용은 [여기 링크](https://thrillfighter.tistory.com/487) 참조
  * style sheet이 계단식으로 적용되고 있기 때문에 cascading
   
* 예를 들면 위의 *Chrome DevTools 그림* 에서..
  * ul { ... } 과 ul ul { ... } 이 있는데 ..
  * 현재 크롬으로 `검사` 중인 element는 depth가 2인 ul 이므로 ..
    * ul ul { ... } 의 설정이 (폭포의?) 가장 위쪽에서 먼저 적용되고 ..
    * ul ul { ... } 에 없는 설정은 일부 ul { ... } 에서 가져온다.
      * 위 `전개`섹션의 `2번째 ul`은 개별적으로는 ul 이면서 ...
      * 다른 element와 관계 관점에서는 ul ul 이기도 하다. 
* 마치 계단식 폭포를 보는 듯하다... 
  * 속성이 위에서 부터 흘러 내려오며 ..
  * 적용될 놈은 남아서 적용되고, 흘러갈 놈은 그냥 흘러가는.. cascading..
   
| ![cascading fall 그림]( /wiki-img/css-meaning/cascading_fall.jpg ) | ![Chrome DevTools 그림]( /wiki-img/css-meaning/css-meaning_03.png ) |

## padding-inline-start 의 활용

* 목차에서 depth가 같은 레벨을 ul로 감싸고 있고 ..
  * ul의 들여쓰기는 현재 padding-inline-start로 설정되고 있음

* 목자 전체에 적용하는 것이 좋겠다고 생각하여 위와는 달리...
  * /_sass/_base.scss 내에 다음과 같이 적용함

    {% raw %}
    ```scss
    body {
        ...
    }
    /* 목차에 사용되는 ul 들여쓰기를 폰트 2자 크기로 지정 */
    ul {
        padding-inline-start: 2em;
    }
    ```
    {% endraw %}
    
    
