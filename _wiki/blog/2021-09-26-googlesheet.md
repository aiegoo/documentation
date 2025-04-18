---
name: google sheet
layout: post
permalink: 2021-09-26-googlesheet.html
sidebar: other_sidebar
collection: wiki
summary: "Google Sheets API with github Pages and API"
tags: [django, database, api]
tagName: api
keywords: "django api google sheet database credential github sync"
excerpt_separator: <!--more-->
date: 2021-09-26 00:12:03 +0900
updated: 2021-11-10 5:55 PM
toc: true
public: true
parent: [[Wiki-Setting-Category]]
latex: false
---

* TOC
{:toc}

## googlesheet and  data-viz
[observablehq](https://observablehq.com/@floatingpurr/observable-twitter-2021)

[d3-official](d3js.org)

### books
[datacleaning](https://github.com/aiegoo/uas-reference/blob/master/data/datacleaning.pdf)

[googleugide](https://github.com/aiegoo/uas-reference/blob/master/data/googleguide.pdf)

[googlesheet-gas](https://github.com/aiegoo/uas-reference/blob/master/data/googlesheet-gas.pdf)
## 원문
  
* [Using Google Sheets as a Database: A Comprehensive Analysis, HEVO](https://hevodata.com/learn/google-sheets-as-a-database/)

### Using Google Sheeta as a Database: A Comprehensive Analysis

### 개요

{{site.data.alerts.details}}

* 당신혹은 당신조직이 구글 시트를 데이타 저장용도로 써본적이 있나?
* 구글 시트를 무료 데이타베이스로 쓸 수 있을지 궁금했던적이 있나?
* 전통적인 database를 구매하지 않고 당신의 웹서비스에 구글시트를 database로 활용할 수 있을지 생각하나?
* 위의 질문들이 모두 Yes 라면, 바로 정확한 지점에 왔다 .
* 이 포스트에서는 구글시트를 database로 사용하기 위해 data를 변환하는 방법과 사용방법에 대해 논의한다.
* 다음의 목차를 참고 해라 (목차 생략, 위의 목차를 참고하라)
:::
{{site.data.alerts.ended}}
### Introduction to Google Sheets

* 구글 시트는 클라우드에서 spreadsheet 기능을 제공하는 구글의 서비스다.
* 구글 시트는 spreadsheet과 비슷하지만 한층 더 강력해진(on steroids) 도구다.
* 태생이 클라우드 플랫폼이라서, 기존의 spreadsheet과 비교해 더 많은 기능을 제공한다.
* 구글 시트의 몇가지 주요 특징을 살펴보면..
  1. 웹기반이기 때문에, 인터넷을 통해 언제 어디서든 sheets에 저장된 데이타에 접근할 수 있다
  2. 모든 주요 디바이스의 운영체제는 구글 시트용 앱을 가지고 있으며 막힘없는 경험을 제공한다.
  3. Gmail 계정과 함께 제공되며 구글 시트를 사용하기 위해 추가비용을 낼필요는 없다.
  4. Microsoft Excel과 사용방법이 유사하여 경험이 있다면 어려운점은 없을것이다.
  5. 시트의 데이타를 효율적으로 분석하기 위해 플러그인 , 애드온, 커스텀 코드를 적용할 수 있다.

### Introduction to Databases
<style>
  details.calloutDetails::after { /* to place marker for the height of content */
    content: "";
    position: absolute;
    display: table;
    clear: both;
    left: 1px;
    width: 20px;
    background-color: rgba(128, 128, 128, 0.644);}
</style>

{{site.data.alerts.details}}

* database는 행과 열로 표현된 data collection 이다
* database는 database management system(DBMS)의 도움을 받아, 데이타의 구조적인 정보를 조정하고 구성한다.
* datatabs는 쉽게 data에 접근하고, 조회하고, 구성하고, 관리할 수 있도록 기능을 제공한다.
* 대부분의 database는 데이타를 작성하고 요청하는데에 structured query language (SQL)을 이용한다
* 몇가지 인기있는 database는 다음과 같다.
  1. MySQL
  2. PostgreSQL
  3. SQL Server
  4. MongoDB(NoSQL database)

{{site.data.alerts.ended}}
### Google Sheets as a Database

* 구글 시트는 매우 발전된 형태의 spreadsheet로 바로 사용할 수있는 많은 능력이 탑재되어있다
* 클라우드 기반 앱이기 때문에, 작은 어플리케이션이나 웹사이트의 database로도 활용할 수 있다.
* MySQL이나 PostgreSQL 처럼 많은 돈을 지불해야하는 DB들은 가볍게 무시하고..
  * 구글 시트를 이용하여 실시간으로 data를 저장하거나 관리할 수 있다.
* DB의 사용처를 구글 시트가 완전히 대체할 수있다고 말하는것은 아니지만
  * 작은 dataset에 한해서 옵션정도가 될 수는 있다
* 어떻게 Google Sheets를 database로 사용하는지 보자

### 필요한 준비물

1. Google Cloud Platform Account
2. Python 3.6 or later
3. Excel data와 프로그래밍 언어에 대한 기본적인 이해

### Google Cloud Console에서 프로젝트를 시작함

1. 구글 API Manager로 가서 신규 프로젝트를 생성한다
  ![그림1](https://lh3.googleusercontent.com/jBPBoxONLLhITXHoGjBE2gDxMp2pW85TaqVEpW7UOw7zJWLT5kOu8zRRY_UK1dSSMI1G9AvquG-aBGN7W4JDWo_QUYpANqXH9XjfWi9X8Ofj-XUH1eJcC_gidNLqSWBUZVm1rNRK)
2. **Google Drive API**를 프로젝트에 추가한다. 이것은 구글 드라이브에 저장된 spreadsheet에 접근을 허용하는 것이다.
  ![그림2](https://lh3.googleusercontent.com/36ioGEr6hp5RtO1PVMFhSXH4qZ1L-dJkom627hqkeJTFfejgM4vL4L3fEtao9QKYucBXRVco0TcYRVwUzB7Xo1MjYd5cbA7BrYPjVFb-xcS_A2Dlp10yfNQGbsanFHnxpVtYvVa0)
3. Python 프로그램에서 생성 될 요청을 인증(authenticate)하는 데 사용할 자격 증명(credential)을 생성한다.
  ![그림3](https://lh4.googleusercontent.com/KMoH9JB7Pg_8L1uozU3dI416jvwxa4N0S8d4QTJIPk1T-AWMewvc00qKcQyQUIFk1Wk4GXv-dPxDGjklKo8ka6NJiOoN5JVzq4PHbMeHvaJ_t4vSdnZKcOyLmFlLIQJEIZdGYQbj)
4. 생성된 JSON Key를 로컬머신에 `keys.json`이라는 이름으로 저장한다
5. 텍스트 에디터로 생성된 키를 Open하고 **client_email** 프로퍼티 로 언급된 이메일 주소를 복사한다.
6. "Tutorial" 이름으로 시트를 생성하고 몆가지 데이터를 추가해본다
7. 그 시트의 접근권한을 위 email 주소에 공유한다. 이 작업은 API를 통해 그 시트로의 접근권한을 허용한다.
  ![그림4](https://lh6.googleusercontent.com/dl_tSQ4HObs0gFVZeJAlgT6vy5fUHd-5WMNtRXBlA5bYBvQDXGyS1jYMhHDTSmx3SptRbp8EIilssq-rS8nxUjf6QWervs75plItAEuRc1CO359XPaKJXFIkMwfLNJOXaAySUyZM)

### Connect to Spreadsheet via Python

1. 좋아하는 Python IDE를 열고 아래 패키지를 설치한다
  ```sh
  > pip install gspread oauth2client
  ```

2. `googleSheetToPython.py` 이름으로된 파일을 생성하고 아래 코드를 적어넣자


  ```python
  # 라이브러리를 임포트한다
  import gspread
  # oauth2client 에서 가져온 Service client credential
  from oauth2client.service_account import ServiceAccountCredentials
  # 이쁘게 프린트하기
  import pprint
  # scope 생성하기
  scope = ['https://spreadsheets.google.com/feeds']
  # keys.json 내용과 scope를 이용하여 자격증명 생성하기
  creds = ServiceAccountCredentials.from_json_keyfile_name('keys.json', scope)
  # 자격증명을 이용하여 gspread authorize를 생성하기
  client = gspread.authorize(creds)
  # 이제 구글 시트에 대한 access가 가능하며 StartupName으로 client.open을 호출한다
  sheet = client.open('Tutorial').sheet1
  pp = pprint.PrettyPrinter()
  # 구글 시트안의 모든 record 에 access한다
  result = sheet.get_all_record()
  ```

3. 일단 자격증명이 setup되면, spreadsheet에 접근하는데 API를 사용할수 있으며 CRUD(Create, Read, Update, Delete) opertation을 구글시트에 적용하는 것이 가능해진다

4. 아래 Python code는 구글 시트에서 data를 읽어오는 코드이다
  ```python
  result = sheet.row_values(5) # 각각의 row를 본다
  result_col = sheet.col.values(5) # 각각의 column을 본다
  result_cell = sheet.cell(5, 2) # 특정 cell을 본다
  pp = pprint.PrettyPrinter()
  ```

5. 시트의 값을 업데이트한다
  ```python
  #update values
  sheet.update_cell(2, 9, '500000') # 시트의 cell(2, 9) 위치의 값을 변경한다
  result = sheet.cell(2, 9)
  pp.pprint(result)
  ```

### Limitations of Using Google Sheets as a Database

* 구글 시트는 사용자가 데이타를 관리하고 분석할 수있는 훌륭한 기능들을 제공한다
* 하지만 그것이 기존 database를 완전히 대체하는 것은 아니다
* 구글 시트를 database로 사용하게 될 때 맞닥뜨리게 되는 몇가지 제약(constraints)들에 대해 알아보자
  1. **내결함성 부족**
    * 구글시트는 클라우드를 통해 이용가능하지만, 기존 database와 수준의 내결함성(fault-tolerant)은 없다
    * 만약 어떤 사용자라도 spreadsheet을 지운다면, 모든 데이타는 날아갈 것이다.
    * 반면에 기존 database는 데이타가 다중 노드로 복제되며 훨신 내결함성이 좋은 시스템을 제공한다.
  2. **스토리지 제약**
    * 구글시트는 5백만 레코드까지만 저장할 수있다.
    * 처음에는 이것이 상당히 많은 숫자처럼 보이지만,
      * medium 이나 large size의 application에 충분한 숫자는 아니다
  3. **데이타베이스 기능이 없음**
    * 구글 시트는 querty,search,joins,consitency와 같은 database 기능들을 제공하지 않는다.
    * 부드럽게 joins 기능을 수행하는 표준 API는 없다
    * 이런 동작을 하기 위해서는 직접 복잡한 프로그래밍을 해야한다

### 결론

* 이 포스트에서 구글 시트와 그 특징들, 구글시트를 어떻게 database로 사용하는지를 배웠다
* 하지만 특정 기능들의 부족으로 database를 완전히 대체할 수는 없다
* 당신이 다른 대체품을 찾고있다면, `Hevo Data`를 한 번 써보길 권한다,
* 여기서 부터는 Hevo 홍보 ( 유료 서비스임)

## Flutter Tutorial - Google Sheets API

### 개요

* Youtube 시리즈
* [Flutter Tutorial - Google Sheets API 1/3, youtube](https://www.youtube.com/watch?v=3UJ6RnWTGIY)

### 내용정리

* google sheets에 있는 데이터의 CRUD가 가능한 android, ios, web 앱을 지원하는 api를 배움

### Android Studio 업데이트중 에러

### 참고링크

* [첫번째 링크: Android Emulator Hypervisor Driver for AMD Processors](https://github.com/google/android-emulator-hypervisor-driver-for-amd-processors)
* [두번째 링크: Is Hyper V really disabled?](https://github.com/google/android-emulator-hypervisor-driver-for-amd-processors/wiki/Is-Hyper-V-really-disabled%3F)
* [첫번째](첫번째) 링크에서 Prerequiste를 맞추도록 해야함.

#### Javascript 개념 설명 사이트

* [클로저의 개념, Polemaweb?](https://poiemaweb.com/js-closure) : 클로저의 개념 설명, 모던 자바스크립트 Deep Dive의 저자?


## Data hacker
<p>As part of the research for my Spencer Fellowship, I’m trying to track as many of the financial, political, and social networks in ed-tech as I can. (I’m casting the net wide at first, but my project will surely narrow as I progress.)

I’m using a variety of digital tools to do this, but relying heavily on GitHub Pages (which I already use to manage all my websites and projects) and Google Spreadsheets. This walkthrough is as much to remind me how this process works as it is to help others.
</p>
- what you will need;
* a GitHub account
* the desktop version of GitHub
* a Google account
* a text editor (I use Sublime Text; also recommended: Atom, which is built by GitHub)

### Create a github repo
You will need to enable github Pages as well before starting to edit the files for layout or structure.

### Create a google spreadsheet
<p> The Google Spreadsheet is going to work as the database, of sorts, for this project. All updates to the data will take place in the spreadsheet, and through a couple of pieces of code, the GitHub repository will then be updated. (This can be scheduled to happen [programmatically](https://www.easycron.com/), or you can just do this manually. I do the latter.)
Each tab in your spreadsheet will be used to create a YAML file – a human-readable data file. I recommend lower case names for the tabs. Use hyphens if you want the name to be more than one word. The top row in each tab will dictate the data structure.</p>

### make the spreadsheet public
This won’t allow anyone else to edit the document. But it will provide a JSON representation of its contents, which means you can program against it.

![publish-to-web](https://s3.amazonaws.com/hackedu/2017-07-28-howto11.png)

Google gives you the link to your spreadsheet. Copy that down somewhere. If you look at the URL in your browser, you can readily see what you need to know: there’s lengthy string of characters after docs.google.com/spreadsheets/d/ and before /edit. That’s the sheet ID.

### set up the code for integration
So here’s one of the things I love about GitHub and why I use it for all my projects. You can really easily copy files from another project into your new project, so you don’t need to write anything from scratch. You mostly need to edit a few lines in various files. And because the files on GitHub are openly available, you can also download or fork repositories.

Copy all the files from one of my data projects – there’s a long list at Hack Education Data – into the local folder that contains your project. Don’t worry. Nothing will change on GitHub until you sync what’s stored locally with what’s stored on GitHub. And you can always revert back to earlier changes. (Another huge benefit.)

Here I’ve copied all the files from my work on the Chan Zuckerberg Initiative because the data structure for the project is almost identical. In that project too, I had two tabs in my Google Spreadsheet – one for people and one for investments. If your tabs have different names, you’ll need to rename the files inside the _data folder.
![data_file](https://s3.amazonaws.com/hackedu/2017-07-28-howto12.png)
Open up all the files in the folder in your text editor. Mostly, you’re just going to have to make a bunch of small changes to each file – changing headers, in my case, from Chan Zuckerberg Initiative to Emerson Collective.

![liquid_script](https://s3.amazonaws.com/hackedu/2017-07-28-howto14.png)

This is the markup language that’s used to build sites using the data in the _data folder. But I think you can see a bit of the logic here. The variable “investments” draws on the data in the site.data.investments file. The data is going to be sorted by “Name.” (Note: “Name” is capitalized in that column in my Google Spreadsheet.) And for each record – “investment” – display on the page the investment.Name, Investment.Date, and Investment.Amount. (Also note: these are also capitalized.) These are displayed as a list, but you can change the HTML to suit your needs.

You'll need to change data in the _config.yml file. ![_config](https://s3.amazonaws.com/hackedu/2017-07-28-howto15.png)

You’ll need to add the sheet ID from your Google Spreadsheet. (Remember that? You wrote it down, right?) That’s the integration_spreadsheet_key. Make sure your GitHub user name and the name of the repo are correct too.
### personal access token for URL

Updating your GitHub repository with your spreadsheet data is going to happen via a URL. Obviously, update the URL below with the correct data.

https://[your GitHub name].github.io/[the name of your repository]/pull-spreadsheet/?key=[spreadsheet ID]&worksheet=[name of the worksheet]&token=[your GitHub personal access token]&org=[your GitHub name]&repo=[the name of the repository]&branch=master

I always open the browser console to make sure the code has run correctly.
You can double-check and make sure the YAML file has been updated successfully. Ideally if there are errors, the console will help you troubleshoot them. (I have found that sometimes characters like accents throw errors at this stage.)

The repository on GitHub will now be updated with the new spreadsheet data. You will need to sync the repo locally to update the files on your machine.

The URL for your project will be [your GitHub username].github.io/[repo name]. In my case, this project is available at hack-education-data.github.io/emerson-collective.

## more reading
[githubapi](https://mixedanalytics.com/knowledge-base/access-github-data-in-google-sheets/)


{% include links.html %}
