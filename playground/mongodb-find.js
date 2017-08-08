const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('unable to connect to mongodb');
  }
//  db.collection('Todos').find({
//    _id:new ObjectID('598a13cbe76ffe53d080539f')
//
//  }).toArray().then((docs)=>{
  //  console.log('Todos');
  //  console.log(JSON.stringify(docs,undefined,2));
//  },(err)=>{
  //  console.log('unable to fetch');
  //});
  db.collection('Todos').deleteOne({text: 'eat'}).then((result)=>{
    console.log(result);
  });

});
