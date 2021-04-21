const mongoose = require("mongoose");

// 设置侧边栏表结构
const homeSchema = mongoose.Schema({
    carouselList: {          // 1.轮播图
        type: Array,
        required: true
    },
    originalImgList: {       // 2.原创数据与图片源
        type: Array,
        required: true
    },
    suspenseImgsList: {      // 3.惊恐数据与图片源
        type: Array,
        required: true
    },
    newWorkImgsList: {       // 4.新作榜图片
        type: Array,
        required: true
    },
    riseWorkImgsList: {      // 5.飙升榜
        type: Array,
        required: true
    },
    cartoonChangeImgsList: { // 6.漫改图片
        type: Array,
        required: true
    },
    toHeadImgsList: {        // 7.上头图片
        type: Array,
        required: true
    },
    toHeadPopularityList: {  // 8.上头排行榜
        type: Array,
        required: true
    }

})

// 将集合结构发布为模型并暴露
const homeModel = mongoose.model("Home", homeSchema, "home");

module.exports = homeModel