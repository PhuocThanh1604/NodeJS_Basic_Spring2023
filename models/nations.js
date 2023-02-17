const mongoose = require("mongoose");
const schema = mongoose.Schema;

const nationSchema = new schema(
  {
    name: {
      type: "string",
      required: true,
      unique: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var nations = mongoose.model("Nation", nationSchema);
module.exports = nations;
