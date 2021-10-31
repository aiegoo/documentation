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
## Thi

{% assign img-url = '/img/post/js/gatsby' %}

::: warning
This is not a tutorial to create an 11ty website, this's a note! You can find some **very new and useful** techniques on this note alongside [the official documentation](https://www.11ty.dev/docs/).
:::

::: success
This note will be always updated!
:::

## custom plugin locally and deployed as site
[github_actions](https://gist.github.com/aiegoo/55437ea80b9f04055a89190d89777247)
## Installation

👉 First, install [nodejs](/nodejs-npm).
👉 Using [this starter template](https://github.com/11ty/eleventy-base-blog) or [Google's high performance statrer theme](https://github.com/google/eleventy-high-performance-blog) (recommended).

```bash
# Install dependencies
npm install
```

Depend on each theme, you should follow the installation steps given in that theme.

### Setting up with Netlify

Sometimes, 11ty takes too much time to build (especially on the task of optimizing images. On my site, it takes almost 10 minutes). You shouldn't use branch `master` to build you site because every time you make a push, Netlify will rebuild your whole site. You should create and use a new branch, so-called `prod` instead.


<details>
<summary><div markdown="span">"**Idea 1** -- manually build but should not use many times"</div></summary>

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

- The weakness of _Idea 1_ is that you let netlify build again your whole site with its resources. That's why it takes too much time! Remember that, you have only 300 free minutes to build.

<details>
<summary><div markdown="span">"**Idea 2** -- build locally and push `_site` only"</div></summary>

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


<details>
<summary><div markdown="span">"Example workflow with dinhanhthi.com"</div></summary>

<p>
<div markdown="1">
From the [main repo](https://github.com/dinhanhthi/dinhanhthi.com), I clone to 2 different folders

```bash
|- dinhanhthi.com # <- branch "dev"
|- dat.com 				# <- branch "_site"
```

On `dat.com`, I create a script called `ud_site.sh` which contains,

```bash
echo "Start building site"
cd ../dinhanhthi.com/
npm run build
cd ../dat.com/
echo "Start copying...."
cp -Rf ../dinhanhthi.com/_site/* _site/
echo "End copying"
git add .
git commit -m "Updated: `date +'%Y-%m-%d %H:%M:%S'`"
git push
```

For covenience, I create an alias in bash shell,

```bash
alias update_dat='cd ~/git/dat.com && sh ud_site.sh && cd -1'
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

### SCSS to CSS


<details>
<summary><div markdown="span">"If you use [node-sass](https://www.npmjs.com/package/node-sass)"</div></summary>

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


<details>
<summary><div markdown="span">"If you use [rollup](https://rollupjs.org/guide/en/) (like this site)"</div></summary>

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


<details>
<summary><div markdown="span">"If you use [parcel](https://parceljs.org)"</div></summary>

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


### Using [`postcss`](https://github.com/postcss/postcss)?

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

### Nunjucks inside css

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

**Note**: Sometimes, there are duplicates hexa/decimal code (although the names are different). On fontello website, navigate to "Customize Codes" tab, find duplicates and change them. Note that, in this tab, the codes are shown in hexa base but in the downlowded config, the codes are shown in decimal based (field `"code"`). You can use [this site](https://www.rapidtables.com/convert/number/decimal-to-hex.html) to convert between them.

### Layout

<div class="col-2-equal"><pre class="language-bash"><div class="copy"><i class="fontello-icon icon-clone"></i></div><code class="language-bash"><span class="token function">mkdir</span> _includes/layouts<br><span class="token function">touch</span> _includes/layouts/post.njk</code></pre><pre class="language-js"><div class="copy"><i class="fontello-icon icon-clone"></i></div><code class="language-js"><span class="token comment">// create an alias</span><br>module<span class="token punctuation">.</span><span class="token function function-variable">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">eleventyConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><br>  eleventyConfig<span class="token punctuation">.</span><span class="token function">addLayoutAlias</span><span class="token punctuation">(</span><span class="token string">"post"</span><span class="token punctuation">,</span> <span class="token string">"layouts/post.njk"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><br><span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre><pre class="language-bash"><div class="copy"><i class="fontello-icon icon-clone"></i></div><code class="language-bash"><span class="token comment"># update changes</span><br><span class="token function">touch</span> .eleventy.js</code></pre><pre class="language-yml"><div class="copy"><i class="fontello-icon icon-clone"></i></div><code class="language-yml"><span class="token comment"># then use</span><br><span class="token punctuation">---</span><br><span class="token atrule key">layout</span><span class="token punctuation">:</span> post<br><span class="token punctuation">---</span></code></pre></div>

#### Includes

Split layout into parts and include them in the main file.

<pre class="language-js"><div class="copy"><i class="fontello-icon icon-clone"></i></div><code class="language-js"><span class="token comment">// in _includes/components/head.njk</span><br><span class="token punctuation">{</span><span class="token operator">%</span> include <span class="token string">"components/head.njk"</span> <span class="token operator">%</span><span class="token punctuation">}</span><br><br><span class="token comment">// custom parameter</span><br><span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">set</span> customClass <span class="token operator">=</span> <span class="token string">'list-homepage'</span> <span class="token operator">%</span><span class="token punctuation">}</span><br><span class="token punctuation">{</span><span class="token operator">%</span> include <span class="token string">"components/postslist.njk"</span> <span class="token operator">%</span><span class="token punctuation">}</span><br><span class="token comment">// inside postlist.njk, just use {{ customClass }}</span><br></code></pre>

#### Template inheritance

Read this [tutorial](https://mozilla.github.io/nunjucks/templating.html#template-inheritance).

<div class="col-2-equal" markdown="1"><pre class="language-html"><div class="copy"><i class="fontello-icon icon-clone"></i></div><code class="language-html"><span class="token comment">&lt;!-- _includes/layouts/base.njk --&gt;</span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>{% block headerLogo %}{% endblock %}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span><br></code></pre><pre class="language-html"><div class="copy"><i class="fontello-icon icon-clone"></i></div><code class="language-html"><span class="token comment">&lt;!-- _includes/layouts/post.njk --&gt;</span><br>--- --- {% extends "layouts/base.njk" %} {% block headerLogo%}<br><span class="token comment">&lt;!-- only appear on post layout --&gt;</span><br>{% endblock %} </code></pre></div>


## Markdown

### markdown-it & its plugins

We use [markdown-it](https://github.com/markdown-it/markdown-it) and [its plugins](https://www.npmjs.com/search?q=keywords:markdown-it-plugin). Just use `npm i <plugin-name> --save-dev` to install.

{% raw %}
<div class="hsbox">
<div class="hs__title">My choices of useful plugins</div>
<div class="hs__content">

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
</div>
{% endraw %}

{% raw %}
<div class="hsbox">
<div class="hs__title">How to use markdown-it's plugins in 11ty?</div>
<div class="hs__content">

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
</div>
{% endraw %}

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

{% highlight html %}
```html 
::: hsbox Custom Title Custom markdown texts :::
```
{% endhighlight %}

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

### Markdown inside `.njk`

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
{% highlight html %}
```html 
{% markdown %}
<!-- html tags -->
<!-- no need spaces before/after -->
{% endmarkdown %} 
```
{% endhighlight %}
</div>

### HTML/nunjucks tags inside `.md`



```html
<!-- not working -->
<div>__abc__</div>
```

```html
<!-- working -->
<div>__abc__</div>
```

{% highlight html %}
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
{% endhighlight %}

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

{% highlight html %}
```html 
{% hsbox "Custom Title" %}
<!-- Custom markdown texts -->
{% endhsbox %} 
```
{% endhighlight %}

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
<summary><div markdown="span">"Why not others?"</div></summary>

<p>
<div markdown="1">

Based on the purpose of **free**, **quick**, **full text** search:

- We don't choose Google's [Programmable Search](https://programmablesearchengine.google.com/) because: it contains ads, not index as we want, difficult to customize with personal theme,...
- We don't choose paid options like [Agolia](https://www.algolia.com/) because the free option contains very few units. It's absolutely not enough for your need. In case you still want to use it with less consumption, read [this article](https://www.kizu.ru/algolia-search/).

</div>
</p>
</details>


Because your site becomes bigger in future, you cannot index the whole text of your site (every time you build). **My idea** is to create a custom frontmatter tag called "keywords" which contains all of the important keywords used to determine the content of your posts. Of course, the cons is that you have to put the keywords manually!!

Check [this repository](https://github.com/dinhanhthi/eleventy-search-demo), I've pulled and modified from [this one](https://github.com/duncanmcdougall/eleventy-search-demo) (The author takes so long to check my pull request ^^). My customization supports:

- Index your customizable keywords.
- Fix UX bugs in the main repo.
- Highlight found keywords in the search result.
- Limit the max number of texts in the result (show around the found keywords).
- Adapt to the newest version of 11ty.

## Data files

### Apply data for all posts in a directory

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

{% highlight html %}
```html 
<!-- in a .njk file -->
{% for item in dataUrls %} {{ item.name }} {{ item.url }} {% endfor %} 
```
{% endhighlight %}
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
{% highlight html %}
```html 
<!-- in a .njk file -->
<div>{{ helpers.currentYear() }}</div>

```
{% endhighlight %}
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
{% highlight js %}
```js 
// in post
{% list_repos %}

```
{% endhighlight %}
## Working style

### Custom environment

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
{% highlight js %}
```js 
{% if myProject.environment == "local" %}
  <style>{{ css | cssmin | safe }}</style>
{% else %}
  <style>{{ css | safe }}</style>
{% endif %}

```
{% endhighlight %} 
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

```js
// .eleventy.js
module.exports = {
  environment: process.env.ELEVENTY_ENV,
};

module.exports = function (eleventyConfig) {
  if (process.env.ELEVENTY_ENV == "local") {
    eleventyConfig.ignores.add("notes"); // ignore folder notes
    eleventyConfig.ignores.delete("sample_posts"); // use folder sample_posts
  } else {
    eleventyConfig.ignores.delete("notes"); // use folder notes
    eleventyConfig.ignores.add("sample_posts"); // ignore folder sample_posts
  }
};
```

```bash
# package.json
{
  "scripts": {
    "local:build": "ELEVENTY_ENV=local eleventy",
    "remote:build": "eleventy",
  }
}
```

## Nunjucks things

Add a new item to a list,
{% highlight js %}
```js 
{% set a = [1,2] %}
{% set a = (a.push(3),a) %}
```

Create a dictionary with nunjucks

```js 
{% set items = {'a': 1, 'b': 2} %}

```
{% endhighlight %}

Add a new key-value to a dictionary,
{% highlight js %}
```js 
// .eleventy.js -> create a new filter
eleventyConfig.addFilter('setAttribute', function(dictionary, key, value) {
	dictionary[key] = value;
	return dictionary;
});

// usage
{% set myDict = {"key1": 0, "key2": 0, "key3": 0}%}
{% set myDict = myDict|setAttribute('key2', 123) %}
{{myDict['key2']}} // pring "123" as expected

```
{% endhighlight %}

String concatenations,
{% highlight html %}
```html 
{# Not working #} {% set url = "/bits/{{ data.slug }}" %} {# Working #} {% set
url = ["/bits/", data.slug] | join %} 
```
{% endhighlight %}

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
