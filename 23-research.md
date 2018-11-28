---
layout: page
title: Research
header: Research
group: Research
permalink: research/
keywords: [research, artificial intelligence, machine learning]
markdown: true
---
{% include JB/setup %}

# Research into truly smart homes
    
![Jarvis]({{ site.url }}/attachments/jarvis.jpeg "Jarvis, an AI for your home"){: style="max-width: 30%"}{: .float-right}

At Crownstone we incorporate artificial intelligence or more old-fashioned machine learning techniques
in our products to create really smart homes. A smart home does things for you automatically. A smartphone app that
only provides you with yet another option to control a light is not what Crownstone is after. It would mean that
you have to unlock your phone, open the right app, navigate to the right screen, and click the right button. That can
be accomplished much easier by just flipping a light switch. No, we want that your home responds to your presence
without you having to do anything!

For that we develop **resource-constrained artificial intelligence** (AI) which resides on the embedded chips on the Crownstones themselves - plus taking into consideration bandwidth and latency - on the smartphones, and in the cloud. If you just have bought a Crownstone system, one of the first interactions with the AI is to give it a name (see the screenshot at the right). This is all cool, but what are the capabilities of the AI that we are developing?
There are multiple research directions:

1. In-network localization.
2. Appliance identification.
3. Device-free presence detection.
4. Recognition of activities of daily life.
5. Speech programming.

## In-network localization

Most technological solutions use the smartphone to localize itself. However, there is another, better way to do 
localization if you have a network of Crownstone available. That is to use the Crownstones themselves to pinpoint
the location of a person with a smart device. This has the following advantages:

* The smartphone only has to broadcast. This is a function that it can *reliably perform in the background* in contrast
to continuous scanning. Especially Android phones might kill an app that is continuously scanning in the background.
* Again, the smartphone only has to broadcast. This means that it only has to send a message from an independent and
low-energy chip. No computations on-board! This has tremendous benefits for *battery life*!
* Smart devices, for example, *wearables* such as Fitbits, Jawbones, Apple Watches only need to broadcast as well. 
This means you can walk around in your home with just your watch. 
* You can also attach an iBeacon to a valuable, so you quickly *find* out in which room it is! Or you can set a *reminder* to 
not forget your wallet or handbag if you leave the house!
Even simple beacons can be used (they can be as cheap as three dollars) for asset tracking. 
* If you set up a connection over Bluetooth, even with an iPhone, this takes around two seconds. If you enter a room 
and the lights have to switch on, this happens only after a noticeable delay. In contrast, if the network itself can
decide what happens if a person enters a room, the *latency* can be reduced significantly.

Our current research on indoor positioning does not yet address in-network localization:

- Human SLAM: Simultaneous Localization and Configuration (SLAC) of indoor Wireless Sensor Networks and their users (Wouter Bulten, 2015, [pdf](https://crownstone.rocks/attachments/thesis/wouterbulten.pdf))

![SLAC overview]({{ site.url }}/attachments/slac-overview.png "SLAC overview"){: style="max-width: 100%"}

## Appliance identification

The Crownstones measure current and voltage simultaneously at high frequencies. If an appliances is plugged into a 
Crownstone the current curve is not a perfect sine wave. The curve is distorted depending on the type of appliance 
plugged in. This distortion can subsequently be used to identify that particular device.

- Deep Learning for Device Identification (Jasper Makkinje, 2018, [pdf](https://crownstone.rocks/attachments/thesis/jaspermakkinje.pdf))

In the above thesis you see that deep learning is used to perform appliance identification. 
Here below you see for example the current consumption of a laptop over a single curve on 50 Hz (which means 20 ms). 
You see that it is quite spiky, quite different from a normal resistive load! The [PLAID](http://www.plaidplug.com/)
data set is also a very good source for high resolution current and voltage data (30 kHz) for a set of 11 devices.

![Laptop current consumption]({{ site.url }}/attachments/laptop_current_consumption.png "Laptop current consumption"){: style="max-width: 100%"}

The reason to have appliance identification is manifold:

* If Crownstones automatically detect which device is plugged in, the user does not need to configure anything. This 
is immediately corresponding to our vision where we want to do things for people rather than having people to cope with
our technology.
* If an iron or electric kettle is recognized and is not turned off after a significant period of time, it should be
turned off. This makes someone's house safer! Especially useful for people who are forgetful.
* If no adult is around (which is known through our Crownstone positioning), but children are playing grown-up, 
dangerous situations can be avoided. Quick appliance identification can recognize if a drill or iron is plugged into a 
socket and decide to not turn it on (or send a message to the adult).

## Device-free presence detection

A very futuristic scenario is the identification of the presence of people while they do not carry a device whatsoever.
Due to the disturbances caused by people who absorb part of the electromagnetic waves the 2.4GHz spectrum (of Wi-Fi
and Bluetooth Low Energy) gets distorted. Our first preliminary experiments (see thesis below) demonstrate that it is
indeed possible to recognize the presence of a person. It is indeed preliminary. A person needs to walk in between two 
Crownstones breaking a virtual beam. 

- Evaluation of Machine Learning techniques for Passive Presence Detection (Andreas Sofos, 2017, [pdf](https://crownstone.rocks/attachments/thesis/andreassofos.pdf))

It is quite promising that recently researchers from the University of California used ordinary Wi-Fi to accomplish
indoor positioning as well. Check this [medium post](https://medium.com/syncedreview/seeing-through-walls-with-adversarial-wifi-sensing-attack-and-defence-strategies-7ee2559a7f8)
on the techniques they used. So, what would be the reason to have device-free presence detection?

* Device-free presence detection does not know *who* someone is. However, it is useful to know if anyone is present.
For example, the Crownstones can then function as a burglary system!
* People do not always carry a smartphone or wear a wearable. In the bathroom, for example, you might just have 
presence detection as with a standard motion detector. However, this time you do not have to install anything
additionally. Crownstones are enough.

## Recognition of activities of daily life

Even without Crownstones it is possible to use information about device use, light use, and other patterns to make 
your home smarter. This is especially useful for elderly people. Lights, coffee machine, vacuum, etc. can all be used
like normal. However, when for example an elderly person slips and falls down, the house might recognize that 
something is off. For example, the light in the bathroom stays on for a prolonged time. Algorithms in the cloud can
use high-level data on the use of appliances and lights to detect if there is an anomaly with respect to normal 
activities in the house. In the thesis below deep learning (auto-encoders) are used to detect if something is out of the
ordinary.

- Anomaly detection using auto-encoders for Ambient Assisted Living (Riccardo Bellana, 2018, [pdf](https://crownstone.rocks/attachments/thesis/riccardobellana.pdf))

## Speech programming

Crownstone wants to make your home smarter. To configure your home through your smartphone is a necessary evil. Since
December 2018 Crownstone can be controlled from an Alexa device. Control is nice, but we want something more. It 
would be great to actually tell Crownstones to perform certain actions when you enter the room. This means that you
can program or configure the Crownstones by speech. Moreover, if the AI is turning on a light, you might 
wonder: "Why are the lights turned on?". This type of retrospection is yet another level of intelligence that would be
awesome for our customers!

A first implementation can be found in the thesis below:

- Configuration of Ambient Environments by speech (Nanne Wielinga, 2018, [pdf](https://crownstone.rocks/attachments/thesis/nannewielinga.pdf))

## Other topics

There are other topics that we have studied in the past. For example distributed control of fridges for demand response
on the grid. More can be found in the Crownstone [hall of fame](https://crownstone.rocks/hall-of-fame/).


