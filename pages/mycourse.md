---
name: "🌿 mycourse"
keywords: mycourse
tags: [mycourse]
hide: false
toc: true
sidebar: other_sidebar
permalink: mycourse.html
summary: "courses I have based my skills on"
collection: mycourse
layout: page
complex_map: true
map_name: usermap_mycourse
box_number: 1
excerpt_separator: <!--more-->
---

{% include custom/series_mycourse_next.html %}

## my courses

{% assign mycourses = site.mycourse | sort: "date" | reverse %}
{% for mycourse in mycourses %}
<h2>
     <a href="{{ mycourses.url | prepend: site.baseurl }}">
     {{ mycourse.name }} - {{ mycourse.type }}
     </a>
</h2>
<p> {{ mycourse.excerpt | markdownify }} </p>
{% endfor %}

[**Preview**]({{page.link}})

{% include links.html %}
