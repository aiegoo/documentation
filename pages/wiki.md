---
title: "🌱ROOT"
layout: page
summary: "journal hopeful"
sidebar: other_sidebar
collection: wiki
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
toc: true
public: true
comment: false
updated: 2021-09-17 18:00:13 +0900
---


## wiki
{% assign wiki = site.wiki | sort:"date" | reverse %}
{% for wiki in wiki %}
<h2>
     <a href="{{ wiki.url | prepend: site.baseurl }}">
     {{ wiki.name }} - {{ wiki.updated }}
     </a>
</h2>
<p> {{ wiki.excerpt | markdownify | truncateword: 50 | strip_html }} </p>
{% endfor %}