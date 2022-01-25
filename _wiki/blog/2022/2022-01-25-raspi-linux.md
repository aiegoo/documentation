---
layout: post
title: "connecting raspi on ubuntun20.04 without a monitor"
name: "raspi-linux"
tags: [ubuntu]
tagName: ubuntu
permalink: 2022-01-25-raspi-linux.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "raspi ubuntu 20.04 netowrk wifi settings"
summary: "Tue, Jan 25, 22, change network/ssh and user configuration to use rasp without a monitor"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-01-25T13:55:37 +0900
updated: 2022-01-25 13:55
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## from roboticsbackend

### Install Ubuntu 20.04 on Raspberry Pi 4 (without monitor)
In this tutorial you’ll learn how to install Ubuntu 20.04 on Raspberry Pi 4, without needing any external monitor/keyboard/mouse.

Just your computer (with which you’re reading this tutorial now), your Raspberry Pi 4 board, a micro SD card, and the power cable.

I will also show you how to completely configure Ubuntu server on your Pi4, using ssh.

Once installed and configured, you can expect Ubuntu server to take something like 200MB minimum, without counting the RAM in cache (this is the data I got with the steps of this tutorial).

So, 1GB of RAM is possible, but you have to be careful when you start something, because your amount of available RAM is quite limited. I recommend you choose at least the Pi4 version with 2GB of RAM. The price difference between the 1GB and 2GB versions is not huge.

If you only have a 1GB RAM board available, it’s ok! Everything will still work. In fact, before Raspberry Pi 4, boards like Pi 2, Pi 3B, and Pi 3B+ only had one possible hardware configuration: 1GB RAM. So if it was possible then, it is possible now. 2+GB of RAM will simply allow you to launch more/bigger programs and care less about RAM usage.

