---
layout: post
title: "how to sort and size tagged post sizes"
name: "Jekyll-tag-count"
tags: [jekyll]
permalink: 2021-10-18-Jekyll-tag-count.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: jekyll
keywords: "tag cloud"
summary: "Mon, Oct 18, 21, without using plugins, create array of posts to get the size of the tag"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-10-18T11:18:03 +0900
updated: 2021-10-18 11:18
---
* TOC
{:toc}

## issues
- common google solution
> place a tag name with size as in this example

{% highlight ruby %}
{{ tag | last | size }}

{{ tag | last | size | times: 100 | divided_by: site.tags.size | plus: 70  }}
{% endhighlight %}

{% highlight ruby %}
{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[1].size | plus: 1000 }}#{{ tag[0] }}#{{ tag[1].size }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}
{% for tag in sortedtags reversed %}
    {% assign tagitems = tag | split: '#' %}
    <li><a href="/tags/#{{ tagitems[1] }}">{{ tagitems[1] }} ({{ tagitems[2] }})</a></li>
{% endfor %}
{% endhighlight %}

## solution
[solution_blog](https://christianspecht.de/tags/)
whose solution and explanation can be found [here](https://github.com/christianspecht/blog/blob/49b67d1d86a41f00f705804f69dbae3f6ee17f9a/src/_layouts/default.html#L120) and [stackoverflow](https://stackoverflow.com/questions/24700749/how-do-you-sort-site-tags-by-post-count-in-jekyll/24702179)
{% include taglogic.html %}

## my implemenation
- this has been bugging me for several days. Size method results in inaccurate counts of posts and last or unless forloop.last didn't even work in my case.
> here is the code;
{% highlight ruby %}
{% raw %}
{% capture tags %}
        {% for tag in site.tags %}
        {{ tag[0] }}#{{ tag[1].size}}
        {% endfor %}
    {% endcapture %}
    {% assign sortedTags = tags | split:' ' | sort %} 
    {% for tag in tagList %}
        <div class="archive-group invisible" id="{{tag}}">
            <h3 id="{{tag}}">#{{ tag }}  
                {% assign tagitems = tag | split: '#' %}              
                {% for tag in sortedtags %}
                <i class="badge">{{ tagitems[1] }}</i>
                {% endfor %}
            </h3>
        </div>
{% endraw %}
{$ endhighlight %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
