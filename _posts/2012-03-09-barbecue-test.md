---
author: bartvanvliet
layout: post
title: "Barbecue test for FireSwarm"
description: 
category: 
tags: [fireswarm]
---
{% include JB/setup %}

# Barbecue test

To test the camera that will be on board the UAV, we lit up a barbecue in the garden of Almende and took some pictures.
This was a good opportunity to tweak camera settings, test startup scripts and of course: see how well we can recognize fire.

The box you see on the picture will also be the box that is going up in the air for the sensor test flight.
In that box the breakout board (Summit) will be replaced by a board made by Salland Electronics,
on which more sensors will be connected (a thermopile array, a 3M pixel camera and a gas sensor).

![Barbecue]({{ site.url }}/attachments/barbecue_test_1.JPG "Barbecue"){: style="width: 500px"}
![Box top]({{ site.url }}/attachments/barbecue_test_2.JPG "Box top"){: style="width: 500px"}


In order to simulate the movement of the plane,
the camera was rotating constantly from left to right by a simple construction of lego.

![Box front]({{ site.url }}/attachments/barbecue_test_3.JPG "Box front"){: style="width: 500px"}
![Box back]({{ site.url }}/attachments/barbecue_test_4.JPG "Box back"){: style="width: 500px"}

This was a nice test to see how sensitive the camera is for hot objects.
When you combine a picture taken with an IR pass filter and a picture taken with an IR block filter,
you can already distinguish the barbecue.

![Barbecue color]({{ site.url }}/attachments/barbecue_test_5.png "Barbecue color"){: style="width: 500px"}
![Barbecue near infrared]({{ site.url }}/attachments/barbecue_test_6.png "Barbecue near infrared"){: style="width: 500px"}

With these sample images we can already test out some fire detection algorithms.

