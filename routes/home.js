const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home_controller");
const bugController = require("../controllers/bugs_controller");

//GET request to "/homepage".
router.get("/", homeController.renderHome);
router.get("/home", homeController.renderHome);

//POST request for displaying form
router.post("/toggle-form", homeController.togglForm);

//POST request for creating project
router.post("/create-project", homeController.createProject);

//GET request for details page
router.get("/bugs", bugController.detailsPage);

//POST request for creating issue
router.post("/create-issue", bugController.createIssue);
module.exports = router;
