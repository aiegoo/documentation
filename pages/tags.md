---
title: "🌱tag logic"
tags: [special_layouts]
last_updated: August 30, 2021
keywords: shuffle, card layout, dynamic grid, doc portal, support portal
summary: "This layout shows an example of a knowledge-base style navigation system, where there is no hierarchy, just groups of pages that have certain tags."
permalink: tags.html
sidebar: false
collection: tags
layout: page
folder: mydoc
---


{% if site.output == "pdf" %}
{{site.data.alerts.note}} The content on this page doesn't display well on PDF, but I included it anyway so you could see the problems this layout poses if you're including it in PDF.  {{site.data.alerts.end}}
{% endif %}

{% unless site.output == "pdf" %}
<script src="js/jquery.shuffle.min.js"></script>
<script src="js/jquery.ba-throttle-debounce.min.js"></script>
{% endunless %}


<div class="filter-options">
  <button class="btn btn-primary tag-pink" data-group="all">All</button>
  <button class="btn btn-primary" data-group="getting_started">Getting Started</button>
  <button class="btn btn-primary" data-group="formatting">Formatting</button>
  <button class="btn btn-primary" data-group="publishing">Publishing</button>
  <button class="btn btn-primary" data-group="content-types">Content types</button>
  <button class="btn btn-primary" data-group="single_sourcing">Single Sourcing</button>
  <button class="btn btn-primary" data-group="special_layouts">Special Layouts</button>
  <button class="btn btn-primary" data-group="wiki">wiki</button>
  <button class="btn btn-primary" data-group="rflysim">rflysim</button>
  <button class="btn btn-primary" data-group="yoga">yoga</button>
  <button class="btn btn-primary" data-group="books">books</button>
  <button class="btn btn-primary" data-group="api">API</button>
  <button class="btn btn-primary" data-group="jekyll">jekyll</button>
  <button class="btn btn-primary" data-group="projects">projects</button>
  <button class="btn btn-primary" data-group="drones">drones</button>
  <button class="btn btn-primary" data-group="python">python</button>
</div>

<div id="grid" class="row">
<div class="col-xs-6 col-sm-4 col-md-6" data-groups='["python"]'>
            <div class="panel panel-default">
            <div class="panel-heading">python</div>
            <div class="panel-body">
              Contents related to python contents are tagged. 
              <ul>
            {% for page in site.pages %}
            {% for tag in page.tags %}
            {% if tag == "python" %}
              <li><a href="{{page.url | remove: '/'}}">{% if page.title %} {{page.title}} {% else %} {{ page.name }} {% endif %}</a></li>
            {% endif %}
            {% endfor %}
            {% endfor %} 
              </ul>
            </div>
        </div>    
</div>

<div class="col-xs-6 col-sm-4 col-md-6" data-groups='["drones"]'>
            <div class="panel panel-default">
            <div class="panel-heading">Drones</div>
            <div class="panel-body">
              Contents related to drones are tagged. 
              <ul>
            {% for page in site.pages %}
            {% for tag in page.tags %}
            {% if tag == "drones" %}
              <li><a href="{{page.url | remove: '/'}}">{% if page.title %} {{page.title}} {% else %} {{ page.name }} {% endif %}</a></li>
            {% endif %}
            {% endfor %}
            {% endfor %} 
              </ul>
            </div>
        </div>    
</div>

<div class="col-xs-6 col-sm-4 col-md-6" data-groups='["projects"]'>
            <div class="panel panel-default">
            <div class="panel-heading">Projects</div>
            <div class="panel-body">
              Contents related to my projects are tagged. 
              <ul>
            {% for page in site.pages %}
            {% for tag in page.tags %}
            {% if tag == "projects" %}
              <li><a href="{{page.url | remove: '/'}}">{% if page.title %} {{page.title}} {% else %} {{ page.name }} {% endif %}</a></li>
            {% endif %}
            {% endfor %}
            {% endfor %} 
              </ul>
            </div>
        </div>    
</div>

