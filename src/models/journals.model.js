const mongoose = require("mongoose");

const JournalSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
  ISBN: Number,
});


module.exports = mongoose.model("Journals", JournalSchema)