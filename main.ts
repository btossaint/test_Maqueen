basic.showIcon(IconNames.Heart)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
function stop() {
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
}

function sound() {
    soundExpression.InterpolationEffect.ArpeggioRisingMajor
}

function drive(speed: number, time: number) {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    // vooruit
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    basic.pause(time)
}

function turnleft(speed: number, time: number) {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    // links
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.pause(500)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    basic.pause(time)
}

function turnright(speed: number, time: number) {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    // rechts
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(500)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(time)
}

function backwards(speed: number, time: number) {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    // rechts
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
    basic.pause(time)
}

function backwardsright(speed: number, time: number) {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    // achteruitrechts
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
    basic.pause(time)
}

function on_forever() {
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
}

while (true) {
    drive(100, 10)
    while (maqueen.Ultrasonic(0) < 50 || (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0)) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            stop()
            turnleft(255, 1000)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            stop()
            turnright(255, 1000)
        }
        
    }
}
