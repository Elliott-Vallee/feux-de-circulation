let Piéton = 0
function Jaune () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function Rouge () {
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function Orange () {
    pins.digitalWritePin(DigitalPin.P8, 1)
}
input.onButtonPressed(Button.A, function () {
    Piéton = 1
})
function Vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
}
function Blanc () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
basic.forever(function () {
	
})
basic.forever(function () {
    Piéton = 0
    Orange()
    Vert()
    basic.pause(8000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    Jaune()
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    Rouge()
    basic.pause(8000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    if (Piéton == 1) {
        Rouge()
        pins.digitalWritePin(DigitalPin.P8, 0)
        Blanc()
        basic.pause(10000)
        Piéton = 0
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
