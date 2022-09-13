import axios from 'axios';
import * as actionTypes from '../constants/productConstants.js';


const URL = 'http://localhost:8000';
export const getProducts = ()=>async(dispatch)=>{
    try{
        const {data} = await axios.get(`${URL}/products`);
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data})
    }catch(error){
        console.log(error.message);
          dispatch({type:actionTypes.GET_PRODUCTS_FAILURE,payload:error.message})
    }
}

export const getProductDetails = (id) =>async(dispatch)=>{
    try{

        dispatch({type:actionTypes.GET_PRODUCT_DETAIL_REQUEST});
        console.log(`${URL}/product/${id}`);
        const {data} = await axios.get(`${URL}/product/${id}`);
        dispatch({type:actionTypes.GET_PRODUCT_DETAIL_SUCCESS,payload:data});
    }catch(error){
        dispatch({type:actionTypes.GET_PRODUCT_DETAIL_FAILURE,payload:error.message});
    }
}
