---
layout: page
title: Indoor Localization
header: Indoor Localization
description: "The different forms of indoor localization."
keywords: "indoor localization, presence sensing, proximity, ranging, iBeacon"
group: Landing
markdown: true
permalink: indoor-localization/
---
{% include JB/setup %}

# Indoor Localization

There are many ways in which localization can be done and we would like to give an overview that would quickly guide you through the pros and cons of each method.

## Proximity

Most iBeacon solutions run sofware on a smartphone that detects if the user is in proximity of the beacon. There is no indoor localization involved.

Advantages:

* Very little software development.

Disadvantages:

* The user has to carry a smartphpone with an app.
* Only knowledge about the proximity of a user is known to the app.

## Fingerprinting

In the Crownstone at home setting, an AI (artificial intelligence) resides on your phone. Currently, this entity is not particularly intelligent, but it is meant to become smarter over time. One of the components of this AI is a so-called classifier. The AI initiates the user to walk around in a predefined (labeled) room. The AI collects Bluetooth Low Energy signal strengths (RSSI values). If a user covers the room while this is done the AI has collected a set of those RSSI values for a wide diversity of locations within the room. Each item in this set belongs to the same label "living room". The classifier has as task to pair a set of RSSI values with the proper room label.

Advantages:

* Works already with only a few Crownstones (four and up)
* No metric information required (no need to measure distances between Crownstones)
* Accuracy can be addressed by the user. People can retrain if they move furniture, do remodelling, etc.
* Room-level accuracy can be obtained (at around 1.5 meters).

Disadvantages:

* The user has to carry a smartphone with an app.
* RSSI values are different per phone model and per individual phone (smartphone covers, cases, etc. slightly disturb BLE signals). Part of this might be solved by so-called *transfer learning*, in which an AI on one phone learns from an AI on another phone. However, that is a non-trivial problem.
* In daily operation the smartphone has to listen to RSSI values all the time (in the background). This can be done, although it requires background location permissions achieve continuous listening on iOS devices. However, regarding battery life it needs to be taken into account that listening costs energy, even if it is not much. 

Things to consider:

* Messages have to be sent as unconnectable iBeacon messages to be received by iPhones per iBeacon specification. This means that smart home devices such as Crownstones need to toggle between connectable BLE messages and unconnectable iBeacon messages.

## Region monitoring

There is a particular option in iOS available that allows an app developer to only have information flowing to the app when a user enters or exists a particular region. The data in an iBeacon message contains a proximity UUID, major, and minor number. When a particular proximity UUID is registered, the app can monitor for it. It cannot scan all available iBeacon broadcasts and then pick on to listen to. The software framework in iOS, called Core Location, limits the number of regions to 20. An app is not able to simultaneously monitor more than 20 regions. This means that if every room gets its own UUID or major/minor and is defined as an individual region, it is only possible to have 20 rooms in total for a particular user.

There are several ways to circumvent this:

* Use the **four-color theorem**. Each beacon can be assigned a different region compared to its neighbours as long as their are four distinct regions. With twenty regions, this should be enough. However, this also requires little overlap between these regions and the beacons should transmit only weakly. This is a conflict, because after a region enter event it is still necessary to do some ranging (using the positions of multiple beacons) to improve the localization. If there are only a few beacons visible during ranging, the accuracy is dramatically reduced.
* A **dynamic update** of the major/minor list. On the smartphone continuously adjust the 20 major/minor numbers to reflect the neighbours of a particular region the user is residing. Note, this does not adjust the beacons themselves (which would not work with multiple users). It only adjust the list-to-look for on the phone. This will work for most cases, except if a user can enter for example more than 20 different buildings. In that case additional information, for example Wifi or GPS is required to update the list.

Advantages:

* Potentially less battery consumption than with fingerprinting.

Disadvantages:

* The user has to carry a smartphone with an app.
* Assuming no additional ranging, only an accuracy defined by typical BLE transmission distance is available. This can deviate from 20 to 70 meter. This is a level of accuracy that defines a building or a wing of a building, but not much more.
* Circumventing the 20 region limit is hard in practice. 
* There are all kind of edge cases and noise often screws up the application. Region enter and exit events are easily missed. 
* When telling an app to monitor for certain iBeacon region while the app is in the background, it will not always keep the app active in the background.

## In-network tracking

There is no reason to only rely on the capabilities of smartphones. It is possible to use active beacons that scan for BLE devices. Smart watches, fitness bands, etc. all emit BLE signals that can be picked up by active beacons. To perform proximity based solutions the data has to be communicated through some kind of mesh from the active beacons to a hub and to the internet. To perform indoor localization information from multiple active beacons has to be merged either in the network or on the internet. In-network tracking henceforth is nowadays most often only proximity based. 

Advantages:

* The user can wear a BLE wearable rather than a smartphone.

Disadvantages:

* A BLE wearable might not always transmit BLE messages. For example when it is connected to a smartphone it might stop sending regular messages. This means that each BLE wearable has to be checked upon its compatibility.
* The information needs to go through a BLE mesh network, a gateway, and the internet. This means that this information has high latency.




