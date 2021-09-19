---
name: 윈도우즈에서 V+J+G 따라하기  
layout: post
permalink: wiki-winodws.html
sidebar: other_sidebar
collection: wiki
summary: "on using Jekyll  on windows, with ruby"
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

# 1. 개요

* 포스팅링크 : [Vimwiki + Jekyll + Github.io로 나만의 위키를 만들자](https://johngrib.github.io/wiki/my-wiki/)
* 다만, windows를 사용하지 않고 있어 windows에서 따라 했던 내가 겪은 경험을 남기고자 한다.
* 생각나는 대로 적어 순서가 뒤죽박죽이다. 쓰다보면 정리될 것 같다.
* 제목대로 윈도우즈로 할때 달라지는 점만 적을 예정이다.

# 2. 전개

## 위키 작성 환경 관련

* 로컬에 필수적으로 설치해야 하는 도구들
  * git for windows
  * jekyll을 설치하기 위해 설치 해야하는 것들 (Ruby + Gems..)
    * 로컬에서 확인하지 않고 올렸다가 github에서 에러나는 경우가 있다. 로컬 jekyll 환경은 필수다.
  * node.js + npm 설치할 것
    * 루트 폴더의 generateData.js 실행시에 node.js 환경을 요구함. 
    * windows 환경에서 node.js 의 실행법이 쉘에 따라 좀 다르다.
      * git for windows 에서 generateData.js의 실행 : 리눅스와 동일하다. 
        ```sh
        > ./generateData.js
        tagMap saved.
        pageMap saved.
        tagList saved.
        ```
      * powersheell 에서 generateData.js의 실행 : 
        ```sh
        > node ./generateData.js
        tagMap saved.
        pageMap saved.
        tagList saved.
        ```
        * 만약 그냥 `> .\generateData.js`를 호출한다면 아래와 같이 에러가 난다.
          ![node.js 에러]( /wiki-img/wiki-inWindows/error_nodejs.png)
          
      * `generateData.js`는 git hook 으로 실행하는데 아직 위 사항을 적용하지 않았다. (2020-11-08)
  
### git 

* windows에서 git을 쓴다면 git for windows를 쓸거라고 생각한다.
* git for windows는 bash를 지원하기 때문에 가끔 사용되는 linux 명령어들에 막히지 않을수 있다. 

* git mergetool로 diffmerge를 사용중인데 merge할 때 특정 경우 돌발행동을 한다.
* merge conflict가 발생할때 deleted, created, modified로 나뉜다.
  * modified conflict일 경우 원래 utf8이면, 수동 merge가 끝나고 그대로 utf8로 저장이 된다.
  * 문제는 created conflict일 경우인데.. 
    * 현재 파일이 있는데도 왜 created로 confilct가 나는지 모르겠지만..
    * git merge 표기가 기록된 파일이 utf8인데.. Diffmerge로 수동 머지 되면서.. 
    * utf8 이었던 문서가 저장되며 cp949로 변경되는 문제가 있다.
* 이때 jekyll에서 어디선가 지정되어서 그렇겠지만 해당 파일을 UTF-8로 생각하다가 갑자기 cp949를 얻어맞고 에러가 날때가 있다
![파일인코딩에러]( /wiki-img/wiki-inWindows/error_encoding.png )
* diffmerge의 문제가 맞긴한데 해당 문제를 해결할 수 있는 diffmerge 설정은 아직 못 찾았다.
* 어찌할 방법이 없어서 파일 인코딩을 변경하여 저장할수 있는 gvim 명령어를 알아두는 것이 좋다. [링크](https://kldp.org/node/32987)
```vim
:set fileencoding=utf8
```

## timezone 이슈 (2020-11-07)

* 이제서야 이걸 발견하다니...
* [Front Matter 란?](https://jekyllrb.com/docs/front-matter/)
 
### 경험한 문제

* 2020.07.06일자로 작성한 포스팅의 링크가 `/2020/07/05/` 로 생겨 tag 목록에서 생성한 링크로는 연결이 안되는 문제가 발생함.
  * 위의 경우 파일이름은 `2020-07-06-week-28th.md`, Front Matter중 date는 `2020-07-06 07:39:32 +09:00`으로 설정
  * 이 상태에서 Front Matter 내용을 `2020-07-06 07:39:32`로 UTC로 부터의 Offset 부분을 지우면 정상적으로 `/2020/07/06`으로 URL 작성됨.
  * 즉, URL은 파일이름과는 상관없이 Front Matter에 적힌 UTC offset 포함 날짜에서 계산하여 URL을 작성하는 것어로 보임.
* jekyll 이슈에서 찾은 내용
  * [유사한 old 이슈: Missing timezone in metadata date can lead to wrong date in url #1069](https://github.com/jekyll/jekyll/issues/1069)
    * 아래 #7550번 이슈 단 사람이 맨 마지막에 이슈를 달았는데 jekyll 측에서 너무 오래된 이슈번호라서 새로 이슈 시작하라고 함. 
  * [요즘에 새로 시작한 이슈: The wrong date can be used in the url #7550](https://github.com/jekyll/jekyll/issues/7550)
    * Front Matter에 2015-05-28 날짜로 포스팅했는데 url은 `../2015/05/29/.. `로 나옴

### 자료 수집

* [Jekyll 홈 > Installation > Jekyll on Windows 문서](https://jekyllrb.com/docs/installation/windows/)
  * [Timezone Management](https://jekyllrb.com/docs/installation/windows/#time-zone-management)
    * Windows는 TZInfo 2.0과 호환성이 없음
      * 블로그 포스팅의 날짜 URL은 포스팅의 date Front Matter로 계산 하는데..
      * TZInfo 2.0 + Jekyll 3.x(4.x도 마찬가지 인듯) + Windows 상황인 경우 `jekyll build`시 포스팅 날짜 계산에 오류가 있다고 함. 
      * 따라서 `Gemfile`에 `tzinfo`를 1.2 로 낮출것을 추천함.
    * linux 환경에서 구현된 johngrib님 위키를 그대로 따라하다 보니 빼먹은 듯..

### 해결책 실행

* 프로젝트 루트의 `GemFile.lock`에 다음 줄을 추가 ( 위의 Timezone Managemnt 링크에서 추천)
  ```ruby
  gem 'tzinfo', '~> 1.2'
  ```
* Gemfile 수정후 `bundle exec jekyll serve` 실행하니 다음과 같은 메시지 출력
  ```sh
  You have requested:
    tzinfo ~> 1.2

  The bundle currently has tzinfo locked at 2.0.2.
  Try running `bundle update tzinfo`

  If you are updating multiple gems in your Gemfile at once,
  try passing them all to `bundle update`
  Run `bundle install` to install missing gems.
  ```
* `bundle update tzinfo` 수행
  ```sh
  D:/repository/honggaruy.github.io>bundle update tzinfo
  Fetching gem metadata from https://rubygems.org/..........
  Fetching gem metadata from https://rubygems.org/.
  Resolving dependencies...
  Using public_suffix 4.0.6
  Using addressable 2.7.0
  ....
  Fetching tzinfo 1.2.7 (was 2.0.2)
  Installing tzinfo 1.2.7 (was 2.0.2)
  Using tzinfo-data 1.2020.4
  Using wdm 0.1.1
  Note: tzinfo version regressed from 2.0.2 to 1.2.7
  Bundle updated!
  ```
* 일단 위와 같이 수행한 이후에는 문제는 나오지 않음.

### 그런데... 위 Jekyll issue 관련 Pull Request는 뭘까?

* 위 #7551 이슈에 연결된 PR [Compute time zones on all platforms with 'tzinfo` gem](https://github.com/jekyll/jekyll/pull/7551) 이 있다.
* 작년 2019년 2월에 요청되었는데 ... 문제가 있어 적용이 지연되고 있음.
  * Test 때 Fail이 나오고 .. DST(Daylight Saving Time) 변동에 따라 불안한 모습이 있음
  * 의존성 문제 : windows의 경우 tzinfo-1.x를 써야하는데.. jekyll이 `activesupport`라는 gem에 간접적인 의존성이 있고 `activesupport`의 신버전이 `tzinfo-1.x`를 지원하지 않는 문제가 있음.
* 따라서 이도저도 아닌 교착상태에 있어서... Community에서 더 좋은 해결책이 나오길 기대하는 상황..
  

{% include links.html %}
