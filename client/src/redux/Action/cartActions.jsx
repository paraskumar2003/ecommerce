import axios from 'axios';
import * as actionTypes from '../constants/cartConstants.js';


const URL = 'http://localhost:8000';
export const getCartItems = (id)=>async(dispatch)=>{
    try{
        dispatch({type:actionTypes.GET_CART_ITEMS_REQUEST})
        const {data} = await axios.post(`${URL}/cart`,id);
        console.log(data);
        dispatch({type:actionTypes.GET_CART_ITEMS_SUCCESS,payload:data})  
    }catch(error){
          dispatch({type:actionTypes.GET_CART_ITEMS_FAILURE,payload:error.message})
    }
}


