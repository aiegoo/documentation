---
name: "🌱wiki home"
tags: [getting_started,wiki]
summary: "journal hopeful"
sidebar: other_sidebar
collection: wiki
permalink: /wiki.html
excerpt_separator: <!--more-->
date: 2021-09-20 15:37:09 +0900
toc: true
comment: false
updated: 2021-09-17 3:38 PM
---

## wiki Home

<div class="home">
    <div class="post-list">
        {% for wiki in site.wiki | sort: wiki.updated | reverse %}
    <h2><a class="post-link" href="{{ wiki.url | remove: '/' }}">{{ wiki.name }}</a></h2>
        <span class="post-meta">{{ wiki.updated | date: "%b %-d, %Y" }} /
            {% for tag in wiki.tags %}
                <a href="{{ 'tag_' | append: tag | append: '.html'}}">{{tag}}</a>{% unless forloop.last %}, {% endunless%}
                {% endfor %}</span>
        <p>{% if page.summary %} {{ page.summary | strip_html | strip_newlines }} 
           {% else %} 
           {{ pg.excerpt | markdownify | truncatewords: 150 }} {% endif %}
        </p>
        {% endfor %}
        <p><a href="feed.xml" class="btn btn-primary navbar-btn cursorNorm" role="button">RSS Subscribe{{tag}}</a></p>

<hr />
        <p>See more wikis from the <a href="wiki_archive.html">Wiki Archive</a>. </p>
    </div>
</div>
{% include links.html %}