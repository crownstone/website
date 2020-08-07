---
layout      : post
title       : "How would my home react to me?"
description : "Crownstones know where you are if you carry a smart device with you such as your smartphone. Crownstones use the position of this smart device through measuring Bluetooth Low Energy signals. This makes it possible for the Crownstones to react upon your presence and proximity."
tags        : [smart home, automation]
author      : teresavandam
picture     : attachments/blog/cs_localization_1.jpg
excerpt     : "Lights and devices can be turned on or off depending on your presence. Your presence is determined by pinpointing the position of your smartphone. This smart home function, called indoor localization, is very new! You might have some questions on how this would work out in your home. That's what we will talk about in this post..."
---
{% include JB/setup %}

# Indoor localization, how does it work?

In our previous posts we illustrated some scenarios where we made use of the **presence-aware** behaviour of the Crownstones to perform certain tasks such as automatically turning on the [lights]({{ site.url }}{% link _posts/2020-07-01-the-magic-of-crownstone-scenarios.md %}) when someone is in a specific room and it is getting dark, or automatically turning off your [television]({{ site.url }}{% link _posts/2020-08-03-beyond-smart-lighting.md %}) and other electronic devices when leaving home. This presence-aware behaviour is technically possible thanks to Crownstone pinpointing the location of your smartphone. This is called: **indoor localization**. We will talk about indoor localization in more detail in this post. Hopefully, you get a better idea on the different factors influencing the techniques to do indoor localization. This makes it easier to understand how useful it can be and also to understand what its limitations are.

![Entering Home]({{ site.url }}/attachments/blog/cs_localization_1.jpg)

# The basics

Crownstones know where you are if you carry a smart device with you such as your smartphone. Crownstones use the position of this smart device through measuring Bluetooth Low Energy signals. This makes it possible for the Crownstones to react upon your **presence** and **proximity**. This ability is called indoor positioning. To enable this feature, you need to have a minimum number of Crownstones and train them by walking a few rounds in a specific room. You do the same in the rest of the rooms so the **Crownstone's AI** can learn in which room you are! During **training** you carry your phone like you normally would do when you are home. 
Four Crownstones in the home is the absolute minimum. The more Crownstones are present, the more information the Crownstones have on your location. 
The localization works best with at least two Crownstones per room. The Crownstones in other rooms also contribute to the positioning accuracy because the Bluetooth signals go through walls. Hence, two Crownstones per room is often sufficient (the Crownstones in neighbouring rooms are participating as well).

![Entering the bedroom]({{ site.url }}/attachments/blog/cs_localization_2.jpg)

# Hello Home, Good Bye Home!

Thanks to indoor localization your lights can automatically welcome you when you arrive home. For the Crownstones to detect your presence it might take up to 10 seconds, which means that if you walk along the hallway to get to the toilet, the lights at the hallway won’t automatically turn on. On the other hand, if you stay in the hallway for a longer time, the Crownstone will realize that you actually are in the hallway and the lights will turn on. And what about leaving a room? Well, if you leave a room for a few minutes and then you come back, your lights won't automatically turn off.  In this case the Crownstones will still hear you, but they hear you’re in a different room. Then they wait 5 minutes to avoid turning stuff off and on. Crownstones detect your “absence” (not presence) after not hearing from you for 5 minutes. After that time, they will think that you have left the house (the sphere). Therefore, your lights and electronic devices (that don’t need to be on when you are not at home) can be turned off after you leave home for more than 5 minutes.

![Leaving Home]({{ site.url }}/attachments/blog/cs_localization_3.jpg)

