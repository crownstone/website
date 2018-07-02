---
layout: page
title: App Help
header: Crownstone Apps
group: Landing
permalink: app-help/
background-image: banner-app.jpg
kramdown: 
  parse_block_html: true
---
{% include JB/setup %}

{% include snippets/row-begin %}
{% include snippets/column-begin colsize="12" %}

# App Help

The app itself is self-explanatory. However, if there are particular questions coming in we will use them to answer them on this page.

{% include snippets/faq-group-begin %}

{% include snippets/faq-begin ref="faqHelp" question="Where can I find help?" dontcollapse="in" %}

Apart from this list of questions, there is also a "Help" in the app itself. You will find it in the app menu.

{% include snippets/faq-end %}

{% include snippets/faq-begin ref="faqNewStone" question="How to add a Crownstone in the app?" %}

Open the Crownstone app, just in the general overview. Now power on the Crownstone (plug it in). Keep the phone **really close** and this means **really** close. You will see a blue icon flashing. This is the Crownstone discovered by the phone. Click on it and read the instruction for setup. After this procedure you are the digital owner of the Crownstone and you can decide who is allowed to use it.

{% include snippets/faq-end %}

{% include snippets/faq-begin ref="faqShow" question="What to do when a Crownstone does not show up?" %}

Make sure that the Crownstone is powered and that your smartphone is really close to it. During setup mode the Crownstone
transmits very quitely so other people cannot claim your Crownstone!

If the Crownstone still does not show up, you might want to try a recovery procedure. This is a factory reset 
procedure that will clear all the data on the Crownstone. The state of the Crownstone will be subsequently as if was
just obtained from the store. The factory reset procedure is called a "recovery" (see below).

{% include snippets/faq-end %}

{% include snippets/faq-begin ref="faqDimming" question="How to enable dimming lights?" %}

You can enable dimming for particular lights in the app. Of course, do not try to dim something that is not a light. 
Also, not every light can be dimmed. A halogen lamp is like an incandescent lamp but with a much longer lifetime. If you
dim a halogen lamp it gets the lifetime of an ordinary bulb. That would not be nice! Also, some LEDs cannot be dimmed.
This depends on the electronics made by the LED manufacturer. If a LED can be dimmed this is normally stated on the
packaging.

{% include snippets/faq-end %}

{% include snippets/faq-begin ref="faqSphere" question="What is a sphere?" %}
                                
One basic concept the Crownstone app introduces is the **sphere**. A sphere is a loosely connected group of Crownstones, a little bit like a 
[circle on Google+](https://support.google.com/plus/answer/6320407?hl=en),
a 
[page on Facebook](https://www.facebook.com/help/104002523024878),
or a 
[list on Twitter](https://support.twitter.com/articles/76460).
A very logical sphere is your home. Another logical sphere is your office. However, nothing prevents you from defining a sphere that is not confined to a single physical space. Access rights are defined on the level of a sphere. This makes it easy to give other people access to select groups of Crownstones that you own.

{% include snippets/faq-end %}

{% include snippets/faq-begin ref="faqLocalization" question="How to enable indoor localization?" %}
                                
If you have four or more Crownstones in a single sphere, there will be an icon at the top-left that allows you to initiate teaching your home the rooms that are available. Each room gets a little sign that indicates that it can be taught. It is important not to place the Crownstones too far from each other. They have to be a maximum of 10-20 meters apart, preferably in adjacent rooms. Currently the indoor localization is disabled if in a room not enough Crownstones are visible. This is due to the fact that the current machine learning method cannot cope yet with seeing less Crownstones. The training itself is by walking around in the room when pressing a big round button in the interface. You can subsequently couple actions to the interface if you enable Beta functionality.

{% include snippets/faq-end %}

{% include snippets/faq-begin ref="faqFlashing" question="I tried turning off my LED light and it is still on (or flashes intermittently). Is this to be expected?" %}

This is a known issue. The current version of the Crownstone plugs (not the built-in version) implements a filter that allows small amounts of current to pass through to the device that's plugged in. Normally this is no issue, but nowadays ther are LED lights that are so efficient that they can still function using this tiny bit of current. The next version of the Crownstone plug will not have this behavior, but will be functionally completely equivalent. 

{% include snippets/faq-end %}

{% include snippets/faq-begin ref="faqInstallation" question="How to install the built-in Crownstones?" %}

Installation of the built-in Crownstone should be exactly as indicated in the installation manual included in every package (see also below). What is very important to do is to pre-bend the wires. Strip the wires at 7-9 mm. It can be at 7 mm if you have standard 2.5mm^2 wires of which the plastic fits snugly into the connector. You should not have thicker wires such as 6mm^2 (because these are meant for 32-40A appliances).

![Crownstone installation manual behind a light switch]({{ site.url }}/attachments/installing-crownstone-light.png){: style="width:100%"}

Note that the [wire coloring](https://en.wikipedia.org/wiki/Electrical_wiring) is different in each country. More importantly, in your home the colors might be actually incorrect! Never rely on the colors!

It is always recommended to switch the **live** line. The Crownstone switches between 1 and 4. The connectors 2 and 3 are shorted internally. The numbering is as follows: (1) live to load (to the light), (2) neutral to load, (3) neutral from source (from the wall/grid), and (4) live/phase from source. 

{% include snippets/faq-end %}

{% include snippets/faq-begin ref="faqFactoryReset" question="How to perform a factory reset of the Crownstone?" %}
                                
Due to security reasons you cannot always perform a factory reset. A factory reset is only possible the first **20 seconds** after you have powered the Crownstone. After that initial period it will not be possible to perform a factory reset. You will have to cycle the power off and on again to perform a factory reset at a later stage. 
The factory reset option is a final resort. The option you will find in the application at the "Help" menu. Navigate to "What to do if...", and "I need to recover a Crownstone". You see there a button you can press: "Recover Crownstone".

{% include snippets/faq-end %}

{% include snippets/faq-group-end %}

**Note:** Click on the questions to expand (and click again to collapse) the answers.

{% include snippets/column-end %}
{% include snippets/row-end %}
