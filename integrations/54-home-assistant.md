---
layout           : page
title            : "Integrate Crownstone with Home Assistant"
header           : "Integrate Crownstone with Home Assistant"
description      : "Crownstone brings the functionality of switch, dimming, and persence information using Crownstones to Home Assistant"
markdown         : true
background-image : banner-home-assistant.jpg
permalink        : integrations/home-assistant/
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

### Installing HACS

Follow these [instructions](https://hacs.xyz/docs/installation/installation) for the type of Home Assistant you are running.

### Enabling HACS

Go to this [page](https://hacs.xyz/docs/configuration/basic) and follow the instructions. This action requires a GitHub account. If you don’t have a GitHub account yet, you can sign up [here](https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home). Make sure your browser cache for the Home Assistant page is cleared, otherwise HACS might not show up.

### Adding the Crownstone integration in HACS

*Step 1:* Click on the 3 dots at the top right corner and click on **Custom repositories**

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_1.png' img-alt='Home Assistant Step_1' zoom-modal='modal-step-1' %}

*Step 2:* Add the following link at the end of the window that pops up: **https://github.com/crownstone/crownstone-home-assistant**. Then under "Category" select "Integration" and click on "Add".  

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_2.png' img-alt='Home Assistant Step_2' zoom-modal='modal-step-2' %}

*Step 3:* Click on the button at the bottom right corner **+ Explore & Add repositories** and search for Crownstone. You should be able to find the integration if the previous steps were done right.

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_3.png' img-alt='Home Assistant Step_3' zoom-modal='modal-step-3' %}

*Step 4:* Select the newest version from the list, then click on “Install”. HACS will ask you to restart Home Assistant to complete the installation. For this, simply go to Configuration -> Server Controls -> Restart.

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_4.png' img-alt='Home Assistant Step_4' zoom-modal='modal-step-4' %}

## Setting up the Crownstone integration

*Step 1:* Go to Configuration -> Integrations and click on **+ Add Integration**. Search for Crownstone in the list. If you cannot find it, make sure that the previous steps were done right.

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_5.png' img-alt='Home Assistant Step_5' zoom-modal='modal-step-5' %}

*Step 2:* Enter your email and password of your Crownstone account, and click on **Submit**.
If you have created multiple spheres in the Crownstone app, you can select the sphere you want to use in Home Assistant in the next step. If you have only 1 sphere, it will be selected automatically.

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_6.png' img-alt='Home Assistant Step_6' zoom-modal='modal-step-6' %}

*Step 3:* Plug in the Crownstone **USB Dongle**. The dongle provides independent switching of Crownstones (no smartphone required) and enables the power & energy usage entities. Verify that the dongle is plugged in before continuing.

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_7.1.png' img-alt='Home Assistant Step_7.1' zoom-modal='modal-step-7.1' %}

*Step 4:* Head over to the **Crownstone app** on your phone, tap the **+** button, select Crownstone -> Crownstone USB and follow the steps.

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_7.1.1.png' img-alt='Home Assistant Step_7.1.1' zoom-modal='modal-step-7.1.1' %}

*Step 5:* After plugging in your dongle in one of your computer’s USB ports (e.g. Raspberry Pi 4), click on **Submit**.

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_7.2.png' img-alt='Home Assistant Step_7.2' zoom-modal='modal-step-7.2' %}

*Step 6:* In the window that pops up you can see the **devices** that have been added to Home Assistant. Check if all of your devices have been included. You can also add your devices to a Home Assistant area if you wish. Next, click on **Finish.**

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_8.png' img-alt='Home Assistant Step_8' zoom-modal='modal-step-8' %}

*Step 7:* Once the setup is complete, you can go to your Overview, click on the 3 dots button at the top right corner and click on **Edit Dashboard**. From there you can add cards for your new Crownstone entities. Be creative!

Recommended cards:
- Dimmable lights: **Light** card for each entity
- Presence entities (house, living room): **Glance** card
- Rest of the Crownstones: **Entities** card
- Energy usage / Power usage entities: **Grid** card with **Sensor** card for each entity

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_9.png' img-alt='Home Assistant Step_9' zoom-modal='modal-step-9' %}


## Additional information 

*Entities:* When you click on an entity in the **Overview** you can see more details. For Crownstones you can see if the Crownstone Cloud or Crownstone USB Dongle is used for switching, as well as the state of the abilities.

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_extra_1.png' img-alt='Home Assistant extra_1' zoom-modal='modal-extra-1' %}

*Energy usage:* Clicking on an **Energy usage** entity shows the date/time when the energy measurement started along with the date/time of the last update. Energy updates usually come in every minute.

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_extra_2.png' img-alt='Home Assistant extra_2' zoom-modal='modal-extra-2' %}


## Creating Automations

### Presence

In this example, we create an automation that starts playing a Spotify playlist on a **Google Nest Mini** when a specific person **enters** the living room.

*Step 1:* Select a **Location Presence** device under Configuration -> Devices. Click the **+** button from the Automations section. In the window that pops up you can choose from 6 different trigger types. For our example, we will select the **“A user has entered the Living room”** trigger.

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_automation_1.png' img-alt='Home Assistant automation_1' zoom-modal='modal-automation_1' %}

*Step 2:* In the next window, give your automation a name and a description (optional).

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_automation_2.png' img-alt='Home Assistant automation_2' zoom-modal='modal-automation_2' %}

*Step 3:* In the trigger section, at the user field, select a **user** whose presence (i.e. when entering the room) will trigger this action.

Clicking on the user field will show all the users who are in your sphere. Click on a name to select that user. If you want to add a user to your sphere, you can do that directly in the Crownstone app. 

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_automation_3.png' img-alt='Home Assistant automation_3' zoom-modal='modal-automation_3' %}

*Optional:* A condition can be also added to your automation (i.e. the action occurs only if the condition is met).  For example: Crownstone Ceiling light must be on. Date and time are also possible, for example only execute this action on saturdays.
<p>&nbsp;</p>

*Step 4:* **Spotcast** integration needs to be used, which can be installed from HACS. You can visit this [page](https://github.com/fondberg/spotcast) to enable it in your Home Assistant. Next, as action type select **Call service** and as service select **spotcast.start** which will appear in the list once Spotcast has been enabled.

In the service data section you'll need to provide the entity ID and device name of your Google cast device. You can find those in Entities and Devices in the Configuration tab. Lastly, you need to provide an URI to the Spotify playlist, which can be found in Spotify by going to the playlist options -> Share -> Copy Spotify URI. Optionally you can provide “random_song” to turn on shuffle.

{% include snippets/centered_img_home_assistant img='/attachments/home-assistant/HA_automation_4.png' img-alt='Home Assistant automation_4' zoom-modal='modal-automation_4' %}