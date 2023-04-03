
import postID from "../dataBase/login.js"

export const changePost = async (req, res) => {

  const { ID, password } = req.body;

  let contact = await postID.findOne({ ID: ID });

  if (contact !== null) {
    // function call
    let change1 = change(contact, req.body.change)
    const update = change1
    res.json(update)
    console.log(update)
  }
  else {

    let contact = await postID({ ID, password });
    const finish = contact.save()
    res.json(finish);
  }

}
async function change(contact,passeord) {
  console.log('change')
  let edit = contact
  edit.password = passeord
  const update = await edit.save()
  return update
}
 
export const  getPost = async(req,res)=>{
  // const ID=req.params.ID 
  // const password=req.params.password
  // console.log(ID);
  // let find= await postID.findOne({ID:ID,password:password})
  // if(find){
     
  // res.json([find])
  // }
  // else{
  //   res.json({message:"you dont have accout"})
  // }
  const { ID, password } = req.body;
  if(ID||password){
  let contact = await postID({ ID, password });
  const finish = contact.save()
  res.json(finish);
  }
}

export const getMethodName = async(req,res)=>{
  const ID=req.params.ID 
  const password=req.params.password
  console.log(ID);
  let find= await postID.findOne({ID:ID,password:password})
  if(find){
  res.json([find])
  }
  else{
    res.json({message:"you dont have accout"})
  }
}

export const getMethod = async(req,res)=>{
  let find= await postID.find()
  res.json([find])
}




// export const getPost = async (req, res) => {

//   const { ID, password } = req.body;

//   let contact = await postID.findOne({ ID: ID });

//   if (contact !== null) {
//     // function call
//     let change1 = change(contact, req.body.password)
//     const update = change1
//     res.json(update)
//     console.log(update)
//   }
//   else {

//     let contact = await postID({ ID, password });
//     const finish = contact.save()
//     res.json(finish);
//   }

// }

// async function change(contact,passeord) {
//   console.log('change')
//   let edit = contact
//   edit.password = passeord
//   const update = await edit.save()
//   return update
// }