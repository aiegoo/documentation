---
title: vim howtos
name: vim
tags: [books, vim]
updated: 2021-10-15 04:51 AM
keywords: vim fugitive emmet
summary: "vim fugitive emmets shortcut keys and howtos"
sidebar: mydoc_sidebar
permalink: books_vim.html
folder: books
---

{% include tony.html content="vim, emmet, plugins, tmux books" %}

## how to when you forgot to give write permission
> " Allow saving of files as sudo when I forgot to start vim using sudo.
cmap w!! w !sudo tee > /dev/null %
- save this in your vimrc

## vim emmet cli
### complete guide
[gist](#complete-guide)

```
<C-Y>A        emmet-anchorize-summary
<C-Y>a        emmet-anchorize-url
<C-Y>k        emmet-remove-tag
<C-Y>j        emmet-split-join-tag
<C-Y>/        emmet-toggle-comment
<C-Y>i        emmet-image-size
<C-Y>N        emmet-move-prev
<C-Y>n        emmet-move-next
<C-Y>D        emmet-balance-tag-outword
<C-Y>d        emmet-balance-tag-inward
<C-Y>u        emmet-update-tag
<C-Y>;        emmet-expand-word
<C-Y>,        emmet-expand-abbr 
```

## vim fugitive

## vim plugins

## tmux

## tmuxinator

### complete-guide
<script src="https://gist.github.com/aiegoo/4972f6c4ca22bf593441c8fdaea8afdd.js"></script>
