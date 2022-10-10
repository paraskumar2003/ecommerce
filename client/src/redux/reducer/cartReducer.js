import * as actionTypes from '../constants/cartConstants';

export const getCartItemsReducer = (state={products:[]},action)=>{
    switch(action.type){
        case actionTypes.GET_CART_ITEMS_REQUEST:
            return {loading:true}

        case actionTypes.GET_CART_ITEMS_SUCCESS:
            return {loading:false,products:action.payload}    
         
        case actionTypes.GET_CART_ITEMS_FAILURE:
            return {loading:true,products:action.payload}
         
        default: return state;     
    }

}
