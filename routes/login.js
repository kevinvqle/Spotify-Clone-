const router = require("express").Router();
const{User} =  require("../models/user");
const bcrypt = require("bcrypt");

router.post("/login", async(req,res)=>{
    const user = await User.findOne({email:req.body.email});

    if(!user) return res.status(400).send({message: "Email or password is not correct! "});

    const validatePassword = await bcrypt.compare(req.body.password, user.password);

    if(!validatePassword) return res.status(400).send({message: "Email or password is not correct!"}); 

    const token = user.generateAuthToken();

    return res.status(200).send({data:token, message:"Logging in!!"});

})








module.exports = router;