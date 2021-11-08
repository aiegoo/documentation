---
layout: post
title: "more to-dos or mini projects relating this jekyll site"
name: "Jekyll-more-update"
tags: [jekyll, update]
tagName: [update]
permalink: 2021-10-20-Jekyll-more-update.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: update
keywords: "js tips automatically reload page mathjax anchor link fixed navigation header hover links back to top button zoom enlarge photo js prevent default event keyboard arrow json fetch callout details gallery image grid srcset image"
summary: "Wed, Oct 20, 21, live-server mathjax issues-to-fix show-box photo TOC Github API"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-10-20T02:32:00 +0900
updated: 2021-10-21 04:32
---
* TOC
{:toc}


## codeblock copytoclipboard

```liquid
{% assign code = include.code %}
{% assign language = include.language %}
```

<script src="https://gist.github.com/aiegoo/dee57252ff0379ed25a96993d8d8761c.js"></script>

```liquid
{% assign nanosecond = "now" | date: "%N" %}
<textarea id="code{{ nanosecond }}" style="display:none;">{{ code | xml_escape }}</textarea>
<button id="copybutton{{ nanosecond }}" data-clipboard-target="#code{{ nanosecond }}">
  Copy to clipboard
</button>

<script>
var copybutton = document.getElementById('copybutton{{ nanosecond }}');
var clipboard{{ nanosecond }} = new Clipboard(copybutton);

clipboard{{ nanosecond }}.on('success', function(e) {
    console.log(e);
});
clipboard{{ nanosecond }}.on('error', function(e) {
    console.log(e);
});
</script>
```

### a usecase example

{% highlight liquid %}
{% raw %}
{%- capture code -%}
/* Some js code */
const redis = require('redis');
const host = <HOSTNAME>;
{%- endcapture -%}

{% include code_snippet.md code=code language='javascript' %}

{%- capture code -%}
# Some ruby code
t = Time.now
t.succ
{%- endcapture -%}

{% endraw %}
{% endhighlight %}

above code will result in the following;

{%- capture code -%}
/* Some js code */
const redis = require('redis');
const host = <HOSTNAME>;
{%- endcapture -%}

{% include code_snippet.md code=code language='javascript' %}


{%- capture code -%}
# Some ruby code
t = Time.now
t.succ
{%- endcapture -%}

{% include code_snippet.md code=code language='ruby' %}

## external image links not covered by file=
- to link to external images, use the sourceset parameters of image tag with this format `links=https..`

```liquid
<figure style="text-align: center; width: fit-content;">{% if {{include.url}} %}<a class="no_icon" target="_blank" rel="noopener" href="{{include.url}}">{% endif %}<img class="docimage" src="images/{{include.file}}" srcset="{{include.links}}" alt="{{include.alt}}" {% if {{include.max-width}} %}style="max-width: {{include.max-width}}px"{% endif %} />{% if {{include.url}} %}</a>{% endif %}{% if {{include.caption}} %}<figcaption style="text-align: center;">{{include.caption}}</figcaption>{% endif %}</figure>
```


## bulletin, details and page_gallery.html
- to view custom callouts, details tags and image gallery grid.

* double quote headline, collpasible detail tags

{{site.data.alerts.details}}

```yaml
tip: '<div class="alert alert-success" role="alert"><i class="fa fa-check-square-o"></i> <b>Tip: </b>'
note: '<div class="alert alert-info" role="alert"><i class="fa fa-info-circle"></i> <b>Note: </b>'
important: '<div class="alert alert-warning" role="alert"><i class="fa fa-warning"></i> <b>Important: </b>'
warning: '<div class="alert alert-danger" role="alert"><i class="fa fa-exclamation-circle"></i> <b>Warning: </b>'
bulletin: '<div class="alert alert-default alert-bulletin" role="alert"><div markdown="1">'
end: '</div>'
ends: '</div></div>'

callout_danger: '<div class="bs-callout bs-callout-danger">'
callout_default: '<div class="bs-callout bs-callout-default">'
callout_primary: '<div class="bs-callout bs-callout-primary">'
callout_success: '<div class="bs-callout bs-callout-success">'
callout_info: '<div class="bs-callout bs-callout-info">'
callout_warning: '<div class="bs-callout bs-callout-warning">'

hr_faded: '<hr class="faded"/>'
hr_shaded: '<hr class="shaded"/>'


details: '<details><summary class="detailSummary">Click to open</summary><p><div markdown="1">'
ended: '</div></p></details>'
```

* I created this combination (look above for the alerts.yml for details)
> here's an example below
{% highlight ruby %}
{% raw %}
{{site.data.alerts.details}}
## samples
### contents etc

{{site.data.alerts.ended}}
{% endraw %}
{% endhighlight %}

`above script will create collpased <details> with contents parsed from the markdown`

{{site.data.alerts.hr_faded}}

*another example called `bulletin` {:. details-p}
> A single double quote with callout script

