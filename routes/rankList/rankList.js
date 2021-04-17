const express = require("express");
const router = express.Router();
const RankListModel = require("../../models/rankList/rankListModel");
const { errorSend } = require("../../config/tools");
/**
 *
 * 获取排行榜接口
 *
 */

router.get("/:name", (req, res) => {
  switch (req.params.name) {
    case "all":
      RankListModel.find({ name: "ListAllArr" }, (err, ListAllArr) => {
        RankListModel.find(
          { name: "popularityLists" },
          (err, popularityLists) => {
            if (err) {
              errorSend(res, "获取排行榜失败");
            } else {
              res.status(200).json({
                status: 200,
                msg: "获取成功",
                list: ListAllArr,
                little: popularityLists,
              });
            }
          }
        );
      });
      break;
    case "girl":
      RankListModel.find({ name: "girlLists" }, (err, girlLists) => {
        if (err) {
          errorSend(res, "获取排行榜失败");
        } else {
          res.status(200).json({
            status: 200,
            msg: "获取成功",
            list: girlLists,
          });
        }
      });
      break;
    case "yongGirl":
      RankListModel.find({ name: "yongGirllists" }, (err, yongGirllists) => {
        if (err) {
          errorSend(res, "获取排行榜失败");
        } else {
          res.status(200).json({
            status: 200,
            msg: "获取成功",
            list: yongGirllists,
          });
        }
      });
      break;
    case "yong":
      RankListModel.find({ name: "yongLists" }, (err, yongLists) => {
        if (err) {
          errorSend(res, "获取排行榜失败");
        } else {
          res.status(200).json({
            status: 200,
            msg: "获取成功",
            list: yongLists,
          });
        }
      });
      break;
  }
});

module.exports = router;
