const express = require("express");

const router = express.Router();

const path = require("path");

// maps a sub-route to "/users"
router.use("/", require("./home"));

// Create a middleware function for handling incorrect routes
router.use((req, res, next) => {
  res
    .status(404)
    .sendFile("404.html", { root: path.join(__dirname, "../views") });
});

module.exports = router;
