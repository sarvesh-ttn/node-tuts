const express=  require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const routes = require('./routes/route')

const app = express();
const PORT =8000;

app.use(bodyParser.json())
app.use(routes)

mongoose.connect('mongodb://localhost:27017/item-inventory',{
 useNewUrlParser:true   
})
mongoose.connection.on("error",err=>{
    console.log("err" , err);
})
mongoose.connection.on("connected",(err,res)=>{
    console.log("mongoose is connected");
})
app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
})