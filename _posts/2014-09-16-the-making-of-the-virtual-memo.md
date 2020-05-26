---
layout: post
title: "The making of the Virtual Memo"
description: "How the Virtual Memo was made and what you can do with it"
category: 
tags: [bluetooth low energy, ibeacon]
author: annevanrossum
---
{% include JB/setup %}

# Virtual Memo

The virtual memo (or "virtuele memo") is a gadget created by a group of companies for the [Wots](http://wots.nl) 
conference. On the moment you can read a bit more on the [Wots page](http://wots.nl/gadget-virtuele-memo/), but 
those websites tend to be removed after the event, so this blog post will be a sticky reference to what this thing is
about and what you can do with it.

![Memo logo]({{ site.url }}/attachments/memo_logo.jpg){: .float-right style="width: 500px"}

## Section A: Winning the gadget

The app for the virtual memo does have two separate functionalities integrated in one application. The first part will
help the visitor of the conference to win this very gadget! This is done in the form of a quest that shows another
facet of the virtual memo. Namely that of an iBeacon.

The visitor gets a code, say `JV_Q5D8T6P7A9W` which he or she has to enter on the registration page of the smartphone 
application. Subsequently a route is calculated that allows the visitor to, indeed, visit stands of the companies that 
participated in the creation of the virtual memo. At each stand the app proposes an ice breaking question that might
help you to initiate the conversation with the stand owner. Let's hope it is not "Ah, this app sucks!". :-) On his or 
her turn the stand owner will give you a passcode that you can fill in that is coupled to your unique participant code
entered at the beginning. Where the virtual memo enters the picture here is in the form of devices at each stand. When
you are near a stand one of the round blobs will change color to indicate that you are close. This is done through
iBeacon advertisements and is not necessary for the quest.

Because pictures say more than thousand words, you will see here some screenshots of the virtual memo application:

![Memo guide]({{ site.url }}/attachments/memo_guide_wots1.png){: style="width: 280px"}
![Memo guide]({{ site.url }}/attachments/memo_guide_wots2.png){: style="width: 280px"}
![Memo guide]({{ site.url }}/attachments/memo_guide_wots3.png){: style="width: 280px"}
![Memo registration]({{ site.url }}/attachments/memo_register.png){: style="width: 280px"}

And the actual functionality that allows the visitor to fulfill the assignment:

![Memo list]({{ site.url }}/attachments/memo_list.png){: style="width: 280px"}
![Memo question]({{ site.url }}/attachments/memo_question_dobots.png){: style="width: 280px"}
![Memo list filled]({{ site.url }}/attachments/memo_list_filled.png){: style="width: 280px"}

## Section B: The gadget at home

At home you can follow the guide for home usage. You can glue the gadget to your fridge and use it as conventional
Post-it's®.


![Home guide]({{ site.url }}/attachments/memo_guide_home1.png){: style="width: 280px"}
![Home guide]({{ site.url }}/attachments/memo_guide_home2.png){: style="width: 280px"}
![Home guide]({{ site.url }}/attachments/memo_guide_home3.png){: style="width: 280px"}

The memo part is very rudimentary on the moment. The priority of the app development has been in providing the proper
functionality at the one-time Wots event. In the following screenshots you see the actual memo notes. You can navigate 
through them with the arrows at the top-right. Note that for this functionality a working link to the CommonSense
database is required somewhere in the past. The virtual memo does namely not have the functionality to actually store
the messages. This would have been neat by the way, and might be something we will provide later. When a memo is
discovered the screen shows an elaborate string below the note that indicates the id of this memo. Moreover, shortly
an alert will light up the LEDs on the memo. Of course, a virtual memo can only be seen if it is nearby and the "on"
button has been pressed.

![Note]({{ site.url }}/attachments/memo_note.png){: style="width: 280px"}
![Note]({{ site.url }}/attachments/memo_note_magnet.png){: style="width: 280px"}

You can navigate to other memos, if you are so lucky to have multiple, by navigating to "Alle memos" in the menu:

![Menu]({{ site.url }}/attachments/memo_menu.png){: style="width: 280px"}
![Menu]({{ site.url }}/attachments/memo_overview.png){: style="width: 280px"}

If you select the "okay" button at the top-right of a memo, it will briefly blink and send a sound alert. Then it will
be selected in the software and navigate to the stack of memo notes corresponding to that device.

## For nerds

There are a lot of improvements possible! Please, help us in whatever way you can! This project was not paid for by the
organizers (but we are happy we can present ourselves in this way). It is not finished!

The original developers for the iOS application didn't find the time to do so. Hence, this part of the app development
was a learning experience for us. Let's say it like this, one of our Apple fanboys didn't like iOS development so much
afterwards. :-) It is really long-winded to get into the Apple store. Something we anticipated and pushed for it, 
although not all bugs were yet pletted. What this means, is that the iOS app will always lag behind the Android one,
where an application shows up in a few hours after submission.

You can find all the code at [github](https://github.com/almende/virtuele-memo)! This code runs, although not smoothly,
on both Android and iOS. This means you might also be able to use parts of the code if you want to, for different 
projects. Perhaps even parts of it are useful in the browser. The application is a Cordova application (the commercial
variant is called PhoneGap). 

You will find for example [code](https://github.com/almende/virtuele-memo/blob/master/cordova/com.almende.VirtualMemo/www/js/senseapi.js) to communicate with the CommonSense API or you can find out easily which [plugins](https://github.com/almende/virtuele-memo/tree/master/cordova/com.almende.VirtualMemo) work both on Android and iOS with respect to Bluetooth Low-Energy or iBeacon support.

Please, help us by submitting issues to [github](https://github.com/almende/virtuele-memo/issues).






