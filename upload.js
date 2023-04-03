import express from 'express'
import cros from 'cors'
// import multer from 'multer'
console.log('dcfvgbhn');
let app=express()

app.use(express.json())
app.use(cros())
app.get('/',(req,res)=>{

    res.send('upload image')
})

app.post('/',(req,res)=>{
    res.send('loading image')
})

app.listen(3001,()=>{
    console.log("running server");
})