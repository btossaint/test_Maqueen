function on_forever() {
    
}

function turnleft() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
}

function stop() {
    maqueen.motorStop(maqueen.Motors.M1)
}

function drive(speed: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
}

while (true) {
    drive(200)
    if (maqueen.Ultrasonic(20)) {
        turnleft()
    }
    
}
