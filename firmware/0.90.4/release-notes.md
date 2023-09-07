Chrysalis Firmware Bundle 0.90.4+49

## Build Information

| Architecture | Core                                                                               |
|:-------------|:-----------------------------------------------------------------------------------|
| AVR          | keyboardio/Kaleidoscope-Bundle-Keyboardio@e7395821c13d6dcc3e19ebce2b7bc221475e9806 |
| GD32         | keyboardio/ArduinoCore-GD32-Keyboardio@ef15ed06d66ab0911a3c3bff2789c0b2e8166123    |

### Libraries

| Library                   | Link                                                                          |
|:--------------------------|:------------------------------------------------------------------------------|
| KeyboardioHID (avr)       | keyboardio/KeyboardioHID@5a56f73deb23e00ae9f79aaf7cf06095edfbedc9             |
| KeyboardioHID (gd32)      | keyboardio/KeyboardioHID@5a56f73deb23e00ae9f79aaf7cf06095edfbedc9             |
| Kaleidoscope              | keyboardio/Kaleidoscope@8de4171cfc444dd3ead6e671d79af419658315a8              |
| Chrysalis-Firmware-Bundle | keyboardio/Chrysalis-Firmware-Bundle@13571fbb3578479054c749aac872782b32aeef1d |

# Changelog

There are two major changes in this release, both of them affecting every
keyboard, and both of them aimed at improving existing functionality, making
them more straightforward to use.

The first big change is a complete rewrite of the MouseKeys system. With the new
code, mouse cursor movement is smoother, and easier to configure. The
configuration is not yet exposed to Chrysalis by the default firmware, that will
be coming in a later update. But the improved behaviour of mouse keys are
already here.

The other one is a change to the layer switching logic: layer key handling has
been updated to be more consistent with activation ordering. While in most cases
there will be no obvious differences, there will be subtle - or not so subtle -
differences in how the firmware handles edge cases. For more information about
these changes, see the [official documentation][docs:layer-changes].

 [docs:layer-changes]: https://kaleidoscope.readthedocs.io/en/latest/NEWS.html#layer-changes-updated
