const express = require('express')
// 引入数据库表结构模型
const cartoonImgModel = require("../../models/look/cartoonImgModel"); // 漫画图片
const sidebarModel = require("../../models/look/sidebarModel");       // 漫画章节列表

const { successSend, errorSend } = require("../../config/tools");
const router = express.Router()                                       // 创建一个路由容器

// 获取漫画内容接口
router.get('/', (req, res) => {
    // const title = req.query.title
    cartoonImgModel.find((err, cartoonImg) => {
        if (err) {
            errorSend(res, "获取漫画图片失败");
        } else {
            sidebarModel.find((err, sidebarList) => {
                if (err) {
                    errorSend(res, "获取侧边栏列表失败");
                } else {
                    res.status(200).json({
                        status: 200,
                        msg: "获取成功",
                        cartoonImg,
                        sidebarList
                    });
                }
            })
        }
    })
})


let Chapter = new cartoonImgModel({
    title: '序章 硝烟域泪',
    chapter: 0,
    imgList: [
        { url: ' http://localhost:5000/public/imgs/001.jpg', },
        { url: ' http://localhost:5000/public/imgs/002.jpg', },
        { url: ' http://localhost:5000/public/imgs/003.jpg', },
        { url: ' http://localhost:5000/public/imgs/004.jpg', },
        { url: ' http://localhost:5000/public/imgs/005.jpg', },
        { url: ' http://localhost:5000/public/imgs/006.jpg', },
        { url: ' http://localhost:5000/public/imgs/007.jpg', },
        { url: ' http://localhost:5000/public/imgs/008.jpg', },
        { url: ' http://localhost:5000/public/imgs/009.jpg', },
        { url: ' http://localhost:5000/public/imgs/010.jpg', },
        { url: ' http://localhost:5000/public/imgs/011.jpg', },
        { url: ' http://localhost:5000/public/imgs/012.jpg', },
        { url: ' http://localhost:5000/public/imgs/013.jpg', },
        { url: ' http://localhost:5000/public/imgs/014.jpg', },
        { url: ' http://localhost:5000/public/imgs/015.jpg', },
        { url: ' http://localhost:5000/public/imgs/016.jpg', },
        { url: ' http://localhost:5000/public/imgs/017.jpg', },
    ]
})

// Chapter.save((err, res) => {
//     if (err) {
//         console.log('保存失败');
//     } else {
//         console.log('保存成功');
//         console.log(res); // 刚刚插入的数据
//     }
// })


// 把 router 导出
module.exports = router