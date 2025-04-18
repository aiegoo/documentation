---
layout: post
title: "playing detectives to restore my sanity when something terribly wrong"
name: "git-save-myday"
tags: [git]
tagName: git
permalink: 2021-10-21-git-save-myday.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: emergency
keywords: "git restore reset revert rev list checkout name status"
summary: "Thu, Oct 21, 21, refactor move delete and remove differ-filter rev-list to restore lost files"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-10-21T14:59:50 +0900
updated: 2021-11-10 07:29 PM
---
* TOC
{:toc}

## Nov 10, 2021 submodule issue
I ran `git submodule update --recursive --remote` to get the all the files from different repos. My documentation repo is serving Pages and some issues of not accepting ssh format (git@github.com) resulted in the infamous build error. In confusion, I only deleted the part in `.git/config`, and honestly looked for modules with a wrong name. So I ran ran `git submodule deinit -- submodule path` which produced many errors such as not having the path. So I ran `rm -rf the submodule folder`, then `git rm --cached submodule_path` all of these actions I took resulted in more chaos. From this catastrophe, I had foreboding sense that I would run `git reset --hard toworkingcommit`. I know I would lose all the work of today.

I stopped. Paused. Did some physical exercise. And sat down on my other pc where my work of yesterday was preserved.

I followed a strict step-by-step to deal with the issues. First, I removed unnecessary submodules and changed ssh naming with https:// protocol and made sure that each repo is public. Satisfied that no other liquid syntax issues were hiding from sights, I ran `git push origin edit --force` This command played out and got it deployed as well.

