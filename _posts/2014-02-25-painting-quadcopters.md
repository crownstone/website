---
layout: post
title: "Painting Quadcopters"
author: remcotukker
description: ""
category: 
tags: ["quadcopters", "painting", "demo", "prototype"]
---
{% include JB/setup %}

# Painting Quadcopters

It started with a simple question half a year ago: Besides capturing video and images from above, what can quadcopters actually do autonomously? More or less practical use cases haven been in the media already: [delivering books](http://edition.cnn.com/2013/10/18/tech/innovation/zookal-will-deliver-textbooks-using-drones/) or [medicines](http://matternet.us/) and [constructing buildings](http://www.youtube.com/watch?v=W18Z3UnnS_0) for example.

However, the use case that is most appealing to _us_ has not received much attention so far: simple maintenance tasks at places that are difficult to reach. We believe such tasks are a prime candidate for robotization with quadcopters. Therefore, we set out to build a simple demonstrator model of a quadcopter that can do paintjobs. 

__This demonstrator is not finished yet!__ Nevertheless, we (in particular Juan Pablo Forero Cortés) made some good progress over the last half year and solved some of the challenges for this particular application. Watch the video to see how the work has been coming along!

{% youtube UOgi7UkqzCc %}

### Technical Details

The Parrot AR Drone was first extended with brightly coloured markers and with an Arduino with a Bluetooth module. The smartphone's camera is then pointed towards the quadcopter so that an app can find its location by searching for the markers. The app then connects to the Parrot over WiFi, so that it can give the standard navigation commands to move the drone to the right position. The next step is that the app connects to the Arduino over Bluetooth in order to give the painting commands. The Arduino relays the paint command to a tiny servo that pushes at a spraycan, and voila, a black blob!

For our future versions, there are two major improvements to be made. First of all, the flying behaviour of the drone near a wall is not nearly as good as it should be. This can be improved by using [existing ROS libraries](http://wiki.ros.org/tum_ardrone) and should increase the precision enough to create pretty wallpaintings with our demonstrator. Secondly, in a final application it should not be necessary to have camera's pointed at the quadcopter: it should be able to localize itself, in particular with respect to the wall. 


