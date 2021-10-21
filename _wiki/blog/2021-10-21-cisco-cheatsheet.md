---
layout: post
title: "Cisco adaptive security appliancy, to protect data center and networks"
name: "cisco-cheatsheet"
tags: [network]
tagName: network
permalink: 2021-10-21-cisco-cheatsheet.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: network
keywords: "cisco network ASA lina cli EXEC hostname interface"
summary: "Thu, Oct 21, 21, firewall, vpn and dynamic routing and Lina"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-10-21T14:40:04 +0900
updated: 2021-10-21 14:40
---
* TOC
{:toc}

## curious programmer

Cisco Adaptive Security Appliancy is known as the Cisco ASA. It
is used to protect networks and data centres.

It offers firewall, VPN and facilitates dynamic routing amongst other
features and capabilities.

It runs on Linux using a single Executable and Linkable Format program
called lina. Lina schedules processes and handles things like concurrency
internally rather than using the underlying Linux capabilities.

In this post I share a few of the CLI commands to query, operate
and configure the device.

## Access privelage EXEC mode

`ciscoasa` is the default hostname for the default ASA state. You will
see that you are in EXEC mode with the `ciscoasa>` prompt.

Type `enable` to access privilege EXEC mode. The default password is **blank**.
The prompt changes to `ciscoasa#`

## Lockdown access to ASA

`show` displays sensitive data and we don't want prying eyes to see that.

```
enable password <PASSWORD>
show running-config enable
```

To verify the password works, we need to `exit` the modes.
`exit` config mode and then privilege EXEC.

## Create a local user account

The highest privilege is `15`

```
username admin password cisco privilege 15
show running-config user
```

## Get more information about the system

`show version`

`show processes`

`show file system`

`show flash`

## Set a hostname

Change the hostname from the **global configuration mode**.

`configure terminal` or `config terminal` or `config t`

Notice the prompt becomes `ciscoasa(config)#`

Enter `hostname <HOSTNAME>` and your prompt will change to that name.

## Set the clock for logs and what-not

Timestamps are important for
logs. They help administrators understand the order of events.
`clock set hh:mm:ss {month day | day month} year`

```
clock set 21:10:00 9 february 2019
show clock
```

## Assign a domain name

```
domain-name ec2-1-2-3-4.compute-1.amazonaws.com
show running-config domain-name
```

## Show a banner

In your global configuration mode `oxygen(config)#` we can set banners.
Below we configure the **message of the day (MOTD)** banner.

```
banner motd Please be advised unauthorized access is strictly prohibited
banner motd All access are recorded for security purposes
banner motd This device is the property for ACME Corp.
show banner
```

## Inside/Outside interfaces

oxygen(congif)# `show interface`
oxygen(config)# `interface management0/0`
oxygen(config-if)# `nameif Inside`
oxygen(config-if)# `security-level 100`
oxygen(config-if)# `ip address 192.168.2.1 255.255.255.0`
oxygen(config-if)# `nameif Inside`
oxygen(config-if)# `nameif Inside`

## References

