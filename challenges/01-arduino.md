---
layout: page
title: Arduino & Crownstone
header: Pages
description: "Arduino compatible Crownstones"
keywords: "arduino development, crownstone, job, internship, intern, challenge, application"
kramdown: 
  parse_block_html: true
markdown: true
local_css:
  - syntax.css
background-image: banner-arduino-pcb
permalink: challenges/arduino/
---
{% include JB/setup %}

# Arduino

At Crownstone we are developing the first open source smart switch. With our Crownstones you can easily and affordably create your own smart home. We believe a **Smart Home** should blend in the background and function independently. This means a smart home should be automatic, something current 'smart' switches are not. Therefore they are just that: switches. 
    But by coupling iBeacon technology and a switch we can know where you are in your house and switch the Crownstones accordingly. This opens up a whole world of possibilities! 
    
But there is more. What if you, the users, can create their own behaviour and couple their own creations to the crownstones?
One of the things that would be valuable is to run Arduino code on the Crownstone. It is possible to be Arduino compatible on a hardware level (regarding pin layout) or on a software level. This text concerns compatibility on a software level. This means that applications written with the .ino extension in the Arduino editor can run on the Crownstone itself.

Code to toggle a Crownstone device would then look for example like this:

~~~ c
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin RELAYS as an output.
  pinMode(RELAYS, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(RELAYS, HIGH);   // turn the RELAY on (HIGH is the voltage level)
  delay(60000);                 // wait for a minute
  digitalWrite(RELAYS, LOW);    // turn the RELAY off
  delay(60000);                 // wait for a minute
}
~~~


## Specific tasks

This means the following:

* Make Arduino compatible with the **nRF52**. See the work of Sandeep, the main developer behind "Noble", node + BLE. You can find this on [github](https://github.com/sandeepmistry/arduino-nRF5).
* Add the proper **Board Manager** options to the Arduino GUI.
* Make sure that a new user can **seamlessly download** the right **toolchain** (cross-compiler, etc.) for the nRF52.
* Use **DFU** (update over the air rather than using OpenOCD/JTAG or any other solution that uses wires).
* Add **header files** that interface parts of our firmware to the Arduino user. For example, the dimming and switching functionality, as well as power measurement, etc. Not all functions or data structures should be exposed.
* Make sure that the relevant headers can be accessed from the loop() function in the Arduino code and that everything relevant has been **initialized** before.
* Write it such that it easily can be **merged** with master.
* Extend it such that it can also be easily used with [Platform IO](https://platformio.org/platformio-ide) or other platforms that are used by the community.

{% include snippets/email subject="Arduino developer inquiry" prefix="If you would like to work on this, you can reach us at " postfix="." %}

## What would be possible

Once the Arduino implementation is realised, people could start using their Crownstones to do a variety of tasks. For example: 

* Switch devices based on **electricity prices**;
* Switch/dim a light in your room when someone rings the (Arduino) doorbell;
* Switch/dim lights based on **outside conditions** (ambient light measuring) or even your mood;
* Turn on your lights when you open a door: add extra sensors (senses!) to your Crownstones.

For more inspiration about what is possible check out the Raspberry Pi CM-3 Home at [interesting engineering](https://interestingengineering.com/this-device-gives-users-the-power-to-program-their-own-smart-home) or [Guiott](http://www.guiott.com/). 

## You like to contribute anyway as an open-source developer

If you have no time to do an internship but would like to work on the project, feel free to go ahead as well. You can start from our open-source code base at [github](https://github.com/crownstone/bluenet).

If you love to work on this, send us a message to get a discount on the [shop](https://shop.crownstone.rocks).

## You like to contribute, but you are not a developer

There are very few open source hardware products! If you support our cause, the best way to help us, is to advocate for our products and solutions, and even better buy them yourself ([shop](https://shop.crownstone.rocks)).


