---
name: Open API 사용하기 
layout: post
permalink: OpenApi-usage.html
sidebar: other_sidebar
collection: wiki
summary: " 실제 사용법 정리 "
tags: [api]
excerpt_separator: <!--more-->
date: 2021-09-21 12:42:03 +0900
updated: 2021-09-23 7:24 PM
toc: true
public: true
parent: [[Gray-Category]]
latex: false
---
* TOC
{:toc}

## icnonify api
[home](https://iconify.design/)

### usage with node
<script src="https://gist.github.com/aiegoo/fe2948708f0de82d27d2ae7cd60dd266.js"></script>
## 1. 발단

* 가족과 같이 특정 영화를 보고자할 때..
  * 애들과 같이 봐도 될지 등급은 어떻게 매겨진건지 알고 싶을때가 있다.
* 우리나라 영화 등급은 [영상물등급위원회](https://www.kmrb.or.kr/)에서 설정한다.
  * 영등위는 [open api](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=3043382) 도 제공한다.
* 사용하는 예제를 만들어보자

## 2. 전개

### 이슈들

### API Key가 URL encoding 처리가 되어 승인되지 않은 키 에러가 나는 문제 

* [기본 부족 보충](https://www.w3schools.com/tags/ref_urlencode.ASP)
  * URL - Uniform Resource Locator
    * 웹 브라우저는 웹서버로 부터 페이지를 요청할 때 URL을 사용한다
    * URL은 웹 페이지의 주소이다.
  * URL Encoding ([Percent Encoding](https://en.wikipedia.org/wiki/Percent-encoding))
    * URL encoding은 URL에 사용되는 문자를 인터넷을 통해 전달할 수 있는 format으로 변환한다
    * URL은 [ASCII 문자셋](https://www.w3schools.com/charsets/ref_html_ascii.asp) 만 사용할 수 있다. 
    * URL은 종종 ASCII set외의 문자를 포함하기 때문에, URL은 유효한 ASCII format으로 변환될 필요가 있다.
    * URL encoding은 unsafe ASCII 문자를 "%"와 16진수 숫자 두개로 변경한다.
    * URL은 공백을 포함할 수 없다. URL encoding은  보통 space를 plus(+) 나 %20 으로 변환한다
* request 혹은 axios를 사용하여 URL을 구성할 때 서비스 키가 없다면 다음과 같이 구성하게 된다
  ```js
  const option = {
    query : '뱀파이어',
    start : 1,
    display : 10,
    yearfrom : 2014,
    yearto : 2014
  }
  request.get({
    uri: 'https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/serach_json2.jsp',
    qs: option
    }, function(err, res, body) {
      ...
    })
  ```
  * 그런데 서비스 키가 있다면 단순히 option에 ServiceKey를 넣으면 될거라고 생각하게 된다.
    ```js
    const option = {
      ServiceKey : '나는서비스키',
      query : '뱀파이어',
      ...
    }
    ```
* 승인받은 키에 "..%3D.." 문자가 섞여 있는데 "..%253D.."로 변환되어 승인되지 않은 키라는 에러가 계속 나옴
  * 해당 키가 이미 URLencoding된 상태이지만 한 번 더 encoding되면서 나오는 문제임
  * [double encoding](https://owasp.org/www-community/Double_Encoding)이라는 공격기법에도 언급되는 내용? 
    * "%"를 인코딩하면 "%25"로 변환됨
* [해결책은 한번 더 인코딩되지 않도록 URI에 직접 포함시킴](https://stackoverflow.com/a/39152383/9457247)

#### request deprecated ... :sob:

* node.js 생태계에서 오래된 package인 [request가 deprecate 되었다, request github](https://github.com/request/request/issues/3142). 
  * 예제로 많이 보였는데...
  * [Alternative libraries to request, request github](https://github.com/request/request/issues/3143) 
    * 대체재로 axios가 있다.

#### config-js 사용하기

* open api를 사용하다보면 필연적으로 credentials를 사용하게 된다.
* 이런 정보들은 남에게 공개되면 안되는 정보들이므로 github에 올릴때 제외해야 한다.
* 제외하는 방법에 대한 글 : [Keeping secrets](https://www.ibm.com/cloud/blog/keeping-secrets-cloud-application-access-credentials-private-data?mhsrc=ibmsearch_a&mhq=keeping%20secrets)
  * 윗 글을 발췌번역한 국내 글 : [9.5 Node.js에서 비밀 설정 정보 관리](https://poiemaweb.com/nodejs-keeping-secrets)
* 나는 설정파일 사용하는 방법을 사용하기로 하고 [`config-js`](https://www.npmjs.com/package/config-js)를 찾아내었다.

##### CommonJS 방식과 ES Modues 방식의 조합

* 나는 OpenApiTest 프로젝트에서 module 방식을 사용하고 있다.
  * [Node.js 는 디폴트로 CommonJs를 지원하며 package.json 설정으로 ES Module을 Enable 한다.](https://nodejs.org/api/esm.html#esm_enabling)
* config-js는 CommonJS 방식으로의 사용법만 기술하고 있기에 현재 내환경에서 사용하려면 몇가지 수정이 필요하다.

##### main.js 에서 config-js 불러오기

* CommonJS 방식
  ```js
  var Config = require('config-js');
  var config = new Config('...');
  ```

* ES module 방식
  ```js
  import Config from 'config-js'
  let config = new Config('...')
  ```
  
* 이 부분의 실패
  * 처음에는 `new` 없이 `let config = Config('...')` 으로만 호출하여 다음과 같은 에러가 계속 났다.
    ```sh
    ~/node_module/config-js/index.js:56
    this.pathToDefaults = path.join(path.dirname(pathToConfig.FileIn)
                        ^
    TypeError: Cannot set property 'pathToDefaults' of undefined
    ```
  * 즉, `this`가 `undefined`인 상태에서 `this`의 propety인 `pathToDefaults`에 접근하려고 했다.
  * `this`가 `undefined`인 이유는 `Config`을 `new`로 생성하지 않았기 때문

###### debug.js 의 사용

* 위 섹션의 실패를 경험하면서 `config-js` 패키지 내부에서 사용한 `debug.js` 모듈의 출력을 보고 싶었다.
  * [npm debug](https://www.npmjs.com/package/debug)
  * [github debug.js](https://github.com/visionmedia/debug)
* `debug.js`의 github에 설명이 잘되어 있는데 ..
  * 내가 사용중인 `node.js` + `windows powershell` 환경에 관한 설정도 나와있다.
  * `package.json`의 `scripts` 옵션에 다음과 같이 추가한다
    ```json
    "scripts": {
      "main": "@powershell -Command $env:DEBUG='';node ./src/main.js"
      "debug": "@powershell -Command $env:DEBUG='*';node ./src/main.js"
    }
    ```
    * 위와 같이 설정하고 쉘에서 `npm run debug`하면 쉘에 디버그로그가 출력된다.
      * 웹에서 사용하면 브라우저 디버그 모드에서 컬러링된 출력을 지원한다고 한다
    * 위에서 `DEBUG='*'` 부분에 `*` 대신 원하는 로그를 지정할 수 있는듯 하다.
    * color를 지원하는 쉘에서 보면 debug로그가 이쁘게 나온다.
    * 해당세션에서 임시로 `DEBUG` 변수를 선언했기에 해당 세션이 죽기전까지 계속 DEBUG 활성화상태이다.
      * `npm run main`시에 디버그로그를 죽이고 싶다면 `main`을 위와 같이 바꾼다. 
    

##### 설정파일의 확장자 문제

* 이 부분에서 많이 헤맸는데 아래 링크를 잘 참조해보자
  * [Interoperability with CommonJS](https://nodejs.org/api/esm.html#esm_interoperability_with_commonjs)
* 이 부분의 실패 
  * `cfg_secret.js`로 `config file`을 만들었는데...
    * 파일 경로에는 문제가 없지만 `require`로 config file을 불러올 때 계속 다음 에러가 난다
      ```sh
      > npm run debug
      
      ...(debug.js 출력)
      config-js Could not load target config: "~/OpenApiTest/src/cfg_secret.js" +1ms
      ...
      ```
  * 문제가 되는 `config-js`의 코드 부분은 다음과 같다.
    ```js
    try{
      targetConfig = require(pathToConfigFile);
      debug('Required config: '+pathToConfigFile);
    } catch(err) {
      debug('Could not load target config: "'+pathToConfigFile+'"');
    }
    ```
  * 위 catch 블럭에 err 찍는 내용이 없어 추가해서 찍어보니 다음과 같았다.
    ```sh
    ...(debug.js 출력)
    config-js err: Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: ~/OpenApiTest/src/cfg_secret.js
    config-js require() of /OpenApiTest/src/cfg_secret.js from ~/OpenApiTest/node_modules/config-js/index.js is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines 
    config-js Instead rename cfg_secret.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from ~/OpenApiTest/package.json.
    config-js  +1ms
    ```
* 해결
  * 위 지시사항대로 `cfg_secret.js`를 `cfg_secret.cjs`로 수정하고, 관련코드를 수정하고 실행해보니 잘 되었다.
* 소감
  * 결과적으로 CommonJS와 ES Module은 호환은 가능하지만 신경을 써줘야한다.

{% include links.html %}
