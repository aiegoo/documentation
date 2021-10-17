---
layout: post
permalink: tag_tagcloud3.html
title: Tag cloud variation
summary: "add another variation of tag cloud with style"
---

{% assign maxcount = 1 %}

{% for tagposts in site.tags %}
    {% assign tagcount = tagposts[1] | size %}
    {% if tagcount > maxcount %}
        {% assign maxcount = tagcount %}
    {% endif %}
{% endfor %}

{% assign sden = maxcount | minus: 1 %}
{% if sden == 0 %}
    {% assign sden = 1 %}
{% endif %}

{% for tagposts in site.tags %}
    {% assign snum = tagposts[1] | size | minus: 1 %}
    {% assign s = 400 | times: snum | divided_by: sden | plus: 100 %}

    <p style="font-size: {{ s }}%">
        {{ tagposts[0] }}
    </p>
{% endfor %}