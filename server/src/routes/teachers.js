const express = require("express");
const Router = express.Router();
const teachersSchema = require("../models/teachers.js");
const App = require("../App.js");
Router.get("/teachers", async (req, res) => {
  await teachersSchema.find({}).then(teachers => res.json(teachers));
});

Router.post("/teachers", async (req, res) => {
  let params = {
    name: req.body.name,
    summary: req.body.summary,
    state: "active",
    asignature: req.body.asignature
  };
  let mixin = require("../libs/mixin");
  mixin.checkInFile(req, params);
  console.log(params);

  await teachersSchema
    .create(params)
    .then(response => {
        res.status(200).send({message:'Profesor creado correctamente'})
    })
    .catch(err => {
      console.log(err)
      res.status(202).send({message:'El profesor no se ha podido crear correctamente'})
    });
});

Router.delete("/teachers/:id", async (req, res) => {
  teachersSchema
    .deleteMany({ _id: req.params._id })
    .then(response => {
      res.status("200");
      console.log("Se ha eliminado correctamente");
    })
    .catch(err => res.send(err));
});
Router.put("/teachers/:id", async (req, res) => {
  let queryData;
  teachersSchema
    .findOne({ _id: req.params.id })
    .then(res => {
      queryData = res;
      res.send(queryData);
    })
    .catch(err => res.send(err));
  teachersSchema.updateOne({}, {});
});
module.exports = Router;
