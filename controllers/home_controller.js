const Project = require("../models/Project");
const Label = require("../models/Label");
const Issue = require("../models/Issue");

const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

module.exports.renderHome = async (req, res) => {
  let showForm = false;
  if (req.query.showForm === "true") {
    showForm = true;
  }

  const projects = await Project.find({});
  // console.log(projects.map((project) => project.name));
  if (!projects) {
    return res.status(404).send({ error: "Project not found" });
  }

  res.render("home", { showForm, projects });
};

module.exports.createProject = async (req, res) => {
  console.log(req.body.name);
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

module.exports.togglForm = async (req, res) => {
  res.send(
    ejs.render(
      fs.readFileSync(path.join(__dirname, "../views", "form.ejs"), "utf-8"),
      {},
      { delimiter: "%" }
    )
  );
};
