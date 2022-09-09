import maqueen 

def on_forever():
    pass

def turnleft():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 200)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)

def stop():
    maqueen.motor_stop(maqueen.Motors.M1)    

def drive(speed):
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, speed)


while True:
    drive(200)
    if maqueen.ultrasonic(20):
        turnleft() 
        

    