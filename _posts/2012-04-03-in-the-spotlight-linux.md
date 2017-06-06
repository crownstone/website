---
layout: post
title: "In the spotlight, Linux!"
description: "FireSwarm drones running Linux."
category: 
tags: []
author: annevanrossum
---
{% include JB/setup %}

#  FireSwarm internals

![Tux]({{ site.url }}/attachments/tux.jpg){: .float-right}

The FireSwarm drones developed
to detect fire as quick as possible, making use of their large numbers, have a
series of sensors and processors on-board. The autopilot from MAVlab - known
from the [DelFly](http://www.delfly.nl/), the micro-aerial vehicle lab at the
TUDelft - is a mature solution for navigating airborn vehicles through the
air. This autopilot communicates with a low-power processor from [Salland Electronics](http://sallandelectronics.nl/) which functions as the hub for
sensors on-board such as a thermopile array, a CO sensor, and a 3MP camera for
streaming hi-res images to the fire brigade (after the fire has been detected
autonomously).

The autonomous detection of the fire is impossible without a powerful
processor on-board. Our solution uses a small form-factor computer, the so-
called Gumstix, the size of a stick of gum. The Gumstix is often used in the
world of UAVs and uses the OMAP3 SoC (system-on-chip) solution by Texas
Instruments build around a Cortex A8 processor. For example, the Overo Earth
contains only this ARM processor (OMAP3503), while the Overo Water (OMAP3530)
has an ARM plus a GPU, the PowerVR SGX530. By the way, the Overo Water has the
same OMAP as in the well-known Beagleboard.

##  Linux 3.3

In the latest version of Linux, the Linux core developers came to terms with
the Android developers integrating all kind of software that the latter group
wrote. This wasn't the only thing. Important for us, the mainline kernel (from
Linus) now supports the Caspa FS camera natively. Hence, we would like to have
in the spotlight this month: **Linux, and especially Laurent Pinchart**, who
has been a great help to us. To reduce a bit the number of questions that
these people get, we will try to summarize our findings here. Feel free to
contact us for questions to use the Caspa with the newest version of Linux.
The only thing that is missing is board code support for the Caspa module
which you can find at [pinchart's git repository](http://git.linuxtv.org/pinchartl/media.git/commit/3b6af8682bf3c3275d02ae2aa48daf582650c1f7) in the form of a patch. This link changes all
the time, search for "board- overo: Add Caspa camera support" if the link is
broken. Laurent told us that the ISP driver by Gumstix is a bit buggy and
limited in features, so it is recommended to use the driver from the mainline
kernel. The main reason we want to use the updated driver is the very
interesting media architecture with which we get **access to the RAW camera
data**.

Normally the output of the camera is YUYV while the original input to the
driver is in the form of a Bayer pattern (see
[wikipedia](http://en.wikipedia.org/wiki/Bayer_filter)). A Bayer pattern has 4
subpixels per pixels of which there is one red, one blue, and two green. It
has been invented by Bayer to mimic the physiology of the human retina which
is more sensitive to green.

The media framework set up by Laurent makes it possible to make an image
processing pipeline where there is a list of /dev/video* devices with
different output. The pipeline can be configured such that one of these
streams raw images, another monochrome images, and yet another YUYV images.

##  Get the code

First of all you will need to get the code of the new kernel. Now the 3.3
kernel is officially out, so you can best get it from the mainline kernel at
[http://git.kernel.org/?p=linux/kernel/git/torvalds/linux.git;a=summary](http://git.kernel.org/?p=linux/kernel/git/torvalds/linux.git;a=summary). However,
we choose back then for Laurent's repository at git://[git.linuxtv.org/pinchartl/media.git](http://git.linuxtv.org/pinchartl/media.git) and then
the unstable - **so not recommended**! - branch: omap3isp-omap3isp-next. I
won't detail git commands here, you will find out how to clone and checkout
branches easily elsewhere. Do not forget to apply the patch from above! This
patch not included, not even in the omap3isp-omap3isp-next branch. It is most
natural to have the media framework and the drivers in the form of modules of
course, so make sure you install the modules. In the next code section you see
$OVEROTOP for the directory where the cross-compiler resides (build by
OpenEmbedded / bitbake, installable by aptitude install bitbake on Ubuntu),
and $FIRESWARM_KERNEL and $FIRESWARM_KERNEL_MODULES for the root of the build
and the place where the modules will be installed.

    export PATH=${OVEROTOP}/tmp/sysroots/ x86_64-linux/usr/armv7a/bin:${PATH}
    make ARCH=arm CROSS_COMPILE=arm-angstrom-linux-gnueabi- menuconfig  
    make ARCH=arm CROSS_COMPILE=arm-angstrom-linux-gnueabi- uImage modules  
    export FIRESWARM_KERNEL_MODULES=${FIRESWARM_KERNEL}/build/modules  
    mkdir -p ${FIRESWARM_KERNEL_MODULES}  
    make ARCH=arm INSTALL_MOD_PATH=${FIRESWARM_KERNEL_MODULES} modules_install
  
There are .config files included in the kernel (of course). So you will have
to browse the webs for something that is usable. For your convenience I put a
.config here that is build from Sakoman's 3.2 .config version and an
omap3-overo .config file, plus some changes from ourselves for Linux 3.3:
[.config](documents/10530/0/.config). You will of course need to check them,
it might have keyboard/mouse disabled for example. You will benefit from two
utility programs, namely media-ctl and yavta. You can find them at
[git.ideasonboard.org](http://git.ideasonboard.org).

To cross-compile yavta: `make ARCH=arm CROSS_COMPILE=arm-angstrom-linux-gnueabi-` And to compile media-ctl make sure you set the cross-
compiler similarly:

    export FIRESWARM_MEDIA_CTL=/opt/fireswarm/media-ctl  
    mkdir ${FIRESWARM_MEDIA_CTL}/build  
    export CC=arm-angstrom-linux- gnueabi-gcc  
    export CPP=arm-angstrom-linux-gnueabi-cpp  
    ARCH=arm CROSS_COMPILE=arm-angstrom-linux-gnueabi- autoreconf --install  
    ARCH=arm CROSS_COMPILE=arm-angstrom-linux-gnueabi- ./configure \
      --with-kernel-headers=${OVEROTOP}/tmp/sysroots/overo-angstrom-linux-gnueabi/kernel \
      --build=arm --host=i686 --prefix=${FIRESWARM_MEDIA_CTL}/build  
    ARCH=arm CROSS_COMPILE=arm- angstrom-linux-gnueabi- make  
    make install

##  In operation

Make sure everything is attached nicely and you copied over the image, the
kernel modules, and the yavta and media-ctl utilities to the Gumstix, via
ethernet or via the USB card itself. The camera should be automatically
detected, even if you hotplug it. If not, the only module you need to insert
is the ISP one, by e.g. modprobe omap3-isp. This will automatically load
media.ko, videodev.ko, v4l2-common.ko, mt9v032.ko, and omap-iovmm.ko. Check it
with lsmod for yourself. If you don't see a `/dev/video` device, make sure you
applied the patch of above. Then after you see the `/dev/video` devices listed,
it's time to make work of the media-ctl utility.

    ./media-ctl -v -l '"mt9v032 3-005c":0->"OMAP3 ISP CCDC":0[1]'  
    ./media-ctl -v -l '"OMAP3 ISP CCDC":1->"OMAP3 ISP CCDC output":0[1]'  
    ./media-ctl -v -f '"mt9v032 3-005c":0 [SGRBG10 752x480]'  
    ./media-ctl -v -f '"OMAP3 ISP CCDC":1 [SGRBG10 752x480]'

And use yavta to capture some images:

    yavta -p -f SGRBG10 -s 752x480 -n 4 --capture=20 --skip 10 \  
      $(./media-ctl -e "OMAP3 ISP CCDC output") --file=img-#.bin

Make sure the "capture" number is larger than the "skip" number, or no frames
will actually be captured. The dash # is a mask and will be replaced by
increasing numbers. This media-ctl setting - as you can see - captures raw
GRBG images with 10 bit subpixel values. Be careful in converting this raw
data to images. The 10 bits values are not packed, they are written to 16bit
values. Also, realize that the image sensor is 752x480 subpixels, and not
entire pixels. So raw Bayer gives you only 752x480 16-bit values.


