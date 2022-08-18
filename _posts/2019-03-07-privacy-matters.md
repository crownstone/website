---
layout      : post
title       : "Privacy matters."
description : "Privacy matters. It is not guaranteed!"
tags        : [privacy, privacy matters, heidegger, product lifetime]
author      : annevanrossum
picture     : attachments/blog/heidegger.jpg
excerpt     : "When we enter a hotel room in a new country the small changes that normally get unnoticed suddenly get noticed. Dan Hill cites Timothy Morton: '*the light switch seems a little closer than normal, a little differently placed on the wall*'. Technology should be seamlessly integrated in our environment."
---
{% include JB/setup %}

# Power outages

When we enter a hotel room in a new country the small changes that normally get unnoticed suddenly get noticed.
Dan Hill describes this in a [post](https://medium.com/a-chair-in-a-room/let-there-be-light-switches-4652485e6a7e)
where he cites Timothy Morton: "*the light switch seems a little closer than normal, a little differently placed on the wall*".
Technology should be seamlessly integrated in our environment. Smart lights such as the Philips Hue should not automatically turn
on [after a power outage](https://www.howtogeek.com/fyi/philips-hue-bulbs-no-longer-turn-on-automatically-after-a-power-outage/).
The reason for this peculiar behavior is simple. The Hue lamps behind a switch can be turned off at the switch.
They cannot be used [simultaneously](https://huehomelighting.com/can-still-use-existing-light-switches-hue/).
However, of course we as humans want our light switches to work and be able to control them digitally.
That's why our [switchcraft solution](https://crownstone.rocks/2018/03/13/switchcraft-and-dimming) is not just a nice feature.
Morton describes this in terms from Heidegger (see below): the [behavior of a] light switch should not be *vorhanden*, oppressively obvious, but 
*zuhanden*, simply ready-at-hand, routine.

![Heidegger]({{ site.url }}/attachments/blog/heidegger.jpg){: style="width:100%"}

A nice overview about what happens when the power goes out is spelled out at [howtogeek](https://www.howtogeek.com/403888/what-happens-to-your-smarthome-when-the-power-goes-out/).
In summary, it is not so much different from a normal house. Especial care has to be taken of smart locks. The article
uses some handwaving, but the perfect solution has three components: 1) it can be hooked up to the grid for day to day
use, 2) it has a rechargeable battery that allows it to function during a power outage, and 3) it uses [NFC energy harvesting](https://www.iloq.com/en/worlds-first-nfc-powered-lock-invention-turns-phone-also-power-source/)
for cases when its battery has run out. 

# Privacy matters

Crownstone's [ethical policy](https://crownstone.rocks/ethical-policy/) states that our users own their own data. 
Yes, if you want to, you can share data online, but this is not done by default. 
How this will impact the decisions of everyday users remains to be seen. 
An interesting experiment - coined **Someone** - has been performed by [Lauren McCarthy](https://www.engadget.com/2019/02/08/lauren-mccarthy-someone-alexa-artist/),
an assistent professor at the University of California (UCLA). For two hours a day four homes were "live" in the sense
that they could control lights, appliances, etc. by calling for "someone" (people on the internet) in the same way as you would call
Alexa or Google. On the other side, people could act like a human Alexa and monitor the household members. An interesting
observation in the article is that the deep human need to feel understood might be behind our tendency to overshare.

![Alias cover for an Alexa or Google Home speaker]({{ site.url }}/attachments/blog/alias_cover.jpg){: style="width:100%"}

Another very interesting project is [Alias](https://www.theverge.com/circuitbreaker/2019/1/15/18182214/amazon-echo-google-home-privacy-protection-project-white-noise),
an open-source hardware project that functions as intermediary between you and your smart speaker. It continuously 
broadcasts white noise preventing the smart speaker from hearing anything. As soon as it hears its own wake word it 
wakes up Alexa or the Google Home speaker by playing "Alexa" or "Hey Google" over its internal speakers. After that you
use the system as usual. 
Note that this also protects against [voice attacks](https://www.nytimes.com/2018/05/10/technology/alexa-siri-hidden-command-audio-attacks.html)
because now a wake word has to be guessed. Of course, also a particular voice can be trained, which would introduce another 
line of defense. 
The Alias 3D files and software can all be found on [github](https://github.com/bjoernkarmann/project_alias). You can 
train its wake up sentence with anything up to 2 seconds. If you start to experiment with it, be careful not to annoy
your housemates with picking their name!

# Lifetimes

Would there be ways in which we as consumers would benefit from more and more data that gets collected? This [hackaday](https://hackaday.com/2019/02/05/what-happened-to-the-100000-hour-led-bulbs/) article 
describes the days from the Phoebus cartel, an international organization formed by the world's light bulb manufacturers in 1924.
The cartel dictated a 1000 hour bulb life, even though previous bulbs could burn for up to 2500 hours. A documentary, "[The Light Bulb Conspiracy](https://www.youtube.com/watch?v=kdHIqa53-tY)", describes this planned for obsolescence. The question arises, is this still happening? From the article we learn several things. First, the driver circuitry is most often the cause of failure. Second, component lifetime is still our best guess on overall product lifetime (for example the temperature that the caps can withstand). 
How can we counter bad actors? The industry has standards like [LM-80](https://www.eetimes.com/document.asp?doc_id=1280235#), but it does not assess critical aspects like the heat sink, the driver, or the housing. 
If we would be able to measure lifetimes independently from the manufacturer, this would be a really nice tool for consumer unions. Smart plugs and sockets would be able to deliver exactly this data.

At Crownstone we are working all the time on improving lifetimes of our products. Did you known that a [green solder mask](http://www.seeedstudio.com/blog/2017/07/23/why-are-printed-circuit-boards-are-usually-green-in-colour/) 
is physically superior to other colors? Traditionally, green pigments were used so visual inspection was less tiresome to the eyes. R&D pushed these pigments to their limits and commercial green solder mask henceforth has still a lead compared to alternative colors. 

![Energy efficiency]({{ site.url }}/attachments/blog/energy_efficiency.jpg){: style="width:100%"}

Lifetime is not the only thing that matters. Energy effiency is just as important. At times it is better from a sustainability point of view to replace a device than to keep it running wasting energy. To help you calculate the energy label for LEDs we added a small [calculator](https://crownstone.rocks/energy-efficiency/) to our website. Check yourself if the label on that LED is actually correct!

# What else is happening?

A global perspective on our smart homes, our privacy, upcoming artificial intelligence, and what this means for us:

* [Facebook](https://techcrunch.com/2019/02/06/why-am-i-seeing-this-ad/)'s "Why am I seeing this?" will include info about *who* uploaded your contact data.
* [Newsletters](https://craigmod.com/essays/newsletters/) can be seen as the antidote to quick Instagram posts when done properly!
* The consequences of [Apple's airpods](https://www.theatlantic.com/technology/archive/2018/06/apples-airpods-are-an-omen/554537/) in the [battle for attention](https://thefrailestthing.com/2018/06/15/were-reading-fahrenheit-451-wrong/), an interpretation of Ray Bradbury's book "Fahrenheit 451" (1953).
* Ron Wyden, a democratic senator [proposed a bill](https://trofire.com/2019/02/08/democrat-proposes-jail-time-for-tech-companies-who-steal-your-data/) to enforce jail time for tech companies stealing your data.
* If you run [Home Assistant](https://data.home-assistant.io/) as your smart home platform, there is now a portal for data scientists!
* An [autonomous startup](https://techcrunch.com/2019/02/11/softbanks-next-bet-940m-into-autonomous-delivery-startup-nuro/), Nuro, raising short of 1 billion euros, in this case to deliver goods at home.
* The NSA released in a very good open-source reverse engineering framework, Ghidra.

# Meet us

![Beurs Eigen Huis]({{ site.url }}/attachments/blog/beurs_eigen_huis.jpg){: style="width:100%"}

In a couple of weeks you can meet us in person at Jaarbeurs Utrecht (booth B1.47). Ask us for free tickets! The fair is 
called [Beurs Eigen Huis](https://www.realiseerjedroomhuis.nl/crownstone/) and relevant for anyone buying a new house,
building a new house, or doing any kind of reconstruction.
