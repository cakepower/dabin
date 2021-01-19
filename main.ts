let distance_sensor = 0
let strip = neopixel.create(DigitalPin.P0, 32, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P3))
    distance_sensor = pins.analogReadPin(AnalogPin.P3)
    strip.showBarGraph(pins.map(
    distance_sensor,
    400,
    600,
    0,
    32
    ), 32)
})
