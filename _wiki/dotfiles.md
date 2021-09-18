---
name: dotfiles 정리  
layout: post
permalink: dotfiles.html
sidebar: other_sidebar
collection: wiki
summary: "powershell 환경설정"
tags: [git]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 4:20 PM
toc: true
public: true
parent: [[GoogleAppsScript-Category]]  
latex: false
---
* TOC
{:toc}

# 1. 발단

* 7월초에 local에서 작업하고 있던 dotfiles 프로젝트를 [얼마전 날려먹었다.](/wiki/Windows-Sysinternals/)
* git으로 저장했어야 했는데..
* 일단 복구하면서 정리하기로 했다
* 참고 링크 : [작업하면서 정리했던 내용: 2020년 28주차 기록](/blog/2020/07/06/week-28th#dotfiles)

# 2. 전개

## dotfiles 목적

* 새로운 기기에서 작업해야할 경우에 개발환경을 즉시 구축할 필요가 있다. (새로운 PC를 산다거나..)
* 개발환경의 변화 이력을 살펴볼 필요가 있다.
* 날려먹을 염려없이 어딘가에 잘 저장해 놓고 필요할 때마다 불러쓸 수 있으면 좋겠다.
* 위에 적은 모든 필요성을 원격 git repository로 해결할 수 있다.
* 개발에 필요한 설정 파일들 ( 계속 늘려나가자..) 
  * vim 관련 : `.vimrc` 와 `.vim 폴더` 및 `서브 폴더` + `.NERDTreeBookmarks`
  * Git 설정관련 : `.gitconfig`

## dotfiles 프로젝트 에서 해야할 작업

### 작업 내용

* 프로젝트에 등록된 설정파일을 필요한 위치로 symlink를 걸어놓는다.
* symlink를 걸면 파일본체는 repository에 있지만 설정파일이 필요한 home 위치에도 존재하는 것처럼 사용할 수 있다.
* 혹시 업데이트가 된다면 git pull로 dotfiles 로컬위치에 업데이트하면 된다.

### 추가 : Symlink 개념을 잡자

* 참고 링크 : [Create Symbolic Link in Windows 10 with PowerShell](https://winaero.com/create-symbolic-link-windows-10-powershell/)
* Symlink와 비슷한 개념으로 hardlink, directory junction 이 있다. 
* [directory junction과 directory symlink에 대한 심도있는 논의는 이 질문과 댓글문답을 참조](https://superuser.com/a/343079/1150566)
  * 위 링크의 질문 댓글로 *Pacerier(OP질문자)*와 *Matthew Steeples*가 문답한 내용도 읽어보자 
* [위 질문에서 두 번째로 좋아요가 많은 답변](https://superuser.com/a/1291446/1150566)
* 위 작업에서 Symlink가 필요한 이유 : 
  * file과 directory 모두 다룰수 있는건 symlink뿐, 
  * junction이 리모트 접속시 유리한 점이 많으나 리모트 접속은 고려사항이 아님.
  * hardlink를 못쓰는 이유
    * 디렉토리는 안됨. 
    * target file이 samve volume에 존재해야함. 
    * 링크 지울 때 target이 같이 지워질 수도 있는데 이 작업에선 위험.

## PowerShell 스크립트 실행할 수 있는 환경 만들기

* 참고할 링크 :  [PowerShell Script의 실행정책](https://docs.microsoft.com/ko-kr/powershell/scripting/learn/ps101/01-getting-started?view=powershell-7#execution-policy)
* PoserShell 스크립트를 실행하려면 두가지 조건이 필요
  1. 관리자 권한을 가진 PowerShell 터미널 ( 영어로는 [`elevated PowerShell`](https://winaero.com/all-ways-to-open-powershell-in-windows-10/)이라고 부르는 듯 하다.)
  1. ExecutionPolicy 설정
    * 우선 `Get-ExecutionPolicy` 명령으로 설정을 확인한다. `RemoteSigned`라면 이미 설정이 되어있는 것임.
    ```sh
    > Get-ExecutionPolicy
    Remotesigned
    ```
    * `RemoteSigned`설정이 아니라면 다음 명령으로 변경한다.
    ```sh
    > Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
    ```
* 그 다음 작성할 내용을 위한 placeholder

## windows10에서의 Symlink 방법

* 위 링크에서 방법 인용
  1. 관리자 권한 PowerShell을 연다
  2. 아래 명령을 입력한다.
  ```sh
  > New-Item -ItemTypes SymbolicLink -Path "Link" -Target "Target"
  ```
  3. *Link* 부분에는 새로운 링크가 위치할 경로로 입력한다. ( 파일명과 확장자도 포함한다)
  4. *Target* 부분에는 새로운 링크가 참조할 경로로 입력한다. ( 상대경로, 절대경로 모두 가능)
* 플레이스홀더

