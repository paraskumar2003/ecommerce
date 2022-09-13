import User from "../model/user-schema.js"


export const addToDemand =async (req,res)=>{
    try{
     await User.updateOne({phone:req.body.user.phone},{$push:{cartItems:req.body.id}});
     const user =await User.findOne({phone:req.body.user.phone})
     res.json({response:'ok',data:user});

    }catch(err){
      res.json({response:'error',data:err.message});
    }
}