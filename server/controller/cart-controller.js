import Product from "../model/product-schema.js";
import User from "../model/user-schema.js"


export const addToBag =async (req,res)=>{
    try{
      console.log(req.body);
      const user = await User.findOne({phone:req.body.user.phone})
     if(user){
      let arr = user.cartItems;
      if(arr.includes(req.body.id)){
        res.json({response:'exist',data:user});
      }else{
        arr.push(req.body.id);
        PushId(req.body.id,req.body.user.phone);
        res.json({response:'ok',data:user})
      }
     }

    }catch(err){
      res.json({response:'error',data:err.message});
    }
}

const PushId =async(id,phone)=>{
  try{
    await User.updateOne({phone:phone},{$push:{cartItems:id}});
  }catch(err){
    return err;
  }

}

export const removeFromBag =async (req,res)=>{
try{
  await User.updateOne({phone:req.body.phone},{$pull:{cartItems:req.body.id}});
  const user = await User.findOne({phone:req.body.phone});
  res.json({response:'ok',user:user})
}catch(error){
  res.json({response:'error',user:error.message})
}
}





export const getCartItems = async(req,res)=>{
  try{
    console.log(req.body);
    let user = await User.findOne({phone:req.body.phone});
    let l = (user.cartItems).length;
    console.log(l);
    findItems(user.cartItems,l,res);
  }catch(error){
    res.json(error.message);
  }
}

const findItems =async (e,l,res)=>{
  let Items = [];
await e.forEach(async (id)=>{
  let user = await Product.findOne({id:id});
  await Items.push(user);
  if(Items.length === l){
    console.log(Items);
    res.json(Items);
    return Items;
  }
 });
 if( e.length === 0){
  res.json([]);
 }
}