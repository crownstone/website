---
layout: post
title: "Recognize that fridge!"
description: "Recognition of household appliances like fridges and televisions."
tags: []
author: merijnvantooren
published: true
---

{% include JB/setup %}

# Device recognition

After thorough preparation, we have lift-off with the development of device classification for the Crownstone! For now I'm using second-hand data and starting with basic techniques, but with an accuracy in tests of 93.7% after just the first week of actual implementation and experimentation, the future looks bright!

Here’s some stats and a confusion matrix of my latest cross-validation test, where you can see what kind of devices we can already identify. This classification method takes ‘traces’ of 24 hours as input, with a power level in Watts, each second. I extract 14 hand-implemented features from that data, and feed them through a [Random Committee classifier](http://weka.sourceforge.net/doc.dev/weka/classifiers/meta/RandomCommittee.html) from the Weka set. RandomCommittee follows the same concept as [Random Forest](https://en.wikipedia.org/wiki/Random_forest).

The numbers correspond to classification results. The row pertains to the device from which the data was measured, and the column indicates the decision made by the classifier.

## Stratified cross-validation

Results are promising!

|----+----|
| Description                        | Quantity          | Percentage
|------------------------------------|-------------------|-------------|
| Correctly Classified Instances     |   1709            |   93.7466 % |
| Incorrectly Classified Instances   |    114            |    6.2534 % |
| Kappa statistic                    |      0.9337
| Mean absolute error                |      0.0065
| Root mean squared error            |      0.0537
| Relative absolute error            |     14.792  %
| Root relative squared error        |     36.2652 %
| Total Number of Instances          |   1823


## Confusion Matrix

The confusion matrix shows which devices are easy and which ones are hard to distinguish from each other.

     a   b   c   d   e   f   g   h   i   j   k   l   m   n   o   p   q   r   s   t   u   v   w   x   y   z  aa  ab  ac  ad  ae  af  ag  ah  ai  aj  ak  al  am  an  ao  ap  aq   <-- classified as
     4   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   a = Alarmclock
     0  89   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   b = Amplifier
     0   0  43   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   c = BeanToCupCoffeemaker
     0   0   0  13   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   d = Breadcutter
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   2   0   0   0   0   0   0   0   0 |   e = CdPlayer
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   f = Charger-PSP
     0   0   0   0   0   1   3   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   g = Charger-Smartphone
     0   0   0   0   0   0   0  80   0   0   0   0   0   0   0   0   0   2   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   h = Coffeemaker
     0   0   0   0   0   0   0   1  14   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0 |   i = Cookingstove
     0   0   0   0   0   0   0   0   0  23   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   j = DigitalTvReceiver
     0   0   0   0   0   0   0   0   0   0  73   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1   0   0   0   0 |   k = Dishwasher
     0   0   0   0   0   0   0   0   0   0   0   3   0   0   0   2   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   l = DvdPlayer
     0   0   0   0   0   0   0   0   0   0   0   0  28   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   4   0   0   0   0   0   0   1   0   0   0   0   0   0   0 |   m = EthernetSwitch
     0   0   0   0   0   0   0   0   0   0   0   0   0   9   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   n = Freezer
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   3   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   o = Iron
     0   2   0   0   0   0   0   0   0   0   0   0   0   0   0  74   0   0   0   1   0   0   0   0   0   1   0   1   0   0   0   0   2   2   0   0   0   0   0   0   0   0   3 |   p = Lamp
     0   0   0   0   0   0   0   0   0   0   1   0   0   0   0   0   7   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1   0 |   q = LaundryDryer
     0   0   0   0   0   0   0   3   0   0   0   0   0   0   0   1   0  56   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   r = MicrowaveOven
     0   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0  10  11   0   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   s = Monitor-CRT
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0  12 176   0   0   0   0   0   0   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   0 |   t = Monitor-TFT
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0  13   0   0   0   2   0   0   0   1   0   1   0   0   0   0   0   0   0   0   0   0   0   0 |   u = Multimediacenter
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1   0 150   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   v = PC-Desktop
     0   1   0   0   0   0   0   0   0   0   0   0   0   0   0   1   0   0   0   0   0   1  64   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   w = PC-Laptop
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0  11   0   0   0   0   0   0   0   0   0   3   0   0   0   0   0   0   0   0   0 |   x = Playstation3
     0   0   0   0   0   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0  15   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |   y = Printer
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   7   0   0   0   0   0   0   0   1   0   0   0   0   0   0   0   0   0 |   z = Projector
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 204   0   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0 |  aa = Refrigerator
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   9   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |  ab = RemoteDesktop
     0   0   0   0   0   0   0   0   0   0   0   0   4   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0  36   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |  ac = Router
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1   1   0   1   0   0   0   0   0   0   0   5   0   0   0   0   0   0   0   0   0   0   0   0   0 |  ad = SolarThermalSystem
     0   0   0   0   0   0   0   0   0   0   0   1   0   0   0   0   0   0   0   1   1   0   0   0   0   0   0   0   0   0  25   0   0   0   0   0   0   0   0   0   0   0   0 |  ae = Subwoofer
     0   0   0   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0  22   0   0   0   0   0   0   0   0   0   0   0 |  af = Toaster
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1   0   1   0   0   0   0   0   0   0   0   0   0  33   1   0   0   0   0   0   0   0   0   0 |  ag = TV-CRT
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   5   0   0   0   0   0   0   0   1   0   1   0   0   0   0   0   0   0 110   0   0   0   0   0   0   0   0   0 |  ah = TV-LCD
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   0   0  28   0   0   0   0   0   0   0   0 |  ai = USBHarddrive
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0  10   0   0   0   0   0   0   0 |  aj = USBHub
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |  ak = VacuumCleaner
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   2   0   0   0   0   0   0   0   0   0   0   0   1   0   0   0  16   0   0   0   0   0 |  al = VideoProjector
     0   0   0   0   0   0   0   0   0   0   2   0   0   0   0   1   0   2   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0  51   0   0   0   0 |  am = Washingmachine
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   2   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 |  an = WaterBoiler
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   0   0  55   0   0 |  ao = WaterFountain
     0   0   0   0   0   0   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0 133   0 |  ap = WaterKettle
     0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   2   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   4 |  aq = XmasLights
{: style="font-size: 9px"}

Ideas for improvement are many, and this was just the first week. Things are looking up for classification! Cheers~
