const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Creating Schema for issue with title, description, lables and author.
const issueSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  labels: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Label",
  },

  author: {
    type: String,
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
});

module.exports = mongoose.model("Issue", issueSchema);
