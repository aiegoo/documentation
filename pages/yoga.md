---
name: "🌱yoga"
keywords: yoga poses
tags: [yoga]
hide: false
toc: true
sidebar: other_sidebar
permalink: yoga.html
excerpt_separator: <!--more-->
summary: my passion my life
collection: yoga
layout: page
---

## yoga books

{% assign yoga = site.yoga | sort:"date" | reverse %}
{% for yoga in yoga %}
<h2>
     <a href="{{ yoga.url | prepend: site.baseurl }}">
     {{ yoga.name }} - {{ yoga.keywords }} - {{ yoga.updated }}
     </a>
</h2>
<span class="post-meta"><time datetime="{{ page.date | date_to_xmlschema }} itemprop='datePublished'"> {{ page.date | date: "%b %-d, %Y" }}</time></span>
<p> {{ yoga.excerpt | markdownify | truncateword: 50 | strip_html }} </p>
{% endfor %}

{% include links.html %}
