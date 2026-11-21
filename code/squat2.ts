// 스스로 하기 ★★: 스쿼트 횟수 세기
// 앉았다가(squat) 일어서면(stand) 1번으로 세요.
// 그림을 보여 주기 전에 이전자세를 먼저 바꿔서, 결과가 빨리 들어와도 헷갈리지 않게 했어요.
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
