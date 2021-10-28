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
keywords: "js javascript package management Node Package Manager Ethan Brown espress live serve unit testing mocking refactoring"
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

--------------

```diff
As of version of 5 of npm, an additional file, package-lock.json, will be created. Whereas package.json can be “loose” in its specification of dependency versions (with the ^ and ~ version modifiers), package-lock.json records the exact versions that were installed, which can be helpful if you need to re-create the exact dependency versions in your project. I recommend you check this file into source control and don’t modify it by hand. See the package-lock.json documentation for more information.
```
{% include callout.html content="**Beaware** Node modules (also called CJS) use a different syntax than ECMAScript modules(ESM), and you may have to switch between the two syntaxes when you go between frontend and backend code. It’s a good idea to be familiar with both." type="info" %}
{% include callout.html content="**goodPoint!** Whenever you have a dependency, you have something that needs to be mocked(simulated) for effective testing. For example, our primary dependency is Express, which is already thoroughly tested, so we don’t need or want to test Express itself, just how we use it. The only way we can determine if we’re using Express correctly is tosimulate Express itself." type="default" %}

{{site.data.alerts.important}}
<pre>
{% highlight js %}
const fortune = require('./fortune')

exports.home = (req, res) => res.render('home')

exports.about = (req, res) =>
  res.render('about', { fortune: fortune.getFortune() })

exports.notFound = (req, res) => res.render('404')

// Express recognizes the error handler by way of its four
// argumetns, so we have to disable ESLint's no-unused-vars rule
/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render('500')
{% endhighlight %}
</pre> 
{{site.data.alerts.end}}

{{site.data.alerts.note}}
> how to write a test script using Jest
<pre>
{% highlight js %}
const handlers = require('../handlers')

test('home page renders', () => {
  const req = {}
  const res = { render: jest.fn() }
  handlers.home(req, res)
  expect(res.render.mock.calls.length).toBe(1)
  expect(res.render.mock.calls[0][0]).toBe('home')
})

test('about page renders with fortune', () => {
  const req = {}
  const res = { render: jest.fn() }
  handlers.about(req, res)
  expect(res.render.mock.calls.length).toBe(1)
  expect(res.render.mock.calls[0][0]).toBe('about')
  expect(res.render.mock.calls[0][1])
    .toEqual(expect.objectContaining({
      fortune: expect.stringMatching(/\W/),
    }))
})

test('404 handler renders', () => {
  const req = {}
  const res = { render: jest.fn() }
  handlers.notFound(req, res)
  expect(res.render.mock.calls.length).toBe(1)
  expect(res.render.mock.calls[0][0]).toBe('404')
})

test('500 handler renders', () => {
  const err = new Error('some error')
  const req = {}
  const res = { render: jest.fn() }
  const next = jest.fn()
  handlers.serverError(err, req, res, next)
  expect(res.render.mock.calls.length).toBe(1)
  expect(res.render.mock.calls[0][0]).toBe('500')
})
{% endhighlight %}
<p>To invoke our render, we need request and response objects. We’d be writing code all week if we wanted to simulate the whole request and response objects, but fortunately we don’t actually need much from them. We know that we don’t need anything at all from the request object in this case (so we just use an empty object), and the only thing we need from the response object is a render method. Note how we construct the render function: we just call a Jest method called jest.fn(). This creates a generic mock function that keeps track of how it’s called.</p>
</pre>
{{site.data.alerts.end}}

**Ref:**
[meet puppeteer.md](meet-puppeteer.html)

[creating a simple test code](#simple-test)
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

## simple test
#### 간단한 자바스크립트 테스트 코드 만들어보기

간단한 테스트 코드 작성을 위해서 아래와 같이 두 숫자의 합을 구하는 함수를 정의합니다.


```js
function sum(a, b) {
	return a + b;
}
```

이제 이 함수의 결과를 확인하는 테스트 코드를 작성해보겠습니다.
함수의 결과 값을 result라 하고, 기대 값을 expected라고 하겠습니다.

```js
var result = sum(1, 2);
var expected = 5;

if (result !== expected) {
	throw new Error(result + ' is not equal to ' + expected);
}
```

두 개의 합을 더한 결과(result)는 3이고 기대 값(expected)는 5이기 때문에 아래와 같은 오류가 발생합니다.

![error]({{ site.url }}/images/posts/web/javascript/js-testing/error1.png)

#### 간단한 테스트 함수 만들어보기

앞의 코드를 API 형태로 사용할 수 있게 함수로 변환해보겠습니다. 아래의 API 형태는 일반적인 테스트 라이브러리에서 흔하게 찾아볼 수 있습니다.

```js
expect(result).toBe(expected)
```

위와 같은 API를 사용하기 위해 앞에서 살펴본 테스트 코드를 expect()라는 함수에 포함합니다.
테스트 함수의 코드는 다음과 같습니다.

```js
function sum(a, b) {
	return a + b;
}

function expect(result) {
  return {
    toBe: function(expected) {
      if (result !== expected) {
      	throw new Error(result + ' is not equal to ' + expected);
      }
    }
  }
}
```

위의 함수를 아래와 같이 실행하면 아까와 같이 동일한 에러가 발생합니다.

```js
expect(sum(1,2)).toBe(5);
```

![error]({{ site.url }}/images/posts/web/javascript/js-testing/error1.png)

#### 그럴싸한 테스트 함수 만들어보기

앞에서 작성한 테스트 함수는 몇 번째 줄에서 오류가 났는지 추적하기가 어렵다는 단점이 있습니다.
또한, 각 테스트 함수의 역할이 구분되지 않죠. 이번엔 좀 더 의미 있는 테스트 함수를 작성해보겠습니다.

```js
function test(title, testCode) {
  try {
    testCode();
  } catch (error) {
    console.error(error);
  }
}

function expect(result) {
  return {
    toBe: function(expected) {
      if (result !== expected) {
      	throw new Error(result + ' is not equal to ' + expected);
      }
    }
  }
}
```

위 코드의 모양은 전형적인 테스트 라이브러리의 API 형태와 비슷합니다.
위 함수를 이용하면 다음과 같이 테스트를 할 수 있습니다.

```js
test('sum(1, 2) is not equal 5', function() {
  expect(sum(1, 2)).toBe(5);
});
```

앞의 예제와 마찬가지로 동일한 오류를 발생시키지만 이번엔 좀 더 추적하기가 쉽습니다.

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
