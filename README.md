multitool
=========

swiss army knife of useful javascript functions


## Log

    LOGLEVEL=trace node index.js

### basic.js
    var multitool = require("multitool");
    var l = new multitool.Log();
    var debug = l.debug;
    var trace = l.trace;
    
    debug("debug loglevel enabled")
    trace("debug loglevel enabled")

