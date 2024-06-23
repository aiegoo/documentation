---
name: 오늘의 영감 
layout: post
permalink: 2020-04-18-todays-ideas.html
sidebar: other_sidebar
collection: wiki
summary: "excel to google sheet, useful sites "
tags: [wiki, blog]
excerpt_separator: <!--more-->
date: 2020-04-18 00:28:32 +0900
updated: 2021-09-29 2:48 PM
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
latex: false
repos: aiegoo/documentation/issues
folder: diary
youtubeID: jBLaP-XwGE8
youtubeID2: IXglpmzFfBA
driveID: 1v8L4SaELogEU0gRyGa2b5X-WWs9NE4Ly
next_post: 2020-04-28-todays-ideas.html
previous_post: 2020-04-15-todays-ideas.html
---

* TOC
{:toc}

# Excel 데이타를 구글시트로 불러오기

* 발견 링크 1 : [Import Excel Data to Google Sheets Automatically Using Google Sheets API & NodeJS](https://youtu.be/LwAenUKWw8g)
  * Google sheet script로 Excel 데이타를 불러오는 방법을 찾던중 발견
  * Node.js 기반이라... 흠. Google Sheets API 단독으로 하는 방법은 없나..?
  * 일단 pass

* 발견 링크 2 : [gist, convertExcel2Sheets](https://gist.github.com/azadisaryev/ab57e95096203edc2741)
  * Drive API를 enable 해야 한다고 써있네.. [이건가?](https://developers.google.com/apps-script/advanced/drive)
  * 찾은듯..!  [이거임](https://developers.google.com/apps-script/guides/services/advanced)
  * Apps Script service의 성격에 대한 전반적인 설명. [Reference overview](https://developers.google.com/apps-script/reference)

* 발견 링크 3 : [Import Local CSV into Google Document or Google Spreadsheet](http://srikanthgatta.blogspot.com/2015/08/import-local-csv-into-google-document.html)
  * Google Apps Script로 Local CSV 데이타를 구글 시트로 불러오는 내용
  * 해당 링크는 App script를 설치하는데...활용방법은 [Web Apps](https://developers.google.com/apps-script/guides/web)으로 활용하기

* 발견 링크 4 : [Local file system access using google script](https://stackoverflow.com/q/27616124/9457247) 
  * stack overflow 질문, UI 없이는 안된다는 답변, [google picker](https://developers.google.com/picker/)를 쓰라는데.. 

* 발견 링크 5 : [Need Apps Script to Copy a File from my Local Hard Drive to a Google Sites Folder](https://stackoverflow.com/q/17576121/9457247)
  * 구글 스크립트로 로컬 하드에서 자동으로 파일을 읽어오도록 할수 없을까하는 내용
  * 질문 댓글에 .. 구글 Apps script는 서버에서 실행 되기때문에 안될꺼라는 내용. 하고 싶으면 본인의 로컬 머신에서 돌아가는 프로그램으로 올려야함.
  * 이 질문에서 유용한 사이트를 몇가지 발견함
    * [DropIt](http://www.dropitproject.com/) : 파일 관리를 자동화하는 Open Souce, AutoIt 스크립트로 만든듯 하다.
    * [Yandex Disk](https://disk.yandex.com/) : 러시아의 구글?, 흠. 

## 잠정 결론

### 내가 하고 싶은 작업

* 은행, 카드사에서 거래정보를 로컬PC에 다운로드 받아 놓으면 구글 apps 스크립트가 자동으로 긁어가서 정보를 축척하면 좋겠다
  * 자동으로 은행 사이트 방문해서 긁어오는 것은 아직 힘들듯...(보안땜에.., AutoIt 쓰면 되려나...?)
  * 위에서 `발견 링크 5번`과 가장 비슷

### 구체 적인 방법 

* 일단 [구글 드라이브 백업및 동기화 프로그램](https://www.google.com/intl/ko_ALL/drive/download/backup-and-sync/)을 다운로드 받아 로컬에 설치한다.
* 은행 사이트에서 엑셀 파일을 다운로드 받을때 동기화 폴더로 직접 다운받는다.
* 동기화가 끝나면 구글 드라이브에서 해당 파일을 볼수 있다.
* 구글 드라이브내에서 엑셀 --> gsheet 파일로 변환한다. 이 때 [time trigger](https://developers.google.com/apps-script/guides/triggers/installable#time-driven_triggers)를 걸어서 자동으로 정해진 시간에 변환하도록 한다.

# 유용한 웹사이트

* [abbreviations.com](https://www.abbreviations.com/) : 축약어를 풀어주는 사이트, 아래에 보면 자매사이트들도 많은데 유용할듯..
* [google-apps-script](https://riptutorial.com/ko/google-apps-script) : 튜토리얼 사이트중 Google-apps-script 관련 내용
