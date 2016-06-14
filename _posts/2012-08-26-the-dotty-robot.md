---
layout: post
title: "The Dotty robot"
description: ""
category:
tags: [dotty]
author: marchulscher
---
{% include JB/setup %}

# The Dotty

![The Dotty PCB]({{ site.url }}/attachments/Dotty_open_hardware_printed_circuit_board_small.jpg "Open Hardware PCB"){: .float-right}

Dotty is the name we've given to our prototype swarm robot. Dotty is a simple, extremely cheap robot.

Dotty is an open hardware platform for experimental and educational purposes. We use our Dotties to create swarming behaviour. Using machine learning algorithms, the swarm of Dotties learns to carry out group tasks.

Dotty is able to automatically recharge itself, by searching out an induction charger platform. Further, she can easily be connected to a smartphone, adding 'brains' and connectivity to our cheap robot.

## Components

Dotty is made up of:

  * a LilyPad Arduino
  * a printable circuit board of our own design, with:
    * a Bluetooth chip
    * light sensor
    * infrared sensor
    * microphone
    * current sensor
  * [AREXX frame](http://www.arexx.com/arexx.php?cmd=goto&cparam=p_robot_chassis) with 3 wheels, 2 motors and a battery.

All in all, Dotty we aim to keep the material costs for Dotty under 100 euros (we actually aim for 70 euros).

Dotty components head

## Open hardware

![Dotty's head]({{ site.url }}/attachments/Dotty_head.jpg "Dotty's head"){: .float-right}

DoBots is a software company, and our main aim is to develop software for swarm robot applications. Dotty is an exception to this rule. Since we could not find an open hardware platform to suit our needs, we designed our own.

We do not intend to sell or produce any hardware, though. The specs for Dotty (printable circuit board, 3D-models) will be made available via our website, so roboticists can build their own Dotties.

If any party would like to mass produce Dotty, don't hesitate to contact us!

![Dotty's head with parts]({{ site.url }}/attachments/Dotty_head_components.jpg "Dotty's head with components"){: .float-right}

## Alternatives

Fortunately, we are no longer the only company aiming to develop a smart robot in this price class. Some robots that come pretty close to our needs are:

  * [Elisa-3](http://www.gctronic.com/shop.php) (Gctronic, 280 euros without charger, Arduino-compatible, various sensors, IR receiver, RF radio, USB)
  * [Thymio II](http://www.mobsya.org/en-shop) (EPFL/ECAL, 80 euros, USB, various sensors, no wireless connectivity or charging)
