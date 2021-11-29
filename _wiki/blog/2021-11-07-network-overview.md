---
layout: post
title: "Network books and reference"
name: "network-overview"
tags: network
tagName: network
permalink: 2021-11-07-network-overview.html
sidebar: other_sidebar
folder: blog
keywords: "wireshark data viz d3js d3 python webserver"
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

While  there  is  some  brilliant  coding  behind  these  JavaScript  converters and many solid use-cases, they do have big limitations:
* Automated code-conversion may well do the job but the code produced is usually pretty impenetrable for a human being.
* Adapting and customising the resulting plots using the power‐ ful browser-based JavaScript development environment is likely to be very painful.
*  You are limited to the subset of plot types currently available in the libraries.
*   Interactivity is very basic at the moment. Stitching this together is better done in JavaScript, using the browser’s dev-tools.

> what counts most in using libraries;
1.  Open-source and free as in beer - you shouldn’t have to invest any extra money to learn with this book.
2.  Longevity  -  generally  well-established,  community-driven  and popular.
3.  Best of breed, allowing for 2.- at the sweet spont between popularity and utility.

{% include image.html file="network/data_viz.jpg" caption="data viz toolchain" %}

### installing simple python webserver

```bash
# If Python version returned above is 3.X
# On Windows, try "python -m http.server" or "py -3 -m http.server"
python3 -m http.server
# If Python version returned above is 2.X
python -m SimpleHTTPServer
```
To change ports; `python3 -m http.server 8800`
## installing latest wireshark to linux

{% include copyto.html %}
```bash
sudo add-apt-repository ppa:wireshark-dev/stable
sudo apt update
sudo apt install wireshark
```

<iframe width="100%" height="500" frameborder="0"
  src="https://observablehq.com/embed/@d3/bubble-chart?cell=*"></iframe>

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
