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

{% assign tag_names = "" | split: "|"  %}

{% for posts_by_tag in site.tags %}
  {% assign tag_names = tag_names | push: posts_by_tag.first %}
{% endfor %}

{% assign tag_names = tag_names | sort %}

{% include tag-cloud.html tag_names=tag_names %}

<hr>

<section class="posts-by-tags">
  {% for tag_name in tag_names %}
    <div>
      <h3 id="{{ tag_name }}">
        {{ tag_name | capitalize | replace: "_", " " }}
      </h3>

      {% for post in site.tags[tag_name] %}
        <a href="{{ post.url | prepend: baseurl }}">
          {{ post.title }}
        </a>
      {% endfor %}
    </div>
  {% endfor %}
</section>

{% for tag in site.tags %}
  <h3>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

<hr />

<h1>Tag cloud</h1>
<ul class="tag-cloud">
{% for tag in site.tags %}
  <li style="font-size: {{ tag | last | size | times: 100 | divided_by: site.tags.size | plus: 70  }}%">
    <a href="#{{ tag | first | slugize }}">
      {{ tag | first }}
    </a>
  </li>
{% endfor %}
</ul>

<div id="archives">
{% for tag in site.tags %}
  <div class="archive-group">
    {% capture tag_name %}{{ tag | first }}{% endcapture %}
    <h3 id="#{{ tag_name | slugize }}">{{ tag_name }}</h3>
    <a name="{{ tag_name | slugize }}"></a>
    {% for post in site.tags[tag_name] %}
    <article class="archive-item">
      <h4><a href="{{ root_url }}{{ post.url }}">{{post.title}}</a></h4>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>

<hr />

<div id="tagcloud">
{% for post in site.posts %}<>
  {% if post %}
    {% assign tags = post.tags %}
  {% endif %}
{% for page in site.pages %}
  {% if page %}
    {% assign tags = page.tags %}
  {% endif %}

  {% for tag in tags %}
<a href="#{{ tag[0] | slugify }}" class= "btn btn-default" style="font-size: {{ tag | last | size | times: 4 | plus: 90 }}%">
  <span cloass="fa fa-folder-open" aria-hidden="true">
  {{ tag[0] }} <i class="badge">{{ tag | last | size }}</i> hello!
  </span>
</a>
{% endfor %}

  <ul class="cloud">
  {% for sortedTag in sortedTags %}
    <li class="tag{{ site.tags[sortedTag] | last | size }}">{{ sortedTag | tag_link }}</li>
  {% endfor %}
  </ul>
</div>


{% assign tags = site.tags | sort %}
{% for tag in tags %}
 <span class="site-tag">
    <a href="/tag/{{ tag | first | slugify }}/"
        style="font-size: {{ tag  | size  |  times: 4 | plus: 80  }}%">
            {{ tag[0] | replace:',', ' ' }} ({{ tag | size }})
    </a>
</span>
{% endfor %}