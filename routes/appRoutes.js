const express=require('express')
var taskCrud=require('../services/task_CRUD')
var router=express.Router()

//sample rendering
router.get('/',(req,res)=>{
    taskCrud.connectDb()
    res.send('Welcome to nodejs')   
})

//api routes
router.post('/add',taskCrud.createTask)
router.get('/alltasks',taskCrud.viewAlltasks)




/*error handling for invalid routes*/
router.get('*', function (req, res) {
    res.status(404).json({msg:"Invalid route"});
});
router.post('*', function (req, res) {
    res.status(404).json({msg:"Invalid route"});
});


module.exports=router