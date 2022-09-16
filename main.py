basic.show_icon(IconNames.HEART)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)

def stop():
    maqueen.motor_stop(maqueen.Motors.M1)
    maqueen.motor_stop(maqueen.Motors.M2)

def sound():
    soundExpression.InterpolationEffect.ARPEGGIO_RISING_MAJOR

def drive(speed: number, time):
    strip.show_color(neopixel.colors(NeoPixelColors.RED)) #vooruit
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    basic.pause(time)

def turnleft(speed: number, time):
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN)) #links
    maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
    maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
    basic.pause(500)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    basic.pause(time)

def turnright(speed: number, time):
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN)) #rechts
    maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
    maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
    basic.pause(500)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(time)

def backwards(speed: number, time):
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN)) #rechts
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
    basic.pause(time)

def backwardsright(speed: number, time):
    strip.show_color(neopixel.colors(NeoPixelColors.YELLOW)) #achteruitrechts
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
    basic.pause(time)

def on_forever():
    basic.show_number(maqueen.ultrasonic(PingUnit.CENTIMETERS))

while True:    
    drive(100,10)
    while maqueen.ultrasonic(0) < 50 or (maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0 or maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0):
        if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 1 or maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0:
            stop()
            turnleft(255,1000)
        elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0 or maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 1:
            stop()
            turnright(255,1000)
        
    