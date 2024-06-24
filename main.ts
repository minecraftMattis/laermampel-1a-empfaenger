radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > lautesterWert) {
        lautesterWert = receivedNumber
    }
    zeler += 1
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(lautesterWert)
})
input.onButtonPressed(Button.B, function () {
    zeler = 0
})
let lautesterWert = 0
let zeler = 0
radio.setGroup(1)
zeler = 0
lautesterWert = 0
basic.forever(function () {
    basic.showNumber(zeler)
})
