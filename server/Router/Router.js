import express from 'express';
import { userlogin,userVerify, userRegister } from '../controller/user-controller.js';
import { getProducts,getProductById, getQuery } from '../controller/product-controller.js';
import { addToBag,removeFromBag, getCartItems } from '../controller/cart-controller.js';


const Router = express.Router();

Router.post('/login',userlogin);
Router.post('/verify',userVerify);
Router.post('/register',userRegister);
Router.post('/addToBag',addToBag);
Router.post('/removeFromBag',removeFromBag);
Router.get('/product/:id',getProductById);

Router.get('/products',getProducts);
Router.post('/cart',getCartItems);
Router.post('/getQuery',getQuery);
Router.get('/e',()=>{res.send('Hello')});

export default Router;