---
author: bartvanvliet
layout: post
title: "IRC, XMPP and WhatsApp"
description: "Different communication methods, IRC, XMPP, and Whatsapp."
category: 
tags: []
---
{% include JB/setup %}

# IRC, XMPP and WhatsApp


## IRC

IRC, short for Internet Relay Chat, is a protocol, created in 1988, for
instant messaging. There are many IRC client programs and many networks to
connect to, and most of the chat happens in channels (chat rooms), while
private messages are also possible. The nice thing about IRC is that most
servers are non commercial (w.r.t. privacy concerns), and requires very little
traffic. Since channels have a name and topic, it's easy to find a channel
that meets your interests, while you can also create your own channel for
friends. Channels have operators, who can manage a channel: kick or ban users,
set modes and inviting other people. Many more handy commands are available
for users, like setting yourself as being away or ignoring someone.
  
There is quite some development done around IRC: networks improve their
[servers](http://hg.quakenet.org), client programs are improved, BNCs (a proxy
to an IRC server that remain connected to the server when you go offline) are
getting more and more features. Next to that, many people create bots that are
connected to IRC to make live easier: bots that can lookup information, create
statistics, or control (game) servers.


## WhatsApp

At some point, WhatsApp became popular, and I didn't get why. It was just
another way to message people and it uses a customized protocol, with poor
[security](http://en.wikipedia.org/wiki/Whatsapp#Security). Furthermore: all
traffic goes via a single, commercial, company, which often makes it tempting
to sell users privacy (like Facebook and Google do).
This made me think: why not replace WhatsApp with a nice app that uses IRC?
The problem with IRC is that it isn't very noob friendly: it is made by and
for people who aren't scared of computers, with many options, commands and
modes. So the app would have to hide all this and show an easy interface for
the user. I've been talking to IRC developers about this and there are a
couple of problems: IRC server do not store messages your receive when you're
offline (you'd need a BNC for that) and sending something to a certain nick
does not guarantee that this nick is actually the person you think it is.


## XMPP

Recently I've been reading myself into XMPP (for[http://www.dodedodo.com](http://www.dodedodo.com)) and figured that this would
is perfect for the app, and of course it turns out that WhatsApp simply uses a
customized XMPP protocol. XMPP basically works like email: everyone can setup
a server and users get an address (JID) in the form of:
user@server.com/device. When you send a message to another user, the message
goes via your server, to the other user's server and ends up at the other
user. Because XMPP always uses a login it does not have the same problem that
IRC has. Furthermore, there is an XMPP standard
[extension](http://xmpp.org/extensions/xep-0013.html) that enables message
storage when a user is offline, and retrieval by the user when he connects
again.
  
So I was looking for XMPP [apps](https://play.google.com/store/search?q=xmpp)
and it seems that most apps assume you already have an account, and don't look
very nice. I think that if there was an app that uses standard XMPP, it would
be a very nice replacement of WhatsApp.

