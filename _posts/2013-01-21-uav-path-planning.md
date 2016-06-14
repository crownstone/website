---
author: bartvanvliet
layout: post
title: "UAV path planning"
description: 
category: 
tags: [fireswarm]
---
{% include JB/setup %}

# UAV path planning

The mission of the UAVs is to find a fire in an area. This leads to the problem of covering an area as fast as possible.
An optimal path for each UAV could be calculated in advance, such plans however are not very flexible.
UAVs cannot follow planned paths perfectly and there is no room for rechecking a possible fire.
An interesting method is to use potential fields, resulting in a landscape where the UAVs are repelled by hills and attracted by valleys.
As the landscape changes over time, the path planner keeps updating the plan.
This method enables us to incorporate various other influences in the plan.

  * Coverage: Repellers are placed on places that UAVs already observed, so that those places are not visited again.
  * Collision avoidance: Repellers are placed on future path of UAVs, so that UAVs won’t fly in the way of other UAVs.
  * Edges: Repellers are placed on the edges, so that the UAVs won’t leave the allowed area.
  * Fires: Attractors are placed on possible fires, so that the UAVs can recheck to be sure. Once rechecked the attractor can be removed.
  * Battery: An Attractor can be placed at the base when the battery is low, so that the UAV is ready to land.
  * Connectivity: Either attractors or repellers can be placed to keep all UAVs and the base connected.

Simple simulations are used to get statistics about coverage.
For these simulations, the flight dynamics, radio transmission and other things are simplified.

{% youtube nSNsEQN4LKQ %}

Simulations with the software that will be on the UAVs are performed to check the simple simulations and to see how collision avoidance and landing works out.
With this software we can also perform hardware in the loop simulations, so that timing becomes visible.
A later blog post will reveal more details about the software. In this video, all UAVs fly at a different height, so collision avoidance will not be observed. 

{% youtube -EJqMIBsEt0 %}

It should be possible for the operator to call all UAVs back at the same time, while the UAVs cannot all land at the same time.
By a simple queue system, each UAV will wait for lower flying UAVs in queue to land first.
In this video, the landing is made visible by a sudden turn towards the ground station, which in reality will be a landing performed by the auto pilot. 

{% youtube HxtyKUiYGrw %}
