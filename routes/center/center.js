const CollectionModel = require('../../models/collections/collections')
const express = require('express')
const router = express.Router()
const { errorSend, successSend } = require('../../config/tools')


router.get('/',(req,res) => {
  CollectionModel.find({userId:req.userId},(err,collections) => {
      if(err){
        errorSend(res,"获取信息失败")
      }else{
        res.status(200).json({
          msg:"获取成功",
        userCollection:collections,
            status:200
        })
      }
  })
})


module.exports = router