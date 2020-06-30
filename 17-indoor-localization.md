---
layout: page
title: Indoor Localization
header: Indoor Localization
description: "The different forms of indoor localization."
keywords: "indoor localization, presence sensing, proximity, ranging, iBeacon"
group: Landing
markdown: true
social-image: images/localization/trilateration.png
permalink: indoor-localization/
---
{% include JB/setup %}

# Indoor Localization

There are many ways in which localization can be done and we would like to give an overview that would quickly guide you through the pros and cons of each method.

## Proximity

Most iBeacon solutions run software on a smartphone that detects if the user is in proximity of the beacon. There is no indoor localization involved.

![Proximity]({{ site.url }}/images/localization/proximity.png)

Advantages:

* Very little software development.

Disadvantages:

* The user has to carry a smartphone with an app.
* Only knowledge about the proximity of a user is known to the app.

## Fingerprinting

In the Crownstone at home setting, an AI (artificial intelligence) resides on your phone. Currently, this entity is not particularly intelligent, but it is meant to become smarter over time. One of the components of this AI is a so-called classifier. The AI initiates the user to walk around in a predefined (labeled) room. The AI collects Bluetooth Low Energy signal strengths (RSSI values). If a user covers the room while this is done the AI has collected a set of those RSSI values for a wide diversity of locations within the room. Each item in this set belongs to the same label "living room". The classifier has as task to pair a set of RSSI values with the proper room label.

![Fingerprinting]({{ site.url }}/images/localization/fingerprinting.png)

Advantages:

* Works already with only a few Crownstones (four and up)
* No metric information required (no need to measure distances between Crownstones)
* Accuracy can be addressed by the user. People can retrain if they move furniture, do remodeling, etc.
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

![Region monitoring]({{ site.url }}/images/localization/region_monitoring.png)

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

![In-network tracking]({{ site.url }}/images/localization/in_network.png)

Advantages:

* The user can wear a BLE wearable rather than a smartphone.

Disadvantages:

* A BLE wearable might not always transmit BLE messages. For example when it is connected to a smartphone it might stop sending regular messages. This means that each BLE wearable has to be checked upon its compatibility.
* The information needs to go through a BLE mesh network, a gateway, and the internet. This means that this information has high latency. In contrast, if the information is only used locally, the latency can be very low. For example, a Crownstone can react extremely fast on incoming iBeacon messages (even faster than normal because no connection process is required).
* A BLE wearable might not be able to transmit a BLE message that is identifiable. This also requires a check on compatibility. If there is full control encrypted BLE messages can be send. If there is no complete control, it might be possible to send identifiable BLE messages, but they won't be encrypted (which means other entities might be able to track as well if they build BLE scanners).

## Trilateration

By creating a single map with the positions of all beacons on that map, it is possible to perform trilateration. This is often called triangulation, however trilateration uses the BLE received signal strengths, not angles (and Pythagoras).

![Trilateration]({{ site.url }}/images/localization/trilateration.png)

Advantages:

* Quite accurate positioning possible.
* Trilateration is a very well known problem with many off-the-shelf solutions.

Disadvantages:

* All locations of beacons have to be put on an accurate (metric) map.
* If beacons change position this has to be noted and adjusted on the map.
* The app on the phone has to get a map from a building before being able to perform positioning.
* The metric positions (indoor GPS coordinates) have to be mapped to semantic labels (e.g. meeting room or hallway).

## Simultaneous localization and mapping

Simultaneous localization and mapping is a technique from robotics in which - in this case - the map (locations of beacons) are automatically discovered by the smartphones localizing themselves. This is an incrementally improving method. First the locations of the beacons are wrong. However, by knowing things about the movement of smartphones (e.g. the smoothness of a trajectory), the system learns which beacons are close to each other and which are not.

![SLAM]({{ site.url }}/images/localization/slam.png)

Advantages:

* Quite accurate positoning possible.
* No need to put the beacons on a map.

Disadvantages:

* Difficult algorithms with a lot of corner cases.
* The metric positions (indoor GPS coordinates) have to be mapped to semantic labels (e.g. meeting room or hallway).

# Other points

There are a lot of other things that can improve the positioning or the user experience. It is possible for example to use odometry information (movement or lack of movement of a smartphone) to improve the positioning accuracy (both in resolution and in latency). The use of accelerometer, gyroscope data however also has an influence on battery life. Besides that there are additional sensors that can be used on a smartphone. A camera is an obvious possibility. Less well-known is the possibility to use small deviations in a smartphone's compass. Those small deviations are typical for metal in the environment and thus typical for particular locations within a building. At Crownstone we will always use whatever becomes available to provide state-of-the-art localization results.
