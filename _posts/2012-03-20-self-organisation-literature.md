---
layout: post
title: Self-organisation Literature
description: 
category: 
tags: []
author: annevanrossum
---
{% include JB/setup %}

# Self-organization literature

This list contains a series of papers which we consider as tightly related to
the concept of **self-organization**. DoBots is a spin-off of
[Almende](http://www.almende.com), a company that performs research on this
specific topic and DoBots is moderately "infected" by it. :-) Reading the
following literature might bring you a bit closer to the general thought
package of Almende, which was originally inspired by the [Santa Fé
Institute](http://www.santafe.edu) on the other side of the ocean. We will try
to say in two or three lines why we think a specific paper is interesting. We
add (pdf) links, but please, use google scholar if the links are outdated.  
  
## Embodied intelligence

  * New robotics: design principles for intelligent systems [Pfeifer, Iida,
Bongard], 2003 ([pdf](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.100.236&rep=rep1&type=pdf))

Brooks creating his purely reactive agents, said things like "intelligence
without representation" and "intelligence without reason", or more eloquently:
"the world is its own model." Very concrete: if a robot changes something in
the world, it does not need to remember it as such, it can just look it up.
The authors come up with a developmental paradigm to solve the problem of how
a robot even starts to know its own body. In a simulation "block pushers" are
evolved in which body morphology and brain are coevolved using gene regulatory
networks.

  * Developmental robotics: a survey [Lungarella, Metta, Pfeifer, Sandini], 2003 ([pdf](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.83.7615&rep=rep1&type=pdf))
  * From unknown sensors and actuators to actions grounded in sensorimotor perceptions [Ollson, Nehaniv, Polani], 2006 ([pdf](http://homepages.feis.herts.ac.uk/~comqdp1/publications/files/olssonl_cs.pdf))


## Empowerment

  * Empowerment: a universal agent-centric measure of control [Klyubin, Polani, Nehaniv], 2005 ([pdf](http://homepages.feis.herts.ac.uk/~comqdp1/publications/files/cec2005_klyubin_polani_nehaniv.pdf))

Empowerment is an attempt to define in an information theoretic sense the
concept of autonomy. It is the amount of information an agent can potentially
inject into the environment via its actuators and _capture later _via its
sensors. The principle of empowerment maximization has an agent act in such
way, that its perception later is the richest experience imaginable. This is
self-organization in a sensorimotor space.

See also:

  * Predictive information and explorative behavior of autonomous robots [Ay, Bertschinger, Der, Güttler, Olbrich], 2008 ([pdf](http://www.santafe.edu/media/workingpapers/08-02-006.pdf))
  * Information theory of decisions and actions [Tishby, Polani] ([pdf](http://eprints.pascal-network.org/archive/00005915/01/IT-PAC.pdf))

## Language grounding

  * Origins of communication in evolving robots [Marocco, Nolfi], 2006 ([pdf](http://gral.ip.rm.cnr.it/Pubblicazioni/English/Book%20Chapters/marocco_sab9.pdf))

The authors simulate four robots that undergo (neuro)evolution where they - in
the end - distribute themselves over two target areas in the arena. Their
output neurons in a neural networks are connected to communication sensors.
The paper is interesting because the authors show how the communication
patterns evolve over generations. It shows not only that motor behaviour can
co-evolve with communication skills, but also how the latter improve over
time. First the robots can only communicate that they already occupy an area,
later on they can communicate with each other such that they can distinguish
between one or multiple robots in a given area. Most remarkable, they really
come up with this representation entirely by themselves!

  * Evolving communication without dedicated communication channels [Quinn], 2001 ([pdf](http://www.isrl.illinois.edu/~amag/langev/localcopy/pdf/quinn01evolvingCommunication.pdf))

  
## Contraction theory

  * A study of synchronization and group cooperation using partial contraction theory [Slotine, Wang], 2005 ([pdf](http://web.mit.edu/people/wangwei/CooperativeControl.pdf))

Contraction theory tells you something that is very important to synthesize
systems. If two systems are contracting, then the system composed out of these
two subsystems will also be contracting. In other words, contraction theory
studies convergence between two arbitrary system trajectories. Partial
contraction theory extends this and describes convergence to something beyond
a unique trajectory, for example a manifold. This might not fall under the
conventional concept of self-organization, but the ability to say something
reasonable about systems connected to each other by arbitrary feedback loops,
is extremely valuable.

## Associative learning

  * Cognitive robotics, enactive perception, and learning in the real world [Morse, Ziemke], 2007 ([pdf](http://csjarchive.cogsci.rpi.edu/Proceedings/2007/docs/p485.pdf))

This paper and the one called "dynamic liquid association" introduce a new
type of artificial intelligence called _reservoir computing_. It makes use of
a static reservoir of neurons with fading activity. The latter is enforced by
scaling the network weight till the spectral radius is small enough.
Subsequently a simple network is used to read-out the network activity. This
paper is remarkable in the sense that it uses an old technique for that,
adaptive resonance theory (Grossberg). A simple auto-associative memory like
Kohonen networks which is worth to look at it for its own reasons.

## Polychronization

* Polychronization: computation with spikes [Izhikevich], 2006 ([pdf](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.125.5672&rep=rep1&type=pdf))

Random networks can produce time-locked patterns that are _not_ synchronous.
When delays exist between neurons specific patterns emerge when input is
provided. Simplifying, suppose a post-synaptic neuron gets activitated if
_two_ pre-synaptic neurons fire, when their spikes _after _two different
delays through the synaptic cleft, arrives at their destination. It is not
important when the neurons fire, but when their activity comes together at the
same time! In this way networks of neurons are formed. Very interesting, the
number of such polychronous groups far exceed the number of neurons.

  * Delay learning and polychronization for reservoir computing [Paugam-Moisy, Martinez], 2008 ([pdf](http://liris.cnrs.fr/Documents/Liris-3399.pdf))


