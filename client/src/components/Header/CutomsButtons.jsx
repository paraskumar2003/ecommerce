import {Notifications as Bell,ShoppingBag as Cart} from '@mui/icons-material';
import { Box,styled, Button, Typography } from '@mui/material';
import LoginDialog from '../Login/LoginDialog';
import { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import {DataContext} from '../../context/Dataprovider';
import {Badge} from '@mui/material';


const Wrapper = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    [theme.breakpoints.down('md')]:{
        position:'fixed',
        right:5
    }
}))

const LoginButton = styled(Button)(({theme})=>({
    background:'#fff',
    padding:'3px 30px',
    borderRadius:2,
    fontSize:'1rem',
    marginLeft:24,
    letterSpacing:1,
    textTransform:'capitalize',
    color:'var(--root-primary-color)',
    fontWeight:600,
}))

const SellerButton = styled(Typography)(({theme})=>({
    padding:'3px 24px',
    color:'#fff',
    [theme.breakpoints.down('md')]:{
        display:'none',
    }
}));

const CartButton = styled(Cart)(({theme})=>({
    padding:'3px 8px',
    marginRight:10,
    color:'#fff',
    [theme.breakpoints.down('md')]:{
        fontSize:32,
    }
}))

const BellIcon = styled(Bell)(({theme})=>({
    padding:'3px 8px',
    fontSize:24,
    color:'#fff',
    [theme.breakpoints.down('md')]:{
        display:'none',
    }
}))

const Username = styled(Button)`
color:#fff;
text-transform:none;
font-size:1rem;

`


const CustomButton = ()=>{
    const [mobile,setMobile] = useState(false);
    setInterval(()=>{const Dom = document.getElementById('root').getBoundingClientRect().width;
    if(Dom < 768){
        setMobile(true);
    }
})
    const [open,setOpen] = useState(false);
    const {acc}=useContext(DataContext);

    const handleClick = ()=>{
        setOpen(true);
    }
 return<Wrapper>
 {
    acc.name ? <Username>{acc.name}</Username> :
    <LoginButton onClick={()=>handleClick()} style={{background:'#fff'}} variant='contained'>Login</LoginButton>
 }
 <SellerButton>Become a Seller</SellerButton>
 <Box style={{marginLeft:'auto'}}>
 <Link style={{color:'inherit',marginLeft:'auto'}} to={'/cart'}>
 <CartButton />
  </Link>
 <BellIcon/>
 </Box>
 <LoginDialog open={open} setOpen={setOpen}/>
 </Wrapper>;



};

export default CustomButton;

    