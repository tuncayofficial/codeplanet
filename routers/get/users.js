const express = require("express")
const router = express.Router()

const users = router.get("/", (req, res)=>{
    const array = [1,2,3,4,5,6]
    res.json({ users : array })
})

module.exports = users;