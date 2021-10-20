---
layout: post
title: "basic setup using mac's new gpu"
name: "getting-started-data-science-machine-learning-on-mac"
tags: [machine-learning, tensorflow]
tagName: machine-learning
permalink: 2021-10-20-getting-started-data-science-machine-learning-on-mac.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: machine-learning
keywords: "machine learning mac gpu tensorflow data-science deep learning mac m1 macos apple getting start installation python pip package docker"
summary: "Wed, Oct 20, 21, initial setup on mac machine"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-10-20T17:25:43 +0900
updated: 2021-10-20 17:25
---
* TOC
{:toc}

## Thi

This is my personal list of to-do things for a new Macbook.

👉 Note: [Mac fresh start](/2021-10-20-fresh-install-macos.html).

## Install

``` bash
# Install XCode (from Appstore)

# Install XCode Command Line Tolls
xcode-select --install

# Download & install miniforge3
# https://github.com/conda-forge/miniforge
# (Choose "MacOSX-arm64" version)

chmod +x ~/Downloads/Miniforge3-MacOSX-arm64.sh
sh ~/Downloads/Miniforge3-MacOSX-arm64.sh
source ~/miniforge3/bin/activate

# Restart terminal and check
which python
# /Users/thi/miniforge3/bin/python
which pip
# /Users/thi/miniforge3/bin/pip
```

``` bash
# Init conda with zsh?
conda init zsh
source ~/.zshrc
```

``` bash
# Create virtual env
conda create -n ds-tf2.5 python=3.9.5
conda activate ds-tf2.5

# Install Tensorflow dependencies
conda install -c apple tensorflow-deps

# Install base tensorflow
python -m pip install tensorflow-macos

# Install metal plugin
python -m pip install tensorflow-metal
```

``` bash
# Install needed packages
conda install --file requirements.txt

# single package
conda install -y scikit-learn
# check after installing
pip show scikit-learn
```

👉🏻 [Install scikit-learn on M1](https://scikit-learn.org/stable/install.html#installing-on-apple-silicon-m1-hardware) (official note).
👉🏻 Note: [Python installation](/python-installation/).

## Testing

``` bash
python

# In python environement
import tensorflow as tf
print(tf.__version__)
```

``` bash
# Jupyter Notebook
jupyter lab
```

## References

- **Apple Developer** -- [Getting Started with tensorflow-metal PluggableDevice](https://developer.apple.com/metal/tensorflow-plugin/).
- **MakeOptim** -- [AI - Apple Silicon Mac M1 natively supports TensorFlow 2.5 GPU acceleration (tensorflow-metal PluggableDevice)](https://makeoptim.com/en/deep-learning/tensorflow-metal).

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
