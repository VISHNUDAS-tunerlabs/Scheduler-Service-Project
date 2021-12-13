const mongoose=require('mongoose')
const URL=require('../config/config')
const Task=require('../models/task')
const url=URL.url
/*Establishing connectionto the MongoDb database*/
var connectDb=async()=>{
    await mongoose.connect(url,(err)=>{
        if(!err){
            console.log("Database connection successfull")
        }
        else{
            console.log("sorry, some error occured")
        }
    })
}

/*Storing task into the db*/
var createTask=async(req,res)=>{
    connectDb()
    try{
        const task=await new Task(req.body)
        await task.save()
        res.status(200).json({"msg":"success"})
    }catch(err){
        res.status(404).json({"msg":err})
    }
    
    
}
/*retrieving all the tasks from database*/
var viewAlltasks=async(req,res)=>{   
    connectDb()
    Task.find().then((result)=>{
        console.log(result)
        res.status(200).send(result)
    }).catch((err)=>{
        res.status(404).send(err)
    })
}

module.exports={connectDb,createTask,viewAlltasks}