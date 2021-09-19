---
name: wikiindex 
layout: post
permalink: main.html
sidebar: other_sidebar
collection: wiki
summary: "parents category index "
tags: [wiki]
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 2:32 PM
toc: true
public: true
parent: [[Web-Category]]
latex: false
---

## {{ page.name }}
## [[Gray-Category]]{어디에 둘 지 모를때 Category}

* [[stackoverflow_searchhelp]]{스택 오버플로우에서 검색하기}
* [[google_photo_slideshow]]{구글 포토의 슬라이드쇼 콘트롤하기}
* [[exact-size-photo-print]]{정확한 사이즈로 사진 인쇄하기}
* [[new-windows-installation]]{새로 윈도우 설치할 때 순서}
* [[isbn10-to-isbn13]]{ISBN-10 에서 ISBN-13으로 바꾸기}
* [[Google-sketchup]]{구글 스케치업 정리}
* [[OpenApi-usage]]{Open API 사용하기}
* [[desk-setup]]{데스크 셋업 구경하기}

## [[Term-Category]]{용어 정리 Category}

* [[keyword_collection]]{용어 설명 모음}
* [[term-string-interpolation]]{String interpolation}
* [[term-short-circuit-evaluation]]{Short-circuit evaluation}

## [[Language-Category]]{Language 관련 Category}

### [[Web-Category]]{Web 관련 Category}
* [[css-meaning]]{갑자기 깨달은 CSS 단어 의미}
* [[javascript-myCookBook]]{Javascript 초급 코딩 요령}
* [[css-default-style]]{Default CSS Style 적용하기}
* [[meet-puppeteer]]{Puppeteer 시작하기}

### [[GoogleAppsScript-Category]]{Google Apps Script 관련 Category}

* [[excel2gsheet]]{엑셀 파일을 구글 시트로 바꾸기}
* [[gas_library]]{구글 스크립트 라이브러리 사용법}
* [[apps-script-starter]]{로컬에서 구글 Apps Script 개발하기}
* [[code-isolation]]{typescript로 개발시 파일 순서 문제}
* [[re2-translation]]{RE2 번역}

### [[Python-Categroy]]{Python 관련 Category}

* [[pyscaffold]]{PyScaffold로 시작하기}

## [[Tools-Category]]{프로그래밍 도구 관련 Category}

### [[Cross-Category]]{공통적으로 쓰는 도구 Category}

* [[dotfiles]]{dotfiles 관련 정리}
* [[windows-terminal-config]]{윈도우즈 터미널 설정하기}
* [[korean-font]]{무료 한글 서체}
* [[vscode-configurations]]{VS Code 설정하기}

### [[Vim-Category]]{Vim 관련 Category}

* [[vim-basic]]{vim 기초 사용법}

#### [[Vimrc-Category]]{vimrc 설정 관련 Category}

* [[vim-folding]]{vimrc 파일 폴딩하기}

### [[Git-Category]]{Git 관련 Category}

* [[git-commands]]{자주 쓰는 git 명령}
* [[git-commit-messages]]{Git Commit 메시지}
* [[git-upstream-meaning]]{git에서 upstream의 의미}

### [[Windows-Category]]{Windows 도구 관련 Category}

* [[Windows-Sysinternals]]{Sysinternals 도구}
* [[PowerShell-Scripting]]{Powershell 스크립팅}
* [[Windows-Terminal-Setting]]{Windows Terminal 설정하기}

### [[Linux-Category]]{Linux 도구 관련 Category}

* [[sed-problem-solving]]{GNU sed의 이상한 정규식 처리}

## [[IT-Device-Category]]{IT 장비 관련 Category}

* [[HDMI2dot1-device]]{HDMI 2.1 장비 관련 정보} 
* [[Smart-Device-Stand]]{스마트폰 스캔 거치대} 
  
## [[Wiki-Setting-Category]]{위키 설정 관련 Category}

* [[wiki-troubleshooting]]{위키 문제점 해결} 
* [[wiki-inWindows]]{윈도우즈에서 V+J+G 따라하기}
* [[wiki-toc2side]]{위키페이지에서 toc 위치 조정}
* [[wiki-font]]{위키페이지 폰트 변경} 
* [[wiki-favicon]]{위키에 파비콘 추가}
* [[wiki-jekyll-spaceship]]{위키에 jekyll-spaceship 적용}
* [[wiki-update-guide]]{위키 편집 안내서}

## [[Books-Category]]{책읽고 정리한 Category}

* [[book-developer-writing]]{개발자의 글쓰기}
* [[book-how-javascript-works]]{자바스크립트는 왜 그 모양일까}
* [[book-refactoring-2nd]]{리팩토링 2판}
* [[book-effective-python-2nd]]{파이썬 코딩의 기술 2판}
* [[book-regex-cookbook]]{한 권으로 끝내는 정규표현식}
* [[book-simplifying-javascript]]{자바스크립트 코딩의 기술}
* [[book-practical-vim]]{Practical Vim}

---

# [blog](/blog/)
<div>
    <ul class="leaders">
{% for post in site.posts %}
    {% if post.public != false %}
        <li>
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
                <span>{{ post.title }}</span>
                <div>{{ post.date | date: "%Y.%m.%d" }}</div>
            </a>
        </li>
    {% endif %}
{% endfor %}
    </ul>
</div>


{% include links.html %}
