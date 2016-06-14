---
layout: post
title: Echo State Networks
author: remcotukker
description: 
category: 
tags: ["robot control", "echo state networks"]
---
{% include JB/setup %}

# Echo State Networks

Just a quick post for people that are interested in Echo State Networks.
  
The past months I spent my time at DoBots to investigate Echo State Networks
(ESNs) as part of my studies Cognitive Neuroscience. ESNs are a type of
recurrent neural network that is easier to train than conventional recurrent
neural networks. Those conventional networks require gradient-based learning
algorithms, such as backpropagation through time (BPTT), and can have problems
with convergence. In order to circumvent this problem, the recurrent
connections are not trained at all in the ESN approach. Instead, the recurrent
neural network is used as a reservoir of non-linear combinations of the input
data, and this reservoir is used to train a simple perceptron output node with
regression. The resulting network gives especially impressive results in
timeseries prediction.
  
Here is a scholarpedia link with a better (and short) explanation of the idea
and two good review articles:

  * [http://www.scholarpedia.org/article/Echo_state_network](http://www.scholarpedia.org/article/Echo_state_network)
  * M. Lukosevicius and H. Jaeger. Reservoir computing approaches to recurrent neural network training. Computer Science Review, 3(3):127-149, 2009.
  * B. Schrauwen, D. Verstraeten, and J. Van Campenhout. An overview of reservoir computing: theory, applications and implementations. In proceedings of the 15th European Symposium on Arti cial Neural Networks. 2007.

##  Classification of context

I investigated classification with ESNs. Specifically, classification of
environments and abstract context. This can be useful in a couple of
situations. First, you may want to create a robot controller based on a
recurrent neural network, but get stuck at the training procedure. As
explained earlier, an ESN can solve this problem. Another possibility is to
create a behavioral robot controller and use the output nodes of the ESN to
inhibit or enhance specific behaviors, depending on the context. For example,
you could use a small ESN to process battery status and light sensor
information to create a sleeping pattern or simply to make a robot look for
energy when the battery is almost empty. Unfortunately, I did not get around
to implementing the ESNs in an actual robot for demonstration. Nevertheless, I
adapted the basic ESN concept to deal with different timescales, by using a
continuous times reservoir instead of a discrete reservoir. This system can
solve some artificial but non-trivial abstract tasks. The main challenges for
a robot implementation will be the use of continuous input signals instead of
binary input and the timing of the input signals: in my system, the input is
given every 15 timesteps and at the end of every such trial, the output is
read. In a robot, this will probably not be so simple.  
  
For more detailed information and the matlab code for the ESNs, see
[https://github.com/RemcoTukker/PFC-ESN](https://github.com/RemcoTukker/PFC-ESN)  
  
For reference, the most common application of ESNs in robots are for motor
control and inverse modelling of robot control. Here's some articles about
these applications, in chronological order:

  * P. Ploger, A. Arghir, T. Gunther, and R. Hosseiny. Echo state networks for mobile robot modeling and control. RoboCup 2003: Robot Soccer World Cup VII, pages 157-168, 2004.
  * M. Salmen and P.G. Ploger. Echo state networks used for motor control. In Robotics and Automation, 2005. ICRA 2005. Proceedings of the 2005 IEEE International Conference on, pages 1953-1958. IEEE, 2005.
  * A.F. Krause, V. Durr, B. Blasing, and T. Schack. Evolutionary optimization of echo state networks: multiple motor pattern learning. 2010.
  * C. Hartland and N. Bredeche. Using echo state networks for robot navigation behavior acquisition. In Robotics and Biomimetics, 2007. ROBIO 2007. IEEE International Conference on, pages 201-206. IEEE, 2007.
  * T. Waegeman, E. Antonelo, F. Wyels, and B. Schrauwen. Modular reservoir computing networks for imitation learning of multiple robot behaviors. In Computational Intelligence in Robotics and Automation (CIRA), 2009 IEEE International Symposium on, pages 27-32. IEEE, 2009.

