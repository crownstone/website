---
author: bartvanvliet
layout: post
title: "Review of Arexx Caterpillar"
description: 
category: 
tags: []
---
{% include JB/setup %}

# Review of Arexx Caterpillar

The caterpillar is an excellent robot to start off with in robotics. It has
servos and sensors, you can change the hardware and you can program it
yourself.

{% youtube ttwfjcpefDs %} 

![Assembled caterpillar]({{ site.url }}/attachments/AREXX_Caterpillar.jpg "Such sensors, wow, very legs")


## Hardware

The package contains many parts which you have to assemble yourself. This
consists mostly out of screwing things together, a bit of soldering and
connecting cables. The instructions are easy to follow (pay attention to which
screws you use though). The soldering was a bit harder, especially the touch
sensors have to be soldered exactly. Connecting the cables was a bit of a
guessing game, the manual wasn't very clear about it. The total assembly took
about a day.


## Software

The included software includes a nice GUI to connect to the robot. You can
read out values, use the commandline and upload, start and stop programs.
Unfortunately the GUI did not work on my system (ubuntu 11.10), so I used
windows. I'm sure though that there are other programs to connect to the
robot, since it uses UART.

![Caterpillar GUI]({{ site.url }}/attachments/AREXX_Caterpillar_gui "Caterpillar GUI")
  
The robot comes with some example programs, with source code, so it's easy to
modify and start making your own programs. At first, it is a bit tricky to
combine the servo commands in such a way that you get a smooth movement, but
later you do this with ease. In the video you can see my own programmed
sidewards movement. The biggest problem I had was that the servos are a bit
weak. Since the board has some room for extra sensors, you can add some and
make it more autonomous. Or you could even completely change the hardware and
build a completely different robot (a walking robot for example).


## Specs

  * ATmega16A processor: 16 MHz, 16 KB flash, 512 B EEPROM
  * Actuators: 8 servos, 4 LEDs, beep speaker
  * Sensors: IR sensor, 3 touch sensors, 2 roll sensors


## Links

  * [Official website](http://www.arexx.com/caterpillar/html/en/index.htm)


