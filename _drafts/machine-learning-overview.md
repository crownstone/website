---
layout: post
title: "Machine learning overview"
description: ""
category: 
tags: []
---
{% include JB/setup %}

$$\newcommand{\E}{\mathbb{E}}$$
$$\newcommand{\Var}{\mathrm{Var}}$$
$$\newcommand{\Cov}{\mathrm{Cov}}$$
$$\newcommand{\est}[1]{\hat{#1}}$$


There are many introductions to machine learning that postulate all kind of different types of machine learning methods, like evolutionary methods, kernel-based methods, etc. The risk of a classification that is built upon the techniques used, rather than trying to get into detail into the underlying optimization procedure, is that it looks like you can pick anything you want to solve a specific problem. This is not the case. There are well-established relations between different machine learning methods, and knowing them is key to solving a problem efficiently.

# Supervised, unsupervised, and semi-supervised learning

There are only two types of learning, and one intermediate type. First, data can come with labels, for example, data can be images of faces, and labels the corresponding gender. This is a supervised setting. Second, data can also come without labels, images of faces, without the gender given to the system. This is an unsupervised setting. Third, data can have labels for a few of those images, but not for others. This is a semi-supervised setting. In theory, you might say there is another setting, namely only labels, and no data. This is however not considered a machine learning problem, but a philosophical one...

A supervised learning problem is also often called a classification problem. The labels here are called the classes. Another term that is often used is regression. Regression is a general term for establishing relationships between variables. A variable can be a given outcome variable, in which it is a supervised learning problem, but this doesn't need to be (orthogonal regression for example). The goal of the learning procedure can be moderately diverse.

* The machine is provided with a new data item, and it needs to predict the corresponding label.
* The machine is provided with an uncomplete data item, and it needs to complete the data item and/or predict the corresponding label.
* The machine is provided with a label, and it needs to generate a corresponding data item.

Note, that there might be many other learning problems, but they will all require additional structure to be defined. For example, a binary classification problem only has labels that are of binary nature (say Dutch or American). Or a ranking structure within the items as in a [ranking SVM](https://en.wikipedia.org/wiki/Ranking_SVM). We will see examples of these additional structures and how, if they are properly defined, they often wind down to be the same problem, under wildly different names in different fields.

## Properties

Before we delve into classification (supervised learning) versus clustering (unsupervised learning), we will briefly mention several concepts that are of utmost importance in the machine learning literature:

* convexity
* optimality
* sparsity
* nonnegativity
* submodularity
* contraction
* margins
* generalization, especially the bias-variance tradeoff
* capacity, especially the Vapnik-Chervonenkis dimension

## Clustering

Let us introduce the old working horse of machine learning, $$k$$-means clustering:

$$\underset{S}{\arg\min} \sum_{i=1}^k \sum_{x_j \in S_i} \| x_j - \mu_i \|^2$$

The set $$S=\{S_1,\ldots,S_k\}$$ partitions the data $$\{x_1,\ldots,x_N\}$$ into $$k$$ clusters. The partition is chosen such that the within-cluster squared distances between points and the center of a set are minimized. This corresponds to separating the data points through hyperplanes. A more flexible approach is too make use of a kernel, a fancy word for a function on the data points:

$$\underset{S}{\arg\min} \sum_{i=1}^k \sum_{x_j \in S_i} \| k(x_j) - \mu_i \|^2$$

Now $$\mu_i$$ is the mean in kernel space. By picking a nice kernel $$k(\cdot)$$, we can ...



Naturally, if we choose even more parameters to vary, it is possible to come with a very unified view.[^1] Considering a matrix factorization approach, we can write a problem as $$X \sim f(UV^T)$$. The two factors $$U$$ and $$V$$ can have specific constraints, the prediction link $$f$$ can have a specific form, and the definition of $$\sim$$ has to be chosen as well. We can choose this approximation as:

$$\underset{(U,V)\in C}{\arg\min} D(X \| f(UV^T), W) + \mathcal{R}(U,V)$$

Here we have a divergence metric $$D$$, chosen to be generalized Bregman divergences[^1], weights $$W$$, a regularizer $$\mathcal{R}$$and constraints $$C$$.

Considering $$k$$-means again, we can write the loss function $$D$$ and the constraints $$V$$ as:

$$D = W \odot \| X - \hat{X} \|^2 \qquad and \qquad V^TV=I$$

The circled dot $$\odot$$ notation is a so-called Hadamard product, a simple element-wise product, which we need in our matrix notation. For the $$k$$-means algorithm, all elements in $$W$$ are $$1$$. Read how singular value decomposition, maximum-margin matrix factorization, exponential family principle component analysis, etc. can all be formulated using different loss functions and regularizers.[^1] 

## Approximate Inference

[Belief propagation](https://en.wikipedia.org/wiki/Belief_propagation) is a method (invented by [Judea Pearl](https://en.wikipedia.org/wiki/Judea_Pearl)) that calculates marginal posterior probabilities in a network without loops. As soon as loops are introduced, belief propagation might not converge anymore. Belief propagation can be seen as an approximation to a free-energy minimization problem:

$$F_\beta(\{b_{ij},b_i\}) = \sum_{ij} \sum_{x_i,y_i} b_{ij}(x_i,x_j)[\ln b_{ij}(x_i,x_j) - \ln \phi_{ij}(x_i,y_i)] - \sum_i(q_i-1) \sum_{x_i} b_i(x_i) [ \ln b_i(x_i) - \ln \psi_i(x_i) ]$$

With the constraints $$\sum_{x_i} b_i(x_i) = 1$$ and $$\sum_{x_i} b_{ij}(x_i,x_j) = b_j(x_j)$$ and $$q_i$$ the number of neighbours of node $$i$$. Calculate where the gradient of the free-energy is zero:

$$\frac{\partial F_\beta(\{b_{ij},b_i\})}{\partial (b_{ij},b_i)} = 0$$ 

This lead us to the beliefs which are the fixed-point of the belief propagation algorithm. The line of reasoning[^3] involves the usual stuff such as taking the constraints into account through the use of [Lagrange multipliers](https://en.wikipedia.org/wiki/Lagrange_multiplier).

This can be compared with a [mean-field approximation](https://en.wikipedia.org/wiki/Mean_field_theory):

$$F_{MF}(\{b_i\}) = -\sum_{ij} \sum_{x_i,y_i} b_{i}(x_i)b_{j}(x_j)\ln \psi_{ij}(x_i,y_i) + \sum_i \sum_{x_i} b_i(x_i) [ \ln b_i(x_i) - \ln \psi_i(x_i) ]$$

With the constraint $$\sum_{i} b_i(x_i) = 1$$. Compared to the belief propagation case, you see that the mean-field energy formulation does not have second-order terms $$b_{ij}(x_i,x_j)$$. Of course, in hindsight it might be easy to come up with, but the logical continuation of this trend is to use even higher-order terms, namely regions:

$$F_{K}(\{b_i\}) = \sum_{r \in R} c_r \left( \sum_{x_r} b_{r}(x_r) E_r(x_r) + \sum_{x_r} b_r(x_r) \log b_r(x_r) \right) $$

Here $$E_r(x_r) = -\ln \psi_r(x_r)$$, $$c_r = 1 - \sum_{s \in super(r)}c_s$$ and $$c_r = 1$$ for the largest regions. Again there are normalization constraints.[^3] Also the Kukuchi approximation does not necessarily converge, which are countered by even further generalizations.[^4] [^5]

Another way to look at the difference between the mean-field approximation and belief propagation is by formulating them in terms of a loss measure to minimize.[^6] Mean-field approximations minimize the Kullback-Leibler divergence $$KL(q\|p)$$, expectation propagation minimizes $$KL(p\|q)$$, and power expectation propagation minimizes $$\alpha$$-divergence $$D_\alpha(p\|q)$$. The Kullback-Leibler divergence is a very general distance measure between two probability density functions:

$$KL(p\|q) = \int_x p(x) \log \frac{p(x)}{q(x)} dx + \int_x (q(x) - p(x)) dx$$

The $$\alpha$$-divergence stems from Amari et al., and is a generalization of the Kullback-Leibler:

$$D_\alpha(p\|q) = \frac{1}{\alpha(1-\alpha)}  \int_x \alpha p(x) + (1-\alpha) q(x)- p(x)^\alpha q(x)^{1-\alpha} dx$$

Taking $$\lim_{\alpha \to 0} D_\alpha(p\|q) = KL(p\|q)$$, $$\lim_{\alpha \to 1} D_\alpha(p\|q) = KL(q\|p)$$ and $$\alpha=0.5$$ is the so-called [Hellinger distance](https://en.wikipedia.org/wiki/Hellinger_distance) for example (a very simple distance metric, see e.g. this [Hellinger (and Battacharyya) distance calculation](https://github.com/mrquincle/aim_modules/blob/master/NaiveBayesModule/inc/dim1algebra.hpp)). The behaviour of the divergence ranges from prefering matching a single mode (when $$\alpha \to -\infty$$) to prefering to cover the entire distribution (when $$\alpha \to \infty$$).

### Connection NMF 

Information divergences have been used to minimize the approximation error between observed and predicted data, under which nonnegative matrix factorization, stochastic neighbour embedding, topic models, and Bayesian network optimization.[^8]

### Variance and bias

The variance of an estimator $$\est{X}$$ under a squared error loss, you might recognize as $$\E_{\est{X}}(\est{X} - \E\est{X})^2$$, or equivalently:[^9]

$$\Var(\est{X})=\underset{\mu}{\min} \E_{\est{X}}(\est{X} - \mu)^2$$

So it is a measure of variability...


## References

Feel free to suggest some other papers that you find to be must-reads!

[^1]: A Unified View of Matrix Factorization Models (2008) Singh, Gordon
[^2]: On the Equivalence of Nonnegative Matrix Factorization and K-means - Spectral Clustering (2005) Ding et al.
[^3]: Generalized Belief Propagation (2000) Yedidia et al.
[^4]: The Unified Propagation and Scaling Algorithm (2002) Welling and Teh
[^5]: Novel Iteration Schemes for the Cluster Variation Method (2002) Kappen and Wiegerinck
[^6]: Divergence Measures and Message Passing (2005) Minka
[^7]: Generalized Alpha-Beta Divergences and Their Application to Robust Nonnegative Matrix Factorization (2011) Cichocki et al.
[^8]: Learning the Information Divergence (2014) Dikmen et al.
[^9]: Variance and Bias for General Loss Functions (2003) James
[^10]: A Unified Bias-Variance Decomposition and its Applications (200) Domingos

*[SVM]: Support Vector Machine
*[BP]: Belief Propagation
*[NMF]: Nonnegative Matrix Factorization

<!--
* multiple kernel learning = group lasso
* On the Equivalence of Regularization and Certain Reproducing Kernel Hilbert Space Approaches for Solving First Kind Problems Ising Quantum Chain is Equivalent to a Model of Biological Evolution
* On the application of statistical physics to evolutionary biology

Read More: http://epubs.siam.org/doi/abs/10.1137/0713018
-->
