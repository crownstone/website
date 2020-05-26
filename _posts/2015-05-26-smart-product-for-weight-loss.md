---
layout: post
title: "Smart Product for Weight Loss"
description: "A smart product for weight loss through behavior change"
author: annebekker
tags: [bluetooth low energy, behavior change, weight loss, habits, smartphone, master thesis]
---
{% include JB/setup %}

# A smart product for weight loss through behavior change

![Bitslab functions]({{ site.url }}/attachments/bitslab_functions.png "BitsLab functionality"){:.some-css-class style="width: 35%; float: right"}

Though an increased caloric intake is the most influential cause of the high and rising prevalence of overweight and obesity, there are no proper technical solutions yet that address this problem. Monitoring intake has shown to be an effective method for reducing intake. However, manual tracking tends to be inaccurate. Additionally, manual tracking requires too much mental effort for prolonged use.

## Design

Within her graduation project, [Anne Bekker]({{ site.url }}/hall-of-fame/) has created a design that automatically monitors the user’s eating patterns. The design, called the BitsLab, facilitates behavior change by helping people analyze and improve their food intake patterns. By changing habits, it focuses on long-term changes. The design consists of an add-on for smartphones and an accompanying app. The add-on is a chewing sensor, located on the zygomatic process (a facial bone).


## Sensing technology

![Talking, Chewing]({{ site.url }}/attachments/chewing.png "Talking, Chewing"){:.some-css-class style="width: 35%; float: right; margin: 0px 0px 15px 20px;"}

The chewing sensor, a piezoelectric transducer, monitors chewing trough bone conducted audio. The following sample demonstrates a recording of speech followed by the chewing of a pepernoot.

[Audio data]({{ site.url}}/attachments/chewing.mp3) is sent from the add-on to a smartphone app using Bluetooth LE, where it is analyzed by an algorithm. This measured data will provide users with an unbiased overview of their intake pattern.

## App

![App Screen]({{ site.url }}/attachments/bitslab_app_screen.png "App Screen"){:.some-css-class style="width: 18%; float: left; margin: 0px 20px 0px 0px;"}

The app (which is not yet developed) helps users to find out what it is they are actually craving at moments their craving for undesired eating strikes, and to find a substitute behavior that satisfies the same craving. Consecutively, the BitsLab helps users discover what triggers their craving by sending them prompts at times unplanned eating occurs. When filled in, these prompts gather categorized data on potential triggers which can be analyzed by the app and the user.

Once users have discovered what it is they are craving as well as what triggers this craving, they can start changing the habit. This consists of substituting the routine of unwanted eating by an alternative, healthy behaviour, which was found to satisfy the same craving.

![Loop]({{ site.url }}/attachments/bitslab_loop.jpg "Habit-changing loop"){:.some-css-class style="width: 30%; float: right;"}

In addition to changing habits, the app will teach users how to form new habits. By taking very small steps, and executing them consistently at a set point within their established routine, a habit will form without requiring much effort.

<br/>

![Prototype]({{ site.url }}/attachments/bitslab_prototype.jpg "Prototype"){:.some-css-class style="width: 35%; float: right; margin: 0px 0px 0px 20px;"}

## Proof of concept prototype

The prototype is able to detect chewing. The algorithm for the chewing recognition is based on the extraction and comparison of features of a pre-recorded chew to an unknown incoming sound stream. The movie below shows the chewing algorithm app in action. When the green rectangle appears, chewing is recognized. When the app detects that the user has stopped eating, it will turn back to black.

## A small demonstration

{% video /attachments/bitslab_movie.mp4 %}

# Literature

You can read more in Anne's [master thesis (pdf)]({{ site.url }}/attachments/thesis/annebekker.pdf).





