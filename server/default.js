import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

const defaultData = async()=>{
    try{
        await Product.insertMany(products);
        console.log("Data imported");
    }catch(error){
        console.log(error.message);
    }
}

export default defaultData;