var Log = function () {
    var self = this;
    this.level = process.env.LOGLEVEL.toLowerCase();
    
    var keys = Object.keys(Log.logLevels);
    for(var index in keys) {
        var key = keys[index];
        if (Log.logLevels.hasOwnProperty(key)) {
            this[key] = (function(self, key) {
                return function () {
                    if (Log.logLevels[key] <= Log.logLevels[self.level]) {
                        var args = Array.prototype.slice.call(arguments);
                        args.unshift("[" + key + "]");
                        console.log.apply(console.log, args)
                    }
                }
            })(self, key);
        }
    }
};

Log.logLevels = {
    'error': 0, 
    'warn': 1,
    'info': 2,
    'debug': 3,
    'trace': 4
};

module.exports = Log;