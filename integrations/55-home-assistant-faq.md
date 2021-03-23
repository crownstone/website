---
layout           : page
title            : "Questions from Home Assistant users"
header           : "Questions from Home Assistant users"
description      : "Crownstone brings the functionality of switch, dimming, and persence information using Crownstones to Home Assistant"
markdown         : true
background-image : banner-ha-faq.jpg
permalink        : integrations/home-assistant-faq/
---

{% include JB/setup %}

# Crownstone for Home Assistant users

The steps to set up the integration of Crownstone with Home assistant are described in this [page]({{ site.url }}/integrations/home-assistant/). Below we provide the answers to frequent questions that Home Assistant users have when using the integration with Crownstone. 

{% include snippets/faq-group-begin %}


{% include snippets/faq-begin ref="faqHAInternetConnection" question="Does Crownstone require an internet connection in the daily operation?" dontcollapse="in" %}

When Crownstones are switched from a smartphone there is an immediate Bluetooth connection towards the Crownstone. If the given Crownstone cannot be reached directly from the smartphone, intermediate Crownstones can communicate the commands over a Bluetooth mesh. 
If your smartphone is not present at home, there will be no connection towards the Crownstone. Unless you have a hub, or if someone else from your sphere is at home.

{% include snippets/faq-end %}


{% include snippets/faq-begin ref="faqHAInternetConnectionGeneral" question="Does Crownstone require an internet connection at all?" dontcollapse="in" %}

Yes, for now at setup we require an internet connection to store your account data online as well as the keys you will need to invite other users. This means that if you lose your smartphone you will still be able to get access to your home. 
The cloud also contains information about rooms, the stones themselves, and rules on the stones. This means that if you invite other people, they don't have to configure anything themselves.

{% include snippets/faq-end %}


{% include snippets/faq-begin ref="faqHAInfoInternet" question="Is there information sent to the internet?" dontcollapse="in" %}

By default Crownstone puts as little information online as possible. For example, there is no information on energy use online. However, there are several types of information in the cloud.

For example, information about your location will be sent to the cloud if you have the app setting "Use indoor localization" turned on. This allows people in your household to see where you are. If you do not want this information to be shared, you can disable it under a toggle in the Crownstone app, namely through **"Privacy - Share location".** If it is disabled, third-party integrations that use indoor localization (such as e.g. Olisto or Homey) won't work anymore.

Likewise, by default the state of a switch (and with that the state of the light attached to it) when actively controlled from the smartphone app will be synced to the cloud. You can also disable this through **"Privacy - Share switch state".** This type of state information is typically required by voice assistants such as Google Home. If it is disabled, the voice assistant will still operate, but it won't get feedback if commands are successful.

![App]({{ site.url }}/images/ha-app-privacy.png "Crownstone app: Privacy settings" ){: .img-center}{: style="max-width: 60vw"}

{% include snippets/faq-end %}


{% include snippets/faq-begin ref="faqHAHub" question="If I have a Home Assistant hub, how can it react to someone's presence?" dontcollapse="in" %}

How you can set up rules is described in this [page]({{ site.url }}/integrations/home-assistant/). For example, starting a Spotify list when someone enters the living room. To be able to control Crownstones locally, there is a Crownstone [dongle](https://shop.crownstone.rocks/products/crownstone-usb-dongle).

Cloud-only (without dongle) you can:
- Switch Crownstones
- Dim Crownstones
- Get state updates in Home Assistant when switching from the Crownstone app (this means not every state update will be visible)
- Switch multiple Crownstones at once

With the dongle you can do the above, plus you can:
- Switch Crownstones without noticeable delays
- Get state updates in Home Assistant when using the light switch with "Switchcraft"
- Switch Crownstones independently (no smartphone in proximity required)
- Access to the state of power usage & energy usage entities (without a dongle the state of them will be unavailable since no data is being received)

![Dongle]({{ site.url }}/images/cs_dongle.png "Crownstone dongle" ){: .img-center}{: style="max-width: 60vw"}

{% include snippets/faq-end %}


{% include snippets/faq-group-end %}


You can also visit this [page](https://github.com/crownstone/crownstone-home-assistant) for more technical information.