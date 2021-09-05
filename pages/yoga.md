---
title: "🌱yoga"
keywords: yoga poses
tags: [yoga]
hide: false
toc: true
sidebar: false
permalink: yoga.html
excerpt_separator: <!--more-->
summary: my passion my life
collection: yoga
layout: page
---

## yoga books
{% assign yoga = site.yoga %}
{% for yoga in yoga %}
<h2>
     <a href="{{ yoga.url | prepend: site.baseurl }}">
     {{ yoga.name }} - {{ yoga.category }}
     </a>
</h2>
<p> {{ yoga.content | markdownify | truncateword: 50 }} </p>
{% endfor %}

{% include links.html %}
