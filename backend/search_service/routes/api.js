var express = require("express");
var searchQueryRouter = require("./search")
var app = express();

app.use("/search",searchQueryRouter);

module.exports = app;
