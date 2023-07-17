const express = require('express');
const UserModel = require('../model/user.model');
const userRoute = express.Router();

userRoute.post("/register",async (req, res)=>{
   try {
       const payload = req.body
       const checkUser = await UserModel.findOne({email : payload.email})
       if(checkUser){
         return res.send({
            msg:"user already registered"
         })
       }
       const newUser = new UserModel(payload)
       await newUser.save();
    res.send({
        msg:"Registration success",
    })
   } catch (error) {
    res.send({ msg : error.message})
   }
})

module.exports = userRoute;