var child_process = require('child_process');
var spawn = child_process.spawn;

var Notify = function (app, msg) {
  var growl = spawn('growlnotify', ['-t', app, '-m', msg]);
  growl.stderr.on('data', function(data){
    throw data;
  });
}

module.exports = Notify;
