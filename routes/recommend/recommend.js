const express = require('express')
// 引入数据库表结构模型
const ChapterListModel = require("../../models/recommend/chapterModel"); // 漫画章节列表
const DescribeModel = require("../../models/recommend/describeModel");   // 漫画作品详情
const { successSend, errorSend } = require("../../config/tools");
const router = express.Router()  // 创建一个路由容器

// 获取漫画章节列表和漫画简介接口
router.get('/chapterList', (req, res) => {
    ChapterListModel.find((err, chapterList) => {
        if (err) {
            errorSend(res, "获取漫画章节失败");
        } else {
            DescribeModel.find((err, describe) => {
                if (err) {
                    errorSend(res, "获取漫画描述失败");
                } else {
                    res.status(200).json({
                        status: 200,
                        msg: "获取成功",
                        chapterList,     //  漫画章节
                        describe,        //  漫画描述
                        ifFlag: true
                    });
                }
            })
        }
    })
})

// let Chapter = new DescribeModel()

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