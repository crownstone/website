---
layout           : page
title            : "Integrate Crownstone with Google Home"
header           : "Integrate Crownstone with Google Home"
description      : "Crownstone brings the functionality of switch, dimming, and presence information using Crownstones to Home Assistant"
markdown         : true
background-image : banner-cs-google.jpg
permalink        : integrations/google-home/
---

{% include JB/setup %}


# Google Home

Switching and dimming your Crownstones directly in your Google Home app, adding Crownstones to your Google routines, and more is possible thanks to the integration of Crownstone and Google Home. 

If you already have **Google Assistant**, you can also control the Crownstones with your voice. This is handy if you don't have your phone with you. All you need to do is to say something like: *"Hey Google, dim the lights!"*.


## Getting started

We have included some instructions below for you to set up the Crownstone integration with Google Home.
This guide assumes that you have already created a *Home* profile in the Google Home app.


### Adding the Crownstone integration in Google home

1. Go to your Google Home app on press on the **plus** button located at the top left corner.  
2. Select **Set up device** under the *Add to home* section.
3. Press on **Works with Google**.
4. In the search menu type *Crownstone* and select this option.

    ![Google home app]({{ site.url }}/attachments/google-home/home_1.png){: style="width:95%"}


5. In the new window, fill in the credentials of your Crownstone account and press on **Login**.
6. Once logged in, you will be requested to authorize Google to access your devices. To approve, press on **Allow**.
7. Great! Now your Google Home app is linked to your Crownstone account.

    ![Google home app]({{ site.url }}/attachments/google-home/home_2.png){: style="width:95%"}


### Adding your Crownstones to a room in Google Home

After linking your Crownstone account, the device(s) that you have in your Crownstone app will be also available in the Google Home app, but they are not assigned to any room. That's what we will do next:

1. Go to the end of the Google Home app to the section **Linked to you**. This section will display all the devices existing in your Crownstone's Sphere and that were just added to Google Home.
2. Tap on one of these devices and press the **Add to room** button located at the bottom. 
3. To confirm you want to *move* this device to your home press on **Move device**.
4. Finally, select a room in which you want to allocate this Crownstone and press on *Next*. 

    ![Add to room]({{ site.url }}/attachments/google-home/add_to_room.png){: style="width:95%"}
    
### Including your Crownstones into a Google routine

Google routines allow you to trigger a sequence of *actions* based on a specific *starter*. This starter can be a voice command you say to Google Assistant, a certain time or event. 
The action or actions triggered can be from getting weather updates to adjust home devices such as lights, plugs, and more. 
Below we show an example of a simple Google routine where a Crownstone device is included:

1. Go to *Assistant Routines* and press on the **+ New** button at the top right corner
2. Add a **starter**, which can be a voice command, a time, or event. For this example, we will choose a voice command: "Bed time story".
3. Next, we need to add an action (or sequence of actions) that will be triggered by the starter. Press on *Add action* and then press on **Adjust Home devices**.
4. In the next window, add a *check* to the box of **Adjust lights, plugs, and more** and press on the *arrow*.
5. Look in the list for the Crownstone you want to include in the routine and choose the state that you want it to have when this routine is called. You can also include other devices in this routine.
6. Press on **Save** to finish creating your new Assistant routine.

    ![Routines]({{ site.url }}/attachments/google-home/routines.png){: style="width:95%"}
    

## More information 

You can go to this [page]({{ site.url }}/will-be-up-soon/) to check some of the most frequent questions related to the Crownstone integration with Google Home.