const express = require("express");
const Router = express.Router();
const promotiosSchema = require("../models/promotions");
Router.get("/promotions", async (req, res) => {
  promotiosSchema
    .find({})
    .then(promotions => res.send(promotions))
    .catch(err => console.log(err));
});

module.exports = Router;
