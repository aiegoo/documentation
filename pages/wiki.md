---
name: "🌱wiki home"
tags: [getting_started,wiki]
sidebar: other_sidebar
collection: wiki
permalink: wiki.html
excerpt_separator: <!--more-->
date: 2021-09-20 15:37:09 +0900
toc: false
comment: false
updated: 2021-10-11 3:38 AM
---

## Wiki home
<div class="well">
<style type="text/css">
.col-md-6 {
    width: 70% !important;
}
</style>
    <div class="post-list" style="line-height: 1.1;">
     {% for wiki in site.wiki reversed %}
          <a class="post-link" href="{{ wiki.url | remove: '/' }}" style="color: pink;">{{ wiki.name }} </a>
          <span class="post-meta">{{ wiki.updated | date: "%b %-d, %Y" }} /
          {% for tag in wiki.tags %}
                <a href="{{ 'tag_' | append: tag | append: '.html'}}">{{tag}}</a>{% unless forloop.last %}, {% endunless%}
                {% endfor %}</span>
               <p>{% if wiki.summary %} {{ wiki.summary | strip_html | strip_newlines }} 
          {% else %} {{ wiki.excerpt | markdownify | truncatewords: 150 }} {% endif %}
               </p>
     {% endfor %}
        <p><a href="feed.xml" class="btn btn-primary navbar-btn cursorNorm" role="button">RSS Subscribe{{tag}}</a></p>

<hr />
        <p>See more wikis from the <a href="wiki_archive.html">Wiki Archive</a>. </p>
    </div>
</div>
{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}

{% include footer.html %}

{% comment %} Copyright {% endcomment %}