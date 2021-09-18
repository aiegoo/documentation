---
name: Google Apps Script  
layout: post
permalink: GoogleAppsScript-Category.html
sidebar: other_sidebar
collection: wiki
summary: "카테고리 2단계 (끝) "
tags: [api]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 3:04 PM
toc: true
public: true
parent: [[Language-Category]] 
latex: false
---
* TOC
{:toc}

# 주요 사이트

* [Google Apps Script 홈](https://developers.google.com/apps-script)
  * [안내](https://developers.google.com/apps-script/overview): 전체적으로 뭐가 있는지 소개, 간단한 샘플코드 같은것도 있음
  * [참조](https://developers.google.com/apps-script/reference): Api 분야별 자세한 명세서 모음 
    * Manifests : Apps Script projects의 메타데이터 모음 파일의 스펙 명세, JSON 형식 
    * G Suite Services : G Suite Service 앱에 bound된 class, method, property 명세
    * Advanced Google Services : 앱에 bound 되지 않고 별도로 연결해야 사용할수 있는 서비스 안내 (자세한 명세는 다른 사이트로 가야함) 
    * Script Services : G Suite 특정앱에 bound 되지 않고, Google Script에서 기본적으로 사용할수 있는 built-in class, method, properties 명세
  * [샘플](https://developers.google.com/apps-script/articles): 튜토리얼 모음?, 유튜브 비디오 모음, 따라해볼수 있는 Codelab 링크 등등이 있음
  * [지원](https://developers.google.com/apps-script/support): 도움 받을수 있는 방법 모음. stack overflow 태그 질문링크등등
  * [Add-ons](https://developers.google.com/gsuite/add-ons/overview) : `다른 동네 입구`, G Suite Developer
  * [Apps Script Api](https://developers.google.com/apps-script/api) : `다른 동네 입구`, Web Apps 형식으로 만들수 있는 동네인듯..

* [Google Drive API](https://developers.google.com/drive) : 구글 Drive object의 API, 위의 GAS홈 >> 참조 >> Advanced Google Services 중의 하나임
  * [안내](https://developers.google.com/drive/api/v3/about-sdk) : 전체 소개
  * [참조](https://developers.google.com/drive/api/v3/reference) : API 함수 소개
    *  엑셀 -> 구글 시트 변환 때문에 만든 [script](https://script.google.com/d/1hXTwkOlL_vXyPA3eLr2m_v2ODr9xywaXM_iRxwyzXINC_ON8r9j8fUxs/edit) 에서 [Drive.Files.insert](https://developers.google.com/drive/api/v2/reference/files/insert)를 사용하는데 version 2 내용임. v3에서 create로 바뀐듯함
  * [샘플](https://developers.google.com/drive/api/v3/examples) : 샘플 코드
  * [지원](https://developers.google.com/drive/api/v3/support) : 도움 받을수 있는 방법 모음
  * [Switch to v2](https://developers.google.com/drive/api/v3/about-sdk) : 버전을 v2로 변경 

* [Google Apps Script 대쉬보드](https://script.google.com/home) : 구글 앱스 스크립트 대쉬 보드, 요기서 스크립트를 직접 편집할 수 있다.

# 관련 인물

* PopGoesTheWza
  * [stack overflow](https://stackoverflow.com/users/10904993/popgoesthewza)
  * [clasp github 리포지토리에서 프로젝트가 언급됨](https://github.com/google/clasp/blob/master/docs/typescript.md#the-namespace-statement-workaround) : [언급된 프로젝트](https://github.com/PopGoesTheWza/ts-gas-project-starter) - 실제 프로젝트에서 쓸 수 있는 프로젝트를 만들어줌 (scafoldning)
  * [내 문제 해결에 힌트를 준 답변 작성](https://stackoverflow.com/a/59809677/9457247)

# 확인해 볼 사이트

* [Yagisanatode](https://yagisanatode.com/category/google-suite/google-sheets/) : Google Apps Script 팁이 많은 블로그
* [MASHe](https://mashe.hawksey.info/2018/02/google-apps-script-patterns-getting-a-google-sheet-header-row/) : GAS 팁 확인해볼 것

# Google Apps Script - 카테고리 문서 

{% include links.html %}
