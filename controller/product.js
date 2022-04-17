const product = require('./product')

const express = require("express");

const router = express.Router();

router.get('/product',async (req, res) => {
try {

    const data =await product.find().lean().exec()

    return res.send(data);
    
} catch (error) {
    return res.send(error.message);
}
})


module.exports=router;