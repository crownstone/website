---
layout: page
title: Asset Tracking
header: Business
description: "Bluetooth LE for asset tracking"
group: [navigation-business-submenu]
skip-newsletter: true
permalink: business/asset-tracking
background-image: banner-asset-tracking
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
    title: "Tags are very power-efficient. They are also low-priced and can be waterproof."
  - img: /images/asset-tracking/buildings.svg
    img-alt: buildings
    title: "Bluetooth offers high accuracy compared to GPS. Allowing to track assets indoors."
  - img: /images/asset-tracking/ble-tags.svg
    img-alt: ble tags
    title: "BLE tags can have many shapes: buttons, tiles, cards, etc."
areas:
  - slogan: Health care
    image: /images/asset-tracking/health
  - slogan: Collaborative workspaces
    image: /images/asset-tracking/lab
  - slogan: Hospitality
    image: /images/asset-tracking/hotel
---


{% include JB/setup %}


{% include snippets/slogan-begin %}

Bluetooth Asset Tracking

{% include snippets/slogan-end %}

{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-text-img-begin%}

**Crownstones are also able to scan for any Bluetooth LE device in a building.**

<p>&nbsp;</p>  

You can use off-the-shelf Bluetooth tags attached to your assets and the Crownstones communicate over **Bluetooth mesh** the location of those tags towards a gateway. Subsequently, we work together with partners or customers to **integrate** this asset tracking information into your system or cloud.

{% include snippets/two-cols-text-img-end img='/images/asset-tracking/cs-bluetooth.png' img-alt='cs bluetooth' %}

{% include snippets/full-width-container-end %}



{% include snippets/slogan-begin %}

Benefits of asset tracking

{% include snippets/slogan-end %}


{% include snippets/benefits-list %}



{% include snippets/slogan-begin background='blue' %}

Our technology

{% include snippets/slogan-end %}



{% include snippets/full-width-container-begin%}

{% include snippets/two-cols-text-img-begin background="blue"%}

### Crownstone offers a solution for indoor asset tracking

<p>&nbsp;</p>

The signal strengths with which the assets are observed are communicated over Bluetooth mesh.

- We support up to 32 Crownstones per hub.
- We support up to 256 assets across all our hubs.

This all depends also on update frequency and latency. Please, contact us with the specific requirements for your application.

{% include snippets/two-cols-text-img-end background="blue" img='/images/asset-tracking/technology.jpg' img-alt='technology'%}

{% include snippets/full-width-container-end %}



{% include snippets/slogan-begin %}

How it works

{% include snippets/slogan-end %}


{% include snippets/margin %}


{% include snippets/global-container-begin %}

{% include snippets/how-it-works-begin img="/images/asset-tracking/ble-tag.png" img-alt="bluetooth tag" title="Bluetooth tags" %}

Bluetooth Low Energy tags are attached to **high-value assets**. For example, wheelchairs, IV pumps in hospitals, and other devices.

{% include snippets/how-it-works-end %}


{% include snippets/how-it-works-begin img="/images/asset-tracking/built-ins.png" img-alt="Crownstones" title="Crownstones" %}

Crownstones are configured with mesh **security keys** and a **filter** that defines which assets have to be tracked.

{% include snippets/how-it-works-end %}

{% include snippets/how-it-works-begin img="/images/asset-tracking/hub.png" img-alt="Crownstone hub" title="A Gateway" %}

A hub is configured to obtain the encrypted data from the Crownstones and to send this data **upstream** to the cloud.

{% include snippets/how-it-works-end %}

{% include snippets/global-container-end %}


{% include snippets/slogan-begin %}

Why Bluetooth LE for asset tracking?

{% include snippets/slogan-end %}


{% include snippets/benefits-list id='benefits-ble' %}



{% include snippets/slogan-begin %}

Application areas

{% include snippets/slogan-end %}


{% include snippets/margin %}

{% include snippets/three-frames-in-a-row  id='areas' no-arrow='true' no-link='true' %}

{% include snippets/margin %}


{% include snippets/slogan-begin %}

Support

{% include snippets/slogan-end %}


{% include snippets/centered-text-home-begin background='light'%}

We can deliver additional support such as **configuration** within your backend or by providing a **custom uplink** towards your backend on a case-by-case basis.
We can also provide you with a service level agreement for your application which defines monitoring services for our hardware or our services, includes updates of the Crownstone hub software, or implement other application demands.

{% include snippets/centered-text-home-end %}


{% include snippets/global-container-begin size="small" %}

{% include snippets/contact-option-begin img="/images/contact/email.svg" img-alt="email-icon" title="Send us an email" %}

For general questions drop us an email. We'd love to help you!

{% assign email = ".rocks, stone, crown, @, sk, a" | split: ", "  %}
{% include snippets/contact-option-end email=email subject="Support: Asset tracking"%}


{% include snippets/contact-option-begin img="/images/contact/phone.svg" img-alt="phone-icon" title="Give us a call" %}

Interested in our technology? Then talk with us, we're all ears!

{% include snippets/contact-option-end tel="true" %}

{% include snippets/global-container-end %}
