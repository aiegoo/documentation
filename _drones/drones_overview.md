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
## Drones home
<div class="home">
    <div class="post-list">
    {% assign drones = site.drones %}
     {% for drone in drones %}
          <a class="post-link" href="{{ drone.url | prepend: site.baseurl }}">
              {{ drone.name }} - {{ drone.type }}
              </a>
          <span class="post-meta">{{ drone.updated | date: "%b %-d, %Y" }} /
               {% for tag in drone.tags %}
               <a href="{{ 'tag_' | append: tag | append: '.html'}}">{{tag}}</a>{% unless forloop.last %}, {% endunless%}
               {% endfor %}</span>
               <p>{% if drone.summary %} {{ drone.summary | strip_html | strip_newlines }} 
                    {% else %} {{ drone.excerpt | markdownify | truncatewords: 150 }} 
                  {% endif %}
               </p>
     {% endfor %}
        <p><a href="feed.xml" class="btn btn-primary navbar-btn cursorNorm" role="button">RSS Subscribe{{tag}}</a></p>

<hr />
    </div><!-- end of postlist -->
</div><!-- end of home  -->

{% include image.html file="drones/hw_gallery/drone_inflight.jpg" caption="Test flight after assembly" %}


Our class team made its first test flight after assembly.

|---
| 
| :-:
| ![demo](https://github.com/aiegoo/Applying_EANNs/raw/master/Images/Demo.gif)

[**Preview**]({{page.link}})
