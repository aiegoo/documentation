---
title: "🌱freelancers"
keywords: freelancers
tags: [getting_started,drone]
hide: false
toc: false
sidebar: mydoc_sidebar
permalink: freelancers.html
summary: my freelancers I work with.
collection: freelancers
entries_layout: grid
classes: wide
layout: page
---

{% for freelancers in site.freelancers %}

<a href="{{ freelancers.url | prepend: site.baseurl }}">
  <h2>{{ freelancers.title }}</h2>
</a>

<p class="post-excerpt">{{ themes.description | truncate: 160 }}</p>

{% endfor %}  

{% include links.html %}
