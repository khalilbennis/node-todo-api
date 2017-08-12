const express = require('express');
const bodyParser =require('body-parser')

var {mongoose} = require('./db/mongoose');

var {Todo}=require('./models/todo');

var {User}=require('./models/user');
var {ObjectID}=require('mongodb');

var app=express();
const port =process.env.PORT || 3000;

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

app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id)) res.status(404).send({});
  else{
    Todo.findById(id).then((todo)=>{
      if (!todo) {
        res.status(404).send({});
      }
      else {
        res.status(200).send(todo);
      }
    },(e)=>{
      res.status(404).send({});
    });
  }

});

app.delete('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id)) return res.status(404).send({});
  Todo.findByIdAndRemove(id).then((docs)=>{
    if(!docs) return res.status(404).send({});
    res.status(200).send(docs);
  },(e)=>{
    res.status(404).send({});
  });
});
app.listen(port,()=>{
  console.log('started on port '+port);
});

module.exports = {app};
