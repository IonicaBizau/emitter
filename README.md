emitter
=======

A Mono module that will emit an event on the server side that contains the `link` object. This event will be listened by a custom script.

## How to use

### Configuration example

```JS
"emitter": {
    "module": "github/IonicaBizau/emitter/dev",
    "config": {},
    "operations": {
        "emit"      : {
            "roles": [0, 1],
            "params": [
                {
                    "eventName": "my event"
                }
            ]
        }
    }
}
```

while in the custom script we have:

```js
M.on("my event", function (link) {
    link.send(200, "Hello!");
});
```

## Changelog

### v0.1.0
 - Initial release.
