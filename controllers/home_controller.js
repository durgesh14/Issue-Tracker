const Project = require("../models/Project");
const Label = require("../models/Label");
const Issue = require("../models/Issue");

const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

// Renders the home page with a list of all projects and a form for creating a new project.
// If req.query.showForm is "true", the form will be displayed.
module.exports.renderHome = async (req, res) => {
  let showForm = false;
  if (req.query.showForm === "true") {
    showForm = true;
  }

  const projects = await Project.find({});

  if (!projects) {
    return res.status(404).send({ error: "Project not found" });
  }

  res.render("home", { showForm, projects });
};

// Creates a new project with the given name, description, and author in the database.
module.exports.createProject = async (req, res) => {
  const project = new Project({
    name: req.body.name,
    description: req.body.desc,
    author: req.body.author,
  });

  try {
    await project.save();

    res.redirect("back");
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};

// Renders a form for creating a new project.
module.exports.togglForm = async (req, res) => {
  res.send(
    ejs.render(
      fs.readFileSync(path.join(__dirname, "../views", "form.ejs"), "utf-8"),
      {},
      { delimiter: "%" }
    )
  );
};
