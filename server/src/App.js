const express = require("express");
const logger = require("morgan");
const App = express();

//Configs
App.set("port", process.env.PORT || 8081);
//Middlewares

App.use(logger("dev"));

App.listen(
  // App.get("port")
  3000,
  err => {
    if (err) {
      throw err;
    }
    console.log("Server on port", App.get("port"));
  }
);
