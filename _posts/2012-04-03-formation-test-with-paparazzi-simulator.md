---
author: merelvandiepen
layout: post
title: "Formation tests with Paparazzi simulator"
description: 
category: 
tags: [fireswarm]
---
{% include JB/setup %}

# Formation tests with Paparazzi simulator

A swarm of UAVs has to find one or more fires in a dune area by processing the images taken with the cameras directed downwards on the UAVs.
It is a legal requirement that during flight, the UAVs keep a communication link with the ground station.
This can either be a direct link or an indirect link through hopping. When a UAV turns or changes its altitude,
the camera directed downwards shall have a limited view of the area beneath.
Therefore, the amount of pitch and roll changes should by minimised.

In literature, many methods were found that handle similar problems. Here follows a  selection of the most interesting ones:

  * Levy flight: flying randomly but with varying time steps
  * Reynolds Boids / Potential fields: through attraction and repulsion between UAVs, several different behaviours can be established, e.g. swarming or formation flight.
  * Pheromones: Using markings in the environment to guide robots, e.g. ant algorithms.
  * Frontier-based: robots look for the frontier between known and unknown space and decide where the trade-off between the cost of going there and the amount of expected new information is best.

In order to test these pattern formation and swarming algorithms for the swarm of UAVs, the Paparazzi simulator is used.
Paparazzi is an open source autopilot, see the [Paparazzi Wiki](http://paparazzi.enac.fr/wiki/Main_Page).
It includes the hardware and software for the autonomous aircraft as well as the complete ground station mission planning and monitoring software.
Here you see an example of the behaviour of 10 UAVs when simulated with Levy flight combined with a repulsive force between UAVs.
In this example no communication restrictions were used. The square is the area to be covered and spans 5 by 5 km.

![Repulsive forces, no communication]({{ site.url }}/attachments/formation_tests_repul_nocom.png "Repulsive forces, no communication")

In Paparazzi, the easiest way to program the flight schedule for the individual UAVs is to set way points for each UAV.
Then, each autopilot lays down the route to a way point. The carrots are the direction indicators of the UAVs.

The tested algorithms shall be assessed using the following function:

![Evaluation formula]({{ site.url }}/attachments/formation_tests_formule.png "Evaluation formula")

Where:

  * F is the function to be minimized,
  * t is the flight time in which the swarm has covered 90% of the area,
  * N is the number of UAVs,
  * Dcomm is a discount for having no communication link,
  * Wcomm is a weight factor,
  * Dturn is a discount for large pitch and roll,
  * Wturn is a weight factor.



