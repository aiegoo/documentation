---
layout: post
title: "auto focus when page loads"
name: "auto-focus"
tags: [web]
permalink: 2021-10-19-auto-focus.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "webfont ligature autofocus separate column regex"
summary: "Tue, Oct 19, 21, auto-focus media-query google-font"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-10-19T22:10:35 +0900
updated: 2021-10-19 22:10
---
* TOC
{:toc}

## Thi

keywords: "autofocus separated columns page load google webfont sass Font ligatures terms two 2 columns list Font ligatures auto convert symbol focus on input field google webfont helper regex regular expression font download media bootstrap doesn't work"
---

### Terms

- **Font ligatures**: When you type <kbd>=</kbd> + <kbd>></kbd>, it becomes `⇒`.

### Auto focus on an input field when page loads

Just add `autofocus` into the `<input>` tag.

~~~ html
<input name="q" class="search" type="search" placeholder="..." autofocus>
~~~

### Separate a list into 2 columns

And make it into 1 if the screen is small.

<div class="col-2-equal" markdown="1">

~~~ html
<div class="two-columns-list">
  <ul>
    <li></li>
  </ul>
</div>
~~~

~~~ scss
.two-columns-list {
  @media (min-width: $grid-md) {
    @include column-count(2);
    & > li {
      padding-right: 10px;
    }
  }
}
~~~
</div>

### `@media` not working

When I use bootstrap, the `@media` is not working when I change to mobile use, try to add below line to `<head>`,

``` html
<meta name="viewport" content="width=device-width" />
```


## Useful URLs

- **Sia Karamalegos** -- [Making Google Fonts Faster](https://medium.com/clio-calliope/making-google-fonts-faster-aadf3c02a36d).
- **The SASS way** -- [If-For-Each-While in SCSS](http://thesassway.com/intermediate/if-for-each-while).

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
