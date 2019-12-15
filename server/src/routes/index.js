const express = require("express");
const Router = express.Router();

// const teachersSchema = require("../models/teachers.js");
Router.get("/", async (req, res) => {
  res.send('<a href="/public/index.html">Crear</a>');
});

module.exports = Router;
