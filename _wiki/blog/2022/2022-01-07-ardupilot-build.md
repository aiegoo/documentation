---
layout: post
title: "ardupilot build instruction a to z"
name: "ardupilot-build"
tags: [drones]
tagName: drone
permalink: 2022-01-07-ardupilot-build.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "ardupilot docker dronekit px4 mission planner qground control"
summary: "Fri, Jan 07, 22, complete instruction how to build sitl, copters and other air frames"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2022-01-07T21:40:58 +0900
updated: 2022-01-07 21:40
youtubeID: wh0fKGEJL4
youtubeID2: 4B8BVskH0vc
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}


## ardupilot build script

.. _building-setup-linux:

===============================================
Setting up the Build Environment (Linux/Ubuntu)
===============================================

This article shows how to setup your build environment on Linux/Ubuntu machines.


Setup on Ubuntu
===============

Get git
-------

.. include:: git-install.rst
    :start-after: inclusion-marker-do-not-remove
    :end-before: Alternative for Windows user

Clone ArduPilot repository
--------------------------


.. include:: git-clone.rst
    :start-after: inclusion-marker-do-not-remove
    :end-before: Cloning with the GitHub GUI (Windows or MAC)


.. note:: in case some firewalls do not allow ssh access which can cause the above submodule updates to fail, in this instance you can tell git to unilaterally use https through the following command:

    ::

         git config --global url."https://"

    to use https protocols instead of the default git:// prefix.



Install some required packages
------------------------------

If you are on a debian based system (such as Ubuntu or Mint), we provide `a script <https://github.com/ArduPilot/ardupilot/blob/master/Tools/environment_install/install-prereqs-ubuntu.sh>`__ that will do it for you. From ardupilot directory :
::

    Tools/environment_install/install-prereqs-ubuntu.sh -y

Reload the path (log-out and log-in to make permanent):

::

    . ~/.profile

Now you should be able to build with waf as described in `BUILD.md <https://github.com/ArduPilot/ardupilot/blob/master/BUILD.md>`__.

.. note:: At this point you have already installed the MAVProxy Ground Control Station (MAVProxy GCS) and are also ready to do Software In the Loop (SITL) simulations of the vehicle code. See :ref:`sitl-simulator-software-in-the-loop`  and :ref:`setting-up-sitl-on-linux` . You are ready to not only build the code, but run your build in the Ardupilot SITL simulator.

{% include youtubePlayer.html id=page.youtubeID2 %}

.. youtube:: 4B8BVskH0vc

Cleaning
========

If there have been updates to some git submodules you may need to do a full clean build. To do that use:

::

    ./waf clean

that will remove the build artifacts so you can do a `build <https://github.com/ArduPilot/ardupilot/blob/master/BUILD.md>`__ from scratch

--------------------

Setup for other Distributions Using the STM Toolchain
=====================================================



Add some directories to your search path (Facultative)
------------------------------------------------------

.. note::

    ONLY if you didn't run the install-prereqs script from previous step.

Add the following lines to the end of your ".bashrc" in your home
directory (notice the . on the start of that filename. Also, this is a
hidden file, so if you're using a file manager, make sure to turn on
"show hidden files").

::

    export PATH=$PATH:$HOME/ardupilot/Tools/autotest
    export PATH=/usr/lib/ccache:$PATH

Then reload your PATH by using the "dot" command in a terminal

::

    . ~/.bashrc

.. warning::

    Do not use this if you have already use the ``install-prereqs-ubuntu.sh`` script !


To build for a autopilot target on Linux you need the
following tools and git repositories:

-  The gcc-arm cross-compiler from `here <https://firmware.ardupilot.org/Tools/STM32-tools/>`__
   (ArduPilot is only built and tested on these specific versions of gcc-arm; if installed
   with ``apt-get`` gcc-arm will not produce a working binary in many cases)
-  gnu make, gawk and associated standard Linux build tools
-  On a 64 bit system you will also need to have installed libc6-i386.

Also, it's worth mentioning here that you want to ensure that the
modemmanager package is not installed and the modem-manager process is
not running.

