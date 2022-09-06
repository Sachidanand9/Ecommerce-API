const router = require('express').Router();
const User =  require("../models/User");
const CryptoJS = require('crypto-js');


// For Register
router.post('/register',async(req,res)=>{

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password,"Pass").toString(),
    });
  try {
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Login?
router.post('/login',async(req,res)=>{
    try {
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json('Wrong Credentials!')
        const hashedPassword = CryptoJS.AES.decrypt(user.password,"Pass");
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        originalPassword !==req.body.password && 
        res.status(401).json('Wrong Credentials!');

        const { password, ...others} = user._doc;

        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
})




module.exports =  router