The delay with which your home detects that you go from room to room can be up to 10 seconds as mentioned above. This depends on the model of your phone. You might think: "That's too slow! Within that period I would have flipped the switch manually!" Rightfully so, we think! However, this does not mean that it is useless that your house knows where you are. There are a couple of typical scenarios where a delay does not matter much:
* You **sit on the couch** and it is getting dark. The lights can turn on automatically if the house knows that you are there. It does not matter much if the lights turn on 10 seconds after sunset! Presence information is necessary though or lights will go on even if you are not there!
* You go to bed and do not want to worry about **turning off** stuff. In contrast to turning lights on, a delay does not matter when you turn things off. The only thing that matters is that you don't have to do it manually anymore! No more rounds of checking if everything has turned off!
* You like to have lights on not just where you are, but also in **neighboring rooms**. This is a matter of personal preference. Some people just do not like to peer into or walk into a dark hallway or any other room. If you turn on the lights in all neighbouring rooms a delay is not important anymore either. Unless you start running in the house, that is!

Think about it as with GPS. Even though it's not perfect, it's very useful! Moreover, GPS became more accurate and faster over time! And of course you can use the Crownstone system without indoor localization as well!

# How accurate is it?

Another question that might come to your mind would be: how accurate is the indoor localization? Well, to answer that question, we will need to explain more in detail the technicalities of the Crownstones. However, that’s not the purpose of this post, but we can give you a general idea. First of all, the **accuracy** depends on several factors, such as the quality of the training, the number of Crownstones you have, the location of the Crownstones themselves, the presence of metal appliances, having your phone inside your pocket or purse, presence of people themselves, etc. Regarding the quality of the **training**, it is recommended that you grab your phone and walk around the room trying to cover most places in the room and trying to hold your phone the same way you do when not training. During the training process the **Crownstone’s AI** collects all signal strengths while the user walks around the room. After this, a **fingerprint** of the room is generated. Subsequently, when a certain pattern of signals is detected, it is matched with the fingerprints and then the most reasonable guess for the current room is output. Therefore, the influence of the quality of the training plays an important role.

![Localization example]({{ site.url }}/attachments/blog/cs_localization_example.jpg){: .float-right}

With respect to the **number** and **location** of the Crownstones, for indoor localization it is not the best idea to have several Crownstones only next to each other or only on a single axis. By doing so, we do not provide enough information to the Crownstones to identify (i.e. differentiate) in which room we are. You can imagine for instance 2 rooms separated by a wall and in this wall we have 2 Crownstones (depicted as the two orange boxes in the drawing below) behind two separate power outlets. In this setting the Crownstones will have troubles identifying in which room you are. This is because the strength of the signals received will be almost the same. To improve this, we need to increase the number of Crownstones per room and distribute them in different places: behind power outlets, wall switches and ceiling lamps. In this way the Crownstones will be provided with a  better guess for the room in which you are.

Regarding how the presence of other **materials** can influence the accuracy of indoor positioning, we can say that the strength of the received signals gets reduced when the signals need to travel through other high density or conducting materials. An example of this can be metal appliances which **block** and **reflect** wireless signals such as fridges, ovens, washing machines, dryers, etc. Again, increasing the number of Crownstones will diminish these effects together with keeping your phone in a more visible place such as on the top of a table. Finally, regarding the presence of **people** themselves, the human body is  a “barrier” for these Bluetooth signals. This means that the strength of the signals drops when our bodies are on the way. For example, a consequence of this can be that your Crownstones think that you are in a different room when you are sitting on your phone while watching television. Therefore, better to put your phone over the coffee table or in a less hidden place. 

![Reading a book]({{ site.url }}/attachments/blog/cs_localization_4.jpg)

# Conclusion

The indoor positioning feature of Crownstones is meant to make home automation possible. It provides users the ability to let their home know where they are to enhance the smart home experience. If you are not carrying a smart device with you, your entire home should work in the old-fashioned way. A smart home should not make the situation worse! For instance, when going to the bathroom at night, you can still use your wall switch (when configured with switchcraft). We touched upon quite a few factors that might influence the usefulness of the indoor localization function for you. Factors like the quality of the training, the presence of objects or people, and the number and locations of Crownstones. There are still challenges to be solved. At Crownstone we will keep working on the self-learning algorithms to improve the indoor localization function. We're convinced that a **truly smart** home knows where you are and will use that to make your life a tad more comfortable!
