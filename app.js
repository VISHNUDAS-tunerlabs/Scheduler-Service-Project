/* This is the application entry point. app server is created here */
const express=require('express')
const bodyParser=require('body-parser')
const routes=require('./routes/taskRoutes')
const app=express()
const mongoose=require('mongoose')
const port=3000
const URI=require('./config/config')
const URL=URI.url

mongoose.connect(URL)
mongoose.Promise=global.Promise

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/',routes)

app.listen(port,()=>{
    console.log(` app listening at http://localhost:${port}`)
})

