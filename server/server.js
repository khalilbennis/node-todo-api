const express = require('express');
const bodyParser =require('body-parser')

var {mongoose} = require('./db/mongoose');
<<<<<<< HEAD
var {Tod}=require('./models/todo');
=======
var {Todo}=require('./models/todo');
>>>>>>> 1f483e1643ab354ecd6e1e185b08896f7d066781
var {User}=require('./models/user');

var app=express();

app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
var todo =new Todo({
  text: req.body.text
})

todo.save().then((doc)=>{
  res.send(doc)},(e)=>{
    res.status(400).send(e);
  }
);
});
app.listen(3000,()=>{
  console.log('started on port 3000');
});
<<<<<<< HEAD
module.exports = {app};
=======
>>>>>>> 1f483e1643ab354ecd6e1e185b08896f7d066781
