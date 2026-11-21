// 스스로 하기 ★: 자세 그림 보여 주기
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (SerialData == "stand") {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            . # . # .
            `)
    } else if (SerialData == "squat") {
        basic.showLeds(`
            . . . . .
            . . # . .
            # # # # #
            . # # # .
            # # . # #
            `)
    } else if (SerialData == "none") {
        basic.clearScreen()
    }
})
let SerialData = ""
serial.redirectToUSB()
