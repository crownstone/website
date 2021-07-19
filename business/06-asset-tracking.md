---
layout: page
title: Asset Tracking
header: Business
description: "Bluetooth LE for asset tracking"
group: [navigation-business-submenu]
skip-newsletter: true
permalink: business/asset-tracking
background-image: banner-asset-tracking.jpg
banner-caption: Asset Tracking
benefits:
  - title: Reduce employee searching time 
    img: /images/asset-tracking/time.svg
    img-alt: reduce time
  - title: Reduce size of inventory
    img: /images/asset-tracking/inventory.svg
    img-alt: reduce inventory
  - title: Improve asset availability
    img: /images/asset-tracking/asset.svg
    img-alt: asset availability
  - title: Increase efficiency and productivity 
    img: /images/asset-tracking/efficiency.svg
    img-alt: efficiency
  - title: Improve customer satisfaction
    img: /images/asset-tracking/customer.svg
    img-alt: customer satisfaction
benefits-ble:
  - img: /images/asset-tracking/bluetooth.svg
    img-alt: bluetooth icon
    description: "Tags are very power-efficient. They are also low-priced and can be waterproof."
  - img: /images/asset-tracking/buildings.svg
    img-alt: buildings
    description: "Bluetooth offers high accuracy compared to GPS. Allowing to track assets indoors."
  - img: /images/asset-tracking/ble-tags.svg
    img-alt: ble tags
    description: "BLE tags can have many shapes: buttons, tiles, cards, etc."
areas:
  - title: Health care
    image: /images/asset-tracking/health.jpg
  - title: Collaborative workspaces
    image: /images/asset-tracking/lab.jpg
  - title: Hospitality
    image: /images/asset-tracking/hotel.jpg
---


{% include JB/setup %}


{% include snippets/slogan-begin %}

Bluetooth Asset Tracking

{% include snippets/slogan-end %}

{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-text-img-begin%}

##### Crownstones are also able to scan for any Bluetooth LE device in a building. 

<p>&nbsp;</p>  

###### You can use off-the-shelf Bluetooth tags attached to your assets and the Crownstones communicate over **Bluetooth mesh** the location of those tags towards a gateway. Subsequently, we work together with partners or customers to **integrate** this asset tracking information in your system or cloud.

{% include snippets/two-cols-text-img-end img='/images/asset-tracking/cs-bluetooth.png' img-alt='cs bluetooth' %}

{% include snippets/full-width-container-end %}



{% include snippets/slogan-begin %}

Benefits of asset tracking

{% include snippets/slogan-end %}


{% include snippets/benefits-asset-tracking %}



{% include snippets/slogan-begin blue-bg='true' %}

Our technology

{% include snippets/slogan-end %}



{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-text-img-blue-bg-begin %}

### Crownstone offers a solution for indoor asset tracking

<p>&nbsp;</p>

The signal strengths with which the assets are observed are communicated over Bluetooth mesh.

- We support up to 32 Crownstones per hub.
- We support up to 256 assets across all our hubs.

This all depends also on update frequency and latency. Please, contact us with the specific requirements for your application.

{% include snippets/two-cols-text-img-blue-bg-end img='/images/asset-tracking/technology.jpg' img-alt='technology'%}

{% include snippets/full-width-container-end %}



{% include snippets/slogan-begin %}

How it works

{% include snippets/slogan-end %}


{% include snippets/how-works-container-begin %}

{% include snippets/how-it-works-begin img="/images/asset-tracking/ble-tag.png" img-alt="bluetooth tag" title="Bluetooth tags" %}

Bluetooth Low Energy tags are attached to **high value assets**. For example: wheelchairs, IV pumps in hospitals, and other devices.

{% include snippets/how-it-works-end %}


{% include snippets/how-it-works-begin img="/images/asset-tracking/built-ins.png" img-alt="Crownstones" title="Crownstones" %}

Crownstones are configured with mesh **security keys** and a **filter** which defines which assets have to be tracked.

{% include snippets/how-it-works-end %}

{% include snippets/how-it-works-begin img="/images/asset-tracking/hub.png" img-alt="Crownstone hub" title="A Gateway" %}

A hub is configured to obtain the encrypted the data from the Crownstones and to send this data **upstream** to the cloud.

{% include snippets/how-it-works-end %}

{% include snippets/how-works-container-end %}


{% include snippets/slogan-begin %}

Why Bluetooth LE for asset tracking?

{% include snippets/slogan-end %}


{% include snippets/benefits-ble %}



{% include snippets/slogan-begin %}

Application areas

{% include snippets/slogan-end %}


{% include snippets/areas-asset-tracking %}



{% include snippets/slogan-begin %}

Support

{% include snippets/slogan-end %}


{% include snippets/centered-text-home-begin %}

We can deliver additional support such as **configuration** within your backend or by providing a **custom uplink** towards your backend on a case by case basis.
We can also provide you with a service level agreement for your application which defines monitoring services for our hardware or our services, include updates of the Crownstone hub software, or implements other application demands.

{% include snippets/centered-text-home-end %}


{% include snippets/contact-container-begin small="true" %}

{% include snippets/contact-option-begin img="/images/contact/email.svg" img-alt="email-icon" title="Send us an email" %}

For general questions drop us an email. We'd love to help you!

{% assign email = ".rocks, stone, crown, @, sk, a" | split: ", "  %}
{% include snippets/contact-option-end email=email subject="Support: Asset tracking"%}


{% include snippets/contact-option-begin img="/images/contact/phone.svg" img-alt="phone-icon" title="Give us a call" %}

Interested in our technology? Then talk with us, we're all ears!

{% include snippets/contact-option-end tel="true" %}

{% include snippets/contact-container-end %}
