const mongoose = require("mongoose");
var db;
function dbconnect() {
  return (db = mongoose.createConnection("mongodb://localhost/ipmhu:27017"));
}
if (!db) {
  dbconnect();
}
module.exports = db;
