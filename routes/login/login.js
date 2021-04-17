const express = require("express");
const LoginModel = require("../../models/login/loginModel");
const { successSend, errorSend } = require("../../config/tools");
const jwt = require("jsonwebtoken");
const router = express.Router();

// 1.登录校验的接口
router.post("/", (req, res) => {
  const { name, password } = req.body;
  LoginModel.find({ name, password }, (err, data) => {
    if (data.length === 0) {
      errorSend(res, "登录失败，该用户未登录");
    } else {
      const token =
        "Bearer " +
        jwt.sign(
          { _id: data._id, },
          "secret12345",
          { expiresIn: 3600 * 24 * 3, }
        );
      res.status(200).json({
        msg: "登录成功",
        status: 200,
        token,
      });
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
