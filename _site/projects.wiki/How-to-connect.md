DroidPlanner connects to the APM board on the drone via Wifi or USB.  Let's do a quick explanation of how to do that

# USB to telemetry
To connect via USB you will need a USB On-the-Go cable and a 3DR telemetry module like the on in the following picture.
* 3DR Radio USB "Ground" module

![3dr](https://store.diydrones.com/v/vspfiles/photos/BR-3DRUSB915-2T.jpg)

USB OTG cable

![usb](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcToUFZeXaJ6CXGqcQsZ1IT8u8HSBIQ6LgMZKcR-hcKzfIqt0n4Vew)


 Connect a 3DR module to the Android device via this cable and droiplanner should pop up. From there you just need to hit "Connect". 
![](http://api.ning.com/files/D7OtuoxqP975TUE3WXJ8hDVCaED6tltfRmxI5bnnXwPbbHGzNEvLyuG0xUYaSX0tHdusE3vlc-dOdkeLCnxy2Lx73dM6NVOQ/IMG_20130407_184406.jpg?width=750)

(Thanks for user afernan for this picture)
Here is a video explaining it:
[http://vimeo.com/63518230](http://vimeo.com/63518230)

# USB to the APM/Pixhawk without telemetry

In case you want to directly connect your phone/tablet to the APM/Pixhawk via a USB, you need a USB On-the-Go cable and a USB to micro usb-cable. Connect the male USB end of the USB cable into the female USB end of the USB On-the-Go cable. Then connect the micro-USB end **of the USB On-the-Go cable** to your phone. The remaining micro-USB end goes to the APM/Pixhawk.

The end result looks like this:

![](http://i.imgur.com/cI5XS3B.jpg)

Now you can connect via the Tower app after you set the connection type to "USB" in the settings. Also make sure your phone or tablet supports USB On-the-Go.

# Bluetooth
The first step to connect via Bluetooth is to get a Bluetooth/serial module, here are some options:
* DealExtreme - http://dx.com/p/jy-mcu-arduino-bluetooth-wireless-serial-port-module-104299
* SparkFun - https://www.sparkfun.com/products/10269
 
Now you have two options to connect to your ArduPilot (All the hardware parts are bold):
* APM<==>**3DR module**<=3DR RF link=>**3DR module** / **Bluetooth module**<==Bluetooth==>Android Phone/Tablet
* APM<==>**Bluetooth module**<==Bluetooth==>Android Phone/Tablet

For both methods you need to set your Bluetooth module to output a baud-rate of 56700. To do this check the datasheet of the module. On the dealextreme module you can do the following: 
>These adapters come preconfigured for 9600 baud, you'll need to change them to 57600. To do this, temporarily connect the provided cable to a FTDI serial adapter, connect to the device at 9600 baud and then paste in the following string "AT+BAUD7"<return>. If the device responds with OK57600, you are good to go, otherwise try again.

Now i'll just explain how to do the connections first method, especially the inner bridge between the 3DR and bluetooth modules. Just connect them as the following picture:
![](http://api.ning.com/files/rRlLHC*Dey3RRzWb2OfVscsuQk9p7oK0nOP1Y8kIfcOqSax9WbyNmishAdXYB322vsLXTH1l6s3d5R5m58To3BFIz0rR0oM0/easyConnect.jpg)
You also need to connect a 5V source to the VCC and GND pins (maybe a battery and a Servo BEC).

Now to finish the connection power up your bridge device. Go to Android settings and pair your device with the Bluetooth module ( the default PIN is 1234 normally). On DroidPlanner go to the settings and select the connection type as Bluetooth. Back on the main screen you should be able to just select Connect to make it communicate.

# TCP
There are multiple ways to connect via a TCP connection, let's go trough some of them:

* EthernetGCS board - This is probably the best option since it has a 3DR RF module already on board, just plug and play.

[[/Images/EthernetGCS.png]]

* (fast way to test the app) Use some software to redirect a serial port from your pc to a TCP port, you need to have a 3DR RF module connected to the PC. I use [Pira CZ Remote COM](http://www.pira.cz/eng/piracom.htm) with the following settings (replace the COM port to the port your RF module is connected):

![piracom](http://api.ning.com:80/files/4iqR7n6daXX4GnsMh0akoZFLVY5wZGG3bXQAfBVsfYZL9Q0S73AnXbXKGRhlICJBrroTq5xVqs7QOUqSJnVkKfURjFvDWB-u/Untitled.png)

* Chinese Serial-to-TCP bridge from [ebay](http://www.ebay.com/itm/Serial-Device-Server-RS232-RS485-to-Ethernet-TCP-IP-UDP-/271110224050?pt=LH_DefaultDomain_0&hash=item3f1f6db8b2) ($20).

![ethernetmodule](http://thumbs4.ebaystatic.com/d/l225/m/m6JlWqwb4FzxPJKdp-yP-6Q.jpg)
* Chine Serial-to-Wifi module from [ebay](http://www.ebay.com/itm/RS232-TTL-serial-to-ethernet-converter-tcp-ip-module-small-size-/230898794139?pt=LH_DefaultDomain_0&hash=item35c2a3fe9b)

![wifimodule](http://thumbs3.ebaystatic.com/d/l225/m/mVDDHHw1LsrYqx_VqVdYbew.jpg)
* A Raspberry PI board with a TCP to serial redirection software

![raps](http://www.raspberrypi.org/wp-content/uploads/2011/07/7513051848_9a6ef2feb8_o.jpeg)
* A modified WRT54GS router. With custom firmware to create a bridge to one of the internal serial ports.Take a look at [this link](http://www.andrewhazelden.com/blog/2010/01/how-to-use-the-serial-ports-on-a-linksys-wrt54gs-with-dd-wrt-v24/) to see how to do that.

![router](http://salestores.com/stores/images/images_747/WRT54G.jpg?width=250)


Some of the above options just give a serial to TCP bridge, you still need to add a 3DR RF radio to communicate with the drone. And most have a Ethernet port on the TCP side so you will need a WiFi router to be able to connect wireless via the Android Device.

Here is a picture of the complete base station system (using the EthernetGCS board):

[[/Images/EthernetGCSHoleScene.png]]