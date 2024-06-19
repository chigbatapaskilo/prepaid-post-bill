const express=require("express")
const mongoose =require("mongoose")
require("dotenv").config() 
const port=process.env.port
const app=express()
const router= require("./router/userRouter")

app.use(express.json())

app.use(router)




mongoose.connect(process.env.database).then(()=>{
    console.log(`Connection to database is successful`),
    app.listen(port,()=>{
        console.log(`my app is up and running on port ${port}`)
    })
}).catch((error)=>{
    console.log(`unable to connect to database because  ${error} `)
})
