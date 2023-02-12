const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home_controller");
const bugController = require("../controllers/bugs_controller");

//GET request to "/sign-up".
router.get("/", homeController.renderHome);
router.get("/home", homeController.renderHome);

router.post("/toggle-form", homeController.togglForm);

router.post("/create-project", homeController.createProject);

router.get("/bugs", bugController.detailsPage);

router.post("/create-issue", bugController.createIssue);
module.exports = router;
