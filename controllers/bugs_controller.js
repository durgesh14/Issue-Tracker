const Project = require("../models/Project");
const Label = require("../models/Label");
const Issue = require("../models/Issue");
module.exports.detailsPage = async (req, res) => {
  const projectId = req.query.projectId;
  const project = await Project.findById(projectId);
  if (!project) {
    return res.status(404).send({ error: "Project not found" });
  }

  const labels = await Label.find({ project });

  const issues = await Issue.find({ project }).populate("labels");

  res.render("details", {
    project,
    labels,
    projectId,
    issues,
  });
};

module.exports.createIssue = async (req, res) => {
  //TODO: currently lable is string need to modify the function for lable == array
  const { title, description, labels, author } = req.body;
  const projectId = req.body.projectId;

  const labelIds = [];
  const labelsArr = labels.split(", ");

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
