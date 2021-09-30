---
name: "🌱rflysim"
keywords: rflysim course
tags: [rflysim]
hide: false
toc: true
sidebar: other_sidebar
permalink: rflysim.html
excerpt_separator: <!--more-->
summary: rflysim course lessons overview
collection: wiki
layout: page
date: 2021-09-28 11:40:03 +0900
updated: 2021-09-30 10:19 AM
repos: aiegoo/documentation
complex_map: true
map_name: rfly
box_number: 4
folder: rflysim
next_post: rflysim-lesson1.html
previous_post: rflysim-lesson13.html
---

## rflysim course book
{% if page.box_number == 4 %}
{% assign rflysim = site.wiki | sort:"date" %}
{% for page in rflysim %}
<h2>
     <a href="{{ page.url | prepend: site.baseurl }}">
     {{ page.name }} - {{ page.updated }}
     </a>
</h2>
<span class="post-meta"><time datetime="{{ page.date | date_to_xmlschema }} itemprop='datePublished'"> {{ page.date | date: "%b %-d, %Y" }}</time></span>
<p> {{ page.summary | markdownify }} </p>
{% endfor %}
{% endif %}

{% include links.html %}
