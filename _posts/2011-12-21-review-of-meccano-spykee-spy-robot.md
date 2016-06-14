---
layout: post
title: Review of Meccano SPYKEE spy robot
description: 
category:
author: remcotukker
tags: [spykee, hacks, mods, firmware, spy robot, robot toy, robots, meccano spykee]
---
{% include JB/setup %}

# Review of Meccano SPYKEE spy robot

Introduced a couple of years ago, Spykee was received warmly. Especially the
promise of Meccano that the robot would be open-source was for many robot
enthusiasts reason to keep their hopes up. Though the source code is released
now, initially it was not and this is probably the reason that the Spykee
community never grew very big. This is a pity, because the robot has many
possibilities, as described in the modding section. I will first discuss the
out-of-the-box features and experience.

{% youtube -GwdixdD6ms %}

Meccano has a long history of construction toys, and Spykee is no exception.
On delivery, you will find a box full of small plastic parts and a manual.
Three possible models are described in the manual, although the second and
third seem to be added as an afterthought. Also, while it is possible to
create your own model, do not expect too much from it, as many parts are
especially tailored towards the standard model. Nevertheless, this standard
model is good and will take about an afternoon to complete. The construction
is mostly comfortable and fun. Note that all the construction work is just for
decoration though; it is also possible to use the robot by just connecting the
camera to the combined battery and wheels.

After charging the battery for a long time you can finally try Spykee!
Installing the software should be easy, but, due to the not-open- source-
after-all debacle, there is no linux client. Only Mac and Windows (and Iphones
by an independent party by now) are supported. On first use you will have to
connect with the robot using an ad-hoc wifi connection and launch the client.
This will allow you to see the video from the webcam and drive around with
Spykee: very much fun! There is also some other features like playing mp3's, a
flashlight, and so on. The interface does the job, it's not bad.

The ad-hoc network mode is easy enough. The next step is to connect Spykee to
a router and access it from your local network or even the internet. The
configuration of this setup is a bit more complicated though and in many cases
will require tweaking of some router settings. Also, do know where the reset
button on the robot is located; I had to restore the factory settings a number
of times... However, it's nothing a robot enthusiast or a smart kid couldn't
handle.

The hardware of the robot is very nice for a toy, but in case you are looking
for a really useful robot, it might not suffice. The two tracks for example
can turn the robot in place on the plus side; but the suspension is so basic
that a small bump can already block Spykee's way. The battery is good enough
to make the robot work for about an hour, but the charging mechanism is not
very good and may quickly reduce the battery life if not fixed by a
modification. The robot has an autodocking feature when it has to charge, but
it is barely working. The resolution of the camera is okay for navigation, but
don't expect to take nice pictures. All in all, out of the box the hardware
capabilities are not very impressive. Still, for 200 euro it offers a robot
that is a great toy and for example even good enough to use in an office
environment. Moreover, it is possible to make your own modifications to it and
make it a really stunning robot.

By the way, Meccano has introduced some other Spykee-like robots by now. Check
them out if you're interested in a robot that can change the channels on your
television or that can interface with phones and Ipods. A direct competitor of
Meccano's Spykee is the WowWee Rovio, which seems to have about the same
possibilities out of the box. Making modifications to a Rovio robot may be
harder, but do your own research to find this out.

## Modding

![Meccano Spykee]({{ site.url }}/attachments/meccano_spykee_400.jpg "Meccano Spykee"){: .float-right}

Even though Spykee turned out to be less friendly to modders than anticipated, there are many possibilities by now:

  * Writing your own software to control the robot. This is something that a couple of people did already, notably leading to SpykeeFX (found at the devmods site) and ISpykee. Unfortunately, SpykeeFX is not open- source. However, ISpykee is, so at least part of the communication protocol is available and reverse engineering is not obligatory.
  * Probably a whole lot easier is to replace the firmware on the robot with something that is more to your liking. As the toolchain for making the firmware became available (found at the official website), a number of replacement firmwares were created. One of the additions is for example the enabling of telnet on the robot. The URBI firmware by the French robotics company Gostai seems to be the most attractive: together with the URBI library (in C++) it should be an easy way to write your own computer programs to control Spykee. It supports track speed setting, led on/off (but only in pairs), camera readout and all other features that you'd expect.
  * Add hardware! Most people that add actuators use the LEDs to control them, either directly or via a controller (eg a Arduino board). One of the most attractive additions is an actuator to move the head up and down, in order to see where the robot is walking (although it is probably also possible to achieve this by changing the body). In theory it is possible to add whatever actuator you want though! It should also be possible to use the USB and serial connectors. This can be useful if you would like to add sensors, but probably will be quite involved on the software side. Adding a USB disk is easy though, see the devmods wiki.


##  Specs

  * Price: ± 200 euro (It is still in production, but sometimes a cheaper offer can be found)
  * Computer: 200 MHz ARM9 processor, 32 Mb internal memory, 4 Mb flash memory for the firmware, WiFi connection to the rest of the world (either ad-hoc or through a router; note that the router name should not contain spaces because of some weird bug in Spykee), USB host (usually has the camera on it), serial port (which requires serious hacking to use)  
  * Sensors: infrared (for docking, not standard available for readout), battery charge status, USB webcam, microphone
  * Actuators: 2 tracks, speaker, 4 leds (red and green) and 1 flash led (white)


##  Links

  * Official website: <http://www.spykeeworld.com/>
  * Source code: [ http://www.spykeeworld.com/spykee/UK/freeSoftware.html](http://www.spykeeworld.com/spykee/UK/freeSoftware.html)
  * A CNET video review showcasing different models in action: [http://cnettv.cnet.com/?type=externalVideoId&value;=6827518](http://cnettv.cnet.com/?type=externalVideoId&value=6827518)
  * Urbi software by Gostai: [http://www.urbiforge.org/index.php/Robots/Spykee](http://www.urbiforge.org/index.php/Robots/Spykee)
  * Modding community: <http://www.spykee.devmods.org/>
  * The wiki of the above with a lot of information on the hard- and software: [http://spykee.duskofsolace.com/](http://spykee.duskofsolace.com/)
  * The ISpykee website: <http://ispykee.com/>

