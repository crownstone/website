---
layout: post
title: "A signal from outer space!"
description: "Home automation using Bluetooth Low Energy devices requires us to understand that technology much better using tools such as Ubertooth and Wireshark."
tags: [home automation, bluetooth low energy, ubertooth, wireshark]
author: annevanrossum
---
{% include JB/setup %}

# A signal from outer space

Smart homes is just a phrase, but at Crownstone it means that we are actually developing an AI (artificial intelligence) that can do justice to this word "smart". An AI that will gradually understand your behavior and wishes. 

To communicate with these new types of "intelligences" is a very interesting experience. What do they understand? What are their limitations? From the perspective of the AI it is very important to have eyes, ears, and hands to be able to help us. If an AI does not know where we are, how can it then ever warn us, protect us, do stuff for us, communicate with us!?

An interesting example of communicating with another form of intelligence can be see in the movie Arrival. It's a nice interplay between learning symbols, grammar, meaning, but also the order with which you want to place concepts in a larger context. How will an AI look at the world if it only gets "search requests" as input?!

{% youtube tFMo3UJ4B4g %}

 How does the world look like for our AI? To understand it a little better, we have to delve into one of its sensors, the Bluetooth radio!
 
## Bluetooth Signals

 The Crownstones receive Bluetooth Low Energy (BLE) messages on a frequency of 2.4 GHz. This is the same frequency as WiFi (although nowadays you also have 5 GHz routers). To snoop up BLE messages we use the so-called 
[Ubertooth](https://hakshop.com/products/ubertooth-one). We namely encountered strange behavior in the arrival frequency of BLE messages from Crownstones configured as
Eddystones (Google beacons)
versus the ones configured as full Crownstones. So, Ubertooth to the rescue! Let's see how these things communicate!

![Ubertooth]({{ site.url }}/attachments/ubertooth-device.jpg "Ubertooth device"){: .float-left width="42%" style="margin:4%"}
![Wireshark]({{ site.url }}/attachments/wireshark-results.jpg "Wireshark results"){: .float-right width="42%" style="margin:4%"}

 Regretfully, the Ubertooth hardware is a little bit dated and we saw even more messages dropped or malformed in 
[wireshark](https://www.wireshark.org/). It took a while before we realized we were looking at malformations not so much due to problems on a wireless level, but on a USB connection level!

On Linux you can use commands like `bluetoothctl` nowadays and finally Dominik found the culprit: a big difference between messages that advertised the devices as connectable or non-connectable! Certain Android phones (depending on their BLE chipset) are not able to receive "connectable" messages at a high rate. We need these message on a high rate so we can localize people swiftly. Quick thinking: let's use non-connectable messages only!

 Alas! A Crownstone cannot advertise as just a non-connectable device because this has as side-effect that it can't send so-called "scan responses". These responses we definitely need because we use them to update the user about Crownstone information (such as energy use) without requiring the phone to set up a slow connection! Apart from that, it's kind of handy to be connectable if you actually want to switch or dim something! Finally we get to a solution! Interleave sending connectable and non-connectable messages!

 We're glad that we can speak to you in English, not Bluetoothish!
 
## Assembly Signals!

The first 100 Crownstones we have assembled at our office! We namely need to obtain information about the assembly process. What's going fast? What can be improved? Can our assembly instruction be improved?

![Assembly]({{ site.url }}/attachments/assembly-peet.jpg "Assembly Peet"){: .float-left width="42%" style="margin:4%"}
![Assembly]({{ site.url }}/attachments/assembly-marc.jpg "Assembly Marc"){: .float-right width="42%" style="margin:4%"}
![Assembly]({{ site.url }}/attachments/assembly-bart.jpg "Assembly Bart"){: .float-left width="42%" style="margin:4%"}
![Assembly]({{ site.url }}/attachments/assembly-dominik.jpg "Assembly Dominik"){: .float-right width="42%" style="margin:4%"}


 Also, the packaging arrived! It's super cool, but let's keep it secret for now!

## Installation Signals!

 A few of the very early backers are currently testing Crownstones at home, to make sure we will offer you all the best experience possible! For the plugs this will be relatively simple. However, if you have ordered built-in Crownstones we can imagine that you like to get some installation advice!
 We are working together with
[ConComCow](http://www.concomcow.nl/)
to realize a part of the Real Life Learning roadmap for students at
[Techniek College Rotterdam](https://www.techniekcollegerotterdam.nl/).
Our society needs to train people to obtain a combination of social and technical skills! We call this the "social mechanic" (sociale monteur). It is frustrating to have a technician coming to your home who doesn't actually address the real problem you have!

<p style="text-align: center">
<a href="mailto:team@crownstone.rocks?subject=I like to get free installation advice" class="button-link" style="display: inline-block; margin-left: auto; margin-right: auto">I like to get free installation advice!</a>
</p>

 Please, click the button above if you like to be part of this! The students will have two roles:
 Observe how people in general interact with new technology.
 Give you advice about Crownstone and other smart home technology and how to make best use of it!
 The remaining plugs will be sent out before Christmas! You will be contacted in person. So, this is about the builtin Crownstones in particular. Do you want free installation advice or like to have students over, please, click the button!

## Hacking Signals!

We joined the 
[Robots at your Service hackathon](https://robots.devpost.com/). A 48-hour hackathon that inspires people to think about technology in the life of the elderly. After listening to 80 year olds complaining about tech in their lives, we knew what to do! Let them punch these useless robots! The 
[FrustyBot](https://devpost.com/software/frustybot)
was born! Hit the shapeless robot on a string and when your frustration boils over, it will helpfully reach out to a friendly human to guide you through yet another app on your swipe machine ("veegmachine" as one of the elderly eloquently baptized the smartphone).
  
   People can punch the FrustyBot to get rid of frustrations!

{% youtube lujYHeVDm9M %}

## More Signals!
   
We're super happy that our team got additional expertise in bringing Crownstone to the market in the person of 
[Alexander Weisz](https://www.linkedin.com/in/alexanderjweisz)
as COO! Alexander has a lot of experience in business development, building organisations, startups and with a lot of heart for sustainability and high-tech.

 To translate our technology-driven vision of a future that Crownstone foresees into down-to-earth applications Alexander will be an essential team member!
    
