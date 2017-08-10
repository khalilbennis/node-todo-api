const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/lolapp',(err,db)=>{
  if (err) {
    return console.log('unable to connect to mongodb');
  }
  db.collection('lol').insertOne({
    name:'khalil',
    pass:'lolflmo'
  },(err,result)=>{
    if (err) {
    return  console.log('unable to insert',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
});
