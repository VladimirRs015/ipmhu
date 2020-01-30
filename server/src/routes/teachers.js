const express = require("express");
const Router = express.Router();
const teachersSchema = require("../models/teachers.js");
const App = require("../App.js");
Router.get("/teachers", async (req, res) => {
  await teachersSchema.find({}).then(teachers => res.json(teachers));
});
Router.post("/teachers", async (req, res) => {
  // console.log(req.file);
  // console.log(req.body.name);

  let params = {
    name: req.body.teacherName,
    images: ` ${req.protocol}://${req.hostname}:${4000}/public/uploads/${
      req.file.filename
    }`,
    summary: req.body.summary,
    state: "active",
    asignature: req.body.asignature
  };
  console.log(params);
  await teachersSchema
    .create(params)
    .then(response => {
      res.redirect("/public/index.html");
    })
    .catch(err => {
      res.status("409");
      res.send(
        `<h1>Error de validacion , verfique que todos los campos esten llenos</h1>
      <pre>
        ${err}
      </pre>
      `
      );
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
