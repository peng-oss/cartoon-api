const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(
    process.env.LOC_MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    (err) => {
      console.log("数据库连接成功".green);
    }
  );
};

module.exports = connectDB;
