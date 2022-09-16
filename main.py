basic.show_icon(IconNames.HEART)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)

def stop():
    maqueen.motor_stop(maqueen.Motors.M1)
    maqueen.motor_stop(maqueen.Motors.M2)

def sound():
    soundExpression.InterpolationEffect.ARPEGGIO_RISING_MAJOR

def drive(speed: number):
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, speed)

def turnleft(speed2: number):
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, speed2)
    maqueen.motor_stop(maqueen.Motors.M1)
    
def on_forever():
    basic.show_number(maqueen.ultrasonic(PingUnit.CENTIMETERS))

def on_forever2():
    strip.show_color(neopixel.colors(NeoPixelColors.RED))
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(1000)
    strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(1000)
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(1000)
    strip.show_color(neopixel.colors(NeoPixelColors.PURPLE))
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    basic.pause(1000)
    strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
    basic.pause(1000)


def on_forever3():
    maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
    maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
    music.play_tone(494, music.beat(BeatFraction.WHOLE))
    basic.pause(500)
    maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
    maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    basic.pause(500)

while True:
    drive(200)
    while maqueen.ultrasonic(0) < 20:
        music.play_sound_effect(music.create_sound_effect(WaveShape.SINE,
                5000,
                0,
                255,
                0,
                500,
                SoundExpressionEffect.NONE,
                InterpolationCurve.LINEAR),
            SoundExpressionPlayMode.UNTIL_DONE)
        turnleft(200)
    basic.forever(on_forever)
    basic.forever(on_forever2)
    basic.forever(on_forever3)