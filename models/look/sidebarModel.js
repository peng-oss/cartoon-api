const mongoose = require("mongoose");

// 设置侧边栏表结构
const sidebarSchema = mongoose.Schema({
    sid: {         // 侧边栏每一项id
        type: Number,
        required: true
    },
    chapterName: { // 侧边栏每一项名字
        type: String,
        required: true
    }
})

// 将集合结构发布为模型并暴露
const sidebarModel = mongoose.model("Sidebar", sidebarSchema, "sidebar");

module.exports = sidebarModel