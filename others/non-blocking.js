var fs = require("fs");

fs.readFile("text.txt", function (err, data) {
  if (err) {
    console.log(err);
  }
  setTimeout(() => {
    console.log("display after 2 sec");
  }, 2000);
});
console.log("Start here");
