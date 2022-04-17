
const express = require('express');
const mongoose = require('mongoose');

const app = express()

app.use(express.json())

const port = process.env.PORT || 3003


const connect = ()=>{
    return mongoose.connect("mongodb+srv://user:pass@cluster0.4xk9u.mongodb.net/fullstack?retryWrites=true&w=majority")
};

app.listen(port, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 3003");
});


