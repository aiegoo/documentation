---
layout: post
permalink: tag_tagcloud2.html
title: Tag cloud variation
summary: "add another variation of tag cloud with style"
---
<style type="text/css">
.tag-cloud{
    margin: 0px 0px 0px -5px;
    position: relative;
}

.tag-cloud-full-tag{
    transform: scale(1.0);
    transition: all 525ms ease-out;
    display: inline-block;
    padding: .1em;
    border-radius: 4px;
    position: relative;
}

.tag-cloud-full-tag:hover{
    transform: scale(1.35);
    background-color: $main-background;
    opacity: 1;
    z-index: 600;   
}

.tag-cloud-title{
    padding: 0px;  
}

.tag-cloud-size-1{
    font-size: .7em;
} 
.tag-cloud-size-2{
    font-size: .9em;
} 
.tag-cloud-size-3{
        font-size: 1.1em;
    } 
.tag-cloud-size-4{
    font-size: 1.25em;
} 
.tag-cloud-size-5{
    font-size: 1.5em;
} 
.tag-cloud-size-6{
    font-size: 1.7em;
}

.tag-cloud-quantity{
    font-size: .5em;
    margin-left: -.2em;
    z-index: 700;
}

</style>


<!-- Create empty arrays to push to -->
{% assign many_tags = '' | split: ',' %}
{% assign unique_tags = '' | split: ',' %}

<!-- get all tags -->
{% for c in site.collections %}
  <!-- Map and flatten -->
  {% assign collectionTags =  c.label[item] | map: 'item.tags' | join: ',' | split: ',' %}
  <!-- Push to tags -->
  {% for tag in collectionTags %}
    {% assign many_tags = many_tags | push: tag %}
    <p>{{ c.label[item][0] }}</p>
  {% endfor %}
{% endfor %}

<!-- Get Unique subject-tags -->
{% assign unique_tags = many_tags | uniq | sort  %}

<div class="tag-cloud">
 <!-- go through each tag, find content-items with that tag -->
{% for cloud-tag in unique_tags %}
  <!-- initiate an array to hold related content-items -->
  {% assign tags_posts = '' | split: ',' %}
  <!-- go through every collection (posts  is also a collection) -->
  {% for c in site.collections %}
    <!-- every item in that collection -->
    {% for content-item in c.label[item] %}
      <!-- every subject-tag that a content-item has -->
      {% for subtag in content-item.tags %}
        <!-- check if this content item matches the current tag and if so push-->
        {% if subtag .tag-cloud{
    margin: 0px 0px 0px -5px;
    position: relative;
}

.tag-cloud-full-tag{
    transform: scale(1.0);
    transition: all 525ms ease-out;
    display: inline-block;
    padding: .1em;
    border-radius: 4px;
    position: relative;
}

.tag-cloud-full-tag:hover{
    transform: scale(1.35);
    background-color: $main-background;
    opacity: 1;
    z-index: 600;   
}

.tag-cloud-title{
    padding: 0px;  
}

.tag-cloud-size-1{
    font-size: .7em;
} 
.tag-cloud-size-2{
    font-size: .9em;
} 
.tag-cloud-size-3{
        font-size: 1.1em;
    } 
.tag-cloud-size-4{
    font-size: 1.25em;
} 
.tag-cloud-size-5{
    font-size: 1.5em;
} 
.tag-cloud-size-6{
    font-size: 1.7em;
}

.tag-cloud-quantity{
    font-size: .5em;
    margin-left: -.2em;
    z-index: 700;
}
== cloud-tag %}
          {% assign tags_posts = wiki | push: content-item %}
        {% endif %}
      {% endfor %}
    {% endfor %}
  {% endfor %}
  
  <!-- check number of content-items (note, trying simple numeric index had some issues with liquid )-->
  <!-- as you make more posts you will want to change the thresholds for size to your taste -->
  {% assign tag-quant = tags_posts | size %}
  {% if tag-quant < 3 %}
    {% assign tag-cloud-size =  "tag-cloud-size-1" %}
  {% elsif tag-quant < 5 %}
      {% assign tag-cloud-size =  "tag-cloud-size-2" %}
  {% elsif tag-quant < 8 %}
      {% assign tag-cloud-size =  "tag-cloud-size-3" %}
  {% elsif tag-quant < 12 %}
      {% assign tag-cloud-size =  "tag-cloud-size-4" %}
  {% elsif tag-quant < 18 %}
      {% assign tag-cloud-size =  "tag-cloud-size-5" %}
  {% else %}
      {% assign tag-cloud-size =  "tag-cloud-size-6" %}
  {% endif %}

  <!-- Now generate HTML for the given tag -->
  <!-- The links are to an index page that uses very similar code -->
  {% if tag-quant > 0 %} <!-- catch corner case of blank element in array -->
    <a href="/site-index.html#{{ cloud-tag|slugify }}">
      <span class="tag-cloud-full-tag" >
        <span class="tag-cloud-title {{tag-cloud-size}}">{{cloud-tag}}</span>
        <span class="tag-cloud-quantity">({{tag-quant}})</span>
      </span>     
    </a>    
  {% endif %}
{% endfor %}<!-- do it again for the next tag - Yes, holy-loop-ville -->

<!-- NOTE - remove all comments as dozens of them will show up in the generated HTML -->
</div>