---
title: contents deploy automation
tags: [getting_started, drone, git, setup]
last_updated: July 10, 2021
keywords: ansible, webhook, serverupdate, automation
summary: "Pilot test on the automation prototype."
sidebar: mydoc_sidebar
permalink: mydoc_ansible.html
folder: mydoc
---

## Ansible
[github](https://github.com/tonyrhee/ansible/blob/master/playbooks/server-update-ansible) check tonyrhee 
[instructionWiki](https://github.com/tonyrhee/ansible/wiki#make-sure-all-servers-are-connected-on-ssh-creds-thats-all)


I have worked on this a couple of months as a part of deploy automation. Ansible is powerful as in itself is a network language affiliated with corporations such as Cisco, Amazon, Openstack, Azure and other paramount vendors in equal standing. 

# Pilot test on the automation prototype 
> (collection of yml ini files and prerequisites) - 설치 및 배포 자동화 프로그램

{% include image.html file="https://github.com/aiegoo/ansible/blob/master/images/webHook.png" caption="webhook polling on web server" %}

## 특징
1. 깃의 모든 기능을 사용할 수 있다.
2. 깃 서버는 --배어 플래그로 이닛한다.
3. 서버간 ssh 통신과 id_rsa.pub을 모두 공유하여 상통한 상태여야 한다.
4. 개발자, 마스터서버, 슬레이브서버 설정을 한다. - 아래 내용참고
5. playbook 설정을 하고 실행문을 실행한다. (ini / yml 파일들)

## prior requisite settings on 

We need to configure three kinds of machines 

1. Master Server (M)
2. Deployment Servers (X, Y, Z, etc.)
3. Development Machines (A, B, etc.)

on Ubuntu server run (`sudo apt update $$ sudo apt install software-properties-common $$ sudo apt-add-repository --yes --update ppa:ansible/ansible $$ sudo apt install ansible`)
where M, X, Y, Z, A, B, etc. refer to the IP addresses of these machines respectively.

### 🏁 on master, create a repo ☄ your contents (배포할 내용을 저장) 
:one: `cd ~/repos $$ git clone --bare`

### on master, clone the playbook repo from your private repository (tonyrhee/ansible) 앤서블 리포
:two: `cd ~/ $$ git clone git@github.com:tonyrhee/ansible  $$ cd ansible`

### on master, configure yml and ini files to setup access, server ips etc.
:three:
1. [ini](https://github.com/tonyrhee/ansible/blob/master/playbooks/inventory.ini)
2. [yml](https://github.com/tonyrhee/ansible/blob/master/playbooks/roles/git_update/defaults/main.yml)
3. [실행문](https://github.com/tonyrhee/ansible/blob/master/playbooks/server-update-ansible)
4. [post-receive](https://github.com/tonyrhee/ansible/blob/master/post-receive)

### from master, run ssh copy id to target servers (slaves)
:four: `ssh-copy-id -i ~/.ssh/mykey user@host`

### make sure all servers are connected on ssh creds. That's all!!
```
./server-update-ansible
```

### github repo
-[ansible](https://github.com/aiegoo/ansible)

### udemy course I have taken;
- DevOps: Automate your infrastructure using Ansible in 9 hours
- Ansible Essentials Simplicity in Automation [udemyWiki](https://github.com/aiegoo/udemy/wiki/devop27)

```bash
git clone --single-branch --branch june2 git@github.com:aiegoo/ansible.git

```

Above script will copy the june2 branch of the repository, which contains readme and codes I have worked on. Below is the replicate of the branch readme contents.

<hr>
<hr>
## 1. Introduction

We need to configure three kinds of machines -

1. Master Server (M)
2. Deployment Servers (X, Y, Z, etc.)
3. Development Machines (A, B, etc.)

where M, X, Y, Z, A, B, etc. refer to the IP addresses of these machines respectively.

### 1.1 Architecture
This is the architecture diagram which will be used for reference.
![Architecture](https://github.com/aiegoo/ansible/blob/june2/Architecture.jpg?raw=true "Architecture")

## 2. Configuring Master Server (M)
On the Master Server, four things need to be set up which are -
1. A [bare git repository](https://git-scm.com/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server "bare git repository") (G) that hosts the code and acts like github.com
2. Ansible control node configurations
3. Passwordless SSH into each of the development servers (X, Y, Z, etc.)
4. post-receive hook on the bare repository (G) created in step 1

### 2.1 Setting up the bare git repository
[This guide](https://git-scm.com/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server "This guide") explains the process of creating a bare git repository. Follow this or any other guide to set up your bare repository on this server. It may or may not have shared file server facility as explained [here](https://mindchasers.com/dev/git-bare "here"). Just create a basic bare git repository which you can push to from one of the development machines (A, B, etc.).
You can either create a new bare repository -
```bash
git init --bare .
```
or clone an existing repository in bare mode -
```bash
git clone --bare https://github.com/example/example.git
```

### 2.2 Configuring the Ansible control node
The Master server (M) needs to be configured for use as an Ansible control node.
For this, follow the steps given below -

#### 2.2.1 Install Ansible
For installing Ansible on (M) follow the steps given [here](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html "here").

#### 2.2.2 Clone this repository
This repository contains the code for ansible playbooks in the branch develop-ansible. Clone it and checkout the branch develop-ansible.
The expected path where this repository should be cloned on the master server is `/root/`
So, after cloning, the contents of this repository should be inside `/root/ansible/` folder. Following is a set of commands you might require -
```bash
cd /root
git clone https://github.com/aiegoo/ansible.git
cd ansible
git checkout develop-ansible
```

#### 2.2.3 Configure the necessary variables
In the cloned repository, see config variables in the file playbooks/roles/git_update/defaults/main.yml
You can edit these variables in the editor of your choice. Assuming you use vim, you can refer to this [quick cheatsheet](https://vim.rtorr.com/ "quick cheatsheet") of vim commands. Here are some commands you might need -

Open the file:
```bash
vi /root/ansible/playbooks/roles/git_update/defaults/main.yml
```
Enter INSERT mode by pressing `i`, then navigate to the position of the variables given below. Use `DELETE` to remove parts you don't want and type in the text required. When done, press `ESC` to reach back to the command mode. Type `:wq` to save and quit the file. Repeat as required for as many of the variables given below as required.

##### 2.2.3.1 GITHUB_BASE_URL
This is the base URL for the repo you're trying to set up. For repos hosted on github.com, this will be 'https://github.com'.
For a bare repo on, say 52.79.239.222, this will be 'ssh://root@52.79.239.222:'
For the latter case, make sure you have passwordless ssh auth from that location and don't forget the colon at the end. This is explained in the later sections.

##### 2.2.3.2 GITHUB_REPO_NAME

This is the complete repo name. For repos hosted on github.com, include the username too, e.g. 'aiegoo/hanuman'
For bare repos, this is the full path of the repository e.g. 'root/repos/project.git'.
Please note that a '/' is automatically added preceding this value to conjunct correctly with GITHUB_BASE_URL.

##### 2.2.3.3 GITHUB_LOCALDIR

Path where the repo should be cloned in the target server.

##### 2.2.3.4 GITHUB_DEFAULT_BRANCH
Branch of the repo to be cloned. By default this is 'master'

##### 2.2.3.5 List your deployment servers (X, Y, Z, etc.)
Next, configure the list of servers in playbooks/inventory.ini
Comment out the [localhost] part and add each new server in a new block, e.g.,

    [X]
    ip_addr ansible_connection=ssh ansible_user=user ansible_ssh_private_key_file=/home/user/.ssh/id_rsa
	
	[Y]
    ip_addr ansible_connection=ssh ansible_user=user ansible_ssh_private_key_file=/home/user/.ssh/id_rsa
    
This server block contains 5 parts - 
###### Block name
This is what you write in square brackets, e.g. [X] and [Y] above.
###### IP Address
This is the IP Address of the deployment server in consideration.
###### ansible_connection
This is the type of ansible connection to use. Refer to [this](https://docs.ansible.com/ansible/latest/plugins/connection.html "this"), and in this case this should be 'ssh' so you can leave it as it is.
###### ansible_user
The username that should be used in your SSH connection to the deployment server in consideration.
###### ansible_ssh_private_key
The path of the SSH key to be used for this connection on the Master server (M). If you login with 'root' user, this should be '/root/.ssh/id_rsa'

#### 2.3 Passwordless SSH
Make sure the servers you add here with ansible_connection=ssh allow passwordless ssh connection from the Master server (M)
To enable this, follow [this guide](https://askubuntu.com/questions/46930/how-can-i-set-up-password-less-ssh-login "this guide") for each of the deployment servers you add.
Basically this boils down to running two commands - 
```bash
    ssh-keygen (only the first time)
    ssh-copy-id user@ssh-host (for each deployment server)
```
#### 2.4 Configuring the post-receive hook
On this bare repo (G) we need to configure the post-receive hook so that it runs ansible when something is pushed to it.
The 'post-receive' hook file is provided in this repository. Copy it to the hooks folder inside your bare git repository. 
```bash
cp /root/ansible/post-receive /path/to/your/bare/repo.git/hooks/
```
Make sure it is executable by running
`chmod +x post-receive`

## 3. Configuring the deployment servers
Next, we need to setup the deployment servers that we have listed in 2.2.3.5

For each deployment server (X, Y, Z, etc.), the step 2.3 Passwordless SSH access needs to be performed for connection to the Master server (M). Basically, each deployment machine needs to be able to connect without a password to the Master server (M) as it needs to pull the code from the bare git repo (G) from there.

## 4. Configure the development machines
In each development machine, make sure you have sufficient access to push to the bare git repository hosted at the Master server (M)

## 5. How it all works?
Refer to the Architecture diagram, when you push something from, say 'A' to 'M', the file post-receive inside the bare repository is triggered.
This file runs the script 'server-update-ansible'.
In 'server-update-ansible', there's code which runs an ansible playbook.
This ansible playbook has some configurations as done in 2.2.3.
he playbook connects with each of the deployment servers, say 'X', and pulls the code from the bare git repo.

``
