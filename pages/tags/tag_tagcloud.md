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
#tagcloud {
  padding: 1em;
}

.cloud
{
  list-style:none;
  width:90%;
  padding:0;

.cloud li
  {
    float:left;
    margin:1px 10px;
    font-size:14px;
    min-height:35px;
    line-height:30px;}
.cloud li a {
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


.cloud:hover li a
  {
    opacity:0.3;

.cloud li a:hover {
      //color:#0B61A4;
      color: $colorDarkBlue;
      opacity:1;
    }


  // Generate tag1 to tag25 classes
  @for $i from 1 through 25 {
    & li.tag#{$i} {
      font-size: 0.1 * ($i - 1) + 1em;
    }
  }
}
</style>

{% assign tag_names = site.tags | sort_natural %}

{% for posts_by_tag in tag_names | sort_natural %}
{% endfor %}

{% include tag-cloud.html tag_names=tag_names %}

<hr>

  <div class="post-preview"> 
    {% for posts_by_tag in site.tags | sort_natural %} 
      <h2 id="{{ posts_by_tag | slugify }}" style="padding-top: 70px;"> {{ posts_by_tag }}  <i class="badge">{{ posts_by_tag | last | size }}</i></h2>
      <ul class="later on">
        {% for post in site.posts %}
          <a class="post-subtitle" href="#{{ post.url }}">
        <li>
          {% if post.title %}{{ post.title }}{% else %}{{ post.name }} {% endif %}
        <small class="post-meta"> - Posted on {{ post.updated | date: "%B %-d, %Y" }}</small>
        </li>
        </a>
        {% endfor %}
      </ul>
        <hr/>
    {% endfor %}

<hr />
<hr class="shaded">