Back to my laptop pc with the issues, I created a branch and pushed to the remote for safekeeping. Back onto the edit branch, I pulled from the remote and found fortunately that only a couple of files were in merge conflicts. I have fixed them by committing it. No issues were found. And started checking for the status quo of any issues, which were nonexistant.
![image](https://user-images.githubusercontent.com/42961200/141099724-d8cd3c09-f38c-4d3a-a975-77e433e1518e.png)

When I pushed the once-again-whole commit, I noticed there were 16 other commits being pushed together.

## curious programmer
I was working on an about module a few months ago. I wasn't satisfied with it so I deleted it with all its related files 😬 Now I need to recover parts of this data that I had so conveniently discarded. 🤦‍♀️

I can't remember the exact location of the files on disk that I am looking for and I don't know what to look for in the history, but luckily Git offers numerous ways of playing detective 🕵️ so I can try to get what I want back. If I recall correctly, I was working on a page called about.js.

This article is a curation of the different ways I could find to find files that can be recovered and then actually recover them. We are going to use the example of finding the lost about page and related files that selectively need to be restored.

In this article I refer to bash± git lg which is a Git alias that I added to my global config which will print a shortened pretty version of my git history (the log).

What is the file that must be restored?
Choose a search term which you think may appear in the commit message. Think about using context-based terms like about or action-based terms like refactor, move, delete or remove. If you regularly reference file names in your commit then you can search by the filename. We are going to use the history to get the relative path and filenames of the files we want to restore.

git lg --name-status | grep <TERM>
Below is an example of the output where I got the relative filename for the about page. 👏

$ git lg --name-status | grep about
```diff
* 1a1305c |  Add about page (4 months ago) [Clarice Bouwer]
| A     src/Components/Headers/about.js
| A     src/images/about/people.jpg
:point_right: | M     src/pages/about.js
* 9ee2ea2 |  Create layout with global styles to prep about page (4 months ago) [Clarice Bouwer]
| A     src/pages/about.js
```
We can also page through commits that have files that have been deleted. These files are listed in the output.
```bash
git lg --diff-filter=D --summary
```
<style>
    img.emoji {
        font-size: 10px;
    }
</style>
``` diff
* 151ef7f |  Something destructive with my about page (4 weeks ago) [Clarice Bouwer]
|
|  delete mode 100644 src/Components/About/Contact/index.js
:point_right: |  delete mode 100644 src/pages/about.js
|  delete mode 100644 src/pages/credits.js
|  delete mode 100644 src/pages/tags.js
* 1410b48 |  Generate articles (4 months ago) [Clarice Bouwer]
|
|  delete mode 100644 build/pages-article.js

* 23cc5dc |  Delete old themes (4 months ago) [Clarice Bouwer]
|
|  delete mode 100644 src/Components/Themes/Dark.js
|  delete mode 100644 src/Components/Themes/Light.js
|  delete mode 100644 src/Components/Themes/index.js
```
If you are interested in more than just deleted files then you can also look into using Git whatchanged bash± git whatchanged

``` diff
commit 168f7c6e9f7dfc404b312fcc0436960e2d6cad1a
Author: Clarice Bouwer <cbillowes@gmail.com>
Date:   Thu Sep 2 06:48:09 2021 +0400

    Add about page with featured articles

M       articles/2016/2016-05-14-importance-of-git-history/index.md
M       articles/2016/2016-06-06-branding-your-identity/index.md
M       articles/2016/2016-11-13-the-imposter-within/index.md
M       articles/2019/2019-01-15-crafting-changes-in-git/index.md
M       articles/2019/2019-01-29-working-with-git-remotes/index.md
M       articles/2019/2019-09-02-git-aliases/index.md
M       articles/2020/2020-05-03-gatsby-source-plugin.md
A       src/images/avatar.png
A       src/pages/about.js
M       tailwind.config.js
```
In what commit was this file deleted?
Use git rev-list to list all commit objects for the specified file in reverse chronological order.

``` bash
git rev-list HEAD -- src/pages/about.js
$ git rev-list HEAD -- src/pages/about.js
168f7c6e9f7dfc404b312fcc0436960e2d6cad1a
e02cb810ed12448f390d2974a4986d72269d9ac4
1b5936ef601352698978176ee059dd3a6fe54fee
```
This is crappy so we are going to take these results and use them as arguments in the git show command to show all actual commits instead of just the objects.

``` bash
git rev-list HEAD -- src/pages/about.js | xargs git show $1 --name-status
$ git rev-list HEAD -- src/images/about/people.jpg | xargs git show $1 --name-status
commit faed0b3ef95d23a2f465eeedb5be8da0ece19075
Author: Clarice Bouwer <cbillowes@gmail.com>
Date:   Tue May 4 20:24:05 2021 +0400

    Theme switcher on about page

M       package-lock.json
M       package.json
M       src/Components/Layout/index.js
M       src/Components/ThemeSwitcher/index.js
D       src/images/about/coffee-begin.jpg
D       src/images/about/legos.jpg
D       src/images/about/people.jpg
D       src/images/about/screen-with-code.jpg
:point_right: D       src/pages/about.js

commit 1a1305c5f5774a1203f2f11f3a7b3c7513887dc6
Author: Clarice Bouwer <cbillowes@gmail.com>
Date:   Tue May 4 07:57:39 2021 +0400

    Add about page

M       gatsby-config.js
M       package-lock.json
M       package.json
M       src/Components/GlobalStyles/index.js
A       src/Components/Headers/about.js
M       src/Components/Layout/index.js
M       src/Components/Menu/index.js
M       src/Components/Navigation/index.js
A       src/images/about/people.jpg
M       src/pages/about.js
```
How can I restore this file?
💕 Git Tower has a brilliant guide titled Restoring deleted files in Git. In this guide they cover different scenarios in depth. I am going to summarize some of those commands here.

Deleted a file that was not committed. Works if file was staged or not.
```bash
git checkout HEAD <filename>
```
Deleted and committed the file. --soft so that you don't lose all your current changes.

```bash
git reset --soft HEAD~1
```
Deleted and then made more commits. Decide how far back you want to go to restore this file. Each one will be an incremented number starting from 1. ~ indicates that you are going back in time. Use the commit hash where the file was deleted and add this number to the end. faed0b3ef95d23a2f465eeedb5be8da0ece19075~1 Alternatively end the hash with a caret ^ to go to its previous commit.

```bash
# go back in time
git checkout <deletion commit hash>~1 -- <filename>

# another way to retrieve the file using the previous commit
git checkout <deletion commit hash>^ <filename>
```
Deleted and then pushed that commit.

### --no-commit
This option prevents the command from creating a new commit right away, instead allowing you to choose exactly which of the changes introduced in the old commit you want to revert in your new commit.

```bash
git revert --no-commit <commit>
```
And that's it! 🎉 Let me know if you have better techniques or alternative approaches. It would be great to add them here!


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
