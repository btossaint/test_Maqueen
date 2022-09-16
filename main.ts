basic.showIcon(IconNames.Heart)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
function stop() {
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
}

function sound() {
    soundExpression.InterpolationEffect.ArpeggioRisingMajor
}

function drive(speed: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
}

function turnleft(speed2: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed2)
    maqueen.motorStop(maqueen.Motors.M1)
}

while (true) {
    drive(200)
    while (maqueen.Ultrasonic(0) < 20) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        turnleft(200)
    }
    basic.forever(function on_forever() {
        basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
    })
    basic.forever(function on_forever2() {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
        basic.pause(1000)
    })
    basic.forever(function on_forever3() {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        music.playTone(494, music.beat(BeatFraction.Whole))
        basic.pause(500)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(500)
    })
}
