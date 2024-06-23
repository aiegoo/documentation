---
title: About this site and its author
layout: portfolio
tags: [getting_started, drone]
last_updated: July 11, 2021
keywords: API, content API, UI text, inline help, context-sensitive help, popovers, tooltips
summary: "My portofolio site and its mission statement"
sidebar: mydoc_sidebar
permalink: mydoc_aboutsite.html
folder: mydoc
toc: false
---

## site overview
<p>While you wait, maybe listen to some William Grant Still. You’ll have a better day.</p>

<iframe src="https://open.spotify.com/embed/track/1neicGfHfBxe5jLuHcBL5A?theme=0" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

<div class="row">
        <div class="col-lg-12">
               <h2 class="page-header">What inspired me to work on this site</h2>
               <p>I was on a mission to join the workforce; my portfolio and its project details have grown very fast for the last three months. They are purely based on the fictional ideas and themes I created for the purpose of my portfolio and projects.</p>
               <p>If credits I have inserted along the way are not enough to satisfy the standards of business or not fulfilling the required criteria, please allow me to apologize and I will do my best to amend and reflect or scrap away the questionable projects entirely. I owe everything to you and my teachers.</p>
               <p>On Mar 8, 2019 as I wrapped up my NCS course and joined Onofflink for my first stint in a real job. This was the beginning of my developer career, then continued the same path with Jiseoan where I found my true passion on mobility and aiot integration. In 2021, I've been looking forward to making this road of learning a reality.</p>
               <h3> This site highlights</h3>
               <p>Some of the more prominent features of this theme include the following:</p>
               <ul>
                    <li>Bootstrap framework</li>
                    <li><a href="http://www.komposta.net/article/navgoco">Navgoco multi-level sidebar</a> for table of contents</li>
                    <li>Ability to specify different sidebars for different products</li>
                    <li>Top navigation bar with drop-down menus</li>
                    <li>Notes, tips, and warning information notes</li>
                    <li>Tags for alternative navigation</li>
                    <li>Advanced landing page layouts from the <a href="http://startbootstrap.com/template-overviews/modern-business/">Modern Business theme</a>.</li>
               </ul>
               <h3>Getting started</h3>
               <p>To get started, see <a href="index.html">Getting Started</a>.</p>
        </div>
        <div class="col-md-6 col-sm-6">
            <div class="panel panel-default text-center">
                <div class="panel-heading">
                    <span class="iconify" data-icon="eos-icons:atom-electron" style="height: 5rem; width: 5rem"></span>
                </div>
                <div class="panel-body">
                    <h4>Collections</h4>
                    <p font-size="0.5em">There are 6 collections in this site, yoga, drones, freelancers, mycourse, tags and wiki, which would expand as more contents are added during my dev career.</p>
                    <a href="https://github.com/documentation/blob/edit/_config.yml" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-sm-6">
            <div class="panel panel-default text-center">
                <div class="panel-heading">
                <span class="iconify" data-icon="fe:align-center" style="height: 5rem; width: 5rem"></span>
                </div>
                <div class="panel-body">
                    <h4>Usermap simple or complex</h4>
                    <p>In usermap, I was able to link pages by topic and in a sequencial order. For simple usermap, each button will open its page within the page frame, while complex uermap will open in a modal winodw with a list of pages.</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-sm-6">
            <div class="panel panel-default text-center">
                <div class="panel-heading">
                <span class="iconify" data-icon="lucide:bar-chart-2" style="height: 5rem; width: 5rem"></span>
                </div>
                <div class="panel-body">
                    <h4>Contextual series</h4>
                    <p>I have used this feature without reservation as it is simple to create a dropdonw menu with a list of files I would link contextually.</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-sm-6">
            <div class="panel panel-default text-center">
                <div class="panel-heading">
                <span class="iconify" data-icon="lucide:archive" style="height: 5rem; width: 5rem"></span>
                </div>
                <div class="panel-body">
                    <h4>Taglogic to group the scattered dots</h4>
                    <p>As the contents start to pile up, locating relevant information has been a taunting task and taglogic has been solution that worked well and served beyond its original design. </p>
                    <p>
                    Another similar solution I pursued as it seems popular among korean bloggers was to use tag-cloudding with strikingly same logic behind it but implementing it had costed me quite a few days and nights. Most would use a javascript or python packages or custom scripts to generate a sitemap, tagmap and taglist that would double as a database for querries. I didn't like the static-prone architect of this and wanted it to be dynamic as to reflect any changes or additons I would make should be deployable at the right moment without further steps. I did it eventually.
                    </p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
