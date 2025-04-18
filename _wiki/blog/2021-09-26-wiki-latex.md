---
name: latex wiki
layout: post
permalink: 2021-09-26-wiki-latex.html
sidebar: other_sidebar
collection: wiki
summary: "how to add latex to wiki as in the example of thesis repository"
tags: [wiki, getting_started]
excerpt_separator: <!--more-->
date: 2021-09-26 18:22:03 +0900
updated: 2021-09-26 06:25 AM
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
latex: true
---

* TOC
{:toc}

```latex
{\fontfamily{cmr}\selectfont

\phantomsection
\addcontentsline{toc}{section}{Abstract}


\begin{center}
  \centering
  \textbf{\Large{Title}}
  \vspace{0.5cm}

  \textbf{\large{Autonomous aerial vehicle localization, path planning and navigation towards full and optimal 3D coverage of a known environment}}

  \vspace{1cm}

  \centering
  \textbf{Abstract}
\end{center} 

Over the last years a rapid evolution of the robotics industry, and particularly that of the Unmanned Aerial Vehicles, has been observed. Despite the fact that they were primarily used for military applications, nowadays their use is constantly increasing in a variety of applications, such as the inspection of inaccessible for humans environments, events cinematography, autonomous and real-time inventorying, etc.

The use of unmanned aerial vehicles in indoor environments requires a great perception of the surrounding environment, immediate response to its changes and consequently a robust position estimation. In order to achieve these, the use of multiple available sensors is required by the drone. The navigation in an optimal way inside the environment requires the existence of an already known flight plan that will lead to the desired goal.

The present Diploma Thesis focuses on implementation of algorithms for solving the problem of fast, reliable and low-cost inventorying in the Logistics industry. The usage of drones simplifies this procedure and aims to determine every product's position with a few centimeters accuracy. This problem consists of two subproblems: a) the position estimation in the indoor environment and b) the autonomous full coverage of the area.

In order to successfully tackle the problems described above, a known 3D map in OctoMap format is used. During the research, a \emph{Particle Filter} based algorithm that uses an array of distance sensors around the drone was implemented, in order to track the pose of the robot against the known map. Navigation is based on a PID position controller that ensures an obstacle free path. As for the full coverage, an extraction of the targets and then their optimal succession is performed.

Finally, a series of experiments were carried out to examine the robustness of the positioning system in three types of motion, as well as different speeds in each of these cases. At the same time, various ways of traversing the environment were examined by using different configurations of the sensor that performs the area coverage. The experiments were entirely performed in a simulated environment.

\begin{flushright}
  \vspace{2cm}
  Kosmas Tsiakas
  \\
  ktsiakas@ece.auth.gr
  \\
  Electrical \& Computer Engineering Department,
  \\
  Aristotle University of Thessaloniki, Greece
  \\
  June 2019
\end{flushright}

}
```
{% include links.html %}
