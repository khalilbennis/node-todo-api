const expect = require('expect');
const request=require('supertest');

const {app}=require('./../server');
const {Todo}=require('./../models/todo');


//beforeEach((done)=>{
//  Todo.remove({}).then(()=>done());
//});
//describe('POst /TODOS',()=>{
//  it('should create anew todo',(done)=>{
//    var text ='Test todo text';
//    request(app)
//    .post('/todos')
//    .send({text})
//    .expect(200)
//    .expect((res)=>{
//      expect(res.body.text).toBe(text);
//    })
//    .end((err,res)=>{
//      if(err) return done(err);
//      Todo.find().then((todos)=>{
//        expect(todos.length).toBe(1);
//        expect(todos[0].text).toBe(text);
//        done();
//      }).catch((e)=>done(e));
//    });
//  });
//});


describe('GET TODO/ID',()=>{

  it('should verify is valid',(done)=>{

    request(app)
      .get(`/todos/123`)
      .expect(404)
      .end(done);
  });

});

describe('delete TODO',()=>{

  it('should remove todo',(done)=>{
      request(app)
       .delete(`/todos/598f5a829f84a527349d0d77`)
       .expect(200)
       .expect((res)=>{
         console.log(res.body);
       })
       .end(done);



  });
});
