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
updated: 2021-10-19 9:29 AM
---
* TOC
{:toc}

## my workig  setup

- various trials and logic implementation
> default : uses buttons and tabs to sort and fetch tagged lists in a table
[site]({{ site.baseurl}}tags)
* how it works;
> in includes/taglogic.html, you will find the front-end setup and the shopify scripts where pages and tags are processed.
{% raw %}
    {% assign thisTag = page.tagName %}
  {% for page in site.pages %}
    {% for tag in page.tags %}
{% endraw %}

> Three variations: there are two major distinct categories in building tag cloud; one uses data where you store generated taglist, tagmap and sitemaps. They are accessible through site.data[...], which is quite handy. But it's actually two step process; one to generate the data before your script is designed to tab later on. Another common is to write the scripts to loop through the data to return the values in your logics. 
[variation1]({{ site.baseurl }}tag#python)
* this is the main feature where font-size is determined by the size or frequency of the tags or posts can be calculated. Only huddle  I had was the default setup I made in config.yml for tag collections, which made my script to look like this 'site.data.tags.allowed-tags, which is simply site.tags in most other cases. 
* another purprit was the size of posts or pages tagged so that the number of posts matches the badge count wit the tat name.
* you need the javascript to switch between visible and invisible class as to display the selected tag list of posts.
  
{% raw %}
{% capture postCounter %}{% for post in site.pages %}{% if post.tags contains  tag %}{{ counter | plus: 1 | length }}{% endif %}{% endfor %}{% endcapture %} {{ postCounter | size }}
{% endraw %}

* jquery to swtich between visible and invisible instead of show/hide
~~~ html
onclick="showTag('#{{tag}}')"
~~~~

~~~html
<div class="archive-group invisible" id="{{tag}}">
  </div>
~~~~

- other variations
> I tried out different aprroaches found via google search that seemed best candidate to my needs, for example;
[variation]({{ site.baseurl }}tag_tagcloud.html)

[variation]({{ site.baseurl }}tag_tagcloud2.html)

[variation]({{ site.baseurl }}tag_tagcloud3.html)
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

<script src="https://gist.github.com/aiegoo/1b30595b6de5ead2061394f72f042099.js"></script>

- currently working script
<script src="https://gist.github.com/aiegoo/ba790d6e6ab5e7a3638c26e70cb98795.js"></script>

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
