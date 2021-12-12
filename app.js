/* This is the application entry point. app server is created here */
const express=require('express')
const bodyParser=require('body-parser')
const routes=require('./routes/appRoutes')
const app=express()
const port=3000

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/*setting middleware connection to routes*/
app.use('/',routes)


/*setting the server*/
app.listen(port,()=>{
    console.log(` app listening at http://localhost:${port}`)
})