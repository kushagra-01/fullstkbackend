const mongoose = require('mongoose');

module.exports = ()=>{
     return mongoose.connect("mongodb+srv://navneetfw14:navnee7250@cluster0.iowwj.mongodb.net/the_final?authSource=admin&replicaSet=atlas-o7alyc-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true")
}