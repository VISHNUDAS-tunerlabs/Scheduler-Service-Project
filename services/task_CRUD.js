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
var createTask=async(req)=>{
    connectDb()
    try{
        const task=await new Task(req.body)
        await task.save()
        return{"msg":"success"}
            //console.log(result)
    }catch(err){
        return{"msg":"failed"}
    }
    
    
}

module.exports={connectDb,createTask}