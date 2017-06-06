---
layout: post
title: "Particle filter for tracking"
description: "A particle filter for tracking a robot using an ordinary webcam."
category: 
tags: []
author: annevanrossum
---
{% include JB/setup %}

#  Particle filter to track robots

Particle filter demo of our home-made robot, the dotty. The IP webcam used in
this demo is quite old, so the quality is not that good. You will see that the
pockets of the pool table are quite hard (the particle filter is tempted to
track those instead of the robot when the robot gets close). You can find the
code for the particle filter at
[github](https://github.com/mrquincle/particlefilter), feel free to improve
it.

There is not much time spend on this implementation. It is only meant as an
exercise to get familiar with particle filtering techniques. There are
approximate and generalised forms of belief propagation on networks of robots
that require such expertise. Subsequently this can be used for either
simultaneous localisation and mapping, tracking, or certain common visual
tasks.

With respect to the latter, it would be cool if an image segmentation task
across a multi-agent system would indeed be solved as one general problem
where the structure is exploited, rather than some ad-hoc user-defined
decomposition depending on the coffee quantity in the morning.

{% youtube LmxHQdzytRw %}

For other algorithms do also not hesitate to visit the website
[NETS](http://almende.github.com/nets/) dedicated to algorithms only!


