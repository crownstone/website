---
layout: post
title: Robot-to-robot communication
description: 
category: 
tags: []
author: annevanrossum
---
{% include JB/setup %}

![Replicator robot prototypes]({{ site.url }}/attachments/replicator_2prototypes_square.png){: .float-right}

In
the near future smartphones will become important as the brains for robots.
How can we best setup phone-to-phone communication? Or in our case, robot-to-
robot communication. We do not only want to have robot-in-the-cloud
functionality, but want to be able to stream sensor data from one robot to the
other. One of the important criteria for us is the availability on
contemporary smartphones. The requirements of the solutions we find should not
be judged on the fact that they support a MIPS or ARM computer architecture,
but on the fact that it is works fine with Android 2.3. Robot-to-robot
communication is especially useful in settings where the robots are physically
close. However, for remote presence applications it would be nice to have
mobile-to-robot communication which is not limited to one (wireless) network.
This opens up possibilities of remote control and remote monitoring. The
ability to bridge the firewall that separates a home or company from the
internet is called [NAT traversal](http://en.wikipedia.org/wiki/NAT_traversal), so it will be really
nice if a library or tool makes this easy for us. One of our last requirements
is about what we want to communicate. We want to be able to stream data on the
level and quality as video chat applications. This means that text-based
approaches using JSON or XML per pixel ;-) might not be the best way to go.
Tools that try to achieve some quality of service will have a big plus.
Especially for communicating accelerometer data between users it is important
that this goes very fast. There should be a small delay between a command to a
robot and the action by the robot.

##  Cross-platform tools

There are tools available that makes it possible to program for both Android
and iOS at the same time. These tools differ in how much they make use of web
functionality. The extreme is an "app" which is only a browser that displays
pages from an HTML5 website. Such an app does not look like native
applications on your smartphone and has many difficulties in accessing the
sensors on board. As Jonas Lind [tells us](http://www.visionmobile.com/blog/2011/06/platform-x-how-cross-platform-tools-can-end-the-os-wars/), it might very well be that the final solution for
this platform "war" will be more important than the platforms themselves. To
us, it seems inevitable to have a solution that can run natively on the
smartphone and has access to many of the sensors, attached devices, and as a
side-effect has a high performance.
[Marmalade](http://www.madewithmarmalade.com/) and
[Mosync](http://www.mosync.com/) seem to be such cross-platform APIs.



We are not so much interested in these cross-platform capabilities as such: we
want to have _phone-to-phone streaming_ of sensor data. Although, it looks
like there must be a huge market for multi-user peer-to-peer applications,
there does not seem to be many frameworks yet that make it easy for developers
to create multi-user games. The streaming capabilities seem not be up to par.
The newest Mosync API (3.0.1) might have audio streaming now, but there is
nothing in place that really targets peer-to-peer data streaming.

##  Middleware solutions and standards

In home networking there is UPnP (of which e.g.
[Cling](http://4thline.org/projects/cling) seems to be big) and DLNA which you
will probably recognize from a sticker on your televion set. There do not seem
many libraries for Android for UPnP. One of the most professional looking ones
is [ohNet](http://www.openhome.org/wiki/OhNet) from
[OpenHome](http://openhome.org/). The UPnP technology does not use any
authorisation schemes and is hence only useful in the house itself. That's why
there is an OpenHome hub to which you can connect to your home and control
everything. Besides looking for multimedia streaming solutions, we can also
look at the parties that implement phone conversation. So, we have to look at
[SIP](http://en.wikipedia.org/wiki/Session_Initiation_Protocol) (voice) or [XMPP](http://en.wikipedia.org/wiki/Extensible_Messaging_and_Presence_Protocol) (chat) or extensions on that. There is for
example the [SOX- XEP](http://sensor.andrew.cmu.edu/xep/sox-xep.html)
extension. It stands for Sensor-Over-XMPP and an ejabberd server will be work
fine. Jingle adds peer-to-peer session control to XMPP. Hence, maybe something
can be cooked up to combine this and create something that works for robot-to-
robot communication, but it will be a lot of effort! There is peerdroid and
[sip2peer](http://code.google.com/p/sip2peer), but both projects do not seem
to be backed up by a company or diligent programmers. SIP is a signaling
protocol that comes with a real-time transport protocol. The RTCP is a control
protocol that is needed besides the data transfer protocol (RTP), which is
about quality of service, etc. Audio and video streams have typically separate
RTP sessions (and hence different ports). What's most interesting to us is
that there is an experimental Control Data Profile for RTP for machine-to-
machine communications. Regretfully, it doesn't seem anyone picked up on that
either. Then, there is
[DDS](http://en.wikipedia.org/wiki/Data_distribution_service), Data
Distribution Service middleware, which seems to be promoted by at least one
company (Twin Oaks) for use on smartphones and which has a
[demo](http://blogs.rti.com/2011/03/02/new-video-data-centric-integration-demo-android/). And from a middleware perspective there is
[zeromq](http://www.zeromq.org/), which also takes messaging between devices
more seriously, but which is fairly general (and does not have examples of
streaming from [Android](http://www.zeromq.org/build:android) to iOS for
example). To summarize all these solutions seem to have good ingredients for
what we want, but to stream for example images and acccelerometer data from
phone-to-phone in a nice plug-and-play and reconfigurable manner seems to be
not there yet.

##  Recommendation

For a roboticist or computer scientist it might now be most natural to roll
your own solution, but we are convinced something will show up that meets our
demands completely in not a very long time. It is most logical to jump the
bandwagon with one of the solutions that solves basically everything except
for the NAT traversal and only requires an additional hub similar to the
OpenHome strategy. Contrary, to the latter though, we would like to pick
something that makes development on the smartphone side extremely easy. One
choice could have been [bump](https://bu.mp/), which has an API that can make
a connection on physically bumping devices together. Most promising though
seems to be [Alljoyn](https://www.alljoyn.org/), backed up by Qualcomm and
open-source. It works for both Wifi and Bluetooth. You can find the source
code [here at github](http://alljoyn.github.com/build.html). Happy coding!


