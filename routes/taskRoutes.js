const express=require('express')
var tasks=require('../controllers/taskController')
var router=express.Router()

router.get('/',tasks.render_home)
router.post('/add',tasks.add_task)
router.get('/alltasks',tasks.view_task)
router.patch('/taskupdate/:id',tasks.update_task)
router.delete('/deletetask/:id',tasks.delete_task)


module.exports=router