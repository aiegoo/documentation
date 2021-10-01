---
name: scrollspy for jekyll
layout: post
permalink: 2021-09-29-wiki-scrollspy.html
sidebar: other_sidebar
collection: wiki
summary: "Implement Scroll Spy in Jekyll without Bootstrap"
tags: [wiki, getting_started]
excerpt_separator: <!--more-->
date: 2021-09-30 23:10:03 +0900
updated: 2021-09-30 23:14 PM
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
latex: false
repos: aiegoo/kramdown-cn/blob/master/_posts/2019-03-24-Implement%20Scroll%20Spy%20in%20Jekyll%20without%20Bootstrap.md
---

* TOC
{:toc}

>one page navigation, table of content, vertical navigation, scroll navigation

# Install `scrollnav.js` Plugin

To simplify this project,I am using [scrollnav.js](http://scrollnav.com/) to help me with. There are a couple of methods to [install](http://scrollnav.com/guide/installing.html) it, but when I tried to host it by myself, an error occurred that it needs one more file end with '.map'. I find it [here](https://unpkg.com/scrollnav@3.0.1/dist/). By the way, if using CDN, exactly working well.

# Setup

## .html

Add a class called `post-article` or any other class name to the section/div in need of scrollspy.

```html
  <div id="post-content" class="post-article">
    <h2>First section</h2>
    ...
    <h2>Second section</h2>
    ...
    <h2>Third section</h2>
    ...
  </div>
```
## .js

> Do not initialize `ScrollNav` in `Ready()`, at least my attempt failed.

Some essential tweaks from original document:
1. First of all, add `subSection` as showing second level of titles is a common requirement of a category,
2. By default, `h2` tags are regarded as the first level title of an article. However, in terms of  my situations, sometimes `h1` is my first level and sometimes `h2` is. So I wrote a Binary Operator dealing with this case.
3. Other options see: [All Options](http://scrollnav.com/guide/customizing.html)
   
```javascript
$(function(){
    const content = document.querySelector('.post-article');
    scrollnav.init(content, { 
      debug: false,
      easingStyle: 'linear',
      sections: ($('.post-content > h1').length>0) ? 'h1' : 'h2',
      subSections: ($('.post-content > h1').length>0) ? 'h2' : 'h3'
    });
});
```

## Markup structure

scrollnav follows
[BEM (Block, Element, Modifier) Methodology](https://en.bem.info/methodology/)
for providing class names to its markup. `scroll-nav` is the block, with
`__list`, `__item`, and `__link` as elements. The structure looks like this.

```css
nav.scroll-nav
  ol.scroll-nav__list
    li.scroll-nav__item.scroll-nav__item--active
      a.scroll-nav__link
```
When a user scrolls the document, scrollnav watches for each section to pass
the threshold of the active area. As that happens the `--active` modifier is
added to the `__item` element (and subsequently removed from previously active
item). Use this to change or udpate the look of the active items in the
nav.

<p class="article-note">To view the location of the active area threshold
within your document enable `debug` mode from scrollnav's list of
[additional options](/scrollnav.com/guide/customizing.html#additional-options).
</p>

## CSS Style .scss
{% raw %}
```scss
//scroll nav
.scroll-nav {
    color: $white;
    font-weight: bold;
    background-color: rgba(168, 168, 168,0.8);
    //border: 1px solid #a2a9b1;
    padding: 15px 10px;
    position: fixed;
    top: 20vh;

    @media #{$notlarge} {
		display: none;
	}

    a {
        color: $white;
        text-decoration: none;
    }
   
    a:hover {
       color:$red;
    }
    
    &:before {
        content: "CATALOG:";
        font-weight: bold;
    }
}

.scroll-nav__list {
    margin: 0;
    padding-left: 1.4em;
    list-style-type: upper-roman;
}

.scroll-nav__item {
    margin-bottom: 5px;
}

.scroll-nav__item--active > a {
    padding: 5px;
    font-weight: bold;
    position: relative;
    color: $white;
    background: $red;
    text-decoration: none;
    @include transition(0.5s);
    &:hover{
        color:$white
    }
}

.scroll-nav__link {
    color: #0645ad;
    text-decoration: none;
    //display: block;
    //margin: 0 auto;
    //padding-left: 42px;
}
```
{% endraw %}
For more information: [Styling](http://scrollnav.com/guide/styling.html)

# Output
![image](https://user-images.githubusercontent.com/42961200/135604861-b6fb462d-caff-49b9-8575-f78fd092d9ea.png)

![image](https://user-images.githubusercontent.com/42961200/135546980-0afeff0b-4f4e-4b04-bcfb-43f7c8218f0f.png)

{% include links.html %}
