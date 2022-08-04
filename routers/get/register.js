const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = require("../../models/User")
let errors = []

const register = router.get("/", async(req, res)=>{
    res.render("register", { errors })
})

const registerPost = router.post("/", async(req, res)=>{
    const { username, email, password, repassword } = req.body

    if(!username){
        errors.push({ message : "Error!" })
        res.render("register", { errors })
    } else {
        res.redirect("/")
    }
})

module.exports = { register, registerPost };