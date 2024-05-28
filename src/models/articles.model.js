const mongoose = require("mongoose");

const ArticlesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: false,
    },
    year: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Articles", ArticlesSchema)