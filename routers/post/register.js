const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = require("../../models/User")

const register = router.post("/", async(req, res)=>{
    const { username, email, password, repassword } = req.body
    let errors = []
    if(!username){
        errors.push({ message : "Error!" })
        res.render("register", { errors })
    } else {
        res.redirect("/")
    }
    })

module.exports = register;