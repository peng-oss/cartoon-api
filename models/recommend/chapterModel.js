const mongoose = require("mongoose");

// 设置漫画章节表结构
const chapterSchema = mongoose.Schema({
    url: {    // 图片地址
        type: String,
        required: true
    }
    ,
    chapter: { // 章节名
        type: String,
        required: true
    },
    num: {     // 点赞数
        type: Number,
        required: true
    },
    time: {    // 发布时间   
        type: String,
        required: true
    },
    likeIf: { // 是否喜欢
        type: Boolean,
        require: true
    }
})

// 将集合结构发布为模型并暴露
const chapterListModel = mongoose.model("Chapter", chapterSchema, "chapter");

module.exports = chapterListModel