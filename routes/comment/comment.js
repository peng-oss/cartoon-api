const express = require('express')
const CommentListModel = require("../../models/comment/commentModel"); // 引入数据库模型
const { successSend, errorSend } = require("../../config/tools");
const router = express.Router()  // 创建一个路由容器


// 1.获取评论接口(查)
router.get('/getComment', (req, res) => {
    CommentListModel.find((err, commentList) => {
        if (err) {
            errorSend(res, "获取评论失败");
        } else {
            res.status(200).json({
                status: 200,
                msg: "获取成功",
                list: commentList.reverse(),
            });
        }
    })
})

// 2.发表评论接口(增)
router.post('/public', (req, res) => {
    const { url, userName, content, publicTime } = req.body;
    const commentObj = {
        url,
        userName,
        content,
        publicTime
    }
    let comment = new CommentListModel(commentObj)
    comment.save((err, data) => {
        if (err) {
            console.log('保存失败');
        } else {
            console.log('保存成功');
            console.log(data); // 刚刚插入的数据
            // 保存成功了再去找到新的评论并返回
            CommentListModel.find((err, commentList) => {
                if (err) {
                    errorSend(res, "获取评论失败");
                } else {
                    res.status(200).json({
                        status: 200,
                        msg: "发表成功",
                        list: commentList.reverse(),
                    });
                }
            })
        }
    })
})

// 3.删除评论接口(删)
router.delete('/delete', (req, res) => {
    const { id } = req.query
    CommentListModel.remove({ _id: id }, (err, data) => {
        if (err) {
            console.log('删除失败');
        } else {
            console.log('删除成功');
            console.log(data);
            CommentListModel.find((err, commentList) => {
                if (err) {
                    errorSend(err, "删除评论失败");
                } else {
                    res.status(200).json({
                        status: 200,
                        msg: "删除成功",
                        list: commentList.reverse(),
                    });
                }
            })
        }
    })
})

// 把 router 导出
module.exports = router