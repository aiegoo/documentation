---
layout: post
title: "Github created first time"
name: "github-readme"
tags: [git]
tagName: git
permalink: 2021-11-01-github-readme.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "github git ssh readme shields badge https errors"
summary: "Mon, Nov 01, 21, ssh token key created first time"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-11-01T13:36:24 +0900
updated: 2021-11-01 13:36
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Thi

{% assign img-url = '/img/post/others' %}

👉 Note: [SSH](2021-10-21-Bash-cli.html#ssh).
👉 Note: [Git](/git/).

## View `README.md` localhost

```bash
pip install grip # https://github.com/joeyespo/grip
cd myrepo
grip # Running on http://localhost:6419/
```

**Update**: `grip` support with limited times of usage, we can use VSCode markdown previwer instead.

## Clone via git@ (ssh)

```bash
git clone --bare git@github.com:aiegoo/ar-starbucks

git config --local --bool core.bare false
```

***important***
create .git and move `HEAD branches config description hooks info objects refs` to it before running the 2nd cli.

::: success
**Update**: It's easier if we use [Github CLI](https://cli.github.com/)!
:::

👉 More references: [this](https://gist.github.com/jexchan/2351996) and [this](https://gist.github.com/oanhnn/80a89405ab9023894df7).


<details>
<summary class="detailSummary"><div markdown="span">If using 1 single account or need to create id keys</div></summary>

<p>
<div markdown="1">

```bash
# Windows + Linux
ssh-keygen -t rsa -b 4096 -C "eozz21@gmail.com"
# (-C for adding comment only)
# Enter a file:
# Linux: /home/{$USER}/.ssh/id_rsa
# Windows: C:\Users\{$USER}\.ssh\id_rsa
# Enter password
```

</div>
</p>
</details>



<details>
<summary class="detailSummary"><div markdown="span">Tell who you are</div></summary>

<p>
<div markdown="1">
```bash
# Tell who you are? (it's global, you may need to set it locally for each repo)
git config --global user.name "aiegoo"
git config --global user.email "eozz21@gmail.com"
```

In case you have multiple accounts, you have to indicate separatedly the account in each repository,

```bash
git config user.name "aiegoo"
git config user.email "eozz21@gmail.com"
```
</div>
</p>
</details>


<details>
<summary class="detailSummary"><div markdown="span">ssh/config for different accounts
If 2 accounts on 2 different platforms</div></summary>

<p>
<div markdown="1">
```bash
# ~/.ssh/config
# Default github account: eozz21@gmail.com
Host github.com
   HostName github.com
   IdentityFile ~/.ssh/id_rsa
   IdentitiesOnly yes

# Other github account: thi@ideta.io
Host github.com
   HostName github.com
   IdentityFile ~/.ssh/id_rsa_ideta
   IdentitiesOnly yes
```

If 2 accounts on the same platforms, eg. Github

```bash
Host *
	IdentityFile ~/.ssh/id_rsa.thi
	AddKeysToAgent yes

Host *
	IdentityFile ~/.ssh/id_rsa.ideta
	AddKeysToAgent yes
```


</div>
</p>
</details>



<details>
<summary class="detailSummary"><div markdown="span">If you use [zsh](/terminal/#zsh-linux)?</div></summary>

<p>
<div markdown="1">
It's important on linux, otherwise, you won't be able to use ssh-agent in zsh environment

```bash
# ~/.zshrc
plugins=(git ssh-agent)

update_ssh(){
	eval "$(ssh-agent -s)"
	ssh-add ~/.ssh/id_rsa.ideta
	ssh-add ~/.ssh/id_rsa.thi
}
alias ud_ssh='update_ssh'
```

Everytime you have problems, just `ud_ssh`.
</div>
</p>
</details>


<details>
<summary class="detailSummary"><div markdown="span">Reset ssh-agent on terminal</div></summary>

<p>
<div markdown="1">
```bash
# Delete all cached keys (be careful)
ssh-add -D

# Be careful, it will reset and use different agent!!!!
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
# ssh-add ~/.ssh/id_rsa_ideta

# Check saved keys
ssh-add -l
```

</div>
</p>
</details>

```bash
# Go to https://github.com/settings/keys
# copy public key
cat ~/.ssh/id_rsa.pub
```

```bash
# clone some repo
git clone git@github.com:aiegoo/portfolio.com.git
```

## Info

- Commits to a **fork** don't appear in your contributions graph.
- Commits to a generated from **template** can appear in your contributions graph.
- Get size of a github repo: `https://api.github.com/repos/<user>/<repo>` then find property "size". The size is in KB.

## Repo template



<details>
<summary class="detailSummary"><div markdown="span">Archived on 14/10/21</div></summary>

<p>
<div markdown="1">
I wanna make a theme `notetheme2` based on [dinhanhthi.com](https://github.com/dinhanhthi/dinhanhthi.com).

1. Make `dinhanhthi.com` be a template (Go to _Settings_)
2. Create a new repo based on this template.
3. Create a new branch `notetheme2` on `dinhanhthi.com`. Make changes on this branch.
4. Everything we have a "theme change" on `dinhanhthi.com/master`, merge it to branch `dinhanhthi.com/notetheme2`.
5. If there are **files** (only for files) in `dinhanhthi.com/notetheme2` you wanna keep, add below line to `.gitattributes` (under branch `dinhanhthi.com/notetheme2`) before performing the merge,

   ```bash
   # add line to .gitattributes
   echo 'file_name.txt merge=ours' >> .gitattributes
   # on windows, remove `''`
   ```

6. If there are **folders** (or **files**) in `dinhanhthi.com/notetheme2` you **don't wanna keep** (from `/master`), just delete them and make a new commit. From this time, later merges will ignore them.
7. If there are **folders** in `/notethem2` you wanna **keep the current state** (instead of merging from master), create a script `reset_folders.sh`

   ```bash
   #!/bin/sh
   # used for branch notetheme2 only
   echo 'Reset some only-this-branch folders after merging.'
   git reset folder_1 folder_2
   git checkout .
   git add .
   git commit -m "update from master"
   ```

   Each time you run the merge, run

   ```bash
   git merge master && sh reset_folders.sh
   ```

8. Update changes from `/notetheme2` to repo `notetheme2`[link](https://stackoverflow.com/questions/56577184/github-pull-changes-from-a-template-repository/56577320).

   ```bash
   # add dinhanhthi.com as a remote
   git remote add template [URL of the template repo]
   ```

   ```bash
   # update the changes
   git fetch --all
   ```

   ```bash
   # update from template's branch
   git merge template/notetheme2
   ```

9. If there is an error `fatal: refusing to merge unrelated histories`, try to add `--allow-unrelated-histories`. There must be [conflict](#conflict).

   ```bash
   # keep remotes
   git merge -X theirs template/notetheme2 --allow-unrelated-histories
   # keep local
   git merge -X ours template/notetheme2 --allow-unrelated-histories
   ```

</div>
</p>
</details>

## Add Shields tags

👉 Main shield site [here](https://shields.io/).
👉 Example of usage: [my main github page](https://pf3.36io.co).

```bash
# scikit-learn badge
http://img.shields.io/badge/-Scikit%20Learn-efa300?style=flat-square&logo=scikit-learn&logoColor=fff
# ...<NAME>-<Background-Color>?style...&logo=<LOGO>&logoColor=<LOGO-COLOR>
```

- Logo name can be found at [simpleicon](https://simpleicons.org/?q=node). If the name includes spaces, replace them with dashes (e.g: `?logo=visual-studio-code`)
- Wanna create a custom logo?
  - Change SVG to PNG if needed: use [this site](https://svgtopng.com/).
  - Change logo's color to white: use [this site](https://manytools.org/image/colorize-filter/).
  - Must resize the image to 14x14: use [this site](https://www.iloveimg.com/resize-image).
  - Convert to base64 file: use [this site](https://b64.io/), then copy `data:image/png;base64,iVB...` and paste after `&logo=`

## Errors

`fatal: Authentication failed for`: It's because you enabled two-factor authentication in your Github account.

1. Generate a new token: [click here](https://github.com/settings/tokens).
2. Copy that token and use it as a new password.

---

```bash
ssh: connect to host github.com port 22: No route to host
fatal: Could not read from remote repository
```

```bash
# solution
nano ~/.ssh/config
# add following
Host github.com
    Hostname ssh.github.com
    Port 443
# run again to check
ssh -T git@github.com
```
<details>
<summary class="detailSummary"><div markdown="span">git diff between braches or commits</div></summary>

<p>
<div markdown="1">
```bash
git remote show origin
git status -uno
git show-branch *master
git remote update 
	
git diff HEAD^ HEAD --compact-summary
git show
git diff --cached
git diff HEAD..origin/edit --compact-summary
```

For other use, see below

```bash
$ git diff HEAD..origin/edit --compact-summary
 _data/tags.yml                                   |   1 +
 _data/wikiMap.yml                                |   1 +
 _wiki/blog/2021-11-01-github-readme.md           |  27 ++-
 _wiki/blog/2022/2022-02-25-udacity-robot.md      |   2 +-
 _wiki/blog/2022/2022-04-10-radiomaster-tx16s.md  | 291 ++++++++++++++++++++++-
 _wiki/blog/2022/2022-06-23-ar-starbucks.md (new) |  75 ++++++
 gcs-docker                                       |   2 +-
 pages/tags/tag_ar.md (new)                       |  12 +
 8 files changed, 399 insertions(+), 12 deletions(-)

$ git pull
remote: Enumerating objects: 9, done.
remote: Counting objects: 100% (9/9), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 5 (delta 4), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (5/5), 992 bytes | 3.00 KiB/s, done.
From github.com:aiegoo/documentation
   3493c35a..63eb7d2e  edit       -> origin/edit
Updating f85d4ff9..63eb7d2e
Fast-forward
 _data/tags.yml                                  |   1 +
 _data/wikiMap.yml                               |   1 +
 _wiki/blog/2021-11-01-github-readme.md          |  55 ++++-
 _wiki/blog/2022/2022-02-25-udacity-robot.md     |   2 +-
 _wiki/blog/2022/2022-04-10-radiomaster-tx16s.md | 291 +++++++++++++++++++++++-
 _wiki/blog/2022/2022-06-23-ar-starbucks.md      |  75 ++++++
 gcs-docker                                      |   2 +-
 pages/tags/tag_ar.md                            |  12 +
 8 files changed, 427 insertions(+), 12 deletions(-)
 create mode 100644 _wiki/blog/2022/2022-06-23-ar-starbucks.md
 create mode 100644 pages/tags/tag_ar.md
(base)

```


</div>
</p>
</details>


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
