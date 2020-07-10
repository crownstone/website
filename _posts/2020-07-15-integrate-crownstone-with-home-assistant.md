---
layout      : post
title       : "Integrate Crownstone with Home Assistant"
description : "Crownstone brings the functionality of switch, dimming, and persence information using Crownstones to Home Assistant"
tags        : [home assistant, integration]
author      : ricardosteijn
picture     : attachments/home_assistant/banner.jpg
excerpt     : "Home assistant is an open-source platform for smart homes. Crownstone is now integrated with Home Assistant so that
presence information can be used to trigger all kind of smart home actions with other hardware integrated with Home Assistant."
---
{% include JB/setup %}

# Home Assistant

Home Assistant is an open source platform which lets you integrate smart home devices of any kind!

Home Assistant now works with Crownstone. Switching and dimming your Crownstones, getting presence updates, it's all possible in your Home Assistant. Do you already have Philips Hue lights or Fibaro switches? No problem! Home Assistant lets you use Crownstone's **unique presence detection** on room level to create automations with any other device in Home Assistant!

Everything works together, as it should.

## How do I get Home Assistant?

Home Assistant itself is 100% free! To install Home Assistant follow the [Installation guide](https://www.home-assistant.io/getting-started/).

## Getting started

If you followed the installation guide, your Home Assistant should be up and running! Awesome!

### Adding the Crownstone integration to Home assistant

Step 1. In Home Assistant, Go to Configuration.

![Home Assistant Setup]({{ site.url }}/attachments/home-assistant/HAsetup.png)

Step 2. Go to Integrations.

![Home Assistant Integrations]({{ site.url }}/attachments/home-assistant/HAintegration.png)

Step 3, Click on the orange “+” button.

![Home Assistant Add Integration]({{ site.url }}/attachments/home-assistant/HAaddintegration.png)

Step 4. Search for Crownstone and click on it to set up the integration.

![Home Assistant Add Crownstone]({{ site.url }}/attachments/home-assistant/HACrownstone.png)

Step 5. Enter your email and password for your Crownstone account

![Home Assistant Login]({{ site.url }}/attachments/home-assistant/HAlogin.png)

Step 6. Select an Area for your Crownstone devices.
You will see all the names of your Crownstones, Locations and Spheres.

Crownstones will show up as: Crownstone plug or Crownstone built-in
Presence in a Location, will show up as: Location presence
Presence in a Sphere will show up as: Sphere presence

Note that a Home Assistant area is not the same as a Crownstone Location! Crownstone Locations are **only** for Crownstones, while Home Assistant areas are used for all Home Assistant devices! It is recommended to add your Crownstones and Sphere/Location presence to an area with a similar name as your Crownstone locations.

![Home Assistant Select Area]({{ site.url }}/attachments/home-assistant/HAselectarea.png)

### Adding your Crownstone devices to the Home Assistant overview

Step 7. In the top right corner of the overview, click on the icon with the three dots, and then click on configure UI.

![Home Assistant Configure UI]({{ site.url }}/attachments/home-assistant/HAconfigureui.png)

Step 8. Click on the orange “+” button.

![Home Assistant Add Card]({{ site.url }}/attachments/home-assistant/HAaddcard.png)

Step 9. Select a card from the available options.

Give your card a name, for example “Crownstones”.

In the entities section, select the Crownstones you want to add to the overview. All Crownstones are represented as lights in Home Assistant. So if you have a Crownstone named “charger”, your Crownstone will be called “light.charger” and will have the following icon:

See the image below for an example of how to represent your Crownstones in the Home Assistant overview!

![Home Assistant Card]({{ site.url }}/attachments/home-assistant/HAcard.png)

Step 10. Complete example Crownstone integration in overview.

![Home Assistant Completed]({{ site.url }}/attachments/home-assistant/HAcomplete.png)


