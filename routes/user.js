const router = require('express').Router();

router.get("/usertest",(req, res)=>{
    res.send('user test success');
});

router.post("/userpost",(req,res) =>{
    const username = req.body.username;
    res.send("Your User Name" + " " +username);
})

module.exports =  router