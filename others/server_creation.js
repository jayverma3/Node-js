/*var http = require("http");

var server = http.createServer(function (req, res) {
  res.end("Server works!");
});

server.listen(3000, "localhost", function () {
  console.log("Server started on port : 3000");
});
*/

/*
//http server
var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
  //Setting content header
  res.writeHead(200, ("Content-type", "text/html"));
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  //send string to response
  res.end(txt);
});

server.listen(8082);
*/

/*
// express server
var express = require("express");

var server = express();

server.get("/", function (req, res) {
  res.send("<h1> Express Works!</h1> ");
});
// THIS Will give err (CANNOT GET/) \/ || /\ while adding uppercode we wont get that err
server.listen(3000, function () {
  console.log("server listening on port 3000");
});
// Created tasks page in express server
server.get("/tasks", function (req, res) {
  res.send("Tasks works");
});

*/

var express = require("express");
var http = require("http");

var app = express();
var server = http.createServer(app);

server.listen(3000, function () {
  console.log("server listening on port 3000");
});
