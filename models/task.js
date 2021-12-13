const mongoose=require('mongoose')
const Schema=mongoose.Schema

const taskSchema=new Schema({
    taskname:{
        type:String,
        required:true
    },
    description:{type:String},
    date:{type:Date},
    time:{type:String,required:true},
    repeate:{type:String,required:true},
    finshed:{type:Boolean,default:false}    
})
const Task=mongoose.model('Task',taskSchema)
module.exports=Task;