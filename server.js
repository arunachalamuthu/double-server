import express from 'express'
import cors from "cors"
import routerPost from "./router/post.js"
import mongoose from "mongoose"
import { fileURLToPath } from 'url'
import path from 'path'
import { dirname } from "path"
const app=express()


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname+'/public/client')))
// app.use(express.static(path.join(__dirname+'/public')))
mongoose.connect('mongodb+srv://muthu:muthu17@cluster0.jp1wrus.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

const db=mongoose.connection

db.on('error',(error)=>{
    console.log(error)
} )
db.once('open',()=>{
    console.log("connect to database ");
})


app.use("/",routerPost)

app.listen(3005,()=>{console.log("start server 3005")})
