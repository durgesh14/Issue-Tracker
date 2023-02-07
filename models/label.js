const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const labelSchema = new Schema({
  labels: {
    type: String,
    required: true,
  },
});

const Label = mongoose.model("Label", labelSchema);
module.exports = Label;
