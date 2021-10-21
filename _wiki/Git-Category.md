---
name: GIT  
layout: post
permalink: Git-Category.html
sidebar: other_sidebar
collection: wiki
summary: "카테고리 2단계 (끝)"
tags: [git]
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 3:27 PM
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

{% include links.html %}
