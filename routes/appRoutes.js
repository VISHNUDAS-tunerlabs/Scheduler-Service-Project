const express=require('express')
var taskCrud=require('../services/task_CRUD')
var router=express.Router()

//sample rendering
router.get('/',(req,res)=>{
    taskCrud.connectDb()
    res.send('Welcome to nodejs')   
})
router.post('/add',async(req,res)=>{
    await taskCrud.createTask(req)
    res.send('hai')    
})
router.get('/alltask',(req,res)=>{
    taskCrud.viewTasks()
})
/*error handling for invalid routes*/
router.get('*', function (req, res) {
    res.status(404).json({msg:"Invalid route"});
});
router.post('*', function (req, res) {
    res.status(404).json({msg:"Invalid route"});
});


module.exports=router