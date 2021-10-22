---
name: 윈도우즈 터미널 설정하기  
layout: post
permalink: Windows-Terminal_Setting.html
sidebar: other_sidebar
collection: wiki
summary: "요즘 핫한 터미널"
tags: [window,teriminus, tmuxinator]
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-17 9:27 PM
toc: true
public: true
parent: [[Cross-Category]]  
latex: false
---
* TOC
{:toc}

## 요즘 핫한(?) 터미널 관리자

기존에 [ConEmu](https://conemu.github.io/) 라는 터미널 관리자를 사용하다가, 최근에 발견한 [Window termianl](https://www.microsoft.com/ko-kr/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab)을 써보니 나쁘지 않고 사용자층이 훨씬 두터워 얼마전 거의 갈아탄 상태입니다.
기존 ConEmu도 딱히 불만인 점은 없었지만, Windows Terminal(이하 wt)이 좀더 때깔이 좋아 보이고.. 장래성이 있어보인다고 할까... 간단히 비교해 보자면 ...

|               | ConEmu                                                                                                                        | Windows-Terminal                                                              |
| 오픈소스 여부 | yes                                                                                                                           | yes                                                                           |
| repository    | [Maximus5/ConEmu](https://github.com/Maximus5/ConEmu/issues)                                                                  | [microsoft/terminal](https://github.com/microsoft/terminal)                   |
| 첫번째 Commit | 2013년 12월, [개발은 2008년 부터 시작한듯](https://github.com/Maximus5/ConEmu/blob/master/Release/ConEmu/WhatsNew-ConEmu.txt) | 2017년 8월, (정식발표 2019년 5월)                                             |
| github star   | 6.8k (2020-07-17 기준)                                                                                                        | 65.8k (2020-07-17 기준)                                                       |
| 문서화        | [있으나 빈약함](https://conemu.github.io/)                                                                                    | [마이크로소프트 공식문서](https://docs.microsoft.com/ko-kr/windows/terminal/) |
|               |                                                                                                                               |                                                                               |

특히 위에서 지적한 `ConEmu의 문서화 부분`은 매우 심각한데 중요한 설정중 하나인 [Task 설정](https://conemu.github.io/en/SettingsTasks.html)을 보면 거의 항목 제목만 있고 설명이 없습니다...
이 부분은 ConEmu 개발이 거의 러시아 개발자 한명의 힘으로 유지 되고 있기 때문에 어쩔수 없는 부분으로 보이고 , 개발자 본인이 [문서화에 투입할 시간이 부족하고, 영어가 유창하지 못하여](https://conemu.github.io/en/RoadMap.html) 문서화에 어려움이 있다고 토로하고 있습니다.. 

* 그에 비해 Micro$oft의 남아도는 man-hour는 .... 이런 것도 만듭니다. ( 신상 휴대폰인줄..) 
<iframe width="560" height="315" src="https://www.youtube.com/embed/8gw0rXPMMPE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

## wt 추천 설정

본론인 wt 추천 설정으로 들어갑니다.

### 설정관련 사전 지식

* settings.json 열기 : [wt 공식 문서, 설치및 설정](https://docs.microsoft.com/ko-kr/windows/terminal/get-started#configuration) 에서 설명된 것처럼 `드롭다운 메뉴`에서 `설정`을 선택하면 진입합니다.
* 이때 .json 파일에 `연결 프로그램`이 설정되어 있지 않다면 기본 윈도우 텍스트 편집기로 열릴텐데, `VS Code`로 .json 파일의 기본 편집프로그램을 연결해 주는게 좋습니다.
* `VS Code`에서 편집할 때의 장점은.. 필수 member가 누락되었다면 알려주기도 합니다. (린팅기능?). 어차피 같은 회사이므로 점점 지원기능이 늘어날 가능성이 높습니다.
* settings.json에 무슨 설정이 가능한지 궁금하다면, `설정`버튼을 그냥 누르지 말고 <kbd>Alt</kbd>+<kbd>설정</kbd> 버튼으로 클릭해주면 `defaults.json`파일이 열립니다.
* 그러니까, wt의 설정은 두개의 .json 파일로 이루어지며, 기본적인 설정은 `defaults.json`에서 하고, `settings.json`에서 사용자가 덮어쓴다고 보시면 됩니다.
* 즉, `settings.json`에 초기에 없던 설정도 `defaults.json`을 참고 하고, 고치고 싶은 설정을 `settings.json` 으로 가져와서 쓰면 됩니다. 

### Powershell 탭에 Powerline 설정

* 이건 사실 [공식 문서에 너무나 잘 설명되어 있기에](https://docs.microsoft.com/ko-kr/windows/terminal/custom-terminal-gallery/powerline-in-powershell) 제가 따로 설명할 필요는 없지만... (아래 그림은 공식 문서에 있는 그림)
![PowerShell 그림](https://docs.microsoft.com/ko-kr/windows/terminal/images/powerline-powershell.png)
* wt에서 공식 추천하는 [cascadia-code 글꼴](https://github.com/microsoft/cascadia-code) 보다는 `한글`과 `Powerline symbol`을 동시지원하는 [D2Coding 글꼴, 1.3버전](https://github.com/naver/d2codingfont)을 추천합니다.
* 한가지 더 추천드리는 설정은 PowerShell 프롬프트 설정입니다. 
* [Oh-my-posh](https://github.com/JanDeDobbeleer/oh-my-posh#themes) 저장소에 가시면 몇가지 theme 예시가 있는데  
* 아래 제 Powershell 설정을 보시면 `프롬프트 부분`은 위에서 나온 부분과는 좀 틀린데.. 
![myPowerShell 그림](https://user-images.githubusercontent.com/42961200/138008050-2d1d8408-79a0-4b57-8b66-e9a12954069f.png)

* 이 부분은 `wt`의 설정이 아닌, PowerShell의 별도 설정입니다.

{% include links.html %}
