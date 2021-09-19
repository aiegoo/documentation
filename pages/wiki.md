---
name: "🌱wiki home"
tags: [getting_started,wiki]
summary: "journal hopeful"
sidebar: other_sidebar
collection: wiki
permalink: /wiki.html
excerpt_separator: <!--more-->
date: 2021-08-26 12:42:03 +0900
toc: true
comment: false
updated: 2021-09-17 18:00:13 +0900
---

## wiki
{% assign wikis = site.wiki | sort:"date" | reverse %}
{% for pg in wikis %}
<h2>
     <a href="{{ pg.url | prepend: site.baseurl }}">
     {{ pg.name }} - {{ pg.updated }}
     </a>
</h2>
<span class="post-meta"><time datetime="{{ page.date | date_to_xmlschema }} itemprop='datePublished'"> {{ page.date | date: "%b %-d, %Y" }}</time></span>
<p>{{ pg.excerpt | markdownify | truncateword: 150 | strip_html }} </p>
{% endfor %}

{% include links.html %}