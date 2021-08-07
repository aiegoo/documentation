###Making Google Maps work
You should now have Tower running on your development phone, but you'll notice that the map tiles aren't loading, and you'll see an error in Android Studio. To see the maps on your development device, you'll need to generate your own Google Maps API key via the Google API console (or Google Cloud console). The package name for Tower is 'org.droidplanner.android' as listed in the AndroidManifest.xml file.

Please follow [Installing The Google Maps Android V2 API](https://developers.google.com/maps/documentation/android/start#installing_the_google_maps_android_v2_api)

Once you have obtained your API key, open the AndroidManifest.xml file and find the entry for the Google Maps API key:

![Google Maps API key](http://f.cl.ly/items/0v0V3b3n0E303s400x2i/Screen%20Shot%202014-03-09%20at%201.27.53%20PM.png)

You should now see Google Maps tiles when debugging the app.