let distance_sensor = 0
let strip = neopixel.create(DigitalPin.P0, 32, NeoPixelMode.RGB)
strip.show()
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P3))
    distance_sensor = pins.analogReadPin(AnalogPin.P3)
    if (distance_sensor < 500) {
        distance_sensor = 500
    }
    strip.showBarGraph(pins.map(
    distance_sensor,
    500,
    600,
    0,
    32
    ), 32)
    strip.show()
})
