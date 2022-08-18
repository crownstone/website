---
layout: post
title: "The devilish dilemma of supporting Android and iOS with BLE"
description: "Android and iOS both are able to address BLE products, but the implementation for smart home is not obvious at all."
tags: [bluetooth low energy, android, ios, home automation, apple homekit]
author: annevanrossum
---
{% include JB/setup %}

# Apple Homekit

[Apple Homekit](http://www.apple.com/ios/home/) is Apple's attempt to define a solution for smart devices at home. From a security perspective developers have to solve one important problem. Normally a smartphone add-on such as a Fitbit, Apple Watch, Jawbone, Sony Watch, Estimote, Stick-n-Find, etc. is owned by the person owning the smartphone. There is no need to share your Apple Watch with friends or family. This is entirely different with smart home products. The owner of a home needs to be able to give access to household members and visitors! 

## Share the keys to connect to trusted devices

It is possible to securely connect to a Bluetooth Low Energy (BLE) device over a long time period by storing encryption keys. The smartphone considers such devices with which it has bonded as so-called **trusted devices**. To be able to use the trusted device of someone else it is important to get access to the key of that person. Apple does not give the developers access to these keys. The user can indirectly give another user access to his or her keys by [inviting someone via their iCloud address](http://www.imore.com/how-share-homekit-access-other-people-guests-or-housemates). 

The problem with this approach is the following. Suppose, you have an iOS device, but someone in your extended family, a guest, or your butler, or cleaning lady has an Android device. For the developer of this BLE device, there is no way to extract the keys, transfer them to a person owning an Android device, and have that person able to switch your lighs, etc. You do not own your own keys in the sense that you can access and share them in every context.

## Notifications

Not being able to cater to Android users is a big deal. However, there are other decisions that are made by Apple which corner the user in ways people do not need to be cornered. One of the issues is that "notifications" from HomeKit-compatible products are disregarded by iOS [depending on the device type](http://time.com/4480681/apple-home-homekit-notifications/). It is for example possible to be notified by smart locks and security systems, but not by a door or window sensor. 

Moreover, a message from a device has to travel across the entire internet before ending up at another device in your home. The main feature of the Crownstone products is their presence sensing capability. The Apple design would enforce that after the detection of your presence in the living room, that information needs to go all the way to Cupertino and back to be able to switch on your lights. Not only does this introduce unacceptable latencies, but it introduces a dependency on the internet that is unnecessary. A good engineer solves things locally if they can be solved locally. 

The Crownstone user interaction paradigm introduces artificial intelligence in the home. Your home is gonna react to your presence. The idea to have the user use the smartphone as a fancy remote control device seems quite limited. 

## Bluetooth specification

The alternative to trusted devices is to use untrusted devices and introduce encryption at the application layer. It is important not to roll your own encryption. For example AES-128 or AES-256 is a common encryption method. Seagate had a nice technology paper about the pros and cons of AES-128 (but not available anymore). It is important to think about where and how to store these keys! Most systems are not hacked because of the cryptographic mechanism itself, but the management and deployment of the keys. Additional security measures that can be taken are things like (1) broadcasting very weakly when in factory settings, so only a person in close proximity can set up a new device, (2) making sure that the keys are accessible by nothing else except for the right smartphone apps.

To be able to connect to untrusted devices the Bluetooth specification is a little bit vague with respect to caching. On Android and iOS the BLE services are discovered through calling a `.discoverServices()` method. This then subsequently queries the BLE device for services. These services are represented by attribute handles. To be able to quickly connect to a BLE device without having to discover all services on each connection attempt, it is possible to use attribute caching. The cache contains the handles and the smartphone can directly send a message to a particular handle, for example to turn on the lights. 

The specification makes a distinction between trusted and untrusted devices with respect to caching. For an untrusted device is should not be expected that the cache is preserved between subsequent connection requests. At the blog of [PunchThrough](https://punchthrough.com/blog/posts/attribute-caching-in-ble-advantages-and-pitfalls) you can see the developers struggle with this behavior when they brought in a new device with new services. They didn't encounter the whole story though due to the fact that they only worked with trusted (Bean and Bean+) devices.

The bluetooth specification says this (Vol 3, Part G, 2.5.2 - Attribute Caching):

    Note: Clients **without** a trusted relationship must perform service discovery on each connection if the server supports the Service Changed characteristic.

In other words, a smartphone should clear the cache after a disconnect with an untrusted device. This is correctly implemented by Samsung, but incorrectly by Sony, HTC, One Plus One, and Apple (see e.g. this [issue](https://code.google.com/p/android/issues/detail?id=81130)). 

To be able to very quickly switch on a light when someone enters a room, latency is one of the most important aspects of the entire system. You don't want to walk into a dark room! Due to Occam's razor we have always been testing our system on phones where the above is implemented incorrectly! That is, on smartphones that do cache handles, even if they actually should perform a discovery process of around 1.5 seconds. 

Regretfully there is no way to force a device to use a cache if it performs a physical discovery process. The other way around wouldn't be a problem (you can always force a discovery process by cleaning the cache using [reflection](http://stackoverflow.com/questions/22596951/how-to-programmatically-force-bluetooth-low-energy-service-discovery-on-android)).

## Key management

The [August locks](https://jmaxxz.com/blog/?p=550) use keys on the lock itself as well as on the server. AES is symmetric and August implemented the [just works](https://github.com/jmaxxz/keymaker/wiki/BLE-Session) key exchange mechanism from Bluetooth. This means that a passive listener during setup can extract these keys. Note that there are two ways to cope with this:

1. The user should be the **owner** of the keys. This means the user should be able to extract the keys. The keys can be on the air, the keys can be on the phone, the keys can be in the firmware. This also means that we should not protect the keys against the user, but only against third parties. If the keys are on the air, it is important that the signal strength is reduced: someone extracting the keys needs to be next to the person setting up the device. If the keys are in an app database, it is important that the containerization on Android and iOS works properly so another app cannot access the data. 

2. The user should **not** be the **owner** of the keys. Then we can start talking about "leaking keys to the user". In this paradigm it makes sense to use asymmetric keys: public and private keys. The servers can distribute public keys to the devices that are able to encrypt stuff. The server has the private keys and nobody else. Everything of value needs to go through the servers. Even if someone extracts the firmware from the device he or she will only get the public key. This works really nice for something like a Fitbit or Jawbone device that only streams data to you. If you want the device to do something, it will also need to decrypt an encrypted message to it and have some kind of key (a symmetric or private one) available to it.

The lesson from this: there are many ways a reverse engineer - in the end - will be able to get access to the keys. The key is transmitted from a server to a phone via https, then something is used (yes, preferably [Elliptic curve Diffie-Hellman](https://en.wikipedia.org/wiki/Elliptic_curve_Diffie–Hellman)) to send it wirelessly to the device, and finally it sits in FLASH at that device. The most conservative assumption is to assume that the user will be able to get hold of the keys.

Then what happens if the user is the owner of the keys? 

* In the case the user is not just the admin, but a guest or visitor, it means that you have situations in which you want to **undo** your decision to give someone access to your home. If you have normal keys (the ones that fit in a physical lock), you will have to make new keys if your ex is a stalker. You can never be sure if that person made some spare copies! On every modification in which access gets restricted you will have to deploy **new keys** to all the devices concerned.

Note that a secure infrastructure will have all kind of corner cases that need to be tackled. What happens if some of the devices in a home have new keys, but not all of them yet? What happens if a firmware update gets aborted? How is the state of which device has which key reflected online?