- [](https://www.cisco.com/c/en/us/td/docs/security/asa/asa72/configuration/guide/conf_gd/intparam.pdf)
  [Cisco ASA](https://en.wikipedia.org/wiki/Cisco_ASA) - Wikipedia
- [Cisco Adaptive Security Appliance (ASA) Software](https://www.cisco.com/c/en/us/products/security/adaptive-security-appliance-asa-software/index.html) - cisco.com
- [Cisco ASA series part one: Intro to the Cisco ASA](https://www.nccgroup.trust/au/about-us/newsroom-and-events/blogs/2017/september/cisco-asa-series-part-one-intro-to-the-cisco-asa/) - nccgroup



I work with NATs and ACLs on Cisco ASA (Adaptive Security Appliance) in the terminal.
I want a sandbox environment for me to go bonkers. I couldn't find an image from
Cisco to download and install so I chose to go shopping on the AWS Marketplace.

I found **Cisco Adaptive Security Virtual Appliance (ASAv) - Standard Package**.
They say it brings full firewall functionality to virtualized
environments to secure data center traffic and multi-tenant environments.
I think that's pretty much what I need.

Cisco does party hard. They charge you and it can get quite pricey. :cry: They predefine
the instances you can select which does not fall under the AWS free usage tier.
As I write this, there is a 5-day trial and thereafter a charge of \$0.69 per hour.

I need you to brace yourself for this shopping experience. It's not very user
friendly and it becomes repetitive.

> **WARNING!** You will get an error after you have created your instance if your
> account has not been verified. There is an option to replay the order for your
> instance so your time would not have been for nothing.

## Going shopping

1. To enter the marketplace you need to authenticate. Access the [AWS Account](https://portal.aws.amazon.com) page.
   Sign in. Sign up. You know best.
2. Squeeze your way past all the tempting options by going directly to
   the **[Cisco Adaptive Security Virtual Appliance (ASAv) - Standard Package](https://aws.amazon.com/marketplace/pp/B00WH2LGM0)**.
3. Proceed to the first level of checkout. There will be a few of these.
   Go on by clicking on the top right orange button on each page.
   - **[Continue to Subscribe](https://aws.amazon.com/marketplace/server/procurement?productId=87868dac-850c-4c36-ba33-ff3d39a724ac)**
     gives you more information about annual licensing and the TOCs.
   - **[Continue to Configuration](https://aws.amazon.com/marketplace/server/configuration?productId=87868dac-850c-4c36-ba33-ff3d39a724ac)**
     gives you a small fulfillment form you need to verify or change. Specify the
     image (**64xbit (x86) Amazon Machine Image (AMI)**),
     ASAv version (**9.9.2.1 (May 10, 2018)**) and region (**US East (N. Virginia)**).
     I just chose the defaults.
   - **Continue to Launch** shows you a screen to review your instance configuration
     and choose how you want to launch the software. I went with **Launch through EC2**.

## Building your instance

Now that we are done shopping and spending all our money, we shall proceed to
build our Cisco instance. One does not simply build such an instance so let's take
it one step at a time shall we. Okay, this statement rings true for me at least.

1. Default to everything. Don't get clever just yet. Let's first get something up
   and running. You can terminate it and create a new one later.
2. Choose your instance type. I chose m4.large (6.5 ECUs, 2 vCPUs, 2.4 GHz,
   Intel Xeon E5-2676v3, 8 GiB memory, EBS only). This is the minimum requirement
   for Cisco ASAv.
3. Check out the other entries then click on the blue button **Preview and Launch**.

You'll get warnings. Possibly two. One will be about improving your instance
security because the firewall created is open so that whole world can access your
instance (inbound SSH defined on 0.0.0.0/0) and the other will politely explain that your instance is
not eligible for the free usage tier.

Change what you want. Verify the order. Click on **Launch** which proceeds to another step:
**Select an existing key pair or create a new key**. Use this key to authenticate
to your instance without a password. I downloaded mine, moved it to `~/.ssh`
and `chown 400 ~/.ssh/awesome.pem`.

> The name of your key is the `.pem` filename
> so I avoided special characters the second time around.

Finally, you can click on the blue **Launch Instances** button. If all goes
according to plan, the instance will launch.

## Accessing your AWS instance

Here is where the fun begins. Can you ping it? Copy the Public DNS IPv4 address and slap
that into a `ping` command in your terminal. Access that under **Dashboard** >
**Running Instances** > copy the Public DNS IPv4 address from the table of instances
for your instance.

### I can't ping my AWS instance

> No luck? Let's try **Network & Security** > **Security Groups** > right-click on
> the associated security group > **Edit inbound rules** > **Add Rule**.
> Type=Custom ICMP Rule - IPv4,
> Protocol=Echo Request, Source=Anywhere/My IP.

Can you SSH to it? On the instances page, click on the **Connect** button for
that instance and get more information about what to do with your `.pem` file.
It's basically what I explained above. For our instance we need to connect using
the `admin` user and include our `.pem` file which we can do as follows
`ssh -i "~/.ssh/awesome.pem" admin@ec2-1-2-3-4.compute-1.amazonaws.com`

### I can't SSH to my AWS instance

> Still no luck? Let's try **Network & Security** > **Security Groups** > right-click on
> security group > **Edit inbound rules** again.

- Does your firewall have a rule configured for SSH?
- What sources can access your instance? Any (0.0.0.0/0) or your current IP address?
- Is your instance using the correct security group?
- Can you ping your instance yet? If not, check your VPC and network interface.
  I had an instance configured and couldn't get a network interface to attatch.
  Eventually I terminated it, recreated it and it worked. If I knew where the
  correct settings were, I wouldn't have had to do that.

## Using ASA

What a journey!

I am finally in. There is a `ciscoasa>` prompt. Basic commands are permitted in
this mode. See them `?`

Go into admin mode `login admin` and again press `?` to see admin commands.

The mode I hang around in the most is the config mode. Once logged in
`config t` which is short for `config terminal` For the last time, press `?`
for all the commands available. WHAM! The instance works and I can get my
hands dirty on my very own Cisco box.

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
