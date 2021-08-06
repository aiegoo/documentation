## Android Studio environment setup
Tower is configured to use Android Studio, so you'll need to [download Android Studio](http://developer.android.com/sdk/installing/studio.html).

Once Android Studio is installed and running, select Import Project and choose your local ```tower``` folder.  If Android Studio asks to update Gradle for this project, dismiss the dialog.

## Building the app
You should now be ready to build and run the app on your test device.

The first time you try to run the application you'll need to select the debug build configuration.  Click on the Build Variants button on the bottom left of Android Studio, and select the devDebug variant for the Android module.

Save the project, then connect your Android device via USB and choose Run > Debug. At this point the app should install and launch on your device. If you are having trouble, feel free to ping the developers on the [gitter channel](https://gitter.im/dronekit/dronekit-android).
