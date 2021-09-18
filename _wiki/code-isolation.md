---
name: typescript로 개발시 파일 순서 문제
layout: post
permalink: code-isolation.html
sidebar: other_sidebar
collection: wiki
summary: "typescript hoisting filepushorder"
tags: [web, publishing]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 4:34 PM
toc: true
public: true
parent: [[GoogleAppsScript-Category]] 
latex: false
---
* TOC
{:toc}

# 1. 발단

* clasp_webapp_garibong_house 작업중에 문제가 발생했다
* 분리된 파일에서 다른파일에 정의된 함수를 인식하지 못하는데 ..
* 그게 잘될때도 있고 안될 때도 있다는 것이다.

## 1.1 환경 설명
* 환경을 간단히 설명하자면...
  * main.ts, utils.ts, sheets.ts로 코드를 분리하고 clasp으로 로컬에서 작업중이다.

### 잘되었을 때 

* sheets.ts에서 utils.ts에 정의된 함수를 참조하지만 인스턴스화 하지 않는다. 
* main.ts에서 utils.ts와 sheets.ts에서 정의된 클래스를 invoking한다 
    
### 안될 때

* sheets.ts에서 utils.ts에 정의된 함수를 참조하며 global 변수에 인스턴스화 했다
* utils.ts에 정의된 함수를 찾지 못함


# 2. 전개

* 일단 제일 비슷해 보이는 사례를 stack overflow에서 찾았다
* [TypeScript classes order in Google AppScript Project](https://stackoverflow.com/q/59802430/9457247)
* 이 문제의 답변에서 말하는 원인은 여러 파일로 나뉘어진 트랜스파일된 .gs 파일을 하나의 파일로 만드는데
* 호이스팅이라는 방식을 쓰며 하나의파일로 만드는데 순서가 잘못되면 인식하지 못할수도 있다는 것이다.
* 호이스팅이라는 것은 [이런곳](https://m.blog.naver.com/PostView.nhn?blogId=hoistman71&logNo=220833773654&proxyReferer=https:%2F%2Fwww.google.com%2F)에서 가져온 용어로 화학적 결합이 아닌 물리적으로 들어서 옮기는 식으로 나열하여 결합하는 방식을 의미하는듯 하다
* 내 경우에도 확실히 utils.ts의 함수를 가져다 쓰는데 알파벳순서로 sheets.ts 뒤에 utils.ts가 있으므로 문제가 있을수도 있다.

# 2.1 제시된 해결책

1. 잠재적인 호이스팅 이슈가 있는 코드들은 하나로 묶는다.
1. `.clasp.json`에 `filepushorder`옵션을 사용한다.( setup과 maintain이 어렵지 않단다)
  * 이 해결책의 실제 사용예는 [sample repository](https://github.com/PopGoesTheWza/clasp-filePushOrder)에서 볼 수 있다. 
1. 답변자가 만든 또 다른 [template 리포지토리](https://github.com/PopGoesTheWza/ts-gas-project-starter)에서 세밀한 조정을 할 수 있다. 
