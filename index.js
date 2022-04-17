const express = require('express')
const connect = require("./config/db");
const path = require('path')
const product =require('./controller/product')
const PORT = process.env.PORT || 5000;
const {login, register}= require("./controller/admin.controller");
const app = express();
   
app.use(express.json());
app.post('/login',login);
app.post('/signup', register);
app.use("",product)
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'));

app.listen(PORT, async() =>{
  try{
      await connect();
      console.log("listening on port 5000.....")
  }
  catch(err){
     console.log(err)
  }
});