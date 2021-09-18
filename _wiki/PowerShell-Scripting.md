---
name: Powershell 스크립팅 
layout: post
permalink: PowerShell-Scripting.html
sidebar: other_sidebar
collection: wiki
summary: " ... "
tags: [anaconda]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 2:32 PM
toc: true
public: true
parent: [[Python-Category]] 
latex: false
---
* TOC
{:toc}

# Trouble Shooting

## 1. PowerShell 스크립트에서 작성한 Literal 한글이 깨짐 (2020-11-02)

### 문제 상황

* VS Code에서 .ps1으로 작성한 스크립트에서 Write-Host 명령으로 한글 출력
  ```sh
  Write-Host " $LinkPath 파일이 이미 존재함."
  ```
* Windows Terminal에서 .ps1 파일 실행시키니 아래처럼 깨짐
  ```sh
  C:/Users/hongg/.gitconfig ?뚯씪???대? 議댁옱?? 
  ```
* 이 상황에서 VS Code 에서 작성한 .ps1 파일의 파일 encoding은 `UTF-8`
* `[System.Console]::OutputEncoding` 명령으로 확인한 PowerShell의 출력 encoding은 cp949 였다.
  ```sh
  ❯ [System.Console]::OutputEncoding


  BodyName          : ks_c_5601-1987
  EncodingName      : 한국어
  HeaderName        : ks_c_5601-1987
  WebName           : ks_c_5601-1987
  WindowsCodePage   : 949
  IsBrowserDisplay  : True
  IsBrowserSave     : True
  IsMailNewsDisplay : True
  IsMailNewsSave    : True
  IsSingleByte      : False
  EncoderFallback   : System.Text.InternalEncoderBestFitFallback
  DecoderFallback   : System.Text.InternalDecoderBestFitFallback
  IsReadOnly        : True
  CodePage          : 949
  ```
* 처음엔 단순히 UTF-8로 encoding 된 스트링을 cp949로 출력하여 발생한 문제로 생각했다.
* 결론적으로 맞긴 하지만 .. 여기에는 더 복잡한 내막이 있었다...
  
### 1차 구글링 - 실패

* 참고1 : [PowerShell에서 한글 깨짐 문제 해결 - 냉정과 열정 사이](https://psychoria.tistory.com/737)
* 참고2 : [파워쉘 이용할때 한글깨짐현상 해결방법](https://holjjack.tistory.com/144)
* 위 링크를 참고하여 `code $PROFILE` 명령으로 `Microsoft.PowerShell_profile.ps1` 파일에 다음을 추가했다.
  ```sh
  $env:LC_ALL='C.UTF-8'
  [System.Console]::InputEncoding = [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8
  ```
* 한글 깨짐은 해결 되지 않고 오히려 `ls`(별칭) 명령시 리스팅된 목록간에 한줄씩 더 벌어지는 문제가 발생했다.
  ![사이벌어짐 문제]( /wiki-img/PowerShell-Scripting/PowerShell-Scripting-02.png )
  
### 2차 구글링 - 성공

* 결정적인 링크 : [VS Code 및 PowerShell에서 파일 인코딩 이해 > 맞는 인코딩 선택 - MS 공식 문서](https://docs.microsoft.com/ko-kr/powershell/scripting/dev-cross-plat/vscode/understanding-file-encoding?view=powershell-7#choosing-the-right-encoding)
* 위 링크에 이런 말이 있다
  > 
  > * 주로 Window 애플리케이션 및 Windows PowerShell로 작업하는 경우 BOM이 포함된 UTF-8 또는 UTF-16과 같은 인코딩을 사용하는 것이 좋습니다.
  > * Linux 관련 컨텍스트에서 주로 작업하는 경우 BOM이 포함되지 않은 UTF-8을 사용하는 것이 좋습니다.
  
* VS Code에서 작성한 .ps1 파일의 저장 형식은 `UTF-8`이었다. (맨 아래 상태줄 오른쪽에 보면 나옴)
  * 맨 아래 상태줄에서 `UTF-8`을 클릭하면, 선택항목 중에 `Save with Encoding`이 나옴
  * 해당 항목 클릭하면, 여러가지 Encoding이 나오는데...
  * 그 중 `UTF-8 with BOM`을 선택하면 바로 해당 인코딩으로 저장됨.
* 이걸 `UTF-8 with BOM`으로 변경하고 실행해 봤다.
* 결과는 다음과 같다
  ![확인결과]( /wiki-img/PowerShell-Scripting/PowerShell-Scripting-01.png )

### 결과 추론 ( 확인된 내용은 아님)

* 경고!! 일단 아래 내용은 그냥 추론으로 확인된 내용이 아님.
 
* .ps1 파일은 주로 Windows에서 사용하므로 BOM이 있는 UTF-8로 저장하는게 좋음.
* PowerShell에서 BOM이 있는 UTF-8 문서를 자동 인식하여 결과를 UTF-8 디코딩하여 보여줌.
* .ps1 파일의 encoding이 기본 UTF-8 이라서 인식하지 못하자...
  * Powershell이 기본 출력 encoding으로 그냥 디코딩해버렸고..
  * 결국 한글이 깨지게 됨.
* UTF-8 with BOM으로인해 PowerShell이 파일 디코딩 형식을 자동으로 이해하자 제대로 한글을 출력해냄.

### 유니코드 BOM 이란?

* BOM은 텍스트에서 사용하는 인코딩을 디코더에 알려주기 위해 텍스트의 시작 부분에 표시됨
* 리눅스에서는 BOM이 널리 사용되지 않는데 기본적으로 UTF-8이 텍스트 인코딩의 표준처럼 여겨지기 때문임.
* 또한 BOM은 강제사항이 아님 !!
* 즉, 리눅스에서 BOM이 있을 경우 처리되지 못하는 경우가 발생할 수 있음. 
* 리눅스에서도 대부분은 BOM을 처리할 수 있다고 함.

