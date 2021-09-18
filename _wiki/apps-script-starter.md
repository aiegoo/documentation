---
name: 로컬 구글 Apps Script 개발
layout: post
permalink: apps-script-starter.html
sidebar: other_sidebar
collection: wiki
summary: "튜토리얼 따라하기"
tags: [web, regex, publishing]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 5:06 PM
toc: true
public: true
parent: [[GoogleAppsScript-Category]]
latex: false
---
* TOC
{:toc}

# 1. 발단

* 최근에 google-apps-script 프로젝트를 한 개 끝냈는데 ...
  * [pyscaffold](https://github.com/pyscaffold/pyscaffold) 처럼 초기에 환경을 설정해주는 툴이 있을것 같아 찾아봤다.
* 찾았는데 .. [Google Apps Script Development](https://github.com/labnol/apps-script-starter) 인 것 갈다.
  * 작성자는 Amit Agarwal이라는 인도사람이며 [인도 최초의 전업 블로거](https://www.labnol.org/about)라고 한다.
  * 블로그 내용에 Google Apps Script 관련내용이 많고 직접 개발한 add-on도 많아 왠지 믿음이 간다.
  * [Google Apps Script for Developers](https://www.labnol.org/internet/google-apps-script-developers/32305/) 는 블로그에 관련글을 쓴내용이며 직접 설명한 유튜브 링크도 포함하고 있다.
* 한번 유튜브 비디오를 따라해보면서 익혀보기로 했다.

# 2. 전개 (Amit Agarwal)

## 환경 설치

* 일단 첨에 해당 git을 클론해온다. 비디오에서 하라는 대로 이름을 `mailman`으로 해본다.
* `git clone`을 하면 `.git` 폴더가 생기는데, 일단 지운다
  * 신규 프로젝트를 하려고 클론을 하는거기 때문에, 필요없는 history를 지우기 위함이다.
  * 현재 폴더가 `mailman`인 상황에서 `rm -rf .git`
* 아무것도 없는 상태로 시작하기 위해, 샘플 프로그램이 있는 `src` 폴더도 제거한다. 
  * 현재 폴더가 `mailman`인 상황에서 `rm -rf src`
* node가 깔려있는 상태에서 시작하는걸로 가정한다.
  * 노드 버전 확인 명령 : `node -v`
* 다음에 개발하는데 필요한 모든 dependency를 설치한다
  * 명령 : `npm install`
  * 참조링크 [npm-install](https://docs.npmjs.com/cli/install)
    * 참조하는 파일 - 해당 git에 미리 등록되어 있다. 
      * [package.json](https://docs.npmjs.com/files/package.json) : depencies를 선언하는 파일
      * [package-lock.json](https://docs.npmjs.com/files/package-lock.json) : npm을 사용해서 `node_modules` 트리나 `package.json` 파일을 수정하면 자동으로 생성. 파일이 생성되는 시점의 의존성 트리에 대한 정확한 정보를 **고정(lock)**함 
      * [package-lock.json 파일을 저장소에 같이 commit 해야하는 이유](https://hyunjun19.github.io/2018/03/23/package-lock-why-need/)
      * 설치해보면 다음과 같은데..
       
      ```sh
      $ npm install
      npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\fsevents):
      npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
      added 1048 packages from 451 contributors and audited 1119 packages in 166.52s
      
      43 packages are looking for funding
        run `npm fund` for details
        
      found 6 low severity vulnerabilities
        run `npm audit fix` to fix them, or `npm audit` for details
      ```
      * [fsevents](https://www.npmjs.com/package/fsevents) : MacOS의 FSEvents 관련 라이브러리
        * "os":"darwin"을 원하는데.. 현재는 "os":"win32"라고 나오고.. 현재 플랫폼이 지원되지 않는다고 나온다.
        * [darwin](https://ko.wikipedia.org/wiki/%EB%8B%A4%EC%9C%88_(%EC%9A%B4%EC%98%81_%EC%B2%B4%EC%A0%9C)#.EC.B6.9C.EC.8B.9C)은 MacOS의 기본 OS이다. 
        * Windows 환경에서 필요없는 라이브러리이므로 무시한다 
      * 취약점(vulnerabilities) 관련
        * 참고 : [npm에 새로 추가된 audit 기능](https://blog.outsider.ne.kr/1375)

## 코딩 시작전

* clasp login후 clasp create로 프로젝트 만들기
  * 명령 : `clasp create --type sheets --title "MailMan" --rootDir ./dist`
  * 시트와 관련 script를 한꺼번에 만드는 명령
* Cloud script editor 에서 안된다고 하는 명령이 일부 되는듯함.
* root에 `src` 디렉토리를 새로 만듬 ( subfoloder로 `html`도 만듬)
* 코딩 시작전에 ./webpack.config.js 편집
  ```js
  cons isProduction = process.env.NODE_ENV === 'production';
  // 위값을 'none' 으로 변경 , none 이 development mdoe라고 함.
  // production mode로 되어 있으면 코드가 최적화 되지만 읽기불편하고 debug하기가 어려움
  ```
  * [웹팩의 기본 개념](http://jeonghwan-kim.github.io/js/2017/05/15/webpack.html)
* 다음으로 appsscript.json을 편집
  * appsscript.json 편집시에 권한을 조정했는데 자세한 사항은 [google developer playground](https://developers.google.com/oauthplayground/)를 참조하면 모든 권한이 나옴

## 코딩

* 따라 하는 html path 설정관련해서 에러가 남
* webpack.config.js에서 다음부분을 수정함
  ```js
  new CopyWebpackPlugin({
  patterns: [
    {
      from: `${src}/html/index.html`, // 원래는 `${src}/**/*.html`로 되어있었음
      flatten: true,
      to: destination,
    }
  ```
* 이후에는 쭉 따라하면 별 문제없이 잘된다

## 소감

* 체계적이긴 하나, 좀 예전에 작성된 느낌
* webpack으로 빌드하는데 너무 오래 걸림 ( 느리면 50초 이상, 빠르면 20초 이상)
* 일단 다른 방법을 좀 찾아보기로 함
* [특수문자 복사하는 사이트](https://www.copypastecharacter.com/) 

# 3. 발단 2

* 내가 한 번 만들어 보기로 함
* 참조한 자료
  * 개인 유튜브  [CLASP Tutorial](https://youtu.be/4Qlt3p6N0es) 
  * [clasp github중 TypeScript doc](https://github.com/google/clasp/blob/master/docs/typescript.md)
  * Google Apps Script - Guide
    * [Command Line Interface using clasp](https://developers.google.com/apps-script/guides/clasp)
    * [Using TypeScript](https://developers.google.com/apps-script/guides/typescript)
     
# 4. 전개 2

## 환경 설정

### 기본 설치

* VS Code 및 node.js 설치
* npm으로 clasp 설치및 Google Apps Script API `On`
  * 유튜브에서는  이 내용이 여기까지임 [11:31/25:55](https://youtu.be/4Qlt3p6N0es?t=209)

### 사전 설정

1. 프로젝트를 저장할 폴더 생성 
  *  이름을 잘 고민할 것
   
1. git init 실행
  *  일단 이거 넣어야 할지 고민할 것
    
1. npm init 실행
  * node package 배포용 환경을 만들기 위한것이지만 여기선 `package.json`을 만들기 위해 실행
  ```sh
  #아무것도 묻지 않고 실행완료
  npm init -y
  ```

1. Apps Script 용 Type definition 설치 
  ```sh
  npm i -D @types/google-apps-script
  ```
  
1. 프로젝트 루트에 `tsconfig.json` 파일을 다음과 같이 작성하여 TypeScript feature를 활성화 한다.
  * 만들기 전에 바로 윗 단계인 `Type definition`을 설치하면 tsconfig.json 편집시 `auto completion`이 지원된다. 
  * `.clasp.json` 파일과 같은 곳에 위치시킨다.
  * `"compilerOptions"` 섹션만 의미 있고 다른 설정은 무시된다.
  * Apps Script Project가 `V8 Engine`을 사용하도록 설정되었다면, "target": "ES2019"로 설정한다. (default: "ES3")
  ```js
  {
      "comilerOptions": {
          "lib": ["esnext"],
          "target": "ES2019",
          "experimentalDecorators": true
      }
  }
  ```

## TypeScript 프로젝트 만들기 

1. script.google.com 사이트에 접속하기 전에 `clasp create` 방식으로 설정

```sh
prompt$ clasp create --title "Name of Project" --rootDir src 
```
  
* 위와 같이 실행시 `? Create which script?` 로 물어봄. 여기서 script 종류를 선택해도 되고...
* 아래와 같이 처음부터 종류를 선택하고 들어갈수 도 있음.

```sh
  prompt$ clasp create --type sheets --title "sheet Project" --rootDir src
```

* 이 방식 말고  script.google.com 사이트에 미리 프로젝트 만들어놓고 clone 하는 방식이 있는데 내 취향이 아님.

```sh
prompt$ clasp clone "<script_Id>" --rootDir src
```

* 프로젝트 폴더밑에 `src` 디렉토리를 만들면 나중에 만들게 될 배포및 테스트 폴더와 구분 되어 좋음. 

## 모듈, exports 와 imports
 
  * Google Apps Script는 ES 모듈은 현재 지원하지 않음. 일반적인 `export`/`import` 패턴은 실패함.
  * 실패하는 패턴은 다음과 같다. 
    
  ```js
  // module.ts
  // 'fool' is added to the 'exports' object in the global namespace
  export const foo = 'Hello form Module';
  ```
  ```js
  // main.ts
  import { foo } from './module'; // this statement is ignored
  
  // the variable 'fool` does not exist in the global namespace
  cons bar = foo;
  ```
###  `exports` 선언 해결책

  * 이 해결책은 일반적인 모듈이 지원하는 code isolation조차 지원하지 않으므로, 찾기 어려운 버그를 낼수 있음을 주의
 
  ```js
  declare const exports: typeof import('./module');
  
  exports.foo;  // address "imported" content as it will be visible when transpiled
  ```
 
 ###  `namespace` 실행문 해결책
 
 * 이전에 "internal module"로 알려졌던, TypeScript의 "namespaces"를 이용하며, 적절한 code isolation의 목적을 이룬다
 * Namespace definition은 중첩될수 있으며, 여러 파일에서 사용될수 있고, `import`/`require` 문장이 필요하지 않다.

 ```js
 // module.ts
 namespace Module {
    export function foo() {}
    function bar() {}  // this function can only be addressed from within the 'Module' namespace
 }
 ```
 ```js
 // anyFiles.ts
 Module.foo();   // address a namespace's exported content directly
 
 const nameIWantForMyImports = Module.foo;   // to simulate 'import' with renaming
 nameIWantForMyImports();
 ```
 * `namespace`의 좀 더 자세한 예제는 [ts-gas-project-starter](https://github.com/PopGoesTheWza/ts-gas-project-starter)에 나와있다.

### third party build-chain 해결책

* webpack, rollup.js, gulp 등등의 써드 파티 도구를 이용한 방법
* 다음 단계와 같이 수행한다

1. 코드를 파싱해서 사용된 모듈을 확인한다. ( export 와 import 사용)
2. (선택적) 사용하지 않는 코드를 제거하기 위해 나무 흔들기?를 한다.
3. 결과를 한개의 javascript 패키지로 모은다.



# 5. 소감 2

* 너무 간단.. 지워버릴까?

# 6. 설정

## clasp github에서 건진 VSCode 설정

* [clasp github/docs/settings.md](https://github.com/google/clasp/blob/master/docs/settings.md) 에서 건진 VSCode 설정
* 일단 써진대로 `Code > Prefereces > Settings` 로 들어간다
* `User > Extensions` 메뉴에 `JSON`을 찾아 `Schemas`에 `Edit in settings.json`을 찾는다.
* 들어 가서 추천하는 명령은 선택하면 일단 넣을수 있는 템플릿이 완성된다. 


