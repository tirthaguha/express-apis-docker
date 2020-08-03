var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var charactersRouter = require("./routes/characters");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "*",
    methods: "GET,POST",
    allowedHeaders: "*",
    exposedHeaders: "*",
  })
);

app.use("/harry-potter/characters", charactersRouter);

module.exports = app;
