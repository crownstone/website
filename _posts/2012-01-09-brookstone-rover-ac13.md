---
author: annevanrossum
layout: post
title: "Brookstone Rover AC13 United States"
description: 
category: 
tags: []
---
{% include JB/setup %}

# Brookstone Rover AC13

##  Introduction

![Brookstone Rover AC13]({{ site.url }}/attachments/Brookstone_Rover_AC13_200.png "Brookstone Rover AC13")

The Brookstone® Rover is sold exclusively (for $99,-)
in the United States and can be controlled by ipod, iphone, or other Apple
device. It has a camera at front, a microphone, and an IR led which can be
used to "see in the dark". It runs on 6 AA batteries which is directly the
only "minus" of the robot. Different from for example the iRobot Create®,
recharging the thing can only be done manually. If you want to stalk your cats
if you are on holidays, you will have to turn on the robot before you leave
and it will have run out of power before it's time to check if your neighbour
did do his job. But, for now, it's a perfect toy!

##  Disassembly

Last month, we got one from under the christmas tree, and hence, a challenge
is born! How to control this interesting robot from an android device. First
we use **nmap** to see which ports are open. The result: one TCP port open at
80, and two UDP ports at 67 and 10000. We connect to port 80 and see that
there is a HTTP page served which requires username and password. After
hitting ESC for three times, it shows a misspelled "Device Embeded Web UI
Version" phrase, just as Foscam IP cameras do! Probably the same developers
have programmed the firmware for the Rover! Time to disassemble the robot to
check if this is true.

![Disassembled Rover]({{ site.url }}/attachments/Brookstone_Rover_AC13_0.jpeg "Disassembled Rover")
![Disassembled Rover]({{ site.url }}/attachments/Brookstone_Rover_AC13_1.jpeg "Disassembled Rover")

Yes! Remarkably enough there is a similar chip which reads spansion
s29gl032n90tfi040 (Flash) as in the Foscam line of IP cameras. The board looks
almost the same as the one at the
[computersolutions.cn](http://www.computersolutions.cn/blog/2010/04/ip-cam-hacking-pt3/) blog. Checking the CGI API document from Foscam reveals that the Rover
responds to document cgi scripts such as "decoder_control.cgi",
"camera_control.cgi", "wifi_scan", "get_params" and "set_params".

##  Listening

We connect an iphone to the robot via the default ad-hoc network started up by
the rover. And we connect a mini laptop to it at the same time, now running
"sudo tcpdump -XXvvvs0 -i wlan0 port 80" reveals the network traffic. And we
just see that the iphone logs into the browser by issuing an HTTP GET request
"http://192.168.1.100/check_user.cgi?user=AC13&pwd=AC13". That was easy, we
already know the username and password: AC13. Now, to quickly check if there
are (unencrypted) images going through the network we run 

    "sudo driftnet -i wlan0" 
    
and yes, it displays the sequence of images transmitted by the robot.
So far, so good!

The developers do not seem to use the cgi scripts at all. Just as on the
Foscam IP cameras, there is a binary protocol used to command the camera to
start streaming. It starts with "MO_O" or "MO_V" and then there is a sequence
of bytes which represents a command. After careful examining this binary
stream we extracted the commands going from the iphone towards the robot. A
python script that gets you one image is published on the
[androidcommunity](http://androidcommunity.com/forums/f44/brookstone-rover-app-81730/index2.html) forum. There were nasty details such as the necessity
to close the socket and open the socket at the same port after authentication.

##  Remote control!

To actually be able to remotely control the robot we need to do more. Google
provided a nice SDK to build your own apps, integrated with Eclipse, debugging
by connecting your phone via USB. Almost everything works out of the box. We
need to transform our python code to Java to use it on Android. We wanted not
only to be able to stream images, but also to control the robot by moving the
cell phone. The result can be found in the Android market, as the [RoverOpen app](https://market.android.com/details?id=org.almende.roveropen). Contrary to
most apps, this one is completely open source. The code can be found at the
server of our mother company, [Almende Redmine](https://dev.almende.com/repositories/browse/roveropen). Feel free to
contribute to the code to make this app better! Enjoy!



