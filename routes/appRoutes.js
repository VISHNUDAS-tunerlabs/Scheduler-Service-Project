const express=require('express')
var router=express.Router()

//sample rendering
router.get('/',async(req,res)=>{
    res.send('Welcome to nodejs')   
})
module.exports=router