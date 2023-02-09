const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const labelSchema = new Schema({
  labels: {
    type: Array,
    required: false,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
});

const Label = mongoose.model("Label", labelSchema);
module.exports = Label;
