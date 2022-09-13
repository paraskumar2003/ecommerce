import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    category:String,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String,
    review:Object,
})

const Product = mongoose.model("Product",productSchema);

export default Product;