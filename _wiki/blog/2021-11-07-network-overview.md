---
layout: post
title: "Network books and reference"
name: "network-overview"
tags: network
tagName: network
permalink: 2021-11-07-network-overview.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "network"
summary: "Sun, Nov 07, 21, network books and references including illustration and field examples"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-11-07T20:11:10 +0900
updated: 2021-11-07 20:11
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## books
[wiresharklab](https://github.com/aiegoo/uas-reference/blob/master/network/wiresharklab.pdf)

[illustratednetwork](https://github.com/aiegoo/uas-reference/blob/master/network/illustratednetwork.pdf)

[python_js_viz](https://github.com/aiegoo/uas-reference/blob/master/network/data_viz.pdf)

[network_analysis_python](https://github.com/aiegoo/uas-reference/blob/master/network/networkanalysis_python.pdf)

### data_viz with javascript and python

While  there  is  some  brilliant  coding  behind  these  JavaScript  con‐ verters and many solid
use-cases, they do have big limitations:
•  Automated code-conversion may well do the job but the code produced is usually pretty
impenetrable for a human being.
•  Adapting and customising the resulting plots using the power‐ ful browser-based JavaScript development environment is likely to be very painful.
•  You are limited to the subset of plot types currently available in the libraries.
• Interactivity is very basic at the moment. Stitching this together is better done in JavaScript, using the browser’s dev-tools.


## installing latest wireshark to linux

{% highlight bash %}
{% raw %}
sudo add-apt-repository ppa:wireshark-dev/stable
sudo apt update
sudo apt install wireshark
{% endraw %}
{% endhighlight %}


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
