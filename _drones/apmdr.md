## Pixhawk lite

| Type  | Details | Type  | Details |
| :---: | ---  | :---: | ---  |
| frame |  | FC |  |
| motor |  | ESC |  |
| RC  |  | mode |  |
| weight |  | class |  |
| battery |  | air-time |  |
| configurator |  |  last updated |   |
## mission planner connection

### GPS LSM3030 and sat list

|COMPASS_DEV_ID|131594|SPI|1|2|LSM303D|
|:----|:----|:----|:----|:----|:----|
|COMPASS_DEV_ID2|0|UNKNOWN|0|0|0|
|COMPASS_DEV_ID3|0|UNKNOWN|0|0|0|
|COMPASS_DEV_ID4|0|UNKNOWN|0|0|0|
|COMPASS_DEV_ID5|0|UNKNOWN|0|0|0|
|COMPASS_DEV_ID6|0|UNKNOWN|0|0|0|
|COMPASS_DEV_ID7|0|UNKNOWN|0|0|0|
|COMPASS_DEV_ID8|0|UNKNOWN|0|0|0|
|COMPASS_PRIO1_ID|131594|SPI|1|2|LSM303D|
|COMPASS_PRIO2_ID|0|UNKNOWN|0|0|0|
|COMPASS_PRIO3_ID|0|UNKNOWN|0|0|0|
|INS_ACC_ID|1246218|SPI|1|4|ACC_MPU6000|
|INS_ACC2_ID|1114634|SPI|1|2|ACC_LSM303D|
|INS_ACC3_ID|0|UNKNOWN|0|0|0|
|INS_GYR_ID|2163722|SPI|1|4|GYR_MPU6000|
|INS_GYR2_ID|2228490|SPI|1|1|GYR_L3GD20|
|INS_GYR3_ID|0|UNKNOWN|0|0|0|
|MOT_BAT_IDX|0|UNKNOWN|0|0|0|

## Sunnysky x3108s motors

> description

SunnySky X3108S KV720 brushless out runner motor designed specially for multirotors. Recommended to use on a multirotor that weights maximum 520 grams multiplied the number of motors on the aircraft. Recommended battery: 3S-4S LiPo Recommended ESC: 20A or 30A Recommended prop: 10x3.8, 11x4.7, or 12x3.8 inch Test data and product images:     Warranty SunnySky motors sold by Buddy RC are manufactured by using quality materials and built to last. The motors are covered by a two year limited warranty against defects in materials and workmanship. Motor bearings, shafts, and propeller adapters are normal wear parts, and as such, need to be maintained and changed periodically. Therefore these parts are not covered by the two year warranty, nor any subsequent damage caused to the motor or aircraft by these wear parts. For maximum life, we suggest to install motors and accessories properly, and put a small drop of oil on each bearing every 10 flights. If phenomena of motor vibration, shaking, roughness, or notches in bearings are observed after a period of use, it is suggested to replace motor bearings immediately. It is the responsibility of the pilot to ensure that the bearings are maintained properly and periodically. For the best overall combination of performance, quality, and value, use SunnySky brushless motors in your aircraft

> esc types according to the ardupilot documentation

Normal (standard PWM 1000uS - 2000uS pulse widths)
Oneshot
Oneshot125 (PWM pulse widths divided by 8)
DShot150 at 150kbaud (recommended)
DShot300 at 300kbaud
DShot600 at 600kbaud (recommended)
DShot1200 at 1200kbaud
Bi-directional DShot at 150, 300, 600 and 1200kbaud on supported firmware

[ardupilot](https://ardupilot.org/copter/docs/common-dshot.html)


