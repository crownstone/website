---
layout: post
title: Replicator Robots Final
description: 
category: 
author: annevanrossum
tags: []
---
{% include JB/setup %}

##  Finale

The project Replicator reached its final deadline in September. A European
project this scale - together with Symbrion a staggering 17 partners - has its
own dynamics. What did we learn? What can be done better next time?

The field of modular robots did not have a robot that could move on its own.
The [Replicators](http://replicators.eu/) are the first of their kind in that
they are fully autonomous. A single robot has screw drives (the so-called
Backbone robot), three wheels (the ActiveWheel), or tracks (the Scouts). They
all serve different purposes. The 3D hinge of the Backbones is particularly
strong. They can lift three times their own weight and are hence fully
equipped to fulfill a role as spine in a robot organism. The ActiveWheel can
carry two robots of the other type in a very simple way, requiring little
control. The Scouts are most like a normal robot and use a tank drive. All of
these robots can however be mixed and matched together to form complicated
structures. In the following section you see the preparations for the final
demo of Replicator.

##  Movie

{% youtube fGCRjWBzEpo %}

##  Lessons learnt

So, what should be done differently next time?

  * Although the biologists in the project already warned about this from the start, the robots become way too complicated. The proper word to describe the robots is "over-engineered". The number of sensors the engineers put on the robot (infrared, cameras, microphones, current sensors, ambient light sensors, accelerometers) lead together with the many different motors (four docking units, two motors for locomotion, a motor for the 3D hinge) and peripheral functions such as ethernet, power management, zigbee, and indoor positioning chips, to a proliferation of around 20 microcontrollers per robot! The complex robots require a lot of software development on the MSPs, Cortex, and Blackfin processors. Software development that has to do with communication, drivers, and the operating system, each taking time away for higher level functions. Simpler robots, perhaps ball-shaped, with omnidirectional vision through a fisheye lens, one docking unit, only a few motors, would have been so much better.
  * The reuse of technology. Although the smartphone world hadn't kicked in gear yet in March 2008, when the Replicator project kicked off, in later years the non-anticipated rise of smartphones has not been corrected in the project. In case the robots would have been equipped with smartphone technology each year a better "brain" could have been embedded in the robots. Although in the first years a smartphone had only a low-resolution camera, microphone, wifi and some simple sensors like an accelerometer and a compass, in current years, you will have one with two cameras, a gyroscope, NFC, USB on-the-go, recharging through induction, low-energy Bluetooth, 3G, GPS, etc. etc. The project might have an excuse with respect to timing... However, new European projects that do not leverage smartphone technology should simply not be funded.
  * The lack of interest for existing software and frameworks. Although it is understandable that to obtain a PhD or MSc it is easier to write yet another robot architecture from scratch, this impedes progress. There are already frameworks like ROS and YARP which would be excellent candidates for an implementation on a robotic swarm. This is not a trivial matter and would allow a much larger community to profit from the results in the project. It would be great if there is in the academic world larger emphasis on reuse of software. Again, if that would be the case, there is more time for the development of algorithms and higher-level conceptualisation.
  * Last point. The modularity of the modular robots has not been extended towards the internals of the robots. Each robot has been designed as a monolithic block. It is not possible to add a little sensor block with a camera to one of the modules, or achieve heterogeneity in another lego block like manner. Worse, there has not been any attempt to create something like a "robot heart". Almost every European robotic project fails to use smartphone technology. Moreover, they invent the wheel themselves time afte rtime. The core of a robot, that is, the processor, a few sensors, and wireless communication, and power management for these items is a recurring aspect of every robot. Still, none of the European projects tries to create something like a "robot heart" that can be reused by other projects. Although the actuators and power management for the motors are highly intertwined with the mechanics and electronics, the "payload" as it is called in unmanned aerial vehicles, should undergo some standardization. Modularity and standardization in academic robotics are absent.

Notwithstanding the critical remarks, the project has been fun for Almende and
inspired a lot of technology at DoBots. Let's take these lessons at heart!


