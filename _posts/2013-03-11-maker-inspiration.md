---
layout: post
title: "Maker Inspiration"
author: remcotukker
description: "The maker movement, from the Nabaztag to RFID"
category: 
tags: ["maker culture", "nabaztag", "rfid"]
---
{% include JB/setup %}

# Maker Inspiration

When browsing through the various blogposts, I noticed that the ideas of DoBots
have many parallels with the [maker culture](http://en.wikipedia.org/wiki/Maker_culture). The maker movement has
quickly been gaining popularity over the past years, and in that respect DoBots is
a typical example of modern engineering culture: we like rapid prototyping, we
build upon existing hardware, use software where appropriate (contrary to all-
hardware solutions), and embrace the open-source principles. Because of these
parallels, I decided to write a short blogpost about two maker-inpired ideas
that are on my (infinitely long) to-do list: coffee cups with RFID tags and
bringing a Nabaztag (version 1) back to live.

###  Nabaztag

![Nabaztag]({{ site.url }}/attachments/nabaztag.jpg "Nabaztag"){: .float-right} 

We keep two comatose [Nabaztag](http://en.wikipedia.org/wiki/Nabaztag) rabbits
in our office from an old project. They still look cute, but their stillness
is sometimes a tad saddening. Therefore, I would like to bring them back to
live and give them a sense of purpose again. Now, this is not a very easy
task, as the number of I/O options on the Nabaztag is rather limited: it has
moving ears, some LEDs, a speaker, and finally, one button. So far, I came up
with the following ideas:

  * Track my computer or internet use in some way and let the Nabaztag give me feedback: encourage me to work harder, or take a break, in a non-obtrusive way
  * Let me know when there is something important to read or when a deadline in my calendar is due
  * Suggest fussball matches or react on the scores
  * Let me know when it might or might not be a good idea to cycle home (rain)

Additional ideas of uses for office-rabbits are of course welcome!

###  Coffee Cups



Working in an office where a significant part of the daily physical exercise
consists of maintaining the flow of coffee from the ground floor to the second
floor, we came up with the idea of embedding RFID tags in coffee cups. This
idea is of course not new, as it is for example used to [keep track of
consumptions](http://www.validfill.com) in coffee shops and restaurants.
However, the office is a much more interesting application space! The main
idea is this: put your cup with pretty (maybe even customized) RFID tag in the
coffee machine, and you get your standard brew without touching any buttons.
Just think of the possibilities and advantages!

![Mug]({{ site.url }}/attachments/mug.jpg "robot mug"){: .float-right} 

  * Getting coffee for colleagues becomes a breeze
  * No germ spreading through coffee machine buttons
  * Pretty, identifying RFID tags on every cup (dishwasher-proof of course)
  * Maybe even find the cup when it is lost
  * Automatic statistics gathered by the Arduino & RFID reader in the coffee machine
  * Connect it to a webserver and have a live coffee consumption leaderboard
  * Automatic machine status messages and requests for refilling, etc. The coffee machine becomes a truly autonomous entity!
  * Overrule standard settings for a particular cup through the internet or coffee machine interface. Use machine learning to predict and learn these deviations.

Of course, one could argue that the same could be achieved with old-fashioned
techniques like color-coded cups, or even barcodes. However, who would want to
switch to a different cup after becoming attached to your own this-coffee-
will-make-me-lucky-drinking equipment? Who could stand the sight of an ugly
barcode stuck on your best desk-friend? And finally, who would use something
as crude as an optical sensor if an elegant and more advanced RF technique is
available? Clearly, it is only a matter of time until such a system will be
employed in every office around the world!


