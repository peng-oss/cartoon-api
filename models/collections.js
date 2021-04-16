const mongoose = require("mongoose");

const CollectionsSchema = mongoose.Schema({
  title: String,
  author: String,
  distinguish: Boolean,
});

const CollectionModel = mongoose.model(
  "Collection",
  CollectionsSchema,
  "collection"
);

module.exports = CollectionModel;
