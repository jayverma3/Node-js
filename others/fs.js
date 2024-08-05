// If i remove function name then its an anonymous function , inside a var sayYello

var sayYello = function sayYello(name) {
  return "Hello" + name;
};

console.log(sayYello(" Jerry"));

var student = {
  name: "Jerry",
  email: "jerry@jerome.com",
};

console.log(student.name);

var fs = require("fs");

fs.writeFile("hello.txt", "quel est toi", function (err) {
  if (!err) {
    fs.readFile("hello.txt", function (err, data) {
      if (!err) {
        console.log(data.toString());
      }
    });
  }
});
