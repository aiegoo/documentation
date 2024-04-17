---
title: "Unlocking 3D Human Pose: Estimation Techniques"
tags: [visionai ucon ai]
tagName: visionai
permalink: 3d-human-pose-estimation.html
sidebar: mydoc_sidebar
folder: aigenerative
keywords: "3D human pose, computer vision, estimation techniques, body joints, image analysis"
summary: "Tue, Apr 16, 24, 3D human pose estimation is a computer vision technique that infers the three-dimensional positions of human body joints from 2D images or videos"
toc: true
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## 3d human pose estimation 

[video3DPoseEstimation](https://github.com/aiegoo/VideoPose3D)

### 3D human pose estimation in video with temporal convolutions and semi-supervised training
<p align="center"><img src="https://github.com/aiegoo/VideoPose3D/blob/1afb1ca0f1237776518469876342fc8669d3f6a9/images/convolutions_anim.gif" width="50%" alt="" /></p>
<p align="center"><img src="https://github.com/aiegoo/VideoPose3D/blob/1afb1ca0f1237776518469876342fc8669d3f6a9/images/demo_h36m.gif" width="50%" alt="" /></p>

This is the implementation of the approach described in the paper:
> Dario Pavllo, Christoph Feichtenhofer, David Grangier, and Michael Auli. [3D human pose estimation in video with temporal convolutions and semi-supervised training](https://arxiv.org/abs/1811.11742). In Conference on Computer Vision and Pattern Recognition (CVPR), 2019.

More demos are available at https://dariopavllo.github.io/VideoPose3D

<p align="center"><img src="https://github.com/aiegoo/VideoPose3D/blob/1afb1ca0f1237776518469876342fc8669d3f6a9/images/demo_yt.gif" width="70%" alt="" /></p>

![](https://github.com/aiegoo/VideoPose3D/blob/1afb1ca0f1237776518469876342fc8669d3f6a9/images/demo_temporal.gif)

### Results on Human3.6M
Under Protocol 1 (mean per-joint position error) and Protocol 2 (mean-per-joint position error after rigid alignment).

| 2D Detections | BBoxes | Blocks | Receptive Field | Error (P1) | Error (P2) |
|:-------|:-------:|:-------:|:-------:|:-------:|:-------:|
| CPN | Mask R-CNN  | 4 | 243 frames | **46.8 mm** | **36.5 mm** |
| CPN | Ground truth | 4 | 243 frames | 47.1 mm | 36.8 mm |
| CPN | Ground truth | 3 | 81 frames | 47.7 mm | 37.2 mm |
| CPN | Ground truth | 2 | 27 frames | 48.8 mm | 38.0 mm |
| Mask R-CNN | Mask R-CNN | 4 | 243 frames | 51.6 mm | 40.3 mm |
| Ground truth | -- | 4 | 243 frames | 37.2 mm | 27.2 mm |


![gaitTransformer](https://raw.githubusercontent.com/peabody124/PosePipeline/main/doc/erd.png)


### AWS CDK

{% include image.html file="./ai/aws-CDK.png" caption="AWS CDK components'" %}
{% include image.html file="./ai/aws-CDKDetail.png" caption="AWS CDK 'how it works'" %}


### live streaming in realtime full frames
{% include image.html file="./ai/teaser.gif" caption="Carrying location information in full frames" %}

{% include image.html file="./ai/marker1_visionai.png" caption="optical sensor'" %}

{% include image.html file="./ai/marker2_visionai.png" caption="optical sensor'" %}
{% include image.html file="./ai/marker3_visionai.png" caption="optical sensor'" %}
{% include image.html file="./ai/marker4_visionai.png" caption="optical sensor'" %}

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
