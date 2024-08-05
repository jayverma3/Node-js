const express = require("express");
const bodyparser = require("body-parser");
const mysqlConnection = require("./connection");
const PeopleRoutes = require("./routes/people");

var app = express();

app.use(bodyparser.json());

app.use("/people", PeopleRoutes);

app.listen(3000);
