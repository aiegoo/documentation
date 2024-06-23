---
layout: post
title: "do server setup from do image"
name: "digitalocean"
tags: [setup]
tagName: setup
permalink: 2022-09-27-digitalocean.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "cloud digitalocean image droplet linux network ipaddr"
summary: "Tue, Sep 27, 22, how to deploy a droplet from a past image"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-09-27T10:44:16 +0900
updated: 2022-09-27 10:44
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Digital Ocean
### DO Images
> Projects
1. gitlab for self-managed version control server and voip/asterisk
2. mosa devOps for deep learning and other linux platform development

With these two projects, I ran several droplets while in the peakest, and two images are managed as snapshots; jdlab-feb2022 and centos-freepbx

|  |  |  |  |
| -- | -- | -- | -- |
| jdlab | 136.73 G | centos-freepbx | 61.4G |

## how to deploy from an image

### accessing the server via ssh
```
Hi,
I just created a droplet from my image or backup and afterward, I wasn't able to access it via ssh except through the browser console. (iP 159.223.44.226)

By checking ufw, it seems okay, but when I checked port availability from a port checker site, it says clsoed.

I remember that it used to have some issues, of which I don't remember. So how do I access my droplet via ssh?
```
> Summary pointers of my issue

```
# cat /etc/*-release
# cat /etc/network/interfaces
# cat /etc/network/interfaces.d/*
# cat /etc/netplan/50-cloud-init.yaml
# ip addr
# ip route
# ufw status verbose
# iptables -nvL --line-numbers
# cat /etc/udev/rules.d/70-persistent-net.rules
# cloud-init -v
# which netplan
```

> outputs

```
Hi,
I try my best to capture all, but the console output doesn't fit and tend to cut off at the length for the screen size of the console.

I am providing my github issues page where you can view as is, and attached it here below with screencapture image links.

[jdlab-setup](https://github.com/aiegoo/jdlab-setup/issues/3)

or below for individual image links

- cat /etc/*-release
[distro](https://user-images.githubusercontent.com/42961200/153698036-ac718f00-f646-441d-a46d-868901841921.png)

- cat /etc/network/interfaces
[interface](https://user-images.githubusercontent.com/42961200/153698115-046a2950-49c1-4d25-b315-9608a8953e0f.png)

- cat /etc/network/interfaces.d/*
[interface.d](https://user-images.githubusercontent.com/42961200/153698153-fe340d06-4931-428e-8c74-3e80a2d4fc33.png)

- cat /etc/netplan/50-cloud-init.yaml
[cloud-init](https://user-images.githubusercontent.com/42961200/153698201-4c872343-8ab2-4a79-82fd-87a4975450b2.png)

- ip addr
[iptable](https://user-images.githubusercontent.com/42961200/153698232-9b345a0a-d68c-442c-92a5-dfa1659bee76.png)

- ip route
[route](https://user-images.githubusercontent.com/42961200/153698341-c6173222-f12a-4142-9540-33bdad9bfac4.png)

ufw status verbose
- [ufw-verbose](https://user-images.githubusercontent.com/42961200/153698394-dd2c886f-f918-46dd-8049-82b0376155a0.png)

- iptables -nvL --line-numbers
[iptable](https://user-images.githubusercontent.com/42961200/153698553-d1692d0d-9840-4b7a-9ab6-21a41b4502a1.png)

- cat /etc/udev/rules.d/70-persistent-net.rules
[firewall-rules](https://user-images.githubusercontent.com/42961200/153698672-5246d978-0ec5-4f68-9eca-2b20caa42553.png)

- cloud-init -v
[cloud-init](https://user-images.githubusercontent.com/42961200/153698701-bfa35131-7dd1-4d53-8d1f-d3d3ccf085ad.png)

- which netplan
[netplan](https://user-images.githubusercontent.com/42961200/153698724-dd7aa1fa-341f-4f7f-b7a2-2d47a2cfecc2.png)
```

> support answers

```
It appears that the Droplet's network interface is named ens3 or ens4 instead of eth0 or eth1, which sounds like systemd's predictable network interface naming. That can be helpful in some situations but is not necessary for a virtualized environment where the network interfaces are not changing.

To resolve this, you will need to edit your GRUB configuration to disable systemd interface renaming. This process will require rebooting your Droplet so please be prepared for that. I strongly recommend taking a Snapshot of your Droplet before making any changes:

How to Create Snapshots of Droplets
https://www.digitalocean.com/docs/images/snapshots/how-to/snapshot-droplets/

Once the Snapshot has been created, please follow these steps:

1. Log in to your Droplet's web console

2. Open the file /etc/default/grub.d/50-cloudimg-settings.cfg with your favorite text editor, such as vim. Look for the line that says "GRUB_CMDLINE_LINUX_DEFAULT" and add net.ifnames=0 at the end of the line, within the quotations. It should look like this afterward:

GRUB_CMDLINE_LINUX_DEFAULT="console=tty1 console=ttyS0 net.ifnames=0"

3. Save and close the file

4. Update GRUB with the new settings and reboot the Droplet by running these commands:

update-grub

reboot

Once the Droplet has rebooted, review your networking service, active interface(s), and route
```


```
Hi, thanks for a prompt response.

ssh still doesn't work unfortunately.
Please help again.

https://github.com/aiegoo/jdlab-setup/issues/3#issuecomment-1037048682

The last cli about net rules has no actual output except that the file doesn't exist.

Thanks again

```

> more feedback from the do support


Reviewing the output of the commands it appears that the public network interface is DOWN and the IP address is not configured, so we need to configure it and bring it up and add the default gateway as well to establish a working public route. Currently, your droplet is not responding to the network requests.

So in order to configure the public network interface please make sure to run the commands in the same order given below:

```
$ ip addr add 159.223.44.226/20 dev eth0
$ ip link set eth0 up
$ ip route add default via 159.223.32.1
```

This should establish a functional public route, though you may still need to add nameservers for hostname resolution. Use your preferred text editor to open /etc/resolv.conf and add Google’s DNS resolvers. The example below uses nano:

`nano /etc/resolv.conf`

Add the following nameservers:

```
nameserver 8.8.8.8
nameserver 8.8.4.4
```

Please note that adding the route and manually raising the interface will not be persistent, so you will lose public networking again after reboot if the underlying issue with networking is not resolved. Similarly, nameservers manually added to /etc/resolv.conf will not be persistent either. So, once you are done with this, please share the output of the below commands so we can take further steps accordingly. 

```
cat /etc/*release
cloud-init -v
ip addr
ip route
```


Glad to know that droplet's networking is rebuilt but these manual changes can be lost if you reboot the droplet at this particular time. So, we need to make these changes permanent. After you get the network up by manually setting the IP for the eth0 interface, adding the default route and DNS settings then you will have to install cloud-init, because I have observed in the latest snapshots that it is not there. 

```
$ apt update
$ apt install cloud-init
```
Once that is installed you will have to fetch the droplet's metadata and compare it with the network configurations that you did manually. The below curl request will provide droplets metadata information that you need to compare with the configurations you did manually.

`curl -s http://169.254.169.254/metadata/v1.json`

After you verify that the same network configurations are shown you can run this command "cloud-init clean -r" which would rebuild the network configuration. 

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
