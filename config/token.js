

let verToken = {
  setToken:(req,next)=>{
    if(req.user){
      req.userId=req.user.id
      return next()
    }else{
      return next()
    }
  },
  //判断token错误时返回的信息
  ErrorToken: (err, req, res, next) => {
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
  },
};

module.exports = verToken;
