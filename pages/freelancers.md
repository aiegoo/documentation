---
title: "🌱freelancers"
keywords: freelancers
tags: [getting_started,drone]
hide: false
toc: true
sidebar: mydoc_sidebar
permalink: freelancers.html
summary: my freelancers I work with since 2018.
collection: freelancers
layout: page
---

## my 100 supporters
{% assign freelancers = site.freelancers %}
{% for freelancer in freelancers %}
<h2>
     <a href="{{ freelancer.url | prepend: site.baseurl }}">
     {{ freelancer.title }} - {{ freelancer.skills }}
     </a>
</h2>
<p> {{ freelancer.content | markdownify }} </p>
{% endfor %}
<p> hello from pages directory</p>

{% include links.html %}
