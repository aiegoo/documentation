---
name: GIT
layout: post
permalink: Git-Category.html
sidebar: other_sidebar
collection: wiki
summary: "카테고리 2단계 (끝)"
tags: [git]
tagName: git
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-11-30 5:27 AM
keywords: "git merge pullrequest branching"
toc: true
public: true
parent: [[Tools-Category]]
latex: false
---
* TOC
{:toc}

## curious programmer

I
[wrote](/blog/how-to-craft-your-changes-into-small-atomic-commits-using-git/)
about crafting changes into small atomic commits using Git.
It looked like there was some confusion. I want to share
what I understand about atomic and monolithic commits and why I create atomic
commits in Git.

> I got a question in
> [Reddit](https://www.reddit.com/r/programming/comments/agxi5o/how_to_craft_your_changes_into_small_atomic/)
> by WetDynamics that "atomic commits sound nice in theory but in
> practice you end up with 100 commits of "extracted foo into a
> method" or "refactored bar to make it more readable". Does it
> really make your git history easier to grok than a single commit
> focused on a feature?"

I think we are on the same page. I feel as though my intent was not
clear in my
[previous](/blog/how-to-craft-your-changes-into-small-atomic-commits-using-git/)
post.

## An atomic commit

Let's say I do a refactor but I also update a some features and add new
ones.

In an atomic commit, I will commit the refactor and each feature change
separately.

I don't know what the official definition is but to me an atomic commit is a **commit that focuses
on one context and one context alone**. Granted, this is tricky. I do this to the best of
my abilities but I don't always get it right.

> **Disclaimer:** I don't intend that I commit each and every single line
> or function. By context I mean a single topic: a feature, bug fix,
> refactor, upgrade, task...

## A monolithic commit

Again. Let's say I do a refactor but I also update a some features and add new ones.

The **entire changeset** gets committed in a monolithic commit.

Granted, it doesn't have to be a large commit. It's a commit with changes
tightly coupled into a single commit. Like a tangled or
spaghetti commit.

The larger the commit, the more brittle and error prone it becomes because it
becomes harder to understand (even if it's well documented - I know this from
my own doing), read, review and revert.

## Why go atomic?

Atomic commits are easier to:

- **track** - I know where they are in the history. `git log --oneline`
  shows me all commits. `git log --grep <pattern>` lets me find a commit based
  on a partial message. `git log <commit>` will jump to that commit and
  show previous commits.

- **understand** - I document each change with a commit message and elaborate
  with an explanation if I need to.

- **read** - it's a change focused on a single context which makes it smaller,
  simpler and easier to read the patch `git show <commit>` or `git log <commit> -p`

- **review** - as it's a small, focused, documented change, a reviewer should
  be able to follow the code changes and keep their sanity.

- **revert** - reverting `git revert <commit>` an atomic commit will not revert
  unrelated changes like a monolithic commit would.

## What do I do?

- **I try working on one thing** - this is not always possible, hence my
  [previous](/blog/how-to-craft-your-changes-into-small-atomic-commits-using-git/)
  post. This is where I use the interactive mode to my advantage. Most GUIs come with
  intuitive interfaces.

  `git add -i`

- **I try keep my changes as small as possible** - this makes it easier for me to
  commit my changes once I am done especially when I go into an interactive mode.

- **I try to commit often** - I amend my commits when I need to.

  `git commit -m "<message>" --amend`

- **I aim to be vigilant that tests pass** (I get this wrong sometimes). I want
  failing/code tests fixed and committed as part of the context commit. Otherwise
  I have a "broken" commit.

- **When I end up littering my feature commits** (features have
  commits in a random order) then I use an interactive rebase to move and
  squash the commits prior to pushing them.

  `git rebase -i`

> The goal of creating atomic commits is not to create "100 commits" but
> rather **pragmatically** craft relevant changes for a better history,
> cognitive load and an easier means to rollback changes.
## 주요 사이트

* [Git Magic](http://www-cs-students.stanford.edu/~blynn/gitmagic/) :  Git 사용법을 좀더 알기쉽게 설명
  * [Git Magic 한국어 번역 사이트](http://www-cs-students.stanford.edu/~blynn/gitmagic/intl/ko/) : Git Magic 한국어 번역 (4, 5, 6 장 미번역)

## 현재 공부중인 링크

* .gitconfig 파일에 "git sc" 명령을 만드는데 아이디어를 준 링크
  * SO, [How to create a frequency list of every word in a file 답변](https://stackoverflow.com/a/10552948/9457247)
  * 캡쳐 쓰는 법 ()로 쌀때, \\\\( ... \\\\) 로 싸야 함. 부를 때도 \\\\1
  * [\\\\1] 안되는 이유는 이어지는 awk 명령이 중간에 공백이 있을때 뒤엣것을 날려버림. 잘 생각해보자 $1만 프린트 하고 있어서 첫번째 공백 이후것은 날아간다.
  * 이 명령이 필요한 이유 : git difftool 에 필터를 쓰기전에 어떤 옵션으로 필터를 쓸지 정하기 위해 필요하다.

## git 기본 명령

* [git 안쓰던 프로젝트를 github에 등록하고 싶을 때](https://git-scm.com/book/ko/v2/Git의-기초-리모트-저장소#_리모트_저장소_추가하기)
*

## git config ( 포스팅할것)

* git mergetool로 merge 한이후에 utf8 --> cp949 로 변환되는 문제가 있음
* Diffmerge의 문제라고 생각했는데.. git for windows의 문제일수도 있음
* 관련 링크
  * [Git for Windows Unicode Support](https://github.com/msysgit/msysgit/wiki/Git-for-Windows-Unicode-Support#windows-settings) : git for windows 공식
  * [Git-bash를 사용하며 발생한 한글관련 문제들](https://www.slipp.net/wiki/pages/viewpage.action?pageId=5800002) : 실제 사례 중심.
  * [git 한글 파일명 사용 문제 고치기](https://edykim.com/ko/post/git-fix-problem-using-filename-core.quotepath/) : core.quotepath 원 포인트
  * [Mac에서 git 사용시 한글 파일명 문제](https://blog.asamaru.net/2017/06/26/mac-os-git-korean-file-name-corequotepath/) : Mac, 윈도우즈 상관없이 Unicode문제인듯
  * [Git은 어렵다](https://sncap.tistory.com/630) : 별도 설명없이 git 설정을 모아놓았음
  * [Git을 이용한 개행문자 핸들링](https://reiphiel.tistory.com/entry/git-handle-newline) : git의 개행문자 설정에 대한 상세설명. 관련글을 쓰고싶은데 그대로 베낄순없고 설명된 부분의 원문을 인용하여 링크를 거는 방식으로 작성해볼것.

* 지금까지 .generateData.js를 실행한적이 없는듯
* windows에서 이 사이트 구축할때 해야하는 일로 정리할것
* 관련 링크
  * [Git hooks, parctical used(yes, even on Windows)](https://www.tygertec.com/git-hooks-practical-uses-windows/) : git hook 사용방법

* [좋은 git 커밋 메시지를 작성하기 위한 8가지 약속](https://djkeh.github.io/articles/How-to-write-a-git-commit-message-kor/) :  git commit 메시지 작성법
* [Git 사용 규칙 - Git commit 메시지](https://tttsss77.tistory.com/58) : git 커밋 메시지 규칙
* [Hugo로 github.io 블로그 만들기](https://ryan-han.com/post/etc/creating_static_blog/) : 여러가지 설정 참고할것이 있을듯..

## git - 카테고리 문서

Github merge 옵션 관련
Github에서 Pull request를 merge 시 git에서 제공하는 여러 merge option을 팀 공유를 위해 간략히 정리함



![pullrequest-mergebutton](https://user-images.githubusercontent.com/42961200/143947702-36c106e5-8523-4cb2-998b-07713efca168.png)




Github에서 Pull request merge 시 아래 가이드와 같은 merge 방법이 있음.

- Merge pull request

- Squash and merge

- Rebase and merge



Merging a pull request

 : https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request



각 방법들은 git에서 제공하는 merge 방법으로 아래 가이드를 보면 이해하기가 쉬울 듯함.

About merge methods on GitHub

: https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/about-merge-methods-on-github

: https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges

브랜치 통합하기

 : https://backlog.com/git-tutorial/kr/stepup/stepup1_4.html

3.2 Git Branching - Basic Branching and Merging

 : https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
 : https://git-scm.com/docs/git-merge

3.6 Git Branching - Rebasing

 : https://git-scm.com/book/en/v2/Git-Branching-Rebasing
 : https://git-scm.com/docs/git-rebase





GitHub 가이드가 가장 깔끔하게 설명을 하고 있어 간략히 발췌하면



Merge pull request는

 . Pull request의 모든 commit을 default branch로 추가하고 merge commit을 생성한다.
 . git merge 시 --no-ff option을 사용하는 것이라 merge commit을 생성하게 되는 것이다.
   : 이 옵션은 주로 특정 branch나 개발 history를 유지하려는 경우 사용됨.
   : https://stackoverflow.com/a/14865661
   : https://koreabigname.tistory.com/m/65



아래 그림을 보면 feature branch에서는 default branch 기반으로 D,E를 생성하였기 때문에 A,B,C 다음 D,E를 추가하면 되지만 merge commit을 생성하여 default branch에 추가하게 된다.


![standard-merge-commit-diagram](https://user-images.githubusercontent.com/42961200/143947739-c7522baa-043d-4cf9-b173-c775d0df93f6.png)




Squash and merge는

 . 용어와 같이 pull request의 commit을 하나로 모아 default branch에 추가하여 merge하게 된다.
 . Repository 설정에서 squash merging을 허용해야 한다.
 . 수정/개발 hisotry가 중요하지 않다면 이 옵션을 사용하여 default branch를 깔끔하게 관리할 수도 있겠음.


![commit-squashing-diagram](https://user-images.githubusercontent.com/42961200/143947762-b04acde6-5d96-4f9d-881e-e89c44de172f.png)




Rebase and merge는

 . Pull request의 모든 commit이 head branch에 merge commit 없이 차례로 추가된다.
 . Git repository에서 rebase merging이 허용되어야 한다.
 . Github의 rebase는 git rebase와 다른 점이 있는데 git rebase는 committer 정보와 commit SHA를 변경하지 않지만 Github는 변경하는 점이 다르다고 함.
 . Github에서 자동으로 Rebase and merge가 되지 않는다면 command line에서 rebase를 수행하여 conflict를 해결하고 force push를 해야 함.




![다운로드](https://user-images.githubusercontent.com/42961200/143947770-02b432bd-61eb-4c4a-b2c1-e9a40bfcbe04.png)


다만 rebase 수행 시 조심해야 할 점은

 . 작업 branch가 default branch에서 분기되어 오래되었다면 merge conflict이 더 자주 발생할 수 있음.
   > default branch에 대해 자주 rebase하고 commit하면 해결 될 수 있음.
   > 솔직히 Github에서 branch는 필요할 때 마다 만들어 사용하는게 맞는 것 같다.

 . Interactive rebase 작업 도중 commit history를 잃어버릴 수 있음.
   > git reflog를 이용하여 복원하거나 rebase 작업을 취소할 수 있다고 함.

Atlassian Bitbucket git rebase
https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase



마지막으로 아래 글은 Git 사용자라면 한 번쯤 봤을 정도로 고전인 article으로
Project 수행 시 어떻게 branch를 관리하면 좋을지에 대한 내용이니 꼭 읽어보고 알아두어야 함.

A successful Git branching model

: https://nvie.com/posts/a-successful-git-branching-model/
![git-model@2x](https://user-images.githubusercontent.com/42961200/143953544-e71eacaa-bdd7-43f9-b8fc-dfb766ff3dcd.png)


{% include taglogic.html %}
{% include links.html %}
