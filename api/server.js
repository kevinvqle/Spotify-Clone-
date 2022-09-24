const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express(); 

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@cluster0.hrkopmp.mongodb.net/?retryWrites=true&w=majority", () => { 
    console.log("CONNECTED TO MONGO DB");});



app.listen(3001, () => console.log("server started on port 3001"));