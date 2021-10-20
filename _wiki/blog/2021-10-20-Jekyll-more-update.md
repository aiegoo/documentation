---
layout: post
title: "more to-dos or mini projects relating this jekyll site"
name: "Jekyll-more-update"
tags: [jekyll]
tagName: [update]
permalink: 2021-10-20-Jekyll-more-update.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: update
keywords: "js tips automatically reload page mathjax anchor link fixed navigation header hover links back to top button zoom enlarge photo js prevent default event keyboard arrow json fetch"
summary: "Wed, Oct 20, 21, live-server mathjax issues-to-fix show-box photo TOC Github API"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-10-20T02:32:00 +0900
updated: 2021-10-21 04:32
---
* TOC
{:toc}

## Thi

### how to automate adding frontmatters 
> specific to files with contents only
> example, drones guide files in this sites

[sof](https://stackoverflow.com/questions/46423572/append-a-file-in-the-middle-of-another-file-in-bash)

- issues
  - it's important to keep the original file name due to existing file links
  - then, I will have to add frontmatters prepend to existing contents, but I have more scripts after frontmatters to be generated (ex, include scripts)
  - bash should generate some time data in date and updated parameters, in additon to other bash variables suc as tags tagName etc.
- solution
  - adapt existing scripts for createwiki and add awk/sed bash cli to insert each file in the same/subdirectory 
  - I have used a bash script in similar case where I prepend contents in a file to every file in the directory.
  - [code_snippets](#prepending-file)

### reading progress bar inside topnav
- html tag and css were inserted in topnav.html
- code snippets for jquery can be found in my gist (search for reading-progress)

[jquery-link for scroll](https://gist.github.com/aiegoo/a20c01dd73c6da94ff2afbeaddfe643e)

### Automatically reload page if js file changes

1. Install [nodejs](https://nodejs.org/en/download/).
2. Install [live-server](https://github.com/tapio/live-server) using nodejs: `npm install -g live-server`.
3. `cd` to the project folder.
4. run `live-server` (accept all networks notification)
5. Browse: [http://127.0.0.1:8080](http://127.0.0.1:8080)
6. Enjoy!

::: warning
It may not reload the browser (it only detects the changes)!
:::

### Add MathJax to website

👉 Check [the codes](https://gist.github.com/dinhanhthi/e4dac3caa5e50c8c6f6493ab4b80b07c).

## Anchor links hidden by fixed navigation

If you use table of content for posts in which links starting with `#` link to headings. After jumping, headings are usually hidden by the fixed navigation. Adding below script before `</body>` tag can solve the problem (change value `100` to change where the page jump).[link](http://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to)

👉 Check [the codes](https://gist.github.com/dinhanhthi/a08f2e0f77c467b5a08dcd687339a8b7). **Update 03/10/21**: This method is not good. It works only if we click on an `<a>` tag which starts with `#` in the `hlink`. In the case of which inside `<a>` containing an `<svg>`, for example, it won't work!

### Heading hover anchor links

👉 Check [the codes](https://gist.github.com/dinhanhthi/7c22452738840943dffe3e2a0249cbb7).[link](https://ben.balter.com/2014/03/13/pages-anchor-links)

## Back to top button

Click and go back to the top of the page using javascript with smooth effect.

👉 Check [the codes](https://gist.github.com/dinhanhthi/20daf8dda279685fd1a65f81491177d0).

### Hide / Show box

Auto hide / show the next `div` of the currently clicked `div`.

👉 Check [the codes](https://gist.github.com/dinhanhthi/cc6ce14f1ce4af862e67ecf8f8c9a3a9).

__Advantage__: We don't need the id of content div, this method requires that `div.hs__content` comes right after `div.hs__title`, otherwise it won't work!

### Click to enlarge photo

If some photos on your page are too small and you wanna add a function in that users can click on the photo to enlarge it. This technique requires [Bootstrap 4](https://getbootstrap.com).

👉 Check [the codes](https://gist.github.com/dinhanhthi/fb81766d0070d15d5ad2fc239643fb3b).

### Prevent default event

Stop arrow key acts as usual,

``` js
window.addEventListener("keydown", function(e) {
	// space and arrow keys
	if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
		e.preventDefault();
	}
}, false);
```

If `div_1` inside `div_2`, prevent actions in `div_2` when performs on `div_1` (check [this example](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_stoppropagation)), use `e.stopPropagation()`.

### Search + result + navigation

- Auto close the result if losing focus.
- Cycling the result items with arrow up/down keys.
- Auto focus to the `a` tag of the title.

👉 Check [the codes](https://gist.github.com/dinhanhthi/908585062181e6f34bf8fb098ba3b001).

## Scrolling headings in TOC

Follow the position of viewport, auto highlight heading in toc w.r.t the current heading on page

👉 Check [the codes](https://gist.github.com/dinhanhthi/c51fa9e525253179601d2a3e1b47d0b6).

### Fetch starred repository (JSON to `ol`)

Automatically fetch a list of Github starred repositories using Github API and display it under `<ol>` [html tag](https://stackoverflow.com/questions/55090335/how-to-create-lis-based-on-fetch-result)

👉 Check [the codes](https://gist.github.com/dinhanhthi/699aa86bb5fb63fad0a6ab97410b1b5b).

## prepending-file

``` bash
find . -name "*.md" -print | while read fn; do echo fixing $fn; cat .test.txt "$fn" > $fn.modified; mv $fn.modified $f done
```
I have copied a test.txt file with a frontmatter into the first line of a file.

``` bash
sed -n '/aa/,/fff/p' file1 > tmp
sed '1 r tmp' file2
```

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