<div class="col-xs-6 col-sm-4 col-md-6" data-groups='["jekyll"]'>
            <div class="panel panel-default">
            <div class="panel-heading">Jekyll</div>
            <div class="panel-body">
              Contents related to Jekyll are tagged. 
              <ul>
            {% for page in site.pages %}
            {% for tag in page.tags %}
            {% if tag == "jekyll" %}
              <li><a href="{{page.url | remove: '/'}}">{% if page.title %} {{page.title}} {% else %} {{ page.name }} {% endif %}</a></li>
            {% endif %}
            {% endfor %}
            {% endfor %} 
              </ul>
            </div>
        </div>    
</div>

<div class="col-xs-6 col-sm-4 col-md-6" data-groups='["api"]'>
        <div class="panel panel-default">
            <div class="panel-heading">API</div>
            <div class="panel-body">
              Contents related to apis are tagged. 
              <ul>
            {% for page in site.pages %}
            {% for tag in page.tags %}
            {% if tag == "api" %}
              <li><a href="{{page.url | remove: '/'}}">{% if page.title %} {{page.title}} {% else %} {{ page.name }} {% endif %}</a></li>
            {% endif %}
            {% endfor %}
            {% endfor %} 
              </ul>
            </div>
        </div>    
</div>

<div class="col-xs-6 col-sm-4 col-md-6" data-groups='["rflysim"]'>
        <div class="panel panel-default">
            <div class="panel-heading">rflysim</div>
            <div class="panel-body">
              rflysim category files tagged 'rflysim' 
              <ul>
            {% for page in site.pages %}
            {% for tag in page.tags %}
            {% if tag == "rflysim" %}
              <li><a href="{{page.url | remove: '/'}}">{% if page.title %} {{page.title}} {% else %} {{ page.name }} {% endif %}</a></li>
            {% endif %}
            {% endfor %}
            {% endfor %} 
              </ul>
            </div>
        </div>

</div>

<div class="col-xs-6 col-sm-4 col-md-6" data-groups='["books"]'>
        <div class="panel panel-default">
            <div class="panel-heading">books</div>
            <div class="panel-body">
              books category files tagged 'books' 
              <ul>
            {% for page in site.pages %}
            {% for tag in page.tags %}
            {% if tag == "books" %}
              <li><a href="{{page.url | remove: '/'}}">{% if page.title %} {{page.title}} {% else %} {{ page.name }} {% endif %}</a></li>
            {% endif %}
            {% endfor %}
            {% endfor %} 
              </ul>
            </div>
        </div>

</div>

<div class="col-xs-6 col-sm-4 col-md-6" data-groups='["yoga"]'>
        <div class="panel panel-default">
            <div class="panel-heading">yoga</div>
            <div class="panel-body">
              yoga category files tagged 'yoga' 
              <ul>
            {% for page in site.pages %}
            {% for tag in page.tags %}
            {% if tag == "yoga" %}
              <li><a href="{{page.url | remove: '/'}}">{% if page.title %} {{page.title}} {% else %} {{ page.name }} {% endif %}</a></li>
            {% endif %}
            {% endfor %}
            {% endfor %} 
              </ul>
            </div>
        </div>

</div>

<div class="col-xs-6 col-sm-4 col-md-6" data-groups='["getting_started"]'>
        <div class="panel panel-default">
            <div class="panel-heading">Getting started</div>
            <div class="panel-body">
              If you're getting started with Jekyll, see the links in this section. It will take you from the beginning level to comfortable. 
              <ul>
            {% for page in site.pages %}
            {% for tag in page.tags %}
            {% if tag == "getting_started" %}
              <li><a href="{{page.url | remove: '/'}}">{% if page.title %} {{page.title}} {% else %} {{ page.name }} {% endif %}</a></li>
            {% endif %}
            {% endfor %}
            {% endfor %} 
              </ul>
            </div>
        </div>

</div>

<div class="col-xs-6 col-sm-4 col-md-6" data-groups='["content-types"]'>
    <div class="panel panel-default">
        <div class="panel-heading">Content types</div>
        <div class="panel-body">
            This section lists different content types and how to work with them.
            <ul>
                {% for page in site.pages %}
                {% for tag in page.tags %}
                {% if tag == "content-types" %}
                <li><a href="{{page.url | remove: '/'}}">{% if page.title %} {{page.title}} {% else %} {{ page.name }} {% endif %}</a></li>
                {% endif %}
                {% endfor %}
                {% endfor %}
            </ul>
        </div>
    </div>
    
