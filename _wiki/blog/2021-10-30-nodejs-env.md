---
layout: post
title: "Using .env file in a nodejs project"
name: "nodejs-env"
tags: [node javascript api]
tagName: node
permalink: 2021-10-30-nodejs-env.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "apis env secret keys tokens nodejs node.js environment javascript process.env dotenv github codespaces action dependabot"
summary: "Sat, Oct 30, 21, settig up, nodejs js integration, or with github settings"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-10-30T09:24:12 +0900
updated: 2021-10-30 09:24
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Thi

👉 We use [dotenv](https://www.npmjs.com/package/dotenv).
👉 For VSCode, use [DotENV extension](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv).

## Setting up

For a simple nodejs project,

``` bash
npm init -y
npm i dotenv

# Create .env in this project
# MAKE SURE IGNORE IT IN GIT !!!
```

## Usage in a Node.js

```js
// At the top of the app
require('dotenv').config()

// Use
const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
```

## Use with js file

Use with a simple `.js` file? Using **command line**!

```bash
node -r dotenv/config your_script.js

# Custom path
node -r dotenv/config your_script.js dotenv_config_path=/custom/path/to/.env

# Single variable
DOTENV_CONFIG_<OPTION>=value node -r dotenv/config your_script.js
```

## Use it in Github?

```bash
# In Github Action
https://github.com/dinhanhthi/<your-repo>/settings/secrets/actions

# In Github Codespaces
https://github.com/dinhanhthi/<your-repo>/settings/secrets/codespaces

# In Dependabot
https://github.com/dinhanhthi/<your-repo>/settings/secrets/dependabot
```

An example of using Github Action (key `SECRET_TOKEN` is already defined in /settings/...),

``` bash
# Use a GitHub Actions secret variable in a bash shell
- name: Step 2 - GitHub Action if statement (true)
  env:
    WHO_TO_TRUST: ${{ secrets.SECRET_TOKEN }}
  if:  env.WHO_TO_TRUST == 'TrustNo1'
  run: echo "I know what the secret token is!"

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
