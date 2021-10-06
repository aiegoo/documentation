---
layout: default
permalink: category.html
sidebar: other_sidebar
---

<div class="home">
{% for post in site.posts | sort: "date" %}
{% assign category = post.categories | split:',' %}
{% for item in category %}{% unless forloop.last %}
<h2 class="category" id="{{ item }}">{{ item }}</h2>
<ul>
{% for post in post.categories[item] %}{% if post.name != null %}
<li><span>{{ post.date | date: "%b %d" }}</span>» <a href="{{ site.baseurl}}{{ post.url }}">{{ post.name }}</a></li>
{% endif %}{% endfor %}
</ul>
{% endunless %}{% endfor %}
{% endfor %}
<br/><br/>

{% for post in site.wiki | sort: "date" %}
{% assign category = page.categories | split:',' | sort %}
{% for item in category %}{% unless forloop.last %}
<h2 class="category" id="{{ item }}">{{ item }}</h2>
<ul>
{% for post in wiki.categories[item] %}{% if post.name != null %}
<li><span>{{ post.date | date: "%b %d" }}</span>» <a href="{{ site.baseurl}}{{ item.url }}">{{ item.name }}</a></li>
{% endif %}{% endfor %}
</ul>
{% endunless %}{% endfor %}
{% endfor %}
<br/><br/>
</div>
