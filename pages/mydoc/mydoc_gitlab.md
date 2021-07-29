---
title: self-managed gitlab
tags: [git, drone, setup]
last_updated: July 10, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "summary."
sidebar: mydoc_sidebar
permalink: mydoc_gitlab.html
folder: mydoc
---


## Gitlab
[link](https://eggs.or.kr)


### gitlab-rails console

```bash
ssh root@159.65.8.44
# gitlab-rails console
#  user = User.find_by_username 'exampleuser'

#or

 user = User.find(123)

#or

 user = User.find_by(email: 'onofftony@gmail.com')

 user.password = 'secret_pass'
 user.password_confirmation = 'secret_pass'

 user.send_only_admin_changed_your_password_notification!
 user.save!
```

#### in case password reset doesn't appear to work;

> skip the reconfirmation feature as in below

```
 user = User.find(1)
 user.skip_reconfirmation!
```

> If the username was changed to something else and has been forgotten, one possible way is to reset the password using Rails console with user ID 1 (in almost all the cases, the first user is the default admin account).

![example](https://github.com/aiegoo/config/blob/master/gitlab-rails.png)
