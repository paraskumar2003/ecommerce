import Product from "../model/product-schema.js"


export const getProducts =async (req,res)=>{
    try{
        const product = await Product.find({});
        res.json(product)
    }catch(error){
        res.json(error.message)
    }
    
}
export const getProductById = async (req,res)=>{
    try{
        const id = req.params.id;
        const product = await Product.findOne({'id':id});
        console.log(product);
        res.status(200).json(product);
        
    }
    catch(error){
        res.status(500).json(error.message);
    }
}