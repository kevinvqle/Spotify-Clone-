const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express(); 
const userRoutes = require("./routes/users")
const loginRoutes = require("./routes/login")

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/login", userRoutes);

mongoose.connect("mongodb+srv://admin:admin@cluster0.hrkopmp.mongodb.net/?retryWrites=true&w=majority", () => { 
    console.log("CONNECTED TO MONGO DB");});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB Error"));


app.listen(3001, () => console.log("server started on port 3001"));