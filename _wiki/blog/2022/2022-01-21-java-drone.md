---
layout: post
title: "java drone app with mavlink mavproxy and gcs"
name: "java-drone"
tags: [drone, java, gcs]
tagName: java
permalink: 2022-01-21-java-drone.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "drone gcs uav java linh"
summary: "Fri, Jan 07, 22, udemy course integration, and my local dev-with linh"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2022-01-21T08:52:54 +0900
updated: 2022-01-21 08:52
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## 4gremoteoperation

[javaAll](https://github.com/aiegoo/uas-reference/blob/master/web-dev/JavaAll.pdf)

### setup Libraries

- Raspi lib to install

```shell
sudo apt update
sudo apt install libhdf5-dev
sudo apt install libhdf5-serial-dev
sudo apt install libatlas-base-dev
sudo apt install libjasper-dev
sudo apt install libqtgui4
sudo apt install libqt4-test
sudo apt install python3-opencv
```

### SITL simulator


- Get the project
  git clone --recursive https://github.com/ArduPilot/ardupilot.git
  cd ardupilot

- Install required packages
  Tools/environment_install/install-prereqs-ubuntu.sh -y
  . ~/.profile

- Cofigure the board and build vehicle type
  ./waf configure --board fmuv3
  ./waf copter

- Go to ArduCopter directory and run simulator
  cd ArduCopter
  sim_vehicle.py --console --map --out 192.168.0.101:14553

More detailed information from:
    https://ardupilot.org/dev/docs/building-setup-linux.html#building-setup-linux





When you decide to deploy finished Java application - build it, deploy it on a VPS [or any machine with public IP]

and then run it with this command in terminal:

java -Djava.security.egd=file:/dev/urandom -jar drone-control-station-0.0.1.jar &

Wait until it starts, and then you can close the terminal and it will continue to run in the background


```shell
sudo pip3 install netifaces psutil google-api-python-client \
                  dronekit wiringpi opencv-python
```

## java/cloud/raspi app
### big picture
![big-picture](images/java-eggs/overview.jpg)

> build.gradle

{% include copyto.html %}
```java
dependencies {
	implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
	implementation 'org.springframework.boot:spring-boot-starter-web'
	implementation 'org.springframework.boot:spring-boot-starter-websocket'
	implementation 'com.google.code.gson:gson:2.6.2'
	implementation 'com.google.protobuf:protobuf-java:3.9.0'

	implementation 'org.webjars:jquery:3.4.1'
	implementation 'org.webjars:bootstrap:4.3.1'
	implementation 'org.webjars:webjars-locator-core'


	compileOnly 'org.projectlombok:lombok'
	annotationProcessor 'org.projectlombok:lombok'
	testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```
> base controller


```java
public class BaseController {

	private final ConfigReader configurations;

    @GetMapping("/")
    public String indexPage(Model model) {

		model.addAttribute("publicIp", getPublicIpAddress());
		model.addAttribute("defaultSpeed", configurations.getDefaultSpeed());
		model.addAttribute("defaultAltitude", configurations.getDefaultAltitude());
		model.addAttribute("videoEndpoint", configurations.getVideoWsEndpoint());

        return "index";
    }

    @GetMapping("/v/{droneId}")
	public String getVideoFeed(Model model, @PathVariable("droneId") String droneId) {

		model.addAttribute("publicIp", getPublicIpAddress());
		model.addAttribute("droneId", droneId);
		model.addAttribute("videoEndpoint", configurations.getVideoWsEndpoint());

        return "video";
    }

	private String getPublicIpAddress() {
		String ip = "";
		try {
			final URL whatismyip = new URL("http://checkip.amazonaws.com");

			try(final BufferedReader in = new BufferedReader(new InputStreamReader(whatismyip.openStream()))){
				ip = in.readLine();
			}

		} catch (Exception e) {
			log.error(e.getMessage());
		}
		return ip;
	}
}
```
## Deployment

[instructions](https://github.com/aiegoo/4gremoteoperation/blob/tony/source/deploy-cloudapp-note.md)

When you decide to deploy finished Java application - build it, deploy it on a VPS [or any machine with public IP

and then run it with this command in terminal:

```
java -Djava.security.egd=file:/dev/urandom -jar drone-control-station-0.0.1.jar &
```

Wait until it starts, and then you can close the terminal and it will continue to run in the background

### python app as a linux service

[instructions](https://github.com/aiegoo/4gremoteoperation/blob/tony/source/deploy-cloudapp-raspi.md)

Create droneapp.service file with this content:

```
[Unit]
Description=DroneApp Service
After=multi-user.target

[Service]
Type=idle
ExecStart=/usr/bin/python3 /home/pi/{app directory name}/app.py --d /home/pi/{app directory name}/

[Install]
WantedBy=multi-user.target

```
{app directory name} should be replaced with the name of the folder that contains app.py main application file


Then nn RaspPi move droneapp.service to /lib/systemd/system/

Then Run
```
sudo systemctl daemon-reload

sudo systemctl enable droneapp.service
```

If you want to stop it from autoloading on Raspi startup, Run:
```
sudo systemctl disable droneapp.service
```

### Configuration

Update `cloudapp/src/main/resources/application.yaml`: Application port, logging...
Update port in `cloudapp/config-templates/nginx-site.conf` if needed

### Build jar

Change the current directory to `./soure/cloudapp`

```shell
./gradlew clean
./gradlew bootJar
```

### Deploy

```shell
sudo mkdir /opt/cloudapp

sudo cp ./build/libs/cloudapp*.jar /opt/cloudapp/app.jar
sudo cp ./config-templates/start.sh /opt/cloudapp/start.sh

sudo cp ./config-templates/cloudapp.service /etc/systemd/system/cloudapp.service

sudo systemctl start cloudapp
```

If you want to start the app on boot

```shell
sudo systemctl enable cloudapp
```

### Config NGINX

```shell
sudo cp ./config-templates/nginx-site.conf /etc/nginx/sites-available/<example.com>

# update your domain name
sudo nano /etc/nginx/sites-available/<example.com>
sudo ln -s /etc/nginx/sites-available/<example.com> /etc/nginx/sites-enabled/<example.com>

sudo systemctl restart nginx
```

Config SSL

[Certbot](https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal)

```shell
# Create SSL certificate for your domain¶
sudo certbot --nginx
```

## from 4gremoteoperation source git

### Configuration

Update `cloudapp/src/main/resources/application.yaml`: Application port, logging...
Update port in `cloudapp/config-templates/nginx-site.conf` if needed

### Build jar

Change the current directory to `./soure/cloudapp`

```shell
./gradlew clean
./gradlew bootJar
```

### Deploy

```shell
sudo mkdir /opt/cloudapp

sudo cp ./build/libs/cloudapp*.jar /opt/cloudapp/app.jar
sudo cp ./config-templates/start.sh /opt/cloudapp/start.sh

sudo cp ./config-templates/cloudapp.service /etc/systemd/system/cloudapp.service

sudo systemctl start cloudapp

sudo systemctl status/stop cloudapp

netstat -tulpn | grep LISTEN / LISTEN_IP

./gradlew bootRun
```

If you want to start the app on boot

```shell
sudo systemctl enable cloudapp
```

### Config NGINX

```shell
sudo cp ./config-templates/nginx-site.conf /etc/nginx/sites-available/<example.com>

# update your domain name
sudo nano /etc/nginx/sites-available/<example.com>
sudo ln -s /etc/nginx/sites-available/<example.com> /etc/nginx/sites-enabled/<example.com>

sudo systemctl restart nginx
```

Config SSL

[Certbot](https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal)

```shell
# Create SSL certificate for your domain¶
sudo certbot --nginx
```

#### Disable and Enable a Website on the NGINX Web Server
By default, NGINX installed on Ubuntu and Debian systems use the sites-available and sites-enabled directories to control website access. This approach is often used even on other Linux systems. If the Linode is already using these two directories, follow the instructions in the Use the Sites-Enabled Directory subsection.

Use the Sites-Enabled Directory
Ubuntu systems have a /etc/nginx/sites-available directory, which contains virtual host (vhost) files for each domain hosted on the Linode. For instance, the domain for example.com typically has a corresponding virtual host file named /etc/nginx/sites-available/www.example.com.conf. The filename might not include the .conf extension in all cases.

To enable a website, you must create a symbolic link inside the /etc/nginx/sites-enabled directory pointing to the actual vhost file in /etc/nginx/sites-available. The nginx.conf file reviews the contents of the sites-enabled directory and determines which virtual host files to include. These domains are made available to potential viewers. Adding a symbolic link leading to a virtual host file enables the associated site while removing the symbolic link disables it.

```shell
...
include /etc/nginx/sites-enabled/*;
...

```

To disable and enable a website, follow these directions.
To find the name of the domain, list all of the sites hosted on the Linode using the following command:

To find the name of the domain, list all of the sites hosted on the Linode using the following command:
```shell
 ls /etc/nginx/sites-available

```

To disable a site, remove the symbolic link from the /etc/nginx/sites-enabled directory.
```shell

 sudo rm /etc/nginx/sites-enabled/example.com.conf
```

Reload NGINX to apply the change.
```shell
sudo systemctl reload nginx

```
Use a browser to confirm the site no longer resolves. You should see an error page when you access the site.

To enable the site again, re-create the symbolic link to the virtual host file.
```shell
sudo ln -s /etc/nginx/sites-available/example.com.conf /etc/nginx/sites-enabled/example.com.conf

```

Reload NGINX to apply the change.

```shell
sudo systemctl reload nginx

```

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
