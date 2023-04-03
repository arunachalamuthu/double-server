// import express from "express"
// import nodemailer from "nodemailer"

// const app=express()

// app.use(express.json())

// // let trans=nodemailer.createTransport({
// //     service:"gmail",
// //     auth:{
// //     user:"muthuvel171998@gmail.com",
// //     password:"arunachalam17"
// //     },
// //     tls:{
// //         rejectUnauthorized:false
// //     }
// // })

// // let mail={
// //     from:"muthuvel171998@gmail.com",
// //     to:"arunachalamuthumariappan@gmail.com",
// //     subject:"Testing",
// //     text:"First Text From Node"
// // }

// // trans.sendMail(mail,function (err,succes){
// //     if(err){
// //         console.log(err)
// //     }else{
// //         console.log("Email sent successfully")
// //     }
// // })

// let transporter = new nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port:  465,
//     auth: {
//         user: 'muthu@incrix.com',
//         pass: 'arunachalam1998'
//     },
//     tls:{
//         rejectUnauthorized: false
//     }
// });

// // send email
// let mail={
//     from: 'muthuvel171998@gmail.com',
//     to: 'arunachalamuthumariappan@gmail.com',
//     subject: 'Test Email Subject',
//     text: 'Example Plain Text Message Body'
// }


// await transporter.sendMail(mail);
// app.get('/',(req,res)=>{

// })
// app.listen(3001,()=>{
//     console.log("server start")
// })


const nodemailer = require('nodemailer');



async function main() {

  let testAccount = await nodemailer.createTestAccount();


  let transporter = nodemailer.createTransport({
    name:"kfjg",
    host: "incrix.com",
    port: 465,
    secure: true,
    auth:{
    user: 'muthu@incrix.com',
    pass: 'arunachalam1998'
    }
  });


  let info = await transporter.sendMail({

    from: 'muthu@incrix.com',
    to: 'arunachalamuthumariappan@gmail.com',
    subject: 'node js',
    htmlToSend: 'Example Plain Text Message Body'

  },function(err,info){
    if(err){
      console.log(err);
    }
    else{
      console.log(info);
    }
  });

  // console.log("Message sent: %s", info.messageId);



  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}

main();