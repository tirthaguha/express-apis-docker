var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var shuffleRouter = require("./routes/shuffle");
var drawRouter = require("./routes/draw");

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

app.use("/card-deck/shuffle", shuffleRouter);
app.use("/card-deck/draw", drawRouter);

module.exports = app;
