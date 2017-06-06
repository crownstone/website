---
layout: post
title: "A meshy mess"
description: "The Crownstone mesh software."
tags: []
author: annevanrossum
---
{% include JB/setup %}

# Audio that follows you around!

Something fun! As our readers you know we are always advocating hands-free home automation solutions! Of course, Amazon and Google Home are cool, but they still require commands from the user. At times when it doesn't understand you it can be quite frustrating! Wouldn't it be cool if your music just follows you from the living room to the kitchen? That's exactly what [Kien](https://www.kien.io/) has been building with our favorite partner [AMS](http://www.ams-site.com/)!

[Preorder with discount!](https://www.kien.io/collections/all)

Especially for you as Crownstone enthusiast, we have a nice opportunity! If you use the discount code "CROWNSTONE" at the Kien website you can get an extra 15% discount on top of the 20% existing discount. This offer is valid up to Tuesday, 12 o'clock at night. It's your chance to contribute to a promising success story!

# Software

Over the last month we've been working hard to deliver the next big update: the mesh! The mesh allows the Crownstones to communicate among each other. To accommodate the increasing amount of asynchronous traffic handled by the app we implemented a new architecture on the mobile phone that we proudly call the "BatchCommandHandler". This module will batch commands you send to a Crownstone, like the phone heartbeat, the commands you give it, and the automated behaviour on enter and exit of a room. This architecture will allow the smartphone to connect to a single Crownstone that then propagates the request to other Crownstones. 

# Tests

Our tireless interns have been testing our Crownstones and apps full time! Naturally, we have found many small things that did not work as they should, especially on different types of Android phones. We have formalized a testing protocol for every release to test all features repeatedly. Due to doing many more tests in-house, we spent a lot of time fixing bugs. This means that the all-round performance of the Crownstones is much more reliable with the next update. 

# Meshy details

So what has been fixed?

* Battery saving!
* Strange and unexpected behaviour of the text fields.
* Crownstones still lingering after setup mode.
* Only turn on when it's dark outside now actually works!
* Fixed bugs in the Promise Manager (which makes sure that everything happens sequentially). When this occurred, no commands could be sent to the Crownstone until the app was killed forcefully.
* Improved heartbeat reliability and switching by going near/further away and enter/exit sphere.
* Reliable switching of Crownstones.
* Improved setup reliability.
* Enter/Exit sphere/rooms and near/further away performance.

And what's new so far?

* Subtly getting the current Firmware versions of your Crownstones.
* Mesh interface to show the user if the Crownstones are connected with each other.
* Upgrading the bootloader and firmware of the Crownstones safely.
* App interface for upgrading the bootloader/firmware.

What's more?

Our Cloud service (which allows you to invite users, setup Crownstones, create Spheres, Rooms, Appliances, and provide third-party integration) has had a major upgrade to Loopback version 3! Why do you care you ask? 

* Downloading firmwares and bootloaders as well as version management and phased roll outs of new versions!
* OAuth2 authentication which lets us hook services like the Amazon Alexa up to our Cloud. This way you can have Alexa turn your lights on and off just by telling her so!
* It paves the road for future extensions (IFTTT, Zapier)
* It will allow usage of a phone or tablet as a hub! A hub would allow switching remotely (via internet) for instance.
* Also, push notifications can now be added, allowing us to show you when other people enter a room in real time without the battery cost of constantly asking the Cloud if anything changed!

You'll notice the app update automatically as soon as it is accepted by the app store reviewers. No need to do anything in particular.

# EnergyZero

We started this newsletter with an interesting company and we are ending with one as well. Crownstones make it possible to turn on appliances, pumps, or heating elements at moments when the supply is highest. It is anticipated that wind energy and solar energy will cause more and more peaks in the supply. This means that utility companies pay different prices for energy per hour (see [APX Power NL dashboard](https://www.apxgroup.com/market-results/apx-power-nl/dashboard)). At EnergyZero people decided that this - and the corresponding benefits - should be available to consumers!

[Read more (Dutch)](https://www.energyzero.nl/energie-tegen-kostprijs/flexibele-energietarieven/)

EnergyZero is the first energy provider that will allow you to pay per hour, super cool! They can do this by using a Spotify-like subscription model of € 9,99 per month and then provide all the energy without any additional margin. Every cent you save, you really save! Their incentive is your incentive!

If you're a bit tech-savvy you'll be able to use Crownstones to profit from this and e.g. only turn on pumps or floor heating when it's cheap. If not, don't fret, just be a bit patient! :-)

Have a nice weekend and/or [happy hacking](https://www.meetup.com/Smart-Home-Bluetooth-Hackerspace/)!
 
