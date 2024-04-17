let a = 0
let b = 0
Microbit.init()
led.enable(false)
basic.forever(function () {
    Microbit.showStringxy(
    0,
    0,
    "v=",
    1
    )
    Microbit.showNumberxy(
    2,
    0,
    Math.round(5024 / b),
    1
    )
    Microbit.showStringxy(
    6,
    0,
    "m/s",
    1
    )
    basic.pause(200)
    basic.clearScreen()
})
basic.forever(function () {
    if (Microbit.hState(Read_pin.r1) > 500) {
        a = input.runningTime()
    }
    while (Microbit.hState(Read_pin.r1) > 500) {
        Microbit.ledGBrightness(DigitalPin.P0, false)
    }
    Microbit.ledGBrightness(DigitalPin.P0, true)
    b = input.runningTime() - a
})
