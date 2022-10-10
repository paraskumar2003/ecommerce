import User from "../model/user-schema.js";
import bcrypt from 'bcryptjs';


export const userlogin =async(req,res)=>{
    try{
       await User.findOne({phone:req.body.username},async(err,found)=>{
        if(found){
          if ((req.body.password).length > 25){
            if(req.body.password === found.password){
              res.json({data:'ok',user:found});
            }
          }else{
            const user = await bcrypt.compare(req.body.password,found.password);
          if(user){
            res.json({data:'ok',user:found});
          }
          }
        }else{
          res.json({data:'invalid login'});
        }
      });
    }catch(error){
        return error.response;
    }
}

export const userVerify = async (req,res)=>{
  try{
    console.log(req.body);
      const exist = await User.findOne({phone:req.body.phone})
      if(exist){
        res.json({data:'exist'});
      }else{
        User.create({phone:req.body.phone});
        res.json({data:'ok',phone:req.body.phone});
      }
  }catch(error){
        res.json({data:err.message});
  }
}

export const userRegister = async (req,res)=>{
  try{
    const Password = await bcrypt.hash(req.body.password,10);
 await User.updateOne({phone:req.body.phone},{
        name:req.body.name,
        email:req.body.email,
        password:Password,
 });
 let user = await User.findOne({phone:req.body.phone})
  res.json({status:'ok',user:user});

}
  catch(error){
    res.json({status:error.message});
  }
}
