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

  const issues = await Issue.find({ project });

  res.render("details", { project, labels, projectId, issues });
};

module.exports.issuePage = async (req, res) => {};

module.exports.createIssue = async (req, res) => {
  //TODO: currently lable is string need to modify the function for lable == array
  const { title, description, labels, author } = req.body;
  const projectId = req.body.projectId;

  const labelIds = [];
  const labelsArr = labels.split(", ");
  console.log("labels", labelsArr);

  if (Array.isArray(labelsArr) && labelsArr.length > 0) {
    for (let label of labelsArr) {
      const newLabel = new Label({ labels: label, project: projectId });
      labelIds.push(newLabel._id);
      await newLabel.save();
    }
  }

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
