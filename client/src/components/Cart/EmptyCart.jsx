import { Box, Image } from "@mui/material";



const EmptyCart = ()=>{
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    return <Box style={{width:'100%',}}>
    <Box style={{maxWidth:1200,width:'100%',margin:'0 auto',padding:'15vh 0',backgroundColor:'#fff',display:'flex',justifyContent:'center'}}>
    <img src={imgurl} style={{margin:'0 auto',width:400}} alt='empty-cart icon'/>
    </Box>
    </Box>
}
export default EmptyCart;