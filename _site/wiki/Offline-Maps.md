**Tower v3.2.0** introduces a better flow for offline map support.

#### Prerequisites:
 In order to use this feature, a valid [mapbox account](https://www.mapbox.com/) is required!

Sign in to your [mapbox account](https://www.mapbox.com/), and click on the [projects](https://www.mapbox.com/projects/) section.

![Mapbox Projects](https://cloud.githubusercontent.com/assets/914968/10420676/f3c751b2-704d-11e5-94a2-88e782d7ec8c.png)

In the projects screen, make sure to note down your **mapbox access token** and **mapbox id**. You'll need them later. 
If you don't have a project already created, click on the **new project** button to generate one.

![Mapbox Projects screen](https://cloud.githubusercontent.com/assets/914968/10420677/f3ca6ab4-704d-11e5-85c4-e6551dfc2323.png)

Click on your map project, and select the _style_ tab in order to update your map preferences.

![Map project styles](https://cloud.githubusercontent.com/assets/914968/10420678/f3cca73e-704d-11e5-8394-50ffd9eebfbe.png)


#### Offline Map Setup

- Open the **Tower app** and navigate to `Settings` -> `User Interface`:
![tower_settings_user_interface](https://cloud.githubusercontent.com/assets/914968/10264723/4a9206d0-69c9-11e5-91c3-186159fe29e9.png)


- Navigate to the `Map Provider Preferences`:
![tower_map_provider_pref](https://cloud.githubusercontent.com/assets/914968/10264728/6cdb2028-69c9-11e5-88aa-7d410fc0fef4.png)


- In the preferences screen, select `mapbox` as the tile provider.
![tower_map_tile_selection](https://cloud.githubusercontent.com/assets/914968/10264733/a8e56df8-69c9-11e5-8fb3-ca67e2f0a009.png)


- Then enter your mapbox account `id` and `access token`.
![tower_map_mapbox_id_pref](https://cloud.githubusercontent.com/assets/914968/10264736/c4cb3d54-69c9-11e5-99ed-592bc2c8505a.png)

  ![tower_map_mapbox_token_pref](https://cloud.githubusercontent.com/assets/914968/10264737/d07eaa6e-69c9-11e5-81b2-8c7edd2332a4.png)


- Once this setup is complete, check `Enable offline map layer` to activate offline map support.
![tower_map_enable_offline_mode](https://cloud.githubusercontent.com/assets/914968/10264749/4fbbafc0-69ca-11e5-8d35-bdd093803744.png)


- Additionally, check `Add 'Download Map' to menu` to add the `Download Map` option to the overflow menu.
![tower_map_download_menu_button](https://cloud.githubusercontent.com/assets/914968/10264757/b4a388d6-69ca-11e5-8fde-40e8630a173a.png)

- Click on the `Download Map` menu button to access the map download screen. Follow the instructions on-screen to complete the download process.
![tower_map_download_screen](https://cloud.githubusercontent.com/assets/914968/10264767/e98e65a2-69ca-11e5-91b9-127a823b12df.png)