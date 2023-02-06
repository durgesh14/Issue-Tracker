const mongoose = require("mongoose");
//Creating Schema for user having email, password name and timestamp
const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