Compiler
--------

You need the specific gcc-arm cross-compiler linked above. You need to unpack it where you want, for now let's call this location TARGET_DIR:

::

    cd TARGET_DIR
    tar -xjvf gcc-arm-none-eabi-10-2020-q4-major-x86_64-linux.tar.bz2

and then add the bin directory from the tarball to your $PATH by editing
the $HOME/.bashrc file and adding a line like this to the end. TARGET_DIR is the location choose previouly where you unpack the toolchain:

``export PATH=$PATH:TARGET_DIR/gcc-arm-none-eabi-10-2020-q4-major/bin``

.. note::

    Versions of ArduPilot before 4.1 must use the following compiler, gcc-arm-none-eabi-6-2017-q2, which can be found `here <https://firmware.ardupilot.org/Tools/STM32-tools/>`__.

Permissions
-----------

You need to make your user a member of the dialout group:

::

    sudo usermod -a -G dialout $USER

You will need to log out and then log back in for the group change to take effect.



Now you should be able to build with waf as described in `BUILD.md <https://github.com/ArduPilot/ardupilot/blob/master/BUILD.md>`__.

ccache for faster builds
========================

Installing *ccache* will speed up your builds a lot. Once you install it
(for example with "sudo apt-get install ccache") you should link the
compiler into /usr/lib/ccache like this:

::

    cd /usr/lib/ccache
    sudo ln -s /usr/bin/ccache arm-none-eabi-g++
    sudo ln -s /usr/bin/ccache arm-none-eabi-gcc

Then add /usr/lib/ccache to the front of your $PATH

---------

Additional Steps for macOS mojave
=================================
Due to some changes binutils installed via brew have stopped working for macOS mojave leading to crashing builds. So if installed, remove via following command:

::

    brew uninstall binutils

Also you will need to install the c++ include headers to /usr/include to do that. Run the following in commandline and follow the installation routine:

::

    open /Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg

---------

Setup using Docker
==================

Clone ArduPilot repository
--------------------------

.. include:: git-clone.rst
    :start-after: inclusion-marker-do-not-remove
    :end-before: Cloning with the GitHub GUI (Windows or MAC)

How to Build the Docker Image
-----------------------------

Build the docker image and tag it with the name ardupilot:
::

    docker build . -t ardupilot

Run ArduPilot Container
-----------------------
The following command runs the docker container, linking your current directory with
the ardupilot source, and launches an interactive shell inside the container. From here
you can build ardupilot:
::

    docker run --rm -it -v `pwd`:/ardupilot ardupilot:latest bash




## Building ArduPilot

## Get the Source

Clone the project from GitHub:
```sh
git clone --recursive https://github.com/ArduPilot/ardupilot.git
cd ardupilot
```

