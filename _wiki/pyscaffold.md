---
name: PyScaffold로 파이썬 프로젝트 시작하기 
layout: post
permalink: pyscaffold.html
sidebar: other_sidebar
collection: wiki
summary: " ... "
tags: [anaconda]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 2:17 PM
toc: true
public: true
parent: [[Python-Category]] `
latex: false
---
* TOC
{:toc}

# 1. 개요

* BillMaker를 PyScaffold로 시작했는데.. 정리해놓은 문서가 없음
* 처음부터 다시 만들며 정리해보기로 함.


# 2. 전개

## 기본 환경

### Windows 환경

* Windows Terminal로 Anaconda 환경을 꾸밈
  ```json
  {
      // 참고 : https://dev.to/voodu/windows-terminal-conda-d3e
      "name": "Anaconda with Powershell",
      "suppressApplicationTitle": true,
      "startingDirectory": "D:/App/Anaconda3/",
      "commandline": "powershell.exe -ExecutionPolicy ByPass -NoExit -Command \"& 'D:/App/Anaconda3/shell/condabin/conda-hook.ps1' ; conda activate 'D:/App/Anaconda3'; conda env list \"",
      "hidden": false,
      "icon": "%OneDrive%/사진/WindowsTerminalImages/anaconda.png",
      "backgroundImage": "%OneDrive%/사진/WindowsTerminalImages/conda_cheat_sheet.png",
      "backgroundImageStretchMode": "none",
      "backgroundImageAlignment": "topRight" 
  },
  ```
  * 참고 : [Windows Terminal ❤ conda](https://dev.to/voodu/windows-terminal-conda-d3e)   

* 환경 설정
  ```sh
  > conda create --name BillMaker2 python=3.7
  > conda activate BillMaker2
  > conda install -c conda-forge pyscaffold
  > putup billmaker2
  > python setup.py develop
  ```
  * 참고 : [pyscaffold github](https://github.com/pyscaffold/pyscaffold)

### 테스트로 Console application 만들어 보기

* 위에서 기본적인 설정을 완료했다면..
  * Pyscaffold에서 기본제공하는 fibonacci console application을 만들어볼 수 있다.
* project root > src > billmaekr2 > skeleton.py 로 가서 제일 위의 주석을 읽어본다.
  * project root > setup.cfg 수정해보라고 나온다.
    * setup.cfg > [options.entry_points] 에서 다음 주석처리된 부분 활성화하도록 수정
      ```cfg
      console_scripts =
          fibonacci = billmaker2.skeleton:run
      ```

1. 프로젝트 root위치 cmd에서 `python setup.py install`을 실행
  ```sh
  > python setup.py install
  ```
2. cmd에서 아래와 같이 실행하면 결과가 나옴
  ```sh
  > fibonacci 3
  The 3-th Fibonacci number is 2
  ```
3. ../Anaconda3/envs/<Env_Name>/Scripts 에 "fibonacci.exe"가 만들어진 것을 확인한다.
4. 완료 !!

### 
