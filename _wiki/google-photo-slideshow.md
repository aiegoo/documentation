---
name: 구글 포토 슬라이드쇼 콘트롤  
layout: post
permalink: google-photo-slideshow.html
sidebar: other_sidebar
collection: wiki
summary: "구글 포토로만 하는 건 아님... "
tags: [windows]
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 3:16 PM
toc: true
public: true
parent: [[Gray-Category]] 
latex: false
---
* TOC
{:toc}

# 1. 발단

* 구글 포토에서 몇개 사진을 연속적으로 참조하면서 작업할 일이 있었다
* 근데 구글 포토에서 사진하나 넘기고 다른 앱에서 작업하고 또 넘기고... 하는게 귀찮았다
* 마침 메뉴에 슬라이드 쇼가 있길래 써봤는데... 넘 불편했다.
  * 속도 조절 메뉴가 없다. 5초면 후딱 넘어가 버린다.
  * 구글 포토에서 `포토` 메뉴에 모든 사진이 저장되는데 최근사진이 가장 위고 내림차순으로 되어있다
    * 여기서 슬라이드 쇼를 하면 최근 >> 과거 순으로 되는데 순서 변경 옵션이 없다.
* 구글 포토 슬라이드 쇼 옵션을 조절할 수 있는 방법을 찾아보았다.

# 2. 전개

##  구글 포토 슬라이드 순서를 맘대로 하고 싶다.

* [구글 포토 헬프의 연관 질문](https://support.google.com/photos/thread/843206?hl=en) : 역시 다른 사람들도 위 문제에 공감하고 있었다. 
* 위 질문의 답변중에 아래와 같은 답변이 있었다
  > "The present Slideshow goes from newer to older slides."
In the library: yes, because that is the way photos are sorted. 
When you add photos to an album you can sort from older to newer (3-dots > Edit album > Sort icon) and the slideshow will show them in that order.

* 위 답변은 구글 포토에서 제공하는 `앨범` 기능을 사용하여 순서를 원하는 대로 배열할 수 있다는 정보이다
* 직접 해보니, 일단 구글 포토에서 선택된 사진을 앨범으로 지정할 경우 ...
  * 일단 시간순 ( 과거 >> 현재, 구글 포토의 `포토` 와는 반대 순서)로 기본 배열되며, 
  * `메뉴 >> 앨범 수정` 상태에서 **순서를 원하는 대로 배치할** 수 있었다. ( 20년 5/16일 기준)
  * `앨범 수정` 모드에서 `정렬 기준` (위/아래 화살표 아이콘) 으로 4가지 모드로 정렬할 수 있다
    * 오래된 날짜순, 최근 날짜순, 최근 추가, 맞춤설정 ( 임의로 순서 바꾸면 자동으로 맞춤 설정으로 가는듯..) 

* 그러므로 일단 순서에 대한 문제는 `구글 포토` 내에서 해결가능했다.

## 슬라이드의 속도를 조절하고 싶다.

* [How to create a sliedshow from Google Photos or Google Drive](https://www.techrepublic.com/article/how-to-create-a-slideshow-from-google-photos-or-google-drive/) : 영감을 받은 문서
* 위 링크중에 **How to create a slideshow with Google Slides** 섹션이 있다.
* 구글 슬라이드(한국은 구글 프리젠테이션)로 문서를 만든 뒤 ...
  * 여기에 사진을 배열하면 `프리젠테이션 보기` 모드에서 **슬라이드 속도**를 조절할 수 있다.
  * 삽입 메뉴에서 바로 구글 포토에 연결하면 사이드에 구글포토를 띄워서 드래그로 가져올 수 있다.
* 근데 사실 이것도 귀찮을 수 있기 때문에, 템플릿을 한개 만들어 놓고 특정 앨뱀에 있는 사진을 시간 순서로 한 페이지에 한장씩 불러와서 문서를 만들어주는 스크립트가 있으면 좋을것 같다.. (나중에 개발해 보자)

## 구글포토를 슬라이드에 자동 넣어주는 프로그램

* 위에서 말했던 프로그램이 실제로 있었다.. [Photos To Slides](https://gsuite.google.com/marketplace/app/photos_to_slides/859164198261)
* 해보니 잘되긴 하는데.... [테스트 문서 링크](https://docs.google.com/presentation/d/1JJK_alvKbPXoSNad7sgVGVDAkqswczz7oZetiFp0fAE/edit#slide=id.a8c2551a-7783-4ea4-ae1a-46fc96576f13)
  * 앨범당 50장으로 제한이 있고 ... ( 돈주면 1000장까지)
  * 개인 앨범만 된다 (유료는 공유앨범도 지원)
  * 또한 유료는 Google photo description에서 캡션도 불러와 붙여준다.
  * 동일한 기능 하는것 내가 한번 만들어봐야겠다. 나중에...
  
# 3. 결론 

##  현재까지의 솔루션

* 슬라이드 순서 변경하기 : 구글 포토에서 앨범을 만들면 가능  (난이도 : 하)
* 슬라이드 속도 조절하기 : 구글 슬라이드에 구글 포토 사진을 넣고 문서를 만들면 가능 (난이도 : 중~상)

##  구글 프리젠테이션 템플릿 사이트

* [slidesgo](https://slidesgo.com/) : 구글 슬라이드 및 파워포인트에서 사용할 수 있는 템플릿을 무료 배포 
  * [slidesgo school](https://slidesgo.com/slidesgo-school) : 프리젠테이션 작성법을 소개하는 온라인 강좌홈
    * [Presentation Tip](https://slidesgo.com/slidesgo-school/presentation-tips) : 프리젠테이션 요령 강좌
    * [Google Slides Tutorials](https://slidesgo.com/slidesgo-school/google-slides-tutorials) : 구글 슬라이드 사용법 레시피
    * 파워포인트 튜토리얼도 있는데 안쓸것 같음

## 구글 슬라이드 편집 기술 링크

* [Become a Google Slides Artist With These 7 Tricks](https://www.bettercloud.com/monitor/the-academy/become-a-google-slides-artist-with-these-tricks/)
* [5 ways to  make the most of Google slides animation features](https://www.brightcarbon.com/blog/5-google-slides-animation-features/)
* [How to Create 'Moving' Presentations](https://medium.com/google-design/moving-presentations-d4f895e78de3)
* [6 Google slides image editing hacks](https://www.brightcarbon.com/blog/google-slides-image-editing/)

{% include links.html %}
