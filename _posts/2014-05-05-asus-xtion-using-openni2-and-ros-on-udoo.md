---
layout: post
title: "Asus Xtion on UDOO with OpenNI2 and ROS"
description: "A Tutorial on how to setup the Xtion on a UDOO using OpenNI2 and ROS"
category: 
tags: [xtion, openni2, ros, udoo]
author: dominikegger
---
{% include JB/setup %}

# Asus Xtion on UDOO with OpenNI2 and ROS

![Asus Xtion on UDOO]({{ site.url }}/attachments/udoo,xtion,openni2.png "Asus Xtion on UDOO")

This step by step tutorial shows how to setup the [UDOO](http://www.udoo.org/) in order to use an Asus Xtion with ROS. If ROS is not necessary, follow [this](http://feilipu.me/2013/11/09/udoo-ubuntu-12-04-guide/) tutorial alternatively and go directly to step 2.

## Step 1: Install ROS on UDOO

To use ROS on the UDOO set up an sdcard with an ubuntu core, following the steps described [here](http://wiki.ros.org/hydro/Installation/UDOO) with these modifications:

1. Instead of downloading the kernel, u-boot and modules seperately, download the Update Package found under the tab Driver & Tools on the udoo download page [here](http://www.udoo.org/downloads/)

2. Depending on the udoo cpu, use the following command to flash the boot sector: (replace by u-boot-q.imx for the quad)
	
		sudo dd if=u-boot-d.imx of=/dev/sdb bs=512 seek=2 status=noxfer

3. Fix hostname problem. first add a correct hostname <HOST_NAME>

		sudo nano /etc/hostname

	then add that hostname to the file /etc/hosts

		sudo nano /etc/hosts

	by adding this line (Replace <HOST_NAME> with the hostname defined above)

		127.0.0.1 	localhost <HOST_NAME>

	then reboot.

3. To use the WiFi module, the firmware has to be installed seperately and can be found [here](https://packages.debian.org/sid/firmware-ralink)

		sudo dpkg -i firmware-ralink_0.41_all.deb

## Step 2: Install OpenNI2 Driver

### Minimal Install

To use OpenNI2 with ROS, we only need the shared OpenNI2 libraries and the Drivers. Java is not necessary and doesn't need to be compiled. So to avoid installing and using up unneccessary space, I describe here first the minimal solution, and later the additions necessary to compile the java code and create an archive.

Install the following dependencies:

	sudo apt-get install git g++ make python libusb-1.0-0-dev libudev-dev pkg-config

clone OpenNI2

	git clone https://github.com/OpenNI/OpenNI2
	cd OpenNI2

edit ThirdParty/PSCommon/BuildSystem/Platform.Arm

	nano ThirdParty/PSCommon/BuildSystem/Platform.Arm

and replace

	CFLAGS += -march=armv7-a -mtune=cortex-a9 -mfpu=neon -mfloat-abi=softfp #-mcpu=cortex-a8

with

	CFLAGS += -march=armv7-a -mtune=cortex-a9 -mfpu=neon -mfloat-abi=hard

then run make to compile the OpenNI2 drivers and libraries

	PLATFORM=Arm make

Note: Because of the missing java compiler, the compilation will fail with OpenNI.java, and javac not found. This is ok since the drivers and shared libraries are already compiled at this point. The only thing missing are the samples.

Once the compilation is done, run the linux install script

	cd /Packaging/Linux
	sudo ./install.sh

copy libraries and includes to the system paths
	
	sudo cp -r Include /usr/include/openni2
	sudo cp -r Bin/Arm-Release/OpenNI2 /usr/lib/
	sudo cp Bin/Arm-Release/libOpenNI2.* /usr/lib/

create a package config file 

	sudo nano /usr/lib/pkgconfig/libopenni2.pc

and fill it with this:

	prefix=/usr
	exec_prefix=${prefix}
	libdir=${exec_prefix}/lib
	includedir=${prefix}/include/openni2

	Name: OpenNI2
	Description: A general purpose driver for all OpenNI cameras.
	Version: 2.2.0.0
	Cflags: -I${includedir}
	Libs: -L${libdir} -lOpenNI2 -L${libdir}/OpenNI2/Drivers -lDummyDevice -lOniFile -lPS1080.so

this will enable ubuntu to find the location of the drivers, libraries and include files.

To make sure it is correctly found, run

	pkg-config --modversion libopenni2

which should give the same version as defined in the file above (2.2.0.0)

Now the Xtion is ready to be used. Plug it in (if it is already, unplug it first), then run the sample program

	./Bin/Arm-Release/SimpleRead

Note: For the minimal install, the samples need to be compiled first. Add the following line to the makefile at the end

	core_samples: $(CORE_SAMPLES)

then run

	PLATFORM=Arm make core_samples

to compile the samples.

The SimpleRead returns the readings of middle point in the sensor data

~~~
./Bin/Arm-Release/SimpleRead
	[00066738]      631
	[00100107]      641
	[00133477]      654
	[00166846]      662
	[00200215]      670
	[00233584]      677
	[00266954]      679
	[00300323]      678
	[00333692]      675
	[00367061]      669
	[00400431]      657
	[00433800]      644
	[00467169]      629
	[00500538]      611
	[00533908]      592
	...
~~~

### Full Install

in addition to the dependencies of the minimal install, the default-jdk package is needed:

	sudo apt-get install default-jdk

now running

	PLATFORM=Arm make

will compile the drivers, shared libraries, jar files and samples.

If a compressed archive with the drivers and libraries is needed, install the following:

	sudo apt-get install doxygen

then run

	cd Packaging
	./ReleaseVersion.py Arm

which creates the archive OpenNI-Linux-Arm-2.2.tar.bz2 in Packaging/Final/

## Step 3: Install ROS Packages to run the Asus Xtion

The packages used to run the Asus Xtion on the UDOO are not availbale over apt yet, so they need to be compiled from source

First install the following dependencies, which will take some time and space (~900MB):

	sudo apt-get install ros-hydro-ros ros-hydro-rostopic ros-hydro-nodelet ros-hydro-camera-info-manager ros-hydro-roscpp ros-hydro-sensor-msgs ros-hydro-dynamic-reconfigure ros-hydro-image-transport ros-hydro-image-proc ros-hydro-depth-image-proc ros-hydro-tf 

then create a catkin workspace as described [here](http://wiki.ros.org/catkin/Tutorials/create_a_workspace), and check out the following packages in the src folder of the catkin workspace:

	git clone https://github.com/ros-drivers/openni2_camera
	git clone https://github.com/ros-drivers/openni2_launch
	git clone https://github.com/ros-drivers/rgbd_launch

Now the ros packages checked out above to the catkin workspace can be compiled with catkin_make

	cd ~/catkin_ws
	catkin_make

Once the packages are compiled, the Xtion is ready for use with ROS with

	roslaunch openni2_launch openni2.launch

Performance on the UDOO is good with 30 Hz at 640x480, compared to the Raspberry Pi that can only provide 30 Hz at 320x240 under no other load.

