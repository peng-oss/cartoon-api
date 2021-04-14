const express = require("express");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config/config.env",
});

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () =>
  console.log(
    `灰喵漫画后台已启动，目前环境：${process.env.NODE_ENV} 运行端口：${PORT}`
  )
);
