const express=  require('express');
const mongoose = require('mongoose');
const Task = require('./models/task');

const dbURI = 'mongodb+srv://ramisha:vx1vGjpFbu7ojUCj@cluster0.e6gzz.mongodb.net/node-tasks?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) 
 .then((result) => console.log('Connected to database'))
 .catch((err) => console.log(err))

const app = express();

//create tasks in collection
const task1 = new Task({   
  description: "Task 1",
  completed: true
});
const task2 = new Task({   
    description: "Task 2",
    completed: false
 });
  const task3 = new Task({   
    description: "Task 3",
    completed: true
  });
  const task4 = new Task({   
    description: "Task 4",
    completed: true
   });

Task.insertMany([task1,task2,task3,task4])
 .then((result) => console.log("Successfully inserted into task schema"))
.catch((err) => console.log(err))

//read tasks which are not completed
Task.find({'completed': 'false'}, function(err,tasks){
    if(err){
        console.log(err)
   }
    else{ 
     console.log(tasks)
    }
})

//update documents as completed
Task.updateMany({'completed': 'false'},
 {'completed' : 'true'} )
.then((result) => console.log("Successfully updated"))
.catch((err) => console.log(err))

//delete document using id
Task.deleteOne({_id: '62261447f13a4013ab4b58f3'})
.then((result) => console.log("Successfully deleted"))
.catch((err) => console.log(err))
