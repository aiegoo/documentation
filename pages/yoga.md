---
title: "🌱yoga"
keywords: yoga poses
tags: [yoga]
hide: false
toc: true
sidebar: other_sidebar
permalink: yoga.html
excerpt_separator: <!--more-->
summary: my passion my life
collection: yoga
layout: page
---

{% include topnav.html %}
## yoga books
{% assign yoga = site.yoga | sort:"date" | reverse %}
{% for yoga in yoga %}
<h2>
     <a href="{{ yoga.url | prepend: site.baseurl }}">
     {{ yoga.name }} - {{ yoga.category }}
     </a>
</h2>
<p> {{ yoga.excerpt | markdownify | truncateword: 50 | strip_html }} </p>
{% endfor %}

{% include links.html %}
