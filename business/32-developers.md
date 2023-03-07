---
layout: page
title: Developers
header: Business
description: "Developers and APIs"
markdown: true
permalink: business/developers/
background-image: banner-developers1
---
{% include JB/setup %}

# Integration

The Crownstones can be integrated in many solutions and on many different levels. Towards this the Crownstone SDK exists of three parts (in an increasing order of integration):

* A [REST API](#rest_api) in the cloud

* Smartphone [libraries](#smartphone_libs)

* The [firmware](#bluenet) on the Crownstones, called Bluenet

![Integration]({{ BASE_URL }}/images/crownstone-integration.svg){: style="width: 100%"}

# <a name="rest_api"></a>REST API

The cloud is required to setup the Crownstones: keys and IDs will be generated, and locations can be set.
After that, it can be used to add users, so they can also make use of your Crownstones.
The cloud is also used to synchronize data between users, and serves as data storage.
You can read how to use it in the [REST API documentation](https://github.com/crownstone/crownstone-sdk#rest-api).

![Image of Strongloop API Explorer](https://raw.githubusercontent.com/crownstone/crownstone-sdk/master/images/strongloop-api-explorer.png){: style="width: 100%"}

# <a name="smartphone_libs"></a>Smartphone libraries

To make things easy, we provide native libraries for smartphones. The following libraries are available and can be found on GitHub:

- [Android](https://github.com/crownstone/bluenet-android-lib/)
- [iOS](https://github.com/crownstone/bluenet-ios-lib)

## <a name="bluenet_lib"></a>Controlling and reading out Crownstones

![Image of Bluetooth logo](https://raw.githubusercontent.com/crownstone/crownstone-sdk/master/images/bluetooth-logo.png){: .float-right}

The libraries abstract the communication with the Crownstones. They simplify scanning/search for Crownstones, wrap the messages into easy-to-use objects, and provide simple functions to access the functionalities provided on the Crownstones. This means that you do not need to write the code to connect to the devices over Bluetooth. You can just use our simplified interface.

The following features will be available (some are still in development):

### <a name="bluenet_lib_commands"></a>Commands

- Switch/dim
- Set time
- Factory reset
- Update over the air
- Enable/disable iBeacon
- Enable/disable encryption
- Enable/disable mesh
- Enable/disable continuous scanning
- Enable/disable continuous high frequency power sampling

### Notified data
This data streams in regularly via a callback.

- Switch state (0-100)
- Power usage (mW)
- Total energy usage (Wh)
- Chip temperature (°C)

### <a name="bluenet_lib_configs"></a>Get/set configurations:

Configurations that can be set and read. 

Note: The enable/disable states can only be set using the corresponding [command](#bluenet_lib_commands) but they can be read through the config.

- Encryption keys
- ID
- iBeacon UUID, major, minor, RSSI at 1m
- TX power
- Advertisement interval
- Schedule (switch on/off at certain times)
- Toggle switch after Crownstone reboot.
- Continuous scanning interval, duration and filter

### Mesh commands
Commands that can be issued to other Crownstones via the mesh. In case a command asks for a return value, the value will be notified via a callback.

- Switch
- Get state (switch state, power usage, energy usage, temperature)
- Get [config](#bluenet_lib_configs)
- Set [config](#bluenet_lib_configs)
- Enable/disable scanning or high frequency power sampling


## Indoor localization

![Image of Indoor Localization](https://raw.githubusercontent.com/crownstone/crownstone-sdk/master/images/indoor-localization.png){: style="width: 100%"}

This library abstracts and implements the localization, it uses the [bluetooth library](#bluenet_lib) and [REST API](#rest_api). The localization is based on rooms, though it is more a certain area. This means you can define multiple rooms in a single real world room.

Features (in development):

- Create room
- Remove room
- Start/stop learning room
- Set room fingerprint
- Get room fingerprint
- Adapt a fingerprint from the cloud to your phone model
- Get current location (room)
- Get nearby rooms
- Get distance to room
- Get predicted next room
- Get location (room) of other users

## Example Apps

![Image of Example app](https://raw.githubusercontent.com/crownstone/crownstone-sdk/master/images/crownstone-app-small.png)
![Second image of Example app](https://raw.githubusercontent.com/crownstone/crownstone-sdk/master/images/crownstone-app-small1.png)
![Third image of Example app](https://raw.githubusercontent.com/crownstone/crownstone-sdk/master/images/crownstone-app-small2.png)
![Fourth image of Example app](https://raw.githubusercontent.com/crownstone/crownstone-sdk/master/images/crownstone-app-small3.png)
![Fifth image of Example app](https://raw.githubusercontent.com/crownstone/crownstone-sdk/master/images/crownstone-app-small4.png)

The [Crownstone app](https://github.com/crownstone/CrownstoneApp) (Android and iOS) makes use of these libraries and connects to the REST API as well.
The Crownstone app can be used as starting point to develop your own stand-alone app.
It is written in React Native.

# <a name="bluenet"></a>Bluenet Firmware

The [Bluenet](https://github.com/crownstone/bluenet/) firmware can be downloaded from GitHub.

![Protocol example](https://raw.githubusercontent.com/crownstone/bluenet/master/docs/diagrams/adv-packet.png)

For the documentation, see the following links:

- [Bluenet](https://github.com/crownstone/bluenet/) 
The firmware itself.
- [Bluetooth Protocol](https://github.com/crownstone/bluenet/blob/master/docs/protocol/PROTOCOL.md)
Protocol description of the services, characteristics, advertisements, and mesh.
- [Installation Manual](https://github.com/crownstone/bluenet/blob/master/docs/INSTALL.md)
A step by step description to install the build system required to build and run the bluenet firmware.
- [License](https://github.com/crownstone/bluenet/tree/master/source)
Triple licensed (LGPLv3, Apache, MIT License).
- [Bootloader](https://github.com/crownstone/bluenet-bootloader).
A slightly modified version of the bootloader (compared to the one from Nordic).

Have fun!

