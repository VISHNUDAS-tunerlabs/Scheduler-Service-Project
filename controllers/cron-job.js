const mongoose=require('mongoose')
const Task=require('../models/task')

var taskCron=()=>{
    Task.find({},(err,remainderList)=>{
        if(err){
            console.log(err)
        }
        if(remainderList){
            if(remainderList){
                remainderList.forEach(task=>{
                    if(!task.finished){
                        const now=new Date()
                        const remindAt=now.toLocaleTimeString
                        if(new Date(task.date)===now && task.time===remindAt){
                            task.findByIdAndUpdate(task._id,{finished:true},(err,remindObj)=>{
                                if(err){
                                    console.log(err)
                                }else{
                                    console.log(remindObj)
                                }
                            })
                        }
                    }
                })
            }
        }
    })
    //console.log('cron task is running')
}
module.exports={taskCron}