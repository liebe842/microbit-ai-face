serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    music.playTone(262, music.beat(BeatFraction.Eighth))
    if (SerialData == "Class 1") {
        basic.showIcon(IconNames.Heart)
    } else if (SerialData == "Class 2") {
        basic.showIcon(IconNames.Happy)
    } else if (SerialData == "Class 3") {
        basic.showIcon(IconNames.Meh)
    } else {
    	
    }
})
let SerialData = ""
serial.redirectToUSB()
