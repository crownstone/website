---
layout: post
title: "Reprogrammable Remote Control dongles"
description: "Joybien and programmable remote control dongles as smartphone accessories."
category: 
tags: []
author: annevanrossum
---
{% include JB/setup %}

# Reprogrammable Remote Control dongles

![Toybien dongle]({{ site.url }}/attachments/toybien_dongle.jpg){: .float-right}

Interested as we are in swarming, our efforts include building sort of an army
of moving bots. To keep cost down the available toys are our first port-of-
call. We now have a collection consisting of flying (helium-filled
zeppelin/balloon), driving (a few cars and robots) and swimming (submarines)
units that are all remote controlled. Most of them use 27 MHz based RF, a few
are on 49MHz, or even 2.4GHz (BT/Wifi/etc.). IR is also a frequently chosen
solution.

To get communication up with all of them, enabling our software to become part
of the swarm, we need a more or less **universal solution** connecting sensors
and actors.

On the market there are a number of dongle suppliers that use the headphone
connector to add an IR or RF extension to Android (and/or iPhone) smartphones.
What makes life difficult is that the toys mostly use very cheap encoding
solutions based on chips like RX2B / TX2B  which are inflexible and difficult
to combine with other coding options, either single chip based or not.

**So, what is our master plan!? Make a dongle - or have a dongle made - that enables reprogramming it through the headphone connection!** It would allow us to combine the advantage of off-loading the encoding to a dedicated chip (a PIC166XX comes to mind) and still retaining the flexibility for application programmers to adapt to the required protocol.

##  Joybien

In the picture you see the JoyXtix dongle from Joybien [1]. There are three
ways in which this friendly manufacturer of dongles, based in Taiwan, can open
up their API for application developers on Android or iPhone:

  1. Provide a **limited API** with say 6 till 10 commands for toys for which Joybien reverse engineered the wireless protocol. This allows Android phone developers to create their own apps for the toys that Joybien did target, under which are a speedcar sold also by Joybien and for example the Air Swimmer blimps. Taping a smartphone to this blimp and staying away for more than 5 meters from the others, would allow us to cover an area from the air in an extremely simple way. And many more applications are possible. Joybien seems to be willing to provide this API, good news!
  2. Provide a complicated API with many commands to adjust modulation, ASK, FSK, timing, etc. etc. for Android/iPhone app developers. No, we are not gonna recommend that! Instead, we would recommend a more or less **straight translation** from the analog values over audio towards the dongle to the actual wireless domain. So, for example a 27 kHz modulation becomes a 27 MHz modulation but most of the signal will be preserved.
  3. Provide a **programmable device** (the solution of above) that takes input from the headphone output and translates it into hex code for the microcontroller in the dongle. Instead of programming over serial, or over USB, or over Bluetooth, we program this time over audio! This of course is of much more use than only the "dongle industry". Any device attached to a smartphone (via the headphone connector) might profit from reprogrammability by users, which can be over-the-air and even come with its "own app store for smartphone add-ons".

We had the idea first. :-)


[1] [http://www.joybien.com/product/Product_JoyXtix.html](http://www.joybien.com/product/Product_JoyXtix.html)


