---
layout: post
title: "A nonparametric Bayesian lesson"
description: "An introduction to nonparametric Bayesian methods"
category: 
tags: [machine learning, inference, statistics]
math: true
---
{% include JB/setup %}

# Bayesian

It is quite hard to withstand the reasoning of Jaynes (it is a pity he couldn't finish his book) in "[Probability Theory](http://www.amazon.com/Probability-Theory-The-Logic-Science/dp/0521592712)". In chapter 5 Jaynes comes with a beautiful example that shows that exactly the same information can lead to totally different conclusions. It is very illustrative considering religious, ethical, or political views. I can only do justice by using an extended quote (forgive me!):

> The new information $$D$$ is 'Mr $$N$$ has gone on TV with a sensational claim that a commonly used drug is unsafe' and three viewers, Mr $$A$$, Mr $$B$$, and Mr $$C$$, see this. Their prior probabilities that the drug is safe are $$(0.9, 0.1, 0.9)$$, respectively; i.e. initially Mr $$A$$ and Mr $$C$$ were believers in the safety of the drug, Mr $$B$$ a disbeliever. 
> But they interpret the information D very differently, because they have different views about the reliability of Mr $$N$$. They all agree that, if the drug had really been proved unsafe, Mr $$N$$ would be right there shouting it; that is, their probabilities $$P(D\vert\overline{D}I)$$ are $$(1,1,1)$$; but Mr $$A$$ trusts his honesty while Mr $$C$$ does not. Their probabilities $$P(D\vert SI)$$ that, if the drug is safe, Mr $$N$$ would say that it is unsafe, are $$(0.01, 0.3, 0.99)$$, respectively. 
>
> Applying Bayes theorem $$P(S\vert DI)=P(S\vert I)P(D\vert SI)/P(D\vert I)$$ [...] we find their posterior probabilities that the drug is safe to be $$(0.083, 0.032, 0.899)$$, respectively. Put verbally, they have reasoned as follows:
>
> * Mr $$A$$: 'Mr $$N$$ is a fine fellow, doing a notable public service. I had thought the drug to be safe from other evidence, but he would not knowingly misrepresent the facts; therefore hearing his report leads me to change my mind and think that the drug is unsafe after all. My belief in safety is lowered [...] so I will not buy any more'
>
> * Mr $$B$$: 'Mr $$N$$ is an erratic fellow, inclined to accept adverse evidence too quickly. I was already convicned that the drug is unsafe; but even if it is safe he might be carried away into saying otherwise. So, hearing his claim does strengthen my opinion, but only [a bit]. I would never under any circumstances use the drug.'
>
> * Mr $$C$$: 'Mr $$N$$ is an unscrupulous rascal, who does everything in his power to stir up trouble by sensational publicity. The drug is probably safe, but he would almost certainly claim it is unsafe whatever the facts. So hearing his claim has proactically no effect on my confidence that the drug is safe. I will continue to buy it and use it.'

## Nonparametric Bayesian

This Bayesian prelude makes it clear that the structure of the prior is very important. Very interesting problems can be solved if the prior gets sufficient structure. A nice workshop has been held at Como, Italy, on Applied Bayesian Nonparametrics, from the Applied Bayesian Statistics School, [ABS14](http://www.mi.imati.cnr.it/conferences/abs14.html). The lecturers were [Michael Jordan](http://www.cs.berkeley.edu/~jordan/) and [Francois Caron](http://www.stats.ox.ac.uk/~caron/) who talked about Dirichlet processes and Beta processes, respectively. If you don't know this Michael Jordan, you might instead have heard one time or another from one of his students, under which e.g. Yoshua Bengio, Tommi Jaakkola, Andrew Ng, Emanuel Todorov, and Daniel Wolpert. But, enough small talk, let's face the truth.

### The Chinese Restaurant Process

It sounds a bit childish, but the Chinese Restaurant Process is an actual stochastic process with great expressive power. Imagine a restaurant with a seamingly infinite number of tables. The first customer enters the restaurant and picks the first table. A second customer enters the restaurant and sits with the first customer with probability $$\frac{n_{table}}{\alpha+n}$$ and at a new table with probability $$\frac{\alpha}{\alpha+n-1}$$. Here $$\alpha$$ is a so-called concentration parameter which causes more or less tables to occupied with respect to the number of customers. For example, $$\alpha=1$$ gives a probability of opening a new table for the second person $$n_i=2$$ equal to $$1/2$$. The peculiarity of this process is that if you check the probability of a random two people, say customer $$n_i=64$$ and $$n_j=94$$, the probability they sit at the same table is also exactly that, a $$1/2$$! The number of people sitting at the same table as the first customer is on average the same number of people sitting at the same table as the last customer! These properties have to do with the fact that this is an exchangeable process. You can hone your intuition with the [assignments from Francois](http://www.stats.ox.ac.uk/~caron/code/abs2014/html/BNP_clustering.html) if you like. 

It is proven by [de Finetti](https://en.wikipedia.org/wiki/De_Finetti%E2%80%99s_theorem) that a process with exchangeable observations can be written in such way that there are underlying hidden (latent) variables that are i.i.d. (independent and identically distributed) according to some unknown distribution. It is interesting (and not trivial) that such a distribution can be found! The distribution that corresponds to the Chinese Restaurant Process is one of the most used processes in nonparametric Bayesian methods, namely the [Dirichlet process](https://en.wikipedia.org/wiki/Dirichlet_process). 

### Hierarchy 

Why are these stochastic processes so interesting? With a Dirichlet process it is possible to model a generative procedure in which data generates clusters ad infinitum. New data can always need to new clusters. These kind of mechanisms might exist in other machine learning methods. For example, in [ART](http://www.scholarpedia.org/article/Adaptive_resonance_theory) new category nodes are added during the learning process. However, nonparametric Bayesian hierarchies is the first method that describes how to this in a full Bayesian setting. This means no adhoceries. The inference can be done over the structure of the model and the parameters of the model simultaneously. In other words, the model reasons over the parameter per table, as well as the number of tables at the same time.

### Examples

To explain how inference proceeds is something for another blog post (check the [code](https://github.com/mrquincle/aim_modules/tree/master/DirichletModule)). It is more interesting for now to see how these methods have been applied already.

An illustrative example is from Del Pero et al. in [Understanding bayesian rooms using composite 3d object models](http://www.cv-foundation.org/openaccess/content_cvpr_2013/papers/Del_Pero_Understanding_Bayesian_Rooms_2013_CVPR_paper.pdf):

One of the chairs you can see very well, but the other is occluded by the table. To perform inference over this structure requires a presentation of a chair and the ability of reasoning over multiple of those composed objects. Only then it becomes feasible to infer the full chair behind this table.

Another example is speaker diarization. Imagine an organized meeting, there are people talking, supposedly not at the same time, but sequentially. How do we perform inference on the number of speakers present and how can we build an inference engine that benefits from Bob talking at time $$t[0] \cdots t[30]$$, and him talking at time $$t[120] \cdots t[180]$$? The system should all the time improve from Bob talking!

This can be solved by a so-called sticky Hierarchical Dirichlet Process defined on a very well-known model structure, a Hidden Markov Model (see [A sticky HDP-HMM with application to speaker diarization](http://projecteuclid.org/download/pdfview_1/euclid.aoas/1310562215)). A Hidden Markov Model, is built on a Markovian assumption, hence its name. This means that it is impossible to store long-term dependencies as required by this application: a person talking at the beginning and the end of a conversation. Remarkably is that this model actually performed on par with state-of-the-art algorithms that were very specific to this application!

### Slides

The problems you will encounter by applying nonparametric Bayesian methods in the real world are manifold. Foremost, the sampling methods to approximate a full Bayesian method, are not yet adapted to these hierarchical schemes. Although it might seem that having an abstraction of say, a chair, would allow you to move around, copy, and delete this entire chair through an inference process, these kind of abstraction handling have not been handed to the sampling algorithms themselves. All approximation methods, be it variational methods, or sampling methods, such as slice sampling or Gibbs sampling, are suddenly quite non-Bayesian in nature! To incorporate a prior (such as a hierarchical structure) in the sampling procedure itself, I have yet to see it. The methods are general, in the sense, that the sampling is able to sample any probability density function and is not able to take advantage of prior knowledge about this function (except for approximating a Bayesian formulation that entails this structure). 

You can find my presentation with my questions about how to apply nonparametric Bayesian methodology to simple line estimation as in RANSAC or Hough [here]({{site.url}}/slides/abs14/nonparametric.html).

