# Airspeed Calibration

The airspeed calibration needs to read a stable baseline with 0 airspeed in order to determine an offset.

:::note
[Airspeed sensors](../sensor/airspeed.md) are highly recommended for Fixed Wing and VTOL vehicles.
:::

:::warning
Unlike most other sensor drivers, the airspeed sensor drivers are not automatically started.
Before calibration they must be [enabled via the corresponding parameter](../advanced_config/parameters.md):
- Sensirion SDP3X ([SENS_EN_SDP3X](../advanced_config/parameter_reference.md#SENS_EN_SDP3X))
- TE MS4525 ([SENS_EN_MS4525](../advanced_config/parameter_reference.md#SENS_EN_MS4525))
- TE MS5525 ([SENS_EN_MS5525](../advanced_config/parameter_reference.md#SENS_EN_MS5525))
- Eagle Tree airspeed sensor ([SENS_EN_ETSASPD](../advanced_config/parameter_reference.md#SENS_EN_ETSASPD))
:::

## Performing the Calibration

The airspeed calibration needs to read a stable baseline with 0 airspeed in order to determine an offset.
Cup your hands over the pitot to block any wind (if calibrating the sensor indoors this is not needed) and then blow into the tube using your mouth (to signal completion of the calibration).

To calibrate the airspeed sensor:

1. Start *QGroundControl* and connect the vehicle.
2. Enable the airspeed sensors if not already done (as in *warning* above).
3. Select the **Gear** icon (Vehicle Setup) in the top toolbar and then **Sensors** in the sidebar.
4. Click the **Airspeed** sensor button.

   ![Airspeed calibration](images/drones/qgc/setup/sensor/sensor_airspeed.jpg)
   
1. Shield the sensor from the wind (i.e. cup it with your hand). 
   Take care not to block any of its holes.
1. Click **OK** to start the calibration.
1. Once asked for, blow into the tip of the pitot tube to signal the end of calibration.

   :::tip
   Blowing into the tube is also a basic check that the dynamic and static ports are installed correctly.
   If they are swapped then the sensor will read a large negative differential pressure when you blow into the tube, and the calibration will abort with an error. 
   :::

1. Wait for 2-3 seconds before removing the covering (calibration completes silently after several seconds)


## Further Information

* [QGroundControl User Guide > Sensors](https://docs.qgroundcontrol.com/en/SetupView/sensors_px4.html#airspeed)
