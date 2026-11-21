// 스스로 하기 ★★★: 10번 채우면 축하하기
// 소리는 "배경에서" 재생해서 다음 결과를 받는 것을 막지 않아요. (소리 블록은 micro:bit V2 전용)
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (SerialData == "squat") {
        if (이전자세 != "squat") {
            이전자세 = "squat"
            basic.showLeds(`
                . . . . .
                . . # . .
                # # # # #
                . # # # .
                # # . # #
                `)
        }
    } else if (SerialData == "stand") {
        if (이전자세 == "squat") {
            이전자세 = "stand"
            횟수 += 1
            basic.showNumber(횟수)
            if (횟수 == 10) {
                music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
                basic.showIcon(IconNames.Heart)
            }
        }
    } else if (SerialData == "none") {
        이전자세 = "none"
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    횟수 = 0
    이전자세 = "none"
    basic.showNumber(횟수)
})
let 이전자세 = ""
let 횟수 = 0
let SerialData = ""
serial.redirectToUSB()