{% highlight ruby %}
{% raw %}
{{site.data.alerts.bulletin}}
# contents
{{site.data.alerts.ends}}
{% endraw %}
{% endhighlight %}

`above will create a headline callout` :::

{{site.data.alerts.ended}}

{{site.data.alerts.hr_faded}}


## stackoverflow app settings

{{site.data.alerts.details}}
```
36ioco
Client Id
xxxxx
This Id identifies your application to the Stack Exchange API. Your application client id is not secret, and may be safely embeded in distributed binaries.

Pass this as client_id in our OAuth 2.0 flow.

Client Secret (reset)
xxxxx

Pass this as client_secret in our OAuth 2.0 flow if your app uses the explicit path.

This must be kept secret. Do not embed it in client side code or binaries you intend to distribute. If you need client side authentication, use the implicit OAuth 2.0 flow.

Key
krQxxxxxx
Pass this as key when making requests against the Stack Exchange API to receive a higher request quota.

This is not considered a secret, and may be safely embed in client side code or distributed binaries.

Description
documentation so search api
This text-only blurb will be shown to users during authentication.

OAuth Domain
36io.co
Whenever a redirect occurs during an authentication sessions (as specified by redirect_uri) it must reside under this domain.

For the purposes of redirection, subdomains are considered to be under their parent domain. Registering example.com would allow a redirect_uri of foo.example.com for example.

Application Website
pf3.36io.co/about-the-site.html
A link to this website will accompany most displays of your application on the Stack Exchange network.

Application Icon
Not Set
This image will accompany most displays of your application on the Stack Exchange network.

Stack Apps Post
Not Set
When you've published your application, it should be listed on Stack Apps with the app or script tags.

Client Side Flow Is Enabled
An application can either be configured for client side or server side authentication flows.

Changing to one will disable the other flow.

Desktop OAuth Redirect Uri Is Enabled
Applications that have the client side flow enabled can use https://stackexchange.com/oauth/login_success as their redirect_uri by default.

This is provided so non-web clients can participate in OAuth 2.0 without requiring a full fledged web server. Applications that do not need this behavior can disable it.

```

:::
{{site.data.alerts.ended}}

## more update on markdown-toc css
[style_link](https://clickhelp.com/clickhelp-technical-writing-blog/advanced-autonumbering-techniques-with-css/)
[nested number issues](https://gabrieleromanato.name/css-counters-in-depth)

{{site.data.alerts.details}}
{{site.data.alerts.note}}`content: counters(term, ".", lower-roman) " ";` Note that the counters() function can also accept a third argument (lower-roman) as the last member of its arguments list, separated by a second comma from the preceding period. However, the counters() function doesn't allow us to specify different styles for each level of nesting.{{site.data.alerts.end}}
```css
/* customizing markdown-toc css from joshua1988 */

#markdown-toc li>a {
    border-bottom-width: 0;
}
#markdown-toc p a:hover, #markdown-toc li a:hover {
    border-bottom-style: solid;
}
#markdown-toc li:hover, li:focus {
    background: #dfdfdf;
}
#markdown-toc p a, #markdown-toc li a {
    border-bottom: 1px dotted #a2a2a2;
}
#markdown-toc li>a {
    display: block;
    padding: 2px 1.618rem;
    color: #313130;
    border-left: 2px solid transparent;
}
/* Thi style numbering of toc */
ul#markdown-toc {
    list-style-type: none;
    counter-reset: list;
}
ul#markdown-toc li {
    list-style: none;
    margin-left: -9px;
}
ul#markdown-toc >li {
    border-bottom: 1px dotted #a2a2a2 !important;
    line-height: 10px;
}
ul#markdown-toc >li a:hover{
    border-bottom-style: solid !important;
}
ul#markdown-toc li>a {
    display: inline-block;
    border-bottom: none !important;
}
ul#markdown-toc li::before {
    content: counters(list, ".") " ";
    counter-increment: list;
    background-color: #eee;
    margin-right: 6px;
    width: 10p`

ul#markdown-toc li >ul {
    counter-reset: list;
}

ul#markdown-toc li >ul li::before {
    content: counters(list, ".") " ";
    counter-increment: list;
}
```

:::
{{site.data.alerts.ended}}
## late-discovered issues
- reading progress-bar disappearing on scroll with some posts (happens on mobile only so far)
  - [Windows-Termianl-Setting.html](Windows-Termianl-Setting.html)
- regarding backwarding slash and esc to activate focus in search box, it still requires scrolling to the top to see the search box when I start typing, but I found the solution as follows;
  ```
  The tabindex value can allow for some interesting behaviour.
  1. If given a value of "-1", the element can't be tabbed to but focus can be given to the element programmatically (using element.focus()).
  2. If given a value of 0, the element can be focused via the keyboard and falls into the tabbing flow of the document.
  3. Values greater than 0 create a priority level with 1 being the most important.
  ```
  - the above tip works in the body tags as the author described, and in the case of topnav being hidden on scroll with javascript, you need more script to add to disable the scroll-trigger so that tabindex gets the priority. I found this is the conflict of priority issues. So be it.

## Thi

### how to automate adding frontmatters
> specific to files with contents only
> example, drones guide files in this sites

[sof](https://stackoverflow.com/questions/46423572/append-a-file-in-the-middle-of-another-file-in-bash)

- issues
  - it's important to keep the original file name due to existing file links
  - then, I will have to add frontmatters prepend to existing contents, but I have more scripts after frontmatters to be generated (ex, include scripts)
  - bash should generate some time data in date and updated parameters, in additon to other bash variables suc as tags tagName etc.
- solution
  - adapt existing scripts for createwiki and add awk/sed bash cli to insert each file in the same/subdirectory
  - I have used a bash script in similar case where I prepend contents in a file to every file in the directory.
  - [code_snippets](#prepending-file)

### reading progress bar inside topnav
- html tag and css were inserted in topnav.html
- code snippets for jquery can be found in my gist (search for reading-progress)
- [jquery-link for scroll](https://gist.github.com/aiegoo/a20c01dd73c6da94ff2afbeaddfe643e)

### Automatically reload page if js file changes

1. Install [nodejs](https://nodejs.org/en/download/).
2. Install [live-server](https://github.com/tapio/live-server) using nodejs: `npm install -g live-server`.
3. `cd` to the project folder.
4. run `live-server` (accept all networks notification)
5. Browse: [http://127.0.0.1:8080](http://127.0.0.1:8080)
6. Enjoy!

::: warning
It may not reload the browser (it only detects the changes)!
:::

### Add MathJax to website

👉 Check [the codes]().

## Anchor links hidden by fixed navigation

If you use table of content for posts in which links starting with `#` link to headings. After jumping, headings are usually hidden by the fixed navigation. Adding below script before `</body>` tag can solve the problem (change value `100` to change where the page jump).[link](http://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to)

