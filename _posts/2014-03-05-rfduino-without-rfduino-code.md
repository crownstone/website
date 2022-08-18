---
layout: post
title: "RFduino without RFduino code"
description: "RFduino, an Arduino for Bluetooth Low Energy."
category: 
tags: [rfduino, bluetooth low energy]
author: annevanrossum
---
{% include JB/setup %}

# RFduino without RFduino code

The [RFduino](http://www.rfduino.com/) was a successfull [Kickstarter project](https://www.kickstarter.com/projects/1608192864/rfduino-iphone-bluetooth-40-arduino-compatible-boa). Thanks to the fact that it basically is not much more than the nRF51822 chip by Nordic, its form factor is very small. Additional buttons, leds, sensors, etc. can be added by boards that precisely fit its connectors.

The advantage of the RFduino is that it on top of the nRF51822 provides FCC and CE certification, has a thought out antenna design, and has so many boards that function as shields. It is created by the company [RF Digital](http://rfdigital.com/) under the module name RFD51822 and later the RFD22102. Note that there are [other 3rd Party Bluetooth Low Energy vendors](http://www.nordicsemi.com/eng/Products/3rd-Party-Bluetooth-low-energy-Modules) listed on the Nordic site, that have these advantages as well. Besides that, for example the MBDT40 from Raytac Corp has all the 31 GPIO available, while the RFduino only has 7 GPIO pins.

Anyway, interestingly, the RFduino code is not open-source, or most of it is not open-source. This is awkward, given the fact that the guys from RF Digital, started the website <https://www.opensourcerf.com> to indicate their involvement. The RFduino first came with a simple means to upload a binary to the RFduino, namely using the same tool as with most of the other Arduino boards: __avrdude__. Regretfully, after learning that changes to the open-source code in avrdude must be made open-source as well, the developer behind RFduino took all his sites offline (github as well as the forums), and came back online again with a proprietary tool to do so. A very strange move. The bootloader that resides on the RFduino is made proprietary as well, it is not even available in binary form. Interestingly, I saw some wrapper code between the Arduino code and the SoftDevice libraries from Nordic. If anything, these header files should be kept private. On the Nordic forums the employees do not know of any reason why the flash tool or the bootloader has to be proprietary. It seems to run counter any business sense. The more ways the RFD22102 boards can be programmed, the more will be sold from them.

## Programming it ourselves...

There is a lot of information on programming the nRF51822 on the Nordic website and the forums. Most of it however can only be obtained by buying a development or evaluation kit. The development kit comes with a so-called J-Link programmer from Segger, the J-Link LITE CortexM to be precise. Connecting it to the RFduino is not hard. In the following picture you can see how a little breadboard is enough. Here I just took a 9 pins FTSH Samtec connector we had lying around from a previous project (FireSwarm, a swarm of flying robots to find a dune fire). And there is no color coding whatsoever here!

![RFduino]({{ site.url }}/attachments/rfduino.jpg "RFduino connected")

The J-Link comes with a connector with 9 pins, this means one pin is removed (pin 7) to give some asymmetry, very convenient! The pin layout is like this:

    VTref 1 * * 2  SWDIO / TMS
    GND   3 * * 4  SWCLK / TCK
    GND   5 * * 6  SWO / TDO
    --    7 o * 8  TDI
    NC    9 * * 10 nReset

So, power the RFduino from an external source on 3.3V. The 3V and GND pins are nicely indicated on the RFduino. And then there are only three pins you have to connect. The VTref measures if the RFduino has actually enough power and must be connected to the 3V pin. The two other pins to connect are the SWDIO and the SWCLK pins. The SWDIO is connected to the RESET pin on the RFduino, the SWDCLK to the FACTORY pin.

Now, if you download the code at [github](https://github.com/mrquincle/bluenet) you will get a project with a Makefile that calls scripts in the `scripts` directory. Most of the code is thanks to Christopher Mason, only the adaptations to support RFduino are mine. To program with the J-Link, you will need the JLinkExe binary and for debugging the JLinkGDBServer binary. You can download them from [segger.com](http://www.segger.com/jlink-software.html).

The current code requires a lot more love, but the beginning is there. In this movie you can see how the LED on the RGB RFduino shield reacts on the signal strength with an Android smartphone. 

{% youtube 9rnCdWl4mto %}

Note, that if you use this code and flash the RFduino, there are two things you will have to keep in mind. First, the SoftDevice, in this case the S110, is proprietary. It comes with the development kit (of 100 bucks) from Nordic. You will not be able to use Bluetooth without it. I would not recommend starting to program your RFduinos without buying it. Second, you won't be able to get back to the standard RFduino software. This would require the RFduino people to make certain information public, especially where it expects the SoftDevice and how it interfaces with it. This is not the same as providing open-source software, but also this information is not available. So, consider this a one-way direction. :-)

Now we are in full control of our RFduinos. We can create our own Bluetooth characteristics, services, etc. We know which timers are used. We can take full advantage of the system that ARM uses to have peripheral devices communicate with each other without using the CPU for example. They use besides the well known interrupts, entities like "events" and "tasks" to do this, pretty neat.

For us, we'd like to experiment with the new SoftDevice, the S120. Contrary to the S110, this SoftDevice allows mixing central and observer roles. This means it becomes possible to develop wireless sensor networks type of functionality. What is also really interesting is its support for wireless charging. More can be read in [Nordic's press release](http://www.prnewswire.com/news-releases/nordic-semiconductor-announces-bluetooth-smart-solution-for-rezence-wireless-charging-and-the-s120-8-link-central-role-bluetooth-low-energy-softdevice-for-the-nrf51822-enabling-charge-pads-with-support-for-simultaneous-charging--236655491.html).

So, why using the RFduino at all? Its advantages are still there: certification, many extension boards, and a nice antenna design. We would like to concentrate on very rapid prototyping of services, such as a **Lost & Found service**, rather than spending too much time on the electronics itself.

## Crownstone

Make sure you take a look at our [Crownstone]({{ site.url }}/products/crownstone) offering. This is directly based on the nRF51822 and open-source for real. :-) So, this uses the code at github for [BlueNet](https://github.com/mrquincle/bluenet) as indicated above. If you want to have more details on how to program the different SoftDevice versions from Nordic etc., feel free to file an issue there. Also, look around if you want to get more information on Bluetooth Low-Energy in general, as for example in this blog post about [Linux and BLE]({{ site.url }}/2014/07/23/linux-and-ble/) or on the [iBeacon-type of device]({{ site.url }}/2014/07/15/ble-dobeacon-a-virtual-memo/) we build (with respect to software!) for [WOTS](http://wots.nl). To be clear, the services on top of the Crownstone that require a larger part of machine learning and artificial intelligence will not be open-source. If you think we do not communicate that properly, feel also free to suggest improvements in wording!

