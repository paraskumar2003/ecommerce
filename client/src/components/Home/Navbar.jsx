import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { navbarImages } from "../../constant/data";


const Wrapper = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    width:'80%',
    margin:'0 auto',
    padding:'1rem 0 8px'
}))

const Item = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'space-between',

}))


const Navbar = ()=>{

    return <Box style={{width:'100%',backgroundColor:'#fff'}}>
    <Wrapper>
     {
        navbarImages.map(type =>
            <Item>
            <img style={{width:'70px',height:'70px'}} src={type.img} alt="product" />
            <Typography style={{fontWeight:500,letterSpacing:1,fontSize:14,padding:'6px 0 0', color:'var(--root-dark-pink-color)'}}>{type.name}</Typography>
            </Item>)
     }
    </Wrapper>
    </Box>;
}

export default Navbar;