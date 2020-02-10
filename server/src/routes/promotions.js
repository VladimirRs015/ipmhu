const express = require("express");
const Router = express.Router();
const promotiosSchema = require("../models/promotions");
Router.get("/promotions", async (req, res) => {
  promotiosSchema
    .find({})
    .then(promotions => res.send(promotions))
    .catch(err => console.log(err));
});
Router.post("/promotions", async (req, res) => {
  const params = {
    name: req.body.promotionName,
    year: req.body.promotionYear
  };
  promotions.info = req.body.information;
  const checkInfile = require("../libs/mixin").checkInFile;
  checkInFile(req, params);
  console.log(req.body);

  promotiosSchema.create(params).then(document => {
    console.log(document);
  });
});

module.exports = Router;