### Download Ubuntu 20.04 image for Raspberry Pi
Go to the Ubuntu download page for Raspberry Pi images, and download the 64-bit version for Raspberry Pi 4.
![raspberry_pi_ubuntu_img](https://user-images.githubusercontent.com/42961200/150917325-ba6605c8-c064-4d3a-a287-e0bdcb3cc780.png)
![raspberry_pi_ubuntu_img](https://user-images.githubusercontent.com/42961200/150917332-06d1049b-0d37-420c-93d0-db6ecd42f3a3.png)

- Download Ubuntu 20.04 image for Raspberry Pi 4

This will take you to a “Thank you” page, and the download will start. The file size should be between 600-700MB.

Flash Ubuntu image into a micro SD card
Extract the image
Now that you have the file, first, and this is important, extract the image from the archive. Because what you get is not directly the image, it’s an archive containing the image. In my case, the image size, after extraction, was about 3.2 GB.

micro SD card requirements
The micro SD card you have must be a class 10 card. To verify that check your card and if you see “10” within a circle then it’s OK.

Also, your card should have at least 8GB of space. 8GB is the minimum so you can run the OS + install a few things, but if you can, aim for 16GB or 32GB.

### Flash the image
To flash the image into your micro SD card you’ll need a software. (Well you could just use command lines from Linux but I’ll stick to the software here). A nice software I often use is balenaEtcher, which is compatible with Windows/Linux/MacOS.

- Download balenaEtcher, install it and start it.

Then, plug your micro SD card to your computer, it should be automatically detected. Finally, click on the “Flash from File” button to select the Ubuntu image. Note: select the image, not the archive file!
![balena_etcher_rpi_ubuntu](https://user-images.githubusercontent.com/42961200/150917356-27ec738d-2158-4c2c-9edd-27c6dbc19471.png)

balenaEtcher flash Raspberry Pi Ubuntu 20.04 on micro SD card

Click on “Flash” and wait until it’s done. This can take a few minutes. Once done, depending on the options you’ve chosen, the card may be ejected.

Setup Wi-Fi and ssh for your Raspberry Pi 4 without a monitor
Great, now your micro SD card contains Ubuntu server for Raspberry Pi 4.

BUT, the configuration is not complete yet. As we won’t use any external monitor/keyboard/mouse we first need to configure the Wi-Fi directly from the SD card, and make sure we can ssh into it. Don’t worry though it will be quite easy.

So, put back your micro SD card into your computer.

Setup Wi-Fi directly from your SD card
Navigate inside the root folder of the card. The name should be something like “system-boot”.

Find the file named “network-config” and open it in a text editor. On Windows, you can right-click -> “open with” and select any text editor you want.

The file should contains this:
```yaml
# This file contains a netplan-compatible configuration which cloud-init
# will apply on first-boot. Please refer to the cloud-init documentation and
# the netplan reference for full details:
#
# https://cloudinit.readthedocs.io/
# https://netplan.io/reference
#
# Some additional examples are commented out below
version: 2
ethernets:
  eth0:
    dhcp4: true
    optional: true
#wifis:
#  wlan0:
#    dhcp4: true
#    optional: true
#    access-points:
#      myhomewifi:
#        password: "S3kr1t"
#      myworkwifi:
#        password: "correct battery horse staple"
#      workssid:
#        auth:
#          key-management: eap
#          method: peap
#          identity: "me@example.com"
#          password: "passw0rd"
#          ca-certificate: /etc/my_ca.pem
```

Add your Wi-Fi name and password just after the ethernet configuration.

```yaml
version: 2
ethernets:
  eth0:
    dhcp4: true
    optional: true
wifis:
  wlan0:
    dhcp4: true
    optional: true
    access-points:
      "YOUR_WIFI_NAME":
        password: "YOUR_WIFI_PASSWORD"
```
A few things to pay attention to:

* Make sure the indentation is exactly 2 spaces. No tab, no 4 spaces.
* Replace YOUR_WIFI_NAME with your actual Wi-Fi name. Keep the quotes “”.
* Replace YOUR_WIFI_PASSWORD with the password for the Wi-Fi. Keep the quotes “”.
* Of course, this Wi-Fi network should be the same as the one your computer is currently connected to, otherwise the rest of this tutorial won’t work.
* Save the file and that’s it.

- ssh setup
For ssh, you should not need to do anything.

If you go into the “user-data” file, also inside the root directory of your SD card, you should see:

```yaml
# On first boot, set the (default) ubuntu user's password to "ubuntu" and
# expire user passwords
chpasswd:
  expire: true
  list:
  - ubuntu:ubuntu
# Enable password authentication with the SSH daemon
ssh_pwauth: true
```
So, we’ll be able to connect to the Pi via ssh, and we have the initial username and password: ubuntu:ubuntu.

First Ubuntu 20.04 boot on Raspberry Pi 4 – Find the Pi’s IP address
Eject and remove the micro SD card from your computer. Make sure your Pi is powered off (power cable removed), put the micro SD card in the corresponding slot, and only then power on your Raspberry Pi 4.

At this point, you don’t have any visible output since you don’t have a monitor. But you should see the green LED on the Pi blink randomly. It means the Pi is booting and working with the SD card. If the green LED is not blinking randomly, maybe it’s because the flash operation was not successful.

The Pi 4 will try to connect to your Wi-Fi network, using the name and password you’ve provided.

Now, the next step is to find what is the IP address of the Pi inside the network.

Important Note: with the following instructions, if you don’t see your Pi address at first, and if you’ve waited at least 2 minutes, power off/power on the Pi again. When I first booted the Pi with this Ubuntu image, it didn’t connect to the Wi-Fi. After I restarted it once, it worked.

On Windows
If you’re on Windows, you can use the Advanced IP Scanner tool.

All you have to do is click on “Scan” and wait.
![advanced_ip_scanner_rpi](https://user-images.githubusercontent.com/42961200/150917404-d9612669-eaa0-4e1b-b1e2-80b9cf604b34.png)

Advanced IP Scanner - Find Raspberry Pi's IP

OK, found it!

The Raspberry Pi 4’s IP address, in my case, is 192.168.43.56, and the name of the machine is “ubuntu”.

On Linux/Ubuntu
If you’re already running Ubuntu on your computer (natively or within a virtual machine), you can use only the terminal to find the Pi’s address.

I usually use nmap to do that (sudo apt install nmap).

First find your network IP address and mask. Run ifconfig:

```bash
$ ifconfig
enp0s3: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.43.138  netmask 255.255.255.0  broadcast 192.168.43.255
        inet6 fe80::4024:2554:eea4:f97b  prefixlen 64  scopeid 0x20<link>
        ether 08:00:27:28:65:38  txqueuelen 1000  (Ethernet)
        RX packets 36560  bytes 42335654 (42.3 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 8763  bytes 671459 (671.4 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 947  bytes 82515 (82.5 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 947  bytes 82515 (82.5 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```
In this case, the IP address of my Ubuntu host is 192.168.43.138, and the mask is 255.255.255.0 (24 bits).

Now, with nmap and the data you just got:

```bash
$ sudo nmap -sP 192.168.43.0/24
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-26 13:50 CEST
Nmap scan report for _gateway (192.168.43.1)
Host is up (0.015s latency).
MAC Address: 8E:F5:A3:DB:03:27 (Unknown)
Nmap scan report for ubuntu (192.168.43.56)
Host is up (0.049s latency).
MAC Address: DC:A6:32:02:46:50 (Raspberry Pi Trading)
Nmap scan report for LAPTOP-27UBLNO7 (192.168.43.234)
Host is up (0.00057s latency).
MAC Address: 7C:B2:7D:9E:95:DA (Intel Corporate)
Nmap scan report for ed-vm (192.168.43.138)
Host is up.
Nmap done: 256 IP addresses (4 hosts up) scanned in 2.07 seconds
```
And we find the IP address: 192.168.43.56.

### First ssh connection to the Raspberry Pi 4
Connect to the Pi wish ssh
If you’re on Windows (older than Windows 10 with October 2018 update), use a program such as Putty.

Put the IP address of the Pi and click on “Open”.
![putty_rpi_ssh](https://user-images.githubusercontent.com/42961200/150917510-c645add5-c5ae-4e60-b903-5b4282cca388.png)

Putty on Windows for ssh

You’ll be asked to give username and password. Simply use “ubuntu” twice.
![putty_rpi_ssh_login](https://user-images.githubusercontent.com/42961200/150917531-5d68ee02-964f-44c0-a2af-4e2be1dc376a.png)

Putty Connect to Raspberry Pi on Ubuntu with ssh

If you’re on Linux (or Windows 10 recently updated), simply connect to the Pi from a terminal, with the ssh command line tool: ssh ubuntu@ip_address, and use “ubuntu” for the password.

Password change
The first time you connect to your Pi, you will be asked to change the default password (“ubuntu”).

Once done, the connection will be closed.

```bash
$ ssh ubuntu@192.168.43.57
The authenticity of host '192.168.43.57 (192.168.43.57)' can't be established.
ECDSA key fingerprint is SHA256:rNDFgb1H2GiIhNPJ7oYI5963+/vbob2HOY1W4FakG/0.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '192.168.43.57' (ECDSA) to the list of known hosts.
ubuntu@192.168.43.57's password: 
You are required to change your password immediately (administrator enforced)
Welcome to Ubuntu 20.04 LTS (GNU/Linux 5.4.0-1008-raspi aarch64)
 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage
  System information as of Wed Apr  1 17:26:14 UTC 2020
  System load:  0.1               Temperature:            57.9 C
  Usage of /:   6.1% of 28.95GB   Processes:              133
  Memory usage: 13%               Users logged in:        0
  Swap usage:   0%                IPv4 address for wlan0: 192.168.43.57
0 updates can be installed immediately.
0 of these updates are security updates.
The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.
Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.
WARNING: Your password has expired.
You must change your password now and login again!
Changing password for ubuntu.
Current password: 
New password: 
Retype new password: 
passwd: password updated successfully
Connection to 192.168.43.57 closed.
```
Now, you can connect to your Pi again, using “ubuntu” as the username, and the new password you’ve just set.

Configure Ubuntu 20.04 on your Raspberry Pi 4
From now on, I will assume that you’re connected to your Pi via ssh. All the commands will be executed directly on the Pi.

Correctly synchronize date on Ubuntu
It is possible that the date is not correctly synchronized.

To check that, simply execute date:
```bash
$ date
Thu 25 Jun 2020 11:55:14 AM CEST
```
If the date+time is not correct, first check that your Pi is connected to the Internet. Even if it is connected to a Wi-Fi network, maybe this network doesn’t have access to the Internet. For a very quick check, see if the command ping ubuntu.com gives you a positive result.

```bash
$ ping ubuntu.com
PING ubuntu.com (91.189.91.45) 56(84) bytes of data.
64 bytes from fautso.canonical.com (91.189.91.45): icmp_seq=1 ttl=49 time=164 ms
64 bytes from fautso.canonical.com (91.189.91.45): icmp_seq=2 ttl=49 time=236 ms
```
If you get that you can be sure your Pi has access to the Internet.

Now, if the date is still not synchronized, then you can simply solve that by installing htpdate: `sudo apt install htpdate`. After that, execute date again and you should have the current date. (you could solve that issue with a bunch of different solutions, but to keep things simple here I just used htpdate).

Note: here is a possible error output you can get with `sudo apt update` (which we’ll run later in this tutorial) if your date is not correct.

```bash
$ sudo apt update
Get:1 http://ports.ubuntu.com/ubuntu-ports focal InRelease [265 kB]
Get:2 http://ports.ubuntu.com/ubuntu-ports focal-updates InRelease [107 kB]
Get:3 http://ports.ubuntu.com/ubuntu-ports focal-backports InRelease [98.3 kB]
Get:4 http://ports.ubuntu.com/ubuntu-ports focal-security InRelease [107 kB]
Reading package lists... Done     
E: Release file for http://ports.ubuntu.com/ubuntu-ports/dists/focal/InRelease is not valid yet (invalid for another 21d 23h 47min 19s). Updates for this repository will not be applied.
E: Release file for http://ports.ubuntu.com/ubuntu-ports/dists/focal-updates/InRelease is not valid yet (invalid for another 83d 17h 5min 42s). Updates for this repository will not be applied.
E: Release file for http://ports.ubuntu.com/ubuntu-ports/dists/focal-backports/InRelease is not valid yet (invalid for another 83d 17h 6min 1s). Updates for this repository will not be applied.
E: Release file for http://ports.ubuntu.com/ubuntu-ports/dists/focal-security/InRelease is not valid yet (invalid for another 83d 18h 16min 39s). Updates for this repository will not be applied.
```

### Set your time zone
The default time zone will be UTC0.

Run timedatectl list-timezones to list all available time zones.

Then, run timedatectl set-timezone your_time_zone to set the time zone, for example timedatectl set-timezone Europe/Paris.

### Update/upgrade packages
One of the first thing you want to do with a fresh installation is to upgrade all the packages you have to the newest version.
```bash
$ sudo apt update
...
...
$ sudo apt upgrade
...
...
$ sudo apt autoremove
...
...
$ sudo reboot
```
And then reboot. Your Pi is fully ready now.

Optional: install a desktop
By default, when working with this Ubuntu server installation, you’ll connect to the Pi via ssh and always work like that.

But, if you ever need to use a desktop with a monitor for a specific application, you can get one.

You can choose between:

ubuntu-desktop
xubuntu-desktop
lubuntu-desktop
kubuntu-desktop
To install a desktop for Ubuntu, simply use sudo apt install ubuntu-desktop for example.

However, note that the installation is quite big (2.7GB for ubuntu-desktop) and even if you still use your Pi headless (without a monitor), the RAM usage will be higher. So, only install a desktop if you truly need one.

Your Raspberry Pi4 is now ready with Ubuntu 20.04
Well done, your Pi is correctly configured!

Now you can start working on your projects. Before you do so, you may install your favorite text editors/debug tools/utilities/etc.

Then, well it depends on what you want to do.

If you are working with robots, the combination Raspberry Pi 4 + Ubuntu 20.04 server is great.

For example you can start playing with GPIOs using the RPi.GPIO Python module, or even work with ROS2 to build a complete and scalable application.

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
