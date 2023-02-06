const Project = require("../models/Project");

module.exports.renderHome = async (req, res) => {
  let showForm = false;
  if (req.query.showForm === "true") {
    showForm = true;
  }

  res.render("home", { showForm });
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
