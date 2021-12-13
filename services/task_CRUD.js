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
        console.log('Data inserted')
    }catch{
        console.log('some error occured. Data insertion failed')
    }
}
/*getting all the task details */
var viewTasks=()=>{
    connectDb
    Task.find().then((result)=>{
        console.log(result)//return({"msg":"values fetched" ,"data":result})
    }).catch((err)=>{
        console.log(err)
    })

}


module.exports={connectDb,createTask,viewTasks}