---
name: Practical Vim
layout: post
permalink: book-practical-vim.html
sidebar: other_sidebar
collection: wiki
summary: "손이 먼저 반응하는"
tags: [web, regex, vim, publishing]
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
updated: 2021-09-18 4:50 PM
toc: true
public: true
parent: [[Books-Category]] 
latex: false
---
* TOC
{:toc}

# 개요

<style>
.cover-table img { width: 300px }
</style>

{: .cover-table}
| ![practicalvim-kr-img] | 저자: 드류 네일(Drew Neil) <br> 옮긴이: 김용균 <br> 책제목 : Practical Vim<br> (원서 제목 : Practical Vim Second Edition) <br> 부제 : 손이 먼저 반응하는<br> (원서 부제: Edit Text at the Speed of Thought)<br><br> 출판사 : [인사이트](https://blog.insightbook.co.kr/2017/02/24/손이-먼저-반응하는-practical-vim/)(원책: [The Pragmatic Bookshelf](https://pragprog.com/titles/dnvim2/practical-vim-second-edition/)) <br> ISBN 한글 : [978-89-6626-208-3](https://www.google.com/search?q=9788966262083) <br> ISBN 영문 : [9781680501278](https://www.google.com/search?q=9781680501278) <br> <br> 정가: 25,000원 |

[practicalvim-kr-img]:https://insightbookblog.files.wordpress.com/2017/02/Pratical-Vim-표지.png

## 추가 개요 

* 이 책의 부제에서 사이트 대문의 영감을 얻었다.
* 영문 2판(2015년)의 번역본이다. 한글판 번역은 2017년

## 저자 설명

### 드류 네일 (Drew Neil)

<style>
.author-container {display: flex; align-items: center; justify-content: space-around;}
</style>

<div markdown="1" class="author-container">

 ![Drew Neil Photo][author-img]

* vim 관련 콘텐츠로 유명한 [vimcasts.org](http://vimcasts.org/)를 운영하고 있다. 
* [HomePage](http://drewneil.com/)
* [GitHub](https://github.com/nelstrom/) : 
* [twitter](https://twitter.com/nelstrom) : 가끔 괜찮은 vi tip을 올린다

</div>

[author-img]:https://avatars.githubusercontent.com/u/7069?v=4
{:width="300px" height="300px" object-fit="cover" object-position="20% 10%"}

# Acknowledgments

* 책을 만드는 과정에서 도와준 사람들에 대한 감사

# Foreword to the First Edition

* Vim의 Core Contributor이며 Vim Plugin 제작자로 유명한 Tim Pope의 추천사
* 이 책은 Tip으로 구성되지만, 일반적인 개념의 Tip을 넘어선다! 
  
# Read Me

* Vim을 사용하는데 필수적인 지식은.. 
  * vim에서 제공하는 대화형 강의 : [Vim 튜터](http://vimhelp.appspot.com/usr_01.txt.html#vimtutor) 에서 배울 수 있다.
* 이 책에서는 vimrc 설정과 상관없이 사용할 수 있는 에디터의 핵심기능만 다룬다.

## How This Book Is Structuted

* 처음부터 끝까지 쭉 읽어야 하는 책이 아니다.
* 골라서 필요한 부분만 읽으면 된다.
* 초급 수준 ▶ 고급 수준으로 나아가는 흐름이 아니다
  * 하지만 초급 사용자라면 각 장 초반에 나오는 팀 위주로 책을 전체적으로 훝어보고
  * 고급 사용자라면 후반부의 팁에 초점을 맞추거나 골라 읽어라

## A Note on the Examples

* 같은 문제에 대해 여러가지 해결 방식이 있다.
* 더 빠른 방법을 알고있다면 그 방식이 맞을것이다.

## Learn to Touch Type, Then Learn Vim

* 번역 제목: 키보드 자판에 숙달된 후 Vim 학습하기
* 타이핑이 익숙치 않다면 Vim을 배우기는 어렵다. 
  
# Read the Forgotten Manual

* 번역 제목: Vim을 시작하기 위한 준비운동
* 예제를 묘사하기 보다는 시연하는 식으로 설명한다. 
* vim을 설명만 보고 따라하기는 어렵다.
* 이 곳에서는 설명방식을 설명한다.
* 책에서 반복적으로 나오는 기호가 궁금하다면 여기로 다시 돌아오라

## Get to Know Vim's Built-in Documentation

* vim내부에 설치되는 문서를 읽어보라
* vim 명령줄에 `:h vimtutor`를 입력해보자

## Notation for Simulating Vim on the Page

* vim을 사용하는 것은 피아노 연주하는 것에 비유할 수 있다.
* <kbd>Ctrl</kbd>-<kbd>s</kbd> 는 동시에 눌러야 하는 키를 표기하는 전통적인 방식이다
  * 하지만, 이 방식은 vim의 다중 모두 명령 (modal command set)을 묘사하기에는 부족하다.
* 이어지는 섹션에서 *Practical Vim* 책 전체에서 Vim의 usage를 묘사하기 위해 사용하는 표기법에 대해 알아본다

### Playing Melodies

* Normal Mode에서 키 조합 방식의 표현

| Notation | Meaning                              |
| ---      | ---                                  |
| `x`      | Press `x` once                       |
| `dw`     | In sequence, press `d`, then `w`     |
| `dap`    | In sequece, press `d`, `a`, then `p` |

### Playing Chords

* `<C-p>`와 같은 keystroke를 본다면, `<`를 누르고, `C`를 누르고 `-`를 누르고.. 하라는게 아니다.
* <kbd>Ctrl</kbd>과 <kbd>p</kbd>를 동시에 누르라는 것이다.

# 1. The Vim Way 

* 반복작업을 효율적으로 할 수 있다면 시간을 아낄수 있다.
* vim은 반복작업에 최적화되어있다.
  * vim은 마지막 변경사항을 한 번의 keystroke로 반복할 수 있는데,
  * 이 강력한 기능을 효율적으로 사용하려면,
  * 작업을 반복적으로 사용가능한 작업으로 단위화하는 습관이 필요하다.
* dot command는 vim에서 가장 강력한 기능이다.
  * 관련없어 보이는 각각의 tip들은 결국 하나로 수렴한다.
* 가장 이상적인 편집방식은,
  * 이동에 필요한 하나의 keystorke와 
  * 실행을 위한 또 하나의 keystoke임을
  * 알게될 것이다.

## Tip 1. Meet the Dot Command

*  dot command : 마지막 **change**를 반복한다.
  * vim에서 가장 다목적 이며, 가장 강력한 기능이다.
* **change** 란 무엇인가? 

{% include links.html %}
