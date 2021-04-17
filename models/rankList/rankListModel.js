const mongoose = require("mongoose");

const RankListSchema = mongoose.Schema({
  name: String,
  list: Array,
});

const RankListModel = mongoose.model("Rank", RankListSchema, "rank");

module.exports = RankListModel;
