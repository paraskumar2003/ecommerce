import CartItem from "./CartItem";
import { Box } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import { useContext,useEffect } from "react";
import { getCartItems } from "../../redux/Action/cartActions";
import { DataContext } from "../../context/Dataprovider";





const CartItems = ({auth})=>{


    const { products } = useSelector(state => state.getCartItems);
    const dispatch = useDispatch();

    const {acc,setAcc} = useContext(DataContext);

   useEffect(()=>{
    if(auth){
        dispatch(getCartItems(acc));
    }
   },[dispatch,auth,acc]);

    return <Box>
    {products && products.map(product => <CartItem setAcc={setAcc} product={product}/>)}
    </Box>;
}
export default CartItems;