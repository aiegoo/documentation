---
title: RAG HACK
tags: [python, django]
tagName: django
last_updated: July 14, 2021
keywords: API, content API, two scoops, django, books
summary: "summary."
sidebar: mydoc_sidebar
permalink: mydoc_twoscoops.html
folder: mydoc
---

<a href="tel:+821025441197">call my cell for text messages</a>

[if any link not working, click here for details](#links)

[ARTICLES](#articles)

## rag overview

![rag1](./images/ai/ragTree-1.png)
![rag2](./images/ai/ragTree-2.png)!
![rag3](./images/ai/ragTree-3.png)
![rag4](./images/ai/ragTree-4.png)
![rag5](./images/ai/ragTree-5.png)
![rag6](./images/ai/ragTree-6.png)

**books**

<style>
.customtable tr:nth-child(odd) { background-color: #0087ff6e; }
.customtable td:nth-child(2) { color: white; background: #0087ff6e; }
.customtable tr:nth-child(3) { color: black; background: yellow; }
.customtable td:nth-child(even) { color: black; background: #b1b0e1}
</style>

{:.customtable}
|---
| [two_scoop3](https://github.com/aiegoo/uas-reference/blob/master/web-dev/twoscoops.pdf) | [django_microservice](https://github.com/aiegoo/uas-reference/blob/master/web-dev/django-microservice.pdf)
| [django-pratical](https://github.com/aiegoo/uas-reference/blob/master/web-dev/django-pratical.pdf) | [djangoapi](https://github.com/aiegoo/uas-reference/blob/master/web-dev/djangoapi.pdf)
| [two_scoop1](/django.html)

**you will like these links**
- udemy course, and other resources in this site.
## it begins with;

{% include copyto.html %}
```shell
python -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```
## chapter 5 settings and requirements files

### settings 

- details

```diff
settings/
├── __init__.py
├── base.py
├── local.py
├── staging.py
├── test.py
├── production.py
```

```shell
python manage.py shell --settings=config.settings.local
```

## chapter 4 Django app design

### uncommon app names

<details> 
  <summary class="detailSummary"> click here to expand </summary>

```
scoops/
├── api/
├── behaviors.py
├── constants.py
├── context_processors.py
├── decorators.py
├── db/
├── exceptions.py
├── fields.py
├── factories.py
├── helpers.py
├── managers.py
├── middleware.py
├── schema.py
├── signals.py
├── utils.py
├── viewmixins.py
```

</details>

### django service layer
- https://www.b-list.org/weblog/2020/mar/16/no-service/
- https://www.b-list.org/weblog/2020/mar/23/still-no-service/
- https://www.dabapps.com/blog/django-models-and-encapsulation/

## chapter 3 django project layout

### project templates

https://github.com/pydanny/cookiecutter-django
Featured in this chapter.

https://github.com/grantmcconnaughey/cookiecutter-django-vue-graphql-aws
Also featured in this chapter.

https://djangopackages.org/grids/g/cookiecu

### default directory map

<details>
  <summary> click here to expand </summary>

```text
mysite/
├── manage.py
├── my_app
│ ├── __init__.py
│ ├── admin.py
│ ├── apps.py
│ ├── migrations
│ │
│ ├── models.py
│ ├── tests.py
│ └── views.py
└── __init__.py
└── mysite
├── __init__.py
├── asgi.py
├── settings.py
├── urls.py
└── wsgi.py
```

</details>

### Big map

```
<repository_root>/
├── <configuration_root>/
├── <django_project_root>/
```

`README.md, docs/ directory, manage.py, .gitignore, requirements.txt files, and other high-level files that are required for deployment and running the project.`

`The settings module and base URLConf (urls.py) are placed. This must be a valid Python package containing an __init__.py module. `

```diff
+ example of this
```

```
icecreamratings_project
├── config/
│ ├── settings/
│ ├── __init__.py
│ ├── asgi.py
│ ├── urls.py
│ └── wsgi.py
├── docs/
├── icecreamratings/
│ ├── media/
│ ├── products/
# Development only!
│ ├── profiles/
│ ├── ratings/
│ ├── static/
│ └── templates/
├── .gitignore
├── Makefile
├── README.md
├── manage.py
└── requirements.txt
```

### cookiecutter map

<details>
  <summary class="detailSummary"> click here to expand</summary>
  

```
.
├── bin
│   └── post_compile
├── compose
│   ├── local
│   │   ├── django
│   │   │   ├── Dockerfile
│   │   │   └── start
│   │   └── docs
│   │       ├── Dockerfile
│   │       └── start
│   └── production
│       ├── django
│       │   ├── Dockerfile
│       │   ├── entrypoint
│       │   └── start
│       ├── postgres
│       │   ├── Dockerfile
│       │   └── maintenance
│       │       ├── backup
│       │       ├── backups
│       │       ├── restore
│       │       └── _sourced
│       │           ├── constants.sh
│       │           ├── countdown.sh
│       │           ├── messages.sh
│       │           └── yes_no.sh
│       └── traefik
│           ├── Dockerfile
│           └── traefik.yml
├── config
│   ├── __init__.py
│   ├── settings
│   │   ├── base.py
│   │   ├── __init__.py
│   │   ├── local.py
│   │   ├── production.py
│   │   └── test.py
│   ├── urls.py
│   └── wsgi.py
├── CONTRIBUTORS.txt
├── cookiecutter
│   ├── conftest.py
│   ├── contrib
│   │   ├── __init__.py
│   │   └── sites
│   │       ├── __init__.py
│   │       └── migrations
│   │           ├── 0001_initial.py
│   │           ├── 0002_alter_domain_unique.py
│   │           ├── 0003_set_site_domain_and_name.py
│   │           ├── 0004_alter_options_ordering_domain.py
│   │           └── __init__.py
│   ├── __init__.py
│   ├── static
│   │   ├── css
│   │   │   └── project.css
│   │   ├── fonts
│   │   ├── images
│   │   │   └── favicons
│   │   │       └── favicon.ico
│   │   ├── js
│   │   │   └── project.js
│   │   └── sass
│   │       ├── custom_bootstrap_vars.scss
│   │       └── project.scss
│   ├── templates
│   │   ├── 403.html
│   │   ├── 404.html
│   │   ├── 500.html
│   │   ├── account
│   │   │   ├── account_inactive.html
│   │   │   ├── base.html
│   │   │   ├── email_confirm.html
│   │   │   ├── email.html
│   │   │   ├── login.html
│   │   │   ├── logout.html
│   │   │   ├── password_change.html
│   │   │   ├── password_reset_done.html
│   │   │   ├── password_reset_from_key_done.html
│   │   │   ├── password_reset_from_key.html
│   │   │   ├── password_reset.html
│   │   │   ├── password_set.html
│   │   │   ├── signup_closed.html
│   │   │   ├── signup.html
│   │   │   ├── verification_sent.html
│   │   │   └── verified_email_required.html
│   │   ├── base.html
│   │   ├── pages
│   │   │   ├── about.html
│   │   │   └── home.html
│   │   └── users
│   │       ├── user_detail.html
│   │       └── user_form.html
│   ├── users
│   │   ├── adapters.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── forms.py
│   │   ├── __init__.py
│   │   ├── migrations
│   │   │   ├── 0001_initial.py
│   │   │   └── __init__.py
│   │   ├── models.py
│   │   ├── tests
│   │   │   ├── factories.py
│   │   │   ├── __init__.py
│   │   │   ├── test_admin.py
│   │   │   ├── test_forms.py
│   │   │   ├── test_models.py
│   │   │   ├── test_urls.py
│   │   │   └── test_views.py
│   │   ├── urls.py
│   │   └── views.py
│   └── utils
│       ├── context_processors.py
│       └── __init__.py
├── docs
│   ├── conf.py
│   ├── howto.rst
│   ├── index.rst
│   ├── __init__.py
│   ├── make.bat
│   ├── Makefile
│   ├── pycharm
│   │   ├── configuration.rst
│   │   └── images
│   │       ├── 1.png
│   │       ├── 2.png
│   │       ├── 3.png
│   │       ├── 4.png
│   │       ├── 7.png
│   │       ├── 8.png
│   │       ├── f1.png
│   │       ├── f2.png
│   │       ├── f3.png
│   │       ├── f4.png
│   │       ├── issue1.png
│   │       └── issue2.png
│   └── users.rst
├── LICENSE
├── locale
│   └── README.rst
├── local.yml
├── manage.py
├── merge_production_dotenvs_in_dotenv.py
├── Procfile
├── production.yml
├── pytest.ini
├── README.rst
├── requirements
│   ├── base.txt
│   ├── local.txt
│   └── production.txt
├── requirements.txt
├── runtime.txt
├── setup.cfg
└── tree.md

37 directories, 120 files
```

</details>

## Chapter 2

### virtualenv and pythonpath

```
You can also set your virtualenv’s PYTHONPATH to include the current directory with
the latest version of pip. Running “ pip install -e . ” from your project’s root
directory will do the trick, installing the current directory as a package that can be edited in place.

```
  
> django-admin and manage.py¶  
> [link](https://docs.djangoproject.com/en/3.2/ref/django-admin/)
django-admin is Django’s command-line utility for administrative tasks. This document outlines all it can do.

In addition, manage.py is automatically created in each Django project. It does the same thing as django-admin but also sets the DJANGO_SETTINGS_MODULE environment variable so that it points to your project’s settings.py file.

The django-admin script should be on your system path if you installed Django via pip. If it’s not in your path, ensure you have your virtual environment activated.

Generally, when working on a single Django project, it’s easier to use manage.py than django-admin. If you need to switch between multiple Django settings files, use django-admin with DJANGO_SETTINGS_MODULE or the --settings command line option.

The command-line examples throughout this document use django-admin to be consistent, but any example can use manage.py or python -m django just as well.

```
$ django-admin <command> [options]
$ manage.py <command> [options]
$ python -m django <command> [options]
```


### django and docker 

>References for developing with Docker:

- https://cookiecutter-django.readthedocs.io/en/latest/developing-locally-docker.html
- http://bit.ly/1dWnzVW Real Python article on Django and Docker Compose
- https://dockerbook.com


## articles

---------

.. _`Using cookiecutter-django with Google Cloud Storage`: https://ahhda.github.io/cloud/gce/django/2019/03/12/using-django-cookiecutter-cloud-storage.html
.. _`cookiecutter-django with Nginx, Route 53 and ELB`: https://msaizar.com/blog/cookiecutter-django-nginx-route-53-and-elb/
.. _`cookiecutter-django and Amazon RDS`: https://msaizar.com/blog/cookiecutter-django-and-amazon-rds/
.. _`Exploring with Cookiecutter`: http://www.snowboardingcoder.com/django/2016/12/03/exploring-with-cookiecutter/
.. _`Using Cookiecutter to Jumpstart a Django Project on Windows with PyCharm`: https://joshuahunter.com/posts/using-cookiecutter-to-jumpstart-a-django-project-on-windows-with-pycharm/

.. _`Development and Deployment of Cookiecutter-Django via Docker`: https://realpython.com/blog/python/development-and-deployment-of-cookiecutter-django-via-docker/
.. _`Development and Deployment of Cookiecutter-Django on Fedora`: https://realpython.com/blog/python/development-and-deployment-of-cookiecutter-django-on-fedora/
.. _`How to create a Django Application using Cookiecutter and Django 1.8`: https://www.swapps.io/blog/how-to-create-a-django-application-using-cookiecutter-and-django-1-8/
.. _`Introduction to Cookiecutter-Django`: http://krzysztofzuraw.com/blog/2016/django-cookiecutter.html
.. _`Django and GitLab - Running Continuous Integration and tests with your FREE account`: http://dezoito.github.io/2016/05/11/django-gitlab-continuous-integration-phantomjs.html


## links

<details>
  <summary class="detailSummary"> link not working?, click below  </summary>
  
 
  <ol><li><a href="https://docs.djangoproject.com/en/3.2/topics/http/middleware/#process-template-response">/2nujh0e</a></li><li><a href="https://docs.djangoproject.com/en/3.2/topics/http/middleware/#process-template-response">/3f2pjuk</a></li><li><a href="https://docs.djangoproject.com/en/3.2/topics/testing/tools/#assertions">/3ql9vki</a></li><li><a href="https://docs.djangoproject.com/en/3.2/topics/testing/tools/#assertions">/35fskkd</a></li><li><a href="https://docs.djangoproject.com/en/3.2/ref/utils/#django.utils.html.format_html">/3pb3wov</a></li><li><a href="https://docs.djangoproject.com/en/3.2/ref/utils/#django.utils.html.format_html">/2yfqhbz</a></li><li><a href="https://docs.djangoproject.com/en/3.2/ref/settings/#session-serializer">/2lojuac</a></li><li><a href="https://docs.djangoproject.com/en/3.2/ref/settings/#session-serializer">/2kieriu</a></li><li><a href="https://docs.djangoproject.com/en/3.2/ref/settings/#debug">/39vtww7</a></li><li><a href="https://docs.djangoproject.com/en/3.2/topics/db/models/#proxy-models">/2ke7reo</a></li><li><a href="https://docs.djangoproject.com/en/3.2/topics/db/models/#proxy-models">/django-db-models-foreignkey</a></li><li><a href="https://docs.djangoproject.com/en/3.2/ref/models/fields/#enumeration-types">/3idkv3n</a></li><li><a href="https://docs.djangoproject.com/en/3.2/ref/models/fields/#enumeration-types">/django-3-choice-classes</a></li><li><a href="https://raw.githubusercontent.com/feldroy/django-crash-starter/master/installers/ubuntu/install_postgresql_13_ubuntu.sh">/3ctu5tq</a></li><li><a href="https://raw.githubusercontent.com/feldroy/django-crash-starter/master/installers/ubuntu/install_postgresql_13_ubuntu.sh">/pg13-ubuntu-installer</a></li><li><a href="https://www.feldroy.com/products/two-scoops-of-django-3-x">/3cx0ort</a></li><li><a href="https://www.feldroy.com/products/two-scoops-of-django-3-x">/2eqtagk</a></li><li><a href="https://docs.djangoproject.com/en/3.1/ref/models/fields/#enumeration-types">/3huub2k</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/models/fields/#enumeration-types">/3mimvup</a></li><li><a href="https://br.feldroy.com/collections/all">/35vflm0</a></li><li><a href="https://br.feldroy.com/collections/all">/br-products</a></li><li><a href="https://www.feldroy.com/pages/courses#dcc">/2rqx59a</a></li><li><a href="https://www.feldroy.com/pages/courses#dcc">/dcc-live</a></li><li><a href="https://github.com/feldroy/django-crash-starter/blob/master/{{cookiecutter.project_slug}}/env.sample.windows">/3k2c6kh</a></li><li><a href="https://github.com/feldroy/django-crash-starter/blob/master/{{cookiecutter.project_slug}}/env.sample.windows">/env_sample_windows</a></li><li><a href="https://github.com/feldroy/django-crash-starter/blob/master/{{cookiecutter.project_slug}}/env.sample.mac_or_linux">/3m3mwhy</a></li><li><a href="https://github.com/feldroy/django-crash-starter/blob/master/{{cookiecutter.project_slug}}/env.sample.mac_or_linux">/env-sample-mac-or-linux</a></li><li><a href="https://daniel.feldroy.com/tools-we-used-to-write-2scoops.html">/2eb1bea</a></li><li><a href="https://daniel.feldroy.com/tools-we-used-to-write-2scoops.html">/tools2scoops</a></li><li><a href="https://www.amazon.com/Illustrated-Guide-Python-Walkthrough-Illustrations/dp/1977921752">/2ebp3hh</a></li><li><a href="https://www.amazon.com/Illustrated-Guide-Python-Walkthrough-Illustrations/dp/1977921752">/3jq5lud</a></li><li><a href="https://www.feldroy.com/collections/two-scoops-press/products/django-crash-course?variant=32232086175831">/2q81b7l</a></li><li><a href="https://www.feldroy.com/products/practical-python-projects">/34ehdk1</a></li><li><a href="https://www.feldroy.com/pages/authorized-vendors-and-distributors">/2cnupmh</a></li><li><a href="https://www.feldroy.com/pages/authorized-vendors-and-distributors">/authorized-vendors</a></li><li><a href="http://feldroy.com/products/django-crash-course">/30pfilx</a></li><li><a href="http://feldroy.com/products/django-crash-course">/2pls3w2</a></li><li><a href="https://events.eventzilla.net/e/django-best-practices-the-two-scoops-way-2138797976">/3hdoxzn</a></li><li><a href="https://events.eventzilla.net/e/django-best-practices-the-two-scoops-way-2138797976">/tsd3x-live-class</a></li><li><a href="https://simpleisbetterthancomplex.com/tutorial/2018/01/18/how-to-implement-multiple-user-types-with-django.html">/2vsi3my</a></li><li><a href="https://youtu.be/f0hdXr2MOEA">/2bcqux0</a></li><li><a href="https://youtu.be/f0hdXr2MOEA">/multiple-user-types</a></li><li><a href="https://docs.djangoproject.com/en/3.1/topics/db/models/#proxy-models">/2bkxqkd</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/db/models/#proxy-models">/2zlhuqh</a></li><li><a href="https://docs.google.com/presentation/d/17D0XFYJv5S-ews4bSCmshAWFkKZPgMoIAjqI-MGKhzA/edit?usp=sharing">/31nmwfw</a></li><li><a href="https://www.feldroy.com/products/two-scoops-of-django-3-x?utm_source=dev.to&amp;utm_medium=listing&amp;utm_campaign=dev.to %231&amp;utm_content=tsd">/2bdage4</a></li><li><a href="https://docs.python.org/dev/library/functools.html?highlight=#functools.cached_property">/3feeso3</a></li><li><a href="https://www.django-rest-framework.org/api-guide/schemas/#generating-an-openapi-schema">/3hmdgob</a></li><li><a href="https://www.django-rest-framework.org/api-guide/throttling/#setting-the-throttling-policy">/2x7avrz</a></li><li><a href="https://www.amazon.com/Django-Web-Development-Cookbook-development/dp/1838987428?tag=mlinar-20">/3dyaxfq</a></li><li><a href="https://www.amazon.com/Django-Web-Development-Cookbook-development/dp/1838987428">/2xdoknp</a></li><li><a href="https://github.com/Miserlou/Zappa#asynchronous-task-execution">/2znngjc</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/contrib/messages/#django.contrib.messages.views.SuccessMessageMixin">/3galth9</a></li><li><a href="https://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/1617292850/?tag=mlinar-20">/2aknxyp</a></li><li><a href="https://www.feldroy.com/collections/two-scoops-press/products/two-scoops-of-django-3-x">/3bqrm6d</a></li><li><a href="https://www.feldroy.com/collections/two-scoops-press/products/two-scoops-of-django-3-x">/tsd3x-on-store</a></li><li><a href="https://django-braces.readthedocs.io/en/latest/form.html#userkwargmodelformmixin">/3fz3bkn</a></li><li><a href="http://django-braces.readthedocs.io/en/latest/form.html/#userkwargmodelformmixin">/3bouohm</a></li><li><a href="https://www.python.org/community/awards/frank-willison/#carol-willing-2019">/3drfeik</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/auth/passwords/#argon2">/2wgm0tr</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/auth/passwords/#using-argon2-with-django">/3bcmhk0</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/i18n/translation/#formatting-strings-format-lazy">/3cdvq1t</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/templates/builtins/#json-script">/3f77ahj</a></li><li><a href="https://www.mkdocs.org/#getting-started">/2yng5rs</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/db/queries/#querysets-are-lazy">/2yewrxj</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/settings/#csrf-cookie-age">/3ev1duf</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/settings/#csrf-failure-view">/35c3ney</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/i18n/translation/#localized-names-of-languages">/2vj1y5e</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/settings/#email-use-tls">/3f0ezpp</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/settings/#csrf-cookie-domain">/2yriqog</a></li><li><a href="http://gargoyle.readthedocs.io/en/latest/usage/index.html#testing-switches">/3boffhx</a></li><li><a href="http://waffle.readthedocs.io/en/latest/testing/automated.html#testing-automated">/35gs7t2</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/i18n/translation/#standard-translation">/3bpcmer</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/i18n/translation/#lazy-translation">/2yripkc</a></li><li><a href="https://martinfowler.com/articles/continuousIntegration.html#PracticesOfContinuousIntegration">/2vmftk0</a></li><li><a href="http://www.django-rest-framework.org/api-guide/serializers/#serializing-objects">/2ywrybm</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/utils/#django.utils.functional.cached_property">/2vjlcyl</a></li><li><a href="https://en.wikipedia.org/wiki/HIPAA#Security_Rule">/3alltoi</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/models/fields/#filefield">/2vjvgcn</a></li><li><a href="https://groups.google.com/forum/#!forum/django-announce">/2wcnz1y</a></li><li><a href="https://pypi.org/project/defusedxml#python-xml-libraries">/2kkwumq</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/security/#sql-injection-protection">/35gzpfn</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/utils/#django.utils.html.format_html">/2yfqhbz</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/http/sessions/#using-cookie-based-sessions">/2yv4qtn</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/templates/builtins/#escape">/2xea7xq</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/settings/#session-serializer">/2kieriu</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/request-response/#django.http.HttpRequest.get_host">/3f0evgb</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/http/sessions/#session-serialization">/2khtpwt</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/templates/builtins/#spaceless">/2skug66</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/settings/#allowed-hosts">/2kuwk0b</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/testing/tools/#django.test.TransactionTestCase.assertNumQueries">/3bmrhej</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/settings/#debug">/3f0ev99</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/security/#ssl-https">/2shvquh</a></li><li><a href="https://docs.python.org/3/library/unittest.html#assert-methods">/35f7ztm</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/testing/tools/#assertions">/35fskkd</a></li><li><a href="http://faker.readthedocs.io/en/master/#how-to-use-with-factory-boy">/2yh01pg</a></li><li><a href="https://docs.python.org/2/library/unittest.html#unittest.TestCase.assertRaises">/3f2ip67</a></li><li><a href="https://docs.pytest.org/en/latest/assert.html#assertions-about-expected-exceptions">/3byfhn2</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/auth/customizing/#a-full-example">/2yc94ht</a></li><li><a href="https://pypi.org/">/3etodys</a></li><li><a href="https://pip.pypa.io/en/stable/reference/pip_install/#requirement-specifiers">/2kkwwnw</a></li><li><a href="http://www.django-rest-framework.org/topics/api-clients/#command-line-client">/2wco5xo</a></li><li><a href="http://www.django-rest-framework.org/topics/api-clients/#python-client-library">/2zaevfh</a></li><li><a href="http://www.django-rest-framework.org/topics/documenting-your-api/#third-party-packages">/2sezssc</a></li><li><a href="http://www.django-rest-framework.org/topics/api-clients/#javascript-client-library">/2ye9ofv</a></li><li><a href="http://jinja.pocoo.org/docs/dev/api/#jinja2.Environment">/2yc94ar</a></li><li><a href="http://jinja.pocoo.org/docs/dev/extensions/#module-jinja2.ext">/2vjw4fk</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/forms/renderers/#overriding-built-in-widget-templates">/3f2iuxt</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/templates/api/#django.template.loaders.cached.Loader">/3f0u4yc</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/templates/#django.template.backends.jinja2.Jinja2">/35d3d6j</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/forms/api/#django.forms.Form.non_field_errors">/2yjxmwl</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/forms/renderers/#templatessetting">/2yc93dp</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/csrf/#ajax">/2xgjoi8</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/forms/validation/#raising-validationerror">/2zd4heb</a></li><li><a href="https://django-braces.readthedocs.io/en/latest/form.html#userformkwargsmixin">/3bm9poj</a></li><li><a href="https://django-braces.readthedocs.io/en/latest/form.html#userkwargmodelformmixin/">/2w5lntl</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/forms/api/#django.forms.Form.errors.as_data">/2kewsg2</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/forms/api/#django.forms.Form.errors.as_json">/2yc936n</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/class-based-views/intro/#using-class-based-views">/2w9f6wv</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/http/middleware/#process-template-response">/3f2pjuk</a></li><li><a href="https://docs.djangoproject.com/en/3.0/misc/design-philosophies/#url-design">/3bl4gwy</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/class-based-views/intro/#decorating-class-based-views">/2wcnxxu</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/models/fields/#django.db.models.Field.choices">/3ez6lra</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/models/options/">/2simepd</a></li><li><a href="https://github.com/HackSoftware/Django-Styleguide#services">/2kgjkey</a></li><li><a href="https://www.python.org/dev/peps/pep-0008/#a-foolish-consistency-is-the-hobgoblin-of-little-minds">/2y01snh</a></li><li><a href="https://github.com/Miserlou/Zappa#setting-environment-variables">/2klzrhi</a></li><li><a href="http://www.python.org/dev/peps/pep-0008/#maximum-line-length">/2ygg6xs</a></li><li><a href="https://djangopackages.org/">/2si4yts</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/security/#additional-security-topics">/3amyjhq</a></li><li><a href="http://www.jsfuck.com/">/2kfi4bb</a></li><li><a href="http://www.jsfuck.com/">/unusual-javascript</a></li><li><a href="https://www.feldroy.com/collections/everything">/2zszq4j</a></li><li><a href="https://www.feldroy.com/collections/everything">/products</a></li><li><a href="https://raw.githubusercontent.com/feldroy/django-crash-starter/master/installers/windows/install_chocolatey_windows10.bat">/3bdjah4</a></li><li><a href="https://raw.githubusercontent.com/feldroy/django-crash-starter/master/installers/windows/install_chocolatey_windows10.bat">/chocolatey-cmd-installer</a></li><li><a href="https://chocolatey.org/courses/installation/installing?method=installing-chocolatey?quiz=true#cmd">/3bzalba</a></li><li><a href="https://chocolatey.org/courses/installation/installing?method=installing-chocolatey?quiz=true#cmd">/choco-tutorial</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/db/transactions/#transactions-in-mysql">/2wortfr</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/db/transactions/#transactions-in-mysql">/transactions-in-mysql</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/models/options/#indexes">/3aezlsz</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/models/options/#indexes">/model-indexes</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/models/fields/#choices">/2xviakl</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/models/fields/#choices">/field-choices</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/migrations/#historical-models">/2xlf5eu</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/migrations/#historical-models">/historical-models</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/migrations/#model-managers">/3covkcf</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/migrations/#model-managers">/model-managers</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/migration-operations/#runsql">/2xqonqw</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/migration-operations/#runsql">/runsql</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/migration-operations/#runpython">/2vfzddm</a></li><li><a href="https://docs.djangoproject.com/en/3.0/ref/migration-operations/#runpython">/runpython</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/db/models/#model-inheritance">/3csjp7u</a></li><li><a href="https://docs.djangoproject.com/en/3.0/topics/db/models/#model-inheritance">/model-inheritance</a></li><li><a href="https://raw.githubusercontent.com/feldroy/django-crash-starter/master/installers/ubuntu/install_vscode_ubuntu.sh">/3ahwuxk</a></li><li><a href="https://raw.githubusercontent.com/feldroy/django-crash-starter/master/installers/ubuntu/install_vscode_ubuntu.sh">/vscode-ubuntu-installer</a></li><li><a href="https://raw.githubusercontent.com/feldroy/django-crash-starter/master/installers/ubuntu/install_postgresql_12_ubuntu.sh">/3ecoixk</a></li><li><a href="https://raw.githubusercontent.com/feldroy/django-crash-starter/master/installers/ubuntu/install_postgresql_12_ubuntu.sh">/pg12-ubuntu-installer</a></li><li><a href="https://raw.githubusercontent.com/roygreenfeld/django-crash-starter/master/installers/ubuntu/install_postgresql_12_ubuntu.sh">/2wqnao9</a></li><li><a href="https://bitbucket.org/pypa/wheel/issues/146/wheel-building-fails-on-cpython-350b3">/1zuu7b0</a></li><li><a href="https://bitbucket.org/pypa/wheel/issues/146/wheel-building-fails-on-cpython-350b3">/wheel-building-fails-cpython-35</a></li><li><a href="https://github.com/audreyr/cookiecutter">/1lkee9m</a></li><li><a href="https://docs.google.com/forms/d/1B7O7XZUxb_my6Z2Uc8BWP-EnYmRu8pPabRPpWqODm9g/viewform">/1itwrwp</a></li><li><a href="https://docs.google.com/forms/d/1B7O7XZUxb_my6Z2Uc8BWP-EnYmRu8pPabRPpWqODm9g/viewform">/iedjangogirls-app</a></li><li><a href="http://stackoverflow.com/questions/16773362/why-is-the-running-of-pyc-files-not-faster-compared-to-py-files">/1jumguf</a></li><li><a href="https://github.com/search?l=Python&amp;o=desc&amp;p=3&amp;q=polls&amp;s=updated&amp;type=Repositories&amp;utf8=✓">/1yrevti</a></li><li><a href="https://github.com/search?l=Python&amp;o=desc&amp;p=3&amp;q=polls&amp;s=updated&amp;type=Repositories&amp;utf8=✓">/djpolls</a></li><li><a href="http://www.eventbrite.com/e/pydsla-blaze-connecting-analysts-to-big-computation-tickets-15546976425?utm_source=eb_email&amp;utm_medium=email&amp;utm_campaign=event_reminder&amp;utm_term=eventname&amp;ref=eemaileventremind">/1fploom</a></li><li><a href="http://techweek.com/schedule/losangeles/#schedule/PyCon Startup Row/d55fac4f9979f5f8040d1569661c905d">/1vpaqqf</a></li><li><a href="http://techweek.com/schedule/losangeles/#schedule/PyCon Startup Row/d55fac4f9979f5f8040d1569661c905d">/pyconstartuprowla</a></li><li><a href="http://www.reddit.com/r/MensRights/comments/1bav2o/why_is_the_exclusionary_pyladies_group_allowed_to/">/1sejwyf</a></li><li><a href="http://wiki.python.org/moin/CheeseShopTutorial#Submitting_Packages_to_the_Package_Index">/xsw6rb</a></li><li><a href="http://wiki.python.org/moin/CheeseShopTutorial#Submitting_Packages_to_the_Package_Index">/submit-to-pypi</a></li><li><a href="http://audreymroy.com/art/art-installations.html">/yyme8e</a></li><li><a href="http://audreymroy.com/2012/05/03/sfv-developers-recap.html">/k8y8rf</a></li><li><a href="http://www.spire.io/posts/our-architecture.html">/juute9</a></li><li><a href="http://www.meetup.com/LA-Hackathons/events/62796642/">/iecehh</a></li><li><a href="http://www.meetup.com/sfv-developers/events/62438672/">/iqabop</a></li><li><a href="http://thegloss.com/career/brunch-ladies-working-880/">/j2pjfx</a></li><li><a href="http://www.flickr.com/photos/oranginafrance/5702994513/in/photostream">/i2kwal</a></li><li><a href="http://opendjango.com/">/hxu1k2</a></li><li><a href="https://github.com/elmcitylabs/ECL-Facebook">/hode7c</a></li><li><a href="http://labs.twistedmatrix.com/2012/03/google-summer-of-code-and-outreach.html?utm_source=feedburner&amp;utm_medium=feed&amp;utm_campaign=Feed:+TwistedMatrixLaboratories+(Twisted+Matrix+Laboratories)">/hcufoh</a></li><li><a href="https://pycon.disqus.com/threads/rOFK6">/xeqode</a></li><li><a href="http://pydanny.github.com/you-should-heroku.html">/xtrvxe</a></li><li><a href="http://consumernotebook.com/target-home-conservatory-patio-2-person-glider/4f49662cbebb78000e000000/">/zoazce</a></li><li><a href="http://news.ycombinator.com/item?id=3621778">/z6ftxc</a></li><li><a href="http://news.ycombinator.com/item?id=3616508">/zkho0m</a></li><li><a href="http://pycon.blogspot.com/2012/02/startup-row-winners-for-pycon-2012.html?utm_source=feedburner&amp;utm_medium=twitter&amp;utm_campaign=Feed:+ThePyconBlog+(The+PyCon+blog)">/azglcl</a></li><li><a href="http://ballmerpeakathon.com/">/zuxjuv</a></li><li><a href="http://consumernotebook.com/blog/2011/dec/my-role-at-consumer-notebook/">/ujtz8g</a></li><li><a href="http://pydanny.blogspot.com/2011/12/announcing-consumer-notebook.html">/vr1pln</a></li><li><a href="http://www.women2.org/apply-to-pitch-in-san-francisco-2012-with-women-2-0/">/ufqekg</a></li><li><a href="http://37signals.com/svn/posts/2486-bootstrapped-profitable-proud-github">/syamtq</a></li><li><a href="https://github.com/audreyr/auditionrocket_mockups/">/tckkxj</a></li><li><a href="http://djangolookslikefun.wordpress.com/">/oe2nyx</a></li><li><a href="http://nc-django-sprint-2011-11.eventbrite.com/">/n1wxh6</a></li><li><a href="http://www.caktusgroup.com/blog/2011/10/10/caktus-hosts-3rd-django-sprint-north-carolina/">/qlzwii</a></li><li><a href="https://code.djangoproject.com/wiki/Sprint201111#Online">/qjc6tu</a></li><li><a href="http://pyladies-nov-workshop-usc.eventbrite.com/">/nzougo</a></li><li><a href="http://pyladies-idealab-october.eventbrite.com/">/okirfz</a></li><li><a href="http://audreyr.posterous.com/75336715">/qqtvq6</a></li><li><a href="http://www.slideshare.net/audreyr/amazing-thingspycodeconfaudreyroy">/qdukhr</a></li><li><a href="https://github.com/audreyr/pydanny-event-notes">/q4mbed</a></li><li><a href="http://morepypy.blogspot.com/2011/07/realtime-image-processing-in-python.html">/ndobqc</a></li><li><a href="http://twitter.com/#!/pydanny/status/121955726343159808">/q5hpyr</a></li><li><a href="http://dl.dropbox.com/u/768016/djangocon-2011/thunderdome/django-package-thunderdome-detailed-judging-report.pdf">/pjqjw5</a></li><li><a href="http://www.slideshare.net/audreyr/django-package-thunderdome-by-audrey-roy-daniel-greenfeld">/nebxbm</a></li><li><a href="http://lwn.net/Articles/430118/">/ouvurh</a></li><li><a href="http://pyladies.com/blog/pyladies-meetup-at-djangocon">/mza1be</a></li><li><a href="http://www.slideshare.net/pydanny/python-worst-practices/">/odgn0p</a></li><li><a href="http://www.slideshare.net/audreyr/kiwi-pycon-2011-audrey-roy-keynote-speech">/o9gteg</a></li><li><a href="http://www.flickr.com/photos/pyladies">/omjbxi</a></li><li><a href="https://github.com/matplotlib/matplotlib">/qcwcw0</a></li><li><a href="http://audreyr.posterous.com/thank-you-pycon-au">/qs61bm</a></li><li><a href="http://www.slideshare.net/audreyr/pycon-australia-2011-keynote-audrey-roy">/omzla2</a></li><li><a href="http://stackoverflow.com/questions/5150980/invalid-command-wsgireloadmechanism-in-my-apache-sites-config-file">/gpzfai</a></li><li><a href="http://stackoverflow.com/questions/3570710/select-items-runs-fine-in-chrome-et-al-but-not-on-android-g-1-browser">/bnfcis</a></li><li><a href="http://twitter.com/fuzzy_rainbow">/a2xgvf</a></li><li><a href="http://www.facebook.com/fuzzyrainbow">/dowdyq</a></li><li><a href="http://www.fuzzyrainbow.com/caterpillars/">/9hok38</a></li><li><a href="http://www.flickr.com/photos/dnsf/3299646682/in/set-72157614198047732/">/br98hj</a></li><li><a href="http://cebacosoftware.com/2010/08/great-design-and-ui-doesnt-happen-overnight-everlater-coms-front-end-process/">/cavzlx</a></li><li><a href="http://www.ipadportraits.com">/dsyxpa</a></li><li><a href="http://dl.dropbox.com/u/768016/danny_bday.png">/cw8hqf</a></li><li><a href="http://www.forkinit.com/audreyr/recipes/">/9fiu6r</a></li><li><a href="http://dl.dropbox.com/u/768016/housewarming.png">/boo6mf</a></li><li><a href="http://audreyr.posterous.com/how-to-optimize-large-image-files-for-the-web">/blkatm</a></li><li><a href="http://www.sitasingstheblues.com/">/aedgx0</a></li><li><a href="http://www.surveymonkey.com/s.aspx?sm=EEsworCfpnVaZRJjxLdJhw_3d_3d">/17zwdy</a></li><li><a href="http://blog.twilio.com/2009/10/price-it-by-phone-wins-twilio-app-engine-contest.html">/vmjig</a></li><li><a href="http://price-it.appspot.com/">/1fb1oz</a></li><li><a href="http://sfrubyworkshops.com/">/7tqyi</a></li><li><a href="http://blogs.law.harvard.edu/genderandtech/ruby-on-rails-workshop-for-women/">/ydepl</a></li><li><a href="http://groups.google.com/group/google-appengine-downtime-notify/browse_thread/thread/e497ce0638d63351?hl=en">/k8rv7</a></li><li><a href="http://doodle.com/yg6y292cvdkfhska">/3ghray</a></li><li><a href="http://audreyr.posterous.com/what-google-app-engine-needs-to-improve-and-w">/18t0dy</a></li><li><a href="http://audreyr.posterous.com/an-ultimatum-for-myself-to-get-my-book-done">/dwppj</a></li><li><a href="http://www.biztechday.com/what-is-biztechday/">/19tnql</a></li><li><a href="http://audreyr.posterous.com/why-you-dont-see-me-at-geek-events-like-tc50">/17sik0</a></li><li><a href="http://www.fuzzyrainbow.com/">/4zud5m</a></li><li><a href="http://www.ustream.tv/channel/fbfund-rev-demo-day">/3uwsw</a></li><li><a href="http://audreyr.posterous.com/work-in-progress-cloud-editor-0">/1t6mty</a></li><li><a href="http://www.audreymroy.com/pinax/">/1518in</a></li><li><a href="http://audreyr.posterous.com/my-android-math-multiplier-game">/vifmk</a></li><li><a href="http://weblab2.mit.edu/docs/weblab/v6.1/manual/tutorial_main.htm">/12hexp</a></li><li><a href="http://www.itsjustpoison.com/blog/2008/09/18/veency-iphone-vnc-server-rocks/">/jt3pa</a></li><li><a href="https://www.feldroy.com/products/practical-python-projects">/ppp</a></li></ol>
  
 
  
  </details>