</div>

<div class="col-xs-6 col-sm-4 col-md-6" data-groups='["formatting"]'>
        <div class="panel panel-default">
            <div class="panel-heading">Formatting</div>
            <div class="panel-body">
              These topics get into formatting syntax, such as images and tables, that you'll use on each of your pages: 
              <ul>
            {% for page in site.pages %}
            {% for tag in page.tags %}
            {% if tag == "formatting" %}
              <li><a href="{{page.url | remove: '/'}}">{% if page.title %} {{page.title}} {% else %} {{ page.name }} {% endif %}</a></li>
            {% endif %}
            {% endfor %}
            {% endfor %}
              </ul>
            </div>
        </div>

</div>

<div class="col-xs-6 col-sm-4 col-md-6" data-groups='["single_sourcing"]'>      
  <div class="panel panel-default">
            <div class="panel-heading">Single Sourcing</div>
            <div class="panel-body">These topics cover strategies for single_sourcing. Single sourcing refers to strategies for re-using the same source in different outputs for different audiences or purposes.
            <ul>
            {% for page in site.pages %}
            {% for tag in page.tags %}
            {% if tag == "single_sourcing" %}
              <li><a href="{{page.url | remove: '/'}}">{% if page.title %} {{page.title}} {% else %} {{ page.name }} {% endif %}</a></li>
            {% endif %}
            {% endfor %}
            {% endfor %} 
            </ul>
        </div>
      </div>

</div>

<div class="col-xs-6 col-sm-4 col-md-6" data-groups='["publishing"]'>
    <div class="panel panel-default">
        <div class="panel-heading">Publishing</div>
        <div class="panel-body">When you're building, publishing, and deploying your Jekyll site, you might find these topics helpful.
            <ul>
        {% for page in site.pages %}
        {% for tag in page.tags %}
        {% if tag == "publishing" %}
          <li><a href="{{page.url | remove: '/'}}">{% if page.title %} {{page.title}} {% else %} {{ page.name }} {% endif %}</a></li>
        {% endif %}
        {% endfor %}
        {% endfor %}
            </ul>
        </div>
    </div>

</div>

<div class="col-xs-6 col-sm-4 col-md-6" data-groups='["special_layouts"]'>
      <div class="panel panel-default">
        <div class="panel-heading">Special Layouts</div>
        <div class="panel-body">
          These pages highlight special layouts outside of the conventional page and TOC hierarchy.
          <ul>
        {% for page in site.pages %}
        {% for tag in page.tags %}
        {% if tag == "special_layouts" %}
              <li><a href="{{page.url | remove: '/'}}">{% if page.title %} {{page.title}} {% else %} {{ page.name }} {% endif %}</a></li>
        {% endif %}
        {% endfor %}
        {% endfor %} 
          </ul>
        </div>
    </div>

</div>

<div class="col-xs-6 col-sm-4 col-md-6" data-groups='["wiki"]'>
        <div class="panel panel-default">
            <div class="panel-heading">wiki</div>
            <div class="panel-body">
              In the wiki foler, I have created three categories of blog, rflysim and wiki (default): 
              <ul>
            {% for page in site.pages %}
            {% for tag in page.tags %}
            {% if tag == "wiki" %}
              <li><a href="{{page.url | remove: '/'}}">{% if page.title %} {{page.title}} {% else %} {{ page.name }} {% endif %}</a></li>
            {% endif %}
            {% endfor %}
            {% endfor %}
              </ul>
            </div>
        </div>

</div>
          <!-- sizer -->
      <div class="col-xs-6 col-sm-4 col-md-1 shuffle_sizer"></div>
    </div><!-- /#grid -->
{% unless site.output == "pdf" %}
{% include initialize_shuffle.html %}
{% endunless %}
{{site.data.alerts.note}} This was mostly an experiment to see if I could break away from the hierarchical TOC and provide a different way of arranging the content. However, this layout is somewhat problematic because it doesn't allow you to browse other navigation options on the side while viewing a topic.{{site.data.alerts.end}}

