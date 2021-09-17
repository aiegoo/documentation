---
title: "🌱wiki home"
tags: [getting_started,wiki]
summary: "journal hopeful"
sidebar: other_sidebar
collection: wiki
permalink: /wiki.html
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
toc: true
comment: false
updated: 2021-09-17 18:00:13 +0900
---

## wiki
{% assign wiki = site.wiki | sort:"date" | reverse %}
{% for wiki in wikis %}
<h2>
     <a href="{{ wiki.url | prepend: site.baseurl }}">
     {{ wiki.title }} - {{ wiki.updated }}
     </a>
</h2>
<p> {{ wiki.excerpt | markdownify | truncateword: 50 | strip_html }} </p>
{% endfor %}