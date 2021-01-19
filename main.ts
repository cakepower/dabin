let distance_sensor = 0
let strip = neopixel.create(DigitalPin.P0, 32, NeoPixelMode.RGB)
strip.show()
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P3))
    distance_sensor = pins.analogReadPin(AnalogPin.P3)
    if (0 == 0) {
    	
    }
    strip.showBarGraph(pins.map(
    distance_sensor,
    400,
    600,
    0,
    32
    ), 32)
    strip.show()
})
