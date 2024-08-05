const mongoose = require("mongoose");
const express = require("express");

mongoose.connect("mongodb://localhost:27017/Jay");

const Course = require("./course.model");
