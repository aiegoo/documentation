---
name: jekyll video player
layout: post
permalink: 2021-09-27-jekyllvideo.html
sidebar: other_sidebar
collection: wiki
summary: "videojs, plugin, include"
tags: [wiki, getting_started]
excerpt_separator: <!--more-->
date: 2021-09-27 09:44:03 +0900
updated: 2021-09-27 9:44 AM
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
latex: false
---

* TOC
{:toc}

## jekyllvideo readme
<script src="https://gist.github.com/aiegoo/e9542db822bcf7b8921e54d772ec8741.js"></script>

### minor issues
- when embedding a link, check for the right url as embed, sharing, previewing and other options might have different pointer to the video clip.
  - in youtube, play id 
  - googledrive, look for the embed menu and get the src from the iframe tags
- etc.

### example of this issue can be found:
[rlfy_shtarthere]({{ site.baseurl}}/rfly_starthere.html#lessons)

## videojs
[tutorial](https://docs.videojs.com/tutorial-setup.html)
[example]({{site.github_editme_path}}mydoc_sensor_detection.md)

{% include links.html %}
