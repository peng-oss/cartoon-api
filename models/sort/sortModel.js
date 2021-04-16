const mongoose = require("mongoose");

const SortSchema = mongoose.Schema({
  bookName: String,
  author: String,
  url: String,
  distinguish: Boolean,
  type: String,
});

SortSchema.statics.findType = function (type, cb) {
  this.find({ type }, (err, doc) => {
    cb(err, doc);
  });
};

const SortModel = mongoose.model("Sort", SortSchema, "sort");

module.exports = SortModel;
