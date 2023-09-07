Chrysalis Firmware Bundle 0.90.0+40

## Build Information

| Architecture | Core                                                                               |
|:-------------|:-----------------------------------------------------------------------------------|
| AVR          | keyboardio/Kaleidoscope-Bundle-Keyboardio@a9165613d1aab35d8be365b54976460165d790f9 |
| GD32         | keyboardio/ArduinoCore-GD32-Keyboardio@1e5db7e472b9aa3c3f80ff306e96fcfb89616d4a    |

### Libraries

| Library                   | Link                                                                          |
|:--------------------------|:------------------------------------------------------------------------------|
| KeyboardioHID (avr)       | keyboardio/KeyboardioHID@b274575c3f3adb529df409d3f5b10a4ae2e3eb53             |
| KeyboardioHID (gd32)      | keyboardio/KeyboardioHID@35cb0a704f51953512222334396b58fedef039fe             |
| Kaleidoscope              | keyboardio/Kaleidoscope@96fbfb0628ce8b3a46b60fbc29bc5c09407b01b3              |
| Chrysalis-Firmware-Bundle | keyboardio/Chrysalis-Firmware-Bundle@52340bb33bd593ccaee56d3ce7ae94035e7da61a |

# Changelog

We are decoupling the firmware version from Chrysalis, to make it more
straightforward to update them independently of each other. As such, the
firmware version has been bumped to 0.90.0.

Bugfixes
--------

We fixed a bug in the `LayerNames` plugin that would lead to data corruption
when setting custom layer names with Chrysalis. Even if not using custom layer
names, we strongly recommend upgrading your firmware if you are using the
Keyboardio Model 100, or the Keyboardio Atreus (where the plugin is enabled).

Keyboardio Model 100
--------------------

The Keyboardio Model 100 firmware had the following plugins added:

- [DefaultLEDModeConfig][plugin:default-led-mode-config], which lets Chrysalis
  configure a default LED mode for the keyboard to start up with.
- [Steno][plugin:steno], making it possible to create a Steno layer via
  Chrysalis, and use it with [Plover][plover].
- [SpaceCadetConfig][plugin:spacecadet], that makes it possible to permanently
  enable the SpaceCadet feature via Chrysalis, making it practical to use the
  plugin which has been included with the firmware for a while.

 [plugin:default-led-mode-config]: https://kaleidoscope.readthedocs.io/en/latest/plugins/Kaleidoscope-DefaultLEDModeConfig.html
 [plugin:steno]: https://kaleidoscope.readthedocs.io/en/latest/plugins/Kaleidoscope-Steno.html
 [plover]: https://www.openstenoproject.org/plover/
 [plugin:spacecadet]: https://kaleidoscope.readthedocs.io/en/latest/plugins/Kaleidoscope-SpaceCadet.html
