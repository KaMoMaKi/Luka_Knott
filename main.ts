function Flow () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(PauseFlow)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(PauseFlow)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P3, 1)
    basic.pause(PauseFlow)
    pins.digitalWritePin(DigitalPin.P3, 0)
    basic.pause(PauseFlow)
}
function Blinken () {
    basic.pause(PauseBlink)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P3, 1)
    basic.pause(PauseBlink)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
}
let Tag = 0
let PauseFlow = 0
let PauseBlink = 0
let DunkelSchalten = 10
PauseBlink = 500
PauseFlow = 300
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P2) <= DunkelSchalten) {
        Tag = 1
    } else {
        Tag = 0
    }
    if (Tag == 1) {
        for (let index = 0; index < 2; index++) {
            Blinken()
        }
        for (let index = 0; index < 3; index++) {
            Flow()
        }
    }
})
