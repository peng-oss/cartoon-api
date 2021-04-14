const jwt = require("express-jwt");

//获取token
exports.verToken = function (token) {
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

//
