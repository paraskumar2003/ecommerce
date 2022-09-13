import express from 'express';
import { userlogin,userVerify, userRegister } from '../controller/user-controller.js';
import { getProducts,getProductById } from '../controller/product-controller.js';
import { addToDemand } from '../controller/cart-controller.js';


const Router = express.Router();

Router.post('/login',userlogin);
Router.post('/verify',userVerify);
Router.post('/register',userRegister);
Router.post('/addToDemand',addToDemand);
Router.get('/product/:id',getProductById);

Router.get('/products',getProducts);

export default Router;