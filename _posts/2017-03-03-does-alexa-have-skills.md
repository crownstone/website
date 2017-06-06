---
layout: post
title: "Does Alexa have skills?"
description: "Developing Smart Home skills for Alexa"
tags: []
author: 
---
{% include JB/setup %}

# Alexa Skills Challenge

`Dependency summary: git, npm, nodejs, Github account, Amazon developer account, Amazon AWS account`

Amazon has an online challenge to compete with Google for voice services. At [devpost.com](https://alexa.devpost.com/) you can register with your Github account for a submission and win prizes up to $5,000 including devices. Subsequently, register a [development account](https://developer.amazon.com/login) or login. Here you can find a:

* [dashboard](https://developer.amazon.com/home.html)
* [skills list](https://developer.amazon.com/edw/home.html#/skills/list)

To be able to develop skills for free it is easiest to use AWS. Yes, we are delving into the Amazon ecosystem!

* [aws](https://console.aws.amazon.com)

This is not really, really required, but Amazon has to reach the beautiful code you are gonna to write somehow.

Clone the Alexa Skills sdk:

    git clone git@github.com:alexa/alexa-skills-kit-sdk-for-nodejs

Just a quick note on the side, if you want to copy something from `vim`, you can use `V` to switch to visual mode and then `:'<,'>:w !xclip -se c` to copy it to clipboard.

In this case we want to create a so-called:

* [smart home skill](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/overviews/understanding-the-smart-home-skill-api)

![Alexa Smart Home Ecosystem]({{ site.url }}/attachments/alexa_smart_home_ecosystem.png)

As explained at [this page](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/understanding-the-different-types-of-skills) the smart-home skill is less complicated than the custom skill because Amazon defines the interaction model. There are the following device directives:

* turn on / turn off
* increase / decrease
* dim 

Besides that, Amazon also defines the words the user can use to initiate these directives. How the Crownstone reacts upon one of these requests is the content of the nodejs server and is called a *skill adapter*.

Amazon did not include directives to e.g. read out the power consumption of a device, turn on groups of devices, have devices turn on or off after a certain period, or other more sophisticated requests.

At Amazon pick the right region, Ireland for English skills in Europe:

* [AWS console](https://eu-west-1.console.aws.amazon.com/console/home?region=eu-west-1#)

Configure an Alexa Smart Home trigger:

* [Smart Home trigger](https://eu-west-1.console.aws.amazon.com/lambda/home?region=eu-west-1#/create/configure-triggers?bp=alexa-smart-home-skill-adapter&firstrun=true)



