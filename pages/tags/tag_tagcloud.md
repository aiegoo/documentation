---
layout: post
permalink: tag_tagcloud.html
title: Tag cloud variation
summary: "add another variation of tag cloud with style"
---
<style>
/**
 Based on CSS by Maroun Baydoun: https://gist.github.com/maroun-baydoun/4188213
**/
tagcloud {
  padding: 1em;
}

.cloud
{
  list-style:none;
  width:90%;
  padding:0;

  & li
  {
    float:left;
    margin:1px 10px;
    font-size:14px;
    min-height:35px;
    line-height:30px;

    a {
      text-decoration:none;
      //color:#DB0058;
      color: $colorPink;
      font-family:Arial;
      font-weight:bold;

      transition:opacity 0.8s;
      -webkit-transition:opacity 0.8s;
      -moz-transition:opacity 0.8s;
      -o-transition:opacity 0.8s;
    }
  }

  &:hover li a
  {
    opacity:0.3;

    &:hover {
      //color:#0B61A4;
      color: $colorDarkBlue;
      opacity:1;
    }
  }

  // Generate tag1 to tag25 classes
  @for $i from 1 through 25 {
    & li.tag#{$i} {
      font-size: 0.1 * ($i - 1) + 1em;
    }
  }
}
</style>

<h1>Tag cloud</h1>

<div id="tagcloud">
  {% capture tags %}
    {% for tag in site.tags %}
      {{ tag[0] }}
    {% endfor %}
  {% endcapture %}

  {% assign sortedTags = tags | split:" " | sort %}
  <ul class="cloud">
  {% for st in sortedTags %}
    <li class="tag{{ site.tags[st].size }}">{{ st | tag_link }}</li>
  {% endfor %}
  </ul>
</div>


{% assign tags = site.tags | sort %}
{% for tag in tags %}
 <span class="site-tag">
    <a href="/tag/{{ tag | first | slugify }}/"
        style="font-size: {{ tag | last | size  |  times: 4 | plus: 80  }}%">
            {{ tag[0] | replace:'-', ' ' }} ({{ tag | last | size }})
    </a>
</span>
{% endfor %}