---
name: GIT  
layout: post
permalink: Git-Category.html
sidebar: other_sidebar
collection: wiki
summary: "카테고리 2단계 (끝)"
tags: [git]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 3:27 PM
toc: true
public: true
parent: [[Tools-Category]]  
latex: false
---
* TOC
{:toc}

# 주요 사이트

* [Git Magic](http://www-cs-students.stanford.edu/~blynn/gitmagic/) :  Git 사용법을 좀더 알기쉽게 설명
  * [Git Magic 한국어 번역 사이트](http://www-cs-students.stanford.edu/~blynn/gitmagic/intl/ko/) : Git Magic 한국어 번역 (4, 5, 6 장 미번역)

# 현재 공부중인 링크

* .gitconfig 파일에 "git sc" 명령을 만드는데 아이디어를 준 링크
  * SO, [How to create a frequency list of every word in a file 답변](https://stackoverflow.com/a/10552948/9457247)
  * 캡쳐 쓰는 법 ()로 쌀때, \\\\( ... \\\\) 로 싸야 함. 부를 때도 \\\\1
  * [\\\\1] 안되는 이유는 이어지는 awk 명령이 중간에 공백이 있을때 뒤엣것을 날려버림. 잘 생각해보자 $1만 프린트 하고 있어서 첫번째 공백 이후것은 날아간다.
  * 이 명령이 필요한 이유 : git difftool 에 필터를 쓰기전에 어떤 옵션으로 필터를 쓸지 정하기 위해 필요하다.

# git 기본 명령

* [git 안쓰던 프로젝트를 github에 등록하고 싶을 때](https://git-scm.com/book/ko/v2/Git의-기초-리모트-저장소#_리모트_저장소_추가하기)
* 

# git config ( 포스팅할것)

* git mergetool로 merge 한이후에 utf8 --> cp949 로 변환되는 문제가 있음
* Diffmerge의 문제라고 생각했는데.. git for windows의 문제일수도 있음
* 관련 링크
  * [Git for Windows Unicode Support](https://github.com/msysgit/msysgit/wiki/Git-for-Windows-Unicode-Support#windows-settings) : git for windows 공식
  * [Git-bash를 사용하며 발생한 한글관련 문제들](https://www.slipp.net/wiki/pages/viewpage.action?pageId=5800002) : 실제 사례 중심.
  * [git 한글 파일명 사용 문제 고치기](https://edykim.com/ko/post/git-fix-problem-using-filename-core.quotepath/) : core.quotepath 원 포인트
  * [Mac에서 git 사용시 한글 파일명 문제](https://blog.asamaru.net/2017/06/26/mac-os-git-korean-file-name-corequotepath/) : Mac, 윈도우즈 상관없이 Unicode문제인듯
  * [Git은 어렵다](https://sncap.tistory.com/630) : 별도 설명없이 git 설정을 모아놓았음
  * [Git을 이용한 개행문자 핸들링](https://reiphiel.tistory.com/entry/git-handle-newline) : git의 개행문자 설정에 대한 상세설명. 관련글을 쓰고싶은데 그대로 베낄순없고 설명된 부분의 원문을 인용하여 링크를 거는 방식으로 작성해볼것.

* 지금까지 .generateData.js를 실행한적이 없는듯
* windows에서 이 사이트 구축할때 해야하는 일로 정리할것
* 관련 링크
  * [Git hooks, parctical used(yes, even on Windows)](https://www.tygertec.com/git-hooks-practical-uses-windows/) : git hook 사용방법

* [좋은 git 커밋 메시지를 작성하기 위한 8가지 약속](https://djkeh.github.io/articles/How-to-write-a-git-commit-message-kor/) :  git commit 메시지 작성법
* [Git 사용 규칙 - Git commit 메시지](https://tttsss77.tistory.com/58) : git 커밋 메시지 규칙
* [Hugo로 github.io 블로그 만들기](https://ryan-han.com/post/etc/creating_static_blog/) : 여러가지 설정 참고할것이 있을듯..

# git - 카테고리 문서 
