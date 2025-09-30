---
layout: page
title: "Books Library"
permalink: /books/index.html
sidebar: other_sidebar
toc: false
---

<style>
.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.card{border:1px solid #e5e7eb;border-radius:10px;background:#fff;box-shadow:0 6px 16px rgba(0,0,0,.06);padding:10px}
.card img{width:100%;height:180px;object-fit:cover;border-radius:8px}
.card h4{margin:8px 0 4px;font-size:1rem}
.card p{margin:0;color:#374151;font-size:.9rem}
@media (max-width:800px){.grid{grid-template-columns:repeat(2,1fr)}}
@media (max-width:520px){.grid{grid-template-columns:1fr}}
</style>

## All Books

<div class="grid">
{% assign items = site.books | sort: 'title' %}
{% for b in items %}
  <a class="card" href="{{ b.url | relative_url }}">
    {% if b.cover %}<img src="{{ b.cover | relative_url }}" alt="{{ b.title }} cover">{% endif %}
    <h4>{{ b.title }}</h4>
    <p>{{ b.excerpt | default: b.description | default: b.category }}</p>
  </a>
{% endfor %}
</div>