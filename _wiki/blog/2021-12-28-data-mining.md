---
layout: post
title: "Practical Machine Learning Tools and Techniques"
name: "data-mining"
tags: [machine-learning]
tagName: machine-learning
permalink: 2021-12-28-data-mining.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "machine learning deep learning"
summary: "Tue, Dec 28, 21, owerpoint slides for Chapters 1-12. This is a very comprehensive teaching resource, with many PPT slides covering each chapter of the book"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-12-28T13:10:47 +0900
updated: 2021-12-28 13:10
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## data mining
[source](https://github.com/aiegoo/data-mining)

[book](https://github.com/aiegoo/uas-reference/blob/master/data)

[learning](https://www.cs.waikato.ac.nz/ml/weka/book.html)

### table of contents
<p>Preface<br>
<br>
<b>1. What’s it all about?</b><br>
1.1 Data Mining and Machine Learning<br>
1.2 Simple Examples: The Weather Problem and Others<br>
1.3 Fielded Applications<br>
<font color="red">1.4 The Data Mining Process</font><br>
1.5 Machine Learning and Statistics<br>
1.6 Generalization as Search<br>
1.7 Data Mining and Ethics<br>
<font color="red">1.8 Further Reading and Bibliographic Notes</font><br>
<br>
<b>2. Input: concepts, instances, attributes</b><br>
2.1 What’s a Concept?<br>
2.2 What’s in an Example?<br>
2.3 What’s in an Attribute?<br>
<font color="red">2.4 Preparing the Input</font><br>
2.5 Further Reading and Bibliographic Notes<br>
<br>
<b>3. Output: Knowledge representation</b><br>
3.1 Tables<br>
3.2 Linear Models<br>
3.3 Trees<br>
3.4 Rules<br>
3.5 Instance-Based Representation<br>
3.6 Clusters<br>
3.7 Further Reading and Bibliographic Notes<br>
<br>
<b>4. Algorithms: the basic methods</b><br>
4.1 Inferring Rudimentary Rules<br>
4.2 Simple Probabilistic Modeling<br>
4.3 Divide-and-Conquer: Constructing Decision Trees<br>
4.4 Covering Algorithms: Constructing Rules<br>
<font color="red">4.5 Mining Association Rules</font><br>
4.6 Linear Models<br>
4.7 Instance-Based Learning<br>
<font color="red">4.8 Clustering</font><br>
4.9 Multi-Instance Learning<br>
4.10 Further Reading and Bibliographic Notes<br>
<font color="red">4.11 WEKA Implementations</font><br>
<br>
<b>5. Credibility: Evaluating what’s been learned</b><br>
5.1 Training and Testing<br>
5.2 Predicting Performance<br>
5.3 Cross-Validation<br>
5.4 Other Estimates<br>
<font color="red">5.5 Hyperparameter Selection</font><br>
5.6 Comparing Data Mining Schemes<br>
5.7 Predicting Probabilities<br>
5.8 Counting the Cost<br>
5.9 Evaluating Numeric Prediction<br>
5.10 The Minimum Description Length Principle<br>
5.11 Applying MDL to Clustering<br>
<font color="red">5.12 Using a Validation Set for Model Selection</font><br>
5.13 Further Reading and Bibliographic Notes<br><br>
<b>6. Trees and rules</b><br>
6.1 Decision Trees<br>
6.2 Classification Rules<br>
6.3 Association Rules<br>
<font color="red">6.4 WEKA Implementations</font><br><br>
<b>7. Extending instance-based and linear models</b><br>
7.1 Instance-Based Learning<br>
7.2 Extending Linear Models<br>
7.3 Numeric Prediction with Local Linear Models<br>
<font color="red">7.4 WEKA Implementations</font><br><br>
<b>8. Data transformations</b><br>
8.1 Attribute Selection<br>
8.2 Discretizing Numeric Attributes<br>
<font color="red">8.3 Projections</font><br>
8.4 Sampling<br>
8.5 Cleansing<br>
8.6 Transforming Multiple Classes to Binary Ones<br>
8.7 Calibrating Class Probabilities<br>
<font color="red">8.8 Further Reading and Biblographic Notes</font><br>
<font color="red">8.9 WEKA Implementations</font><br><br>
<font color="red"><b>9. Probabilistic methods</b><br>
9.1 Foundations<br>
9.2 Bayesian Networks<br>
9.3 Clustering and Probability Density Estimation<br>
9.4 Hidden Variable Models<br>
9.5 Bayesian Estimation and Prediction<br>
9.6 Graphical Models and Factor Graphs<br>
9.7 Conditional Probability Models<br>
9.8 Sequential and Temporal Models<br>
9.9 Further Reading and Bibliographic Notes<br>
9.10 WEKA Implementations<br><br>
<b>10. Deep learning</b><br>
10.1 Deep Feedforward Networks<br>
10.2 Training and Evaluating Deep Networks<br>
10.3 Convolutional Neural Networks<br>
10.4 Autoencoders<br>
10.5 Stochastic Deep Networks<br>
10.6 Recurrent Neural Networks<br>
10.7 Further Reading and Bibliographic Notes<br>
10.8 Deep Learning Software and Network Implementations<br>
<font color="red">10.9 WEKA implementations</font><br><br></font>
<b>11. Beyond supervised and unsupervised learning</b><br>
<font color="red">11.1 Semi-supervised learning</font><br>
11.2 Multi-instance Learning<br>
<font color="red">11.3 Further Reading and Bibliographic Notes</font><br>
<font color="red">11.4 WEKA Implementations</font><br><br>
<b>12. Ensemble Learning</b><br>
12.1 Combining Multiple Models<br>
12.2 Bagging<br>
12.3 Randomization<br>
12.4 Boosting<br>
12.5 Additive Regression<br>
12.6 Interpretable Ensembles<br>
12.7 Stacking<br>
12.8 Further Reading and Bibliographic Notes<br>
<font color="red">12.9 WEKA Implementations</font><br>
<br>
<b>13. Moving on: Applications and Beyond</b><br>
13.1 Applying Data Mining<br>
13.2 Learning from Massive Datasets<br>
13.3 Data Stream Learning<br>
13.4 Incorporating Domain Knowledge<br>
<font color="red">13.5 Text Mining</font><br>
13.6 Web Mining<br>
<font color="red">13.7 Images and Speech</font><br>
13.8 Adversarial Situations<br>
13.9 Ubiquitous Data Mining <br>
<font color="red">13.10 Further Reading and Bibliographic Notes</font><br>
<font color="red">13.11 WEKA Implementations</font><br>
<br>
<font color="red">Appendix A: Theoretical foundations</font><br>
<font color="red">Appendix B: The WEKA workbench</font><br>
References<br>
Index</p>
{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
