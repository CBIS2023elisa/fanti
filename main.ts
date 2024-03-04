input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("Ahhhh!")
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("ZZZZZZZ!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . # #
        . . # # .
        . # # . .
        . # . . .
        # # . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Ja Ja Ja!")
})
let Health = 10
if (Health == 0) {
    basic.showIcon(IconNames.Ghost)
    basic.showString("GAME OVER")
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Health += 1
        control.waitMicros(100)
    }
})
loops.everyInterval(200, function () {
    Health += -1
})
