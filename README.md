# cartoon-api

## server.js 为入口

漫画后端接口

yarn 安装项目所需依赖

yarn dev 启动项目

## http://127.0.0.1:5000

原 api -------- 现 api

### api 请求地址的变化

## 一.登录页面：

登录验证用户
/user/search---------/login

{
msg: "登录成功",
status: 200,
token,
}

注册用户信息
/user/add ----------/login/reg

## 二.排行榜的接口没变

**总表单**
/rank/all

{
status: 200,
msg: "获取成功",
list: ListAllArr,
little: popularityLists,
}

**少女榜**
/rank/girl

{
status: 200,
msg: "获取成功",
list: girlLists,
}

**青女榜**
/rank/yongGirl
{
status: 200,
msg: "获取成功",
list: yongGirllists,
}

**少年榜**
/rank/yong

{
status: 200,
msg: "获取成功",
list: yongLists,
}

## 三.分类接口没变

**分页**
/**paging/img 

{
status: 200,
 msg: '获取数据成功',
  pag: list,
 total: totals,
 }

**收藏**

/paging/collection

{
    msg: 收藏成功,
    status: 200,
}

**取消收藏**

/paging/collectionDec

{
    msg: 取消收藏成功,
    status: 200,
}

**查找分类**

/paging/sort

```
{
        msg: '获取分类成功',
        status: 200,
        list: doc,
        total: length,
      
}
```

## 四.世界页面接口：

#### **4.1 获取已有评论接口**(没变)：/world/getComment

**请求方式：**get

**传入参数：**无

**返回值：**

```
{
  status: 200，
  msg: "获取成功",
  list: commentList,  // 评论数组
}	
```

#### **4.2 发表评论接口**(没变)：/world/public

**请求方式：**post

| 传入参数名 | 参数描述       |
| ---------- | :------------- |
| userName   | 用户名         |
| content    | 发表评论的内容 |
| publicTime | 发表评论时间   |
| url        | 头像图片地址   |

**返回值**

```
{
  status: 200,
  msg: "发表成功",
  list: commentList,   // 发表评论后的新数组 
}
```

#### **4.3 删除评论接口**（没变）

**请求方式：**delete

| 传入参数名 | 参数描述       |
| :--------- | -------------- |
| id         | 被删除评论的id |

**返回值**

```
{
 status: 200,
 msg: "删除成功",
 list: commentList,
}
```