Ardupilot is gradually moving from the make-based build system to
[Waf](https://waf.io/). The instructions below should be enough for you to
build Ardupilot, but you can also read more about the build system in the
[Waf Book](https://waf.io/book/).

Waf should always be called from the ardupilot's root directory. Differently
from the make-based build, with Waf there's a configure step to choose the
board to be used (default is `sitl`).

## Basic usage ##

There are several commands in the build system for advanced usages, but here we
list some basic and more used commands as example.

* **Build ArduCopter**

    Below shows how to build ArduCopter for the Pixhawk2/Cube. Many other boards are
    supported and the next section shows how to get a full list of them.

    ```sh
    ./waf configure --board CubeBlack
    ./waf copter
    ```

    The first command should be called only once or when you want to change a
    configuration option. One configuration often used is the `--board` option to
    switch from one board to another one. For example we could switch to
    SkyViper GPS drone and build again:

    ```sh
    ./waf configure --board skyviper-v2450
    ./waf copter
    ```

    If building for the bebop2 the binary must be built statically:

    ```sh
    ./waf configure --board bebop --static
    ./waf copter
    ```

    The "arducopter" binary should appear in the `build/<board-name>/bin` directory.

* **List available boards**


    It's possible to get a list of supported boards on ArduPilot with the command
    below

    ```sh
    ./waf list_boards

    ```

    Here are some commands to configure waf for commonly used boards:

    ```sh
    ./waf configure --board bebop --static # Bebop or Bebop2
    ./waf configure --board edge           # emlid edge
    ./waf configure --board fmuv3          # 3DR Pixhawk 2 boards
    ./waf configure --board navio2         # emlid navio2
    ./waf configure --board Pixhawk1       # Pixhawk1
    ./waf configure --board CubeBlack      # Hex/ProfiCNC Cube Black (formerly known as Pixhawk 2.1)
    ./waf configure --board Pixracer       # Pixracer
    ./waf configure --board skyviper-v2450 # SkyRocket's SkyViper GPS drone using ChibiOS
    ./waf configure --board sitl           # software-in-the-loop simulator
    ./waf configure --board sitl --debug   # software-in-the-loop simulator with debug symbols

    ```

* **List of available vehicle types**

    Here is a list of the most common vehicle build targets:

    ```sh
    ./waf copter                            # All multirotor types
    ./waf heli                              # Helicopter types
    ./waf plane                             # Fixed wing airplanes including VTOL
    ./waf rover                             # Ground-based rovers and surface boats
    ./waf sub                               # ROV and other submarines
    ./waf antennatracker                    # Antenna trackers

    ```

* **Clean the build**

    Commands `clean` and `distclean` can be used to clean the objects produced by
    the build. The first keeps the `configure` information, cleaning only the
    objects for the current board. The second cleans everything for every board,
    including the saved `configure` information.

    Cleaning the build is very often not necessary and discouraged. We do
    incremental builds reducing the build time by orders of magnitude.


* **Upload or install**

    Build commands have a `--upload` option in order to upload the binary built
    to a connected board. This option is supported by Pixhawk and Linux-based boards.
    The command below uses the `--targets` option that is explained in the next item.

    ```sh
    ./waf --targets bin/arducopter --upload
    ```

    For Linux boards you need first to configure the IP of the board you
    are going to upload to. This is done on configure phase with:

    ```sh
    ./waf configure --board <board> --rsync-dest <destination>
    ```

    The commands below give a concrete example (board and destination
    IP will change according to the board used):

    ```sh
    ./waf configure --board navio2 --rsync-dest root@192.168.1.2:/
    ./waf --target bin/arducopter --upload
    ```

    This allows to set a destination to which the `--upload` option will upload
    the binary.  Under the hood  it installs to a temporary location and calls
    `rsync <temp_install_location>/ <destination>`.

    On Linux boards there's also an install command, which will install to a certain
    directory, just like the temporary install above does. This can be
    used by distributors to create .deb, .rpm or other package types:

    ```sh
    ./waf copter
    DESTDIR=/my/temporary/location ./waf install
    ```

* **Use different targets**

    The build commands in the items above use `copter` as argument. This
    builds all binaries that fall under the "copter" group. See the
    section [Advanced usage](#advanced-usage) below for more details regarding
    groups.

    This shows a list of all possible targets:

    ```
    ./waf list
    ```

    For example, to build only a single binary:

    ```
    # Quad frame of ArduCopter
    ./waf --targets bin/arducopter

    # unit test of our math functions
    ./waf --targets tests/test_math
    ```

* **Other options**

    It's possible to see all available commands and options:

    ```
    ./waf -h
    ```

    Also, take a look on the [Advanced section](#advanced-usage) below.

## Advanced usage ##

This section contains some explanations on how the Waf build system works
and how you can use more advanced features.

Waf build system is composed of commands. For example, the command below
(`configure`) is for configuring the build with all the options used by this
particular build.

```bash
# Configure the Linux board
./waf configure --board=linux
```

Consequently, in order to build, a "build" command is issued, thus `waf build`.
That is the default command, so calling just `waf` is enough:

```bash
# Build programs from bin group
./waf

# Waf also accepts '-j' option to parallelize the build.
./waf -j8
```

By default waf tries to parallelize the build automatically to all processors
so the `-j` option is usually not needed, unless you are using icecc (thus
you want a bigger value) or you don't want to stress your machine with
the build.

### Program groups ###

Program groups are used to represent a class of programs. They can be used to
build all programs of a certain class without having to specify each program.
It's possible for two groups to overlap, except when both groups are main
groups. In other words, a program can belong to more than one group, but only
to one main group.

There's a special group, called "all", that comprises all programs.

#### Main groups ####

The main groups form a partition of all programs. Besides separating the
programs logically, they also define where they are built.

The main groups are:

 - bin: *the main binaries, that is, ardupilot's main products - the vehicles and
   Antenna Tracker*
 - tools
 - examples: *programs that show how certain libraries are used or to simply
   test their operation*
 - benchmarks: *requires `--enable-benchmarks` during configurarion*
 - tests: *basically unit tests to ensure changes don't break the system's
   logic*

All build files are placed under `build/<board>/`, where `<board>` represents
the board/platform you selected during configuration. Each main program group
has a folder with its name directly under `build/<board>/`. Thus, a program
will be stored in `build/<board>/<main_group>/`, where `<main_group>` is the
main group the program belongs to. For example, for a linux build, arduplane,
which belongs to the main group "bin", will be located at
`build/linux/bin/arduplane`.

#### Main product groups ####

Those are groups for ardupilot's main products. They contain programs for the
product they represent. Currently only the "copter" group has more than one
program - one for each frame type.

The main product groups are:

 - antennatracker
 - copter
 - plane
 - rover

#### Building a program group ####

Ardupilot adds to waf an option called `--program-group`, which receives as
argument the group you want it to build. For a build command, if you don't pass
any of `--targets` or `--program-group`, then the group "bin" is selected by
default. The option `--program-group` can be passed multiple times.

Examples:

```bash
# Group bin is the default one
./waf

# Build all vehicles and Antenna Tracker
./waf --program-group bin

# Build all benchmarks and tests
./waf --program-group benchmarks --program-group tests
```
#### Shortcut for program groups ####

For less typing, you can use the group name as the command to waf. Examples:

```bash
# Build all vehicles and Antenna Tracker
./waf bin

# Build all examples
./waf examples

# Build arducopter binaries
./waf copter
```

### Building a specific program ###

In order to build a specific program, you just need to pass its path relative
to `build/<board>/` to the option `--targets`. Example:

```bash
# Build arducopter for quad frame
./waf --targets bin/arducopter

# Build vectors unit test
./waf --targets tests/test_vectors
```

### Checking ###

The command `check` builds all programs and then executes the relevant tests.
In that context, a relevant test is a program from the group "tests" that makes
one of the following statements true:

 - it's the first time the test is built since the last cleanup or when the
   project was cloned.
 - the program had to be rebuilt (due to modifications in the code or
   dependencies, for example)
 - the test program failed in the previous check.

That is, the tests are run only if necessary. If you want waf to run all tests,
then you can use either option `--alltests` or the shortcut command
`check-all`.

Examples:

```bash
# Build everything and run relevant tests
./waf check

# Build everything and run all tests
./waf check --alltests

# Build everything and run all tests
./waf check-all
```

### Debugging ###

It's possible to pass the option `--debug` to the `configure` command. That
will set compiler flags to store debugging information in the binaries so that
you can use them with `gdb`, for example. That option might come handy when using SITL.

### Build-system wrappers ###

The `waf` binary on root tree is actually a wrapper to the real `waf` that's
maintained in its own submodule.  It's possible to call the latter directly via
`./modules/waf/waf-light` or to use an alias if you prefer typing `waf` over
`./waf`.

```sh
alias waf="<ardupilot-directory>/modules/waf/waf-light"

```

There's also a make wrapper called `Makefile.waf`. You can use
`make -f Makefile.waf help` for instructions on how to use it.

### Command line help ###

You can use `waf --help` to see information about commands and options built-in
to waf as well as some quick help on those added by ardupilot.

{% include youtubePlayer.html id=page.youtubeID %}


sim_vehicle.py -v ArduPlane --console --map --osd


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
