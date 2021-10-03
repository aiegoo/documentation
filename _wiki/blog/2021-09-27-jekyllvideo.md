---
name: jekyll video player
layout: post
permalink: 2021-09-27-jekyllvideo.html
sidebar: other_sidebar
collection: wiki
summary: "videojs, plugin, include"
tags: [wiki, jekyll]
excerpt_separator: <!--more-->
date: 2021-09-27 09:44:03 +0900
updated: 2021-09-28 05:12AM
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
latex: false
---

* TOC
{:toc}

## youtube modal window implementation
### modal tags
```html
<div class="lb-modal lb-show"> 
  <div class="lb-frame"> 
    <a class="lb-close" href="#" role="button"> 
      <svg viewBox="0 0 48 48"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"></path></svg> 
    </a> 
    <div class="lb-content">
      <div><h2>Embed videos and playlists</h2>
        <div class="video-popup">
          <iframe style="height: 400px;" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="400" src="https://www.youtube.com/embed/lJIrF4YjHfQ?autoplay=1&amp;cc_load_policy=1&amp;controls=2&amp;hl=en&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fsupport.google.com&amp;widgetid=1" id="widget2"></iframe>
        </div>
      </div>
    </div> 
  </div> 
</div>
```
### embedded youtube tags

```html
<p><div class="video-custom"><a href="//www.youtube.com/watch?v=lJIrF4YjHfQ" data-videoid="lJIrF4YjHfQ" class="embedded-video-custom" data-tracking-method="NOW" data-stats-method="IMMEDIATE" style="background-image: url(&quot;//i.ytimg.com/vi/lJIrF4YjHfQ/mqdefault.jpg&quot;);"><svg viewBox="0 0 48 48"><path d="M40 8.8c-1.2-.4-8.6-.8-16-.8s-14.8.4-16 .8c-3.1 1-4 8-4 15.2s.9 14.2 4 15.2c1.2.4 8.6.8 16 .8s14.8-.4 16-.8c3.1-1 4-8 4-15.2s-.9-14.2-4-15.2zM20 33V15l12 9-12 9z"></path></svg><div class="title" data-outlined="true">Embed videos and playlists</div><div class="description">To learn more please visit the YouTube Help Center: https://www.youtube.com/help</div></a></div></p>
```

## jekyllvideo readme
<script src="https://gist.github.com/aiegoo/e9542db822bcf7b8921e54d772ec8741.js"></script>

### minor issues
- when embedding a link, check for the right url as embed, sharing, previewing and other options might have different pointer to the video clip.
  - in youtube, play id 
  - googledrive, look for the embed menu and get the src from the iframe tags
- etc.

### example of this issue can be found:
[rlfy_starthere]({{ site.baseurl}}/rfly_starthere.html#lessons)

## videojs
[tutorial](https://docs.videojs.com/tutorial-setup.html)
[example]({{site.github_editme_path}}mydoc_sensor_detection.md)
[using_script]({{ site.github_editme_path}}thesis-indoor-drone.md)

### converting markdown to html with json_module
[source](https://gist.github.com/cjmlgrto/8052101e3c272d1050091b16c185ba1c)

{% include links.html %}
