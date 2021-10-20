---
layout: post
title: "initial settings, keyboard, homebrew"
name: "fresh-install-macos"
tags: [getting_started]
tagName: mac
permalink: 2021-10-20-fresh-install-macos.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: getting_started
keywords: "screenflick keyboard settings controlstrip printers scanners"
summary: "Wed, Oct 20, 21, from accessories to key customization tips"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-10-20T17:05:21 +0900
updated: 2021-10-20 17:05
---
* TOC
{:toc}

## Thi

This is my personal list of to-do things for a new Macbook.

👉 Note: [Ubuntu / Pop!\_OS fresh start](/2021-10-20-fresh-installation-ubuntu.html).
👉 Note: [Windows fresh start](/2021-10-20-Windows-fresh-install.html).
👉 Note: [DS & ML with Mac M1](/getting-start-data-science-machine-learning-on-mac-m1.html).

1. **Check info**:

   ```bash
   # Current version of MacOSX
   sw_vers -productVersion

   # Check if XCode Command Line Tools is installed
   xcode-select --install
   # Should return "/usr/bin/xcrun"
   # If there is any problem, try to install XCode from App Store!

   # check if running on ARM or Intel
   arch
   # arm64 -> ARM
   # i386 -> Intel (running with Rosetta)
   ```

