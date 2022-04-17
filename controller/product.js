const express = require('express');
const evaluation = require("../controller/product")

const router = express.Router()

router.get("",async (req,res)=>{

    try {
        const data = await evaluation.find().lean().exec()
        return res.status(201).send(data)
        
    } catch (error) {
        return res.status(500).send(error.message)
        
    }
})

module.exports = router