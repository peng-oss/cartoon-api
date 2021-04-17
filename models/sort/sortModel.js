const mongoose = require("mongoose");
const { errorSend } = require('../../config/tools')
const SortSchema = mongoose.Schema({
  bookName: String,
  author: String,
  url: String,
  distinguish: Boolean,
  type: String,
});

SortSchema.statics.findType = function (type,res) {
  this.find({ type }, (err, doc) => {
    if(err){
      errorSend(res,"查找失败")
    }else{
      let length=doc.length
      res.status(200).json({
        msg: '获取分类成功',
        status: 200,
        list: doc,
        total: length,
      })
    }
  });
};

const SortModel = mongoose.model("Sort", SortSchema, "sort");

module.exports = SortModel;
