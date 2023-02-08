const Project = require("../models/Project");
const Label = require("../models/Label");
const Issue = require("../models/Issue");

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

module.exports.detailsPage = async (req, res) => {
  const projectId = req.query.projectId;
  const project = await Project.findById(projectId);
  if (!project) {
    return res.status(404).send({ error: "Project not found" });
  }

  const labels = await Label.find({ project });

  labels.map((item) => {
    // console.log("label: ", item.labels);
  });

  res.render("details", { project, labels, projectId });
};

module.exports.issuePage = async (req, res) => {};

module.exports.createIssue = async (req, res) => {
  const { title, description, labels, author } = req.body;
  const projectId = req.body.projectId;
  console.log("projectId", projectId);
  const labelIds = [];
  const newLabel = new Label({ labels, project: projectId });
  labelIds.push(newLabel._id);
  await newLabel.save();

  const newIssue = new Issue({
    title,
    description,
    labels: labelIds,
    author,
    project: projectId,
  });
  await newIssue.save();
  res.redirect("back");
};

module.exports.getMatch = async (req, res) => {
  const value = req.query.value;
  const projectId = req.query.projectId;

  // console.log(projectId, value);
};
