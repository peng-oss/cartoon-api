# cartoon-api

## server.js 为入口

漫画后端接口

yarn 安装项目所需依赖

yarn dev 启动项目

## http://127.0.0.1:5000

原 api -------- 现 api

### api 请求地址的变化

# 登录页面：

登录验证用户
/user/search---------/login

{
msg: "登录成功",
status: 200,
token,
}

注册用户信息
/user/add ----------/login/reg

# 排行榜的接口没变

/rank/all

{
status: 200,
msg: "获取成功",
list: ListAllArr,
little: popularityLists,
}

/rank/girl

{
status: 200,
msg: "获取成功",
list: girlLists,
}

/rank/yongGirl
{
status: 200,
msg: "获取成功",
list: yongGirllists,
}

/rank/yong

{
status: 200,
msg: "获取成功",
list: yongLists,
}
