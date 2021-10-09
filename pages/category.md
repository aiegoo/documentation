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
{% endfor %}
{% for post in site.wiki %}
{% assign category = page.categories | split:',' | sort %}
{% for item in category %}
<h2 class="category" id="{{ item }}">{{ item }}</h2>
<ul>
{% for post in wiki.categories[item] %}{% if post.name != null %}
<li><span>{{ post.date | date: "%b %d" }}</span>» <a href="{{ site.baseurl}}{{ item.url }}">{{ item.name }}</a></li>
{% endif %}
{% endfor %}
</ul>
{% endfor %}
{% endfor %}
<br/>
</div>


<div class="home">
<ul class="topics">
{% capture category %}
  {% for category in drones.categories %}
    {{ category[0] }}
  {% endfor %}
{% endcapture %}
{% assign sorted_category = category | split: ' ' | sort %}
  {% for category in sorted_category %}
  <li class="topic-head"><b> {{ category }} ({{ drones.categories | size }} topics)</b>
    <ul class="subnavlist">
    {% assign topics = drones.categories %}
    {% for topic in topics %}
      <li class="topic-item {% if topic.url == page.url %}active{% endif %}">
      <a href="/{{ baseurl }}{{ page.url }}"> {{ page.name}}</a>
      </li>
    {% endfor %}
    </ul>
  </li>
  {% endfor %}
</ul>
<br/>

{% assign topics = "" | split: ',' %}
{% for page in site.pages[categories] %}
  {% if page contains "categories" %}
  <!-- push topics into array -->
  {% assign topics = topics | push: drones %}
  <li>{{ topics }}</li>
  {% endif %}
{% endfor %}

</div>