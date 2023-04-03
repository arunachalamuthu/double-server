import mongoose from "mongoose";

const schema= new mongoose.Schema({

    ID:{
        type:String,
        required:true
    },
  

    password:{
        type:String,
        required:true
    }
    

})

const postID =mongoose.model('login',schema)

export default postID;
// module.exports =mongoose.model('login',schema)