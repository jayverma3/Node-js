const express = require("express");
const bdparser = require("body-parser");

const app = express();

app.use(bdparser);

app.use(bdparser.urlencoded({ extended: false }));

app.use(bdparser.json());

let people = { people: [{ name: "praveen " }] };

app.get("/people", function (req, res) {
  res.json(people);
  res.end();
});

app.post("/people", function (req, res) {
  console.log(req.body);
  res.json(people);
});

app.listen(3000);
