---
layout: post
title: "Programming the nRF51822 with the ST-link"
description: "The ST-Link is incorporated in cheap boards (STM32F boards) and can be used to program the nRF51822"
category: 
author: annevanrossum
tags: [nrf51822, ble]
---
{% include JB/setup %}

# Segger connector

If your device has a connector that is meant for The Segger JLink programmer, you can find the pin layout at
<https://www.segger.com/jlink-adapters.html#CM_9pin>. The default programmer with the Nordic development kit comes with
the J-Link 9-pin Cortex-M adapter. 

The ones that you will need to break out are four wires that at the top:

    1. VTref
    2. SWDIO
    3. GND
    4. SWCLK

The first one is optional! It does not provide power, it is used to **measure** if the target board does have power.

# ST-Link programmer

The ST-Link programmer is not easy obtainable, just as the J-Link programmer is actually hard to come by as a separate
product. 

For that reason it is worth to check into the STM32FDISCOVERY board. You can get the [STM32FDISCOVERY at Mouser](http://no.mouser.com/ProductDetail/STMicroelectronics/STM32F4DISCOVERY/?qs=J2qbEwLrpCGdWLY96ibNeQ%3D%3D) for € 13,47. This board is anyway fun, it has a
lot of GPIO (pins) and it has an ST-Link on-board.

![STM32F Discovery Board]({{ site.url }}/attachments/stm32f4_discovery.jpg "STM32F Discovery Board")

On the STM32 board you see a connector with the label `SWD`. We need to pins from there. From the top (where there is
the USB connection), we need the second pin and connect it to `SWCLK`. From the top we need also the fourth pin, and
connect it to `SWDIO`.

The Crownstone (or RFduino, or any other nRF51822 board) needs then also to be powered and grounded. The power can be
fed to the device also from the STM32 board. You can connect one of the pins labeled `3V` on the right of the board
to the corresponding pin on your device. Ground can be obtained from many pins, pick one labeled `GND`. The VTref pin
from the J-Link does not have a corresponding VTref pin on the ST-Link. On the STM32FDiscovery board probably 
somewhere internally the reference voltage is measured. So, you'll only have to break out three pins of the cable to
connect it:

    2. SWDIO
    3. GND
    4. SWCLK

Use something like a logic analyzer to see if you do things wrong. This is a very, very useful tool that can save you
a lot of time.

# Scripts

Normally the Crownstone we program with the J-Link from Segger, but if you want to use this cheaper solution, we also
created some files for you at the [BlueNet repository at github](https://github.com/dobots/bluenet/tree/master/scripts).

## Combination

First of all you can combine all the required binaries into one big binary. This is done by the script `combine.sh`.
Before you use it, you will need to install `srec_cat` on your system. On Ubuntu:

    sudo apt-get install srecord

If you call the script it basically just runs `srec_cat`:

    ./combine.sh

And you will see that it runs something like if you only want the SoftDevice and the Crownstone for example:

    srec_cat /opt/softdevices/s110_nrf51822_7.0.0_softdevice.hex -intel crownstone.bin -binary -offset 0x00016000 -o combined.bin

You have to adjust that file on the moment manually to switch between softdevices.

## OpenOCD

Subsequently, we are gonna set up OpenOCD. You should **not** use the one from the Ubuntu repository: it is too old. In case you installed it before:

     sudo apt-get remove --purge openocd

Download fom github and compile the source:

    cd /opt
    git clone https://github.com/ntfreak/openocd
    sudo aptitude install libtool automake libusb-1.0-0-dev expect
    cd openocd
    ./bootstrap 
    ./configure --enable-stlink
    make
    sudo make install

You will see that there are several files on [github](https://github.com/dobots/bluenet/tree/master/scripts/openocd) 
that you can use. There is a `49-stlinkv2.rules` file that you can use for `udev` so that no superuser rights are 
required to use the `ST-Link`. There is also an `openocd.cfg` file that sets the defaults for the hardware we are
gonna use (the `nrf51` series).

To start OpenOCD you can use our scripts again:

    ./flash_openocd.sh init

This will start the daemon that subsequently can be talked to over telnet. You can try that if you want to (but this
is not necessary):

    ./flash_openocd.sh connect
    > help
    > exit

To actually upload the binaries you have created, you can use:

    ./flash_openocd.sh upload combined.hex

This will upload the binary you have previously composed to the target. Ready you are! 

## Debugging

If your target does not have pins to break out UART, it might be worth to first try and start experimenting with the
RFduino. That board has enough pins broken out, to see what for example the Crownstone code is actually doing. For
example if you combine a SoftDevice with the wrong bootloader, you will see proper error messages. If you know how
to hook up `gdb` over OpenOCD, please feel free to file an issue at <https://github.com/dobots/bluenet/> and I will
be happy to update this guide.

