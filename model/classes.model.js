const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}
},{
   versionKey:false,
   timestamps:true,
});
