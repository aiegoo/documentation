---
title: webscraping
permalink: mydoc_webscraping.html
summary: "webscraping lessons"
sidebar: mydoc_sidebar
tags: [python, machine-learning]
last_updated: July 29, 2021
toc: true
folder: mydoc
---

## Python Installation

'''bash
sudo apt-get install build-essential checkinstall

sudo apt-get install libreadline-gplv2-dev libncursesw5-dev libssl-dev \

libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev libffi-dev zlib1g-dev

# download python

'''

'''bash
cd /usr/src
sudo wget https://www.python.org/ftp/python/3.7.4/Python-3.7.4.tgz

# compile the source code
cd Python-3.7.4

sudo ./configure --enable-optimizations

sudo make altinstall

#make altinstall is used to prevent replacing the default python binary file /usr/bin/python.
'''

## installing on Windows

1. Click on the Download Windows x86-64 executable installer link under the top-left stable releases from the following link: https://www.python.org/downloads/
Pop-up window titled Opening python-3.74-amd64.exe will appear.

2. Click the Save File button. The file named python-3.7.4-amd64.exe should start downloading to your default download location. This file is about 30 MB in size, so it might take a while to download y if you are on a slow internet connection.
The file should appear as python-3.7.4-amd64.exe.

3. Move this file to a more permanent location, so that you can install Python (and reinstall it later, if necessary).
4. Start the installation by double clicking the file.
5. Navigate to the directory C:\Users\$USER\AppData\Local\Programs\Python\Python37 (or to the directory where Python was installed: see the pop-up window for installing step 3).
6. Double-click the icon/file python.exe.
The following pop-up window will appear:
![image](https://user-images.githubusercontent.com/42961200/133080768-69bab03c-c191-475f-bf04-26bdc86a44da.png)

### installing modules/libraries

'''
curl -O https://bootstrap.pypa.io/get-pip.py
sudo python get-pip.py
'''


The easiest way to install pip on Windows is through the use of a Python program called get-pip.py, which you can download at https://bootstrap.pypa.io/get-pip.py.

Once you have saved this file, you need to run it in one of the following ways. If you prefer using a Python interpreter, right-click on the file get-pip.py and choose "open with" and then choose the Python interpreter of your choice.

If you prefer to install pip using the Windows command line tool, navigate to the directory where you have placed the get-pip.py file. For this example, we'll assume this directory is python27, so we'll use the command C:\>cd python27. Once you are in this directory, run the command:

'''bash
python get-pip.py

#python modules
sudo pip install requests

sudo pip install beautifulsoup4

sudo pip install simplekml
'''

### virtual environment

Install virtualenv using pip3:

'''bash
sudo pip3 install virtualenv

# Now create a virtual environment:

virtualenv demo

#You can use any name instead of venv. You can also use a Python interpreter of your choice:

virtualenv -p /usr/bin/python2.7 demo # or python3 -m venv demo

#Next, we will activate the virtual environment:

source demo/bin/activate

#Using fish shell:

source demo/bin/activate.fish

# to deactivate:

Deactivate
'''
