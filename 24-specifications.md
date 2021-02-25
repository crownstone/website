---
layout: page
title: Crownstone Specifications
header: Specifications
description: Specifications of Crownstone products, electrically and functionally.
markdown: true
permalink: specifications/
---
{% include JB/setup %}

# General specifications

| Property                                    | Specification                                                 |
| ---                                         | ---                                                           |
| Switching Devices                           | Up to 16A (domestic use)                                      |
| Dimming lights                              | LEDs (certain types) on 110V/240V or incandescent light bulbs |
| Measuring                                   | Current and voltage (5kHz)                                    |
| Overview                                    | Energy usage (real-time for now)                              |
| Timer function                              | Timer functionality                                           |
| Communication                               | Bluetooth Low Energy (BLE) 4.0 and up                         |
| Tracks                                      | Smartphones                                                   |
| Tracking accuracy                           | 1.5-4.0 meter                                                 |
| Maximum range                               | 20-70 meter                                                   |
| Proximity detection                         | Requires 1 particular Crownstone "in sight"                   |
| Room-level presence detection               | Requires 4 Crownstones in sight (not necessarily per room)    |
| Switchcraft function                        | Simultaneous use with light switch (with tiny adaptation)     |
| Network                                     | Bluetooth Mesh connects Crownstone-to-Crownstone              |
| Chipset                                     | Nordic nRF52832, 64 kB RAM, 512 kB FLASH                      |
| Beacon function                             | iBeacon                                                       |
| Soft-fuse function                          | Limit extreme currents or switch off with unexpected behavior |
| Temperature function                        | Switch off with extreme temperatures                          |
| Dimensions                                  | 51x46x13mm (LxWxH), 40 gram                                   |
| Open-source                                 | Software available at <https://github.com/crownstone>         |
| Mobile phones supported                     | iOS and Android                                               |
| Battery                                     | Not required!                                                 |

## Products

You can find our products at:

| Product                                     | Website link                                                  |
| ---                                         | ---                                                           |
| Built-in One (1 unit)    | [Built-in One](https://shop.crownstone.rocks/products/built-in-crownstone)       |
| Built-in One (10 units)  | [Starter Kit](https://shop.crownstone.rocks/products/starter-kit-crownstone-built-in-one) |
| USB dongle               | [USB dongle](https://shop.crownstone.rocks/products/crownstone-usb-dongle)       |
| Hub                      | Not required. Instructions to build your own coming soon                         |

You can also find our products in high-end home automation shops.

## More detailed list of functions

This is just a list off basic functions. Take a look at <https://crownstone.rocks> for more information. Some
examples:

| Property                                    | Specification                                                 |
| ---                                         | ---                                                           |
| Authentication roles                        | Admin, member, guest                                          |
| Dumb house mode                             | Convenient for parties or renting out your appartment         |
| Voice assistant integration                 | Alexa, Google Home, see ["works with" page](https://crownstone.rocks/works-with/) |
| Home assistant integration                  | Through HACS, see [manual](https://crownstone.rocks/integrations/home-assistant/) |
| Smart watch integration                     | Apple Watch (only control, not indoor positioning             |
| Homey integration                           | Coming soon (March 2021)                                      |
| Smart lights                                | Philips Hue coming soon                                       |
| Instantanous power measurements             | Real-time power measurements arriving on phone                |
| Reacting on close proximity                 | Tap to toggle (a bit like NFC)                                |
| Reacting on moderate proximity              | Presence (at home or not)                                     |
| Reacting on room-level presence             | Indoor positioning                                            |
| User-controlled upload of data to the cloud | See privacy settings in app (opt-in!)                         |
| Visualize other users in the app            | See privacy settings in app (opt-in!)                         |
| Send commands through the internet          | Restricted (depends on hub)                                   |
| Scheduler                                   | Set timers and schedules                                      |
| Smart timer                                 | Set timers only when dark, etc.                               |
| Location-based messages                     | Send a message just when someone enters a room                |
| Multiple users                              | Only turn off the lights when everyone leaves a room          |
| Firmware updates (new stuff!)               | Through the Crownstone app (approx. every 2-3 months)         |
| Very large mesh                             | Support for 255 devices in the Bluetooth Mesh                 |

Examples of features that are currently worked on are the indoor positioning of **wearables**, the ability to run your own Arduino code on the Crownstones, and all kinds of integrations.
