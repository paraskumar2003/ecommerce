import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { navbarImages } from "../../constant/data";


const Wrapper = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    width:'80%',
    margin:'0 auto',
    padding:'1rem 0 8px',
    [theme.breakpoints.down('md')]:{
        width:'100%',
        overflowX:'scroll',

    }
}))

const Item = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]:{
        marginRight:25,
        width:150,
        padding:'5px 10px',
    }

}))

const Text = styled(Typography)(({theme})=>({
    fontWeight:500,
    textAlign:'center',
    letterSpacing:1,fontSize:14,
    padding:'6px 0 0',
    color:'var(--root-primary-color)',
    [theme.breakpoints.down('md')]:{
        width:80,
    }
}))


const Navbar = ()=>{

    return <Box style={{width:'100%',backgroundColor:'#fff'}}>
    <Wrapper>
     {
        navbarImages.map(type =>
            <Item>
            <img style={{width:'70px',height:'70px'}} src={type.img} alt="product" />
            <Text>{type.name}</Text>
            </Item>)
     }
    </Wrapper>
    </Box>;
}

export default Navbar;