</div>
<script type="text/javascript">
$( document ).ready(function() {
    var heights = $(".panel-default").map(function() {
        return $(this).height();
    }).get();

    maxHeight = Math.max.apply(null, heights);

    $(".panel-default").height(maxHeight + 50);
});
</script>
    <!-- Service Tabs -->
<div class="row">
        <div class="col-lg-12">
            <h2 class="page-header">In this site</h2>
        </div>
        <div class="col-lg-12">
            <ul id="myTab" class="nav nav-tabs nav-justified nav-tabs-hover">
                <li class="active"><a href="#service-one" data-toggle="tab"><span class="iconify" data-icon="iconoir:yoga"></span> Yoga</a>
                </li>
                <li class=""><a href="#service-two" data-toggle="tab"><span class="iconify" data-icon="mdi:drone"></span> Drones</a>
                </li>
                <li class=""><a href="#service-three" data-toggle="tab"><span class="iconify" data-icon="emojione:deciduous-tree"></span> Projects</a>
                </li>
                <li class=""><a href="#service-four" data-toggle="tab"><span class="iconify" data-icon="eos-icons:arrow-rotate"></span>Learning</a>
                </li>
            </ul>
            <div id="myTabContent" class="tab-content">
                <div class="tab-pane fade active in" id="service-one">
                    <h4>Yoga</h4>
                    <p>its origin Once known mainly as the “yoga of the stars,” the Bikram style of hatha has spread from Beverly Hills throughout the United States since the late 1970s. The Bikram style is the original “hot yoga” style, and its classes are taught in a room kept at approximately 106 degrees Fahrenheit (41 degrees Celsius). Bikram yoga is based on one series consisting of 26 poses,</p>
                    <p>Hot Yoga is a moving meditation combining asana, breath work and heat. All are needed to get the best result. My first yoga book I bought during my trip to Thailand has set off a series of events that truly made me who I am now. Believe it or not. 26 poses 1. PRANAYAMA (STANDING DEEP BREATHING) This is the beginning of each Bikram Yoga training. You breathe in warm air to heat up your body inside, you fill your blood with lots of oxygen, you loosen up our neck and shoulders and you are surprised about the funny sound of this breathing that fills the entire room. You try to find the rhythm with the teacher and the other students and before you can even think you have started the journey through your body in the here and now. </p>
                </div>
                <div class="tab-pane fade" id="service-two">
                    <h4>Drones</h4>
                    <p>I remember the first time I held the drone rc at a flying school. The rotors whirled in a distance and echoed in my ears like thumping of my heart. I felt the exhilaration of the air vehicle taking off smoothly, balancing and firm in its position at my fingertips. </p>
                    <p>It goes back almost 40 years at my sophomore year when somehow I got a notion to apply for the airforce academy, which never got into a reality. Now I have this dream of flying UAVs all programmatically. This is a chapter of my life I started and would finish to the end until when satisfaction should be on my lips, in aftermath of all the turbulence in life.</p>
                </div>
                <div class="tab-pane fade" id="service-three">
                    <h4>Projects</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis impedit rerum totam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis impedit rerum totam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>
                </div>
                <div class="tab-pane fade" id="service-four">
                    <h4>Learning</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis impedit rerum totam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis impedit rerum totam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>
                </div>
            </div>
        </div>
</div>
    <!-- Service List -->
    <!-- The circle icons use Font Awesome's stacked icon classes. For more information, visit http://fontawesome.io/examples/ -->
