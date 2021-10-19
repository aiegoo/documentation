---
layout: portfolio
permalink: category.html
sidebar: other_sidebar
---
## categories in the post
<div class="well">
<style type="text/css">
.col-md-6 {
    width: 70% !important;
}
@media only screen and (max-width:767px){
    .col-md-6 {
        width: 100% !important;
    }
}
</style>
{% capture categories %}{% for category in site.categories %}{{ category | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign category = categories | split:',' | sort %}
{% for item in (0..site.categories.size) %}{% unless forloop.last %}
{% capture word %}{{ category[item] | strip_newlines }}{% endcapture %}
<h2 class="category" id="{{ word }}">{{ word }}</h2>
<ul>
{% for post in site.categories[word] %}{% if post.title != null %}
<li><span>{{ post.date | date: "%b %d" }}</span>» <a href="{{ site.baseurl}}{{ post.url }}">{{ post.title }}</a></li>
{% endif %}{% endfor %}
</ul>
{% endunless %}{% endfor %}
<br/><br/>
</div>


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


<div class="app">
{% assign topics = "" | split: ',' %}
{% for page in site.pages %}
  {% if page contains "categories" %}
  <!-- push topics into array -->
  {% assign topics = topics | push: categories %}
  {% capture category-item %}{{ page.categories | strip_newline }}{% endcapture %}    
<h6 class="post-meta category-h6 category" id="{{ category-item }}"> {{ category-item }} </h6>    
<ul class="topics">
    {% for category in page.categories | inspect %}
  <li><a href='{{ page.url }}'>{{ page.name }}  {{page.categories}} &#8672; {{ category }}&#8674; {{ page.path }}</a> {{ category.item }}</li>
    {% endfor %}
</ul>
    
  {% endif %}
{% endfor %}
<br/>

</div>
