def stop():
    basic.show_string("S")
    maqueen.motor_stop(maqueen.Motors.M1)
    maqueen.motor_stop(maqueen.Motors.M2)

def sound():
    soundExpression.InterpolationEffect.ARPEGGIO_RISING_MAJOR

def drive(speed: number, time):
    basic.show_string("D")
    strip.show_color(neopixel.colors(NeoPixelColors.RED)) #vooruit
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    basic.pause(time)

def turnleft(speed: number, time):
    basic.show_string("<-")
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN)) #links
    maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
    maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
    #basic.pause(500)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    basic.pause(time)

def turnleft90():
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN)) #links
    maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
    maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
    basic.pause(500)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 220)
    basic.pause(1040)

def turnright(speed: number, time):
    basic.show_string("->")
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN)) #rechts
    maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
    maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
    #basic.pause(500)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(time)

def turnright90():
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN)) #rechts
    maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
    maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
    basic.pause(500)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 220)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(1040)

def backwards(speed: number, time):
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
    basic.pause(time)

def backwardsright(speed: number, time):
    strip.show_color(neopixel.colors(NeoPixelColors.YELLOW)) #achteruitrechts
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
    basic.pause(time)

def followline(speed):    
    if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0:
        drive(speed,0)
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 1:
        turnleft(speed,0)
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 1 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0:
        turnright(speed,0)
    #else:
    #     backwards(speed, 0)    

def on_forever():
    basic.show_number(maqueen.ultrasonic(PingUnit.CENTIMETERS))

# --- main program ---
basic.show_string("^")
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
doorgaan = True

while doorgaan:    
    followline(100)
    