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

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
