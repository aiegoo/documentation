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

[javaAll](https://github.com/aiegoo/uas-reference/blob/master/web-dev/JavaAll.pdf) a java crash course,

[raspi-setup-with-pixhaw/matek743](https://docs.google.com/spreadsheets/d/187JrOrG0T9Y52j1h923B1X3dk1W_wsJsWz5OBOhx4-U/edit#gid=1046203717) as a aprt of an openHD project with Tatu 

[개발코드](https://github.com/aiegoo/4gremoteoperation) with screencasting and issues

### big picture
{% include image.html file="java-eggs/javagcs-overview.jpg" caption="Java GCS remotely operating on multiple mavlink drones" %}

### summary
본 GCS의 특징은 다음과 같다.
- SITL기체를 시뮬레이터에서 운영하거나, pymavlink를 설치후 픽스호크를 지원하는 기체를 현실 세계에서 운영 할 수 있다.
- python <--> board connection; frontend->websocket->backend->socket->python/raspi->dronekit/mavlink->pixhawk
- FC에 Pilot이 조정기를 통해 기체를 운영하는 것과 온보드 라즈베리파이가 pilot를 대신하여 기체를 조정 (미션 업로드 또는 자율 비행) 
- 자율비행을 위한 메시지 업링크와 스트리밍 데이타와 IMU/log 데이타의 조작과 시각화 및 UI 구현
- payload 임무 수행을 위한 조작
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

## remote cloud setup

### raspi setup

- connect fc to raspi

1. maktek fc setup 
   1. flash the firmware and do the hardware configuration with QGroundControl or MissionPlanner. In this case, I have to map Matek UART (serial) with ardupilot mapping [link](http://www.mateksys.com/?portfolio=f765-wing#tab-id-5) RX7 TX7 RTS7 CTS7 mapped to Serial 1
   2. Open the terminal and run following commands; ` cat /dev/ttyAM0` or later 'cat /dev/ttyS0` will send  outputs in broken symbols indicating the serial port is working
   3. When it's done, I modified the cloud-raspi/configuration.ini file to apply the changes and change the ip and url of the cloud app or raspi app ip and ports (not sure if I am doing this right or wrong)
2. After use-simulation changed to false in the ini file `sudo python3.8 app.py` didn't run through with errors of 'serial module not found`
3. apt install, pip install, serial, pyserial, pip3-serial all of tries didn't work
4. So what's next????

### check the source codes for any variations
[source-code](https://github.com/aiegoo/4gremoteoperation/blob/tony/source/cloudapp-raspi/configuration.ini)

### video 43 code logic

{{site.data.alerts.details}}

```php
00:01
okay so let's uh let's now create a quick recap
00:07
or more precisely to make overview of the complete application flow of our multi-threading application concurrent application
00:17
uh
00:19
that we created so far so of course we have configuration in our configuration file we define some values that are important cloud up that's for our connection to our java application for a drone that's for our uh raspberry pi application and for the video as a for our video streamer application
so whenever we start we read those
configurations and we what we do is
first
we once we have those configuration we
create our drone object that is uh you
as you remember uh obstruction over our
uh flying uh
entity flying machine that's from here
01:04
we read data and we execute whatever we
01:07
want on it
01:09
so all the commands that needs to be
01:10
executed we do it through this uh
01:12
through this object
01:14
now once we've done that we uh start our
01:17
connection watchdog
01:18
and as you remember our connection
01:20
watchdog is constantly monitoring a
01:23
network connection whenever a network
01:25
connection breaks down it will try to
01:28
reconnect for certain connection
01:29
attempts and if it if it reconnects it
01:32
it will uh reset those attempts and
01:35
we'll continue to to
01:37
to check out if we connect it if it
01:39
doesn't reconnect it will activate on a
01:42
drone uh emergency procedure which in
01:44
our case is uh just to
01:46
return to launch and we will test it
01:49
later whether it works as expected
01:52
so okay here we have the connection
01:53
watchdog it's a uh
01:56
i just want to to
01:58
just to stress uh one more time that
02:01
it's an additional threat it runs
02:03
concurrently separately from at all
02:05
other threats even though it's executing
02:08
it runs concurrently separately
02:12
independently from any other logic that
02:14
runs here
02:16
and it's constantly monitoring even
02:17
though this main threat will be sending
02:20
data so anyway we activated this thread
02:23
that connection watchdog now we we know
02:25
that someone uh constantly monitors our
02:28
network connection then what we do is uh
02:31
we wait until watchdog clears that says
02:34
that okay we have internet connection
02:36
then we make socket connection with our
02:39
uh java application
02:41
we send our id so it would be registered
02:44
in our java application as a connection
02:46
and we uh open our video streaming
02:49
process once we
02:51
activated our video streamer
02:54
what we do is we activate uh yet an
02:57
additional thread
02:59
our data receiver
03:01
and data receiver as you know it it
03:04
is a separate thread that that
03:06
indefinitely runs and listens for our
03:08
socket connection whenever someone sends
03:10
us a message through the socket it reads
03:12
it it deserialize it from proto from
03:15
proto message it creates a local
03:18
variable local uh instance of this
03:21
object data transfer object it fills the
03:23
values from the serialized proto object
03:27
and it's uh
03:28
calls on a drone execute command and uh
03:30
sends this com and
03:33
sets this command okay
03:36
so
03:37
this is for our data receiver and uh
03:40
once we get here until watchdog is
03:44
is greenlighting us that we have network
03:46
connection and until our drone is active
03:48
what we do is we read from our drone um
03:53
the latest status values
03:56
which are telemetry data
03:58
we pack them into into a network message
04:01
and we're sending them and do it and
04:03
we're doing it every second and this
04:05
cycle will work under the endlessly
04:07
until some exception happens either in
04:10
here or maybe in a socket connection if
04:13
we disconnect from our
04:16
from our uh java application
04:19
uh the
04:20
error message the exception will blow up
04:23
we catch here this exception will lock
04:25
the error we will freeze the drone then
04:27
here we will release all the resources
04:31
that our raspberry pi uh engage with
04:35
and we will get back to here
04:38
and we will start over again but but
04:41
keep in mind that we what we're
04:42
releasing we're releasing resources like
04:45
raspberry pi camera ras like socket
04:47
connections but we do not release drone
04:50
ever okay so once we connect to it it's
04:53
our uh through either serial connection
04:56
or our uh
04:59
simulator
05:00
once we connect it that's it
05:02
we do not disconnect at all
05:04
there is no also there is no sensitive
05:07
to to disconnect from it because
05:09
we are like connected with a serial
05:11
connection cable and it's on the board
05:13
itself it's not gone
05:16
uh so anyway
05:17
uh
05:19
oh and also we do not restart watchdog
05:21
because it's a separate thread it's
05:22
separate thread runs and definitely it
05:24
has its own try catch block so whatever
05:26
if anything blows up here it will log it
05:29
and it will run again
05:31
indefinitely okay so that's also safe
05:34
but what we do need to really release is
05:37
everything that we engage in this uh in
05:39
this cycle and since it will work until
05:42
it's uh active drone it will run
05:44
indefinitely so
05:46
however
05:47
many times we disconnect from the
05:50
network or whatever some other exception
05:52
happens
05:53
we release everything else we close all
05:55
the processes
05:57
and we start over and this is our um
06:00
bootstrap application thread let's call
06:02
it like this
06:04
so uh we've seen what watchdog does
06:07
we've seen what that data receiver does
06:09
commands let's see now our uh drone
06:12
because we are using drone in a watch
06:13
dock and a data receiver
06:15
uh where we executing command
06:17
so
06:18
our drone uh has a method that
06:21
that it's
06:22
that it's executed by our bootstrap
06:25
thread
06:26
here you remember we all we are
06:28
constantly getting drawn serialized data
06:30
and sending it to the java application
06:33
and here we what we do is we uh we read
06:37
from vehicle vehicle object it's object
06:39
that is created by drunkit library and
06:42
it repre through which we can uh get
06:45
data from our pixel pixel board and send
06:48
data to our pixel board and and this is
06:51
done from the vehicle object the elk
06:53
object we receive once we uh connect to
06:56
to to either simulator or our uh our
06:59
pixel board and here we on the
07:01
constructor of the drone
07:03
we uh implement we create this
07:06
connection okay
07:07
so here in our drone serialized data we
07:10
read data from our vehicle we pack it
07:13
into uh into a structure
07:17
you see we we create proto drone data
07:20
structure proto data
07:22
we uh we fill this proto data structure
07:25
with the values from our vehicle
07:28
and then what we what we do is uh
07:32
we we serialize it since it's a proto
07:35
data from our compiled library right
07:38
here
07:40
uh we we serialize it and
07:43
and after that the serialized data is uh
07:46
added with a network
07:48
uh header
07:50
in our utils you remember what we do is
07:52
we just add four bytes as a header that
07:54
uh
07:56
this that describe what size it how is
07:58
this network message and it's safely
08:00
sent through the through the network
08:02
from the socket
08:04
okay
08:05
uh so this ob this drone also had uh the
08:09
control tab object and control tab
08:11
object is the our control panel through
08:13
which we uh actually execute our uh
08:17
control it's like imagine you are
08:19
sitting in the car
08:20
and you have your uh wheel and your
08:23
pedals you know all the
08:25
the monitor that speedometer that you
08:27
see that is our control tab all right so
08:31
handle uh
08:33
the the pedals
08:35
all those your your gear stick this is
08:38
all our control panel okay imagine like
08:41
this drone is a car
08:43
while
08:44
everything uh while uh your wheel and
08:47
your area speeds your
08:49
clutch stick and stuff like that it's
08:51
all uh
08:52
our control tab
08:54
so whenever here we execute command you
08:57
remember that our data receiver receives
08:59
something and uh deserialize it and
09:01
executes command
09:03
we send to the drone to execute once you
09:05
receive this command it it looks through
09:07
the code on this command
09:09
and uh depending on the code it decides
09:12
which uh which stick or how much to
09:16
rotate the wheel okay
09:18
it's the same like you you sit in the
09:19
car you you receive the command from
09:22
your passenger
09:23
you some some model or some girl you
09:26
said right and you should tell you she
09:28
tells you
09:29
increase the gas go left go right right
09:32
something like this
09:33
so you use your
09:35
you receive this command and you as a
09:36
driver know how what to activate on this
09:40
control tab
09:41
and this control tab you you know
09:43
whatever command you receive you know
09:45
that this command translates to rotate
09:47
right but by certain value okay and
09:49
control tab
09:51
our control tab it has two objects
09:55
that are speed server controller and
09:57
engine
09:58
and those objects they run in separate
10:00
threads
10:01
also independently of all other
10:05
logic application logic separately
10:07
and
10:09
once you
10:10
update value in our control tab
10:13
our engine
10:15
reads those values creates modeling
10:17
message and constantly sends it every
10:19
1.5 seconds and whenever you want to
10:22
uh whenever you want to do it
10:24
immediately
10:26
you you use execute changes now what it
10:29
does in the engine it it forced the the
10:32
engine to build the message from the
10:34
current values that you just set
10:36
and flush them into our pixel board
10:40
and since you already updated those
10:42
values next time this thread will
10:44
execute it in 1.5 seconds it will use
10:46
the new new values here okay
10:49
and this is what our thread does
10:52
uh
10:53
and
10:54
our uh our servo controller is also
10:56
thread that comes that constantly reads
10:59
a servo angle value
11:01
and sends it to the
11:03
to
11:04
the output pin on our raspberry pi
11:07
and the way to we change it is also from
11:10
control tab when we update the value of
11:12
the rotate rotation angle okay
11:17
so whenever you set the angle
11:20
decrease increasing
11:22
let's see where was that where was that
11:25
here right it's it it's our camera
11:29
we
11:30
we uh
11:32
we for first that was the initial angle
11:34
that we said but here is uh
11:37
uh we uh
11:39
we just
11:40
update the the value of the camera angle
11:43
and we use this object to set this value
11:46
that we just updated okay
11:52
so by updating from outside the camera
11:55
angle value on the on the server camera
11:57
object here
11:58
this thread is executing it though every
12:01
one the very 10 milliseconds here
12:04
and it updates on a servo volume
12:07
and that's uh that's that's the
12:10
application flow that's what happens
12:13
so these are the key the key objects of
12:16
the whole application and the video
12:18
streamer it's a separate application
12:20
that runs in a separate process for
12:22
maximum resilience it has its own
12:25
uh while true cycle that runs
12:28
indefinitely
12:29
and also
12:31
it can since we can
12:33
well not we cannot lose connection
12:34
because here we use a udp
12:37
messaging uh my messages data is a soft
12:40
drum
12:41
okay
12:42
and uh whatever happens we will just
12:45
restart it release the resources and
12:47
start over again
12:49
and it all runs in a separate process
12:51
but if it's this process blocks it at
12:53
least
12:54
at least
12:55
we will not lose our uh
12:58
main application
13:00
so that's why we run it in a separate uh
13:02
process
13:05
so yes that's these are the key objects
13:08
and that's the uh application logic
13:11
application flow
13:15
of our
13:18
flow of our application logic as you can
13:20
see it's
13:23
pretty pretty it's pretty simple
13:25
but it's very very effective
13:28
and that's the fundamental framework
13:30
from here you can build it up to do
13:33
more uh more complex
13:36
more complex tasks to execute from here
13:40
but at this stage is pretty robust
13:42
pretty stable i didn't have problems
13:45
with it yet
13:47
so yeah this is it
13:49
um
13:50
next what i think is uh would be
13:54
to
13:55
to test it let's to test it all out
13:57
we'll run it into two raspberry pi's and
14:00
see the whole how the whole thing works
14:02
as a part of our distributed application
14:06
okay so with the front end with a back
14:07
end with a two raspberry pi's that
14:09
connect to it that's gonna be pretty
14:12
exciting uh i think demonstration and
14:14
tests of what we've done so far
14:17
if you understood all these things if
14:19
you managed to do to pull it off right
14:22
until this point well congratulations
14:26
brother
14:27
you're on good great track
14:29
you'll do great things
14:31
with this application and not only
14:34
uh
14:35
some fun very fundamental parts powerful
14:39
stuff that we've done here
14:41
so congrats again
14:43
and let's let's do our fun part and
14:46
let's let's run the whole system now

```
{{site.data.alerts.ended}}


## codes and future tasks

{% include image.html file="java-eggs/raspihwnetworksetup.jpg" caption="raspi hw and network setup photo" %}


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
