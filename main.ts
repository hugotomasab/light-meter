let light2 = 0
basic.forever(function () {
    light2 = input.lightLevel()
    led.plotBarGraph(
    light2,
    250
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(light2)
    }
})
