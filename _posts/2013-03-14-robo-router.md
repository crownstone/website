---
layout: post
title: Roborouter
description: 
category: 
tags: []
author: jannyramakers
---
{% include JB/setup %}

# Robo-Router

In the "world according to DO", people and organizations will soon be helped
with their daily chores by swarms of intelligent robots. Vacuum cleaning and
mopping robots clean the floors of hospitals, UAVs check for forest fires,
mobile security cameras keep a look-out for unwanted intruders at night.

##  Working together

One of the prerequisites for this scenario is that the robots must be able to
collaborate; with each other, with other devices (doors, computers,
refrigerators) and with their human operators. We don't want the vacuum
cleaner to be in our way when we walk through a room. We don't want 10 robots
cleaning the same spot over and over again. And we don't want to have to open
a door, every time the robot wants to clean a room. So the robots need to be
able to talk with each other.

Unfortunately, the actors involved in these scenarios use a variety of
different languages, protocols and media. That is why we need a Robo-Router!
The Robo-Router would act as an interpreter between humans, robots, and other
devices, creating a robot internet.

![Robo-Router prototype]({{ site.url }}/attachments/roborouter.png "Robo-Router prototype")

##  The Roomba vs the Door

Over the past six months, Enrico, one of our interns from the [Hogeschool Rotterdam](http://www.hogeschoolrotterdam.nl/opleidingen/technische-informatica/voltijd), worked on one aspect of this problem. His mission:
allowing a Roomba to open a door, by triggering the electronic door opener.
Since we prefer generically applicable solutions to specific ones, the
communication between these two devices would have to go through a Robo-
Router, which he helped develop.

Our electronic door opener did not yet have any remote communication
capabilities, so we  fixed it up with an ATtiny45 with a 433 MHz receiver. Our
Roombas are already equipped with a RooTooth from Sparkfun, which gives them
Bluetooth capabilities.

##  Robo-Router

Next step was developing the Robo-Router. For the microcontroller, we chose an
Arduino MEGA, since the Robo-Router only needs a minimal amount of memory. And
because many Dutch domotica devices use the KaKu (Klik-aan-Klik-uit) protocol,
supporting that was one of our first priorities.

##  Graduation and further development

Enrico finished his internship this month, leaving us with a great proof-of-
concept. Our Roomba can now open the door to our meeting room on its own, by
sending a command through the Robo-Router.

This does not mean the end of the project, though. We already found a new
intern, Michiel, to help us carry on the development. The next step in our
mission to connect all robots and devices to the cloud, is to expand our Robo-
Router to support other communication protocols, such as 315 MHz and USB.


