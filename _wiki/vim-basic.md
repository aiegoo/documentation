---
name: vim 기초 사용법  
layout: post
permalink: vim-basic.html
sidebar: other_sidebar
collection: wiki
summary: "keep them by heart, fugitive"
tags: [vim]
excerpt_separator: <!--more-->
date: 2021-09-22 12:42:03 +0900
updated: 2021-09-23 08:20 PM
toc: true
public: true
parent: [[Vim-Category]] 
latex: false
keywords: "vim linux"
---
* TOC
{:toc}

## Fugitive Vim cheatsheet

<script src="https://gist.github.com/aiegoo/2f557ee90b86139d26e8fed23d9db4b5.js"></script>

### basic cheatsheet
[___basic___](#basic-cheatsheet)
## Tip 1. `hightlight search` 끄기

* #hightlight, #unimpared
 
### 문제 상황

* vim에서 특정 단어 위에서 `*`을 하거나 serach를 하게되면 찾은단어에 highlight 색상이 표기된다.
* 찾은 목적이 완료된 뒤에 highlight가 너무 눈에 튀어 끄고 싶을 때 어떻게 하지?

### 관련 링크

* [Vim clear last search hightlighting - stackoverflow](https://stackoverflow.com/questions/657447/vim-clear-last-search-highlighting)

### plugin이 설치되지 않은 vim에서의 해결책

* 다음번 서치까지 highlight를 끄고자 할 때
  ```
  :noh
  ```
* hightlight 기능을 완전히 끄고 싶을 때
  ```
  set nohlsearch
  ```
* 토글하려면 ( <kbd>F3</kbd> 키에 할당한 예제 )
  ```
  set hlsearch!
  nnoremap <F3> :set hlsearch!<CR>
  ```
  
### plugin이 설치된 상태일때

* 관련 답변 링크: [there are two `must have` plugins for this:](https://stackoverflow.com/a/35982459/9457247)
* 나는 [`unimpared`](https://github.com/tpope/vim-unimpaired)를 설치했기 때문에...
  * `[oh` - `:set hlsearch` 
  * `]oh` - `:set nohlsearch` 
  * `yoh` - `hlsearch` 토글 ( 위 답변에는 `coh`로 되어있지만, 최근 버전에서  댓글과 같이 `yoh`로 변경됨 )

## basic cheatsheet
{{site.data.alerts.note}}
## Vim Cheat Sheet

### Navigation

- End of the file: shift + g
- Next line: j
- Go down a defined number of lines: number + j
- Skip to next word: w
- Skip back a word: b
- Skip to next section: W
- Skip back to previous section: B
- Go to end of the line: $
- Go to beginning of the line: 0
- Go to top of the screen: shift + h
- Go to bottom of the screen: shift + l
- Forward multiple words: 5w
- Forward multiple letters: 5l
- Back multiple letters: 5h
- Forward to the next 'y': fy (case sensitive)


### Editing

- Undo: u
- Redo: ctrl + r
- Inserting text where the cursor is: i
- Inserting text at the start of the line: I
- Insert at the end of the line: shift + a
- Copy entire line: yy or Y
- Paste copied line: p
- Change multiple words: 5cw
- Insert at the end of the line: A


### Deleting

- d<leftArrow> will delete current and left character
- d$ will delete from current position to end of line
- d^ will delete from current backward to first non-white-space character
- d0 will delete from current backward to beginning of line
- dw deletes current to end of current word (including trailing space)
- db deletes current to beginning of current word
- Delete current line: dd
- Join the line below: shift + j
- Delete entire word: cw
- Delete to the end of the line: shift + C
- Delete multiple lines: d + number of lines + enter
- Delete from current position to a specific line number: d<line number>G
- Deleting all items in a file that start with a pattern: :g/< search term>/d
- Deleting all lines that are empty or that contain only whitespace: :g/^\s*$/d


### Selecting

- Select the entire line: V
- Select a range of text: v
- Select a column: control + v
- Reselect a block: gv
- Select all: ggVG


### Find and Replace

- %s/pattern/text to replace


### Saving

- Save the file: :w
- Save the file and quit: :wq
- Quit without saving: :q!


### Views

- Use horizontal split: :sp filename
- Use vertical split: :vsp filename
- Switch from top to bottom: control + w + j
- Switch from left to right: control + w + l
- Switch from bottom to top: control + w + j
- Switch from right to left: control + w + h


### Search

- While on current line: f + <queried item>
- Search for word in file: /word + enter
- Find next search result: n
- Search backwards: N
- Go to first result: ggn
- Go to last result: GN
- To remove search highlighting: :noh


### Modes

- Normal
- Insert
- Visual
- Replace
- Command Line


### Multiple Files

- :e filename - Edit a file in a new buffer
- :bnext (or :bn) - go to next buffer
- :bprev (of :bp) - go to previous buffer
- :bd - delete a buffer (close a file)
- :sp filename - Open a file in a new buffer and split window
- ctrl + ws - Split windows
- ctrl + ww - switch between windows
- ctrl + wq - Quit a window
- ctrl + wv - Split windows vertically


### Indenting

- Fix indenting when pasting: set paste in .vimrc file
- Indenting: visual mode + > or <
- Repeat indenting: .


## Commenting/Uncommenting

- Comment: visual block select with CTRL-V then I# (insert # in the begining)
- Uncomment: visual block select with CTRL-V then X (delete the first symbol on the line)


### Visual Mode

- Changing multiple lines of text: control + v + shift + i + action + esc
- Select elements in paragraph: v + / + content


### Display settings

- Turning on line numbers: :set nu
- Turning on syntax highlighting: :syntax on


### Reseting Vim Settings

```
cd
mv .vimrc .vimrc-old
mv .vim .vim-old
touch .vimrc; mkdir .vim
```

### Help

- To get help: :h <topic>
- To exit help: :bd


### Removing blocks of text in code files

- `c + i + t` will remove the code between HTML tags, such as: `<div>Some content</div>`
- `c + i + }` will remove the code inside of a JavaScript function

{{site.data.alerts.end}}

{% include links.html %}
