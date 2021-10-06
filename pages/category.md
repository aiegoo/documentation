---
layout: default
permalink: category.html
sidebar: other_sidebar
---

<div class="home">
{% for post in site.posts | sort: "date" %}
{% assign category = categories | split:',' | sort %}
{% for item in (post.categories.size) %}{% unless forloop.last %}
{% assign word = category[item] | strip_newlines %}
<h2 class="category" id="{{ word }}">{{ word }}</h2>
<ul>
{% for post in site.categories[word] %}{% if post.title != null %}
<li><span>{{ post.date | date: "%b %d" }}</span>» <a href="{{ site.baseurl}}{{ post.url }}">{{ post.title }}</a></li>
{% endif %}{% endfor %}
</ul>
{% endunless %}{% endfor %}
{% endfor %}
<br/><br/>
</div>
