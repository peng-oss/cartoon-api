const mongoose = require("mongoose");

// 设置漫画作品描述表结构
const describeSchema = mongoose.Schema({
    name: {   // 漫画名
        type: String,
        required: true
    }
    ,
    author: { // 作者名
        type: String,
        required: true
    },
    introduction: { // 作品描述
        type: String,
        required: true
    }
})

// 将集合结构发布为模型并暴露
const describeModel = mongoose.model("Describe", describeSchema, "describe");

module.exports = describeModel