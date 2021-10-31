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

<div class="col-2-equal"><pre class="language-bash"><div class="copy"><i class="fontello-icon icon-clone"></i></div><code class="language-bash"><span class="token function">mkdir</span> _includes/layouts<br><span class="token function">touch</span> _includes/layouts/post.html</code></pre><pre class="language-js"><div class="copy"><i class="fontello-icon icon-clone"></i></div><code class="language-js"><span class="token comment">// create an alias</span><br>module<span class="token punctuation">.</span><span class="token function function-variable">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">eleventyConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><br>  eleventyConfig<span class="token punctuation">.</span><span class="token function">addLayoutAlias</span><span class="token punctuation">(</span><span class="token string">"post"</span><span class="token punctuation">,</span> <span class="token string">"layouts/post.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><br><span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre><pre class="language-bash"><div class="copy"><i class="fontello-icon icon-clone"></i></div><code class="language-bash"><span class="token comment"># update changes</span><br><span class="token function">touch</span> .eleventy.js</code></pre><pre class="language-yml"><div class="copy"><i class="fontello-icon icon-clone"></i></div><code class="language-yml"><span class="token comment"># then use</span><br><span class="token punctuation">---</span><br><span class="token atrule key">layout</span><span class="token punctuation">:</span> post<br><span class="token punctuation">---</span></code></pre></div>


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
