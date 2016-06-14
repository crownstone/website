---
layout: post
title: Self-learning robots
description: 
category: 
author: laurensbliek
tags: []
---
{% include JB/setup %}

# Self-learning robots

Autonomous robots are supposed to perform their tasks without human guidance.
One way to make this happen is by implementing some reward or penalty inside
the robot; something similar to pleasure and pain in humans and animals. If
the robot performs its task correctly, it receives a reward, if not, it
receives a penalty, and the robot will choose its actions in such a way that
it maximises its reward. This is studied in the area of [reinforcement learning](http://en.wikipedia.org/wiki/Reinforcement_learning).

Suppose an autonomous robot 'wakes up' in an unknown body and in an unknown
environment, and its task is to understand itself and the environment. This
is, of course, a huge task that can even take some of us humans a lifetime to
learn, so we will start with a simple version of this task: the robot has to
predict what it will perceive when it performs a simple action, like moving
one step forward. If it can succesfully do this in every possible situation
and for every possible action, we could say that the robot has some sort of
understanding of itself and the environment.

Now the problem of the creators of the robot is to implement a reward that
will cause the robot to predict correctly in every possible situation. This
can be divided in two goals: predict correctly, and explore new situations.
This is similar to the exploration vs. exploitation trade-off in reinforcement
learning, but a big difference is that we cannot say that moving towards a
specific location in the environment for example, should give a high reward,
since the environment is unknown. The only available information is the action
$$a$$ of the robot, and what the robot perceives: sensory data $$s$$.

Let's say that every timestep $$t$$ the robot can predict sensory data $$s_{t+1}$$ by
using current action $$a_t$$ and current sensory data $$s_t$$ and a predictor
$$P(s_t,a_t)$$. The predictor can 'learn' by using any machine learning algorithm,
for example by training a neural network. In general the predictor will not be
perfect, so we define a prediction error $$e_t=|s_{t+1}-P(s_t,a_t)|$$. This error
can be used to let the robot achieve its two goals of predicting correctly and
explore new situations.

##  Minimise prediction error

If the robot receives a reward for minimising the prediction error, the
expected behaviour is that the robot will choose those actions that are
easiest to predict, like standing still, to receive rewards easily. This makes
it achieve one goal, namely to predict correctly, but it will not cause the
robot to explore new situations.

##  Maximise prediction error

If the robot receives a reward for high prediction errors, this will generally
lead to explorative behaviour. The robot will move towards situations where it
expects to have a high error, thus receiving rewards. This should work if the
predictor can learn all of these situations, but in general it takes some time
for a predictor to learn something. Moreover, there might be situations where
the predictor cannot really learn to predict, like the noise on a television
screen or if the robot moves too fast. Then the robot will move towards these
situations and stay there because it will keep getting a high reward for this.

##  Maximise learning progress

A better solution is to give the robot a reward when it _decreases_ the
prediction error. A decrease in error is also called 'learning progress'. When
it maximises this learning progress, the robot might start simple by just
standing still. At first, the prediction error will be high because it is the
first time ever that the robot stands still. But it is not difficult to
predict what the robot will perceive in this situation, so the prediction
error will decrease. At some point, the error cannot decrease anymore (for
example, because it might be zero), so then the robot has learned the
situation and will move on to reach a situation where the error can still
decrease. This solves both the 'predicting correctly' part and the 'explore
new situations' part. If the robot ever encounters a situation where it cannot
learn to predict correctly, then the error will not decrease and the robot
will also move to a different situation.

Although there are still some drawbacks even to this last method, it is a good
method to let the robot predict correctly and also explore new situations. For
further reading, see:

 1. Oudeyer, Pierre-Yves, and Frederic Kaplan. "What is intrinsic motivation? a typology of computational approaches." _Frontiers in neurorobotics_ 1 (2007).
 2. Oudeyer, Pierre-Yves, et al. "The playground experiment: Task-independent development of a curious robot." _Proceedings of the AAAI Spring Symposium on Developmental Robotics_. Stanford, California, 2005.
 3. Schmidhuber, Jürgen. "Developmental robotics, optimal artificial curiosity, creativity, music, and the fine arts." _Connection Science_ 18.2 (2006): 173-187.


