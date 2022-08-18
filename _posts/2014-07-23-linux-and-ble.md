---
author: annevanrossum
layout: post
title: "Linux and BLE"
description: "Linux and Bluetooth Low-Energy (BLE)"
author: annevanrossum
category: 
tags: [bluetooth smart, bluetooth low energy]
---
{% include JB/setup %}

# Linux and Bluetooth Low-Energy

Although not strictly Linux, Android being a VM on top of a Linux kernel, and iOS being based on top of Darwin, the Unix-like OS from Apple, I just add for your convenience.

## Android

On Android you definitely need the [nRF Master Control Panel](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en). This is a great tool which you can even use to upload new firmware to a device. It is very often updated and seems to be used internally at Nordic as well. Bugs pop up so now and then, but they plet them at a fast rate.

## iOS

A convenient tool on iOS is the app "BLE Utility". It is graphical nice and clean and it shows all services and characteristics you need. You can easily set a characteristic that you have defined yourself on a custom BLE device.

## Ubuntu

There are plenty of BLE dongles you can buy if your laptop (or raspberry pi) does not support Bluetooth Low-Energy, Bluetooth 4, Bluetooth Smart, or iBeacon (whatever they call it nowadays) out of the box. We ordered a few at the well-known online shops.

Type in `hciconfig` before and after you plug in the new dongle.

You probably see something along the lines:

    hci1:	Type: BR/EDR  Bus: USB
    	BD Address: 00:1A:7D:DA:71:13  ACL MTU: 310:10  SCO MTU: 64:8
    	UP RUNNING PSCAN 
    	RX bytes:33907 acl:14 sco:0 events:1406 errors:0
    	TX bytes:1524 acl:18 sco:0 commands:63 errors:0

And another device that represents your good old-fashioned standard Bluetooth radio.

We can reach all new fancy BLE functionality through an old, familiar tool, `hcitool` with function that are now prepended with `le`:

    ✗ sudo hcitool -i hci1 lescan

With the output:

    LE Scan ...
    CF:72:4E:70:A6:DB Crown
    CF:72:4E:70:A6:DB (unknown)

Here you see one of our [Crownstone]({{ site.url }}/products/crownstone)s.

Connecting to it:

    ✗ sudo gatttool -i hci1 -b CF:72:4E:70:A6:DB -I
    [   ][CF:72:4E:70:A6:DB][LE]> connect
    Connecting... connect error: Connection refused (111)

Fails... And now you get a time saving command from me. You first tell that you don't care about your own address, which can be random:

    sudo hcitool -i hci1 lecc --random CF:72:4E:70:A6:DB
    Connection handle 70

    ✗ sudo gatttool -i hci1 -b CF:72:4E:70:A6:DB --interactive
    [   ][CF:72:4E:70:A6:DB][LE]> connect

We can get the services:

    [CON][CF:72:4E:70:A6:DB][LE]> primary
    attr handle: 0x0001, end grp handle: 0x0007 uuid: 00001800-0000-1000-8000-00805f9b34fb
    attr handle: 0x0008, end grp handle: 0x000b uuid: 00001801-0000-1000-8000-00805f9b34fb
    attr handle: 0x000c, end grp handle: 0xffff uuid: 00002220-0000-1000-8000-00805f9b34fb

It might happen that you still get a Connection refused (111) error. In that case, make sure you define that you use
a random address for the gatttool itself.

    ✗ sudo gatttool -i hci1 -b CF:72:4E:70:A6:DB --interactive -t random
    [   ][CF:72:4E:70:A6:DB][LE]> connect

And the characteristics:

    [CON][CF:72:4E:70:A6:DB][LE]> characteristics
    handle: 0x0002, char properties: 0x0a, char value handle: 0x0003, uuid: 00002a00-0000-1000-8000-00805f9b34fb
    handle: 0x0004, char properties: 0x02, char value handle: 0x0005, uuid: 00002a01-0000-1000-8000-00805f9b34fb
    handle: 0x0006, char properties: 0x02, char value handle: 0x0007, uuid: 00002a04-0000-1000-8000-00805f9b34fb
    handle: 0x0009, char properties: 0x20, char value handle: 0x000a, uuid: 00002a05-0000-1000-8000-00805f9b34fb
    handle: 0x000d, char properties: 0x0e, char value handle: 0x000e, uuid: 00002201-0000-1000-8000-00805f9b34fb
    handle: 0x0011, char properties: 0x0e, char value handle: 0x0012, uuid: 00000125-0000-1000-8000-00805f9b34fb
    handle: 0x0015, char properties: 0x0e, char value handle: 0x0016, uuid: 00000124-0000-1000-8000-00805f9b34fb

Of course `help` works. Let us now try to turn on/off the Crownstone with the [BlueNet software running](https://github.com/mrquincle/bluenet). I know that it should be uuid 0x0124 for the characteristic, but let us figure out which handle that is:

    [CON][CF:72:4E:70:A6:DB][LE]> char-desc 0x0015
    handle: 0x0015, uuid: 2803
    handle: 0x0016, uuid: 0124
    handle: 0x0017, uuid: 2901
    handle: 0x0018, uuid: 2904

Apparently handle 0x0016, it is empty on read:

    [CON][CF:72:4E:70:A6:DB][LE]> char-read-hnd 0x0016
    Characteristic value/descriptor: 

However, we can write to it:

    [CON][CF:72:4E:70:A6:DB][LE]> char-write-cmd 0x0016 0xFF

And the switch turns on!

