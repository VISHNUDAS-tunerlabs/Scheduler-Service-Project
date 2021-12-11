/*Document aim: Defining database schema for mongodb*/
const mongoose=require('mongoose')

/*schema for storing jobs*/
const jobsSchema=new mongoose.Schema({
    jobName:{
        type:String,
        required:true
    },
    jobDescription:{
        type:String
    },
    date:{
        type:Date
    },
    timeOfjob:{
        type:Number
    },
    repeateMode:{
        type:String
    },
    taskStatus:{
        type:Boolean,
        default:false
    }
})
const model=mongoose.model('jobsModel',jobsSchema)
module.exports=model
/*Developer note:- schema may need updation with respect to the cron-npm-module */