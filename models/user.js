const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Joi = require("joi"); 

const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    gender :{type:String, required:true},
    month:{type:String, required:true},
    date:{type:String, required:true},
    year:{type:String, required:true},
    likedSongs:{type:[String], default : []}, // to store the liked songs in our database 
    playlist:{type:[String], default: []}, // store playlist in the database 
    isAdmin:{type:Boolean, default: false}, // allow a user to become an admin 
})

const User = mongoose.model("user", userSchema);