---
layout: post
title: "Nodejs and NPM install on different platforms"
name: "nodejs-npm"
tags: [node]
tagName: node
permalink: 2021-10-24-nodejs-npm.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "js javascript package management Node Package Manager Ethan Brown espress live serve"
summary: "Sun, Oct 24, 21, install nvm node npm and other packages, covered by Web Development with Node and Express by Ethan Brown"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-10-24T00:04:00 +0900
updated: 2021-10-24 00:04
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## book nodejs npm
{% include image.html file="bookcover/webdev-nodejs.png" caption="web development with node and express" %}
<script src="https://gist.github.com/aiegoo/9c1f463bb69075dd0ddffd7718dd8677.js"></script>
{% include tony.html content="Run npm install in the root folder of the project or lesson folder where package-lock.json is located" %}

> As of version of 5 of npm, an additional file, package-lock.json, will
be created. Whereas package.json can be “loose” in its specification
of dependency versions (with the ^ and ~ version modifiers),
package-lock.json records the exact versions that were installed,
which can be helpful if you need to re-create the exact dependency
versions in your project. I recommend you check this file into
source control and don’t modify it by hand. See the package-
lock.json documentation for more information.

{% include callout.html content="**Beaware** Node modules (also called CJS) use a different syntax than ECMAScript modules(ESM), and you may have to switch between the two syntaxes when you go between frontend and backend code. It’s a good idea to be familiar with both." type="information" %}

## Thi

## Install NodeJS & NPM

### Install multiple versions

First, need to [install nvm](https://github.com/nvm-sh/nvm). Run the line of `curl` and then run/add-to-zsh the line of `export`.

::: warning
Below commands are mostly for Linux/MacOS users.
:::

::: col-2-equal
``` bash
# FIRST INSTALL: the most recent lts release
nvm install --lts
```

``` bash
# install a specific version
nvm install 12.13.0
```

``` bash
# install latest version
nvm install node
```

``` bash
# list all installed versions
nvm ls
```

``` bash
# set default version of node
nvm alias default 12.13.0
```

``` bash
# full list of available versions
# be careful, it's too long!!!
nvm ls-remote
```

``` bash
# switch between versions
nvm use 12.13.0
# or (more quickly)
nvm use v15
```

``` bash
# uninstall some version
nvm uninstall 12.13.0
```
:::



### Single version

:point_right: Install NodeJS and NPM: [Windows & MacOS](https://nodejs.org/en/download), [Linux](https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions).

::: col-2-equal
``` bash
# UPDATE npm
npm cache clean -f # clear the cache first
sudo npm install -g npm
```

``` bash
# UPDATE node
sudo npm install -g n
sudo n stable
# refresh the shell
source ~/.zshrc # if using zsh
source ~/.bashrc # is using bash
```

``` bash
# Check version
npm -v
node -v
```
:::

### Shorthand CLI options

<div class="two-columns-list" markdown="1">

- `i`: `install`
- `-D`: `--save-dev` (`devDependencies`)
- `-P`: `--save-prod` (default), `--save`
- `-g`: `--global`
- `-f`: `--force`
- `ls`: `list`
</div>

## Install package

👉 [Official documentation](https://docs.npmjs.com/cli/install#:~:text=Install%20the%20dependencies%20in%20the,json%20.).

``` bash
npm install package_name # if it's in package.json, the indicated version will be installed
                         # otherwise, the newsest version will be installed
npm install --global package_name # global package
```

``` bash
# install all package in package.json
npm install
```

``` bash
# install + save to package.json
npm install --save package_name # save to package.json
npm install --save-dev package_name # save to package.json, in devDependencies
npm install --no-save package_name # don't save
```

``` bash
# install with version
npm install express@4.16.1
```

``` bash
# install a local package
npm install /path/to/package
```

``` bash
# from github repository
npm i git+https://github.com/abc/xyz.git # https
# or
npm i git+ssh://git@github.com/abc/xyz.git # ssh
```

``` bash
# list all installed packages (current project only)
ls node_modules
```

``` bash
# list all local (installed) packages
npm list # -g for globel # or use "ls"
npm list --depth=0 # without dependencies

# Check the current version of a (installed) package
npm list package_name # with "-g" for global

# Check the latest (not current) version of a package
npm view package_name version
```

``` bash
# Set python2 by default when installing npm packages
npm config set python python2
```

## Update package

::: col-2-equal
``` bash
# which global packages need to be updated?
npm outdated -g --depth=0

# update all global packages
npm update -g
```

``` bash
# update a package
npm update package_name # -g for global
```
:::

## Remove package

``` bash
npm uninstall package
```

## Run scritps

``` bash
# Install first
npm i --save npm-run-all
```

::: col-2-equal

``` json
// Run sequentially,
// package.json
"scripts": {
	"build": "run-s prod:*", // "run-s" = "npm-run-all -s"
	"prod:eleventy": "eleventy",
	"prod:parcel": "parcel build ./ -o ./",
}
```

``` json
// Run parallely,
// package.json
"scripts": {
	"start": "npm-run-all --parallel dev:*",
	"dev:eleventy": "eleventy --serve",
	"dev:parcel": "parcel watch ./ -o ./",
}
```
:::

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
