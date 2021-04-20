const mongoose = require("mongoose");

// 连接数据库
// mongoose.connect('mongodb://localhost/cartoon', { useMongoClient: true })

// 从 mongoose 里引入 Schema 构架
// var Schema = mongoose.Schema

// 设置评论集合结构(架构)
const commentSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    }
    ,
    userName: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    publicTime: {
        type: String,
        required: true
    }
})

// 将集合结构发布为模型并暴露
const commentListModel = mongoose.model("Comment", commentSchema, "comment");

module.exports = commentListModel

