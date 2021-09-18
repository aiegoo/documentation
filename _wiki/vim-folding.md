---
name: vimrc 파일 폴딩하기  
layout: post
permalink: wiki-favicon.html
sidebar: other_sidebar
collection: wiki
summary: "vimrc가 점점 커진다면 폴딩을 적용해보자."
tags: [wiki, vim, troubleshooting]
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 3:53 AM
toc: true
public: true
parent: [[Vim-Category]]
latex: false
---
* TOC
{:toc}

## 1. 발단

* vim의 설정을 담당하는 vimrc 파일의 크기가 커지면서 정리할 방법을 찾기 시작했다.

### 찾아낸 방법들
* 이종립님의 [별도 파일 방식](https://johngrib.github.io/wiki/vim-configure-split/)
  * 좋긴하지만, 특정설정을 수정하기 위해 별도파일을 만들고, 열고 하는 부분이 번거롭다고 생각되었다.
  * 그래서 어디선가 봤던 기억이 있는 **폴딩하는 방법** 을 찾기 시작했다.
* [StackExchange / Vim 커뮤니티](https://vi.stackexchange.com/)의 질문중, [Is there a best practice to fold a vimrc file ?](https://vi.stackexchange.com/q/3814/27406)
  * 여기 답변중 채택된 답변은 아니지만, [마음에 드는 것](https://vi.stackexchange.com/a/6608/27406)이 있어 적용해보기로 했다. 
  * 위 답변상의 코드내에 드류 네일의 관련 [VIMCAST 에피소드](http://vimcasts.org/episodes/writing-a-custom-fold-expression/#stq=ftplugin&stp=1)가 언급 되어 있어 찾아보았다.
    * 아래에 그 내용을 요약했다.
    
## 2. 전개

### 위에서 언급한 VIMCAST 관련 에피소드

#### [#38 Writing a custom fold expression](http://vimcasts.org/episodes/writing-a-custom-fold-expression/#stq=ftplugin&stp=1) 설명 요약

#### 폴딩을 적용하는 **3가지 방법**이 있음

>:heavy_check_mark: 참고, VIMCAST 내용에서 아래 처럼 3가지 방법이 있다라고 명확하게 구분한건 아니고 요약하다 보니 구분하는게 요약하기 편해서 내가 구분함.

{% raw %}
* **Method 1.** 명령어를 사용하여 즉시 적용하는 방법
  * vim 명령줄에 다음 명령을 연속 적용 (vimcast 동영상 참조)
  * :set foldcolumn=3 / :set foldmethod=marker / 파일에 default marker `{{{` 적용 / 폴드 명령 za zM
  * 단점: 이 방법은 저장되지 않으므로 vi를 나갔다 들어오면 사용할 수 없음
{% endraw %}
* **Method 2.** 특정 파일에서 자동으로 항상 적용되도록 저장 하는 방법(modeline magic)
  * 참조링크: [Modeline magic](https://vim.fandom.com/wiki/Modeline_magic)
  * 해당 파일 맨위나 맨 아래에 다음 줄 추가
    * "vim:foldmethod=marker 
  * 단점
    * vim에만 적용되는 방법이 파일의 내용에 같이 포함됨
    * 같은 종류의 파일에 적용하고자 할 때 번거로움
* **Method 3.** 특정 파일타입에 대해 항상 적용되도록 설정을 수정하는 방법 **(추천방법)**
  * 기본 마커를 사용하면 원본 훼손으로 보기 안좋음 -> custom fold expression을 만들어 쓰는게 좋음
  * markdown 파일타입에만 적용하기 위해서는 아래 위치에 vim 파일을 작성하면됨.
  ```bash
  :e ~/.vim/after/ftplugin/markdown/folding.vim
  ```
    * after/ftplugin/markdown 아래 작성된 vim 파일은 ...
      * vim의 default 플러그인인 ftplugin/markdown.vim 의 적용후에 추가적으로 적용된다. 
  * 이후 내용은 custom fold expression을 작성하는 내용으로 ...
    * 해당 VIMCAST의 [trnascript](http://vimcasts.org/transcripts/38/en/)와.. 
    * [shownote](http://vimcasts.org/episodes/writing-a-custom-fold-expression/#shownotes)를 참고할것

{% raw %}
#### 폴딩관련 vim 테크닉
* foldmethod가 marker 일때 `{{{`로 열었으면 `}}}`로 닫을수 있다.
* `}}}`로 닫지 않더라도 `{{{1`, `{{{2`로 레벨을 줘서 구분할수 있다. 
  * 같은 레벨의 열리는 marker를 만나면 자동으로 닫히는듯
* 폴드(fold)를 열고 닫는 기본 명령들 ( 'foldminlines', 'foldenable' 옵션의 영향을 받음)
  * zo : 현재 커서아래의 폴드 한개를 연다. count 옵션을 추가 하여 열고자 하는 폴드 갯수를 지정한다.
  * zO : 현재 커서아래의 모든 폴드를 연속적으로 연다.
  * zc : 현재 커서아래의 폴드 한개를 닫는다. count 옵션 가능
  * zC : 현재 커서아래의 모든 폴드를 연속적으로 닫는다.
{% endraw %}

### 위에서 언급한 [VI exchange 답변](https://vi.stackexchange.com/a/6608/27406) 적용 이슈 

#### 적용과정
* Step 1. 위 VIMCAST 에피소드의 **Method 3 방법** 을 적용하기로 결정
* Step 2. vim 실행 
* Step 3. :e ~/vimfiles/after/ftplugin/**vim**/folding.vim (위에선 `markdown`이었지만 여기선 `vim`인것에 주의)
* Step 4. 위 답변에서 제공되는 vim script Copy & Paste
  * 전부 그대로 한것 아니고 VimFolds()와 VimFoldText()만 따옴.
  * 답변 내용은 vimrc에 구현하는 것을 가정한것으로 augroup을 사용.
  * after/ftplugin 을 사용한다면 augroup 사용할필요 없고...
  * 아래내용만 folding.vim 마지막에 넣으면 됨.
  ```vim
  setlocal foldmethod=expr
  setlocal foldexpr=VimFolds(v:lnum)
  setlocal foldtext=VimFoldText()
  " set foldcolumn=2 foldminlines=2  " 이부분 comment 되어있는데 ..이유까먹음
  ```
* Step 5. 아래 방법대로 Customize
* Step 6. 끝

#### customize 방법
* 폴딩시 보여주는 문구를 customize 하려면 folding.vim 의 `VimFoldText()` 편집
  * 글머리표 특수문자 입력방법
    * step1. : vim 명령줄에서 ':digraphs' 명령으로 어떤 문자 적용할지 확인
      * 현재 vim 메인 폰트로 채택된 font에서 지원되는 특수문자 일람확인 (표시 여부 확인가능) 
    * step2. : vim insert mode에서 ctrl + k 누른후 위에서 찾아낸 문자코드 두자리 입력
  * 어두운 테마를 사용하니 digraphs 명령 결과로 나온 `digraph table`의 문자를 알아보기 힘들다.
    * 요기에서 찾아보도록 하자. [Vim digraphs](https://devhints.io/vim-digraphs)

## 3. 결말

### 적용 결과물
* ~/vimfiles/after/ftplugin/vim/folding.vim
  * 이외에는 모두 default 설정 사용. 
  * 주의!! ~/_vimrc 는 건드리지 않았음
  * 혹시 folding 관련 이외의 vim 파일관련 설정을 넣고자 한다면...
    * 위의 ~/vimfiles/after/ftplugin/vim/ 파일내에 ~.vim 확장자로 추가하면됨.

### 사용법

#### 편집시
* 가장 윗 단계 카테고리를 만들때 ...
  * 'box'를 치고 insert mode에서 `tab`을 누름
  * ultisnip이 적용되어 있으므로 "로 둘러싼 box가 생김.(vimfile only) 
* 그 다음단계 만들때 ...
  * "" 이면 2단계, """ 이면 3단계임.
  * "" 뒤에 스페이스 한칸 까지 감지하므로 다른 문자 붙이면 안됨.

#### 폴드 열고 닫고
* vim 명령줄에서 :help zo (혹은 :help zc )열고 찾아볼것
* 쟤네들 다 모여있음...

## 적용 소감

#### 배운 내용
* vim folding 관련 전반
* vim에서 제공되는 기본 ftplugin 과 custom ftplugin의 공존방법 ( after/ftplugin )
  * 예를 들어, vim 파일 관련 설정을 추가한다면 after/ftplugin/ 밑에 vim.vim 에 넣거나...
  * after/ftplugin/vim/ 폴더를 만들어 그 밑에 아무 이름으로 넣어도 ...
  * vim 파일 (예를 들면 _vimrc 파일) Open시에 설정이 적용됨.
  * 이 때 vim 배포시에 적용되는 기본 설정들은 /App/Vim/ftplugin/에 있으며...
  * 기본 설정들이 적용되고나서 after 폴더 밑에 있는 것들이 적용되는 식임.
  * 즉, 기본 설정들을 after에서 overwrite 하므로 최종적으로 기존설정위에..
  * after에서 변경되는 설정으로 적용되는 방식임.
* vim 에서 특수 문자 입력하기 ( :digraphs ) ,[참조링크](https://vim.fandom.com/wiki/Entering_special_characters)

{% raw %}
* Markdown 작성 관련
  * [[wiki-troubleshooting#curly braces 에러]] 문서에 정리  
{% endraw %}

### ToDos
* jekyll에서 `typora`, `github`에서 지원하는 [이모지](https://gist.github.com/rxaviers/7360908)가 표시안됨. 방법있나 찾아볼 것 (2020-03-24 ~ )
  * 아마 markdown 엔진관련 이슈일 것 같음. 

{% include links.html %}
