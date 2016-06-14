---
layout: post
title: Two websites
description: 
category: 
tags: []
author: annevanrossum
---
{% include JB/setup %}

# Two websites

We launched two websites that show a bit what we are doing at DO:

##  Rest4phone

If you followed our work, you saw that we have been working on a special
robot, the Dotty. This robot is a smartphone-based robot, but different from
the ones that are now on the market, it is able to recharge itself by making
use of the USB connection through the smartphone. The newest smartphones are
able to recharge themselves via QI or other means. We have first experimented
with different methods ourselves, for example with Witricity which you might
now from the [famous Ted talk by Eric Giler](http://www.ted.com/talks/eric_giler_demos_wireless_electricity.html). However, by using the inate
functionality of the wireless charging smartphone, we won't be limited to one
provider of wireless charging functionality, which is ideal in our case.

We would like to give the Dotty to the world, but before we can do so, we have
to experiment with all the different forms and options that are out there. The
course exchange your old smartphone for money. However, you won't get much,
especially not if the screen is broken for example. So, why not give it to us!
Smartphones turned into robots is of course not the only idea imaginable.
That's why we set ourselves to redesign our website if there are other ideas
for a second life for your smartphone. We have already two incoming ideas.
Mats Lundgren from SilverLine uses smartphones for the elderly. Blair Palmen
from HopePhones for Medic Mobile. If you don't have a second phone to spare,
feel free to tell us on <http://rest4phone.com> if you have another great
idea.

##  Dodedodo

A funny name, with a lot of DO (from DoBots) in it. That's our website
very well that we now have market places or app stores to get applications for
our smartphones. However, smartphones are not the only devices in our life.
Especially from our perspective of robotics, we want to have a seamless
experience across all your devices. You should be able to install applications
across your smartphone, your home automation device, your mediabox, your
laptop, even your online server park with drag-and-drop actions.

The <http://dodedodo.com> website is a hub that brings together a lot of
software packages build by many developers. On the moment you can add your own
repository to add your own modules to the hub. To build these modules a lot of
helper code has been created. It would take too far to go in detail here, but
the code itself is open-source and a description on how to use it can be found
at [http://mrquincle.github.io/aim-bzr/](http://mrquincle.github.io/aim-bzr/). These utilities allow a developer to program certain functionality once
and subsequently wrapper code will be generated to be able to use it in many
different middlewares or frameworks. The currently supported middlewares are
YARP, ROS, ZeroMQ, and NodeJS. Moreover, and important for us, robotici, the
code can generate binaries for multiple architectures, the blackfin processor,
the RaspBerry PI, etc. The modules are described by a general interface that
uses a "port" abstraction. On <http://dodedodo.com> it will become possible to
drag-and-drop blocks and draw lines between them to implement a distributed
application across your smartphone, a laptop, and a robot for example to
implement a "remote-presence robot" yourself.


