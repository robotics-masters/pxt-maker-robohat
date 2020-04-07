# Broadcast

## ~ hint

JACDAC  is a single wire broadcast protocol for the plug and play of microcontrollers (MCUs) within the contexts of rapid prototyping, making, and physical computing. [Read more...](https://jacdac.org/).

## ~


The **message bus** service allows to broadcast messages on the bus and run code on reception.

The example shows how to author the service and client to blink an LED when clicking a button.

```blocks
enum JacDacMessage {
    blink = 49614,
    message1 = 49434
}
jacdac.onReceivedMessage(JacDacMessage.blink, function () {
    pins.D1.digitalWrite(true)
    pause(100)
    pins.D1.digitalWrite(false)
})
input.buttonD0.onEvent(ButtonEvent.Down, function () {
    jacdac.sendMessage(JacDacMessage.blink)
})
```

```package
jacdac
jacdac-services
```

```config
feature=uf2
feature=buttond0
feature=pind1
feature=jacdac
```