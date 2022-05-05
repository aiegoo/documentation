---
layout: post
title: "poe technolgoy explained"
name: "power-over-ethernet"
tags: [raspi]
tagName: raspi
permalink: 2022-05-05-power-over-ethernet.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "raspi rpi poe camera csi 5v"
summary: "Thu, May 05, 22, how poe technogy is created and used to simplify power and data connection requirements"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2022-05-05T16:55:41 +0900
updated: 2022-05-05 16:55
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## poe explained

What is Power over Ethernet?

Power over Ethernet (POE) is a technology that lets network cables carry electrical power.

For example, a digital security camera normally requires two connections to be made when it is installed:

A network connection, in order to be able to communicate with video recording and display equipment

A power connection, to deliver the electrical power the camera needs to operate

However, if the camera is POE-enabled, only the network connection needs to be made, as it will receive its electrical power from this cable as well.
![image](https://user-images.githubusercontent.com/42961200/166884685-32fad89a-aaf1-4cb1-8702-5f06a5e5fd24.png)

Power over Ethernet reduces the number of cables required to connect a POE IP camera

Why use POE?

Specifying Power over Ethernet brings many advantages to an installation:

Time and cost savings - by reducing the time and expense of having electrical power cabling installed.  Network cables do not require a qualified electrician to fit them, and can be located anywhere.

Flexibility - without being tethered to an electrical outlet, devices such as IP cameras and wireless access points can be located wherever they are needed most, and repositioned easily if required.

Safety - POE delivery is intelligent, and designed to protect network equipment from overload, underpowering, or incorrect installation.

Reliability - POE power comes from a central and universally compatible source, rather than a collection of distributed wall adapters.  It can be backed-up by an uninterruptible power supply, or controlled to easily disable or reset devices.

Scalability - having power available on the network means that installation and distribution of network connections is simple and effective.


Devices that use Power over Ethernet

POE has many applications, but the three key areas are:

VoIP phones - the original POE application.  Using POE means phones have a single connection to a wall socket, and can be remotely powered down, just like with the older analog systems.

IP cameras - POE is now ubiquitous on networked surveillance cameras, where it enables fast deployment and easy repositioning.

Wireless - Wifi and Bluetooth APs and RFID readers are commonly PoE-compatible, to allow remote location away from AC outlets, and relocation following site surveys.


How to upgrade to POE

Adding POE to your network is straightforward, and there are two routes you can choose:

A POE switch is a network switch that has Power over Ethernet injection built-in.  Simply connect other network devices to the switch as normal, and the switch will detect whether they are POE-compatible and enable power automatically.
POE switches are available to suit all applications, from low-cost unmanaged edge switches with a few ports, up to complex multi-port rack-mounted units with sophisticated management.
Adding Power over Ethernet using a POE Switch

![image](https://user-images.githubusercontent.com/42961200/166884740-6ff4361c-6423-4df2-ae68-8919c93eac88.png)

A midspan (or POE injector) is used to add POE capability to regular non-POE network links.  Midspans can be used to upgrade existing LAN installations to POE, and provide a versatile solution where fewer POE ports are required.  Upgrading each network connection to POE is as simple as patching it through the midspan, and as with POE switches, power injection is controlled and automatic.
Midspans are available as multi-port rack-mounted units or low-cost single-port injectors.

Adding Power over Ethernet using a POE Midspan

![image](https://user-images.githubusercontent.com/42961200/166884765-6a6dd90d-993a-4fd8-88c9-5f46d8183c89.png)

It is also possible to upgrade powered devices, such as IP cameras, to POE by using a POE splitter.  The POE splitter is patched in to the camera's network connection, and taps off the POE power, which it converts into a lower voltage suitable for the camera.

## part 2 for poe explained
Hart 2 - Demystifying POE


Myths and misconceptions

POE is a recently-developed technology, and many people are put off adopting it by the raft of conflicting or out-of-date information that is available on the subject.  Here are the most common misconceptions:

POE has compatibility problems. Not so. It is true that the early days of POE, many home-brewed and proprietary schemes were employed to get power over network cables.  However, the IEEE 802.3af standard has gained universal adoption as POE's popularity has spread, meaning that compatibility between all modern POE equipment is assured.

POE requires electrical knowledge. Again, early ad-hoc implementations may have required careful design, but IEEE 802.3af POE is designed to ensure reliable operation in any configuration that would be possible with regular Ethernet.  All the user has to do is wire up the network as normal, and the equipment will take care of power delivery.

POE requires special wiring. Not at all, the same cabling - Cat 5e, Cat 6, etc - and "RJ45"-style connectors are used for both regular and PoE-enabled local area networks.

Power is forced into devices. This misconception is surprisingly common, however it is important to remember that power ratings quoted by manufacturers are upper limits and are not fixed.  Plugging a 5 watt camera into a 15 watt injector does not result in 10 watts of power being lost somewhere; the camera will simply draw as much electrical power as it needs.


High power POE

The 802.3af POE standard is fine for network devices that require up to around 13 watts of electrical power, but many devices in the markets that have adopted POE require just that little bit more.  It is certainly possible for network cable and connectors to handle more power, but high-power POE systems have been proprietary and not always backwards-compatible with regular 802.3af POE.

For this reason a new standard was introduced by the IEEE to increase the available power: 802.3at, or POE Plus.  POE Plus has the following features:

Increased electrical power - POE Plus nearly doubles the amount of electrical power available to powered devices, to 25.5 watts.

Compatible with 802.3af POE - POE Plus switches and injectors will recognise 802.3af powered devices and enable POE to them as normal.  POE Plus powered devices can also be connected to 802.3af POE switches or injectors, and are supposed to restrict how much power they use accordingly.

Smart power budgeting - 802.3at includes scope for power sources and powered devices to communicate with each other to negotiate an allowance of electrical power.

POE Plus means that a more complete range of network equipment can now be POE-powered, including IP cameras with heater/blowers, and multichannel wireless access points.

Note that 802.3at exists alongside the 802.3af standard; it does not replace it.  802.3af will still be employed by the majority of Power over Ethernet devices for the foreseeable future.


How does POE work?

Network cables, such as Cat 5e and Cat 6, comprise eight wires arranged as four twisted pairs.  In 10 and 100BASE-T Ethernet, two of these pairs are used for sending information, and these are known as the data pairs.  The other two pairs are unused and are referred to as the spare pairs (Gigabit Ethernet uses all four pairs).

Because electrical currents flow in a loop, two conductors are required to deliver power over a cable.  POE treats each pair as a single conductor, and can use either the two data pairs or the two spare pairs to carry electrical current.

Power over Ethernet is injected onto the cable at a voltage between 44 and 57 volts DC, and typically 48 volts is used.  This relatively high voltage allows efficient power transfer along the cable, while still being low enough to be regarded as safe.

This voltage is safe for users, but it can still damage equipment that has not been designed to receive POE.  Therefore, before a POE switch or midspan (known as a PSE, for power sourcing equipment) can enable power to a connected IP camera or other equipment (known as a PD, for powered device), it must perform a signature detection process.

Signature detection uses a lower voltage to detect a characteristic signature of IEEE-compatible PDs (a 25kOhm resistance).  Once this signature has been detected, the PSE knows that higher voltages can be safely applied.

Classification follows the signature detection stage, and is an optional process.  If a PD displays a classification signature, it lets the PSE know how much power it requires to operate, as one of three power classes.  This means that PSEs with a limited total power budget can allocate it effectively.  POE power classes are as follows:

POE Power Class	1	2	3
PSE Power available	4.0W	7.0W	15.4W
Max device power	3.84W	6.49W	12.95W

The differences between power delivered by the PSE and power received by the PD account for power that is lost as heat in the cable.  If a PD does not display a signature, it is class 0 and must be allocated the maximum 12.95 watts.

POE Plus equipment has a power class of 4.  If a regular 802.3af POE source detects this class it will simply enable power as if it was a class 0 device.  However, an 802.3at PSE will not only recognise the PD as a POE Plus device, it will also repeat the classification stage, as a signal to the PD that is connected to a power source with full POE Plus power available.  (In theory the PD should also be able to request the extra power by communicating across the network link.)  POE Plus PSEs can supply up to 30 watts and available device power is 25.5 watts.

The final stage after detection and classification of a newly connected device is to enable power: the 48V supply is connected to the cable by the PSE so the PD can operate.  Once enabled, the PSE continues to monitor how much electrical current it is delivering to the PD, and will cut the power to the cable if too much, or not enough, power is drawn.  This protects the PSE against overload, and ensures that POE is disconnected from the cable if the PD is unplugged.
{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
