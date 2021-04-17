const express = require('express')
// 引入数据库模型
const Comment = require('../../models/comment/commentModel')
const { successSend, errorSend } = require("../../config/tools");
// 创建一个路由容器
const router = express.Router()

// 设置允许跨域访问该服务

let world = new Comment()

// world.save((err, res) => {
//     if (err) {
//         console.log('保存失败');
//     } else {
//         console.log('保存成功');
//         console.log(res); // 刚刚插入的数据
//     }
// })

// 获取评论接口
router.get('/getComment', (req, res) => {
    res.send(commentsList)
})


// 发表评论接口
router.get('/public', (req, res) => {
    res.send('发表评论接口')
})

// 删除评论接口
router.get('/delete', (req, res) => {
    res.send('删除评论接口')
})

// 把 router 导出
module.exports = router