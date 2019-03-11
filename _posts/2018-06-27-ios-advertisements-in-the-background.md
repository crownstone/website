---
layout: post
title: "iOS advertisements in the background"
description: "Reliable iOS advertisements in the background"
tags: [ios, reverse engineering, background, advertisements, BLE]
author: annevanrossum
picture: attachments/ble-background-advertisements.png
excerpt: "Developers have a hard time to cope with iOS advertisements as soon as the app goes into the background mode. However, it is possible to scan for devices, it just requires more in-depth knowledge."
---
{% include JB/setup %}

# iOS advertisements in the background

![UUID broadcast screenshot]({{ site.url }}/attachments/broadcast-uuid-ios-screenshot.png){: .float-right style="width:20%"}

Mobile phone developers have a hard time to use iOS advertisements when an app goes into background mode. However, with Crownstones we can receive all kind of BLE messages over the air. It is possible to receive data from iOS devices. It just requires more in-depth knowledge. A perfect challenge for Crownstone!

You can find many developers stating this problem (and no solutions) on StackOverflow:

* [Advertising with iBeacon when app is in background](https://stackoverflow.com/questions/20121342/advertising-with-ibeacon-when-app-is-in-background)
* [Run iPhone as an iBeacon in the background](https://stackoverflow.com/questions/18944325/run-iphone-as-an-ibeacon-in-the-background?rq=1)
* [iOS - iBeacon - Advertise (Broadcast) as beacon in Background after iOS 7.1 update](https://stackoverflow.com/questions/24509822/ios-ibeacon-advertise-broadcast-as-beacon-in-background-after-ios-7-1-upda)
* [CoreBluetooth advertising in background on iOS 10](https://stackoverflow.com/questions/39624045/corebluetooth-advertising-in-background-on-ios-10)
* [iOS BLE peripheral / advertisement data in background mode](https://stackoverflow.com/questions/15476132/ios-ble-peripheral-advertisement-data-in-background-mode)
* [BLE : Advertising of UUID from background iOS app](https://stackoverflow.com/questions/29418388/ble-advertising-of-uuid-from-background-ios-app) (I've added my answer there)

Somehow nobody started to actually look at the bits send over the air... People know that one iPhone can receive 
these UUIDs from another iPhone, so it is interesting that no one actually tries reverse engineering the "protocol".

# Sniffing

There is a so-called overflow area according to [Apple documentation](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanager/1393252-startadvertising?language=objc). More information can be found in this archive page about [Core Bluetooth concepts](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/CoreBluetoothBackgroundProcessingForIOSApps/PerformingTasksWhileYourAppIsInTheBackground.html). 
I've sniffed the packets over the air. You can read the details on [github](https://github.com/crownstone/bluenet-ios-basic-localization/blob/master/BROADCASTING_AS_BEACON.md). What iOS does is broadcasting custom packages with particular bits representing UUIDs. For example UUID `3333` is represented by a bit going up in the BLE package. 

> 04 3E 24 02 01 00 01 8C 91 A0 AD 8F 40 18 02 01 1A 14 FF 4C 00 01 00 00 00 00 00 00 00 02 00 00 00 00 00 00 00 00 D3 

You see here `02` somewhere surrounded by zeros (preceding `D3` the 8-bit RSSI value).
Every UUID is one-hot encoded to a bit in this range. This will lead to collisions. You will notice that if you send `1001` by one iPhone and scan for `3333` by another iPhone you will receive the advertisements as if UUID `3333` is sent. 

Note, you see that this message is sent as a connectable, undirected BLE packet. It is not a scan response. However, this is on iOS 10. On iOS 12 the type of the packet has changed to a scan response. This has quite an impact on the receiving side which now has to send out scan requests. Pity!

# Results

In the following figure is seen how reliable to advertisements arrive over the weekend. Three iPhones have been sending advertisements when the app was in the background. The first sending UUID `1000`, the second sending UUID `FFFF`, and the third sending UUID `3333`. 

![BLE advertisements in the background]({{ site.url }}/attachments/ble-background-advertisements-3.png)

Time is on the x-axis (over a couple of days). The interval between messages is plotted on the y-axis. You see that at times the intervals are a multiple of 0.2 seconds. 
The pictures are almost the same. The differences only become visible by zooming to shorter timescales. 
This means that this is an artifact from the laptop receiving the messages. The iPhones are broadcasting probably even more robust than this! Over the entire weekend the battery drop is like 25%, which has very likely to do with other things than broadcasting the BLE messages (checking wifi, movements, and other background processes).

# Application

You can download an application that runs on a computer with a 64-bit Linux operating system. You will need the following files.

* [lescan_crownstone]({{ site.url }}/attachments/binary/lescan_crownstone)
* [libble++.so.5]({{ site.url }}/attachments/binary/libble++.so.5)

To use install prerequisites, such as `sudo apt install libbluetooth`. Check with `ldd ./lescan_crownstone` in case you miss other libraries on your system.

Run the `lescan_crownstone` binary with a comma-separated list of UUIDs:

    sudo LD_LIBRARY_PATH=$LD_LIBRARY_PATH:. ./lescan_crownstone -u 1000,3333,FFFF

Note that `LD_LIBRARY_PATH` only needs to be added when the linker cannot find the `libble++.so.5` library in the local path.

# Mapping

The exact mapping from UUIDs to the bit mask in the overflow area has been reverse engineered by Crownstone. If you are interested in this functionality, we can provide that under a suitable license.

# Support / Disclaimer

For all people who want to know more... Or have particular issues with their operating system. 
We do not provide support for this functionality!
If you cannot make it work, then please look somewhere online for help! We are extremely limited in time and need all
of it for our open-source solutions at [github](https://github.com/crownstone/). Thank you for your consideration!
