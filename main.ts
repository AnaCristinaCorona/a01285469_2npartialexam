let year = 0
let count_babyBoom = 0
let count_Xgen = 0
let count_Millenial = 0
let count_Zgen = 0
let num_dice = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        year = randint(1949, 2010)
        basic.showNumber(year)
        if (year >= 1949 && year <= 1968) {
            basic.showString("Baby Boom")
            count_babyBoom += 1
            year = count_babyBoom + year
        } else if (year >= 1969 && year <= 1980) {
            basic.showString("X Generation")
            count_Xgen += 1
            year = count_Xgen + year
        } else if (year >= 1981 && year <= 1993) {
            basic.showString("Millenial")
            count_Millenial += 1
            year = count_Millenial + year
        } else if (year >= 1994 && year <= 2010) {
            basic.showString("Z Generation")
            count_Zgen += 1
            year = count_Zgen + year
        }
    }
    basic.showString("Average")
    basic.showNumber(year / 20)
    basic.showString("Total Millenial")
    basic.showNumber(count_Millenial)
    basic.showString("Total Baby boomers")
    basic.showNumber(count_babyBoom)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index <= 5; index++) {
        basic.showNumber(index)
        basic.clearScreen()
        num_dice = randint(0, 6)
        basic.showNumber(num_dice)
        basic.clearScreen()
        if (num_dice == 6 || num_dice == 3) {
            basic.showString("Win")
            music.playMelody("B G A C5 B F B C5 ", 120)
        } else {
            basic.showString("Lose")
            music.playTone(165, music.beat(BeatFraction.Whole))
        }
    }
    basic.clearScreen()
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        y = 2
        for (let index = 0; index <= 4; index++) {
            led.plot(index, y)
            basic.pause(200)
            led.unplot(index, y)
            basic.pause(200)
            index += 0
        }
    }
})
