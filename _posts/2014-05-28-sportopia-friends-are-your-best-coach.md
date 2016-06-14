---
layout: post
title: "Sportopia, friends are your best coach!"
description: "A smartphone application that allows you to send challenges to your friends"
category: 
tags: [coaching, exercise, motivation, app]
author: annevanrossum
---
{% include JB/setup %}

# Motivation

What if our smartphone would be a means for our friends and family to reach us to keep us motivated in exercising well? Wouldn't that help much better than setting our goals!? Everybody knows that taking up a sports, even only running, which does not need much of additional gear, is very difficult. You can motivate yourself by listening to nice music in the meantime, by reminding yourself of the nice feeling afterwards, or trying to measure an improvement in your physical condition. However, it is hard to listen to yourself at times. We are wired in such a way that we do not take ourselves too seriously, we do not admit it, but we know of ourselves that we make mistakes.

Friends! If we tell others of our achievements or if we can compete with them, this already changes a lot! Now we can talk about it, we think of it naturally in a nice social setting, others can compliment us, and so much more. Ideally we would not only communicate to each other after we have exercised, but before! Students at the University of Applied Sciences (in Dutch, the [Hogeschool van Amsterdam](http://hva.nl), or HvA), have created a technological means to do so! A smartphone application that you can use to motivate others in the form of **challenges**.

## Sportopia

The application developed by Kevin Groen, Aster Schultz, and Dennis Reep is called Sportopia and is available on [Google Play](https://play.google.com/store/apps/details?id=alm.motiv.AlmendeMotivator). It hooks up to your Facebook contacts, so it nicely integrates with your social network. It then enables you to send so-called challenges to your friends. For example, you can ask your roommate to get beer from the supermarket. A perhaps questionable activity with respect to exercise overall, but an activity nevertheless! As proof you can ask for evidence in the form of pictures. In the meantime you can try to motivate him with text messages.

![Sportopia Friends]({{ site.url }}/attachments/friends.png){: style="width: 300px"}
![Sportopia Challenges]({{ site.url }}/attachments/challenges.png){: style="width: 300px"}
![Sportopia Challenge closed]({{ site.url }}/attachments/challenge_closed.png){: style="width: 300px"}

## Machine learning

The reason we as DoBots are interested in this is because of the algorithms that are used for recommender systems are not so different from algorithms used for inference in general. In the [Sensei project](http://www.commit-nl.nl/projects/sensei-sensor-based-engagement-for-improved-health), our mother company [Almende](http://almende.com), is concerned with improving health using sensor-based engagement. The data kindly requested through the use of the Sportopia application can be used to fed into a recommender system to achieve exactly that. The creation of a virtual coach that is able to motivate people like we motivate our friends. There is very little data available on motivation except in-house in advertisement-driven companies (like Google). Concerning health, which is so much more important, than getting the "right" advertisement about some commercial product, we regretfully have no such datasets available. If you want to contribute to science, please download the app, and start to play!

The machine learning algorithms we are designing are so-called nonparameteric Bayesian methods, in this case applied to the collaborative filtering problem. The motivation texts people sent each other are distinguished according to several classes. Each class comes with a certain factor of failure or success. By looking at a lot of texts we can cluster what types of motivation type works for what type of people. The algorithms we use for clustering can be found on [github](https://github.com/mrquincle/aim_modules). Due to the fact that clustering is such a general concept, it is quite straightforward to realize that these types of modules can also be used in totally different contexts, from computer vision to robotics. These types of algorithms all end up in the freely accessible platform [Dodedodo](http://www.dodedodo.com/). If you consider yourself a bit of a machine learning expert, you definitely should take a look also at [our documentation](https://dobots.github.io/aim/).

## Open-source

The Sportopia application can be found on [github](https://github.com/almende/motivator). Copyrights belong to the students and us. If you want to use it in another context, please, contact us! We probably can work something out that makes everybody happy!

