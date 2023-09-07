Chrysalis Firmware Bundle 0.90.6+62

## Build Information

| Architecture | Core                                                                               |
|:-------------|:-----------------------------------------------------------------------------------|
| AVR          | keyboardio/Kaleidoscope-Bundle-Keyboardio@7f6008abcc8ada3bca57897efa7520750a70d115 |
| GD32         | keyboardio/ArduinoCore-GD32-Keyboardio@0eb30a737ed5bb453e5114f4721315a5182c4d12    |

### Libraries

| Library                   | Link                                                                          |
|:--------------------------|:------------------------------------------------------------------------------|
| KeyboardioHID (avr)       | keyboardio/KeyboardioHID@5a56f73deb23e00ae9f79aaf7cf06095edfbedc9             |
| KeyboardioHID (gd32)      | keyboardio/KeyboardioHID@5a56f73deb23e00ae9f79aaf7cf06095edfbedc9             |
| Kaleidoscope              | keyboardio/Kaleidoscope@babcbca420f6ae4dd85617e37db37fa71d33a464              |
| Chrysalis-Firmware-Bundle | keyboardio/Chrysalis-Firmware-Bundle@df56b12af1332c58bd7eb44d467b720cb1134b5d |

# Changelog

Keyboardio Model 100 & Model 01
-------------------------------

When the host is going to sleep, turn the LEDs off. Previously, we only turned
them off when the host was going through the suspended state, which *should*
have been enough to turn them off on sleep too, but it wasn't. Now we explicitly
turn it off during sleep too, just in case.

Keyboardio Model 100
--------------------

Enabled the `OneShotConfig` plugin, which will let a future version of Chrysalis
configure a number of settings related to the `OneShot` plugin, which implements
the Sticky keys.

The `LEDBrightnessConfig` plugin was also enabled, allowing Chrysalis to aid you
in controlling the brightness of the LEDs present on the keyboard.

The brightness of the rainbow LED effects were toned down a little, to mitigate
the audible whine from the keyboard some users have been reporting.

The `MouseKeysConfig` plugin received updates, and it now lets you configure the
Warp grid size through Chrysalis.

Keyboardio Atreus
-----------------

Enabled the `SpaceCadetConfig`, `MouseKeysConfig`, and `OneShotConfig` plugins.
With these enabled, Chrysalis is able to turn SpaceCadet on and off, configure
mouse key speeds, and various sticky key related settings.
