# LeddarOne Lidar

[LeddarOne](https://leddartech.com/solutions/leddarone/) is small Lidar module with a narrow, yet diffuse beam that offers excellent overall detection range and performance, in a robust, reliable, cost-effective package. 
It has a sensing range from 1cm to 40m and needs to be connected to a UART/serial bus.

<img src="images/drones/hardware/sensors/leddar_one.jpg" alt="LeddarOne Lidar rangefinder" width="200px" />


## Hardware Setup

LeddarOne can be connected to any unused *serial port* (UART), e.g.: TELEM2, TELEM3, GPS2 etc.

Build a cable following your board and pinout and LeddarOne pinout (shown below). You only will need to connect 5V, TX, RX and GND pins.

Pin | LeddarOne
--- | ---
1 | GND 
2 | - 
3 | VCC 
4 | RX 
5 | TX 
6 | - 


## Parameter Setup

[Configure the serial port](../peripherals/serial_configuration.md) on which the lidar will run using [SENS_LEDDAR1_CFG](../advanced_config/parameter_reference.md#SENS_LEDDAR1_CFG).
There is no need to set the baud rate for the port, as this is configured by the driver.

:::note
If the configuration parameter is not available in *QGroundControl* then you may need to [add the driver to the firmware](../peripherals/serial_configuration.md#parameter_not_in_firmware):
```
drivers/distance_sensor/leddar_one
```
:::

## Further Information

* [LeddarOne Spec sheet](https://leddartech.com/app/uploads/dlm_uploads/2017/05/Spec-Sheets-LeddarOne-27octobre2017-web.pdf)
