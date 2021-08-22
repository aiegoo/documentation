---
title: "🌿 drones"
keywords: drones
tags: [getting_started,drone]
hide: false
toc: true
sidebar: mydoc_sidebar
permalink: drones.html
summary: my drones I work with and at my disposal.
collection: drones
layout: page
---

## my drones
{% assign drones = site.drones %}
{% for drone in drones %}
<h2>
     <a href="{{ drone.url | prepend: site.baseurl }}">
     {{ drone.name }} - {{ drone.type }}
     </a>
</h2>
<p> {{ drone.content | markdownify }} </p>
{% endfor %}

{% include links.html %}
