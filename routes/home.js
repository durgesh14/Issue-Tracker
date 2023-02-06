const express = require("express");
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const homeController = require("../controllers/home_controller");

//GET request to "/sign-up".
router.get("/home", homeController.renderHome);

router.post("/toggle-form", (req, res) => {
  res.send(
    ejs.render(
      fs.readFileSync(path.join(__dirname, "../views", "form.ejs"), "utf-8"),
      {},
      { delimiter: "%" }
    )
  );
});

router.post("/create-project", homeController.createProject);

module.exports = router;
