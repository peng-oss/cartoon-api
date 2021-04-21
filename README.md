# cartoon-api

## server.js 为入口

漫画后端接口

yarn 安装项目所需依赖

yarn dev 启动项目

## http://127.0.0.1:5000

原 api -------- 现 api

### api 请求地址的变化

## 1.登录页面：

#### 1.1登录验证用户（没变）

/user/search---------/login

```
{
    msg: "登录成功",
    status: 200,
    token,
}
```



#### 1.2注册用户信息（没变）

/user/add ----------/login/reg

## 2.排行榜的接口

#### **2.1总表单**（没变）

/rank/all

```
{
    status: 200,
    msg: "获取成功",
    list: ListAllArr,
    little: popularityLists,
}
```



#### **2.2少女榜**(没变)：/rank/girl

```
{
status: 200,
msg: "获取成功",
list: girlLists,
}
```



#### 2.3青女榜(没变)：/rank/yongGirl

```
{
    status: 200,
    msg: "获取成功",
    list: yongGirllists,
}
```



#### **2.4少年榜**(没变)：/rank/yong

```
{
    status: 200,
    msg: "获取成功",
    list: yongLists,
}
```



## 3.分类页面接口

#### **3.1分页**(没变)：/paging/img 

```
{
    status: 200,
    msg: '获取数据成功',
    pag: list,
    total: totals,
 }
```

#### **3.2收藏**(没变)：/paging/collection

```
{
    msg: 收藏成功,
    status: 200,
}
```



#### **3.3取消收藏(没变)：**/paging/collectionDec

```
{
    msg: 取消收藏成功,
    status: 200,
}
```



#### **3.4查找分类**(没变)：/paging/sort

```
{
        msg: '获取分类成功',
        status: 200,
        list: doc,
        total: length,
      
}
```

## 4.世界页面接口：

#### 4.1 获取已有评论接口：/world/getComment

请求方式：get

传入参数：无

返回值：

```
{
  status: 200，
  msg: "获取成功",
  list: commentList,  // 评论数组
}	
```

#### 4.2 发表评论接口：/world/public

请求方式：post

| 传入参数名 | 参数描述       |
| ---------- | :------------- |
| userName   | 用户名         |
| content    | 发表评论的内容 |
| publicTime | 发表评论时间   |
| url        | 头像图片地址   |

返回值

```
{
  status: 200,
  msg: "发表成功",
  list: commentList,   // 发表评论后的新数组 
}
```

#### 4.3 删除评论接口：/world/delete

请求方式：delete

| 传入参数 | 参数描述       |
| :------- | -------------- |
| id       | 被删除评论的id |

**返回值**

```
{
 status: 200,
 msg: "删除成功",
 list: commentList,
}
```

## 5.热门推荐页面接口

#### 5.1 获取漫画简介及章节列表：/works/chapterList

请求方式：get

传入参数：无

**返回值**

```
{
      status: 200,
      msg: "获取成功",
      chapterList,     // 漫画章节
      describe,        // 漫画描述
      ifFlag                        
 }
```

## 6.观看漫画页面接口

#### 6.1获取每一章漫画图片：/look

请求方式：get

| 传入参数 | 参数描述 |
| -------- | -------- |
| title    | 章节名称 |

返回值

```
{
     status: 200,
     msg: "获取成功",
     cartoonImg,            // 漫画图片地址列表
     sidebarList            // 侧边栏章节
 }
```

## 7.首页接口

#### 7.1获取首页图片：/home/getAll

请求方式：get

传入参数：无

返回值

```
{
   status: 200,
   msg: "获取成功",
   allData:{
               carouselList:[],           // 轮播图
               originalImgList:[],        // 原创数据与图片源
               suspenseImgsList:[],       // 惊恐数据与图片源
               newWorkImgsList:[],        // 新作榜
               riseWorkImgsList:[],       // 飙升榜
               cartoonChangeImgsList:[],  // 漫改图片
               toHeadImgsList:[],         // 上头图片
               toHeadPopularityList:[]    // 上头排行榜
       }
 }
```

