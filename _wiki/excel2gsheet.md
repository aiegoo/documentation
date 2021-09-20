---
name: 엑셀 to 구글 시트  
layout: post
permalink: excel2gsheet.html
sidebar: other_sidebar
collection: wiki
summary: "google-apps-script를 배우는 좋은 시작점"
tags: [git]
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 3:27 PM
toc: true
public: true
parent: [[GoogleAppsScript-Category]]  
latex: false
---
* TOC
{:toc}

# 1. 개요

* 월말 돈 계산 같은 것 할때 엑셀에 비주얼 베이직 얹어서 대충 해주면 어느 정도 자동화 할 수 있었다.
* 그런데 구글 시트를 써보니 ...
  * 웬만한 엑셀 함수 대부분 지원하고 .. [구글 시트 함수 목록](https://support.google.com/docs/table/25273)
  * 자주 쓰는 구글 캘린더, 구글 지도 등과도 연계가 쉽고 ..
  * javascript도 쓸 수 있는데 엑셀보다 자동화하기 더 좋은것 같다.
  * 제일 좋은건 (기본기능은) 무료라는 것 !!  
* 일반 사용자로서 `엑셀`에서 `구글시트`로 넘어갈때의 [가이드](https://support.google.com/a/users/answer/9331278)도 있지만..
* 프로그래밍이 최종목적인 게으름을 피우기 위해.. 자동화를 알아보도록 하자

## 구체적 요구 사항

* 매월 은행 거래 정보, 카드 사용내역을 로컬 PC에 엑셀 파일 형태로 수집한다.
* 기존엔 엑셀파일을 그대로 썼지만 이제 구글 시트로 정리하고 싶다.
* 자동으로 은행사이트 접속해서 긁어오는게 더 좋겠지만... 아직 은행 카드 사이트를 스크래핑 하긴 힘들고 (selenium으로 보안 로그인 하는걸 아직 잘 모르겠음)
* 일단 수동으로 수집한 금융 관련 엑셀파일이 업데이트 되어 있으면 구글 시트로 자동으로 누적되면 좋겠다.

# 2. 전개

*  일단 [알아본 바]( /blog/2020/04/18/todays-ideas/index.html )로는 다음과 같은 흐름이 가장 적당한것 같다
  1. [구글 드라이브 백업및 동기화 프로그램](https://support.google.com/drive/answer/2374987)을 다운로드 받아 로컬 PC에 설치한다
  2. 은행 사이트에서 엑셀 파일을 다운로드 받을때 동기화 폴더로 직접 다운받는다
  3. 다운받는 순간 자동으로 진행되는 동기화가 끝나면 구글 드라이브에서 해당 파일을 볼 수 있다.
  4. 구글 드라이브내에서 .xls 에서 .gsheet 파일로 변환한다. 
  5. 이 때 [time trigger](https://developers.google.com/apps-script/guides/triggers/installable#time-driven_triggers)를 걸어서 자동으로 정해진 시간에 변환하도록 한다.

* 위에서 1~3 번은 간단히 되고 4,5번을 별도로 정리해보자

## 구글 드라이브에 저장된 엑셀파일을 gsheet 파일로 변환하기

* Stack Overflow에 적당한 질문및 [답변](https://stackoverflow.com/a/49265306/9457247)이 올라왔다.
  * 여기서 사용된 gsi, efi 반복형태는 [이 곳](https://developers.google.com/apps-script/reference/drive/file-iterator)을 참조한듯 하다.
  * `gsi`는 google sheet iterator, `efi`는 excel file iterator의 약자 일거라고 나름대로 생각한다.
  * 코드상에 `일일 코드 실행량 (quota limits)`에 대한 언급이 있는데 현황은 [여기](https://developers.google.com/apps-script/guides/services/quotas)에 있다
* 위 답변을 [`stand alone script`](https://script.google.com/d/1hXTwkOlL_vXyPA3eLr2m_v2ODr9xywaXM_iRxwyzXINC_ON8r9j8fUxs/edit)로 만들어 실행해봤다.
  1. 위에서 언급한 1~3과정을 이용해 구글 드라이브 내 폴더 두개를 지정한다. ( 엑셀파일폴더, 구글시트로 변환하여 저장할 폴더) 
    * 서로 같아도 상관없다.
    * [Introducin the Spreadsheet service](https://codelabs.developers.google.com/codelabs/apps-script-fundamentals-2/#1) 페이지의 중간의 `Key Point`에 `id`를 추출하는 방법이 있다.
    * 위 방법을 이용하여 각 폴더의 ID를 알아낸다
  2. [stand alone script](https://developers.google.com/apps-script/guides/standalone) 에 나온대로 `script.google.com`에 접속하여 새로운 스크립트를 생성한다.
  3. 위 링크의 답변내 코드를 그대로 복사하여 `코드.gs`에 붙여넣기 한다.
    * 링크상 코드중 오류가 있다. 
      * excel file 이름과 gsheet 이름을 비교하는 부분에서 "파일이름.xls"를 "파일이름"과 비교하는 오류가 있다. (같은것으로 판단해야 하는데 못함)
      * 엑셀파일 이름을 file.getName()으로 받아오는걸 그대로 쓰지말고, 정규식으로 이름부분만 받아서 비교하도록 한다
      ```js
      // 원래 이렇게 되어있었다.
      var file = efi.next();
      if( ... && !gsNames[file.getName()])
      // 다음과 같이 수정
      var file = efi.netx();
      var onlyName = file.getName().replace(/(.*)(\.[^.]+)/, '$1');
      if( ... && !gsNames[onlyName])
      ```
      * google apps script는 javascript regex 문법을 따른다.
      * 정규식으로 파일명 선택하는 부분은 [이 곳](https://dopus.tistory.com/94)을 참조함. 
  4. 코드중 상위부분의 아래코드에 1번에서 알아낸 ID를 각각 붙여넣기 한다.
  ```js
  // 이 코드를 ..
  var origin = DriveApp.getFolderById("origin folder id");
  var dest = DriveApp.getFolderById("destination folder id");
  // 이렇게 ...
  var origin = DriveApp.getFolderById("1DnKWG....9hC3jb_brQ8b0");
  var dest = DriveApp.getFolderById("16K05Rlm....jdpCMsAUOf8");
  ```
  1. 한번 실행해본다. 실행하는 방법도 [stand alone script](https://developers.google.com/apps-script/guides/standalone#running_a_standalone_script) 요기에 나와있다
* 실행 이력및 로그 보기 : [이곳](https://script.google.com/home/executions)에서 실행 이력, 로그 모두 확인가능하다.

## Time trigger 거는 방법

* [이 문서](https://developers.google.com/apps-script/guides/triggers/installable#managing_triggers_manually)에 잘 나와있다.
* 수동적으로 (Managing triggers manually) 거는 방법과 프로그램으로 (Managin triggers programmatically) 거는 방법이 있다.
* 프로그램적으로 트리거를 걸 필요성이라면... 2중으로 트리거를 거는 경우를 생각해볼수 있겠다.
  * 매일 1차례 수행되도록 1차 트리거를 수동으로 걸어놓은 상태에서 특정일에 1시간 단위로 수행되는 트리거를 프로그램적으로 생성되도록 할 수도 있다.
* 일단 프로그램적으로 거는 경우는 아직 필요하지 않으므로, 수동적으로 트리거를 다루는 방법에 대해 번역해 본다

### Managing triggers manually

설치형 트리거를 스크립트 에디터를 통해 수동적으로 생성하려면, 아래 단계를 따라야 한다

1. 스크립트 에디터에서, **수정 > 현재 프로젝트의 트리거** 를 선택한다.
2. 새로 열린 페이지 가운데에 **새 트리거를 만듭니다.** 라고 쓰인 링크를 클릭한다.
3. 새로 팝업 창이 열린다
4. **실행할 함수 선택** 에서 트리거 적용할 함수이름을 선택한다.
5. **이벤트 소스 선택** 에서, **시간 기반** 이나 스크립트가 [묶여있는](https://developers.google.com/apps-script/guides/bound) Google App ( 예를 들면, **스프레드시트에서**)를 선택한다.
6. 트리거 세부설정은 위에서 선택한 이벤트 소스에 따라 항목이 달라진다
   * 시간 기반일 경우 : **트리거 기반 시간 유형 선택** , **시간 간격 선택** 을 조정할 수 있다. 
   * Google App 기반일 경우 : **이벤트 유형 선택** ( 열릴 시, 수정 시, ... ) 을 조정할 수 있다.
   * 캘린더일 경우 : **캘린더가 업데이트 됨**  밖에 선택할 수 없는데... 어떻게 하는지는 잘 모르겠다.
7. 옵션으로, **트리거 실패 알림 설정** 으로 트리거 함수가 실패할 경우 언제 이메일을 통해 알려줄지 설정할 수 있다.
8. 다 설정한후에 저장한다.

## 앞으로 진행할 내용 ( 진행한 내용은 제거할 것)

* 현재는 엑셀에서 구글시트로 무조건 변환하는 내용만 되어있음
* 변환된 구글시트에서 새로운 내용을 가져오고 
* 사용한 엑셀파일및 구글시트 파일은 저장소에 보내고, 일정시간(2달?)후 제거하는 
* 내용의 자동화가 필요할 듯


{% include links.html %}
