---
name: 위키 문제점 해결  
layout: post
permalink: wiki-troubleshooting.html
sidebar: other_sidebar
collection: wiki
summary: "위키 운영하면서 생기는 문제 정리 "
tags: [wiki, vim, troubleshooting]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-17 9:53 PM
toc: true
public: true
parent: [[Wiki-Setting-Category]]  
latex: false
---
* TOC
{:toc}

## gem 'wdm' 워닝

### 문제 내용 분석 (2020-03-28 눈에 띔)
* jekyll 로컬 서버를 실행하기 위해 `bundle exec jekyll serve`를 실행하면..
  * 실행이 잘 되긴 하지만 ... 아래와 같이 워닝 비슷한 것이 나옴
  ![get_wdm_워닝](https://user-images.githubusercontent.com/24635919/77805985-bc1bde80-70c6-11ea-8b89-773c3ec84a0a.png)
  * 이게 뭔 지 알고 싶다.
* 구글링 결과
  * jekyll github에 올라온 [관련 issue 링크](https://github.com/jekyll/jekyll/issues/5581)
  * jekyll doc에 언급된것 [관련 문구 링크](https://jekyllrb.com/docs/installation/windows/#auto-regeneration)
  * `Run Jekyll on Windows`가이드의 [관련 내용 링크](https://jekyll-windows.juthilo.com/4-wdm-gem/)

### 해결책
  * 워닝에 대한 설명:
    * jekyll은 source 문서가 변경될 경우 자동으로 html 문서를 생성(Auto Regeneration)하는 기능을 지원
    * `jekyll build --watch`로 수동 설정할수도 있고 Jekyll v2.4.0 부터는 `jekyll serve` 명령시에 기본으로 지원
    * jekyll은 file의 변경여부를 알기 위해 [`listen`](https://github.com/guard/listen) 이라는 gem을 사용
    * 변경파일 탐지할 때 리눅스는 빌트인 기능이 있는데 윈도우는 그런거 없으니 `wdm` 이라는 별도 gem을 설치하라는 워닝
    * 윈도우 사용할 때 `wdm`을 설치하지 않으면 polling 이라는 다소 무식한 방법..을 사용하니까 설치하는게 좋을꺼라는 워닝
      * polling 이란? : [`listen`](https://github.com/guard/listen) gem 의 README.md 에서 `polling`으로 검색해보면.. 일정 latency 이후에 주기적으로 source 파일 전체의 변경 여부를 체크하는 방식
      * 일반적으로 다른 방식보다는 느림, Network filesystem이나 VM 공유 폴더 같이 변경 파일 탐지를 사용할수 없는곳에 사용.
  * 근데 `Gemfile`이 뭐고 어디에 있는거지?
    * Gemfile이 뭔지 [참조할 링크](https://github.com/rorlakr/railsguidebook/blob/master/contents/walkthrough/gemfile.md)
    * 일반적으로 프로젝트 루트 디렉토리에 있음 (username.github.io/Gemfile)
    * 요기에 경고문구에서 나온 아래 라인 추가하고..
    ```ruby
    gem 'wdm', '>= 0.1.0' if Gem.win_platform?
    ```
    * command line에서 `bundle install` 수행해 주면 wdm 설치됨

{% raw %}
## curly braces 에러 
### 문제 내용 분석 (2020-03-16 발생)
* vim-folding.md 포스트 작성 하면서 내용상에 triple curly braces( {{{ )를 적었는데 [jekyll build 에러](https://help.github.com/en/github/working-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites#tag-not-properly-terminated)가 발생했다.
    * 이 페이지에서 맨 아랫쪽 **Tag not properly terminated** 에러 임. 
  ![이미지](https://user-images.githubusercontent.com/24635919/77517651-dc2d8100-6ebf-11ea-951a-e361f000c164.png)
  * 문제점 문구
```
Your site is having problems building: The variable {{ on line 50 in _wiki/vim-folding.md 
was not properly closed with }}. For more information, see 
https://help.github.com/en/github/working-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites#tag-not-properly-terminated.
```
* jekyll에서 채용한 [liquid 템플릿 언어](https://shopify.dev/docs/liquid/)와 충돌이 난것이다.
{% endraw %}

### 해결책
* 해결책은 liquid [raw 태그](https://shopify.github.io/liquid/tags/raw/)를 사용하면된다. 
  * 단점은.. jekyll로 markdown을 보여줄땐 raw 태그가 안보이지만 일반 markdown 편집기에서는 raw 태그가 보임. (raw 파일 지저분..)
* 재발 방지 대책 
  * 로컬에서 테스트 해보지 않고 github에 올려서 push 이후 문제를 발견. 
  * 로컬에 jekyll 환경이 필요하다 생각함.
  * 이 사이트에서 [jekyll 환경 설정](https://shryu8902.github.io/_posts/2018-06-22-jekyll-on-windows/) 참조 해서 로컬에 jekyll 설치. 

{% include links.html %}
