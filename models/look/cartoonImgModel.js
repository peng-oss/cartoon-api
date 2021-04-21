const mongoose = require("mongoose");

    // 设置漫画图片表结构
const imgSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    chapter: {
        type: Number,
        required: true
    },
    imgList: {    // 图片列表
        type: Array,
        required: true
    }
})

// 将集合结构发布为模型并暴露
const cartoonImgModel = mongoose.model("CartoonImgs", imgSchema, "cartoonImgs");

module.exports = cartoonImgModel