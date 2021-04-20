const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')
const expressJwt = require('express-jwt')
const verToken = require('./config/token')
const path = require("path")

// 引入路由
const Login = require('./routes/login/login')
const RankList = require('./routes/rankList/rankList')
const Center = require('./routes/center/center')
const Sort = require('./routes/sort/sort')
const Comment = require("./routes/comment/comment")
const Recommend = require("./routes/recommend/recommend")

// 配置环境变量
dotenv.config({
  path: './config/config.env',
})
const PORT = process.env.PORT || 3000
const app = express()

// 公开静态目录 http://localhost:5000/public/imgs/001.jpg
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))


// 配置中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// 配置路由
app.use("/login", Login);      // 登录页面
app.use("/rank", RankList);    // 排行榜页面
app.use("/paging", Sort);      // 分类页面
app.use("/world", Comment)     // 评论页面
app.use("/works", Recommend)   // 推荐页面

//连接数据库
connectDB()

// 配置跨域
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})


// 注册token中间件
app.use(
  expressJwt({
    secret: 'secret12345',
    algorithms: ['HS256'],
  }).unless({
    path: ['/login', '/login/reg'], // 指定路径不经过 Token 解析
  })
);

// 获取token
app.use((req, res, next) => {
  verToken.getToken(req, res, next);
});

// 如果错误返回信息
app.use((err, req, res, next) => {
  verToken.ErrorToken(err, req, res, next)
})

// http://127.0.0.1:5000
app.get('/', (req, res) => {
  res.send('首页')
})
// 配置路由
app.use('/login', Login)
app.use('/rank', RankList)
app.use('/paging', Sort)
app.use('/userOwner', Center)
app.use("/world", Comment)
app.listen(PORT, () =>
  console.log(
    `灰喵漫画后台已启动，目前环境：${process.env.NODE_ENV} 运行端口：${PORT}`
      .magenta.bold
  )
)

/*
 *报错兜底
 */
process.on('unhandledRejection', (err) => {
  console.log(`Error：${err.message}`.red.bold)
  server.close(() => {
    process.exit(1)
  })
})
