import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import path from 'path'
import { dirname } from "path"

const app=express()

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
app.use(express.json())
app.use(cors())



app.get('/',(req,res)=>{
 
    res.send('welcome2')

})




app.listen(3010,()=>{console.log("start server 3010")})
