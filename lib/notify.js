var _ = require('underscore');
var child_process = require('child_process');
var spawn = child_process.spawn;

var defaultOptions = {
  'n': 'Multitool',
  't': 'v' + require('../package.json').version,
  'm': 'Notify called'
}

var humanReadableMap = {
  'n': ["app"],
  't': ["title"],
  'm': ["message", "msg"]
};


var parseOptions = function(options){
  var opts = _.extend(_.clone(defaultOptions), options);
  
  // handle human readable inputs (these override cmdline inputs)
  for(var key in humanReadableMap){
    if (humanReadableMap.hasOwnProperty(key)) {
      for(var i in humanReadableMap[key]){
        var humanKey = humanReadableMap[key][i];
        if (opts[humanKey]) {
          opts[key] = opts[humanKey];
          delete opts[humanKey];
        }
      }
    }
  }
  
  var result = [];
  for(var k in opts) {
    if (opts.hasOwnProperty(k)){
      var opt = opts[k];
      result.push("-" + k)
      result.push(opt)
    }
  }
  
  return result;
}

var Notify = function (options) {
  var growl = spawn('growlnotify', parseOptions(options));
  growl.stderr.on('data', function(data){
    throw data;
  });
}

module.exports = Notify;
