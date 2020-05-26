---
layout: post
title: "Dimming random devices with the Crownstone"
description: "Dimming random devices with the Crownstone"
tags: [crownstone, pwm, dimmer]
author: bartvanvliet
---
{% include JB/setup %}

# Dimming random devices with the Crownstone

Just before we started moving to the new office, we tortured some random devices. Instead of just switching them on and off, we wanted to see what happened if they are dimmed. The Crownstone dims via [PWM](https://www.arduino.cc/en/Tutorial/PWM), which is basically switching on and off very fast. In our case it was switched at 625 Hz.

Unfortunately, we already threw away a lot of old devices as preperation for the move, but we still had a couple of devices to test on:

- Switching power supply
- PC speakers
- Monitor

We made a short [video](https://youtu.be/y1rjwLoWbDg) of the session.

{% youtube y1rjwLoWbDg %}

To our surprise, none of the devices were permanently damaged. This is hopeful for us, as it means less chance that a user destroys their equipment by accidentally dimming a device that shouldn't be dimmed (something that should not be possible, but you never know).

The monitor seemed to have the most trouble with PWM; it started to make a high pitched noise, and at when going from off to 3%, random green pixels appeared on the screen. This green noise stayed untill we rebooted both the Raspberry Pi and the monitor.

Another interesting thing was the current consumption of the monitor. In normal operation, the monitor consumes current in short bursts, 100 times per second. You can see this in the image below, where a graph of voltage (blue) and current (yellow) is shown over 0.02 seconds (1 period of AC power).

![Voltage and current curve of a monitor in normal operation]({{ site.url }}/attachments/pwm-monitor-100.png "Voltage and current curve of a monitor in normal operation"){: style="width: 800px"}

For a duty cycle of 50%, you start to see very different behaviour, you see more peaks of current consumption. It's likely that the power supply in the monitor draws current each time PWM is in the *on* state, which happens about 12 times as often as for the 50 Hz AC.
Since the monitor still needs the same amount of power, the current peaks at higher levels (because power = voltage * current summed over time, see Pavg at [wikipedia](https://en.wikipedia.org/wiki/AC_power#Real_number_formulas)).

![Voltage and current curve of a monitor at 50% PWM]({{ site.url }}/attachments/pwm-monitor-50.png "Voltage and current curve of a monitor at 50% PWM"){: style="width: 800px"}

At 3% duty cycle, the peaks are even shorter.

![Voltage and current curve of a monitor at 3% PWM]({{ site.url }}/attachments/pwm-monitor-3.png "Voltage and current curve of a monitor at 3% PWM"){: style="width: 800px"}

If you also performed similar experiments, or if you have better explanations, feel free to leave it in the comments!

