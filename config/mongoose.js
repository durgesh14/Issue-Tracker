const mongoose = require("mongoose");
// require('dotenv').config()
mongoose.connect("mongodb://127.0.0.1/issue-tracker");
//Creating mongoose conncetion
const db = mongoose.connection;
//on error console the error
db.on("error", console.error.bind(console, "Error connecting to mongo db"));
//on success display connected message
db.once("open", function () {
  console.log("Connected to mongo-db");
});

module.exports = db;
