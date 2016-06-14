---
layout: post
title: Swarm behavior with a group of small robots
description: 
category: 
tags: []
---
{% include JB/setup %}

#  Part 1: Dotty

##  Introduction

If you have read the ["Building a swarm robot"](http://www.dobots.nl/blog/-/blogs/building-a-swarm-bot) post, you
already know that we at DoBots are aiming to develop a cheap platform for
swarming experiments. The Dotty is the result of our first attempts. As
mentioned before, we are interested in equipping our small bots with machine
learning algorithms to assist the swarm in fulfilling the given task and
providing the robot with a better understanding of its location and its
characteristics.

The physical frame which we selected for the Dotty is the [AREXX frame](http://www.arexx.com/arexx.php?cmd=goto&cparam=p_robot_chassis), which
contains 2 motors, some experiment space in the form of two breadboard-like
areas for electroniccomponents, and a battery compartment. The motors drive
two wheels, the third is a passive turning wheel.

![](http://www.arexx.com/data/images/dp/robo_chassis.jpg){: .float-right}

One of our wishes is to attach a number of different sensors to the robot that
are not optimized individually, but which will be used as a composite by the
algorithms, trying to catch one sensor's weaknesses with the other one's
strengths.

The same applies to the actors, also aiming to enable both communication
between bots as communication with human observers.

We have used an Arduino board as the brain of our little robot and added
different circuits and sensors to empower the AREXX frame and alter it to a
smarter robot.

The actual design of the electronics and circuits has already gone through a
number of revisions. As we could not find solutions readily available for all
of our wishes, electronics design became a necessity, and revisiting the
knowledge required essential.

At the end we aim to have a Dotty equipped with sensors and electronics
like: IR sensor, Microphone, Speaker, Light sensor, Motor sensor, Battery
sensor and Gas sensor.

##  Light-power- collision avoidance

One of our first experiments was a “Light-power- obstacle avoidance” scenario
in which the Dotty is equipped with a light sensor and an IR sensor. The IR-
sensor is responsible for the obstacle avoidance task and the light sensor
data is used for adjusting the robot's speed. As the light level sensed by the
bot is higher, it moves faster.

Below, you will find the hardware characteristics, a short video and a link to
the code.

##  Microcontroller and additional electronics

For this project we used a [LilyPad Arduino](http://arduino.cc/en/Main/ArduinoBoardLilyPad) board as
microcontroller for the Dotty. We also added a [motor controller](http://www.sparkfun.com/products/9457) to the AREXX frame, in
order to control two DC motors, for moving forward or backward. The speed of
the motors can be adjusted by the Arduino PWM output.

![](\[$dl-reference=/groups/10157/portlets/20/file-entries/23526/1.0.xml$\])![](\[$dl-reference=/groups/10157/portlets/20/file-entries/23539/1.0.xml$\])

##  The Infrared sensor

![](\[$dl-reference=/groups/10157/portlets/20/file-entries/23554/1.0.xml$\])

The Infrared sensor can be bought easily; we got it through
[iprototype.nl](http://iprototype.nl/products/components/sensors/ir-sensor-4-30). It has 3 connections, ground, supply voltage and sensor out. It
produces a voltage proportional to the measured obstacle distance.

##  The Light sensor

A challenge frequently addressed in Artificial Intelligence is the extraction
of periodicity in a series of observations. Figuring out which frequency fits
the observed data, enabling an accurate forecast, is far from trivial,
especially if multiple modulation sources with each their own repeat cycle are
involved. The choice for the light sensor is motivated by this question, as
the cycle of daylight (modulated by season and weather) is an excellent
example of the type of data central to this problem.

The circuit we use is very simple and very cheap. It contains a single
transistor, a [Light Dependent Resistor (LDR)](http://iprototype.nl/products/components/sensors/ldr) and two
additional resistors.

![](\[$dl-reference=/groups/10157/portlets/20/file-entries/23462/1.0.xml$\])

_Schematic of Light sensor circuit for the DoBots Bot One_

##  Links:

Below, you can see a short video, recorded during the experiment.

You also can [download the code](http://dev.almende.com/svn/coquetry/avoidance/light_powered_obstacle_avoidance_LED.ino) written for this experiments from our SVN
repository.

##  Looking for the light source

Using the same hardware, electronics and sensors (mentioned above), we tried
out another experiment to see if the Dotty can find a source of light by
comparing the received data from the light sensor. Using a simple feedback
algorithm, the received light levels are compared every 0.5 seconds. If the
sensor data indicates that the Dotty is receiving less light than before, it
turns with a random angle and moves in a different direction, searching for a
light source. If the Dotty receives a higher light level than before, it
continues moving forward with the same direction.

Below you can see how Dotty succeeds in finding the light source (in this
case a desk lamp).

The [piece of code](http://dev.almende.com/svn/coquetry/Head2light.ino)
wiritten for this experiment can also be found in our SVN repository.


