hackbitmotors.Servo(hackbitmotors.Servos.S8, 45)
hackbitmotors.MotorStopAll()
basic.forever(function () {
    if (hackbitsensor.us_sonar(
    DigitalPin.P13,
    DigitalPin.P14,
    hackbitsensor.PingUnit.cm
    ) < 10) {
        hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
        basic.pause(100)
        hackbitmotors.Servo(hackbitmotors.Servos.S8, 45)
        basic.pause(100)
    }
})
