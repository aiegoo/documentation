---
layout: default
title: Tags
menu: 20
---

<h1>Tag cloud</h1>

<tagcloud>
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
