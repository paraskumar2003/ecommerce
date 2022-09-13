import CartItem from "./CartItem";
import Bill from "./Bill";
import {Box, Button, Grid, styled} from '@mui/material';


const Component = styled(Box)(({theme})=>({
    width:'99%',
}))

const Container = styled(Box)(({theme})=>({
    margin:'0px 4rem',
    padding:'2rem 0',
    display:'flex',
}))

const Cart = ()=>{
    return <Component>
    <Container>
    <Box style={{width:'74%',background:'#fff'}}>
    <Box style={{padding:'1rem'}}>My Container(1)</Box>
    <Box style={{padding:'2rem 1rem 0 2rem'}}>
    <CartItem/>
    </Box>
    <Box style={{padding:'1rem',boxShadow:'0px -2px 10px 0px rgba(0,0,0,0.1)',display:'flex'}}>
    <Button style={{marginLeft:'auto',borderRadius:2,backgroundColor:'var(--root-primary-color)'}} variant="contained">Place Order</Button>
    </Box>
    </Box>
    <Box style={{width:'24%',marginLeft:5,background:'#fff',padding:'1rem'}}><Bill /></Box>
    </Container>
    </Component>
}
export default Cart;