---
name: Visual Studio Code 설정하기  
layout: post
permalink: wiki-favicon.html
sidebar: other_sidebar
collection: wiki
summary: "vscode settings for theme and vim"
tags: [wiki, vim, troubleshooting]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 3:53 AM
toc: true
public: true
parent: [[Cross-Category]]   
latex: false
---
* TOC
{:toc}

## StackOverflow 관련 태그 현황 (2020-12-02)

* [visual-studio-code, 2020-12-02 기준 29,246개](https://stackoverflow.com/questions/tagged/visual-studio-code)
* [vscode-settings, 2020-12-01 기준 3173개](https://stackoverflow.com/questions/tagged/vscode-settings)

## 특정 Color Theme 으로 설정후 코멘트 컬러만 바꾸고 싶다 (2020-12-02)

* VS Code `Extensions` 에서 `Material Theme` 설치후 ..
  * `Commnunity Material Theme` 으로 선택했는데, 대체로 만족 했지만..
    * 여기서 잠깐!! Code > File > Preferences > Color Theme 을 선택하면 Color Theme 선택창이 나오고 화살표 up/down 입력시 적용된 Preview를 볼 수 있다
    * .. 주석 컬러가 너무 어두워 그것만 바꾸고 싶다.
  * StackOverflow 링크 : [How do I change color of comments in visual studio code? 답변 참조](https://stackoverflow.com/a/46649255/9457247)
    ```json
    "editor.tokenColorCustomizations": {
      "[Community Material Theme]": {
        "comments": "#959dce"
      }
    }
    ```
  * settings.json에 위와 같이 추가하면 주석 컬러만 바꿀 수 있다
  * 컬러색상은 [CSS Colors, w3schools.com](https://www.w3schools.com/cssref/css_colors.asp) 에서 컬러확인하여 6자리 숫자를 넣으면된다.

## 링크 모음

* [VS Code Vim 기능 지원 Roadmap](https://github.com/VSCodeVim/Vim/blob/master/ROADMAP.md)
* [VS Code 단축키 모음](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
