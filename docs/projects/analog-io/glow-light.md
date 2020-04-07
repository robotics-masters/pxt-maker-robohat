# Magic Glow

Control the brightness of an LED with a light sensor.

```blocks
forever(function () {
    let brightness = pins.A1.analogRead();
    pins.A2.analogWrite(brightness);
})
```

```config
feature=uf2
feature=pina1
feature=pina2
```