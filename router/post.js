import express from "express"
import postID from "../dataBase/login.js"
import { getPost,getMethod,getMethodName,changePost } from "../connection/post.js";

const router=express.Router()

console.log("start router");

// router.get("/",getMethod)

router.get("/:ID&&:password",getMethodName)

router.post("/create",getPost) 

router.post("/change",changePost) 

router.patch('/:ID', WhatYouWant, async (req, res) => {
  console.log(req.body.password)


  if (req.body.password != null) {
    res.subscriber.password = req.body.password
  }

  try {
    const update = await res.subscriber.save()
    res.json(update)
  }
  catch (err) {
    res.status(400).json({ message: err.message })
  }
})

async function WhatYouWant(req, res, next) {
  let subscriber
  try {

    subscriber = await postID.findOne({ ID: req.params.ID })
    if (postID == null) {
      return res.status(404).json({ message: 'connect find the subscriber' })
    }
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
  res.subscriber = subscriber
  next()

}




export default router