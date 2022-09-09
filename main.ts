function on_forever() {
    
}

function turnleft(speed: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motorStop(maqueen.Motors.M1)
}

function stop() {
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
}

function drive(speed: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
}

function sound() {
    soundExpression.InterpolationEffect.ArpeggioRisingMajor
}

while (true) {
    drive(200)
    while (maqueen.Ultrasonic(0) < 20) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        turnleft(200)
    }
}
