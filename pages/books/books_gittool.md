---
title: Tools built using Github API
keywords: git, getting-started
summary: "to build tools with the Github API and related open source technologies such as Jekyll, Hubot and Gollum"
sidebar: mydoc_sidebar
permalink: books_gittool.html
simple_map: true
map_name: books-git
box_number: 1
toc: true
folder: books
---

## the book
[pdf](https://github.com/aiegoo/matlab/blob/edit/pdf/githubtools.pdf)
[code](https://github.com/aiegoo/building-tools-with-github.git)
![overview](https://user-images.githubusercontent.com/42961200/130544254-1678d397-ec3a-48a4-83dd-559c594cfd3a.png)
## Github API

```bash
curl -i/-v/-h https://api.github.com
curl -u aiegoo https://api.github.com/rate_limit
```

### Username/pw authentication

### Oauth

```
curl -u username -d '{"scopes":["public_repo"], "note": "A new authorization"}' \
https://api.github.com/authorizations

```

---
**NOTE**

It doesn't seem to work with the above script.

---

#### XHR, Json-p

```
curl https://api.github.com/?callback=myCallback
```

<script src="https://gist.github.com/aiegoo/b06b4d84a3f2dec1dcb1be072615ed30.js"></script>

```
URL='https://api.github.com/repos/rails/rails/issues/11819'

curl -s $URL | jq '.body'
curl -s $URL | jq '.body_html'
curl -s $URL \
-H "accept: application/vnd.github.html+json" | jq '.body_html'
```


## Gists 

```
The important thing to note about hypermedia APIs is that payloads contain meta‐data about data itself and metadata about the possible options of operating on the data. RESTful APIs typically provide a mapping outside of the payload. You have to join the API sitemap with the data in an ad hoc way when using RESTful APIs; with hypermedia APIs your client can react to the payload itself correctly and intelligently without knowing anything about a sitemap stored in human-readable documentation.
```

## Wiki with gollum

## Python search API

## .Net status API

## Ruby jekyll

## Android git data API

## Coffescript, hubot activity API

## Javascript data API


## Gihub Enterprise

## Ruby, Nodejs, shell
