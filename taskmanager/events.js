var my_Events = require("events");

var my_eventEmitter = new my_Events.EventEmitter();

//Binding event & eventHandler
my_eventEmitter.on("eventName", eventHandler);

//Fire event
my_eventEmitter.emit("eventName");
