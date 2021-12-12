/* This is the application entry point. app server is created here */
const express=require('express')
const bodyParser=require('body-parser')
const routes=require('./routes/appRoutes')
const app=express()
const mongoose=require('mongoose')
const port=3000

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

mongoose.connect("mongodb://localhost:27017/taskSheduler",(err)=>{
    if(!err){
        console.log("yea")
    }
    else{
        console.log("badd")
    }
})

/*setting middleware connection to routes*/
app.use('/',routes)


/*setting the server*/
app.listen(port,()=>{
    console.log(` app listening at http://localhost:${port}`)
})