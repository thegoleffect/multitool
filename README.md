multitool
=========

swiss army knife of useful javascript functions


## Log

    LOGLEVEL=trace node examples/basic.js

### basic.js
    var multitool = require("multitool");
    var l = new multitool.Log();
    var debug = l.debug;
    var trace = l.trace;
    
    debug("debug loglevel enabled")
    trace("debug loglevel enabled")


## Notify

Wraps growlnotify (works on OSX with Growl installed).

    node examples/notify.js

### notify.js

    var Hapi = require('hapi');
    var options = {};

    var basicHandler = function (request) {
      request.reply("hello")
    };

    var server = new Hapi.Server(3000, options);
    server.addRoute({ method: 'GET', path: '/', handler: basicHandler });
    server.start(function(){
        Multitool.Notify({
            app: "Hapi",
            title: 'examples/basic.js',
            message: "Server started on port 3000"
        });
    });