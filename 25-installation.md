---
layout: page
title: Installation
header: Installation
group: Landing
permalink: installation/
markdown: true
---
{% include JB/setup %}

# Crownstone app installation

To use and configure the Crownstone you need the [Crownstone app](https://crownstone.rocks/app/). 
This smartphone app is available for iOS and Android.
For iOS it is [available](https://apps.apple.com/us/app/crownstone/id1136616106) in the Apple App Store, and for 
Android it can be [found](https://play.google.com/store/apps/details?id=rocks.crownstone.consumerapp) in the Google Play Store.

The app will guide you through the registration process and allows you to setup your Crownstones.

For detailed pictures on the installation behind outlets also see the instructions for 
[single outlets]({{ site.url }}/installation/single-outlet) as well as 
[double outlets]({{ site.url }}/installation/double-outlet).

# Installation behind a dimmer

Do not install the Crownstone between a physical dimmer and a light. This severes the power supply to the Crownstone 
itself. It will dim the Crownstone rather than the light and should not be done.
This is **not** supported and might severely reduce the lifetime of the product.

Do not install the Crownstones between the electric grid and a physical dimmer. It will not be a pleasant user 
experience.

You can install the Crownstone at a light that is controlled by an ordinary light switch (see below). You can dim the
light then via the Crownstone app or via third-party devices like the Amazon Alexa. Flipping the switch will toggle
between "off" and the last "dimmed state".

# Installation behind a power outlet

If at any point you are unsure of what to do, stop installation immediately and contact an electrician!

1. Before installing your built-in Crownstone, turn off the power at the fuse box. 
2. Open up your power socket and connect the wires as shown in Figure A.
3. Close the power socket and turn on the power at the fuse box.
4. Open the app and hold your smartphone near the socket with your Crownstone. Follow the instructions in the app for adding a Crownstone!

{% include snippets/image-with-caption url="/attachments/installation/en/socket_wiring_diagram.png" description="Figure A: Power socket wiring diagram" %}

There are some general tips here. Of course, play close attention to the labels on the Crownstone itself. Do not switch
in and out. If by accident switched, the Crownstone might actually power up, but it will be impossible to switch anything.
Strip and bend the wires before you put the Crownstone in the utilty box. Prebending the wires means that there is less
strain involved. Last, but not least. Make sure you know your wires. Do not expect the colors to be "correct". In
history colors have changed multiple times. Even now colors are different depending on the country.

# Installation with a ceiling light

If at any point you are unsure of what to do, stop installation immediately and contact an electrician!

1. Before installing your built-in Crownstone, turn off the power at the fuse box. 
2. The Crownstone is connected at the ceiling light (Figure B), not at the switch. Unmount your ceiling light and connect the 
wires as shown in Figure C.
3. The ceiling light is now finished, put it back and turn the power back on at
the fuse box. If you want to use your existing wall switch together with a
Crownstone, take a look at the Switchcraft installation (on the right) for more
information.
4. Open the Crownstone app and hold your smartphone near the ceiling light
with your newly installed Crownstone. Follow the instructions in the app for
adding a Crownstone!

{% include snippets/image-with-caption url="/attachments/installation/en/ceiling_light_placement.png" description="Figure B: Placing of Crownstone at the ceiling light" %}

{% include snippets/image-with-caption url="/attachments/installation/en/ceiling_light_wiring_diagram.png" description="Figure C: Ceiling light wiring diagram" %}

# Switchcraft installation

If at any point you are unsure of what to do, stop installation immediately and contact an electrician!

Switchcraft is a modification to an existing wall switch to allow it to work
together with a Crownstone. If your wall switch supports traditional multiway
switching, you can use Switchcraft!
These instructions assume you have installed your Crownstone as shown in
"Installation with a ceiling light" on the left.


1. Before modifying your wall switches, turn off the power at the fuse box.
2. Switchcraft works with an additional wire which acts as a bridge between the
two outputs of the switch (Figure D, shown as [S]). When the switch tog-
gles between the outputs, it will cause a very short interruption of the power.
Cronwstone uses this as an input command.
Open up your wall switch and connect the wires as shown in Figure D.
3. Close your switch after adding the Switchcraft wire and turn the power back
on at the fuse box.
4. Open the app and navigate to the built-in Crownstone that will be switched
by your new Switchcraft switch. You have to enable the use of Switchcraft for
this Crownstone in its settings.

{% include snippets/image-with-caption url="/attachments/installation/en/switchcraft_wiring_diagram.png" description="Figure D: Switchcraft wiring diagram" %}

Rather than modifying your switch you can also buy a "normally closed" wall switch also called "a push to break" switch.
When the button is not pressed the electricity can flow. When the button is pressed the electricity stops flowing. 
The Crownstone can use this interruption to change its state (toggle between on and off). 

## Dimming lights with Crownstone

Your Crownstone can both switch high-current devices as well as dim lights. To
use the dimming functionalty, follow these steps:

* Make sure you have a light that is dimmable.
* Download and setup the Crownstone app.
* Enable the dimming feature of this Crownston in its settings.

You can dim lights from 0 to 100 W with a single Crownstone.

More information can be found at <https://crownstone.rocks/compatibility/dimming/>.

For further assistance with the use of the Crownstone app, you can visit <https://crownstone.rocks/app-help>.
