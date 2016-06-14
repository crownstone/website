---
layout: post
title: "I'm Busy: the app that keeps up your status"
description: "I'm Busy: the app that automatically keeps up your status"
tags: [BLE, iBeacon, xmpp]
author: bartvanvliet
---
{% include JB/setup %}

# I'm Busy: the app that keeps up your status

We made a simple [app](https://play.google.com/store/apps/details?id=nl.dobots.imbusy) that can notify others when you're busy.
It's made for elderly people who, for example, don't want to be interrupted while they're in the bathroom.

The app uses Bluetooth Smart beacons (which includes iBeacons) to localize itself. The iBeacon protocol is also
supported by our [Crownstones](https://crownstone.rocks), so we naturally used those!
When you're near such a beacon, it will set your status to busy.
In the app you can see the status of your friends, and when you call someone who's busy, it will notify you that he/she is busy.

Here are some screenshots of the app:

![Contact list]({{ site.url }}/attachments/imbusy-screenshot-contacts.png){: style="width: 280px"}
![Calling a busy person]({{ site.url }}/attachments/imbusy-screenshot-calling.png){: style="width: 280px"}

# Technical details

In order to get your status to friends, we make use of XMPP, since it's a nice protocol that has many (open source) implementations.
For the app, we used [Smack](http://www.igniterealtime.org/projects/smack/index.jsp), which now easily runs on Android (before, you had to use aSmack).
XMPP sped up development, as it already provides authorization, keeps up contact lists, and synchronizes the status.

To scan for beacons, I used our own [bluenet android library](https://github.com/dobots/bluenet-lib-android).

And of course, you can find the source code on [GitHub](https://github.com/dobots/imbusy-app).
