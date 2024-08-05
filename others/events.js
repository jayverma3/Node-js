var my_Events = require("events");

var my_eventEmitter = new my_Events.EventEmitter();

//Binding event & eventHandler
my_eventEmitter.on("eventName", eventHandler);

//Fire event
my_eventEmitter.emit("eventName");

/*******************************************************************/
var http = require("http");
var events = require("events");

var EventEmitter = new events.EventEmitter();

var server = http.createServer(function (req, res) {
  EventEmitter.emit("someone requested", "TEST");
  res.end("Server works!");
});

EventEmitter.on("someone requested", function (data) {
  console.log("Un req has been sent to la server", data);
}); // Event Listener

server.listen(3000, "localhost", function () {
  console.log("Server started on port : 3000");
});
