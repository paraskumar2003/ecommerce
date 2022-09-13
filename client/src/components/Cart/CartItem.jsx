import { Box, Button, styled, Typography } from "@mui/material";
import GroupedButton from "./ButtonGroup";



const Component = styled(Box)(({theme})=>({

}))
const Image = styled('img')`
width:100%;
margin:0 auto;
padding:5px;
height:100%;
min-height:130px;
object-fit:cover;
`;


const CartItem = ()=>{
    return<Component>
    <Box>
    <Box style={{display:'flex'}}>
     <Box style={{display:'flex',alignItems:'flex-start',flexDirection:'column',width:'12%'}}>
     <Image src='https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70' alt="cartItem" />
     <Box style={{textAlign:'center',margin:'0 auto'}}><GroupedButton style={{width:'80%'}}/></Box>
     </Box>
    <Box style={{padding:'0 1rem'}}>
    <Typography style={{fontSize:'1.25rem'}}>Product Title</Typography>
    <Box component='span' style={{fontSize:14,fontWeight:400,color:'rgba(0,0,0,0.6)'}}>SellerFast</Box>
    <Typography style={{marginTop:10}}>
    <Box component='span' style={{fontSize:'1.25rem'}}>₹254</Box>&nbsp;&nbsp;&nbsp;
    <Box component='span' style={{color:'#878787'}}><strike>₹254</strike></Box>&nbsp;&nbsp;&nbsp;
    <Box component='span' style={{color:'#388E3C'}}>-40%</Box>
    </Typography>
    <Box style={{marginTop:15}}>
    <Button variant='contained' style={{background:'var(--root-primary-color)',fontSize:12,marginRight:20}}>Buy Now</Button>
    <Button variant='contained' style={{color:'var(--root-primary-color)',background:'#fff',fontSize:12}}>Remove from Cart</Button>
    </Box>
    </Box>
    </Box>
    </Box>
    </Component>
}

export default CartItem;