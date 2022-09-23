"use strict";

const filters = [{ usbVendorId: 0x3496, usbProductId: 0x0006 }];

let serialPort;

const openPort = async () => {
  serialPort = await navigator.serial.requestPort({ filters });
  // Wait for the serial port to open.
  await serialPort.open({ baudRate: 9600 });
};

const sendFocusCommand = async (command) => {
  const writer = serialPort.writable.getWriter();
  var enc = new TextEncoder(); // always utf-8
  const data = enc.encode(command + "\n");
  await writer.write(data);
  // Allow the serial port to be closed later.
  writer.releaseLock();
};

const focusHelp = async () => {
  await sendFocusCommand("help");
};
const focusEraseEeprom = async () => {
  await sendFocusCommand("eeprom.erase");
};

const readFocusResponse = async () => {
  const textDecoder = new TextDecoderStream();
  const readableStreamClosed = serialPort.readable.pipeTo(textDecoder.writable);
  const reader = textDecoder.readable.getReader();
  var data;
  // Listen to data coming from the serial device.
  while (true) {
    const { value, done } = await reader.read();

    if (done) {
      // Allow the serial port to be closed later.
      reader.releaseLock();
      break;
    }
    console.log(value);
  }
};

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("go").addEventListener("click", async () => {
    await openPort();

    await focusEraseEeprom();
    //this does not return data yet. :(
    await readFocusResponse();
  });
});