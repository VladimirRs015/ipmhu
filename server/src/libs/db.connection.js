const mongoose = require("mongoose");
var db;
async function dbconnect() {
  db = mongoose
    .connect("mongodb://localhost:27017/test2", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(data => console.log("The database is connected"))
    .catch(err => {
      console.log("Error DB connection failed:", err.name, "Tryng againg...");
      dbconnect();
    });
}

if (!db) {
  dbconnect();
}
module.exports = db;
