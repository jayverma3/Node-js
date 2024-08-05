const Connection = require("./model");
const express = require("express");
const application = express();
const path = require("path");
const expressHandlerbars = require("express-handlebars");
const bodyparser = require("body-parser");

application.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

application.listen("3000", () => {
  console.log("server started");
});

application.get("/", (req, res) => {
  res.send("Ahoy pirate");
});

application.get("/course_model", (req, res) => {
  res.send("./course_model.js");
});

application.set("views", path.join(__dirname, "/views/"));
