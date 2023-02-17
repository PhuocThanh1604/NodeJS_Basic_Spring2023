const mongoose = require("mongoose");
const schema = mongoose.Schema;
const playerSchema = new schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    club: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    goals: {
      type: Number,
      required: true,
    },
    isCaptain: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
var players = mongoose.model("Players", playerSchema);
module.exports = players;
