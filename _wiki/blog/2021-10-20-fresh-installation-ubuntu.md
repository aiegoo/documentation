---
layout: post
title: "download to install and customize"
name: "fresh-installation-ubuntu"
tags: [ubuntu]
tagName: ubuntu
permalink: 2021-10-20-fresh-installation-ubuntu.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: getting_started
keywords: "ubuntu install customize nautilus airpod desktop"
summary: "Wed, Oct 20, 21, like windows reinstall, like macos install, a to z steps"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-10-20T17:05:21 +0900
updated: 2021-10-20 17:05
---
* TOC
{:toc}

## hpmosa (hp z workstations)
{{site.data.alerts.callout_primary}}
From a to Z [dualboot-blog](https://adamtheautomator.com/install-ubuntu-on-a-partition/)
{{site.data.alerts.ends}}
### prelog
I've been using my personal desktop since October 2019, and decided it's high time to redo the ubuntu install, since it's been dotted with numereous issues, especially with the distro repos and list (/etc/apt/sources.list). Nobody wanted to fix this; all the hired helps dropped in the middle of their work. I felt enough is enough and reformat the partition.

### my hardware specs

### jobs
1. Open Ubuntu Download page and create a bootable usb stick [ubuntu_22.04](https://releases.ubuntu.com/22.04/) `sha256sum ~/Downloads/ubuntu-22.04-desktop-amd64.iso` and for windows `certutil -hashfile C:/Users/YOUR_USER/Downloads/ubuntu-22.04-desktop-amd64.iso SHA256`
2. Create a starup program; in ubuntu `search for and open “Startup Disk Creator” from the Activities overview screen.` and for windows, check [unetbootin](https://unetbootin.github.io/)
3. I have followed a blog for instructions
4. First order of install was to install git and the followings
5. Git
6. create ssh key and connect with my github 
7. Download Chrome and run `sudo dpkg -i google-chrome-stable_current_amd64.deb` in the terminal
8. Install Gparted by running `sudo apt install gparted -y`
9. to install vscode `sudo apt update && sudo apt upgrade -y`, `sudo apt install software-properties-common apt-transport-https wget -y`, `sudo apt install software-properties-common apt-transport-https wget -y`, `echo deb [arch=amd64 signed-by=/usr/share/keyrings/vscode.gpg] https://packages.microsoft.com/repos/vscode stable main | sudo tee /etc/apt/sources.list.d/vscode.list`, `sudo apt update`, ` sudo apt install code`
10. Anydesk install; anydesk dependency install `sudo apt-get install -y libgtkglext1` before downloading [anydesk_download](https://anydesk.com/ko/downloads/linux)
11. Slack download with snap `sudo snap install slack` and for instructions, [instruction](https://snapcraft.io/slack) 
12. Follow instructions for Vim install



![image](https://user-images.githubusercontent.com/42961200/192138399-5220779e-5f4f-4105-b249-ac1d647d9ed3.png)
![image](https://user-images.githubusercontent.com/42961200/192138410-e9871820-2c95-4c86-9254-2f9bbe941f04.png)

## jdlab
[issues](https://github.com/aiegoo/jdlab-setup/issues/4)

[bash-history](https://gist.github.com/aiegoo/2a7ffdfb35aef092e5c64b5d03cd38ac)

1. setting up vim
2. add `startify' to vim by copying all from .vim folder
3. install brew gem [link](https://www.whatwant.com/entry/LinuxBrew-install-Ubuntu-1804)
   1. `sudo apt-get install build-essential curl file git`
   2. `sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"`
   3. vim .bashrc, `source .bashrc`

4.~~~bluetooth driver install for ubuntu [link](https://sleekdev.tistory.com/39); to install, These firmware files need to be copied and renamed to: `/lib/firmware/rtl_bt/rtl8761b_fw.bin`~~~
5. for drivers [googledrive](https://drive.google.com/drive/folders/18dilrzJvpcqRAWp9RGKmnOdGdiw4QZLL)  for bluetooth/uart/interface/network drivers
5. or if the above causes issues, download from [here](https://medium.com/nerd-for-tech/how-to-install-unsupported-bluetooth-5-0-dongle-on-linux-4bf34aa99fed)
6. copy install.sh requirments.txt and Contents folder to target server and directory path.
7. For the network card;
```
For motherboard manufacturer
https://www.asrock.com/MB/Intel/B660M%20Pro%20RS/index.asp#Specification

For intel drivers;

https://www.intel.com/content/www/us/en/download/14611/15817/intel-network-adapter-driver-for-pcie-intel-gigabit-ethernet-network-connections-under-linux.html?product=71307

I have uploaded the driver to google driver under tonylee@joy-drone.com

tar zxf igb-xxx.gz
cd igb-xxx/src
sudo make install

reboot
```
8. kakao talk 설치 [블로그](https://www.hahwul.com/2018/08/02/install-kakaotalk-on-ubuntu-18.04/)


```bash
export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"

export MANPATH="/home/linuxbrew/.linuxbrew/share/man:$MANPATH"

export INFOPATH="/home/linuxbrew/.linuxbrew/share/info:$INFOPATH"
```

- to try out, run `brew install hello`

- kakaotalk sh - to show how it works with Kerlym

```bash
sudo apt install wine-stable
WINEARCH=win32 WINEPREFIX=~/.wine wine wineboot
wget https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks
chmod 777 winetricks
sudo apt-get install cabextract
./winetricks

# 1. Select the default wineprefix 체크(Checked
# 2. Install a Windows DLL or component 체크(Checked)
# 3. gdiplus, msxml6, riched30, wmp9 체크(Checked / 거꾸로 찾으시면 금방 찾습니다) 

wget http://app.pc.kakao.com/talk/win32/xp/KakaoTalk_Setup.exe
cp KakaoTalk.desktop /usr/share/applications/
```


## Thi

The basic steps I often do every time I install a new Ubuntu system. The order of things is important.

👉 Note: [Linux](/linux-tips/)
👉 Note: [Windows fresh start](/2021-10-20-Windows-fresh-install.html)
👉 Note: [Mac fresh start](/2021-10-20-fresh-install-macos.html)
👉 Note: [Bash](/2021-10-21-Bash-cli.html)

:::info
Most of commands are for both Ubuntu and Pop!\_OS, there are some which are only for Pop!\_OS.
:::

::: warning
**For Pop!\_OS**: You don't need to do everything in below steps.
:::

{:.noindent}

1. Download [Ubuntu ISO](https://ubuntu.com/download/desktop). If you like a MacOS-like version, you can choose [Elementary OS](https://elementary.io/).
2. Using [Rufus](https://rufus.ie/) (on Windows) or [Etcher](https://www.balena.io/etcher/) (on any system, **recommended**) or [popsicle](https://github.com/pop-os/popsicle) (usb flasher, on pop!\_os) to create a bootable USB drives.
3. **[Pop!\_OS]** Download [Pop!\_OS](https://pop.system76.com/) (with NVIDIA)
   1. (**Update 05 Jun 2021** - **IMPORTANT**) If you're using DisplayLink Dock (more than 1 external screens, Pop!\_OS doesn't work with the DisplayLink Driver 5.4 but it works for Ubuntu 20.04). So, you have no choice to **use Ubuntu instead of Pop!\_OS**!!!! [Read more](https://www.reddit.com/r/pop_os/comments/mok7mf/fresh_pop_os_install_installed_displaylink/).
   2. Choose custom partition while installing > use at least 2 partitions for the installing (1 which is main for **Root** `/` and one which is ~500MB for **Boot** `/boot/etc`)
4. Update & Upgrade

    ```bash
    sudo apt update & sudo apt upgrade
    ```

5. Download and install [Google Chrome](https://www.google.com/chrome).
   1. Sign in to Google Account + sync all extensions + settings.
   2. Disable Tab hover information: Go to [chrome://flags/](chrome://flags/) and search "tab hover" then choose "Disable".
   3. Install also these extensions:
      1. [mate translate](https://chrome.google.com/webstore/detail/mate-translate-%E2%80%93-translat/ihmgiclibbndffejedjimfjmfoabpcke), [google dictionary](https://chrome.google.com/webstore/detail/google-dictionary-by-goog/mgijmajocgfcbeboacabfgobmjgjcoja), [TabCloud](https://chrome.google.com/webstore/detail/tabcloud/npecfdijgoblfcgagoijgmgejmcpnhof), [raindrop](https://chrome.google.com/webstore/detail/raindropio/ldgfbffkinooeloadekpmfoklnobpien), [last pass](https://chrome.google.com/webstore/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd), [AVIM](https://chrome.google.com/webstore/detail/avim-vietnamese-input-met/opgbbffpdglhkpglnlkiclakjlpiedoh), [adblock](https://chrome.google.com/webstore/detail/adblock-%E2%80%94-best-ad-blocker/gighmmpiobklfepjocnamgkkbiglidom), [GNOME Shell integration](https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep).
      2. Google Aut alternative on Chrome: use [this](https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai).
6. Install [Guake Terminal](/terminal#guake-terminal) (drop-down terminal supporting tabs). We install it first because we working mainly on terminal.

   ```bash
   sudo apt-get install guake
   # then add it to startup applications
   #
   # load preferences
   guake --restore-preferences ~/Downloads/guake_prefs
   ```

7. Install **GNOME Tweaks** from App Store.
8. Install [Dash to panel](https://extensions.gnome.org/extension/1160/dash-to-panel/) extension and use [this config](https://github.com/dinhanhthi/scripts/blob/master/settings/pop!os/dash_to_panel.py) for pop and [this](https://github.com/dinhanhthi/scripts/blob/master/settings/ubuntu/dash_to_panel) for ubuntu.
9. Install [git](https://git-scm.com/download/linux)

   ```bash
   sudo add-apt-repository ppa:git-core/ppa
   sudo apt update
   sudo apt install git
   ```

10. Using (rEFInd)](https://www.rodsbooks.com/refind/)

    ```bash
    sudo apt-add-repository ppa:rodsmith/refind
    sudo apt-get update
    sudo apt-get install refind
    ```

    In case you wanna hide some options in the boot manager with rEFInd, you can use [[-]] button to hide it.

    <div markdown="1"><div class="hsbox">
    <div class="hs__title">
    Old method
    </div>
    <div class="hs__content" markdown="1">

    [**Pop!_OS**] **Dual boot with Windows** and others Linux distro: different from Ubuntu (using **grub**), Pop!\_OS uses **systemd-boot** -> follow [this guide](https://pop-planet.info/forums/threads/copy-the-microsoft-bootloader-into-pops-efi-beginners-guide.357/).

    ```bash
    # 1. Open Disks
    # Click on "play" icon on the partition having "Partition type" is "EFI system"
    #
    # 2. Run to check the mount point of these partitions
    lsblk -o NAME,FSTYPE,FSSIZE,MOUNTPOINT
    # output (s/t like that)
    # nvme0n1
    # ├─nvme0n1p1 vfat     176M /media/thi/ESP # <- this is windows mounting point
    # ├─...
    # └─nvme0n1p9 vfat     511M /boot/efi
    #
    # 3. copy to pop!_os
    sudo cp -r /media/thi/ESP/EFI/Microsoft /boot/efi/EFI
    #
    # 4. Add timeout (wait for choosing)
    sudo nano /boot/efi/loader/loader.conf
    # add below others
    timeout 15
    ```

    </div>
    </div></div>

11. Make **Alt-Tab** show windows instead of applications: change in Settings > Keyboards > Custom keyboards > Switch windows. Gnome: install [this one](https://extensions.gnome.org/extension/1437/current-screen-only-for-alternate-tab/) to switch between windows on current screen only.
12. Hangul for system and vscode, and powerline
    *  ibus/xim seem to have some issues in my case, not in general ; try to install fcitx [blog](https://pstudio411.tistory.com/entry/Ubuntu-2004-%ED%81%AC%EB%A1%AC%EC%9D%B4%EB%82%98-%EC%97%AC%EB%9F%AC-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-%ED%95%9C%EC%98%81%ED%82%A4%EA%B0%80-%EC%95%88%EB%A8%B9%ED%9E%90-%EB%95%8C) and set the inputsource to fcitx in the system settings. In some cases, you need to install `sudo apt install gnome-tweak-tool`, which would provide a gui to customize the settings. Other cli that will need would be `sudo dpkg-reconfigure keyboard-configuration` after running `sudo vim /etc/default/keyboard`.
    *  Another option is to edit `sudo vim /usr/share/X11/xkb/symbols/pc` Check this [sof](https://askubuntu.com/questions/33774/how-do-i-remap-the-caps-lock-and-ctrl-keys)
    * Run this `xev`, escape and ctrl+c to cancel.
    * For the powerline to be used in VScode, check this [dev.to](https://dev.to/mattstratton/making-powerline-work-in-visual-studio-code-terminal-1m7), which suggest you to download the patched powerline font and run `sudo fc-cache -vf /usr/share/fonts/` You will need to unzip the downloaded file into /usr/share/fonts/truetype/. Type fc-list | grep -i "meslo" to know the names of other fonts so you can use other fonts in the terminal.
{% include note.html content="hmm I forgot" %}
13. [**Optional**] Make emojis showing up

    ```bash
    sudo apt install fonts-noto-color-emoji
    ```

    After that (make browser recognize more icons), create a new file

    ```bash
    ~/.config/fontconfig/conf.d/01-emoji.conf
    ```

    with [this content](https://github.com/dinhanhthi/scripts/blob/master/settings/ubuntu/01-emoji.conf).

14. Cannot use f keys on keyboard Keychron K8 ([this](https://github.com/Kurgol/keychron/blob/master/k2.md) is useful too):

    ```bash
    echo 0 | sudo tee /sys/module/hid_apple/parameters/fnmode
    # restore
    echo 1 | sudo tee /sys/module/hid_apple/parameters/fnmode
    ```

    **Hint**: You can add this command to a script on startup.

15. [__Ubuntu only__] Auto install drivers

    ```bash
    sudo ubuntu-drivers autoinstall
    ```

    In case you wanna switch between Intel (more power efficient) and NVDIA driver (more powerful)

    ```bash
    sudo prime-select intel
    sudo prime-select nvidia
    ```

16. [__Ubuntu only__] Check the NVDIA driver and install the newest version: check in **Additional Drivers**. In case you wanna remove it and reinstall it later, use

    ```bash
    sudo apt purge nvidia-*
    ```

17. [__Ubuntu only__] Install GNOME Shell extensions

    ```bash
    sudo apt install gnome-shell-extensions
    ```

    Install also [chrome extension](https://extensions.gnome.org/). Go to the corresponding extension link and turn it on and install it. List of useful extensions: [Start Overlay in Application View](https://extensions.gnome.org/extension/1198/start-overlay-in-application-view/), [ESC to close overview from applications list](https://extensions.gnome.org/extension/1122/esc-to-close-overview-from-applications-list/), [Caffein](https://extensions.gnome.org/extension/517/caffeine/), [Alt-Tab Switcher Popup Delay Removal](https://extensions.gnome.org/extension/1317/alt-tab-switcher-popup-delay-removal/), [Sound Input & Output Device Chooser](https://extensions.gnome.org/extension/906/sound-output-device-chooser/), [gtile](https://extensions.gnome.org/extension/28/gtile/), [icon-hider](https://extensions.gnome.org/extension/351/icon-hider/) (on gnome taskbar), [Emoji selector](https://extensions.gnome.org/extension/1162/emoji-selector/), [Current screen only on window switcher](https://extensions.gnome.org/extension/1437/current-screen-only-for-alternate-tab/).

18. Install video codecs,

    ```bash
    sudo apt install ubuntu-restricted-extras
    ```

19. [**Pop!_OS**] Install snap: `sudo apt update && sudo apt install snapd`.
20. Install email client Mailsrping with snap: `sudo snap install mailspring`.

    ```bash
    # Copy icon
    sudo cp /var/lib/snapd/desktop/applications/mailspring_mailspring.desktop /usr/share/applications/
    ```

21. Install **GoldenDict** (app store) and [dictionaries](https://drive.google.com/open?id=1jna8_grA-wyhPrq8BiB7ypadvW3tTlIv).
22. [Visual Studio Code](https://code.visualstudio.com/) and its basic extensions: Bracket Pair Colorizer, Docker, Linux Themes for VS Code, Markdown All in One, Markdown Shortcuts, Remote Development, Python, Auto Close Tags.

    Also add below settings to setting json file ; (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> and search Preferences: Open Settings (JSON), its in `~/.config/Code/User`).

24. Install Git Client as [Gitkraken](https://www.gitkraken.com/). Log in with Github account and clone [all working repositories](https://github.com/dinhanhthi?tab=repositories).
25. Turn off Gnome Shell Activities Animations (click on window taskbar to toggle max/min),

    ```bash
    gsettings set org.gnome.desktop.interface enable-animations true # enable
    gsettings set org.gnome.desktop.interface enable-animations false # disable
    ```

26. [IBUS Bamboo](https://github.com/BambooEngine/ibus-bamboo), Vietnamese Input Method. Need to restart Ibus and choose Bamboo in the keyboard layout. You can use also <kbd>Shift</kbd> + <kbd>~</kbd> for changing the options (Removing the underline, for example) -- You have to switch to Vietnamese Input before using this shortcut. Use <kbd>Super</kbd> + <kbd>Space</kbd> to change between input methods.
27. [**Optional**] You may need to [install Python](/python-installation/) before install (successfully) Overgrive.
28. Google Drive client for Ubuntu: [OverGrive](https://www.thefanclub.co.za/overgrive) (5\$ for each account). An alternative to [Vgrive](https://github.com/bcedu/VGrive).

    ```bash
    # startup commandline for overgrive
    python3 /opt/thefanclub/overgrive/overgrive
    ```

29. **LaTeX**

    ```bash
    sudo apt-get install texlive-full # 5GB
    sudo apt-get install texmaker
    ```

30. If you install Matlab, you can install `matlab-support` to add matlab icon to applications. Note that, if matlab exe file is at `/usr/local/MATLAB/R2017b/bin/matlab`, we add the location of folder as `/usr/local/MATLAB/R2017b/`.
31. Use <kbd>super</kbd> + <kbd>E</kbd> to open **Nautilus File Manager**: change in Keyboard shortcut > Custom Shortcut with command `nautilus`.
32. Default text editor `gedit`, you can use this command in terminal.
33. ~~**Gnome Calendar**~~ in app store.
34. Screen Recorder, use **Kazam** (app store). If cannot recognize mic and speaker, read [this solution](https://askubuntu.com/questions/1234314/screen-recording-applications-are-not-detecting-audio-in-ubuntu-20-04). An alternative is [SimpleScreenRecorder](https://www.maartenbaert.be/simplescreenrecorder/).
35. VLC (app store). If there is a problem of displaying video (there is only sound without video), check [this](https://askubuntu.com/questions/668834/vlc-media-player-is-not-displaying-video-but-audio-works).
36. Read SD card

    ```bash
    sudo apt-get install exfat-utils exfat-fuse
    ```

37. If you wanna make nautilus default again:

    ```bash
    xdg-mime default nautilus.desktop inode/directory application/x-gnome-saved-search
    gsettings set org.gnome.desktop.background show-desktop-icons true
    ```

38. If you wanna make some web app a desktop app, use [nativefier](github.com/jiahaog/nativefier).
39. Bluetooth problem on Dell XPS 15 only: cannot turn on bluetooth ⇒ Try turn off and turn on again the bluetooth in BIOS setting.
40. Useful shortcuts:
    - Capture fullscreen: `Ctrl+Alt+Print` (photos will be saved in **Pictures**)
    - Show desktop: set in Keyboards settings, try to find "Hide all normal windows".
41. [__Only Ubuntu__] Connect Airpod to Ubuntu 20.04:

    ```bash
    # check bluetooth service is running
    hciconfig -a
    #
    # open a file
    sudo nano /etc/bluetooth/main.conf
    #
    # add
    ControllerMode = bredr
    #
    # restart bluetooth service
    sudo /etc/init.d/bluetooth restart
    #
    # disconnect other headphone device
    # press and hold backward button in the airpod case (flash light)
    # connect to airpod as other device via bluetooth
    ```

42. Location of `.desktop` files,

    ```bash
    ~/.local/share/applications/
    /usr/share/applications/
    /var/lib/snapd/desktop/applications/
    # or
    locate *.desktop # bash
    locate \*.desktop # zsh
    ```

43. [__Optional__] Xbox controller bluetooth connection: check [this](https://askubuntu.com/questions/998144/how-can-i-use-my-xbox-one-s-controller-via-bluetooth).
44. Remove icon from dash application

    ```bash
    sudo add-apt-repository ppa:caldas-lopes/ppa
    sudo apt-get update
    sudo apt-get install ezame
    ```

45. Restore [dconf setting](https://github.com/dinhanhthi/scripts/tree/master/settings):

    ```bash
    dconf load / < dconf-settings.ini
    # or
    cat dconf-settings.ini | dconf load /
    ```

46. Restore [custom keyboard shortcuts](https://github.com/dinhanhthi/scripts/tree/master/settings),

    ```bash
    # load
    dconf load /org/gnome/desktop/wm/keybindings/ < keybindings.dconf
    dconf load /org/gnome/settings-daemon/plugins/media-keys/ < keybindings.dconf
    ```

47. [__Optional__] Disable touchpad automatically when plugging mouse:

    ```bash
    sudo add-apt-repository ppa:atareao/atareao
    sudo apt update
    sudo apt install touchpad-indicator
    # then open > click on icon > preferences
    # > action tab > "Disable touchpad when mouse plugged"
    ```

48. Other applicatons:
    1. [Skype](https://www.skype.com/en/get-skype/)
    2. [Extreme Download Manager](https://subhra74.github.io/xdm/) (uninstall by running as root `/opt/xdman/uninstall.sh`)
    3. ~~[AO](https://github.com/klaussinani/ao) (MS to do for Ubuntu): `snap install ao`~~
    4. **Shotwell** or **gThumb** (image viewer + quick editor, install on Store)
    5. **KolourPaint** (photo editor supports cut and move a selection like Paint on Windows, install from AppStore)
    6. **Cheese** (camera app)
    7. [Drawing](https://maoschanz.github.io/drawing/)
    8. ~~[Stacer](https://oguzhaninan.github.io/Stacer-Web/) (optimizer system like Advanced System Care)~~
    9. ~~[Google Music](https://www.googleplaymusicdesktopplayer.com/)~~. This one: [Youtube Music Desktop](https://snapcraft.io/youtube-music-desktop-app) (install with snap) -- Remove the coincisive keys with the systems.
    10. ~~[Authenticator](https://flathub.org/apps/details/com.github.bilelmoussaoui.Authenticator)~~
    11. **alacarte** (Main Menu, can be found in App Store): change/add icon in launcher.

49. Swap function keyboards on [Logitech K380](https://www.logitech.com/en-us/product/multi-device-keyboard-k380), using [this tool](https://github.com/jergusg/k380-function-keys-conf) (try all keyboard hidraws if you are not sure!).
50. Force Unity Dash to index all files on Home: `sudo updatedb` (install by `sudo apt-get install mlocate`)
51. [__Only Ubuntu__] There are 2 ubuntu softwares in dash? (ref [this question](https://askubuntu.com/questions/1235835/ubuntu-software-doesnt-work-and-why-are-there-two-software-center-in-ubuntu-20)). "Ubuntu software" is pre-installed snap store (run by `snap-store`), the other is `gnome-software`.
52. <mark>Backup before installing a new system.</mark>
    - Settings in `~/.config/` or `~/.<software-name>`
    - All apps in `~/apps/` with their desktop files in `~/.local/share/applications/`
53. **Pop!\_OS Tips**:
    1. `Super` + `Y`: toggle tiling mode.
    2. Add a windows/applition exepton of tiling mode (it wont be counted)
    3. Make clocks + dates 2 lines -> [tutorial](https://askubuntu.com/questions/1081793/how-to-display-date-under-time-in-gnome).
       - Install [clock override extension](https://extensions.gnome.org/extension/1206/clock-override/).
       - Using ` %H:%M%n%d/%m/%Y` in _text to display instead of the clock_ (with the spaces so that they are center aligned).

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
