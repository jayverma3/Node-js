var http = require("http");
var events = require("events");
var express = require("express");
var fs = require("fs");

var app = express();
var server = http.createServer(app);

app.get("/", function (req, res) {
  res.send("<h1> Express works! </h1>");
});

app.get("/tasks", function (req, res) {
  fs.readFile("./ddd.json", function (err, data) {
    var tasks = JSON.parse(data.toString()).tasks;
    //we can also use res.send
    res.json(tasks);
  });
});

app.get("/PRODUCTS", (req, res) => {
  res.send("PRODUCTS");
});

app.get("/PEOPLE", (req, res) => {
  res.send("PEOPLE");
});

app.post("/", (req, res) => {
  res.send("POST = HELOO");
});

server.listen(3000, function () {
  console.log("Server started on port : 3000");
});

/*
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
*/
