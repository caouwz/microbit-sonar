input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 60; index++) {
        pins.servoWritePin(AnalogPin.P0, randint(0, 180))
    }
})
let sonar2 = 0
pins.servoWritePin(AnalogPin.P0, 180)
basic.forever(function () {
    sonar2 = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.MicroSeconds
    )
    if (sonar2 < 100) {
        basic.showIcon(IconNames.Confused)
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P0, 86)
        pins.servoWritePin(AnalogPin.P0, 47)
        pins.servoWritePin(AnalogPin.P0, 0)
    } else {
    	
    }
})
