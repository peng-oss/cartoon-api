const express = require("express");
const LoginModel = require("../../models/login/loginModel");
const { successSend, errorSend } = require("../../config/tools");
const CollectionModel = require('../../models/collections/collections')
const jwt = require("jsonwebtoken");
const router = express.Router();

// 1.登录校验的接口
router.post("/", (req, res) => {
  const { name, password } = req.body;
  LoginModel.find({ name, password }, (err, data) => {
    if (data.length === 0) {
      errorSend(res, "登录失败，该用户未注册");
    } else {
      console.log(data[0]._id)
      const token =
        "Bearer " +
        jwt.sign(
          {
            id: data[0]._id,
          },
          "secret12345",
          {
            expiresIn: 1000 * 60 * 60 * 60 * 24,
          }
        );
        CollectionModel.find(
          {
          userId: data[0]._id
          }
          ,(err,doc) => {
            res.status(200).json({
              msg: "登录成功",
              status: 200,
              token,
              name:name,
              collections:doc
            });
          })
     
    }
  });
});

// 2.进行注册的接口
router.post("/reg", (req, res) => {
  const { name, password } = req.body;
  LoginModel.find({ name }, (err, data) => {
    if (data.length === 0) {
      const add = new LoginModel({
        name,
        password,
      });
      add.save((err) => {
        if (err) {
          errorSend(res, "注册失败");
        } else {
          successSend(res, "注册成功");
        }
      });
    } else {
      errorSend(res, "该用户名已存在");
    }
  });
});

module.exports = router;
