---
layout: post
title: "Resistant Resistors"
description: ""
tags: []
author: 
---
{% include JB/setup %}

# Resistant Resistors

The Crownstone circuitry is beyond state-of-the-art with respect to power consumption. This has one disadvantage, the circuit decisions and choice of components are thought-provoking even for dyed-in-the-wool electrical engineers. One of these concerns the choice of a [resistor](https://www.wikiwand.com/en/Resistor), an element in the circuitry that has a fixed relation between voltage and current. A resistor is like hair clogged in a pipe, the higher the value, the more the pipe is clogged. The same voltage (240V) will lead to a lower current through the pipe. The job of the electrical engineer is to play around with just the right amount of hair to make sure the processor and its peripherals get enough juice.

![Spikes destroying the board]({{ site.url }}/attachments/spikes.jpeg "Spikes destroying the board"){: .float-left width="46%" style="margin:20px"}
![Spikes neatly handled]({{ site.url }}/attachments/spikes-stable.jpeg "Spikes, but no problem!"){: .float-right width="46%" style="margin:20px"}

Every time you flip a switch on a microscopic level you make a physical connection and disconnection in quick succession. This phenomenon is called [contact bouncing](https://www.wikiwand.com/en/Switch#/Contact_bounce) or chattering. At the left you see what happens if the resistor fails. There is a single spike and then silence! At the right you see a resistor that does everything according to the book.

This bad guy here, the resistor, is of the thin-film MELF type. If you check [this report]({{ site.url }}/attachments/carbon-versus-melf.pdf) you will see how the "clogging" is done! Namely having the electrons meandering through an elaborate labyrinth. The MELF type reduces the number of "turns" that have to be taken by the electrons, by using an innovative helical structure. Although this cool design should be enough to cope with spikes (also according to the specifications by the manufacturer!) this is regretfully not the case! We have to up the game and pick something non-metal with the highest sublimation point of the elements, carbon! At the right you see carbon coming to the rescue, no problems with spikes whatsoever!

The carbon resistor is larger, so this leads to a change in the printed circuit board. Without waiting till the final results are coming in, we already ordered these immediately, so there is as little delay as possible! The housing arrives in the first week of November, so almost there!!

## No hardware-talk, please!

Have you ever considered why there are no cheap trackers on the market? This is because the combination of GPS (for outdoor localization) and GPRS (for transmitting this information) is both expensive and energy consuming! Only products like the Van Moof bike in the picture are large enough to house the required batteries and carry the costs. So, how can we, commoners, track our stuff!?

![Van Moof bike]({{ site.url }}/attachments/vanmoof.jpg "Van Moof bike"){: .img-center width="100%"}

In this picture you see a fancy bike from [Van Moof](https://www.vanmoof.com/en_nl/). We tracked it, but were too late! Someone already cut through the frame! Ask Hans from Almende about the details! ;-)

Of course, Bluetooth Low-Energy is the solution!

If enough people are walking around it is possible to use all those phones as location sensors. This is the concept behind [Crowd GPS from TrackR](https://www.thetrackr.com/#crowdgps). Every person that is within BLE range of a device that requires tracking can help with finding it!

It doesn't take long to realize that the Crownstones might help with that as well! Imagine the Crowd GPS network we can roll out, awesome! The social consequences of the Crownstones are so plentiful it amazes us all the time how much this technology can work like a catalyst.

## Consumer Electronics Show

[CES](https://www.ces.tech/) is the biggest consumer electronics fair in the world. As our ardent readers you know we are using the newest Nordic chip on the market as well as contributing to their [OpenMesh code](https://github.com/crownstone/nRF51-ble-bcast-mesh). We are extremely honored to be asked to have our products displayed in their booth in Las Vegas! If you have suggestions about how to make our product the "coolest", don't hesitate to drop us some creative ideas!

If you want to do this in person, our [meetup list](http://meetup.com/Smart-Home-Bluetooth-Hackerspace/) is approaching 100 members, feel free to drop by any Friday!
 
