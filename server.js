const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
const Login = require("./routes/login/login");
const expressJwt = require("express-jwt");
const { verToken } = require("./config/token");
//配置环境变量
dotenv.config({
  path: "./config/config.env",
});
const PORT = process.env.PORT || 3000;
const app = express();

//连接数据库
connectDB();

//配置中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

//配置路由
app.use("/login", Login);

//注册token中间件
app.use(
  expressJwt({
    secret: "secret12345",
    algorithms: ["HS256"],
  }).unless({
    path: ["/login", "/login/reg"], // 指定路径不经过 Token 解析
  })
);
//获取token
app.use(function (req, res, next) {
  var token = req.headers["authorization"];
  if (token == undefined) {
    return next();
  } else {
    verToken(token)
      .then((data) => {
        req.data = data;
        return next();
      })
      .catch((error) => {
        console.log(error);
        return next();
      });
  }
});
//判断是否
app.use(function (err, req, res, next) {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    console.error(req.path + ",无效token");
    res.json({
      message: "token过期，请重新登录",
      code: 400,
    });
    return;
  }
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//http://127.0.0.1:5000
app.get("/", (req, res) => {
  res.send("首页");
});

app.listen(PORT, () =>
  console.log(
    `灰喵漫画后台已启动，目前环境：${process.env.NODE_ENV} 运行端口：${PORT}`
      .magenta.bold
  )
);

/*
 *报错兜底
 */
process.on("unhandledRejection", (err) => {
  console.log(`Error：${err.message}`.red.bold);
  server.close(() => {
    process.exit(1);
  });
});
