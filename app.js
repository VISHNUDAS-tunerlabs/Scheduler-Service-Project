/* This is the application entry point. app server is created here */
const express=require('express')
const app=express()
const port=3000

/*sending data*/
app.get('/',(req,res)=>{
    res.send('Welcome to nodejs')
})

/*setting the server*/
app.listen(port,()=>{
    console.log(` app listening at http://localhost:${port}`)
})