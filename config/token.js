const jwt = require("express-jwt");

//解析token
const mixToken = (token) => {
  return new Promise((resolve, reject) => {
    var info = jwt.verify(
      token,
      { secret: "secret12345", algorithms: ["HS256"] },
      (error, decoded) => {
        if (error) {
          console.log(error.message);
          return;
        }
        console.log(decoded);
      }
    );
    resolve(info);
  });
};
let verToken = {
  //获取token
  getToken: (req, res, next) => {
    var token = req.headers["authorization"];
    if (token == undefined) {
      return next();
    } else {
      mixToken(token)
        .then((data) => {
          req.data = data;
          return next();
        })
        .catch((error) => {
          console.log(error);
          return next();
        });
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
