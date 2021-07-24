---
title: docker learning curve
tags: [docker ]
last_updated: July 10, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "summary."
sidebar: mydoc_sidebar
permalink: mydoc_docker.html
folder: mydoc
---

## Docker

I've been anxious to master this new trendy skill and had a couple of tutors even, but I realized that in all I should practice in real-life rather than trying to learn from a tutor. 

### github repos
- [nodedockerapp](https://github.com/aiegoo/node-dockerapp)
- [dockerexample](https://github.com/aiegoo/docker-examples)
- [dockerexercise](https://github.com/aiegoo/docker-exercise)
- [docker](https://github.com/aiegoo/docker)
- [djangodocker](https://github.com/aiegoo/django-docker)
- [scrappy](https://github.com/aiegoo/scrappy-development-docker)

### udemy course list
- Docker mastery with kubernetes + swarm from a docker captain [dockermastery](https://github.com/aiegoo/udemy/wiki/devop30)
- Net devops: cisco python, automation netconf.sdn, docker [udemywiki](https://github.com/aiegoo/udemy/wiki/devop24)

### books

### lesson github with tasks [dockerlesson](https://github.com/aiegoo/docker-lesson/wiki/Tasks) and [dockersetup](https://github.com/aiegoo/docker-lesson/wiki/Task-1-Install-and-setup)


> below is the task wiki page

<hr>
<hr>


# Table of Contents

- [Table of Contents](#table-of-contents)
- [Task 1](#task-1)
  - [Install Docker on Ubuntu](#install-docker-on-ubuntu)
    - [Install dependencies](#install-dependencies)
    - [Add Docker&rsquo;s GPG Key](#add-dockers-gpg-key)
    - [Add repository](#add-repository)
    - [Install Docker](#install-docker)
  - [Create an user defined bridge network with a custom subnet](#create-an-user-defined-bridge-network-with-a-custom-subnet)
  - [Run a container with a webUI](#run-a-container-with-a-webui)
  - [Docker Volumes](#docker-volumes)
  - [Docker Compose](#docker-compose)
    - [Install Docker Compose](#install-docker-compose)
    - [Make the binary executable](#make-the-binary-executable)
    - [Deploy Nextcloud and Postgres using Docker Compose](#deploy-nextcloud-and-postgres-using-docker-compose)
- [Task 2](#task-2)
  - [Run a webserver with ports 80 and 443 bound to the container](#run-a-webserver-with-ports-80-and-443-bound-to-the-container)
  - [Fetch SSL Certificates & Redirect](#fetch-ssl-certificates--redirect)
    - [SSL](#ssl)
    - [Redirection](#redirection)
  - [Serve the container through the webserver](#serve-the-container-through-the-webserver)
    - [Configuration](#configuration)
    - [Reload Nginx](#reload-nginx)
  - [Load balance multiple containers](#load-balance-multiple-containers)
    - [Docker](#docker-1)
    - [Webserver](#webserver)
  - [Get an extra IP&#x2026;](#get-an-extra-ip)
    - [Docker](#docker-2)
    - [Nginx](#nginx)
- [Task 3](#task-3)
  - [Portainer as the web frontend for container management](#portainer-as-the-web-frontend-for-container-management)
    - [Tool](#tool)
    - [Docker](#docker-3)
    - [Nginx](#nginx-1)
  - [Use monitoring tools like fail2ban to prevent abuse](#use-monitoring-tools-like-fail2ban-to-prevent-abuse)
    - [Tool](#tool-1)
    - [Docker](#docker-4)
  - [Setup auto-updates for your containers](#setup-auto-updates-for-your-containers)
    - [Tools](#tools)
    - [Docker](#docker-5)
  - [Think of and deploy (at least one) service that will be actually of use to you](#think-of-and-deploy-at-least-one-service-that-will-be-actually-of-use-to-you)



<a id="org24deff6"></a>

# Task 1


<a id="orga28590e"></a>

## Install Docker on Ubuntu

This process lists installation on Ubuntu. Similar steps need to be followed for CentOS.


<a id="orgaf5c9e1"></a>

### Install dependencies

Install dependencies required for Docker.

    sudo apt-get install \
        apt-transport-https \
        ca-certificates \
        curl \
        gnupg-agent \
        software-properties-common


<a id="org75515c6"></a>

### Add Docker&rsquo;s GPG Key

Let our system trust the Docker repository to be added.

    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -


<a id="orgf22b3a4"></a>

### Add repository

Since Docker is not included in the official repositories, we have to add Docker&rsquo;s repository which contains essential packages for Docker.

    sudo add-apt-repository \
       "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
       $(lsb_release -cs) \
       stable"
    
    sudo apt update


<a id="org3754c60"></a>

### Install Docker

Install Docker (the engine), Docker (the CLI tool), containerd.io (Docker&rsquo;s container runtime)

    sudo apt-get install docker-ce docker-ce-cli containerd.io


<a id="org2799de2"></a>

## Create an user defined bridge network with a custom subnet

Docker Networks provide a path to connect containers.

The `bridge` type network is the default network type used by Docker and it does
not require a separate MAC address like the `macvlan` network type. The simplest
way to create a Docker Network is:

    docker network create <network-name>

Or more explicitly:

    docker network create --driver=bridge <network-name>

Subnetting is a way to divide networks or IP addresses in a network to smaller
ranges. For example, something like: `172.20.0.0/16` indicates addresses from
`172.20.0.0` to `172.20.255.255`. You can read more about subnets [here](http://www.steves-internet-guide.com/subnetting-subnet-masks-explained/).

To create a docker network with a custom subnet:

    docker network create --driver=bridge --subnet=172.20.0.0/24 <network-name>

Can you tell me what IP addresses are included in the above subnet?


<a id="org877bc55"></a>

## Run a container with a webUI

For this example, we&rsquo;re going to use Nextcloud.

Nextcloud doubles as a file server and as a cloud suite. It offers various tools
that may be deemed alternatives to something like the google or microsoft suite
of services.

Nextcloud supports 3 database backends:

-   SQLite (only recommended for test instances)
-   MariaDB (official recommendation)
-   PostgreSQL

We&rsquo;re going to use PostgreSQL. In our last session, I remembered reading that
Nextcloud has PostgreSQL support until version 11. It turns out to be [right](https://docs.nextcloud.com/server/latest/admin_manual/installation/system_requirements.html).

To run a PostgreSQL container, we need to define a few variables.

    POSTGRES_USER=root
    POSTGRES_PASSWORD=root

And save it in a file called `postgres.env`. The filename can be anything you
choose. PostgreSQL stores data in the directory `/var/lib/postgresql/data`.
Thereafter, running the following command deploys postgres.

    docker run \
        --env-file /path/to/env/file \
        --detach \
        --interactive \
        --name <container-name> \
        --net <network-name> \
        --volume /path/to/pgsql/data:/var/lib/postgresql/data
        --tty \
        postgres:11

Then we run our Nextcloud instance. Nextcloud saves data in the directory:
`/var/www/html`.

    docker run \
        --detach \
        --interactive \
        --name <container-name> \
        --net <network-name> \
        --publish <random-port>:80
        --volume /path/to/nc/data:/var/www/html
        --tty \
        nextcloud

Thereafter open <ip-address>:<random-port> in the browser to get the WebUI.
Connect the Nextcloud container to the PostgreSQL container and send me a
screenshot.


<a id="orge36380f"></a>

## Docker Volumes

Docker allows storage of stateful data in two ways:

-   <span class="underline">Docker Volumes</span>
    
    An interface provided by Docker to store and manage data by itself. The
    process of storing data, managing permissions and moving files around is
    abstracted by Docker. The user does not have to worry about permission
    problems that might arise because of a non-existent directory.
    
    A docker volume can be created as:
    
        docker volume create <volume-name>
    
    It can be used as:
    
        docker run --volume <volume-name>:/path/on/container <image>
    
    The data will be stored somewhere in `/var/lib/docker/volumes/<volume-name>`.
    Access to the directory is restricted to the superuser.

-   <span class="underline">Filesystem bind-mounts</span>
    
    Exactly the same as `mount --bind` which mounts an existing directory or file
    somewhere else so that they&rsquo;re available at both places. In this case, the
    user needs to worry about permissions and creation of files and folders.
    
    To use filesystem mounts, create a directory first and then map that directory
    to one inside the container:
    
        mkdir -p <some-directory>
        
        docker run --volume /path/to/<some-directory>:/path/in/container <image>
    
    How do you make a bind-mount read-only?


<a id="orgfef50e4"></a>

## Docker Compose

Whatever tasks we completed until now were done in an imperative manner &#x2013; we
performed tasks one by one. This works until you need to reproduce the exact
same series of steps in some manner or the other, which becomes increasingly
difficult when you combine deployment + debugging + various other checks.

Hence, docker-compose is a tool by Docker (not included in the packages we&rsquo;ve
installed till now) which lets us deploy declaratively. Instead of performing
tasks one-by-one, we perform them all at once.


<a id="orga049c61"></a>

### Install Docker Compose

Download the binary from GitHub with `curl`.

    sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose


<a id="org1cf8e39"></a>

### Make the binary executable

    sudo chmod +x /usr/local/bin/docker-compose


<a id="org68bbf72"></a>

### Deploy Nextcloud and Postgres using Docker Compose

1.  The Compose file

    For PostgreSQL and Nextcloud, we can do the following:
    
        version: '3.7'
        
        services:
          database:
            container_name: PostgreSQL
            image: postgres:11
            restart: unless-stopped
            env_file:
              - /path/to/env/file
            volumes:
              - "/some/path:/var/lib/postgres/data"
            networks:
              - <custom-network>
          cloud:
            container_name: Nextcloud
            image: nextcloud
            restart: unless-stopped
            depends_on:
              - database
            volumes:
              - "/some/path:/var/www/html"
            ports:
              - "<custom-port>:80"
            networks:
              - <custom-network>
        
        networks:
          <custom-network>:
            external:
              name: <custom-network>

2.  Understanding the Compose file

    1.  Version
    
        This is the docker-compose file version we&rsquo;ll be using. Docker Compose is backwards compatible so we can use any version up till 3.7.
        
            version: '3.7'
    
    2.  Services
    
        List of services we&rsquo;ll be defining:
        
            services:
        
        Name of the service:
        
            database:
        
        Container name:
        
            container_name: PostgreSQL
        
        Image that we&rsquo;ll be using:
        
            image: postgres:11
        
        We want the service to be restarted if it fails. However with a value of `always`,
        the service will continue to restart even if we manually stop it, which is
        troublesome. So a value of `unless-stopped` prevents that.
        
            restart: unless-stopped
        
        The file which contains the environment variables to be used in the container.
        For example, `POSTGRES_USER=root`.
        
            env_file:
              - /path/to/env/file
        
        Mount volumes inside the container:
        
            volumes:
              - "/some/path:/var/lib/postgres/data"
        
        Use a network defined in the `networks:` section:
        
            networks:
              - <custom-network>
        
        When Nextcloud is deployed, `docker-compose` automatically deploys `PostgreSQL`
        first because of this dependency declaration:
        
            depends_on:
              - database
        
        Map a port from host to container:
        
            ports:
              - "<custom-port>:80"
    
    3.  Networks
    
        Define the a list of networks.
        
        We specify that the `<custom-network>` is actually an externally created (user
        created, outside of `docker-compose`) network which has the name `<custom-network>.`
        
            networks:
              <custom-network>:
                external:
                  name: <custom-network>

3.  Deployment

    Now that understanding is out of the way, let&rsquo;s get to deployment.
    
    It&rsquo;s as simple as:
    
        docker-compose -f <compose-file-name> up -d
    
    `-d` tells `docker-compose` to run the container in detached mode / the background.
    `-f` defaults to `docker-compose.yml` if you decide to skip the option.
    
    The above command will start the services in order.
    
    If starting a specific service is desired, we can instead do:
    
        docker-compose -f <compose-file-name> up -d <service-name>


<a id="orgdb87a71"></a>

# Task 2

All containers will be deployed with `docker-compose`.


<a id="orgdc02d16"></a>

## Run a webserver with ports 80 and 443 bound to the container

For this setup, we&rsquo;re going to use Nginx.

We&rsquo;re going to use the Alpine image of Nginx because it supports bcrypt
algorithm for basic authentication.

To deploy `nginx`, we can use the following `compose` file:

    version: '3.7'
    
    services:
      webserver:
        container_name: Nginx
        image: nginx:alpine
        restart: unless-stopped
        volumes:
          - "/docker/webserver/config:/etc/nginx/conf.d"
          - "/docker/webserver/certs:/etc/nginx/certs"
        ports:
          - "80:80"
          - "443:443"
        networks:
          - bridge-network
    
    networks:
      bridge-network:
        external:
          name: bridge-network

The `config` directory is for storing nginx configuration and the `certs` directory
is for storing the certificates we&rsquo;ll fetch in the next step.


<a id="org4983b53"></a>

## Fetch SSL Certificates & Redirect


<a id="org7ab7400"></a>

### SSL

1.  Validation Methods

    For SSL certificates, we&rsquo;re going to use HTTP-01 validation method and the tool
    we&rsquo;re going to use is `acme.sh` which is a simple bash script.
    
    With HTTP-01 validation, all requests are made to the webserver by the CA
    (Certificate Authority) to validate that you *own* the domain.
    
    With DNS-01 validation, all requests are made to your DNS provider instead. An
    attempt is made by `acme.sh` to create a TXT record on the DNS provider side and
    it waits some X seconds to verify that those TXT records do exist.
    
    HTTP-01 validation is useful for one-off domains.
    
    DNS-01 validation is useful for wildcard certificates; when you have a lot of
    subdomains and would like to have one certificate for all of them.

2.  Installing ACME

    Let&rsquo;s get started by fetching and installing `acme.sh` with our certificates
    stored in the webserver&rsquo;s certs directory.
    
        git clone https://github.com/Neilpang/acme.sh.git
        
        cd acme.sh
        
        ./acme.sh \
            --install  \
            --config-home /docker/webserver/certs

3.  Using ACME to fetch certificates

    Since we&rsquo;re going to be using HTTP-01, we&rsquo;ll be using `acme.sh`&rsquo;s standalone mode
    which might require installation of `socat` on Ubuntu.
    
        acme.sh \
            --issue \
            -d <our-domain> \
            --standalone \
            --pre-hook 'docker stop Nginx' \
            --post-hook 'docker start Nginx'
    
    The pre / post hooks are required because port 80 is bound to Nginx and `acme`
    cannot use the port unless the process using the port releases it. That is
    achieved by stopping the container before fetching the certificates and starting
    it thereafter.


<a id="org4baf811"></a>

### Redirection

All requests to port 80 can be redirected server side by using this
configuration snippet.

    server {
      listen 80 default_server;
      server_name _;
    
      return 301 https://$host$request_uri;
    }


<a id="orge870986"></a>

## Serve the container through the webserver

In this step, we&rsquo;re going to serve the `Nextcloud` container we deployed in [Task 1](#orgc94ac38)
through Nginx.


<a id="org8a4408b"></a>

### Configuration

Below is the complete configuration (excluding the [redirection snippet](#org4baf811) above).

    server {
      # HTTPS only
      listen 443 ssl http2;
    
      # Domain
      server_name <subdomain>.<domain>.<tld>;
    
      # SSL Certificates
      ssl_certificate '/etc/nginx/certs/<domain>/fullchain.cer';
      ssl_certificate_key '/etc/nginx/certs/<domain>/<domain>.key';
    
    
      location / {
        proxy_pass http://<backend>:80;
    
        # https://caddyserver.com/v1/docs/proxy
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port $server_port;
    
        # https://caddyserver.com/v1/docs/proxy
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
      }
    }

The `<backend>` can be replaced with an alias or IP of the container.


<a id="org97aec67"></a>

### Reload Nginx

Put the above  configuration in a file called `nextcloud.conf` in
`/docker/webserver/config` and then restart Nginx with:

    docker restart Nginx


<a id="org0e7779e"></a>

## Load balance multiple containers


<a id="org446ce51"></a>

### Docker

First we need to create additional instances of our Nextcloud container. This
can be done with the help of `docker-compose`. First, navigate to where the
`compose` file is stored and then create additional instances with:

    # '3' is arbitrary
    docker-compose -f <compose-file-name> up --scale=3


<a id="orgc32151f"></a>

### Webserver

Now we need to configure Nginx to resolve to those 3 backends instead of one.
That can be achieved by defining an `upstream` directive such as:

    upstream nextcloud {
      server <backend-1>
      server <backend-2>
      server <backend-3>
    }

Put that at the top of your configuration and refer to it by replacing the
`<backend>` with the `upstream`.

    ...
    proxy_pass http://nextcloud;
    ...


<a id="orgbeb8b82"></a>

## Get an extra IP&#x2026;


<a id="org3762d40"></a>

### Docker

Let&rsquo;s assume we have two IPs:

-   `120.120.120.120`
-   `220.220.220.220`

For two different webservers, our `docker-compose` will look like this:

    version: '3.7'
    
    services:
      webserver-1:
        container_name: Nginx-1
        image: nginx:alpine
        restart: unless-stopped
        volumes:
          - "/docker/webserver-1/config:/etc/nginx/conf.d"
          - "/docker/webserver-1/certs:/etc/nginx/certs"
        ports:
          - "120.120.120.120:80:80"
          - "120.120.120.120:443:443"
        networks:
          - bridge-network
      webserver-2:
        container_name: Nginx-2
        image: nginx:alpine
        restart: unless-stopped
        volumes:
          - "/docker/webserver-2/config:/etc/nginx/conf.d"
          - "/docker/webserver-2/certs:/etc/nginx/certs"
        ports:
          - "220.220.220.220:80:80"
          - "220.220.220.220:443:443"
        networks:
          - bridge-network
    
    networks:
      bridge-network:
        external:
          name: bridge-network


<a id="orga87e541"></a>

### Nginx

We can configure Nginx to resolve to the different instances of the same
container. We already have more than one instance of our Nextcloud app running
so our task is reduced.

Nginx-1:

    server {
      # HTTPS only
      listen 443 ssl http2;
    
      # Domain
      server_name <subdomain>-1.<domain>.<tld>;
    
      # SSL Certificates
      ssl_certificate '/etc/nginx/certs/<domain>/fullchain.cer';
      ssl_certificate_key '/etc/nginx/certs/<domain>/<domain>.key';
    
      location / {
        proxy_pass http://<backend-1>:80;
    
        # https://caddyserver.com/v1/docs/proxy
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port $server_port;
    
        # https://caddyserver.com/v1/docs/proxy
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
      }
    }

Nginx-2:

    server {
      # HTTPS only
      listen 443 ssl http2;
    
      # Domain
      server_name <subdomain>-2.<domain>.<tld>;
    
      # SSL Certificates
      ssl_certificate '/etc/nginx/certs/<domain>/fullchain.cer';
      ssl_certificate_key '/etc/nginx/certs/<domain>/<domain>.key';
    
      location / {
        proxy_pass http://<backend-2>:80;
    
        # https://caddyserver.com/v1/docs/proxy
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port $server_port;
    
        # https://caddyserver.com/v1/docs/proxy
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
      }
    }


<a id="orgbfe4aeb"></a>

# Task 3


<a id="orgb768218"></a>

## Portainer as the web frontend for container management


<a id="org8d6632b"></a>

### Tool

Portainer offers a webUI for controlling, monitoring and deploying your
containers. It is particularly useful when you do not have a dedicated machine
that is comfortable enough to type or ssh in from.

It also offers paid extensions for role management.


<a id="org7a72011"></a>

### Docker

Since `Portainer` will be used to fully manage Docker, it needs full access to the
`Docker` socket.

The compose file looks like this:

    version: '3.7'
    
    services:
      portainer:
        container_name: Portainer
        image: portainer/portainer:
        restart: unless-stopped
        volumes:
          - "/var/run/docker.sock:/var/run/docker.sock"
          - "/docker/portainer/data:/data"
        networks:
          - custom-network
    
    networks:
      custom-network:
        external:
          name: custom-network

If you want Portainer to manage containers across multiple networks, add more
networks in the above compose file.


<a id="orgb93114d"></a>

### Nginx

We&rsquo;ll use Nginx to deploy container to the web. The configuration won&rsquo;t look any
different than our previous ones. Infact, it&rsquo;s exactly the same with
replacements for the subdomain and the backend.

    server {
      # HTTPS only
      listen 443 ssl http2;
    
      # Domain
      server_name <subdomain>.<domain>.<tld>;
    
      # SSL Certificates
      ssl_certificate '/etc/nginx/certs/<domain>/fullchain.cer';
      ssl_certificate_key '/etc/nginx/certs/<domain>/<domain>.key';
    
    
      location / {
        proxy_pass http://<backend>:80;
    
        # https://caddyserver.com/v1/docs/proxy
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port $server_port;
    
        # https://caddyserver.com/v1/docs/proxy
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
      }
    }


<a id="org1287288"></a>

## Use monitoring tools like fail2ban to prevent abuse


<a id="org866846c"></a>

### Tool

`fail2ban` is a tool that monitors your webserver logs for abuse and limits or
blocks those IP addresses accordingly. Since Docker manipulates `iptables` rules
on its own, blocking IP addresses on the host is of not much use as all of our
applications are running in containers. It&rsquo;s the container traffic that needs to
be dealt with.

Instead of adding rules to the `INPUT` chain, we&rsquo;ll add rules to the `DOCKER-USER`
chain. This has two advantages:

1.  Rules are persistent by default as the `DOCKER-USER` chain rules are added
    before any other rule. This is handled by Docker by default.
2.  IPs get blocked in containers instead of on the host.


<a id="org8e1aece"></a>

### Docker

Since `fail2ban` manipulates firewall rules, it needs to have access to the system
*in some form*. For that, we need to do the following:

-   Run the `fail2ban` container in host networking mode instead of bridge networking.
-   Assign the `NET_ADMIN` and `NET_RAW`. More information about capabilities can be
    found [here](https://man7.org/linux/man-pages/man7/capabilities.7.html).

The docker-compose file:

    version: '3.7'
    
    services:
      fail2ban:
        container_name: Fail2ban
        image: crazymax/fail2ban:latest
        restart: unless-stopped
        network_mode: "host"
        env_file:
          - "./fail2ban.env"
        volumes:
          - "/docker/fail2ban/data:/data"
          - "/docker/webserver/logs:/var/log:ro"
        cap_add:
          - NET_ADMIN
          - NET_RAW

See how we don&rsquo;t need to define networks here?

Note: You need to enable logging in Nginx for this to work. Can you figure out how?


<a id="org609bbd1"></a>

## Setup auto-updates for your containers


<a id="org3ede4ac"></a>

### Tools

For auto-updates, we&rsquo;re going to use either `Watchtower` or `Ouroboros`. Both of
them provide exactly the same functionality. The only difference is former is
written in Golang and the latter is written in Python.

I&rsquo;m going with `Watchtower` as a random choice.


<a id="org77da81d"></a>

### Docker

1.  Compose

    To deploy Watchtower, we can write the following compose file:
    
        version: '3.7'
        
        services:
          auto-updates:
            container_name: Watchtower
            image: containerrr/watchtower:latest
            restart: unless-stopped
            env_file:
              - /path/to/env/file
            volume:
              - "/var/run/docker.sock:/var/run/docker.sock"
            networks:
              - custom-network
        
        networks:
          custom-network:
            external:
              name: custom-network
    
    A filesystem bind-mount is made for the `docker` socket because Watchtower needs
    privileges over Docker to update containers which is not really different than
    performing the following steps;
    
    -   Download new image for the container (with the same tag)
    -   Stop and remove the running container
    -   Create a container with the new image
    
    Note: `Watchtower` will only monitor and update those containers which are in the
    same network.

2.  Environment

    Environment variables can be configured for Watchtower as described [here](https://containrrr.dev/watchtower/arguments/).
    Everything is just a `var=value` declaration.
    
    For example:
    
        WATCHTOWER_POLL_INTERVAL=3600
    
    The above changes the frequency of checking for updates from 5 minutes to an hour.


<a id="orgc9df158"></a>

#### Think of and deploy (at least one) service that will be actually of use to you

This is an unsupervised task. You can choose any application you want, as long
as it does not have *too many* moving parts, deploy it with Docker, secure the
frontend with Nginx.

## example : webrtc
[resource_download](https://webrtchacks.com/webrtc-cv-tensorflow/)
                
![image](https://user-images.githubusercontent.com/42961200/126855734-3bf4b593-944d-40de-a1c6-82dbcef9bee0.png)
                
```
git clone https://github.com/webrtcHacks/tfObjWebrtc.git
cd tfObjWebrtc
python setup.py install
```

- docker command 
                
```
docker run -it -p 5000:5000 --name tf-webrtchacks -v $(pwd):/code chadhart/tensorflow-object-detection:webrtchacks
```                
