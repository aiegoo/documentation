---
layout: post
title: "cheatsheet and my customization"
name: "tmux-tmuxinator"
tags: [bash]
tagName: bash
permalink: 2021-10-22-tmux-tmuxinator.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "tmux tmuxinator tmux conf window pane surgery copy paste bash shellscript"
summary: "Fri, Oct 22, 21, cheatsheet for both tmux tmuxinator"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-10-22T05:30:47 +0900
updated: 2021-11-30 10:30 AM
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## tmuxinator cheatsheet
<script src="https://gist.github.com/crittelmeyer/5924454be991ed61d6d7.js"></script>


##  tmux/tmuxinator cheatsheet

### tmux
As configured in my dotfiles, [here](https://github.com/crittelmeyer/dotfiles/blob/master/.tmux.conf) and [here](https://github.com/crittelmeyer/dotfiles/blob/master/oh-my-zsh/plugins/tmux/tmux.plugin.zsh).

### Command line
    $ tmux                           -> start new
    $ tmux new -s myname             -> start new w/session name
    $ tmux a  #  (or at, or attach)  -> attach
    $ tmux a -t myname               -> attach to named
    $ tmux ls                        -> list sessions
    $ tmux kill-session -t myname    -> kill session w/name

#### Shortcuts (via .oh-my-zsh/plugins/tmux/tmux.plugin.zsh)
* ta    =  tmux attach -t
* ts    =  tmux new-session -s
* tl    =  tmux list-sessions
* tksv  =  tmux kill-server
* tkss  =  tmux kill-session -t

### Quick, oft-used shortcuts (defined in ~/.tmux.conf)
    shift-arrow  -> toggle window in arrow direction
    alt-arrow    -> toggle pane in arrow direction

### Tmux command mode - in tmux, type the prefix (default is `ctrl+b`, I use `ctrl+q`) and then:

#### Sessions
    :new<CR>  -> new session
    s         -> list sessions
    $         -> name session

#### Windows (tabs)
    l            -> last window
    c            -> new window
    ,            -> name window
    w            -> list windows
    f            -> find window
    &            -> kill window
    .            -> move window - prompted for a new number
    :movew<CR>   -> move window to the next unused number

#### Panes (splits)
    -          -> horizontal split (defined in ~/.tmux.conf)
    |          -> vertical split (defined in ~/.tmux.conf)
    Ctrl-q     -> quick swap (defined in ~/.tmux.conf)
    o          -> swap panes
    q          -> show pane numbers
    x          -> kill pane
    !          -> kill all panes except current
    ⍽          -> space - toggle between layouts

#### Window/pane surgery
  (following 4 commands specified in ~/.tmux.conf)
    h                 -> stretch/shrink left side of pane
    j                 -> stretch/shrink bottom of pane
    k                 -> stretch/shrink top of pane
    l                 -> stretch/shrink right side of pane
    :joinp -s :2<CR>  -> move window 2 into a new pane in the current window
    :joinp -t :1<CR>  -> move the current pane into a new pane in window 1

* [Move window to pane](http://unix.stackexchange.com/questions/14300/tmux-move-window-to-pane)
* [How to reorder windows](http://superuser.com/questions/343572/tmux-how-do-i-reorder-my-windows)

#### Misc
    [  -> "copy" or "scroll" mode - from here type Fn+Arrow or use mouse scrollwheel
    r  -> reload config (defined in ~/.tmux.conf)
    d  -> detach
    t  -> big clock
    ?  -> mlist shortcuts
    :  -> prompt

### Copy & Paste w/the System Clipboard
    1. Enter copy mode           $ <prefix> [
    2. Enter selection mode      $ v
    3. Move to end of selection  $ arrows or hjkl
    4. Copy selected text        $ y or <Enter>
    5. Paste copied text         $ ctrl+p

### Resources:

* [cheat sheet](http://cheat.errtheblog.com/s/tmux/)

Notes:

* You can cmd+click URLs to open in iTerm.
* You can cmd+double-click strings to select w/iTerm (and the cmd+c to copy)
  * HOWEVER: If you are copying text and multiple tmux panes are open, it will copy across panes! This is usually undesirable. It is recommended to use the above copy-paste instructions for copying to the system clipboard from within tmux.

### Tmuxinator

As configured in [my dotfiles](https://github.com/crittelmeyer/dotfiles/blob/master/oh-my-zsh/plugins/tmuxinator/_tmuxinator).

* mux new [PROJECT] => create new project and open config in editor
* mux copy [EXISTING] [NEW] => copy existing project to new project and open config in editor
* mux list => list all projects
* mux delete [PROJECT] => delete project
* mux help => more commands + descriptions
* mux implode => delete all projects

## shellscript example

{{site.data.alerts.details}}
이 글에서는 두 가지 쉘 스크립트를 작성할건데요.

첫 번째,

PATH에 Working Directory 추가하기.
AWS CLI, AWS ElasticBeanstalk CLI 설치하기.
AWS Credential 추가하기.
보너스로 PHP Codeigniter를 AWS ElasticBeanstalk에 Deploy 해보기.

두 번째,

로컬 환경에서 Docker에 웹서버(PHP Codeigniter) 올려보기.
이 말인즉슨, 신규 입사자는 첫 번째 쉘 스크립트로 기본적인 AWS 기반의 개발 환경이 갖춰지고, 두 번째 쉘 스크립트로 로컬 환경에서 개발이 바로 가능해진다는 것이죠!

하지만 이 글에서는 쉘 스크립트의 문법에 대해서는 다루지 않습니다! 이곳을 참고해주세요! 이 글에서는 쉘 스크립트로 꽤 많은 것을 편하게 할 수 있다는 것을 알려드리는데에 초점이 맞춰져 있습니다.

첫 번째 쉘 스크립트
먼저 프로젝트 폴더를 생성하고, 내부에 디렉토리 구조를 만들어봅니다
    
```bash
$ cd ~
$ mkdir sspj
$ cd sspj
$ mkdir utilities
$ cd utilities
$ mkdir bin
$ mkdir tmp
$ cd ..
$ mkdir webserver
# structure
-- sspj
  -- utilities
    -- bin
    -- tmp
  -- webserver
    
```
### source 
    
{% include copyto.html %}
```bash
$ vi ~/sspj/utilities/bin/sspj_setup.sh

#! /bin/bash
# 윗 줄은 이 프로그램은 bash를 기반으로 실행된다는 뜻입니다.

# 실행된 쉘 스크립트의 절대 경로를 가져옵니다.
SOURCE="$"
while [ -h "$SOURCE" ]; do
  TARGET="$(readlink "$SOURCE")"
  if [[ $SOURCE == /* ]]; then
    SOURCE="$TARGET"
  else
    DIR="$( dirname "$SOURCE" )"
    SOURCE="$DIR/$TARGET"
  fi
done
DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

BASEDIR=$DIR

IFS="/"
BASEDIR_SPLIT=($BASEDIR)
IFS=""

# Root 디렉토리를 구합니다.
SSPJ_HOME=""

for key in "$";
    do {
        if [[ $key > 0 && $key < $(( $ - 2 )) ]]; then
            SSPJ_HOME="$SSPJ_HOME""/""$"
        fi;
    };
done

# bash_profile에 PATH를 추가해줍니다.
echo "export SSPJ_HOME=$SSPJ_HOME" >> ~/.bash_profile
echo "export PATH=$PATH:$SSPJ_HOME" >> ~/.bash_profile

echo "Root directory is $SSPJ_HOME"

# AWS CLI를 설치하기 위해 pip를 먼저 설치합니다.
echo "Installing pip ..."
sudo curl https://bootstrap.pypa.io/get-pip.py -o $SSPJ_HOME/utilities/tmp/get-pip.py
echo "Running get-pip.py ..."
sudo python $SSPJ_HOME/utilities/tmp/get-pip.py

# AWS CLI를 설치합니다.
echo "Instailling awscli ..."
sudo pip install --ignore-installed awscli

# AWS ElasticBeanstalk CLI를 설치합니다.
echo "Instailling awsebcli ..."
sudo pip install --ignore-installed awsebcli

# AWS Credential을 만듭니다.
echo "Input AWS Access Key : "
read AWS_ACCESS_KEY
echo "Input AWS Secret Access Key : "
read AWS_SECRET_ACCESS_KEY

sudo mkdir ~/.aws
sudo chmod -R 777 ~/.aws
sudo touch ~/.aws/credentials
sudo cat > ~/.aws/credentials << EOF
[default]
aws_access_key=$AWS_ACCESS_KEY
aws_secret_access_key=$AWS_SECRET_ACCESS_KEY
EOF
sudo touch ~/.aws/config
sudo cat > ~/.aws/config << EOF
[profile eb-cli]
aws_access_key_id=$AWS_ACCESS_KEY
aws_secret_access_key=$AWS_SECRET_ACCESS_KEY
EOF

# PATH를 터미널에 적용하기 위해 source를 해줍니다.
source ~/.bash_profile

# 끝!
echo "Done!"
    
```
chmod +x ~/sspj/utilities/bin/sspj_setup.sh
source ~/sspj/utilities/bin/sspj_setup.sh
    
![script_01_01](https://user-images.githubusercontent.com/42961200/143969081-dcc157e3-fe95-47df-92c0-32aaacf4e7ca.png)
![script_01_02](https://user-images.githubusercontent.com/42961200/143969123-f25c087d-cd24-463b-a1bb-5f559cbcc746.png)
    
![script_01_03](https://user-images.githubusercontent.com/42961200/143969163-d3ce559d-9d64-4fb9-a572-2f0e41c6c4d3.png)
AWS Access Key를 넣어주면..
    
![script_01_04](https://user-images.githubusercontent.com/42961200/143969227-fffc41cb-279d-4c62-9f93-a8287f136d06.png)

![iam](https://user-images.githubusercontent.com/42961200/143969256-6430425c-0873-4848-a8c0-ef90f6196160.png)
![iam3](https://user-images.githubusercontent.com/42961200/143969291-5e06acf3-f7cb-441a-9e98-ff4e8f01272d.png)
![iam4](https://user-images.githubusercontent.com/42961200/143969303-e9efc3a6-9e74-4447-8a92-1c823d2201d2.png)
![iam5](https://user-images.githubusercontent.com/42961200/143969305-5fa07cd8-fc82-4da6-8eba-3bd83fe6c521.png)
![iam6](https://user-images.githubusercontent.com/42961200/143969331-e598206c-c22e-4cd3-97e0-9db1017422cc.png)
![iam8](https://user-images.githubusercontent.com/42961200/143969361-7cc8dced-3c5c-43d4-8786-14662ef38b81.png)

AWS ElasticBeanstalk에 CLI로 배포하기
먼저, webserver.zip 파일을 다운로드 받고, ~/sspj/webserver 폴더에 압축을 풉니다.

AWS ElasticBeanstalk에 관한 설명은 Elastic Beanstalk Configuration files(.ebextensions)에서도 보실 수 있습니다. 나는 쉘 스크립트만 궁금하다 하시는 분은 이 파트를 건너뛰셔도 됩니다!

PHP Codeigniter 기반으로 작성된 뼈대 웹서버 인데요. 이를 AWS ElasticBeanstalk CLI로 간편하게 배포해보겠습니다.
    
```bash
$ cd ~/sspj/webserver
$ eb init
    
```
eb는 AWS ElasticBeanstalk CLI 인데요. 아까 첫 번째 쉘 스크립트가 자동으로 설치해준 녀석입니다. init 명령어를 통해 최초 설정을 해줍니다.

![eb_init](https://user-images.githubusercontent.com/42961200/143969525-2ada04da-f4e8-4267-a2e6-54ea17d90cfd.png)
![eb_init2](https://user-images.githubusercontent.com/42961200/143969572-bd4ff624-b260-4b0f-8d53-8042f5111dac.png)
![eb_init3](https://user-images.githubusercontent.com/42961200/143969576-dc9a7211-1e59-489f-8182-f60070124128.png)
![eb_init4](https://user-images.githubusercontent.com/42961200/143969580-d170f241-58a8-4c87-afb6-25c87d4ab9cd.png)
![eb_init3](https://user-images.githubusercontent.com/42961200/143969610-de39830f-c9ed-4cdb-8939-59118c1f9d91.png)
![eb_init4](https://user-images.githubusercontent.com/42961200/143969631-ba72e931-8542-4545-a278-d328c577b178.png)

![eb_init5](https://user-images.githubusercontent.com/42961200/143969680-32abf717-c31f-4879-bcf6-714f13448787.png)
![eb_init6](https://user-images.githubusercontent.com/42961200/143969707-cb80b14d-bbd6-47f4-8f30-837fad9903dc.png)

![eb_init7](https://user-images.githubusercontent.com/42961200/143969713-9cb56058-825e-4d38-a55b-8d772ea7a9e2.png)
![eb_init9](https://user-images.githubusercontent.com/42961200/143969718-1264129c-0a4e-4176-9d06-1a0c895b537d.png)

![eb_create](https://user-images.githubusercontent.com/42961200/143969729-0f274d8e-db1a-428f-ab58-707b8aae576f.png)

![eb_create3](https://user-images.githubusercontent.com/42961200/143969743-0f1824b7-f637-4efa-9c8a-74ba7e440abf.png)
![eb_create5](https://user-images.githubusercontent.com/42961200/143969800-277fcfbb-4e3b-405a-8dd1-3b7954ba10e2.png)

```shell
$ eb deploy    
```
 
정말 쉽죠?

그런데 개발할 때 테스트를 위해서 기능을 수정할 때마다 deploy를 하고 수정하고 하는 식은 너무 불편하겠죠. 그래서 이를 Docker로 로컬 환경에서 실행해보겠습니다.

두 번째 쉘 스크립트
두 번째 쉘 스크립트에 작성하기 전에, webserver.zip 파일을 다운로드 받고, ~/sspj/webserver 폴더에 압축을 풉니다. 이미 앞선 파트에서 받으셨다면 받지않으셔도 됩니다.

저희는 Docker를 통해 개발 환경을 설정할 것이기 때문에 먼저 Docker를 설치해야 합니다. (이곳(Docker for Mac)에서 설치할 수 있습니다.)

먼저 Dockerfile을 만듭니다.

Dockerfile에 대한 자세한 설명은 진행하지 않습니다! 이런식으로 쉘 스크립트를 사용할 수 있다고만 봐주세요!
    
```bash
vi ~/sspj/Dockerfile_ws
# config 
$ cd ~/sspj/utilities/bin
$ mkdir ws-config
$ cd ws-config
$ vi 000-default.conf  
    
```
```yml
<VirtualHost *:80>
        ServerAdmin webmaster@localhost
        ServerName localhost

        DocumentRoot /var/www/webserver
        <Directory />
                Options FollowSymLinks
                AllowOverride All
        </Directory>
        <Directory /var/www/webserver >
                Options Indexes FollowSymLinks MultiViews
                AllowOverride All
                Order allow,deny
                allow from all
        </Directory>

        ErrorLog $/error.log

        # Possible values include: debug, info, notice, warn, error, crit,
        # alert, emerg.
        LogLevel warn

        CustomLog $/access.log combined
</VirtualHost>    
```
    
vi ~/sspj/utilities/bin/run_ws_local.sh
    
```bash
#! /bin/bash
# 윗 줄은 이 프로그램은 bash를 기반으로 실행된다는 뜻입니다.

# 이미 실행중인 컨테이너가 있다면 멈추고
docker stop sspj-ws-container
# 제거합니다.
docker rm sspj-ws-container
# Dockerfile을 빌드하고
docker build -f $SSPJ_HOME/Dockerfile_ws . -t sspj-ws
# 실행합니다.
docker run -it -d -p 80:80 --name sspj-ws-container -v $SSPJ_HOME/webserver:/var/www/webserver sspj-ws    
```
  
    
```bash
$ chmod +x ~/sspj/utilities/bin/run_ws_local.sh
$ ~/sspj/utilities/bin/run_ws_local.sh    
```
    
    
![docker1](https://user-images.githubusercontent.com/42961200/143970070-9ae1d34f-1244-4f66-aee4-0575edf54696.png)
![docker2](https://user-images.githubusercontent.com/42961200/143970075-75a54a23-41a4-46e5-a99e-3b062927abb6.png)
$ source ~/sspj/utilities/bin/quest_setup.sh
$ . ~/sspj/utilities/bin/run_ws_local.sh
    
    
    
{{site.data.alerts.ended}}
{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
