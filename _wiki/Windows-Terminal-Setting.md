---
layout  : wiki
title   : Windows Terminal 설정하기 
summary : 
date    : 2020-11-06 16:43:24 +0900
updated : 2020-11-19 12:12:34 +0900
tag     : windows-terminal dotfile GUID  
toc     : true
public  : true
parent  : [[Windows-Category]] 
latex   : false
---
* TOC
{:toc}

# 설정 관련 참고 링크

* [Terminal Splash](https://terminalsplash.com/) - 컬러스킴 관련 설정모음
* [Powerlevel 10k](https://github.com/romkatv/powerlevel10k) - WSL 창에서 zsh 설치한 이후 사용하는 리눅스 테마

# GUID는 어떻게 설정해야 하나?

* 잘 설명된 글 : [Windows Terminal: Generating GUIDs For Your Profiles](https://traviscolbert.net/blog/windows-terminal-generating-guids-for-your-profiles/)
* GUID는 단지 구별을 위한것 (There's nothing **magical** about them.)
  * [Windows Registry에서 지원하는 구분자 포맷을 맞추면 된다.](https://docs.microsoft.com/ko-kr/windows/terminal/customize-settings/profile-settings#unique-identifier)
  * 임의로 만들어도 되지만...
    * Powershell 도구를 사용하면 더 쉽게 만들수 있다.
      ```sh
      > [guid]::NewGuid()
      Guid
      ----
      16f7d5ae-b0b1-466c-8a09-de6890669e30
      ```
    * 레지스트리 아이템을 구별하는 용도로 쓰는 것이라면 중복되지 않게 설정하는 것이 필요한데 임의로 만드는 것보단 위의 도구를 사용하는 것이 좋을듯하다. 
* 임의로 만드는 것이라면 빼도 되지 않을까? 어디에 쓸까?
  * Windwos Terminal 실행시 제일 처음에 뜨는 default profile을 GUID로 선택한다.

## 같은 GUID에 설정만 다르게 하고 싶으면..

* 첫번째 설정에만 guid 옵션을 설정하고 두번째 설정은 guid를 빼면 된다
* 관련 링크
  * [Add support for inheriting and overriding another profile's settings](https://github.com/microsoft/terminal/issues/3818) : 원 질문자에 MS측 Windows-Terminal 담당자인 DHowett-MSFT가 답변을 단 내용
    * 질문 내용: 같은 GUID에 대해 설정은 다르게 해서 등록하고 싶은데 두번째 설정은 첫번째 설정을 상속하도록 해서 달라지는 설정만 setting 하도록 할 수 있을까? 
  * [해당내용 공식 문서 링크가 있던 자리..지금은 없음](https://github.com/microsoft/terminal/blob/main/doc/cascadia/SettingsSchema.md)
  * [DHowett이 다시 링크를 건 곳인데.. 어디있는지..](https://docs.microsoft.com/ko-kr/windows/terminal/customize-settings/global-settings)

# WT 설정파일을 dotfile에 포함 가능한가?

## 관련 링크 
* [Feature Request: Option to change location of profiles.json](https://github.com/microsoft/terminal/issues/1455)
* [dotfile 이란 ?]( /wiki/dotfiles/)

## `settings.json` 경로에 `8wekyb3d8bbwe`는 뭔가? 

* settings.json의 경로는 현재 이렇게 되어 있음 : `%HOME%/AppData/Local/Packages/Microsoft.WindowsTerminal_8wekyb3d8bbwe/LocalState/settings.json`
* 그게 변할수 있는 건가? dotfiles repo에서 Symbolic 링크를 걸 경우 미래에 안될수 있나?
* [DHowett-MSFT 답변](https://github.com/microsoft/terminal/issues/1455#issuecomment-506521700) : `8weky...`는 MS Store에서 Microsoft가 작성한 제품에 붙는 ID 같은것임. 따라서 변하지 않을것이고 Symbolic link 걸어도 안전함.
  * 진짜 그런가 확인하는 법 : 실제로 `%HOME%/AppData/Local/Packages/`밑에 `Mircrosft.~`로 시작하는 제품은 모두 `8wekyb3d~`로 끝남.

## `settings.json`을 링크 걸면 편집해도 바로 반영 안된다?

* symlink를 사용하지 않고 일반 파일로 설정된 settings.json은 WT를 다시 시작하지 않아도 편집하면 즉시 변경사항이 반영된다.
* 하지만 symlink를 걸어서 사용할 경우 편집내용이 즉시 반영되지 않는다는 말이 있다.
* 해결책 : `settings.json`에 symlink를 걸지말고 바로 위의 디렉토리인 `Localstate`에 링크를 걸면 일반 파일과 동일하게 즉시 반영된다고 함. [답변 링크](https://github.com/microsoft/terminal/issues/1455#issuecomment-691470907)
