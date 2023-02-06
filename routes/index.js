const express = require("express");

const router = express.Router();

const path = require("path");

// maps a sub-route to "/users"
router.use("/", require("./home"));

module.exports = router;
