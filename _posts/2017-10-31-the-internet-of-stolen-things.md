---
layout: post
title: "The internet of stolen things"
description: "A bike of other object can have an iBeacon attached to it. If Crownstones are strategically positioned they can help scanning for these beacons when such an object is stolen."
tags: [internet of things, anti-theft, beacons]
author: annevanrossum
picture: attachments/guidestones.jpg
excerpt: "A bike of other object can have an iBeacon attached to it. If Crownstones are strategically positioned they can help scanning for these beacons when such an object is stolen."
---
{% include JB/setup %}

# The internet of stolen things

The [story of GPS](http://mashable.com/2014/05/25/commercial-gps-25-anniversary/#YadO3pjqaGqV) has been long and with a lot of obstacles. In 1989 the first commercial handheld devices came to the market. The first big problem that was encountered was the battery required for receiving signals on the 1.5GHz band. Thankfully, new chips based on gallium arsenide (GaAs) were developed that used much less energy because they ran on lower temperatures and less cooling was required. The largest problem? The NAV 1000 didn't work. Everything was miniaturized so much that the device itself interfered with its own detection circuitry. Commercially, it was of course also difficult to convince people to build GPS receivers when there were only a couple of satellites. To get a fix you need at least three satellites in view. A classic chicken-and-egg problem! Yet, all these problems were overcome! Smartphones played a big role in this. "Who needs to know their location? Don't you know that yourself?"

Indoor positioning suffers from the same type of obstacles. To have your heating, your sound, your lights adjusted to your location, you have to miniaturize the technology, invent new algorithms, and address all kind of misconceptions as well.

## Anti-theft

On one hand there are [articles that explain](https://www.androidcentral.com/new-low-energy-mesh-connection-standards-mean-bluetooth-will-be-big-part-internet-things) the benefits of Bluetooth mesh for asset tracking in hospitals. On the other hand there are [articles that say](https://www.iotforall.com/bluetooth-geolocation/) that geolocation is a tragic misuse of Bluetooth. Let us address this use of Bluetooth Low Energy (BLE) for getting your stolen bicycle back.

* The current solution that solves outdoor tracking is a combination of a GPS and a GPRS chip, the first to get a location fix, the second to communicate it to the user. The [trackimo](https://buytrackimo.myshopify.com/collections/frontpage/products/trackimo-device/) for example costs $79 for the hardware and $60 per year for the subscription. The tech involved requires quite some battery power as well. Moreover, the above costs are definitely reasonable for the tech involved and are unlikely to drop significantly.
* A solution like [TrackR](https://www.thetrackr.com/) does crowdsource the location of BLE tags. It hopes enough people are installing the TrackR app on their smartphones. These apps are continuously scanning for potentially lost tags all the time. When a tag is lost it is hopefully picked up by a person nearby. The problem is that too many people have to run an app that has no function for them at that very moment.
* A solution like [Spotty](https://www.spotty.eu/en-NL/shop/detail/product/53) which is a (reward) QR sticker that can be scanned by helpful people. This will work mostly with lost items, not so much with a stolen bike.

There is a solution that is yet not available because it requires an infrastructure. In this case not of GPS satellites, but of BLE scanners. In a typical, realistic setting, Bluetooth 5 will offer a range of up to 120 meters. If we consider the Netherlands it has around 3.5 million hectares. To compare, there are 3-4 million lamp posts, or there are 7 million households. If BLE can indeed reach 100 meters outdoors, we can cover most relevant parts of the country.

## Difficult, but can be done!

We might consider this as a mathematical problem where we have to decide how many disks should be randomly distributed across an area given a movement pattern of stolen property, typically stochastic, for example Brownian. Note, this [article](http://nautil.us/issue/53/monsters/maths-beautiful-monsters-rp) gives a nice exposition about the beauty of continuous functions that are nowhere smooth. A nice problem for a math loving intern. :-) Typically, however, it will require much fewer scanners if we allow for monitoring with gaps.

![Guidestones]({{site.url}}/attachments/guidestones.jpg){: .img-center .limit-width }

At Crownstone we cannot build every imaginable application on top of location, proximity, device identification, smart homes, and smart buildings. Hence, that's why we need people with far-fetched ideas like the one above. For a project with millions of Crownstones or [Guidestones](https://shop.crownstone.rocks/products/guidestones) (at the moment priced at €25) prices can drop tremendously (easily below €10). The individual tags can already obtained for under €2, which means that a Dutch nation-wide BLE network can put in operation for cheaper than a Spotify subscription. What is required? Companies that like to jump on the bandwagon of BLE before "all the satellites are launched". Think through the (valuable) critique, think big and execute! Use this type of tech to help millions of people!

## Short update

A short update about what we've been up to at Crownstone.

* You can now receive a message when you enter your home or when you enter a room! This is now thoroughly tested by Alan and will become available next week.
* At the Qurrent Hackathon one of us was part of the winning team, [yeah](https://medium.com/label-a/hacking-the-future-of-renewable-energy-at-the-qurrent-hackathon-a72b7cac925f)! An augmented reality app that playfully introduces kids to energy savings by for example virtually showing the television on fire!
* Developers who build their own Crownstone app and have the newest firmware can already start to use dimming functionality. For everybody else this will arrive in the next release cycle in about three weeks.
* Halloween! Working [hard](https://www.facebook.com/crownstones/posts/704140406438207) on pumpkins!

![Screenshot messages]({{site.url}}/attachments/screenshot-messages-in-home.jpg)
![Screenshot dimming]({{site.url}}/attachments/screenshot-dimming.jpg)


## TEDx Rotterdam

Quite a few people signed up to our meetup ([sign up yourself](https://www.meetup.com/Smart-Home-Bluetooth-Hackerspace/)). If you would like to join us as well and happen to have some time during the day as well, check out [TEDx Rotterdam](https://tedxrotterdam.com/). Get a [ticket](https://www.eventbrite.nl/e/tickets-tedxrotterdam-main-event-37786248687) and enjoy talks from for example [Wouter van Noort](https://www.linkedin.com/in/woutervannoort/) (AI, blockchain), [Jasna Rokegem](https://www.linkedin.com/in/jasnarokegem/) (high tech fashion), [Marcel Schouwenaar](https://www.linkedin.com/in/marcelschouwenaar/) (thingies), [Wienke Giezeman](https://www.linkedin.com/in/wienke/) (thingies in a network), [Jaya Baloo](https://www.linkedin.com/in/jaya-baloo-558492/) (secure thingies), [Emma van der Leest](https://www.linkedin.com/in/emma-van-der-leest-ab493697/) (biodesign). And who wouldn't want a Crownstone happy hour after a TEDx happy hour? :-)

