const express = require('express')
const router = express.Router()
const SortModel = require('../../models/sort/sortModel')
const { errorSend, successSend } = require('../../config/tools')
const CollectionModel = require('../../models/collections/collections')
/**
 *
 * 分类页面api
 *
 */

// 分页功能api
router.get('/img', (req, res) => {
  const pagesize = parseInt(req.query.pagesize)
  const pageNum = parseInt(req.query.pagenum)
  SortModel.find()
    .skip((pageNum - 1) * pagesize)
    .limit(pagesize)
    .exec((err, doc) => {
      if (err) {
        errorSend(res, '查询数据失败')
      } else {
        SortModel.find({}, (err, total) => {
          if (err) {
            errorSend(res, '查询数据失败')
          } else {
            let totals = total.length
            //计算总页数
            const totalPage = Math.ceil(totals / pagesize)
            //判断当前页数是否大于总页数
            const list = pageNum > totalPage ? [] : doc
            res.status(200).json({
              status: 200,
              msg: '获取数据成功',
              pag: list,
              total: totals,
            })
          }
        })
      }
    })
})

//增加收藏功能api
router.post('/collection', (req, res) => {
  const collection = JSON.parse(JSON.stringify(req.body))
  SortModel.find({ bookName: collection.title }, (err, doc) => {
    if (err) {
      errorSend(res, '收藏失败')
    } else {
      SortModel.findOneAndUpdate(
        { bookName: collection.title },
        {
          distinguish: false,
        },
        (err) => {
          if (err) {
            errorSend(res, '收藏失败')
          } else {
            CollectionModel.find(
              { bookName: collection.title },
              (err, data) => {
                if (data.length!==0) {
                  errorSend(res, '该漫画已被收藏过')
                } else {
                  console.log(req.userId);
                  const u = new CollectionModel({
                    userId:req.userId,
                    title:collection.title,
                    author:collection.author
                  })
                  u.save((err) => {
                    if (err) {
                      errorSend(res, '收藏失败')
                    } else {
                      successSend(res, '收藏成功')
                    }
                  })
                }
              }
            )
          }
        }
      )
    }
  })
})

//取消收藏api

router.delete('/collectionDec', (req, res) => {
  let bookName = req.query.bookName
  CollectionModel.deleteOne({ title: bookName }, (err) => {
    if (err) {
      errorSend(res, '取消收藏失败')
    } else {
      SortModel.find({ bookName }, (err, doc) => {
        if (err) {
          errorSend(res, '取消收藏失败')
        } else {

          SortModel.findOneAndUpdate(
            { bookName },
            {
              distinguish: true,
            },(err) => {
              if (err) {
                errorSend(res, '取消收藏失败')
              }else{
                successSend(res, '取消收藏成功')
              }
            })
          
         
        }
      })
    }
  })
})

//查找分类api
router.get('/sort', (req, res) => {
  const type = req.query.name
  switch (type) {
    case '恋爱':
      SortModel.findType('恋爱', res)
      break
    case '剧情':
      SortModel.findType('剧情', res)
      break
    case '古风':
      SortModel.findType('古风', res)
      break
    case '校园':
      SortModel.findType('校园', res)
      break
    case '奇幻':
      SortModel.findType('奇幻', res)
      break
    case '唯美':
      SortModel.findType('唯美', res)
      break
    case '热血':
      SortModel.findType('热血', res)
      break
    case '日漫':
      SortModel.findType('日漫', res)
      break
    case '韩漫':
      SortModel.findType('韩漫', res)
      break
    case '大女主':
      SortModel.findType('大女主', res)
      break
    case '完结':
      SortModel.findType('完结', res)
      break
    case '穿越':
      SortModel.findType('穿越', res)
      break
    case '萌系':
      SortModel.findType('萌系', res)
      break
    case '灵异':
      SortModel.findType('灵异', res)
      break
    case '玄幻':
      SortModel.findType('玄幻', res)
      break
    case '搞笑':
      SortModel.findType('搞笑', res)
      break
    case '都市':
      SortModel.findType('都市', res)
      break
    case '投稿':
      SortModel.findType('投稿', res)
      break
    case '总裁':
      SortModel.findType('总裁', res)
      break
    case '正能量':
      SortModel.findType('正能量', res)
      break
    default:
      successSend(res, '请输入查询内容')
      break
  }
})

module.exports = router
