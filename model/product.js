const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    flat:{type:String, required:true},
    block:{type:String, required:true},
    number:{type:Number, required:true},
    residents:[{type:String, required:true}]
},{
   versionKey:false,
   timestamps:true,
});


module.exports =mongoose.model('product', productSchema)