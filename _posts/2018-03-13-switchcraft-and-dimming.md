---
layout: post
title: "Switchcraft and dimming!"
description: "An intelligent way to switch digitally and physically at the same time."
tags: [switchcraft, dimming]
author: annevanrossum
---
{% include JB/setup %}

![Twitter feedback]({{ site.url }}/attachments/twitter-feedback.png){: .float-right style="width:20%"}

# Yeah! :-)

To start, thanks everybody for driving our growth! We've been busy with many, many partners from venture funds, distributors, to real estate developers and store owners. CES seems so long ago already (we're still the first combining indoor localization with home automation, check this [BBC](http://www.bbc.com/news/technology-42574569) article)!

Please, keep sending us your feedback! Much appreciated!

## Dimming & locks

We have been testing the dimming behavior extensively and are rolling this out as we speak. If there are lamps you can't dim with the Crownstones we'd like to hear! For now it should be [compatible]({{ site.url }}/compatibility/dimming/) with any kind of dimmable light. Note that we went beyond simple pulse width modulation (PWM) which would only work with incandescent (or halogen) light bulbs. We're using [trailing edge](https://www.lamps-on-line.com/leading-trailing-edge-led-dimmers) dimming, which should have smoother control, a soft start and silent running compared to leading edge and is compatible with almost all dimmable LEDs.

![Enable dimming]({{ site.url }}/attachments/allow-dimming.png)
![Enable dimming]({{ site.url }}/attachments/allow-dimming1.png)

The other function you will be able to find is a lock. You can make sure that a particular Crownstone cannot be switched off by household members.

## Improvements under the hood

There have been a lot of improvements that are not immediately visible in the app user interface:

* On Android we have been optimizing the BLE library. We've even considered the use of SweetBlue which would come with a commercial license. However, although this aims to solve a lot of BLE problems on Android phones, they have a [large list with issues](https://github.com/iDevicesInc/SweetBlue/wiki/Android-BLE-Issues) and we dare to say that our library is already better. :-) If you're experiencing trouble with a particular Android phone drop Bart a message!
* We've been creating our first [Python binding](https://github.com/crownstone/bluenet-python-lib) that makes use of a particular Crownstone mesh-aware USB stick that you can put on a Raspberry PI or other convenient hub. This accelerates the integration with systems from B2B partners as well as home automation systems like [home-assistant.io](https://home-assistant.io/).
* The webhooks in the [Crownstone cloud](https://github.com/crownstone/crownstone-cloud) are pretty stable now. They can be used by dedicated partners who want to give their users real-time access to switch, power, or localization data.

## What to be expected next?

The next release will be the second Tuesday of the next month. We're aiming for three significant features. (1) On an architectural level, the mesh on the moment can so now and then be broken up due to interference. Hence, we have to build up the topology of the mesh using registered signal strengths between nodes. (2) Presence-aware scheduling. The tight integration of presence-based information with the time schedule. (3) Something that we have coined "switchcraft", the seamless use of the existing switches and the Crownstones in series.

![Switchcraft]({{site.url}}/attachments/switchcraft.png){: .img-center .limit-width }

This magic solution needs some explanation! The brown wire carries the single phase which if the switch is conducting completes the circuit via the light through the blue neural line towards the power source. If we would switch off the light manually, there is no current flowing through the circuit and we wouldn't be able to switch the light on via the phone. There is a solution though: a clever trick which first had the working name "sluusje" (after Suus who came up with this, partner of one our engineers, and engineer herself). It is possible to connect both of the poles at the switch so the light switch switches from "on" to "on. During this "slow" mechanical event the wires are temporarily disconnected for only a few milliseconds. The Crownstone has a capacitor that survives a voltage drop like that easily. Moreover it can measure such a gap easily because it is measuring at at least 2kHz. Voilà! Both manual and digital control is possible at the same time!

## Dashboard for developers

A dashboard has been created that can be used to visualize current and power. This is definitely a setup that is only interesting for developers! :-) First off all, you will need a Raspberry PI with a specially prepared Crownstone that can be accessed over UART and that runs a [serial driver](https://github.com/crownstone/bluenet-dashboard-backend) which can be accessed over a websocket (in this case written in Python). Subsequently, you can retrieve information over these websockets in a [dashboard](https://github.com/crownstone/bluenet-dashboard).

![An example of the voltage curve as seen in the dashboard. This is from one of the switchcraft experiments (you see a flat part in the middle). The values are raw (not normalized to 240V).]({{ site.url }}/attachments/voltage_curve.png){: .img-center .limit-width}

## Hannover Messe

We will be visiting [Hannover Messe](http://www.hannovermesse.de/home) from April the 23rd to the 27th as part of a Dutch trade delegation under [prince Constantijn](https://en.wikipedia.org/wiki/Prince_Constantijn_of_the_Netherlands). It's a nice opportunity for companies in the Netherlands to get a foothold in the German market and we look forward to this event to sign deals with international companies under the eyes of the prince and the press!

![At Hannover Messe we present the Crownstone as an office solution for businesses. A large market where we can maximize comfort, boost productivity, and reduce energy consumption at the same time.]({{ site.url }}/attachments/hannover-messe-cover.jpg){: .img-center .limit-width}

## International News

There have been quite a few interesting developments in the world.

* Andreas Brekken going through the installation process of using IOTA, a coin that promises to bring cryptocurrency to the internet of things and [not being happy about it](https://shitcoin.com/iota-cannot-be-used-for-iot-loss-of-funds-may-occur-e45b1ed9dd6b).
* Taylor Lorenz characterizing the CES as [full of robots and machines that don't work](https://www.thedailybeast.com/ces-was-full-of-useless-robots-and-machines-that-dont-work). :-)
* A [preview of Android P](https://android-developers.googleblog.com/2018/03/previewing-android-p.html) reveals a large emphasis on indoor localization. This is good news for us, because it means that (1) smartphones will become better optimized to run this type of function in the background, and (2) allows us to extend our indoor localization skills beyond our current hardware.
* An interesting [frequency deviation](https://www.entsoe.eu/news-events/announcements/announcements-archive/Pages/News/2018-03-06-press-release-continuing-frequency-deviation-in-the-continental-european-power-system.aspx) in the European electricity grid originating in Serbia/Kosovo. A lot of clocks are synced to the 50 Hz of the grid, but in our case dimming depends also on the 50 Hz. Note that we use a combination of frequency discovery (by zero point detection) and this 50 Hz prior, so we're quite stable against such deviations.
* A [clip](https://developer.apple.com/videos/play/wwdc2017/705/) that is already a bit less recent from Apple ([pdf](https://devstreaming-cdn.apple.com/videos/wwdc/2017/705d3czqkho1a6u/705/705_whats_new_in_homekit.pdf?dl=1), page 187), shows that they came up with the same idea to accelerate control of home automation devices. They call it secure broadcast notifications. This is an architecture change we're gonna execute under the hood to get sub-second latencies in controlling the Crownstones.

## Meetup

The following meetup is still quite some time away, Friday the 1st of June! The meetup is gonna be about the Crownstone integrated with the [Homey](https://www.athom.com/en/). Feel free to [subscribe](https://www.meetup.com/Smart-Home-Bluetooth-Hackerspace/events/248695959/) already to the event!

