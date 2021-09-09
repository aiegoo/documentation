---
title: Handson github actions
keywords: git, getting-started
summary: "Implement ci/cd with github actdions workflows for your apllications"
sidebar: mydoc_sidebar
permalink: books_gitactions.html
simple_map: true
map_name: books-git
box_number: 2
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
[gollum_repo](https://github.com/aiegoo/gollum)

```
nohup gollum . &

nohup ruby image.rb &
```
gollum is self-managed wiki
## Python search API
* Agithub https://github.com/jpaugh/agithub
* WxPython http://www.wxpython.org
* PyInstaller http://pythonhosted.org/PyInstaller

```python
#!/usr/bin/env python
import os, subprocess
import wx
from agithub import Github
class SearchFrame(wx.Frame):
     pass
if __name__ == '__main__':
     app = wx.App()
     SearchFrame(None)
     app.MainLoop()
```

```python
GITHUB_HOST = 'github.com'
def git_credentials():
os.environ['GIT_ASKPASS'] = 'true'
p = subprocess.Popen(['git', 'credential', 'fill'],
          stdout=subprocess.PIPE,
          stdin=subprocess.PIPE)
stdout,stderr = p.communicate('host={}\n\n'.format(GITHUB_HOST))
creds = {}
for line in stdout.split('\n')[:-1]:
          k,v = line.split('=')
          creds[k] = v
     return creds
```
## .Net status API

## Ruby jekyll

```bash
export USERNAME=aie***
jekyll new $USERNAME.github.io
cd $USERNAME.github.io
git init
git commit -m "Initial checkin" -a
hub create # You'll need to login here...
sleep $((10*60)) && open $USERNAME.github.io
```

```ruby
ruby -rubygems -e 'require "jekyll-import";
     JekyllImport::Importers::WordPress.run({
          "dbname"
          => "wordpress",
          "user" => "hastie",
          "password" => "lanyon",
          "host" => "localhost",
          "status" => ["publish"]
     })'
```

```ruby
ruby -rubygems -e 'require "jekyll-import";
     JekyllImport::Importers::WordpressDotCom.run({
          "source" => "wordpress.xml",
          "no_fetch_images" => false,
          "assets_folder" => "assets"
     })'

```

- If you want to keep this metadata, then you might consider another import option like Exitwp. Exitwp is a Python tool that provides a much higher level of fidelity between the original Wordpress site and the final Jekyll site

## Android git data API

## Coffescript, hubot activity API

## Javascript data API


## Gihub Enterprise

## Ruby, Nodejs, shell
