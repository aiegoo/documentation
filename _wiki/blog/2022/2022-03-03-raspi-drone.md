---
layout: post
title: "firmtech7 of naver cafe raspi drone project"
name: "raspi-drone"
tags: [drone]
tagName: drone
permalink: 2022-03-03-raspi-drone.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "drone raspi joystick firmtech"
summary: "Thu, Mar 03, 22, using raspi as fc to control small drone"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-03-03T15:12:55 +0900
updated: 2022-03-03 15:12
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## environments
```bash
ssh pi@172.30.1.37 on raspi
sudo apt install -y build-essential file git sudo ruby curl
sudo apt install libavutil-dev tmux
sudo apt install rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> .bashrc
echo 'eval "$(rbenv init -)"' >> .bashrc

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
rbenv install --list
rbenv install 3.0.3

# in case of issues with above, follow this instruction: https://elinux.org/RPi_Ruby_on_Rails
sudo apt install dirmngr
# Install prerequisites
sudo apt-get install -y git curl zlib1g-dev subversion 
# this will take hours
curl -L get.rvm.io | bash -s stable --rails

# Additional Ruby dependencies
sudo apt-get install -y openssl libreadline6-dev git-core zlib1g libssl-dev
sudo apt-get install -y libyaml-dev libsqlite3-dev sqlite3
sudo apt-get install -y libxml2-dev libxslt-dev
sudo apt-get install -y autoconf automake libtool bison
# Install prerequisites
sudo apt-get install -y git curl zlib1g-dev subversion

source ~/.rvm/scripts/rvm

sudo apt install tmux
gem install tmuxinator

sudo apt install powerline
sudo apt install fonts-powerline

mkdir .configure/fontcofnig/

tee .configure/fontconfig/conf.d

<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <selectfont>
    <acceptfont>
      <pattern>
        <patelt name="family"><string>terminess powerline</string></patelt>
      </pattern>
    </acceptfont>
  </selectfont>
</fontconfig>

fc-cache -vf

$ sudo wiliest wlan0
# Returns list of available Wifi networks
$ sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
#opens the wpa-supplicant configuration file in nano
#Go to the bottom and add:
network = {
    ssid = "wifiname"
    psk = "wifipassword"
}

# install mavproxy
sudo apt-get install python3-dev python3-opencv python3-wxgtk4.0 python3-pip python3-matplotlib python3-lxml python3-pygame
pip3 install PyYAML mavproxy --user
echo "export PATH=$PATH:$HOME/.local/bin" >> ~/.bashrc
```


## source
[source_cafe](cafe.naver.com/firtech7)

### cloing raspi usb stick

### installing joystick_remote


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
