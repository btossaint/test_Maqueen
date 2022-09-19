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

function turnleft90() {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    // links
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.pause(500)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 220)
    basic.pause(1040)
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

function turnright90() {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    // rechts
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(500)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 220)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(1040)
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
    /** 
    while maqueen.ultrasonic(0) < 50 or (maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0 or maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0):
        if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 1 or maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0:
            stop()
            turnleft(255,1000)
        elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0 or maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 1:
            stop()
            turnright(255,1000)
    
 */
    turnleft90()
    stop()
    basic.pause(5000)
    drive(220, 100)
    turnright90()
    stop()
    basic.pause(5000)
}
