const Project = require("../models/Project");
const Label = require("../models/Label");
const Issue = require("../models/Issue");

// Renders the details page for a project with the given projectId.
// Displays the project details, list of labels associated with the project, and a list of issues associated with the project.
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

// Creates a new issue with the given title, description, labels, author, and projectId.
// The labels are added to the Label collection if they don't already exist for the project.
module.exports.createIssue = async (req, res) => {
  const { title, description, labels, author } = req.body;
  const projectId = req.body.projectId;

  const labelIds = [];
  const labelsArr = labels.split(", ");

  // Create new labels and add them to the Label collection
  if (Array.isArray(labelsArr) && labelsArr.length > 0) {
    for (let label of labelsArr) {
      const newLabel = new Label({ labels: label, project: projectId });
      labelIds.push(newLabel._id);
      await newLabel.save();
    }
  }
  // Create a new issue and save it to the Issue collection
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
