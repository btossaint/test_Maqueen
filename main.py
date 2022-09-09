import maqueen 

def on_forever():
    pass

def turnleft(speed):
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motor_stop(maqueen.Motors.M1)

def stop():
    maqueen.motor_stop(maqueen.Motors.M1)   
    maqueen.motor_stop(maqueen.Motors.M2) 

def drive(speed):
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, speed)

def sound():
    soundExpression.InterpolationEffect.ARPEGGIO_RISING_MAJOR

while True:
    drive(200)    
    while maqueen.ultrasonic(0) < 20 :
        music.play_sound_effect(music.create_sound_effect(WaveShape.SINE, 5000, 0, 255, 0, 500, SoundExpressionEffect.NONE, InterpolationCurve.LINEAR), SoundExpressionPlayMode.UNTIL_DONE)
        turnleft(200)         
            
            