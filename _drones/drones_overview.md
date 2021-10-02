---
layout: page
name: "drones overview"
sidebar: other_sidebar
permalink: drones_overview.html
category: "drones"
excerpt_separator: <!--more-->
complex_map: true
map_name: usermap_drones
box_number: 1
link: https://36io.co
---

{% include image.html file="drones/hw_gallery/drone_inflight.jpg" caption="Test flight after assembly" %}


Our class team made its first test flight after assembly.



|---
| 
| :-:
| ![demo](https://github.com/aiegoo/Applying_EANNs/raw/master/Images/Demo.gif)

## Wiki home
<div class="home">
    <div class="post-list">
    {% assign drones = site.drones %}
     {% for drone in drones reversed %}
          <a class="post-link" href="{{ wiki.url | remove: '/' }}">{{ drone.name }}</a>
          <span class="post-meta">{{ drone.updated | date: "%b %-d, %Y" }} /
          {% for tag in drone.tags %}
                <a href="{{ 'tag_' | append: tag | append: '.html'}}">{{tag}}</a>{% unless forloop.last %}, {% endunless%}
                {% endfor %}</span>
               <p>{% if drone.summary %} {{ drone.summary | strip_html | strip_newlines }} 
          {% else %} {{ drone.excerpt | markdownify | truncatewords: 150 }} {% endif %}
               </p>
     {% endfor %}
        <p><a href="feed.xml" class="btn btn-primary navbar-btn cursorNorm" role="button">RSS Subscribe{{tag}}</a></p>

<hr />
        <p>See more wikis from the <a href="drone_archive.html">Wiki Archive</a>. </p>
    </div>
</div>

[**Preview**]({{page.link}})
