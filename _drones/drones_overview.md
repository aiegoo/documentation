---
layout: page
name: "drones overview"
sidebar: other_sidebar
permalink: drones_overview.html
categories: "drones"
excerpt_separator: <!--more-->
complex_map: true
map_name: usermap_drones
box_number: 1
link: https://aiegoo.github.io/gcs-java-node/
tags: mydrone
folder: '/.'
---

<div class="home">
    <div class="post-list">
    {% assign drones = site.drones %}
     {% for drone in drones %}
        {% if drone.tags contains "mydrone" %}
          <a class="post-link leaguegothic dronesoverview" href="{{ drone.url | prepend: site.baseurl }}" style="color: pink;">
              {{ drone.name }} - {{ drone.type }}
              </a>
          <span class="post-meta">{{ drone.updated | date: "%b %-d, %Y" }} /
               {% for tag in drone.tags %}
               <a href="{{ 'tag_' | append: tag | append: '.html'}}">{{tag}}</a>
               {% unless forloop.last %}, {% endunless %}{% endfor %}</span>
               <p class="post-meta tag-home" style="border-bottom: 1px solid #6f6f6f45; padding-bottom: 15px;">{% if drone.summary %} {{ drone.summary }} {% else %} {{ page.excerpt }} {% endif %}</p>
        {% endif %}
     {% endfor %}
        <p><a href="feed.xml" class="btn btn-primary navbar-btn cursorNorm" role="button">RSS Subscribe{{tag}}</a></p>

    </div><!-- end of postlist -->
</div><!-- end of home  -->

{% include image.html file="drones/hw_gallery/drone_inflight.jpg" caption="Test flight after assembly" %}


Our class team made its first test flight after assembly.

|---
| 
| :-:
| ![demo](https://github.com/aiegoo/Applying_EANNs/raw/master/Images/Demo.gif)

[**Preview**]({{page.link}})
