# Holybro H-RTK M8P GNSS

The [Holybro H-RTK M8P GNSS](http://www.holybro.com/product/h-rtk-m8p-rover-lite/) is an [RTK GNSS module](../gps_compass/rtk_gps.md) series for the mass market.
This family is similar to the [H-RTK M9P](../gps_compass/rtk_gps_holybro_h-rtk-f9p.md) series but uses the smaller, lighter, and less expensive M8P u-blox RTK GNSS module (which still provides far superior position resolution than previous generations_.

There are three models of Holybro H-RTK M8P to choose from, each with different antenna design to meet different needs.
Refer to the [Specification and Model Comparison section](#specification-and-model-comparison) for more details.

Using RTK allows PX4 to get its position with centimeter-level accuracy, which is much more accurate than can be provided by a normal GPS.

![h-rtk_rover](images/drones/hardware/gps/rtk_holybro_h-rtk-m8p_all_label.jpg)

## Purchase

* [H-RTK M8P (Holybro Website)](https://shop.holybro.com/h-rtk-m8p_p1221.html)
* [H-RTK Accessories (Holybro Website)](https://shop.holybro.com/c/h-rtk_0512)

## Configuration

RTK setup and use on PX4 via _QGroundControl_ is largely plug and play \(see [RTK GPS](../advanced_features/rtk-gps.md) for more information\).

## Wiring and Connections

All H-RTK GNSS models come with a GH 10-pin connector/cable that is compatible with [Pixhawk 4](../flight_controller/pixhawk4.md).

:::note
The cables/connectors may need to be modified in order to connect to other flight controller boards (see [pin map](#pin_map)below).
:::

<span id="pin_map"></span>
## Pin Map

![h-rtk_rover_pinmap](images/drones/hardware/gps/rtk_holybro_h-rtk-m8p_pinmap.jpg)

## Specification and Model Comparison

![h-rtk_spec](images/drones/hardware/gps/rtk_holybro_h-rtk-m8p_spec.png)

## GPS Accessories

[H-RTK Accessories (Holybro Website)](https://shop.holybro.com/c/h-rtk_0512)

![h-rtk](images/drones/hardware/gps/rtk_holybro_h-rtk_mount_3.png)
