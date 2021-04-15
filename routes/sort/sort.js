const express = require("express");
const router = express.Router();
const SortModel = require("../../models/sort/sortModel");
const { errorSend } = require("../../config/tools");

/**
 *
 * 分类页面api
 *
 */

router.get("/img", (req, res) => {
  // const pagesize = req.query.pagesize;
  // console.log("🚀---------------- ~ pagesize", pagesize);
  // const pageNum = req.query.pagenum;
  // console.log("🚀---------------- ~ pageNum", pageNum);
  // SortModel.find()
  //   .skip((pageNum - 1) * pagesize)
  //   .limit(pagesize)
  //   .exec((err, doc) => {
  //     if (err) {
  //       errorSend(res, "查询失败555");
  //     } else {
  //       SortModel.find({}, (err, allDoc) => {
  //         if (err) {
  //           errorSend(res, "查询失败111");
  //         } else {
  //           const total = allDoc.length;
  //           res.status(200).json({
  //             status: 200,
  //             msg: "获取数据成功",
  //             pag: doc,
  //             total: total,
  //           });
  //         }
  //       });
  //     }
  //   });
  res.send("1111")
});

module.exports = router;