👉 Check [the codes](👉 Check [the codes](https://gist.github.com/aiegoo/768dc097702c625c6c57ef16a82163ef). **Update 10/26/21**: This method is not good. It works only if we click on an `<a>` tag which starts with `#` in the `href`. In the case of which inside `<a>` containing an `<svg>`, for example, it won't work!
). **Update 03/10/21**: This method is not good. It works only if we click on an `<a>` tag which starts with `#` in the `hlink`. In the case of which inside `<a>` containing an `<svg>`, for example, it won't work!

### Heading hover anchor links

👉 Check [the codes](https://gist.github.com/aiegoo/c8df7c7a5d12617a1d1f01d2bac3996c).[link](https://ben.balter.com/2014/03/13/pages-anchor-links)

## Back to top button

Click and go back to the top of the page using javascript with smooth effect.

👉 Check [the codes](https://gist.github.com/aiegoo/8b62182f7fb40a5e214a206cb1a591ce).

### Hide / Show box

Auto hide / show the next `div` of the currently clicked `div`.

👉 Check [the codes](https://gist.github.com/aiegoo/900ef9d7ebc5a833e8afbf0c15bf6d07).

__Advantage__: We don't need the id of content div, this method requires that `div.hs__content` comes right after `div.hs__title`, otherwise it won't work!

### Click to enlarge photo

If some photos on your page are too small and you wanna add a function in that users can click on the photo to enlarge it. This technique requires [Bootstrap 4](https://getbootstrap.com).

👉 Check [the codes](https://gist.github.com/aiegoo/d34fa0c55bbbeb612af28a0f250e67d7).

### Prevent default event

Stop arrow key acts as usual,

``` js
window.addEventListener("keydown", function(e) {
	// space and arrow keys
	if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
		e.preventDefault();
	}
}, false);
```

If `div_1` inside `div_2`, prevent actions in `div_2` when performs on `div_1` (check [this example](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_stoppropagation)), use `e.stopPropagation()`.

### Search + result + navigation

- Auto close the result if losing focus.
- Cycling the result items with arrow up/down keys.
- Auto focus to the `a` tag of the title.

👉 Check [the codes](https://gist.github.com/aiegoo/f41b0564573c16711214b6e95ba3eab9).

## Scrolling headings in TOC

Follow the position of viewport, auto highlight heading in toc w.r.t the current heading on page

👉 Check [the codes](https://gist.github.com/aiegoo/37b2d8ef2995c164dd8bed6cb9950973).

### Fetch starred repository (JSON to `ol`)

Automatically fetch a list of Github starred repositories using Github API and display it under `<ol>` [html tag](https://stackoverflow.com/questions/55090335/how-to-create-lis-based-on-fetch-result)

👉 Check [the codes](https://gist.github.com/aiegoo/7879584f5a7405bf7238ba245cb1e6c6).

## prepending-file

``` bash
find . -name "*.md" -print | while read fn; do echo fixing $fn; cat .test.txt "$fn" > $fn.modified; mv $fn.modified $f done
```
I have copied a test.txt file with a frontmatter into the first line of a file.

``` bash
sed -n '/aa/,/fff/p' file1 > tmp
sed '1 r tmp' file2
```

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