2. **Keyboard & Trackpad settings**: Go to **Keyboard Settings** and then,

   1. Should choose "U.S." instead of "U.S. International" because with the latter, we have underline score below special symbols like `"`
   2. For Vietnamese input method, DON'T choose built-in VNese input options. Use ~~[GoTiengViet](https://www.trankynam.com/gotv/)~~ [EVKey](https://evkeyvn.com/) instead (Turn off _Gatekeeper_ before installing by `sudo spctl --master-disable`. Then check by `spctl --status` => should return `assessments disabled`)! (Because there will be unconfortable underline when we type).
      1. **Note 1**: If you are going to use Bitwarden (a password manager, recommended), it will prevent sometimes the input method to work normally (including GoTiengViet and EVKey). In this case, you have to turn off Bitwarden (or restart it).
      2. **Note 2**: EVKey works better than GoTiengViet (and it's still maintained) in some cases, for example, when you wanna type "thử nghiệm" on the browser address bar, GoTiengViet gives "thuử nghiệm" instead.

3. **More keyboard settings**:

   1. Touch Bar shows: **F1, F2, etc Keys**.
   2. Press ... to: **Do Nothing**.
   3. Press and hold ... to: **Show Control Srip**.
   4. Tick on "Use F1, F2..."
   5. Click on **Customize Control Strip** and change. Below are my customization.

      ```bash
      Brightness - Keyboard Brightness -- Media -- Volume -- Screen Lock -- Night Shift -- Screen Capture -- Dictation -- Siri
      ```

4. Map top-left keyboard to backslash/tilde symbols. Install [Karabiner-Elements](https://karabiner-elements.pqrs.org/) and setting up "non_us_backslash" to "grave_accent_and_tilde (`)". If you don't know the names of some keys, you can use installed Karabiner Viewer.
5. Three fingers to drag (choose texts): **System Preferences** > **Accessibility** > **Pointer Control** > **Trackpad Options...** > Enable dragging (three fingers drag).
6. Install [AltTab](https://alt-tab-macos.netlify.app/) (and use [[⌘]] + [[⇥]] which replaces the default method on mac, be careful!!!) to switch between windows (instead of apps) like on Windows/Linux: `brew install --cask alt-tab`. Open its preferences (We wanna show windows only on the screen containing the cursor):
   - General > tick on "Start at login".
   - Controls > Show windows from: "Screen showing AltTab" (on the 3rd option).
   - Appearance > Show on "Screen including mouse".
7. **For external keyboard K380**: Download and install [Logitech Options](https://www.logitech.com/en-us/product/options). Install this to use [[F]] keys by default. **Remark**: Don't open Bitwarden while using K380, otherwise, it won't work normally (for example, F keys).
8. Enable to install unknown softwares: Sometimes, you cannot install some app from the internet, just go to **System Preferences** > **Security & Privacy** > There will be some warning line at below of "App Store and identified developers", just click "Open anyway"!
   - If you have some issue with `.dmg` file like "resource busy", open **Disk Utility**, then **Images** > **Verify...** > Choose the image file you cannot open then click "Verify"!
9. **Git**: install Gitkraken.
10. (Optional) Install [Hombrew](https://brew.sh/) (missing package control for mac).

    ```bash
    # after install, don't forget to add to PATH
    echo 'eval $(/opt/homebrew/bin/brew shellenv)' >> /Users/thi/.zprofile
    eval $(/opt/homebrew/bin/brew shellenv) # refresh

    # problem with "old" cask
    # instead of
    brew cask something
    # use
    brew install --cask something
    ```

11. **Printers & Scanners**:
    1. Setting up **printers** (if available). You may need [Gutenprint](http://gimp-print.sourceforge.net/MacOSX.php) for an alternative driver for printers on chip M1. After installing the drivers, turn on your printer (connect to a common wifi or via an usb cable), then _System Preferences_ > _Printers & Scanners_ > Add printer and choose your own printer, don't forget to choose Gutenprint as driver!
    2. For **scanner** app: you can use VueScan (paid) if the current version of app doesn't support chip M1 yet!
    3. For **Canon MG2900** printer/scanner + apps: you may need to download and install drivers from [this site](https://brothersupportdownloads.blogspot.com/2020/06/canon-pixma-mg2900-scanner-driver.html). A backup files are [here](https://mega.nz/file/U0RwBR6T#qa50uOyhlAEiRtrMm_zBkXPtPufJD2Wa1gtbtkw5W_w). You may find other useful drivers for other types of printers on this site also.
    4. **Scanner app**: use **Image Capture** (built-in app on Mac) or install **Canon IJ Scan Utility2**.
12. **Finder**:
    1. Add necessary folder shortcuts to sidebar.
    2. Add recycle Bin to sidebar: [[⇧]] + [[⌘]] + [[.]] to show hidden folders > drag **Bin** folder to sidebar > [[⇧]] + [[⌘]] + [[.]] to hide hidden folders again.
    3. Customize some options in Preferences.
    4. Show status bar: View > Show status bar.
13. Copy files between Linux and MacOS. **Require**: the same wifi network!
    1. **On MacOS**: System Preferences > Sharing > Tick on "File Sharing" > choose "Shared Folders" > on "Everyon", change to "Write & Read".
    2. **On Linux**: Nautilus, click on "Other Locations" > "Networks" > choose the Macbook (and type macos profile password) > choose the shared folders in previous step > Exchange files/folders you want.
14. Disable Resume in Preview and QuickTime Player

    ```bash
    defaults write com.apple.Preview NSQuitAlwaysKeepsWindows -bool false
    defaults write com.apple.QuickTimePlayerX NSQuitAlwaysKeepsWindows -bool false
    ```

15. **Screen recorder**:
    - **My choice**: using [Screenflick](https://www.araelium.com/screenflick-mac-screen-recorder) (paid, 35$).
      - **Setting to record both system audio and microphone** (Google Meet, for example): Suppose that we allow all Screenflick's requirements for system access. Open Meet, connect external mic > System Settings > Sound > choose the right input and output devices > On Meet, choose and test the right devices > Make a call as usual > Open Screenflick > Tick on Record System Audio (already installed Audio Extension), tick on Record Microphone, choose the right mic (not "BlackHole 2ch"!!) > Record as usual.
    - Using **QuickTime** / built-in function. Open QuickTime or [[⌘]] + [[⇧]] + [[5]] to open screenshot/recording options. **Weakness**: big size + impossible (or possible??) to record system sounds.
    - Using [OBS](https://obsproject.com/) (Free, suitable for streaming) (for recording app) + [BlackHole](https://github.com/ExistentialAudio/BlackHole) (for bypassing system audio recorder, I chose **2ch** to download).
      1. Check [this article](https://obsproject.com/forum/resources/os-x-capture-audio-with-ishowu-audio-capture.505/) for setting up with OBS (not that, in this article, they use a different tool than BlackHold)
      2. Check [this article](https://streamlabs.com/content-hub/post/capturing-desktop-audio-in-streamlabs-obs-for-mac) for using BlackHole to capture system audio on Mac.
      3. Open **Audio MIDI Setup** > Click on "+" > "Create Multi-Output Device" > Check on (Use side) current using Speaker (ex. External Headphones) + BlackHole 2ch. Check also (Drift Correction) for "External Headphones". Rename to something to remember, e.g. "Screen Recorder". We wanna listen the system audio via 2 output, one is external heaphones, 1 is "virtual" BlackHole (so that it can recorder the sound).
      4. Open **Sound** setting and choose "Screen Recorder". **Tip**: you should adjust the sound before change to "Screen Recorder" because you will not be able to change sound level in this option.
      5. In **OBS**, Add screen, add 2 microphones, one for real mic, one for device BlackHole 2ch.
         1. Open Preferences > Audio: Mic/Aux 1, choose "External microphone", Mic/Aux 2, choose "BlackHole 2ch" > OK.
      6. Some settings for OBS:
         1. Turn off preview for screen (for comfortable)
         2. **Video** > Common FPS Values = 20
16. **Dictionary**
    - [Install Viettien](https://mega.nz/file/x0RgTbhK#1rz1mpsbXXxLmLs1blVk9zLEmI0d5FXk7Bora4Rm9Y0) (I use version 5.0b for Mac Big Sur chip M1). Alternative dictionaries can be downloaded from this link (I backed it up for personally using).
      1. Don't forget to open **Security & Privacy** and click on **Open anyway** many times!
      2. Another option is to install Tinhte's dictionary from this link, copy extracted folder (`Tinhe_anh-viet.dictionary`) to `/Users/thi/Library/Dictionaries/`.
      3. After installing successfully, open Dictionary app > Preferences... > Tick on the names which are corresponding to the installed/copied dictionaries.
      4. There are built-in LacViet dictionaries but they are not activated yet, don't forget them!
    - **Goldendict**: download installation [here](https://github.com/goldendict/goldendict/wiki/Early-Access-Builds-for-Mac-OS-X) + dictionaries [here](https://drive.google.com/drive/folders/1jna8_grA-wyhPrq8BiB7ypadvW3tTlIv).
17. **External applications**
    - [AppCleaner](https://freemacsoft.net/appcleaner/) -- uninstaller.
    - [Authy](https://authy.com/) -- Two factor authentication (Yes, use it instead of Google Authenticator or others!)
    - (Optional) [balenaEtcher](https://www.balena.io/etcher/) -- Flash OS images to SD cards & USB drives, safely and easily. In case you wanna make a bootable USB to install other OS.
    - [Bartender 4](https://www.macbartender.com/Bartender4/) (paid, 15.37$) -- hide some icons on menu bar.
    - [CleanMyMac](https://macpaw.com/cleanmymac) (paid) -- uninstaller + optimize your mac.
    - **Communication**: [Skype](https://www.skype.com/en/get-skype/), [Zoom](https://zoom.us/download), [Slack](https://slack.com/intl/en-fr/downloads/mac).
    - [Docker](https://docs.docker.com/docker-for-mac/apple-m1/)
    - ~~[Dropbox](https://www.dropbox.com/downloading). We can "quit" the app on dock, the icon on menu still there!~~ [Google Drive](https://www.google.com/drive/download/) -- sync personal data files.
    - [EVKey](https://github.com/lamquangminh/EVKey) -- Vietnamese Input Method. **Note**: Don't use it with Bitwarden (a password manager).
    - [GitKraken](https://www.gitkraken.com/) + sign in + clone some repos. Check [this note](/gitkraken/).
    - ~~[Google Chrome](https://www.google.com/chrome/) and sign in to sync~~. **I'm using [Brave](https://brave.com/)** (chromium-based engine also)
      1. Disable Tab Hover Cards: navigate to `chrome://flags/`, search for "tab hover" and choose "Disable".
      2. Add a site to use cookies (enable third-party cookies for downloading files on Google Drive): Go to `chrome://settings/cookies` and then "Add" `drive.google.com` (tick on third-party...) in "Sites that can always use cookies" section.
      3. Custom keyboard shortcut: System Preferences > Keyboard > Shortcuts > Application Shortcuts > "+" > Choose Chrome > Type the name EXACTLY THE SAME as the name in menu (for example "Inspect elements") > Add a custom shortcut.
    - [iTerm2](https://iterm2.com/) (check more in other section)
    - [Itsycal](https://www.mowglii.com/itsycal/) -- a dropdown calendar with agenda. After installing, you have to choose manually the agenda profiles you wanna show.
    - [Mojibar](https://github.com/muan/mojibar) - emoji indicator on menu bar. Install via `brew install mojibar`. Using [[⌃]] + [[⇧]] + [[⎵]] to open the window. A paid option is [Mumu](https://getmumu.com/) (20$). After install, press [[cmd]] + [[,]] to open preferences and then choose Skin tone to "None" (for me only).
    - [Molotov](https://www.molotov.tv/download) -- watch French TV online.
    - [MusicBrainz Picard](https://picard.musicbrainz.org/) - Free music tag editor.
    - ~~[Paragon NTFS](https://www.paragon-software.com/home/ntfs-mac/) (paid, 20$)~~ [Mounty](https://mounty.app/) (no need to restart) -- Do everything with Windows drives on your Mac.
      - Another option: you can buy an OTG (On-The-go) adapter and connect the external drive using it without any problem. I used [Urgreen's](https://www.amazon.fr/gp/product/B072V9CNTK).
    - [Paintbrush](https://paintbrush.sourceforge.io/) -- a "Paint like" for macOS. A simple image editor for macOS.
    - [Qbserve](https://qotoqot.com/qbserve/) (paid, 15 days trial) -- Activities tracker for MacOS. Record all of your activities on your Mac (and show in real time on menu bar) your productivity. I chose it because I can buy it forever without subscription and satisfies with its simple UI.
    - [qView](https://interversehq.com/qview/download/) -- cross platform photo viewer (continuously view photos in the same folder + simple viewer + no open old files,...)
    - [Raindrop](https://raindrop.io/download) -- bookmark manager.
    - [SelfControl](https://selfcontrolapp.com/) -- A free Mac application to help you avoid distracting websites. **Tip**: It seems that impossible to disable until the time is over, however, just change the system date and you are able to reset the timer.
    - [TeamViewer](https://www.teamviewer.com/en/download/mac-os/) -- remote control.
    - [Transmission](https://transmissionbt.com/) -- torrent client.
    - ~~[uBar](https://brawersoftware.com/products/ubar) (paid) -- disable default dock and make a windows-like taskbar. **Be careful**, it takes too much RAM!~~
    - ~~[VLC Player](https://www.videolan.org/vlc/download-macosx.html)~~ -- video player. [IINA player](https://iina.io/) -- The modern media player for MacOS.
    - [VSCode](https://code.visualstudio.com/download) + sign in to sync using Github account.
    - [XDM Download Manager](https://sourceforge.net/projects/xdman/files/XDMSetup.dmg/download). [An alternative way](https://brewinstall.org/install-xtreme-download-manager-mac-osx/) to install it via brew.
    - [Youtube Music App](https://ytmusic.app/) for Mac (unofficial)
    - ~~[XtraFinder](https://www.trankynam.com/xtrafinder/) (additional settings for Finder)~~
18. **Appstore**

    - **Amphetamine** -- Keep-awake your mac, an alternative to caffein on linux.
    - **Bitwarden** -- need to install desktop application to enable fingerprint unlock for browser extension. Restart both application and follow the instruction on extension to enable this feature.
    - **Communication**: Whatsapp Desktop + Messenger App.
    - **DictBox** -- dictionary.
    - **Magnet** -- arrange window workspace (stick to edge like on Windows).
    - **Skitch** -- annotation for photos on Mac.
    - **TaskTab** -- List of tasks right on menu bar.
    - **TickTick** -- task manager.
    - **The Unarchiver**
    - **Word** and **Powerpoint** (in Office 365 suit, paid). You can buy a lifetime license on ebay (not your own email but you can integrate yours later).
    - **Yomu** -- ebook reader.

19. **Terminal**

    - (For chip M1 only)

      ```bash
      # check if running on ARM or Intel
      arch
      # arm64 -> ARM
      # i386 -> Intel (running with Rosetta)
      ```

      Copy `/Applications/Utilities/Terminal.app` to Download folder, rename it to **Terminal-Rosetta.app**. Move the new to /Applications/Utilities/ again. Right click on Terminal-Rosetta.app > Get Info > Click on "Open using Rosetta". - If you wanna run commands in Intel environment, use **Terminal-Rosseta**. - If you wanna run commands in ARM environment, use **Terminal.app**.

    - Dropdown terminal with **iTerm2**.
      1. Create a new profile and make it default. Download my customized profile [here](https://github.com/dinhanhthi/scripts/blob/master/settings/macos/DropDown.json).
      2. Click on new profile > Keys > Tick on "A hotkey..." > Set [[⌘]] + [[`]] for opening window.
      3. For "non profile settings": Keep default with,
         1. General > Window: Tick on "Smart...".
         2. Appearance > general > Tab bar location: bottom.
         3. Advanced: search "animation" > Hotkey: 0.05;
      4. Custom name of pane: Right click on the pane > _Edit Session..._ > Tab _General_ > Change the name in _Session Name_ (eg. "WORKING") (also click on the "lock" icon on the right) > _Session Title_ ONLY tick on "Session Name".
    - **Zsh terminal**: 👉 Note: [Terminal](/terminal/).

      ::: hsbox Code

      ```bash
      # By default, iTerm2 comes with pre-installed zsh
      # You can check current shell
      echo $SHELL # should returns /bin/zsh
      # Check zsh version
      zsh --version

      # install oh-my-zsh
      sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

      # install spaceship theme
      git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"
      ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
      # Make spaceship as default
      # Set ZSH_THEME="spaceship" in your .zshrc.
      # Follow this (optional): https://gist.github.com/kevin-smets/8568070
      # Download (then open and install) font Source Code Pro:
      # https://github.com/powerline/fonts/blob/master/SourceCodePro/Source%20Code%20Pro%20for%20Powerline.otf
      # Open iTerm2 Preferences > Profile > Text > change font!

      # If you wanna see the changes
      source ~/.zshrc
      ```

      :::

20. Macbook keyboard symbols

    ::: hsbox ALl symbols

    ```bash
    HTML Entity     GLYPH  NAME
    &#63743;              Apple
    &#8984;         ⌘      Command, Cmd, Clover, (formerly) Apple
    &#8963;         ⌃      Control, Ctl, Ctrl
    &#8997;         ⌥      Option, Opt, (Windows) Alt
    &#8679;         ⇧      Shift
    &#8682;         ⇪      Caps lock
    &#9167;         ⏏      Eject
    &#8617;         ↩      Return, Carriage Return
    &#8629; &crarr; ↵      Return, Carriage Return
    &#9166;         ⏎      Return, Carriage Return
    &#8996;         ⌤      Enter
    &#9003;         ⌫      Delete, Backspace
    &#8998;         ⌦      Forward Delete
    &#9099;         ⎋      Escape, Esc
    &#8594; &rarr;  →      Right arrow
    &#8592; &larr;  ←      Left arrow
    &#8593; &uarr;  ↑      Up arrow
    &#8595; &darr;  ↓      Down arrow
    &#8670;         ⇞      Page Up, PgUp
    &#8671;         ⇟      Page Down, PgDn
    &#8598;         ↖      Home
    &#8600;         ↘      End
    &#8999;         ⌧      Clear
    &#8677;         ⇥      Tab, Tab Right, Horizontal Tab
    &#8676;         ⇤      Shift Tab, Tab Left, Back-tab
    &#9250;         ␢      Space, Blank
    &#9251;         ⎵      Space, Blank
    ```

    :::

21. Add gap to Dock (use multiple times)

  ```
  defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'; killall Dock
  ```

5. 🐞 **Errors**

   1. After updating

      ```bash
      defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'; killall Dock
      ```

      Need to update _Xcode Command-line Tools_:

      ```bash
      # option 1
      xcode-select --install
      # output:
      xcode-select: note: install requested for command line developer tools
      ```

      ```bash
      # option 2 (if option 1 doesn't work)
      # Login + download from webpage
      https://developer.apple.com/download/more/
      ```

   2. **Sidecar**: Using Sidecar feature to turn your ipad to an external screen. It ==works normally with cable== (you have to "trust" from both sides each other). In the case you **cannot use Sidecar via wireless**,

      1. Turn on Hardoff on both Mac (in General) and iPad (in General).
      2. Turn on Bluetooth and Wifi (connect to the same network).
      3. Turn off file sharing and VPN.
      4. Reset network setting on your ipad (General > Reset > ...) > restat > connect again to the same network with your Mac > wait 2 minutes > try Sidecar again!
      5. **Best practice**: Using sidecar via a usb cable! If using wifi, we have latency with mouse cursor!
      6. For ones who using mac's usb-c port. A direct hub (with an lightning output to charge ipad) may not work (not sufficient power to charge ipad). However, usign another usb-dock and connect to the hub is working fine. Other words,
         - _Not working_: mac - hub - ipad.
         - _Working_: mac - hub - usb doc - ipad

   3. In case of error in installing Application with `App is Damaged Can’t Be Opened`

      ```bash
      xattr -cr /Applications/App_Name.app
      ```

6. **External screens**: I use 2 external screens. However, chip Apple M1 doesn't support more than 1 external one. That's why we need an adapter (having DisplayLink technology) + to install DisplayLink driver for Mac.

   - I use [this adapter](https://www.wavlink.com/en_us/product/WL-UG39DK1_White.html) (Wavlink's USB 3.0 Laptop Docking Station -- WL-UG39DK1) because it's the cheapest one I can find in France.
   - [DisplayLink driver](https://www.displaylink.com/downloads/macos). Not that, with current version (1.4), [it doesn't support rotating screen](https://support.displaylink.com/knowledgebase/articles/1963276).

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