<div class="row">
        <div class="col-lg-12">
            <h2 class="page-header">Featured projects</h2>
        </div>
        <div class="col-md-6 col-sm-12">
            <div class="media">
                <div class="pull-left">
                    <span class="fa-stack fa-2x">
                          <i class="fa fa-circle fa-stack-2x text-primary"></i>
                          <i class="fa fa-tree fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">RAPA project</h4>
                    <p>Final project with fusion filters and dronekit api based on Udacity platform <a href="https://github.com/aiegoo/_mydrone.git">github</a></p>
                </div>
            </div>
            <div class="media">
                <div class="pull-left">
                    <span class="fa-stack fa-2x">
                          <i class="fa fa-circle fa-stack-2x text-primary"></i>
                          <i class="fa fa-car fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Matlab Simulation</h4>
                    <p>Simulink and other drone toolbox empowering APM simulation</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-sm-12">
            <div class="media">
                <div class="pull-left">
                    <span class="fa-stack fa-2x">
                          <i class="fa fa-circle fa-stack-2x text-primary"></i>
                          <i class="fa fa-support fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">ROS dronekit</h4>
                    <p>ROS-bag and Gazebo</p>
                </div>
            </div>
            <div class="media">
                <div class="pull-left">
                    <span class="fa-stack fa-2x">
                          <i class="fa fa-circle fa-stack-2x text-primary"></i>
                          <i class="fa fa-database fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Delivery drone</h4>
                    <p>Yolov3 Bounding Boxes: Here is where we created a transfer learning model from the Yolov3 architecture to find bounding boxes of cars, people, and trees in our images. These bounding boxes were used by our probability model to calculate the probability of collision.</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-sm-12">
            <div class="media">
                <div class="pull-left">
                    <span class="fa-stack fa-2x">
                          <i class="fa fa-circle fa-stack-2x text-primary"></i>
                          <i class="fa fa-bomb fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Behavioral cloning</h4>
                    <p>The model I trained can do infinitely number of laps at either 0.2, 0.25, or 0.3 throttle settings. However at 0.3 its execution on the first corner is not as smooth as I like (even though it doesn't go on to the concrete curve), so I decided to submit the drive.py with the 0.25 throttle setting.</p>
                </div>
            </div>
            <div class="media">
                <div class="pull-left">
                    <span class="fa-stack fa-2x">
                          <i class="fa fa-circle fa-stack-2x text-primary"></i>
                          <i class="fa fa-bank fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Kalman filters</h4>
                    <p>Medial Axis and Grid discretization have diagonal actions activated by default, you can change the value in the MotionPlanner constructor. Note that all the scripts use arguments to define the goal position. Use --goal_lon=x --goal_lat=y --goal_alt=z to use a custom destination. A default one is defined so it's not mandatory.</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-sm-12">
            <div class="media">
                <div class="pull-left">
                    <span class="fa-stack fa-2x">
                          <i class="fa fa-circle fa-stack-2x text-primary"></i>
                          <i class="fa fa-paper-plane fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Jetbot gazebo</h4>
                    <p>I have used RViz to create this plugin to be used in my Gazebo simulator.</p>
                </div>
            </div>
            <div class="media">
                <div class="pull-left">
                    <span class="fa-stack fa-2x">
                          <i class="fa fa-circle fa-stack-2x text-primary"></i>
                          <i class="fa fa-space-shuttle fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Matlab Nvidia</h4>
                    <p><a href="https://github.com/aiegoo/drones/blob/462ee53513489b7e0d4d22ae40143985e2d9d916/jetbot-peer/road_following/live_demo.ipynb"></a></p>
                </div>
            </div>
            <div class="media">
                <div class="pull-left">
                    <span class="fa-stack fa-2x">
                          <i class="fa fa-circle fa-stack-2x text-primary"></i>
                          <i class="fa fa-recycle fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Yuneec edison fc</h4>
                    <p><a href="http://www.open3d.org/docs/release/tutorial/sensor/realsense.html"></a></p>
                </div>
            </div>
        </div>
</div>

## Projects from previous work
### freepbx


{% include note.html content=" clone config repo and copy downloads/downloads and run the 'install.sh' to make a new server in sync with your nlp server" %}


- [documents](https://github.com/onofflink/callSystem)
- [cdc project](https://github.com/onofflink/callSystem) 
    ***check its submodule onoffjoin***
- [freepbx install](https://github.com/onofflink/freepbx)
- [develop journal](https://github.com/onofflink/orientation)
    ***check VSC journal workspace during this time***
- [callconf](https://github.com/onofflink/115.68.120.121) based on wowza

`root@159.65.8.44` check the nginx to reconfigure its gui dashboard

> images 

|---
|
| :-: | :-:
| ![adduser](images/freepbx/indexAdduser.png) | ![index](images/freepbx/indexImage.png)
|===

### unity autonomous motor HUD

- [mobis](https://github.com/tonyrhee/mobis) 
    ***collaboration with jotaekwan***
- [project dashboard](https://github.com/tonyrhee/mobis/projects) 
    ***check 10 dashboard***
- [mobis3 tony branch](https://github.com/tonyrhee/mobis3/tree/tony) 
    ***to sync with hardware PLC***


{% include image.html file="unity/05_Music_1105.png" caption="With psd proposal design, I have worked on an album navigation control created in Unity" %}

{{site.data.alerts.hr_shaded}}

{% include footer.html %}

{% include links.html %}
