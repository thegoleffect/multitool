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