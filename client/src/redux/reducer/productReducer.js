import * as actionTypes from '../constants/productConstants.js';

export const getProductsReducer = (state={products:[]},action)=>{
    switch(action.type){
        

        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {loading:true,products:action.payload}


        case actionTypes.GET_PRODUCTS_FAILURE:
            return {loading:false,products:action.payload}

         default: return state   
    }
}
export const getProductDetailsReducer = (state={product:{}},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAIL_REQUEST:
        return{loading:true}

        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
            return {loading:false,product:action.payload}
         
        case actionTypes.GET_PRODUCTS_FAILURE:
            return {loading:false,product:action.payload};  
         
        default: return state    
    }

}