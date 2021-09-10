---
title: "🌿 drones"
keywords: drones
tags: [getting_started,drone]
hide: false
toc: true
sidebar: other_sidebar
permalink: drones.html
summary: my drones I work with and at my disposal.
collection: drones
layout: page
complex_map: true
map_name: usermap_drones
box_number: 1
excerpt_separator: <!--more-->
---

{% include custom/series_matlab_next.html %}
## my drones
{% assign drones = site.drones |sort: "date" | reverse %}
{% for drone in drones %}
<h2>
     <a href="{{ drone.url | prepend: site.baseurl }}">
     {{ drone.name }} - {{ drone.type }}
     </a>
</h2>
<p> {{ drone.excerpt | markdownify }} </p>
{% endfor %}

[**Preview**]({{page.link}})

{% include links.html %}
