---
layout: post
title: "11ty and jekyll"
name: "in-making-it"
tags: [jekyll]
tagName: jekyll
permalink: 2021-10-31-in-making-it.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "11ty thi jekyll create a website static web 11ty js Nunjucks mozilla template language liquid eleventy nextjs netlify google fonts bootstrap scss css layout web design ssg static site generator static website include template github pages frontmatter markdown code syntax highlight mathjax math markdown-it plugin editor incremental build nunjuck mozilla shortcodes"
summary: "Sat, Oct 23, 21, secret receipe of customizing 11th and this jekyll"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-10-31T08:52:03 +0900
updated: 2021-10-31 09:52
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}
[creating_your_own_plugin](https://jekyllrb.com/docs/configuration/markdown/)

## table formatting
> example

|---
| {::nomarkdown}<div width="380px"></div>{:/}   | **Installed** {::nomarkdown}<div width="200px"></div> {:/}  | **Installed** {::nomarkdown}<div width="200px"></div> {:/}  | **Installed** {::nomarkdown}<div width="200px"></div>  {:/} |
| - | - |  - |  - |
| {::nomarkdown}<ul width="380px"> <em> installed</em>  <li>matlab</li> <li> 5g toolbox</li> <li>autosar blockset </li> <li>aerospace blockset</li> <li>aerospace toolbox</li>   <li>antenna toolbox</li> <li>audio toolbox</li>   <li>automated driving toolbox</li>  <li> communications toolbox</li>    <li> computer vision toolbox</li>    <li>control system toolbox</li>  <li>curve fitting toolbox</li>     <li>dsp system toolbox</li>   <li>data acquisition toolbox</li>  <li>database toolbox</li>  <li>deep learning toolbo</li>  <li>embedded coder</li> <li>filter design hdl coder</li> <li>fixed-point designer</li>     <li>fuzzy logic toolbox</li>  <li>global optimization toolbox</li> <li>iec certification kit</li> <li>image acquisition toolbox</li>    <li>image processing toolbox</li>  <li>instrument control toolbox</li>   <li>lte toolbox</li> <li>matlab coder</li> <li> matlab compiler</li><li>matlab parallel server</li>  <li>matlab report generator</li>  <li>mapping toolbox</li> <li>mixed-signal blockset</li>   <li> model predictive control toolbox</li>   <li>model-based calibration toolbox</li><li>motor control blockset </li>  <li>navigation toolbox</li>  <li>opc toolbox </li>    <li>optimization toolbox</li> <li>px4 psp </li>    <li>parallel computing toolbox</li>  <li>phased array system toolbox</li> <li>polyspace bug finder</li>  <li>polyspace bug finder server</li> <li>polyspace code prover </li><li>polyspace code prover server </li>  &nbsp;&nbsp;</li> </ul> {:/} | {::nomarkdown} <ul> <li>powertrain blockset  </li>   <li>predictive maintenance toolbox</li> <li>rf blockset</li> <li>rf toolbox</li> <li>ros toolbox</li>  <li>reinforcement learning toolbox</li> <li>robotics system toolbox </li>  <li> robust control toolbox </li> <li>sensor fusion and tracking toolbox</li><li>serdes toolbox</li>  <li>signal processing toolbox</li> <li>simbiology</li> <li>simevents</li>  <li>simscape </li> <li>simscape driveline</li>   <li>simscape electrical</li>   <li>simscape fluids</li>  <li>simscape multibody <li>simulink 3d animation </li>  <li>simulink check </li> <li>simulink code inspector</li>  <li>simulink coder</li>  <li>simulink compiler </li>  <li>simulink control design</li>   <li>simulink coverage</li> <li>simulink design optimization </li> <li>simulink design verifier </li>  <li> simulink desktop real-time</li>  <li>simulink real-time</li>  <li>simulink report generator</li> <li>simulink requirements </li>  <li>simulink test </li>   <li> *stateflow </li>   <li> statistics and machine learning toolbox</li>  <li>symbolic math toolbox </li> <li> system identification toolbox </li> <li>text analytics toolbox </li><li>vehicle dynamics blockset</li>   <li>vehicle network toolbox</li> <li>wlan toolbox</li>  <li>wireless hdl toolbox</li>  <li>simulink </li>   &nbsp;&nbsp;   </ul>  {:/} | {::nomarkdown}<ul>  <li>5g toolbox  </li>    <li>autosar blockset     <li>aerospace blockset     <li>aerospace toolbox     <li>antenna toolbox    <li>audio toolbox      <li>automated driving toolbox     <li>communications toolbox      <li>computer vision toolbox     <li>control system toolbox     <li>curve fitting toolbox      <li>dsp system toolbox     <li>data acquisition toolbox  <li>database toolbox      <li>deep learning toolbox     <li>embedded coder <li>filter design hdl coder       <li>fixed-point designer      <li>fuzzy logic toolbox         <li>iec certification kit      <li>image acquisition toolbox      <li>image processing toolbox     <li>instrument control toolbox      <li>lte toolbox  <li>matlab coder     <li>matlab compiler      <li>matlab parallel server     <li>matlab report generator  <li>mapping toolbox    <li>mixed-signal blockset  <li>model predictive control toolbox    <li>model-based calibration toolbox     <li>motor control blockset   <li>navigation toolbox     <li>opc toolbox    <li>optimization toolbox   <li>px4 psp   <li>parallel computing toolbox <li>phased array system toolbox    <li>polyspace bug finder   <li>polyspace bug finder server   <li>polyspace code prover    <li>polyspace code prover server  <li>powertrain blockset   &nbsp;&nbsp;     </ul> {:/} |{::nomarkdown}<ul>     <li>predictive maintenance toolbox <li>rf blockset      <li>rf toolbox    <li>ros toolbox    <li>reinforcement learning toolbox    <li>robotics system toolbox    <li>robust control toolbox  <li>sensor fusion and tracking toolbox  <li>serdes toolbox     <li>signal processing toolbox    <li>simbiology      <li>simevents  <li>simscape  <li>simscape driveline   <li>simscape electrical   <li>simscape fluids     <li>simscape multibody    <li>simulink 3d animation   <li>simulink check   <li>simulink code inspector   <li>simulink coder   <li>simulink compiler   <li>simulink control design   <li>simulink coverage   <li>simulink design optimization    <li>simulink design verifier     <li>simulink desktop real-time    <li>simulink report generator         <li>simulink requirements      <li>simulink test     <li>stateflow     <li>statistics and machine learning toolbox    <li>symbolic math toolbox     <li>system identification toolbox   <li>text analytics toolbox    <li>vehicle dynamics blockset    <li>vehicle network toolbox    <li>Wireless HDL Toolbox &nbsp;&nbsp;</li></ul>{:/} |
|===
| [kramdown_table](https://lyk6756.github.io/2016/11/24/table_stntax_markdown.html)

{% highlight liquid %}
{% raw %}
|---
| {::nomarkdown}<div width="380px"></div>{:/}   | **Installed** {::nomarkdown}<div width="200px"></div> {:/}  | **Installed** {::nomarkdown}<div width="200px"></div> {:/}  | **Installed** {::nomarkdown}<div width="200px"></div>  {:/} |
| - | - |  - |  - |
| {::nomarkdown}<ul width="380px"> <em> installed</em>  <li>matlab</li> <li> 5g toolbox</li> <li>autosar blockset </li> <li>aerospace blockset</li> <li>aerospace toolbox</li>   <li>antenna toolbox</li> <li>audio toolbox</li>   <li>automated driving toolbox</li>  <li> communications toolbox</li>    <li> computer vision toolbox</li>    <li>control system toolbox</li>  <li>curve fitting toolbox</li>     <li>dsp system toolbox</li>   <li>data acquisition toolbox</li>  <li>database toolbox</li>  <li>deep learning toolbo</li>  <li>embedded coder</li> <li>filter design hdl coder</li> <li>fixed-point designer</li>     <li>fuzzy logic toolbox</li>  <li>global optimization toolbox</li> <li>iec certification kit</li> <li>image acquisition toolbox</li>    <li>image processing toolbox</li>  <li>instrument control toolbox</li>   <li>lte toolbox</li> <li>matlab coder</li> <li> matlab compiler</li><li>matlab parallel server</li>  <li>matlab report generator</li>  <li>mapping toolbox</li> <li>mixed-signal blockset</li>   <li> model predictive control toolbox</li>   <li>model-based calibration toolbox</li><li>motor control blockset </li>  <li>navigation toolbox</li>  <li>opc toolbox </li>    <li>optimization toolbox</li> <li>px4 psp </li>    <li>parallel computing toolbox</li>  <li>phased array system toolbox</li> <li>polyspace bug finder</li>  <li>polyspace bug finder server</li> <li>polyspace code prover </li><li>polyspace code prover server </li>  &nbsp;&nbsp;</li> </ul> {:/}
{% endraw %}
{% endhighlight %}
## Thi
{{site.data.alerts.bulletin}}
**for currenttly working site, see** [v2 roadmap](v2-roadmap.html#october-30-report)
{{site.data.alerts.ends}}
{% assign img-url = '/img/post/js/gatsby' %}

{{site.data.alerts.callout_warning}}
<div markdown="1">
This is not a tutorial to create an 11ty website, this's a note! You can find some **very new and useful** techniques on this note alongside [the official documentation](https://www.11ty.dev/docs/).
</div>
{{site.data.alerts.end}}

{{site.data.alerts.callout_success}}
This note will be always updated!
{{site.data.alerts.end}}

## local-dev and deployed as site
[github_actions](https://gist.github.com/aiegoo/55437ea80b9f04055a89190d89777247)
## Install && Set-up with Netlify

👉 First, install [nodejs](/nodejs-npm).
👉 Using [this starter template](https://github.com/11ty/eleventy-base-blog) or [Google's high performance statrer theme](https://github.com/google/eleventy-high-performance-blog) (recommended).

```bash
# Install dependencies
npm install
```

Depend on each theme, you should follow the installation steps given in that theme.

Sometimes, 11ty takes too much time to build (especially on the task of optimizing images. On my site, it takes almost 10 minutes). You shouldn't use branch `master` to build you site because every time you make a push, Netlify will rebuild your whole site. You should create and use a new branch, so-called `prod` instead.


<details>
<summary class="detailSummary"><div markdown="span">"**Idea 1** -- manually build but should not use many times"</div></summary>

<p>
<div markdown="1">
On Netlify, go to **Site settings** > **Build & deploy**:



- **Build settings**:
  - _Build command_: `npm run build` (depends on your site)
  - _Publish directory_: **\_site** (depends on your site)
  - _Builds_: **Active builds**
- **Deploy contexts**:
  - _Production branch_: **prod** (the same as the your created branch)
  - _Deploy previews_: **Don't deploy pull requests** (you don't want someone pull request and it auto make a deploy)
  - _Branch deploys_: **Deploy only the production branch**.
</div>
</p>
</details>

{% include tony.html content="The weakness of _Idea 1_ is that you let netlify build again your whole site with its resources. That's why it takes too much time! Remember that, you have only 300 free minutes to build." %}

<details>
<summary class="detailSummary"><div markdown="span">"**Idea 2** -- build locally and push `_site` only"</div></summary>

<p>
<div markdown="1">
You should know that, even if your site contains only html files, netlify is able to make it live as usual.

1. Working mainly on branch `dev` like in Idea 1.
2. Create a branch, so-called `_site` from `dev`. In this branch, delete all folders except `_site`, `node_modules`, `.git`, `.gitignore`.
3. Modify `.gitignore` (exclude all except `_site` folder to push to github),

   ```bash
   /*
   /*/
   !/_site/
   ```

4. Now, we tell netlify build our site from branch `_site` (which contains html files only so it doesn't take time to build anything, it's really fast!)
   - **Build settings**:
     - _Base directory_: Not set.
     - _Build command_: Not set.
     - _Publish directory_: \_site/
     - _Builds_: Active.
   - **Deploy context**: - _Production branch_: _site_ - _Deploy previews_: Don’t deploy pull requests - _Branch deploys_: Deploy only the production branch

</div>
</p>
</details>

{{site.data.alerts.hr_faded}}

<details>
<summary class="detailSummary"><div markdown="span">"Example workflow with dinhanhthi.com"</div></summary>

<p>
<div markdown="1">
From the [main repo](https://github.com/dinhanhthi/dinhanhthi.com), I clone to 2 different folders

```bash
|- pf3.36io.co # <- branch "dev"
|- github.com/aiegoo/documentation 				# <- branch "_site"
```

On `github.com`, I create a script called `ud_site.sh` which contains,

```bash
echo "Start building site"
cd ../pf3.36io.co/
npm run build
cd ../github.com/aiegoo/documentation/
echo "Start copying...."
cp -Rf ../pf3.36io.co/_site/* _site/
echo "End copying"
git add .
git commit -m "Updated: `date +'%Y-%m-%d %H:%M:%S'`"
git push
```

For covenience, I create an alias in bash shell,

```bash
alias update_dat='cd ~/git/github.com && sh ud_site.sh && cd -1'
```

From now, whenever I wanna build and deploy my site on netlify, I just run,

```bash
update_dat
```

I saved from 1h of building to 2m of building on netlify with this method!

</div>
</p>
</details>

## Templating

### SCSS to CSS & Using [`postcss`](https://github.com/postcss/postcss)


<details>
<summary class="detailSummary"><div markdown="span">"If you use [node-sass](https://www.npmjs.com/package/node-sass)"</div></summary>

<p>
<div markdown="1">

```bash
# Folder's structure
css/main.scss
css/components/_fonts.scss # with _
css/components/....
```

```json
// in main.scss
@import "./components/font"; // without extension

// package.json
{
  "scripts": {
    "js-build": "node-sass css/main.scss -o css",
  }
}
```


```html
<!-- in <head> -->
<link rel="stylesheet" href="css/main.css" />
```

</div>
</p>
</details>

{{site.data.alerts.hr_faded}}

<details>
<summary class="detailSummary"><div markdown="span">"If you use [rollup](https://rollupjs.org/guide/en/) (like this site)"</div></summary>

<p>
<div markdown="1">

```bash
# Folder's structure
css/main.scss
css/components/_fonts.scss
css/components/....
css/main_input.js
```

```json
// in main.scss
@import "./components/font"; // without extension

// package.json
{
  "scripts": {
    "js-build": "rollup -c rollup.config.js",
  }
}
```


```js
import scss from "rollup-plugin-scss";

export default [
  {
    // plugin 1
  },
  {
    input: "css/main_input.js", // where the input file containing import of main.scss
    output: {
      file: "css/main.js", // intermediate file which can be translated to css/main.css
      format: "esm", // still not know
    },
    plugins: [
      scss(), // there are other configs
    ],
  },
];
```

```html
<!-- in <head> -->
<link rel="stylesheet" href="css/main.css" />
```
</div>
</p>
</details>

{{site.data.alerts.hr_faded}}

<details>
<summary class="detailSummary"><div markdown="span">"If you use [parcel](https://parceljs.org)"</div></summary>

<p>
<div markdown="1">

```bash
# install
npm i parcel-bundler
npm i npm-run-all -D
```

```bash
# folder structure
_assets/css/main.scss
___________/_bootstrap.scss
_______/js/main.js
```


```bash
# main.scss
@import "./bootstrap";
```

```bash
# main.js
import "./../css/main.scss";
```


```bash
# package.json
"scripts": {
    "start": "npm-run-all --parallel dev:*",
    "build": "run-s prod:*",
    "dev:eleventy": "eleventy --serve",
    "dev:parcel": "parcel watch ./_assets/js/main.js --out-dir ./_site/assets",
    "prod:eleventy": "eleventy",
    "prod:parcel": "parcel build ./_assets/js/main.js --out-dir ./_site/assets",
},
```

```bash
# run
npm start
```


</div>
</p>
</details>


##### Using [`postcss`](https://github.com/postcss/postcss)

```bash
# Install it and its plugin first
npm install autoprefixer postcss postcss-cli
```

```bash
# Create postcss.config.js on the same folder as package.json
module.exports = {
  plugins: [require("autoprefixer")],
};
```

```json
// npm command in package.json
"css:prefix": "postcss src/css/main.css --use autoprefixer --replace true"
```

```bash
# Watch (cannot use with `--replace`)
postcss --watch main.css -o main_.css --use autoprefixer
```

##### Nunjucks inside css

```html
<style>
  .bg {
    background-image: url({{ bg-image }});
  }
</style>

<!-- or -->
<div style="background-image: url({{ bg-image }});"></div>
```

### Bootstrap + 11ty

👉 [Bootstrap's homepage](https://getbootstrap.com)
👉 [How to Isolate Bootstrap CSS to Avoid Conflicts (using LESS)](https://formden.com/blog/isolate-bootstrap)

```bash
# install
npm i bootstrap jquery popper.js
```

Using alongside with section "[SCSS to CSS](#scss-to-css)".

<div class="col-2-equal" markdown="1">

```bash
# folder structure
_assets/css/main.scss
_______/vender/_bootstrap.scss
```

```scss
// main.scss
@import "./vender/bootstrap";
```

</div>

```scss
// _bootstrap.scss
// all components
// @import "./../../../node_modules/bootstrap/scss/bootstrap.scss";

// Required
// check more: https://getbootstrap.com/docs/4.5/getting-started/theming/#importing
@import "./../../../node_modules/bootstrap/scss/functions";
@import "./../../../node_modules/bootstrap/scss/variables";
@import "./../../../node_modules/bootstrap/scss/mixins";
```

### Google Fonts

- Put fonts in `fonts/` and use [this tool](http://google-webfonts-helper.herokuapp.com/fonts/open-sans?subsets=latin) to generate `.woff`, `woff2` from Google Fonts. **Be careful on the location will be used on your site**.
- Copy and paste to `css/main.scss`.
- If you have a problem with `Content-Security-Policy`, check [this section](/for-me-only/#errors%3F).

### Using fontello icons

More icon fonts than Fontawesome. Choose fonts on [fontello](https://fontello.com/) > "Get config only".

```bash
# install fontello-cli
npm install -g fontello-cli

# Remove old session (if changing the current icons, not adding new ones)
rm .fontello-session

# install / update new icon
fontello-cli --config src/fontello/config.json --css src/fontello/css --font src/fontello/font install
```

```js
// .eleventy.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/fontello");
};
```

```html
<head>
  <link rel="stylesheet" href="/src/fontello/css/fontello.css" />
</head>
```

```html
<!-- usage -->
<i class="icon-doc"></i>
```

Check the code `-doc` in `src/fontello/config.json`, field `"css"`.

{{site.data.alerts.note}}
<div markdown="1">
**Note**: Sometimes, there are duplicates hexa/decimal code (although the names are different). On fontello website, navigate to "Customize Codes" tab, find duplicates and change them. Note that, in this tab, the codes are shown in hexa base but in the downlowded config, the codes are shown in decimal based (field `"code"`). You can use [this site](https://www.rapidtables.com/convert/number/decimal-to-hex.html) to convert between them.
</div>
{{site.data.alerts.end}}

### Layout
<div class="col-2-equal" markdown="1">

```bash
mkdir _includes/layouts
touch _includes/layouts/post.njk
```

```js
// create an alias
module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
};
```

```bash
# update changes
touch .eleventy.js
```

```yml
# then use
---
layout: post
---
```

</div>

##### Includes

Split layout into parts and include them in the main file.

```js {% raw %}
// in _includes/components/head.njk
{% include "custom/head.html" %}

// custom parameter
{% assign customClass = 'list-homepage' %}
{% include "custom/postslist.html" %}
// inside postlist.njk, just use {{ customClass }}
{% endraw %}
```

##### Template inheritance

Read this [tutorial](https://mozilla.github.io/nunjucks/templating.html#template-inheritance).

<div class="col-2-equal" markdown="1">

```html {% raw %}
<!-- _includes/layouts/base.njk -->
<body>
  <header>{% include topnav.html %}</header>
</body>
{% endraw %}
```

```html {% raw %}
<!-- _includes/layouts/post.njk -->
--- --- {% include "layouts/base.html" %} {% include topnav.html %}
<!-- only appear on post layout -->
{% endraw %}
```

</div>

##### Post's components

👉 [Page variable components](https://www.11ty.dev/docs/data-eleventy-supplied/#page-variable-contents).

```js
// URL can be used in <a href> to link to other templates
url: "/current/page/myFile/",

// For permalinks: inputPath filename minus template file extension (New in v0.3.4)
fileSlug: "myFile",

// For permalinks: inputPath minus template file extension (New in v0.9.0)
filePathStem: "/current/page/myFile",

// JS Date Object for current page (used to sort collections)
date: new Date(),

// The path to the original source file for the template
// Note: this will include your input directory path!
inputPath: "./current/page/myFile.md",

// Depends on your output directory (the default is _site)
// You probably won’t use this: `url` is better.
outputPath: "./_site/current/page/myFile/index.html"

templateContent: //the rendered content of this template. This does not include layout wrappers.

data: // all data for this piece of content (includes any data inherited from layouts)
// self-defined frontmatter tags can be found here
```

{{site.data.alerts.callout_info}}
For ones who wanna get only the content (escape HTML tags and special characters) of the post:
<pre class="language-bash"><div class="copy"><i class="fontello-icon icon-clone"></i></div><code class="language-bash"><span class="token punctuation">{</span><span class="token punctuation">{</span> page.templateContent <span class="token operator">|</span> dump <span class="token operator">|</span> safe <span class="token operator">|</span> striptags<span class="token punctuation">(</span>true<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><br></code></pre>
{{site.data.alerts.end}}

### Custom frontmatter fields

Suppose you use `specialTitle` in the frontmatter of your page (eg. `index.js`). You can use it in the template, eg. `header.njk`, as

{% raw %}
```html
{% if specialTitle %} {# content #} {% endif %}
```
 {% endraw %}

### Recognize home page
{% raw %}
```html
{% assign pageUrlLength = page.url | length %}
```
{% endraw %}

If `pageUrlLength > 1`, it's not home page!

### Frontmatter

<div class="col-2-equal" markdown="1">

```yml
---
title: Title of the post
description: description of the post
date: 2020-09-11
layout: layouts/post.html
---
```

```yml
---
tags:
  - default
# or
tags: [tag 1, tag 2]
---
```

</div>

### List of posts

Normal,

{% raw %}
```html
<ul>
  {% for post in collections.posts %}
  <li>
    <a href="{{ post.url | url }}"> {{ post.data.title }} </a>
  </li>
  {% endfor %}
</ul>

```
{% endraw %}

{{site.data.alerts.callout_info}}
<div markdown="1">
Other default variable (like `post.url`) can be found [here](https://www.11ty.dev/docs/data-eleventy-supplied/#page-variable-contents). Note that, you can use `page.templateContent` for the content of a page in some collections (not tested yet but you can try [link](https://www.11ty.dev/docs/collections/)).
</div>
{{site.data.alerts.end}}

#### Sort posts by titles

{% raw %}
```html
<!-- Create a new list -->
{% assign newPostList = [] %} {% for post in collections.posts %} {% assign
newPostList = (newPostList.push({title: post.data.title, url: post.url}),
newPostList) %} {% endfor %}

<!-- list of post by alphabet -->
<ul>
  {% for post in newPostList|sort(attribute='title') %}
  <li>
    <a href="{{ post.url | url }}"> {{ post.title }} </a>
  </li>
  {% endfor %}
</ul>

```
{% endraw %}

### Posts by categories / tags

In this case, ==we consider a category as the first tag== of a post. For example, if a post has tags `tags: [tag 1, tag 2, tag 3]`, then `tag 1` will be its category!


```json
// _data/categories.json
[
  {
    "name": "Cat 1",
    "icon": "/img/cats/cat_1.svg"
  },
  {
    "name": "Cat 2",
    "icon": "/img/cats/cat_2.svg"
  }
]
```
{% raw %}
```html
{% for item in categories %}
<div class="category-wrapper">
  <h2>{{ item.icon }} {{ item.name }}</h2>
  <ul class="post-list">
    {% for post in collections[item.name] %}
    <li class="post-item">
      <a href="{{ post.url }}"><h3>{{ post.data.title }}</h3></a>
    </li>
    {% endfor %}
  </ul>
</div>
{% endfor %}
```
{% endraw %}

:::

#### External posts

If you wanna add external posts (not generated by 11ty from `.md` files), do below steps. For example, on this site, I cretae some pages created by [Notion](https://www.notion.so/) and I wanna add them to category `MOOC`.

**Remark**: This section is used with [section "posts by categories"](#posts-by-categories-%2F-tags) and [section "sort posts by title"](#sort-posts-by-title).

```json
// _data/cat_ex_posts.json
[
  {
    "title": "DL4 - Convolutional Neural Network (CNN)",
    "url": "https://www.notion.so/dinhanhthi/CNN-by-deeplearning-ai-a081d253fc2c4c0b99edd2757c759b9e",
    "tags": ["MOOC", "Deep Learning"]
  },
  {
    "title": "DL5 - Sequence models",
    "url": "https://www.notion.so/dinhanhthi/CNN-by-deeplearning-ai-a081d253fc2c4c0b99edd2757c759b9e",
    "tags": ["MOOC", "Deep Learning"]
  },
  {
    "title": "NLP by HSE",
    "url": "https://www.notion.so/dinhanhthi/NLP-by-HSE-20cec3e92201475eb4d48787954f3aa4",
    "tags": ["MOOC", "NLP"]
  }
]
```
{% raw %}
```php
{% for item in categories %} {% assign postslist = collections[item.name] %} {% assign
newPostListCat = [] %} {% for post in cat_ex_posts %} {% for tg in post.tags %}
{% if tg == item.name %} {% assign more_post = true %} {% assign newPostListCat =
(newPostListCat.push({title: post.title, url: post.url, tags: post.tags}),
newPostListCat) %} {% endif %} {% endfor %} {% endfor %} {% assign newPostList = []
%} {% for post in postslist %} {% assign newPostList = (newPostList.push({title:
post.data.title, url: post.url}), newPostList) %} {% endfor %} {% if more_post
%} {% for post in newPostListCat %} {% assign newPostList =
(newPostList.push({title: post.title, url: post.url, tags: post.tags}),
newPostList) %} {% endfor %} {% endif %}
{% endhighlight %}
```

```html
<div class="category-wrapper">
  <h2>{{ item.icon }} {{ item.name }}</h2>
  <ul class="post-lihsboxst.url }}"><h3>{{ post.title }}</h3></a>
    </li>
    {% endfor %}
  </ul>
</div>
{% endfor %}
```
{% endraw %}

### Next / Previous post
{% raw %}
```html
<ul>
  {%- assign nextPost = collections.posts | getNextCollectionItem(page) %} {%- if
  nextPost %}
  <li>
    Next: <a href="{{ nextPost.url | url }}">{{ nextPost.data.title }}</a>
  </li>
  {% endif %} {%- assign previousPost = collections.posts |
  getPreviousCollectionItem(page) %} {%- if previousPost %}
  <li>
    Previous:
    <a href="{{ previousPost.url | url }}">{{ previousPost.data.title }}</a>
  </li>
  {% endif %}
</ul>

```
{% endraw %}

## Custom js scripts


```bash
# Put scripts in
# /src/main.js
```

{% raw %}
```html
<!-- in <head> -->
<script async defer src="{{ '/js/min.js' | addHash }}"></script>

```
{% endraw %}


Using [rollupjs](https://rollupjs.org/),

```js
// rollup.config.js
export default [
  {
    input: "src/main.js",
    output: [
      {
        file: "js/min.js",
        format: "iife",
        sourcemap: true,
        plugins: [terser()],
      },
    ],
  },
];
```

{{site.data.alerts.callout_warning}}
Using `rollup` as above way, we have only one output file `js.min.js`!
{{site.data.alerts.end}}

### Using custom js files for each page

Suppose that you have a custom frontmatter `customJS: ["file1.js, file2.js"]` containing all custom js files. It means that the files `file1.js` and `file2.js` are presented only in this page! (If we integrate them in `main.js`, they will be integrated ub all other pages after being rendered even if they're useless in those pages).

{% raw %}
```html
{% if customJS %} {% assign js %} {% for file in customJS %} {% include "js/"
+ file %} {% endfor %}
<script>
  {
    {
      js | jsmin | safe;
    }
  }
</script>
{% endif %}
```
{% endraw %}

Where `jsmin` is a filter created in [next section](#minify-js-file). All files `file1.js`, `file2.js` are stored in `_includes/_scripts/`.

##### Minify js files{:#minify-js-file}

```js
module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksAsyncFilter(
    "jsmin",
    async function (code, callback) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error("Terser error: ", err);
        callback(null, code);
      }
    }
  );
};
```

Usage (`_includes/scripts/search.js`),

{% raw %}
```html
{% assign js %} {% include "js/search.js" %}
<script>
  {
    {
      js | jsmin | safe;
    }
  }
</script>

```
{% endraw %}

## Last modified date

```js
// .eleventy.js
const { DateTime } = require("luxon");
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd-LL-yyyy");
  });

  eleventyConfig.addFilter("sitemapDateTimeString", (dateObj) => {
    const dt = DateTime.fromJSDate(dateObj, { zone: "utc" });
    if (!dt.isValid) {
      return "";
    }
    return dt.toISO();
  });
};
```

Last modified date,

{% raw %}
```html
{{ page.inputPath | lastModifiedDate | htmlDateString }}
```
{% endraw %}

## Insert code highlight

**Code syntax highlight**: Need [this plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/). List of [supported languages](https://prismjs.com/#languages-list).

<div class="col-2-equal" markdown="1">

````markdown
# Highlight line 2

```js/2
// lines of codes
```
````

````markdown
# Highlight line 2 to 4

```js/2-4
// lines of codes
```
````

````markdown
# Highlight line 2, 4

```js/2,4
// lines of codes
```
````

````markdown
# Delete line 2 (red highlight)

# and add line 4 (green highlight)

```js/4/2
// lines of codes
```
````

</div>

##### Insert liquid / nunjuck code

Inline code, put `{{ "{% raw " }}%}` and `{{ "{% endraw " }}%}` around the keyword.

Code block,

```js
~~~ js {{ "{% raw " }}%}
// line of codes
{{ "{% endraw " }}%}
~~~
```

## Math equations Mathjax KaTeX (my choice)

##### Mathjax

Using [markdown-it-mathjax](https://github.com/classeur/markdown-it-mathjax)

##### KaTeX (my choice)

<details>
<summary class="detailSummary"><div markdown="span">"KaTeX: Use `markdown-it-katex`"</div></summary>

<p>
<div markdown="1">

Using [markdown-it-katex](https://github.com/iktakahiro/markdown-it-katex/) (use this version only),

```js
// .eleventy.js
const markdownIt = require("markdown-it");
const markdownItKatex = require("@iktakahiro/markdown-it-katex");

let markdownLibrary = markdownIt();
markdownLibrary.use(markdownItKatex);
```

```html
<!-- inside <head> -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css"
/>
```

💡 **Some tips**: working with KaTeX



```bash
# working
$$
\dfrac{1}{2}
$$
```

```bash
# not working
- Item

	$$
	\dfrac{1}{2}
	$$
- Item
```

```bash
# working again
- Item

  $$\dfrac{1}{2}$$ # without \n
- Item

```

:::

</div>
</p>
</details>

{{site.data.alerts.hr_faded}}

In this site, I use [`markdown-it-texmath`](https://www.npmjs.com/package/markdown-it-texmath). I choose this because we can overcome the weakness of `markdown-it-katex` in case of breaking lines in list mode & it's [more flexible](https://goessner.github.io/markdown-it-texmath/index.html) (you can try it online [here](https://goessner.github.io/markdown-it-texmath/markdown-it-texmath-demo.html)).

{{site.data.alerts.callout_primary}}
<div markdown="1">
**An important note**: the original version has a problem of whitespace before and after `<eq>` tag in the inline mode. That why instead of seeing `aaa x aaa` with `aaa $x$ aaa`, we see `aaaxaaa`. I've changed (and reported [an issue](https://github.com/goessner/markdown-it-texmath/issues/25)). For a moment, I use a modified version [here](https://github.com/dinhanhthi/markdown-it-texmath). **Update**: The author couldn't reproduce the issue I met (with version 0.8), he keep updating the plugin but I didn't try version 0.9. You better try it before trying my option!
</div>
{{site.data.alerts.end}}

```bash
# Install
# npm i markdown-it-texmath --save-dev # original, whitespace problem
npm i git+https://github.com/dinhanhthi/markdown-it-texmath.git --save-dev
```

```js
// .eleventy.js
const tm = require("markdown-it-texmath"); // or local folder if you use a customized version
module.exports = function (eleventyConfig) {
  md = require("markdown-it")().use(tm, {
    engine: require("katex"),
    delimiters: "dollars",
    katexOptions: { macros: { "\\RR": "\\mathbb{R}" } },
  });
};
```

<details>
<summary class="detailSummary"><div markdown="span"> If you wanna modify yourself `markdown-it-texmath`</div></summary>

<p>
<div markdown="1">


Copy the cloned folder `markdown-it-temath` (except `.git`, `.gitignore`, `test/`, `package-lock.json`) to a so-called `/third-party/` folder in your project. In `.eleventy.js`, you import it as

```js
const tm = require("./third_party/markdown-it-texmath");
```

:::

```html
<!-- Add in <head> -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css"
/>

<!-- Save to local and modify (or just use) -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/markdown-it-texmath/css/texmath.min.css"
/>
```
</div>
</p>
</details>

{{site.data.alerts.hr_faded}}
## Figures


{% raw %}
```bash
# Insert normally,
![description](/path/to/image)

```
{% endraw %}

```bash
# With custom classes
# (using markdown-it-attrs)
![](){:.custom-class}
```
* customzing image.html to act as an inline callout script for image files
> Add imagesurl frontmatter for the directory containing the images, and then assign the image files in `filenames="` `split: ","` before including `page_gallery.html` See below for an example

{% raw %}
```html
<div class ="image-gallery-yoga">
{% for name in filenames %}
    <div class="gallery-box">
    <a href="{{ page.imagesurl }}{{ name }}">
      <img src="{{ page.imagesurl }}{{ name }} " alt="{{ name }}"  class="img-gallery" />
     </a>
    </div>
 {% endfor %}
</div>
```
{% endraw %}

{% highlight ruby %}
{% raw %}
{% assign filenames="123.jpg,345.jpg,567.jpg" %}
{% include page_gallery.html %}
{% endraw %}
{% endhighlight %}

:::

### Using relative path?

In sert images with the path relative to the directory of `.md` files. Let's use [eleventy-plugin-page-assets](https://www.npmjs.com/package/eleventy-plugin-page-assets).

```bash
|- sample_posts/
| |- post.md
| |- img/
| | |- figure1.png
| |- figure2.png
|- src/
```

In `.eleventy.js`,

```js
const pageAssetsPlugin = require("eleventy-plugin-page-assets");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pageAssetsPlugin, {
    mode: "parse",
    postsMatching: "sample_posts/*.md",
    recursive: true,
  });
};
```

## Markdown

##### markdown-it & its plugins

We use [markdown-it](https://github.com/markdown-it/markdown-it) and [its plugins](https://www.npmjs.com/search?q=keywords:markdown-it-plugin). Just use `npm i <plugin-name> --save-dev` to install.

<details>
<summary class="detailSummary">My choices of useful plugins</summary>

<p>
<div markdown="1">

Search on [npm page](https://www.npmjs.com/) with the same name.

- `markdown-it-anchor` (use with `eleventy-plugin-nesting-toc`) to create anchor links for headings.
- `markdown-it-attrs` to use something like `{:#heading-id}` (like in Jekyll).
- `markdown-it-emoji` to insert emoji with shortcodes.
- `markdown-it-container` to use something like `:::info` for blocks.
- `markdown-it-footnote`
- `markdown-it-heading-wrapper` to wrap heading with containers.
- `markdown-it-kbd` to use `[[Ctrl]]` for keyboard-like style.
- `markdown-it-mark` to use `==Text==` for rendering to `<mark>Text</mark>`.
- `markdown-it-table-of-contents` for using `[[toc]]` anywhere we want.
- My [customized version](https://github.com/dinhanhthi/markdown-it-texmath) of `markdown-it-texmath`. **Update**: Check [this section](#math-equations).
- `@gerhobbelt/markdown-it-inline-text-color` for coloring inline text by using something like `{color:red}Text{color}`.

</div>
</p>
</details>

{{site.data.alerts.hr_faded}}


<details>
<summary class="detailSummary">How to use markdown-it's plugins in 11ty?</summary>

<p>
<div markdown="1">

Below are an example of inserting 2 plugins,

```js
// .eleventy.js
// An example of using plugins
const markdownIt = require("markdown-it");
var markdownItp = require("markdown-it")();

module.exports = function (eleventyConfig) {
  let markdownLibrary = markdownIt({
    html: true, // html tag inside source
    breaks: true, // use '\n' as <br>
    linkify: true, // Autoconvert URL-like text to links
  })
    .use(require("markdown-it-emoji")) // emoji
    .use(require("markdown-it-table-of-contents")); // [[toc]] (no spaces)
  eleventyConfig.setLibrary("md", markdownLibrary);
};
```
</div>
</p>
</details>

### Custom container

If you wanna create an **advanced custom container**, use plugin `markdown-it-container`. For example, you want export something like,

```html
<div class="hsbox">
  <div class="hs__title">
    <!-- Custom Title -->
  </div>
  <div class="hs__content">
    <!-- Custom markdown texts -->
  </div>
</div>
```

Just by using,

{% raw %}
```html
::: hsbox Custom Title Custom markdown texts :::
```
{% endraw %}

You can put in `.eleventy.js` like,

```js
.use(require('markdown-it-container'), 'hsbox', {
  validate: function (params) {
    return params.trim().match(/^hsbox\s+(.*)$/);
  },
  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^hsbox\s+(.*)$/);
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="hsbox"><div class="hs__title">'
        + markdownItp.renderInline(m[1])
        + '</div><div class="hs__content">';
    } else {
      // closing tag
      return '</div></div>';
    }
  }
})
```

##### Markdown inside `.njk`

<div class="col-2-equal" markdown="1">

```js
// .eleventy.js

module.exports = function (eleventyConfig) {
  eleventyConfig.addPairedShortcode("markdown", (content, inline = null) => {
    return inline
      ? markdownLibrary.renderInline(content)
      : markdownLibrary.render(content);
  });
};
```
{% raw %}
```html
{% markdown %}
<!-- html tags -->
<!-- no need spaces before/after -->
{% endmarkdown %}
```
{% endraw %}
</div>

##### HTML/nunjucks tags inside `.md`



```html
<!-- not working -->
<div>__abc__</div>
```

```html
<!-- working -->
<div>__abc__</div>
```

{% raw %}
```html
<!-- not working -->
<div class="list-of">
  {% for item in cv.education.list %}
  <div class="where">{{ item.where }}</div>
  <div class="title">{{ item.title }}</div>
  <div class="date">{{ item.date }}</div>
  {% endfor %}
</div>

```
{% endraw %}

{% raw %}
```html
<!-- working -->
<div class="list-of">
  {% for item in cv.education.list %}
  <div class="where">{{ item.where }}</div>
  <div class="title">{{ item.title }}</div>
  <div class="date">{{ item.date }}</div>
  {% endfor %}
</div>

```
{% endraw %}

:::

### Custom block shortcodes

<div class="col-2-equal" markdown="1">

<div>

To creata the same code block like above, i.e.,

```html
<div class="hsbox">
  <div class="hs__title">
    <!-- Custom Title -->
  </div>
  <div class="hs__content">
    <!-- Custom markdown texts -->
  </div>
</div>
```

</div>

<div>

Just by using,

{% raw %}
```html
{% hsbox "Custom Title" %}
<!-- Custom markdown texts -->
{% endhsbox %}
```
{% endraw %}

</div>
</div>

```js
// .eleventy.js

module.exports = function (eleventyConfig) {
  eleventyConfig.addPairedShortcode("hsbox", (content, title) => {
    return (
      '<div class="hsbox"><div class="hs__title">' +
      markdownLibrary.renderInline(title) +
      '</div><div class="hs__content">' +
      markdownLibrary.render(content) +
      "</div></div>"
    );
  });
};
```

### Custom inline shortcodes

If you wanna export something like,

```html
<a href="custom-url">ref</a>
```

by using `{% raw %}[link](custom-url){% endraw %}` (`""` is required). You can set,

```js
// .eleventy.js

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("ref", function (url) {
    return (
      '<sup><a href="' +
      url +
      '" rel="noopener noreferrer" target="_blank">[ref]</a></sup>'
    );
  });
};
```

## Search

For me, the best choice for search feature in 11ty is using [Elasticlunr](http://elasticlunr.com/) with some customizations.

<details>
<summary class="detailSummary"><div markdown="span">"Why not others?"</div></summary>

<p>
<div markdown="1">

Based on the purpose of **free**, **quick**, **full text** search:

- We don't choose Google's [Programmable Search](https://programmablesearchengine.google.com/) because: it contains ads, not index as we want, difficult to customize with personal theme,...
- We don't choose paid options like [Agolia](https://www.algolia.com/) because the free option contains very few units. It's absolutely not enough for your need. In case you still want to use it with less consumption, read [this article](https://www.kizu.ru/algolia-search/).

</div>
</p>
</details>

{{site.data.alerts.hr_faded}}

{% include tony.html content="Because your site becomes bigger in future, you cannot index the whole text of your site (every time you build). **My idea** is to create a custom frontmatter tag called 'keywords' which contains all of the important keywords used to determine the content of your posts. Of course, the cons is that you have to put the keywords manually!!" %}

Check [this repository](https://github.com/dinhanhthi/eleventy-search-demo), I've pulled and modified from [this one](https://github.com/duncanmcdougall/eleventy-search-demo) (The author takes so long to check my pull request ^^). My customization supports:

- Index your customizable keywords.
- Fix UX bugs in the main repo.
- Highlight found keywords in the search result.
- Limit the max number of texts in the result (show around the found keywords).
- Adapt to the newest version of 11ty.

## Data files

##### Apply data for all posts in a directory

👉 Check more in [official doc](https://www.11ty.dev/docs/data-template-dir/).

For example, we wanna add tag "posts" for all posts in a folder named "sample_posts". Inside `/sample_posts/`, create a file `sample_posts.son` (yes, the same name as "sample_posts") with following content,

```json
{
  "tags": ["posts"]
}
```

### Using external data files with environment `env`

Suppose your data file `_data` is not in `src/` but `notes/_data/`.

```js
// .eleventy.js
module.exports = function (eleventyConfig) {
  return {
    dir: {
      data: dataDir,
    },
  };
};
```

You can change `dataDir` based on the settings of `env`.

In case you have a setting file in `notes/_data/settings.json`. Sometimes, you use it as a data files via `dataDir` (just `settings.*`), sometimes, you use it as a nseparated `json` file. For example, you use it in a separated js file `toggle-notes.js`,

```js
// You CAN'T use below
import settings from "../../../notes/_data/settings.json";
// ❗ There will be an error
// Cannot use import statement outside a module
```

**Solution**, in `.eleventy.js`,

```js
const settings = require("./" + thiDataDir + "/settings.json");
module.exports = {
  environment: process.env.ELEVENTY_ENV, // the same place with this
  settings: settings,
};
```

Then in `toggle-notes.js`,

```js
env.settings.someThing;
```

### Local data files

```js
// .eleventy.js
module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
```

You put all your data files (`.js` or `.json`) in `_data`, e.g.,

<div class="col-2-equal" markdown="1">

```json
// _data/dataUrls.json
[
  {
    "name": "abc",
    "url": "http://abc.com"
  },
  {
    "name": "xyz",
    "url": "http://xyz.com"
  }
]
```

{% raw %}
```html
<!-- in a .njk file -->
{% for item in dataUrls %} {{ item.name }} {{ item.url }} {% endfor %}
```
{% endraw %}
</div>

<div class="col-2-equal" markdown="1">

```json
// _data/cat_icon.json
{
  "Project-based Learning": {
    "svg": "/img/cats/project.svg"
  },
  "MOOC": {
    "svg": "/img/cats/mooc.svg"
  }
}
```

```js
// .eleventy.js
const catIcon = require("./_data/cat_icon.json")
// usage
catIcon[page.data.tags[1]].svg,

// .njk
catIcon[page.data.tags[1]].svg,
```

</div>

For example, export a **current year** on site,

<div class="col-2-equal" markdown="1">

```js
// _data/helpers.js
module.exports = {
  currentYear() {
    const today = new Date();
    return today.getFullYear();
  },
};
```
{% raw %}
```html
<!-- in a .njk file -->
<div>{{ helpers.currentYear() }}</div>

```
{% endraw %}
</div>

### Fetched JSON from an external source

For example, [this post](/good-github-repositories/) displays a list of starred github repositories (by me) which is fetched from `https://api.github.com/users/dinhanhthi/starred`.

```js
// in .eleventy.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("list_repos", getLiList);
  async function getRepoData(_url) {
    const response = await fetch(_url);
    return await response.json();
  }
  async function getLiList() {
    function compare(a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    }
    // escape HTML tags
    function htmlEntities(str) {
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }
    var repos = "";
    const data = await getRepoData(
      "https://api.github.com/users/dinhanhthi/starred?page=1&per_page=10000"
    );
    data.sort(compare).forEach((obj) => {
      repos +=
        "<li>" +
        '<a href="' +
        obj.html_url +
        '" target="_blank">' +
        obj.name +
        "</a>" +
        " by <i>" +
        obj.owner.login +
        "</i> — " +
        htmlEntities(obj.description) +
        "</li>";
    });
    return "<ol>" + repos + "</ol>";
  }
};
```
{% raw %}
```js
// in post
{% list_repos %}

```
{% endraw %}
## Working style

##### Custom environment

More info, read [official doc](https://www.11ty.dev/docs/data-js/#example-exposing-environment-variables). For example, we only perform something differently on local.

```json
{
  "scripts": {
    "local-build": "ELEVENTY_ENV=local eleventy"
  }
}
```

An example of using in `.eleventy.js`,

```js
// .eleventy.js
module.exports = {
  environment: process.env.ELEVENTY_ENV,
};

module.exports = function (eleventyConfig) {
  if (process.env.ELEVENTY_ENV == "local") {
    // do something locally
  } else {
    // do something on server
  }
};
```

Or using in the template,

<div class="col-2-equal" markdown="1">

```js
// _data/myProject.js
module.exports = {
  environment: process.env.ELEVENTY_ENV,
};
```
{% raw %}
```js
{% if myProject.environment == "local" %}
  <style>{{ css | cssmin | safe }}</style>
{% else %}
  <style>{{ css | safe }}</style>
{% endif %}

```
{% endraw %}
</div>

### Incremental build

❗ It's impossible for the current version (up to`^1.0.0`)! (However, it's [on the list of priorities](https://github.com/orgs/11ty/projects/3#card-33546621)).

👎 **Weakness of 11ty**:



1. There is some change in files, 11ty rebuilds the whole site. It's painful if we work with markdown files and save them regularly!
2. Cannot access the site while the building processing.

💡 **Idea**:



1. Build manually, e.g. `npm run build-local` to `_site` folder.
2. Copy all files in `_site` to a so-called folder `_live`
3. Run a custom server on folder `_site` (install `npm i http-server -g` first)

An example of scripts,

```json
{
  "scripts": {
    "local-build": "ELEVENTY_ENV=local eleventy && mkdir -p _live && cp -Rf _site/* _live/",
    "local-serve": "mkdir -p _live && cp -Rf _site/* _live/ && http-server _live"
  }
}
```

### Working with themes locally?

From version 1.0.0 (currently, I use version `1.0.0-canary.38`), we can customize `eleventyConfig.ignores` right in `.eleventy.js`. Use this to make different `posts` folders for local and for remote. Because there are too many posts which are going to be built, it takes a very long time to see the changes. **If you just wanna make changes in theme, you need a separated folder (having less number of posts)**.

For example,

- Only process posts in `notes/*` on remote (ignore `sample_posts/*`).
- Only process posts in `sample_posts/*` on local (ignore `notes/*`).

<script src="https://gist.github.com/aiegoo/f9c4f7aa00854345609ac664df36e160.js"></script>

## Nunjucks things

Add a new item to a list,

```js {% raw %}
{% assign a = [1,2] %}
{% assign a = (a.push(3),a) %}
{% endraw %}
```

Create a dictionary with nunjucks

```js {% raw %}
{% assign items = {'a': 1, 'b': 2} %}
{% endraw %}
```

Add a new key-value to a dictionary,

```js {% raw %}
// .eleventy.js -> create a new filter
eleventyConfig.addFilter('setAttribute', function(dictionary, key, value) {
	dictionary[key] = value;
	return dictionary;
});

// usage
{% assign myDict = {"key1": 0, "key2": 0, "key3": 0}%}
{% assign myDict = myDict|setAttribute('key2', 123) %}
{{myDict['key2']}} // pring "123" as expected
{% endraw %}
```

String concatenations,

```html {% raw %}
{# Not working #} {% set url = "/bits/{{ data.slug }}" %} {# Working #} {% set
url = ["/bits/", data.slug] | join %} {% endraw %}
```

## Errors

```bash
# TypeError: Cannot read property 'type' of undefined
# => Class comes before ![]() of an image!
```

```bash
# EISDIR: illegal operation on a directory
# Solution:
# Delete _site/ and rebuild!
```

```bash
# ENOTDIR: not a directory...
# Solution:
# Delete _site/ and rebuild!
```

```bash
# Invalid DateTime
# Just for new posts => try to commit (on branch "dev") before building!
```

## References



1. [Official website.](https://www.11ty.dev/)
2. [Nunjucks Documentation](https://mozilla.github.io/nunjucks/templating.html)
3. [Moving from WordPress to Eleventy](https://www.mattnortham.com/blog/2020/moving-from-wordpress-to-eleventy/)
4. [From Jekyll to Eleventy - Webstoemp](https://www.webstoemp.com/blog/from-jekyll-to-eleventy/)
5. [Creating an 11ty Plugin - SVG Embed Tool - bryanlrobinson.com](https://bryanlrobinson.com/blog/creating-11ty-plugin-embed-svg-contents/)


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
