require("dotenv").config();
require("express-async-errors");

const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
// adding this for search
const searchRoutes =  require("./routes/search_function");

const app = express();

connection();
// this is added because there are cors policies that need to be dealt with when using react outside of localhost
app.use(cors());
// this is here so we can accept json obj's
app.use(express.json());
app.use("/api/users/",userRoutes);
app.use("/api/login/",authRoutes);

// this is for searching it just catches the request
app.get('/search/:artistSong', searchRoutes);
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));