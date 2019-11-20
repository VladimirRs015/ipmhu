const express = require("express");
const logger = require("morgan");
const App = express();
const teachers = require("../src/models/teachers.js");
const db = require("./libs/db.connection");
//Configs
App.set("port", process.env.PORT || 4000);
//Middlewares

App.use(logger("dev"));

App.get("/", async (req, res) => {
  teachers.create({
    name: "vladimir",
    images: "asignature",
    summary: "Helloworld"
  });
  res.send("The request has been recived succesfully ... you can find it ");
});

App.listen(App.get("port"), err => {
  if (err) {
    throw err;
  }
  console.log("Server on port", App.get("port"));
});
