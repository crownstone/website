---
layout: post
title: "BLE, doBeacon, a Virtual Memo"
description: "Bluetooth Low Energy, the iBeacon, the WOTS app, the Virtuele Memo, and how it all comes together."
category: 
tags: []
author: annevanrossum
---
{% include JB/setup %}

# What is this iBeacon stuff?

Bluetooth Low Energy is becoming largely available. At DoBots we have always promoted technology that can hitchhike on the success of smartphones and other personal devices around smartphones. The use of Bluetooth Low Energy (BLE), also called Bluetooth Smart, is therefore one of our core technologies.

It is quite remarkable that the Bluetooth consortium allowed Apple to claim an extremely impoverished subset of the BLE standard and call it iBeacon. This term [iBeacon](https://en.wikipedia.org/wiki/IBeacon) is a trademark and cannot be used without an [iBeacon License](https://developer.apple.com/ibeacon/). These kind of products are in the market at 3 for €100,- at [Beaconic](http://www.beaconic.nl/buy-beacons/), 3 for $100,- at [Estimote](http://estimote.com/), 3 for $116,- at [Tōd](http://todhq.com/purchase.html). This is exactly the same technology as for example the crowdsource funded [stick-n-find](https://www.sticknfind.com/store.aspx), which comes with 4 in a package at around $90,-. 

Perhaps it is worth to explain how little Apple did. The standard BLE specification divides the spectrum into channels. There are 37 channels for data communication, and there are 3 channels for advertising. The advertising channels are spread over the spectrum to be resilient against interference on the crowded 2.4GHz band (where also normal Bluetooth and Wi-Fi resides). There are actually two modes of operation, let's call the first mode [simplex](https://en.wikipedia.org/wiki/Simplex_communication) and the second mode [duplex](http://bit.ly/1qcD5RX) according to the telecommunication tradition. In simplex mode there is a broadcasting party and a receiving party. Broadcasting in BLE is called **advertising**, and receiving is called **scanning**. The duplex case is handled by classical master-slave roles. Now, we encounter a nice property of BLE: A device might only support an advertising mode and hence only requires circuitry for the transmission of messages. This is exactly an iBeacon with respect to *hardware* required. Subsequently, the content of the message that is sent in the BLE-dictated advertising mode is up to the user. Here Apple got a brilliant invention on par with the wheel, the steam engine, the laser, the transistor... Namely, sending an *identifier* within an advertising message. :scratching_head_icon:

Okay! We can do that of course. Our code for the [nRF51822](https://github.com/mrquincle/bluenet) builds on top of code by Christopher Mason, is open-source, and can do already much more. You can start experimenting with this code if you buy a [Nordic development kit for the nRF51822](https://www.nordicsemi.com/eng/Products/Bluetooth-R-low-energy/nRF51822-Development-Kit), which is around €100,-. Note, that you absolutely do not need that if you only want to communicate with iBeacons!

Our super-elaborate technology to be able to use advertising for proximity purposes, we call **doBeacon**. This is one of the functionalities you will find in our [crownstone](http://dobots.nl/products/crownstone.html) product.

# Virtual Memo

The [WOTS](http://wots.nl), World of Technology & Science, conference, will be held in Utrecht, the Jaarbeurs. It is [free](https://registration2.n200.com/survey/0o33vcrxufeeo?check=1) and allows you to see our technology at our stand! With a consortium of companies we are creating a gadget for visitors, which is called the [Virtuele Memo](http://wots.nl/gadget-virtuele-memo). It is meant as an electronic Post-it® that you can use to leave messages as on say a fridge, such as "Please, don't forget the milk, honey!", or a reminder for yourself such as "Hairdresser time!". 

{% youtube e6o2Mrdqt5g %}

A very short clip with flashing LEDs. This is to be expected of a movie shot by an engineer. :-)

The Virtual Memo (or Virtuele Memo in Dutch), surprise!, uses BLE functionality. It is exactly a beacon as described before. So, how can you leave messages? This is done through the internet. Your phone comes in close proximity to the fridge, and a note that you want to attach to it, is uploaded to a server. By the way, this is is the [CommonSense](http://www.sense-os.nl/developers) internet-of-things infrastructure from Sense, the sister company of DoBots. Okay, so, suppose now your roommate is coming home. Her phone will come in proximity with the Virtuele Memo on the fridge. It will then contact the server and download new messages for her. The app on the phone can be very energy-efficient in this way. It only needs contact with a server when it gets a trigger over BLE. 

DoBots is responsible for developing the smartphone application. It is based on [Cordova](https://cordova.apache.org/), so it uses HTML, CSS, and Javascript on the phone. Cordova is the codebase at the Apache Software Foundation, and originally developed by Adobe/Nitobi under the name PhoneGap (which still exists under its own name). See for the entire story this blog post at [PhoneGap](http://phonegap.com/2012/03/19/phonegap-cordova-and-what%E2%80%99s-in-a-name/). This means it can run on Android and iOS both! We decided upon making our application open source, so you can find it at [https://github.com/almende/virtuele-memo](https://github.com/almende/virtuele-memo). This software makes use of e.g. the [commonsense-javascript-lib](https://github.com/senseobservationsystems/commonsense-javascript-lib) and a [BluetoothLE](https://github.com/mrquincle/BluetoothLE) plugin for Cordova.

# BLE and Beyond

DoBots does not believe that the IP (intellectual property) resides on the level of such applications. But again, our technology offering is around services that can make use of BLE technology on a large scale, such as the [crownstone](http://dobots.nl/products/crownstone.html), which has the potential to become ubiquitous. This means namely that interesting algorithms, hence, nice IP, are required, for example: 

* recognition of **activities of daily living** (ADLs) to support independent living (only anomalies are communicated to family, and finally caretakers, see also the [PPATS project](http://ppats.wordpress.com/))
* recognition of devices, **standby power killers**, but also standby for an **entire building** without turning off the fridge!
* indoor localization, the use of multiple doBeacons for more **accurate positioning**

For indoor localization often scenarios are described that are a bit fancy. However, in a business context, knowing which facilities are in use, really saves money! Cleaning unused offices should be a lot cheaper!

If you want to know in general why DoBots puts so much effort in consumer electronics such as BLE, come also to one of the [seminars](http://wots.nl/elektronicatrendsindtoepassing/) at WOTS. Anne van Rossum is going to talk about [smart factories](http://wots.nl/slimme-fabriek/) in the [industry](http://wots.nl/elektronicatrendsindtoepassing/) where also connections will be made with Almende projects such as [ARUM](http://www.almende.com/arum) which focus on agile manufacturing. 

