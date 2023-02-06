const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8000;
const db = require("./config/mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Set up the view engine
app.set("view engine", "ejs");

app.set("views", "./views");

//Access Static files
app.use(express.static("assets"));

//Use express router
app.use("/", require("./routes"));

// const db = require("./config/mongoose"); //Connects to the MongoDB database using mongoose.

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
