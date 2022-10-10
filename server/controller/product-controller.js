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
        res.status(200).json(product);
        
    }
    catch(error){
        res.status(500).json(error.message);
    }
}

export const getQuery = async (req,res)=>{
    try{
        const {query}  = req.body;
        const products = await Product.find({$or:[{"title.longTitle":{ $regex:`${query}`,$options:'i' }},{"title.shortTitle":{ $regex:`${query}`,$options:'i' }},{description:{ $regex:`${query}`,$options:'i' }}]});
        res.json({query:query,products: products});
    }catch(error){
console.log(error.message)
    }
}