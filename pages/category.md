---
layout: portfolio
permalink: category.html
sidebar: other_sidebar
---

<div class="well">
{% for collection in site.collections %}
  <h6 class="post-meta category-h6">{{ collection.label }} collection categoy</h6>
  <ul class="post-list">
    {% for item in site[collection.label] %}
      <li>
      <time datetime="{{ item.date  | date_to_xmlschema }}" itemprop="datePublished">{{ item.date | date: "%b %-d" }}</time>» <a href="{{ item.url }}">{{ item.title }}</a><span> {% if item.tags != blank %} &#8674; {{ item.tags  | array_to_sentence_string }} {% endif %}</span></li>
    {% endfor %}
  </ul>

{% for wiki in site.wiki %}
{% assign category = wiki.categories | split:',' %}
{% for item in category %}{% unless forloop.last %}
{% if wiki.categories %}
<h3 class="category" id="{{ item }}">{{ item }}</h3>
<ul class="post-list">
{% for item in wiki.categories[item] %}{% if wiki.name != null %}
<li><span>{{ wiki.date | date: "%b %d" }}</span>» <a href="{{ site.baseurl}}{{ wiki.url }}">{{ wiki.name }}</a></li>
{% endif %}{% endfor %}
</ul>
{% endif %}{% endunless %}{% endif %}{% endfor %}
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
