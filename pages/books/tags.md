---
layout: page
title: "Book Tags"
permalink: /books/tags.html
sidebar: other_sidebar
---

<ul>
{% assign tags = site.books | map: "tags" | compact | join: "," | split: "," | uniq | sort %}
{% for t in tags %}
  <li><a href="{{ '/books/ai.html' | relative_url }}" {% unless t == 'ai' %}title="Create a page for {{ t }} like ai.md"{% endunless %}>{{ t }}</a></li>
{% endfor %}
</ul>