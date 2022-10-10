import CartItem from "./CartItem";
import Bill from "./Bill";
import {Box, Button, styled} from '@mui/material';
import {getCartItems} from "../../redux/Action/cartActions";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {DataContext} from "../../context/Dataprovider";
import { useContext } from "react";
import {authenticateLogin} from "../../service/api";
import {Login} from "@mui/icons-material";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import Header from "../Header/Header";


const Component = styled(Box)(({theme})=>({
    width:'99%',
}))

const Container = styled(Box)(({theme})=>({
    margin:'0px 4rem',
    padding:'2rem 0',
    display:'flex',
}))


const Cart = ({auth,setAuth})=>{

    const { products } = useSelector(state => state.getCartItems);
    const [empty,setEmpty] = useState(false);
     useEffect(()=>{
        if(products){

            if(products.length === 0){
                setEmpty(true)
            }else{
                setEmpty(false);
            }
        }
     },[products]);

    const {acc,setAcc} = useContext(DataContext);
    return<Box>
    <Header />
    <Component>
    
    {
        empty ? <EmptyCart /> : <Container container>
            <Box item lg={9} md={9} sm={12} xs={12} style={{width:'74%',background:'#fff'}}>
            <Box style={{padding:'1rem',borderBottom:'1px solid rgba(0,0,0,0.1)'}}>My Bag ({products && products.length})</Box>
            <CartItems auth={auth} />
            <Box style={{padding:'1rem',boxShadow:'0px -2px 10px 0px rgba(0,0,0,0.1)',display:'flex'}}>
            <Button style={{marginLeft:'auto',borderRadius:2,backgroundColor:'var(--root-primary-color)'}} variant="contained">Place Order</Button>
            </Box>
            </Box>
            <Box  style={{width:'24%',marginLeft:5,background:'#fff',padding:'1rem'}}><Bill products={products} /></Box>
            </Container>
        }
        
        </Component>
        </Box>
}
export default Cart;