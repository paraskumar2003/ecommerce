import { Box, Button, styled, Typography } from "@mui/material";
import GroupedButton from "./ButtonGroup";
import { DataContext } from "../../context/Dataprovider";
import { useContext } from "react";
import {removeFromBag} from "../../service/api";



const Component = styled(Box)(({theme})=>({
    padding:'25px 20px',
    borderBottom:'1px solid rgba(0,0,0,0.1)'
}))
const Image = styled('img')`
height:100px;
object-fit:cover;
`;


const CartItem = ({product,setAcc})=>{
    const RemoveFromBag =async (data)=>{
        let response = await removeFromBag(data);
        if(response.data.response==='ok'){
            setAcc(response.data.user);  
                   
        }
    }

    const {acc} = useContext(DataContext);
    return<Component>
    <Box>
    <Box style={{display:'flex'}}>
     <Box style={{display:'flex',alignItems:'flex-start',flexDirection:'column',width:'12%',marginRight:10}}>
     <Image src={product.url} alt="cartItem" />
     <Box style={{textAlign:'center',margin:'0 auto'}}><GroupedButton style={{width:'80%'}}/></Box>
     </Box>
    <Box style={{padding:'0 1rem',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
    <Typography style={{fontSize:'1.25rem'}}>{product.title.shortTitle}</Typography>
    <Box component='span' style={{fontSize:14,fontWeight:400,color:'rgba(0,0,0,0.6)'}}>SellerFast</Box>
    <Typography style={{marginTop:10}}>
    <Box component='span' style={{fontSize:'1.25rem'}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
    <Box component='span' style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
    <Box component='span' style={{color:'#388E3C'}}>-{product.price.discount}</Box>
    </Typography>
    <Box style={{marginTop:15}}>
    <Button variant='contained' style={{background:'var(--root-primary-color)',fontSize:14,marginRight:20,padding:'3px 15px'}}>Buy Now</Button>
    <Button variant='contained' style={{color:'var(--root-primary-color)',background:'#fff',fontSize:14,padding:'3px 15px'}}
    onClick={()=>RemoveFromBag({id:product.id,phone:acc.phone})}
    >Remove from Bag</Button>
    </Box>
    </Box>
    </Box>
    </Box>
    </Component>
}

export default CartItem;