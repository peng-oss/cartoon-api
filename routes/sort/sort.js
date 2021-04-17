const express = require("express");
const router = express.Router();
const SortModel = require("../../models/sort/sortModel");
const { errorSend, successSend } = require("../../config/tools");
const CollectionModel = require("../../models/collections");
/**
 *
 * 分类页面api
 *
 */

// 分页功能api
router.get("/img", (req, res) => {
  const pagesize = parseInt(req.query.pagesize);
  const pageNum = parseInt(req.query.pagenum);
  SortModel.find()
    .skip((pageNum - 1) * pagesize)
    .limit(pagesize)
    .exec((err, doc) => {
      if (err) {
        errorSend(res, "查询数据失败");
      } else {
        SortModel.find({}, (err, total) => {
          if (err) {
            errorSend(res, "查询数据失败");
          } else {
            let totals = total.length;
            //计算总页数
            const totalPage = Math.ceil(totals / pagesize);
            //判断当前页数是否大于总页数
            const list = pageNum > totalPage ? [] : doc;
            res.status(200).json({
              status: 200,
              msg: "获取数据成功",
              pag: list,
              total: totals,
            });
          }
        });
      }
    });
});

//增加收藏功能api
router.post("/collection", (req, res) => {
  const collection = JSON.parse(JSON.stringify(req.body));
  console.log(typeof collection.title);
  SortModel.find({ bookName: collection.title }, (err, doc) => {
    if (err) {
      errorSend(res, "收藏失败");
    } else {
      doc[0].distinguish = false;
      const u = new CollectionModel(collection);
      u.save((err) => {
        if (err) {
          errorSend(res, "收藏失败");
        } else {
          successSend(res, "收藏成功");
        }
      });
    }
  });
});

//取消收藏api

router.delete("/collectionDec", (req, res) => {
  let bookName = req.query.bookName;
  CollectionModel.deleteOne({ title: bookName }, (err) => {
    if (err) {
      errorSend(res, "取消收藏失败");
    } else {
      SortModel.find({ bookName }, (err, doc) => {
        if (err) {
          errorSend(res, "取消收藏失败");
        } else {
          console.log(doc);
          doc[0].distinguish = true;
          successSend(res, "取消收藏成功");
        }
      });
    }
  });
});

//查找分类api
router.get("/sort", (req, res) => {
  const type = req.query.name;
  switch (type) {
    case "恋爱":
      SortModel.findType("恋爱", (err, doc) => {
        if (err) {
          errorSend(res, "查找分类失败");
        } else {
          console.log(doc);
        }
      });
      break;

    default:
      break;
  }
});

module.exports = router;
