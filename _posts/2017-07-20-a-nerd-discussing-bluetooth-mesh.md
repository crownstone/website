---
layout: post
title: "A nerd discussing Bluetooth Mesh"
description: "A nerd discussing Bluetooth Mesh"
tags: [bluetooth, mesh, provisioning, keys]
author: annevanrossum
---
{% include JB/setup %}

# Bluetooth Mesh

Finally! The long awaited [Bluetooth Mesh specification](https://www.bluetooth.com/specifications/mesh-specifications) is out!
The specification exists out of three parts:

* [Profile](https://www.bluetooth.org/docman/handlers/downloaddoc.ashx?doc_id=429633)
* [Model](https://www.bluetooth.org/docman/handlers/downloaddoc.ashx?doc_id=429634)
* [Device](https://www.bluetooth.org/docman/handlers/downloaddoc.ashx?doc_id=429635)

# Provisioning

The mesh network has two types of keys: at the *network* layer and at the *application* layer. Not having the first 
key type means that you can't send anything into the mesh. The second key type can govern application specific control 
(like turning on/off lights) and is different for locks, bulbs, etc..

Separation of these two types of keys means that nodes can partake in the sending and receiving of encrypted messages 
because they are authenticated on a network level. They do not need to actually know the content of these messages to
be an effective relay.

## Provisioner

There is an entity that is talked about as if it is some centralized device, the provisioner. It is able to add
unprovisioned devices to the mesh, at which point they are called nodes. It should be done by a "bearer", in other 
words, people should walk around. There is a GATT-based bearer that can be used on a smartphone.

## Sequence number

There is a sequence number of 24 bits to prevent replay attacks. This means that if a device emits a message every
second it takes half a year to get to the same number. In the specification they state optimistically that emitting
once every five seconds is a **fairly high frequency for known use cases**. 

## IV index

There is an interesting procedure around a so-called IV index which serves as an entropy renewal mechanism. As soon as
for example the above sequence number of 24 bits rotates, a node can initiate an IV index update procedure. There are
several attacks envisioned: (1) IV index increments larger than 42 should be ignored, (2) an IV update procedure should 
not occur more often than once every 192 hours (8 days). That means reprovisioning is required when a node is offline
for `192*42/(24*7)=48` weeks. I'm curious what happens if a node initiates an IV update procedure much more often than
the prescribed once in 8 days.

## Trash can attack

When a node is removed from the network, all remaining nodes should update their keys. It means all the network keys
and application keys are updated. This is initiated by so-called secure network beacons: a particular type of message.

# Structure

There are several other things that might be interesting to the developer.

* "Friendship" is possible between neighbouring nodes to reduce the amount of time that needs to be listened.

* There is a lot of "routing". It is possible to use unicast addresses, group addresses, and broadcast addresses.

* There is a notion of multiple elements per node. That means that the elements on a dual-socket power strip might be
individually addressed.

* The lower transport layer defines segments to be able to define data chunks that are larger than a single packet. 

* There is a heartbeat to monitor nodes on the network and discover how far nodes are apart from each other.

* There is a publish-subscribe mechanism.

* Encryption is using AES-CMAC and there is a network nonce, application nonce, and device nonce (and proxy nonce).

# Firmware updates

On a firmware update, a node must be reprovisioned if the number of elements on a node changes. Firmware updates are
a glaring omission from the documents. One of the key features of [nRF OpenMesh](https://github.com/NordicSemiconductor/nRF51-ble-bcast-mesh)
by Nordic is the ability of sending firmware updates through the mesh. It is absolutely horrible to suggest people
to walk around their "smart homes" in case a firmware update has been issued. Curious if this is gonna be addressed
next!

# People

The people that worked on it and are explicitly mentioned in the documents are:

* [Robin Heydon](https://www.linkedin.com/in/robinheydon), Qualcomm ([twitter](https://twitter.com/robinheydon))
* [Jonathan Tanner](https://www.linkedin.com/in/jgtanner), Qualcomm
* [Victor Zhodzishsky](https://www.linkedin.com/in/victorzhodzishsky), Broadcom, Cypress
* [Wei Shen](https://www.linkedin.com/in/weishenprofile), Ericsson
* [Christoffer Jerkeby](https://www.linkedin.com/in/jerkeby), Ericsson
* [Bogdan Alexandru](https://www.linkedin.com/in/alexandruandreescu), NXP, LM Technologies
* [Martin Turon](https://www.linkedin.com/in/martinturon/), Nest / Google
* [Robert Hughes](https://www.linkedin.com/in/rdhughes/), Intel
* [Marcel Holtmann](https://www.linkedin.com/in/holtmann), Intel
* [Brian Gix](https://www.linkedin.com/in/briangix), Intel
* [Szymon Slupik](https://www.linkedin.com/in/slupik), Silvair
* [Piotr Winiarczyk](https://www.linkedin.com/in/piotr-winiarczyk-90b90269), Seed Labs, Silvair
* [Danilo Blasi](https://www.linkedin.com/in/danilo-blasi-53a89a6), STMicroelectronics
* Yao Wang, IVT Wireless 
* Rustam Kovyazin, Motorola
* [Uday Agarwal](https://www.linkedin.com/in/uday-agarwal-04984938), Cypress, Talentica
* [Vasilii Aleksandrov](https://www.linkedin.com/in/vasilii-aleksandrov), Motorola, Sreda Software Solutions
* [Leon LC Ko](https://www.linkedin.com/in/leon-lc-ko-71b08540), MediaTek
* [Omkar Kulkarni](https://www.linkedin.com/in/omkarck), Cypress
* [Elaine Mar](https://www.linkedin.com/in/elaine-mar-9083), California Eastern Laboratories
* [Gerard Harbers](https://www.linkedin.com/in/gerard-harbers-4a12584/), Xicato
* [Clive Feather](https://www.linkedin.com/in/davros/), Samsung

I think it's nice that they are mentioned and they deserve credit for their work! Thanks!
