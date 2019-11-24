const express = require("express");
const Router = express.Router();
const teachersSchema = require("../models/teachers.js")();
Router.post("/", (req, res) => {
  let teacher = new teachersSchema({
    name: "test",
    images: "test",
    summary: "test",
    state: "test",
    asignature: "test"
  });
  teacher.save('')
});

module.exports = Router;
