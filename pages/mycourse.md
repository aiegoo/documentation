---
title: "🌿 drones"
keywords: mycourse
tags: [getting_started,mycourse]
hide: false
toc: true
sidebar: other_sidebar
permalink: mycourse.html
summary: "courses I have bases on"
collection: mycourse
layout: page
complex_map: true
map_name: usermap_mycourse
box_number: 1
excerpt_separator: <!--more-->
---

{% include custom/series_mycourse_next.html %}

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
