const express = require("express");
const Router = express.Router();
const newsSchema = require("../models/news.js");
Router.get("/news", async function(req, res) {
 console.log(req.headers)
  await newsSchema
    .find()
    .then(news => res.json(news))
    .catch(err => console.log(err));
});

module.exports = Router;
