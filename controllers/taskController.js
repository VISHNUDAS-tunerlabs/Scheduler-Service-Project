const mongoose=require('mongoose')
const Task=require('../models/task')

var render_home=async(req,res)=>{
    res.send("Task Scheduler Nodejs Application")
}

var add_task=async(req,res)=>{
    try{
        const task=await new Task(req.body)
        await task.save()
        res.status(200).json({"msg":"success"})
    }catch(err){
        res.status(404).json({"msg":err})
    }
}

var view_task=async(req,res)=>{
    Task.find().then((result)=>{
        console.log(result)
        res.status(200).send(result)
    }).catch((err)=>{
        res.status(404).send(err)
    })
}

var update_task=async(req,res)=>{
    try{
        const newtask=await Task.findById(req.params.id)
        Object.assign(newtask,req.body)
        newtask.save()
        res.send({"data":newtask})
    }catch(err){
        res.status(404).send(err)
    }
    
}

var delete_task=async(req,res)=>{
    try{
        const taskdel=await Task.findById(req.params.id)
        await taskdel.remove()
        res.send({"data":true})
    }catch(err){
        res.status(404).send(err)
    }
    
}
module.exports={
    render_home,
    add_task,
    view_task,
    update_task,
    delete_task
}