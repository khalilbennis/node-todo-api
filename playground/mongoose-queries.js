const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID}=require('mongodb');

var id ='598ce04855c1b12c4a2aae4911';
if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}
Todo.find({
  _id:id
}).then((todos)=>{
  console.log('Todos',todos);
});

Todo.findById(id).then((todos)=>{
  if (!todos) {
    return console.log('not founnd')
  }
  console.log('Todo by id: ',todos);
}).catch((e)=>console.log(e));
