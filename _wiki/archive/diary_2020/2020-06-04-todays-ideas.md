---
name: Properties Serveice 사용법 
layout: post
permalink: 2020-06-04-todays-ideas.html
sidebar: other_sidebar
collection: wiki
summary: "오늘의 영감"
tags: [wiki, blog]
excerpt_separator: <!--more-->
date: 2020-06-04 12:26:32 +0900
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
next_post: 2020-06-15-week-25th.html
previous_post: 2020-05-11-todays-ideas.html
---
* TOC
{:toc}

# Properties Service

* [BetterLog 코드](https://github.com/markgitset/BetterLog/blob/master/Code.gs)를 보니...가운데쯤에 Best practice라고 나오는데..
  * 가운데쯤 : function info() 의 함수 주석
  * .. ScriptProperties.getProperty('BetterLogLevel')).. 을 쓰라고 나온다.
  * 따라서 해보다보니... [ScriptProperties는 deprecate된](https://developers.google.com/apps-script/reference/properties/script-properties) 놈이다.
* 대신 바로 옆에 비슷한 [PropertiesService](https://developers.google.com/apps-script/reference/properties/properties-service)가 있는것 같다.
* [사용법 가이드](https://developers.google.com/apps-script/guides/properties)도 있다. 아래 일부 내용을 번역해봤다.

## 그냥 정리하면서 보는 Properties Service

PropertiesService는 세가지 메소드를 제공하는 global object이다. 각각은 유사한 `Properties` object를 반환하지만, 접근 권한이 서로 다르다

|    | Script Properties | User Properties | Document Properties |
|    | :--- | :--- | :--- |
| access 메소드 | getScriptProperties() | getUserProperties() | getDocumentProperties() |
| 공유 범위 | script, add-on, web app을 사용하는 모든 사용자 | script, add-on, web app을 사용하는 현재 사용자 | 열린 문서안의 모든 add-on 사용자 |
| 전형적인 사용처 | 개발자의 외부 데이타베이스용 유저이름과 패스워드등의 앱 범위의 설정 data | 미터법등의 단위계같은 사용자별 설정 | 내장 차트의 source URL과 같은 문서별 설정 |

### Data format

* Properties service는 모든 데이터를 문자열 형태의 key-value 쌍으로 저장한다. 문자열이 아닌 data type은 자동으로 문자열로 변환되며, 저장된 객체내의 메소드도 포함하여 변환된다. 

## 실제 사용례

* BetterLog를 사용하는 스크립트에서 표시할 LogLevel을 스크립트 속성으로 지정하는 것이 좋은 사용례 같다.
* 위 `BettLog 코드`에서 나온것 처럼, Script Editor에서 **파일 > 프로젝트 속성** 에서 **스크립트 속성**으로 지정된 속성을 사용할수 있는데..
* deprecated 된 `ScriptProperties` 서비스 대신 다음과 같이 구현하면 된다.

  ```js
  Logger = BetterLog
  .setLevel(PropertiesService.getScriptProperties().getProperty('BetterLogLevel'))
  .useSpreadsheet('Spread Sheet for log project key');

  // 설정한 log level대로 동작하는지 확인
  Logger.info("This log is 'Info' level");
  Logger.config("This log is 'config' level");
  Logger.fine("This log is 'fine' level");
  ```

  * 참고 삼아 볼만한 링크
    * [var userProperties = PropertiesService.getUserProperties(); is not working properly for me?](https://stackoverflow.com/a/27744925/9457247)
    * [How can I read the user properties saved in the File Project properties menu ?](https://stackoverflow.com/q/48313491/9457247)

# typescript로 작성해서 구글시트에 올릴때 한글이 유니코드로 변환됨

* VS Code에서 typescript 로 작성한 한글 문자열이 아래와 같이 유니코드로 변환된다.
```js
// 이 코드가 ...
Logger.info(`계좌번호 일치 : ${accountNum}`;
// 이렇게 변함 
Logger.info("\uACC4\uC88C\uBC88\uD638 \uC77C\uCE58 : " + accountNum);
```
* 변환할때 사용하는 유틸은 **[ts2gas](https://github.com/grant/ts2gas)** 이다.
  * 요기 github issues에 들어가서 유사한 내용이 있는지 확인했다.
  * [유사한 이슈가 있는데](https://github.com/grant/ts2gas/issues/45) .. close 되어있고 typescript의 `transpileModule`의 문제가 아닌지 확인해 보란다.
* 찾아보니 typescript의 transpilModule 을 테스트 해볼수 있는 [테스트 코드](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#a-simple-transform-function)가 있다.
  * node.js 구동해서 테스트해봐야 하는데 아직 안해봤다.


## 참고

* [TypeScript-Handbook 한글 문서](https://typescript-kr.github.io/)
