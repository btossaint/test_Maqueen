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

while (true) {
    drive(200)
    if (maqueen.Ultrasonic(20)) {
        turnleft(200)
        stop()
    }
    
}
