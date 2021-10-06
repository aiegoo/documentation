---
layout: default
permalink: category.html
sidebar: other_sidebar
---

<div class="app">
{% for collection in site.collections %}
  <h6 class="post-meta">List published as {{ collection.label }} collection</h6>
  <ul class="post-list">
    {% for item in site[collection.label] %}
      <li><span>{{ page.date | date: "%b %d" }}</span>»<a href="{{ item.url }}">{{ item.title }}</a></li>
    {% endfor %}
  </ul>

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
