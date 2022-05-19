const settings = require("./settings.json")
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const key = settings.key


//Configuration
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(express.urlencoded({ extended : true }))
dotenv.config;
mongoose.connect(key);

// Routers
const register = require("./routers/get/register");
const index = require("./routers/get/index");
const users = require("./routers/get/users");
const registerPost = require("./routers/post/register")

// Routing

app.use("/", index)
app.use("/users", users)
app.use("/register",register)
app.use("/registerPost", registerPost)

const listener = app.listen(6060, () => console.log("Server started and listening in localhost:6060"))
