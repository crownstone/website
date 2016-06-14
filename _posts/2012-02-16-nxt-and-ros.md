---
layout: post
title: NXT and ROS
description: 
category: 
tags: [nxt, ros]
author: annevanrossum
---
{% include JB/setup %}

# ROS

![Lego Mindstorms NXT disassembled]({{ site.url }}/attachments/lego_mindstorms_nxt_disassembled.jpg){: .float-right}

ROS, Robot Operating System, is more and more used in research organisations
to quickly be able to connect to robots. This is a very down to earth blog
post which explains you on how to install ROS on Ubuntu (11.10) and how
subsequently to connect to the Lego Mindstorms NXT robot.

Make sure your computer recognizes the Lego Mindstorm NXT brick, this will always be the same procedure for all USB devices on Ubuntu. For Lego you can check it's udev instructions at [http://www.ros.org/wiki/nxt/Installation](http://www.ros.org/wiki/nxt/Installation). The installation procedure of ROS is pretty standard and can be found at [http://www.ros.org/wiki/electric/Installation/Ubuntu](http://www.ros.org/wiki/electric/Installation/Ubuntu) 

You first need to update a file in /etc/apt/sources.list.d that references the proper
Ubuntu repository. After adding a key and an apt-get update you can install
the most recent version of ROS. The version "fuerte" is already available, but
official release is in April 2012, so stick with "electric" for now. The ROS
install is pretty heavy, make sure your remaining diskspace is plenty (> 1GB) by `df -h`.

##  ROS & NXT

The rosinstall utility takes care of installing ROS modules. You can change the installation directories that are used by rosinstall through changing the file `/opt/ros/electric/setup.sh`. Installation of the NXT module goes like:

    rosinstall ~/myworkspace/ros/nxtros /opt/ros/electric \
    "http://www.ros.org/wiki/nxt/Installation?action=AttachFile&do;=get&target;=nxt-0.1.0.rosinstall"

Under the hood this basically does something like this for you (cloning a mercurial repository): 

    hg clone https://nxt.foote-ros-pkg.googlecode.com/hg --insecure nxt-ros

However! You can now also just get the stuff from the Ubuntu repository directly, very easy:

    aptitude search ros | grep -i nxt
    sudo aptitude install ros-electric-nxtall

If you have problems with libcurl4-nss-dev versus libcurl4-openssl-dev (very
common if you use 32-bit libraries on a 64-bit system) it might help to use
apt-get instead of aptitude. Never say yes to something that asks to remove
almost everything on your system of course. :-)  
  
You can check with dpkg where actually everything is installed:

    dpkg -L ros-electric-nxt

And you will find out that most things are placed in `/opt/ros/electric/stacks/nxt`

##  Start ROS & NXT

Now you can start roscore. If there is a message like "cannot ping itself",
execute not only the command that you will see there, like "ping yourmachine".
But also check if /etc/hosts actually contains a reference to the hostname for
127.0.0.1.

    rosmake nxt_python
    roscore
    rosrun nxt_python touch_sensor_test.py

Now you can check if it works by plugging the touch sensor in port 1 and you
should see "TOUCH: True" versus "TOUCH: False" on the command line. Nice! We
now can program our NXT robot without doing anything on the robot itself, but
just by sending commands from our laptop. A very non-autonomous situation of
course, but useful for prototyping.

##  Google and rosjava

Another reason we are interested in this route is because of `rosjava`, which
does have a Google supported Android port. This means that a smartphone can
operate as a ROS node and - potentially - send commands to a NXT connected
through it through Bluetooth. The ROS code for this is not yet written. It has
already been demonstrated by the MindDroid app (and a derivative called
MindOpen from DoBots) that the NXT can be controlled from an Android phone.
As soon as such ROS code would be in place, it would be logical to write a ROS
wrapper for the distributed computing solution
[Ibis](http://www.cs.vu.nl/ibis/index.html) for example. We can have large
groups of robots connected to the cloud where data processing occurs on the
robot and in the cloud, depending on the application demands.




