---
layout: post
title: "Do you want fancy light bulbs? Think again!"
description: ""
tags: []
author: annevanrossum
---
{% include JB/setup %}

# Fancy lights

Last Friday we had a goodbye event for Dominik. We will miss you, Dominik! After a [successful bank robbery](https://www.facebook.com/crownstones/posts/596056237246625), we dropped by at a restaurant at Oude Haven, where they have these beautiful big light bulbs...

These light bulbs are advertised as carbon filament bulbs (Dutch: kooldraad), although they often don't contain carbon. Bulbs with carbon filament created from bamboo were the bulbs patented by Edison ([history](https://www.wikiwand.com/en/Incandescent_light_bulb)) long before tungsten became widespread. One of the challenges was to turn the carbon into graphite, which had a positive rather than a negative temperature coefficient. The latter is detrimental to the lifetime of a lamp: the warmer it gets, the lower the resistance, the more current it draws, the warmer it gets. You don't want that as a bulb designer! Apparently, nowadays you can buy these beautiful big light bulbs again, but know that there is a fly in the ointment... They are very likely to be energy inefficient and can only be sold due to a loophole where manufacturers state that "these lamps are not for domestic use".

{% youtube 1vCQySb6ulA %}
 
Take a look at the [Edison Tech Center](https://www.youtube.com/channel/UCOc3q8ChcDYyeyFROxLDhuw) channel on Youtube to find out about all kind of interesting bulbs! This one is about Nernst lamps that don't need to be shielded from oxygen. Or [this one](https://www.youtube.com/watch?v=EOVej0Kifzo) is about induction lamps that don't have cathodes and anodes at all!

# Turtles all the way down

We have been working on the Crownstone firmware for the last weeks. One of the features that is currently implemented is a soft-fuse based on power use. Component manufacturers can claim all kind of properties about their components, but in the end it is nice to have a fail-safe that doesn't rely on their tests. In this case, when the current increases beyond a certain level the IGBTs are switched off automatically. This has been the main reason why we didn't turn on the dimming functionality yet. Hence, you can expect that to appear in the app very soon! You won't be able to dim your fridge or vacuum, even if you'd want to!

Functionality like a dimming button in the app has very little to do with the slider in the interface. It almost seems like turtles all the way down! The information flows from the user interface, to a BLE library, to the firmware on the Crownstone. However, also the firmware on the Crownstone itself exists of several layers. The main functionality is called the [bluenet firmware](https://github.com/crownstone/bluenet) and is written in C++. This code talks to the [Nordic software](https://developer.nordicsemi.com/nRF5_SDK/doc/) in C. That code talks to the processor and the peripherals itself. If you think you've understood everything, then you'll have so-called [Product Anomaly Notifications (PANs)](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fcom.nordic.infocenter.nrf52832.EngA.errata%2Ferr_832.html&cp=2_2_1_3) which are hardware or software bugs that are identified by Nordic engineers. Last, but not least, there are bugs that have not yet been identified.

# Delivery built-ins

The delivery of the built-ins will be immediately after we have received the final go from the third party that gives us a EU/EC declaration of conformity for CE marking, expected very soon now! Note, that we are "more Catholic than the Pope" in the sense that most of the manufacturers just declare to be conform without using a third party at all. In Europe the legally binding [directives](https://www.wikiwand.com/en/List_of_European_Union_directives) are implemented through norms. The challenge is to choose those norms that respect the electronic functionality we've been able to achieve!

![Bistable Relay]({{ site.url }}/attachments/bistable-relay1.jpg "Bistable Relay"){: .float-left width="42%" style="margin:4%"}
![Bistable Relay]({{ site.url }}/attachments/bistable-relay2.jpg "Bistable Relay"){: .float-right width="42%" style="margin:4%"}

One of the things that is done by our certification partner is opening up the casing of all components and physically check if they are conforming to electrical specifications. Above you see for example the Panasonic relay when it's open (left) and when it's closed (right).

![Assembly Built-in]({{ site.url }}/attachments/assembly-builtin1.jpg "Assembly Built-in"){: .float-left width="42%" style="margin:4%"}
![Assembly Built-in]({{ site.url }}/attachments/assembly-builtin2.jpg "Assembly Built-in"){: .float-right width="42%" style="margin:4%"}

We're also testing each item individually with heavy loads and are helped in this by three new team members from Human Technology, Bart Versluis, Mourad Fattouch, and Tim Prins. We are also joined by Jasper Makkinje and Riccardo Bellana who will be contributing activity recognition and device identification algorithms. By the way, if you know someone who loves software challenges, drop us a message!

We will in the coming two weeks contact everyone who bought the builtin Crownstones to check if their delivery address is still correct. Check your email boxes!
 
