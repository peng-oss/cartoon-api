const mongoose = require("mongoose");

const SortSchema = mongoose.Schema({
  bookName: String,
  author: String,
  url: String,
  distinguish: Boolean,
  type: String,
});

const SortModel = mongoose.model("Sort", SortSchema, "sort");

module.exports = SortModel;
