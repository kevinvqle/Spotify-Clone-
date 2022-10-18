const router = require("express").Router();
const{User} =  require("../models/user");
const bcrypt = require("bcrypt");
// const saltRounds = 10;

// create our user information 
router.post("/", async(req,res)=> {
    const{error} = validate(req.body);
    if(error) return res.status(400).send({message: error.details[0].message});

    const user = await User.findone({email: req.body.email});  // email 

    if(user) return res.status(403).send({message: "The email already has been created..."})

    const salt = await bcrypt.genSalt(Number(process.env.SALT)); // check for unique passwrod 

    const hashPassword = await bcrypt.hash(req.body.password,salt); // hashes unique password

    let newUser = await new User({
        ...req.body,
        password:hashPassword
    }).save();

    newUser.password = undefined;
    newUser._v = undefined;

    res.status(200).send({data: newUser, message: "Account has been created"});

})

