---
layout: post
title: "Romo, the surveillance robot"
description: ""
category: 
tags: []
---
{% include JB/setup %}

# Romo, the surveillance robot

As a graduation project, I investigated the possibility of a surveillance robot with visual sensors that could learn what its environment looks like and how its body works, with as little prior information as possible. For example, when rotating right, the camera pixels would shift to the left. These relations between action and perception are learned using a specific type of local linear model, and the actions are chosen based on the principle of maximising the learning progress. The latter is explained in a [previous blog](http://www.dobots.nl/blog/-/blogs/self-learning-robots).

In that blog, it was also explained that prediction can be used to learn something about the body and environment of the robot. At each timestep t, the robot uses the action ut and the sensor data st to predict the sensor data of the next timestep, $$s_{t+1}$$. How this can be done will be explained shortly in this blog.

## Shuffled Linear Model

The relation between st+1 and (ut, st) is in general not a linear relation. So we cannot write $$s_{t+1} = A s_t + B u_t$$ for all ($$u_t$$, $$s_t$$). However, around a local point  (ut(i), st(i)), that is, for a specific action and a specific location in the environment, the relation is linear. For example, when rotating right, while looking at a painting, all camera pixels shift to the left by the same amount, which can be written down by using a translation matrix which has 1''s above the main diagonal. But for other locations, for example when looking at objects of greater or smaller depth, and for other actions like standing still or moving backwards, a different linear relation exists.

Since there is an infinite number of possibilities for the sensor data and the actions available, it is not possible to find the right linear relation for all of these possibilities. However, the Shuffled Linear Model  can be seen as a Monte Carlo simulation for this problem by using a finite number of these possibilities, randomly. A finite number of sensor data and actions is chosen beforehand, randomly, and these are assigned to the same number of linear models. Then the linear models are summed together smoothly by multiplying them with Gaussian functions. The resulting formula would be something like this:

$$
s_{t+1} = \sum_t e^{-(||s_t-v_i||^2+||u_t-w_i||^2)}(A_i s_t+B_i u_t)
$$

Here, the $$v_i$$ and $$w_i$$ are chosen randomly. Linear regression can then be used to determine the matrices $$A_i$$ and $$B_i$$. Details can be found in the [Shuffled Linear Model paper](http://arxiv.org/abs/1308.6498) and in my [master thesis](http://repository.tudelft.nl/view/ir/uuid%3A3f12dd7f-8761-4738-a224-95de36f7b53d).

## Model learned by Romo

So what does it look like when using these techniques? Can Romo understand its body and environment? To a certain extend, yes. The robot learned that rotating right corresponds to a linear model with larger values above the main diagonal:

![Romo model]({{ site.url }}/attachments/romo_model.png "Romo linear model")

Similar relations were found for rotating left, and at different speeds, and for standing still (which had mainly large values near the main diagonal, like the identity matrix).

## Noticing changes to the environment

So now we have a robot that can learn some simple things about itself and the environment. How can we use this as a surveillance robot? Well, imagine that someone wants to break into a room where the robot has finished learning the model. Assuming that the robot can predict every timestep what sensor data it should receive, if someone breaks into a room this should cause the robot to get different sensor data from what it predicted. This prediction error can be measured, and a high prediction error should indicate something different to the environment or to the robot itself (for example someone moving the robot).

Some of this can be found in the following movie.

{% youtube qHFX0Mr_RoA %}

In conclusion, the robot can detect some changes to the environment, like humans entering the scene or bright objects that were not there before. Other things like dark objects or changes near a part of the environment that is particularly noisy, are harder. So this robot is not a real surveillance robot yet, but it certainly has potential for the future.
