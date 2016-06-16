---
author: jannyramakers
layout: post
title: "Research with the Surveyor robot"
description: 
category: 
tags: [surveyor, robot, blackfin]
---
{% include JB/setup %}

# Research with the Surveyor robot

The Surveyor robot is a moderately cheap robot with ad-hoc WIFI connection and a camera
on-board. We mounted a laser on front which projects a red line in the forward
direction. The default lasers are just point lasers, and do not project a
line. We subsequently test our software using camera and laser information
together (so-called sensor fusion).

Normally the robot will not be able to make a distiction between a fake and a
real power outlet. However, with the additional distance information from the
laser, it can! You will hear the robot respond to the real power outlet.

<iframe width="560" height="420" src="//www.youtube.com/embed/ogFNDs1SgwY?color=white&amp;theme=light"></iframe>

This research robot is available in our webshop because it is really good for
research that involves a robot camera. The robot contains a Blackfin
microcontroller which can run uCLinux. However, the person responsible for
this left the Surveyor Corporation, and so uCLinux support faded away. Still,
there is a lot of documentation online and it is not hard to flash the robot
with this OS. The WIFI on the robot is via a Lantronix chip. This solution
works fine for connecting to the robot wirelessly, however do not assume that
it will be easy to have two robots communicate with each other. Summarized:
buy this robot if you want to do image processing experiments on a single
robot.


