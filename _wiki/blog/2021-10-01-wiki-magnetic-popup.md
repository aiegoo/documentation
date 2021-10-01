---
name: magnetic popup
layout: post
permalink: 2021-10-01-wiki-magnetic-popup.html
sidebar: other_sidebar
collection: wiki
summary: "지킬 블로그에 이미지 확대 기능 추가하기"
tags: [wiki, getting_started, web]
excerpt_separator: <!--more-->
date: 2021-10-01 17:10:03 +0900
updated: 2021-10-01 5:57 PM
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
latex: false
repos: aiegoo/kramdown-cn/blob/master/_posts/2019-03-24-Implement%20Scroll%20Spy%20in%20Jekyll%20without%20Bootstrap.md
---

* (table of content)
{:toc}

## jquery plugin
### 문제

포스팅 중 이미지가 작아 이미지 안 글자가 잘 읽히지 않는 경우가 있다. 사진 원본이 충분히 크더라도 블로그로 넘어오면서 560px 규격에 맞게 사진이 자동 축소되기 때문이다. '마우스 우클릭-새 탭에서 이미지 열기'를 이용하여 이미지 확대가 가능하긴 하지만 우클릭 없이 현재창에서 사진을 크게 확대할 수 있는 기능을 추가할 수 있는 방법은 없을까?

#### 요구사항 정의

* **사진 확대 기능 추가**
  1. 사진에 마우스를 가져다 댔을 때 클릭이 가능함을 인지하도록 마우스 모양 변경
  2. 포스팅 속 사진 클릭 시 현재 창에서 사진 확대본 노출
  3. 확대본 노출 시 사진 외 영역 어둡게 만들기
  4. 확대본 재클릭 시 직전 화면의 스크롤지점으로 이동

---

## 해결책

구글링 결과 Magnific Popup이라는 제이쿼리 플러그인을 사용하면 사진 확대가 가능하다는 것을 알게됐다. (제이쿼리? 플러그인? 용어 해설은 [여기에](https://imyeonn.github.io/blog/web/207/))

* [홈페이지](http://dimsemenov.com/plugins/magnific-popup/)
* [깃허브](https://github.com/dimsemenov/Magnific-Popup)

![사용 예시](https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/59a8ace52c7d3a73488c870a/file-QXn5LscO6t.gif)

![사용 예시](http://3.bp.blogspot.com/-DAbGdeL43kw/VK8BsAs64uI/AAAAAAAACQw/gw2Hriq9hpc/s1600/Magnific%2BPopup%2B%2B%2BAnimate.gif)

---

### 요약

1. Magnific-Popup 파일 가져오기
2. index.js 생성
3. default.html에 스크립트 추가
4. scss 적용

---

### 1. Magnific-Popup 파일 가져오기

블로그 루트폴더(아이디.github.io)>assets>lib 폴더 안에 `jquery-1.12.0.min.js`, `jquery-1.12.0.min.map`, `jquery.magnific-popup.js`, `jquery.magnific-popup.min.js`를 만든다.

[이 곳](https://github.com/imyeonn/imyeonn.github.io/tree/master/assets/lib)에 접속해 폴더 전체를 다운로드받은 후 파일을 붙여넣기 하거나 각 파일의 코드를 긁어서 옮기면 된다.

![생성된 4개 파일](images/assets/post/002/206_01.png)

---

### 2. index.js 생성

블로그 루트폴더(아이디.github.io)>assets>js 폴더 안에 `index.js`를 생성한다. 이미 `index.js`가 있으면 빈 공간에 아래 코드를 추가한다.

{% highlight js %}
// 이미지 alt 속 내용을 캡션으로 만들어줌
$('.post > p > img[alt]').replaceWith(function () {
    return '<figure>'
        + '<a href="' + $(this).attr('src') + '" class="mg-link">'
        + '<img src="' + $(this).attr('src') + '"/></a>'
        + '<figcaption class="caption">' + $(this).attr('alt') + '</figcaption>'
        + '</figure>';
});

// 이미지를 magnific popup image viewer에 연결시킴
$('.mg-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true
});
{% endhighlight %}

<br>

`$('.post > p > img[alt]')`에서 경로를 잘 지정해줘야 한다. 자신의 블로그 속 이미지가 어떤 경로에 있는지 파악한 뒤 그 경로대로 코드를 수정하여 적용한다.

경로 지정은 css selector 문법을 따른다. 내 경우에는 post라는 클래스명을 가진 요소의 p 태그 안 img 태그 안 alt 요소를 찾아내서 이 요소들에게 변화값(replaceWith 이하)을 적용했다.


![크롬 개발자도구를 통해서 본 이미지 경로](images/assets/post/002/206_02.png)

필요에 따라 이미지 alt를 캡션으로 만드는 부분을 제외시키고 아래 이미지를 magnific popup에 연결시키는 작업만 수행해도 된다. 위 부분을 적용시켰을 때의 장점은 마크다운에서 캡션을 등록하는 방법이 더 간편해진다는 점이다. 이미지 확대 기능에 직접적인 영향을 끼치지 않는다.

![(참고) 기존 캡션등록방법과 코드 적용 이후 캡션 등록 방법](images/assets/post/002/206_03.png)

---

### 3. default.html에 스크립트 추가

블로그 루트폴더(아이디.github.io)>\_layouts 폴더 안에 있는 `default.html`에 아래 코드를 추가한다.

{% highlight html %}
<script src="/assets/lib/jquery-1.12.0.min.js"></script>
<script src="/assets/lib/jquery.magnific-popup.min.js"></script>
<script src="/assets/js/index.js"></script>
{% endhighlight %}

---

### 4. 기능 작동 확인

지금까지 작성한 코드를 커밋, 푸쉬한다. 페이지를 새로고침한 뒤 사진을 클릭해본다. 사진 클릭이 가능해지고 사진을 클릭했을 때 화면에 변화가 생긴다면 반은 성공이다. 아무런 변화가 없다면 1-3단계로 돌아가 잘못된 부분을 찾아낸다.

![1차 테스트](images/assets/post/002/206_04.png)

사진을 클릭했을 때 자동으로 화면 맨 위로 이동하고, 까만 배경이 생기지 않고, 알 수 없는 Loading... 글자가 생긴 이슈들은 이제부터 해결할 것이다.

---

### 5. scss 적용

이제 예쁘게 꾸밀 차례다. 블로그가 scss 기반이라면 아래 코드를 적당한 곳에 넣는다. 나는 `/css/others.css`에 추가했다. 자신의 환경에 따라 코드를 바꾸거나 추가한다.

소스코드 내용: <https://gist.github.com/imyeonn/4efaaee5db31701031d83702829e84ff>

---

### 6. 최종 확인

이제 사진 확대가 가능하다.

![PC](images/assets/post/002/206_05.gif)

![Mobile](images/assets/post/002/206_06.gif)

---

{% include links.html %}
