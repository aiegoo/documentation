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
{% assign yoga = site.yoga | sort:"order_number" %}
{% for yoga in yoga %}
<h2>
     <a href="{{ yoga.url | prepend: site.baseurl }}">
     {{ yoga.name }} - {{ yoga.category }}
     </a>
</h2>
<p> {{ yoga.excerpt | markdownify | truncateword: 50 }} </p>
{% endfor %}

{% include links.html %}
