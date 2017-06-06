---
layout: post
title: "Inertia energy balance management system"
description: "Inertia, a European project establishing an energy balance management system."
tags: []
author: peetvantooren
---
{% include JB/setup %}

# Load-balancing on the grid

[Inertia](http://www.inertia-project.eu/inertia/) is an FP7 project that aims at expressing local energy use/production elasticity in a negotiation system that utilizes the published "flexibility" (=elasticity) to produce a balanced load to the energy production counterpart. The focus of the project is tertiary buildings, but the system is just as useful for any built environment and facilitates the changeover to more local production of electricity by home-owners and facilities alike.

Flexibility can be aggregated from the level of a controlled light upto a complete set of buildings, and is expressed in four main categories to guard against too much privacy loss. The categories are:

*  HVAC (thermal and air comfort),
* lighting,
* RES (=Renewable Energy Resources) and
* other.

The last category includes coffee machines, dish washers, etc. to make sure it all adds up.

By providing a short horizon forecast on individual LCH level and a combined forecast of upto 12 hours for an MV-point the energy provider is assured a much more accurate figure upon which to base his production and or buying decisions. The MV-point aggregated level in the system is called the aggregator control hub and is the control system that coordinates an entire set of LCH’s that for the full load of an MV-point (Medium Voltage). In general an MV-point is between 0.5 and 2 MW.

![Switch loads]({{ site.url }}/attachments/inertia1.png "Switch loads to create a steady aggregated loads")

The experiments we have done have shown that the ability to switch loads in ms allows for a very steady aggregated load (see fig 1), The LCH’s can be instructed to use their control limits in such a way that they fulfill as much as possible their own predicted energy load. It is important to understand that load differs from energy consumption, as consumption is calculated over larger periods, which would still allow for large variations in load. These variations however are very detsabilizing for smaller subgrids with large contributions from locally generated energy such as PV and wind. The very fast reaction times of below 10ms and the tiered availability of flexibility both inside the LCH and between these LCH’s as facilitated by the ACH, are able to counteract the natural fluctuations that come with the use of PV and wind.


![Under noise]({{ site.url }}/attachments/inertia2.png "Heavy noise from random user events")


To illustrate the effectivity we have created the possibility to introduce random user events up to a scale that is normally impossible for humans to realize. (see fig 2).

The aggregated flexibility of the well behaved LCH's is easily enough to compensate (fig 3)

![Aggregated flexibility]({{ site.url }}/attachments/inertia3.png "Aggregated flexibility")

We are more than happy to elaborate on the principles on your request 8-) and apologies for the rapid introduction of a lot of jargon...

Oh yeah: The links on the page allow for accessing the APIs of the different LCH's at a bus. A bus is identical to a single MV-point. As you can see I have used different buses to illustrate the behaviour.
All of the LCH’s in all buses are at the bottom of the page.

