---
title: "🌱freelancers"
keywords: freelancers
tags: [getting_started,drone]
hide: false
toc: false
sidebar: mydoc_sidebar
permalink: freelancers.html
summary: my freelancers I work with since 2018.
collection: freelancers
layout: page
---

## my 100 supporters

{% for freelancer in site.freelancers %}
<h2>
     <a href="{{ freelancer.url | prepend: site.baseurl }}">
     {{ freelancer.name }} - {{ freelancer.skills }}
     </a>
</h2>
<p>{{ freelancer.content | markdownify }}</p>
{% endfor %}

{% include links.html %}
