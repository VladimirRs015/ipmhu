const express = require("express");
var db = require("../models/news");
const Router = express.Router();
Router.get("/news", async (req, res) => {
  res.send("The request to initial page has been rosolved");
});

module.exports = Router;
