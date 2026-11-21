// 같이 하기: 표정 알아보는 micro:bit
// makeairobots 시작 코드에서 소리(도 1/8 박자 연주) 블록을 지우고,
// "Class 1/2/3"을 Teachable Machine 클래스 이름으로 바꾼 코드예요.
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (SerialData == "smile") {
        basic.showIcon(IconNames.Happy)
    } else if (SerialData == "sad") {
        basic.showIcon(IconNames.Sad)
    } else if (SerialData == "none") {
        basic.clearScreen()
    }
})
let SerialData = ""
serial.redirectToUSB()
