const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = require("../../models/User")

const register = router.get("/", async(req, res)=>{
    res.render("register")
})

module.exports = register;