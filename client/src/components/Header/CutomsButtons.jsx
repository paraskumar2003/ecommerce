import {LocalShipping as Cart,Notifications as Bell} from '@mui/icons-material';
import { Box,styled, Button, Typography } from '@mui/material';
import LoginDialog from '../Login/LoginDialog';
import { useState } from 'react';


const Wrapper = styled(Box)(({theme})=>({
    display:'flex',
    width:'450px',
    alignItems:'center'
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
}));

const Username = styled(Button)`
color:#fff;
text-transform:none;
font-size:1rem;

`


const CustomButton = ()=>{
    const [open,setOpen] = useState(false);

    const [user,setUser] = useState({});

    const handleClick = ()=>{
        setOpen(true);
    }
return<Wrapper>
{
    user.name ? <Username>{user.name}</Username> :
    <LoginButton onClick={()=>handleClick()} style={{background:'#fff'}} variant='contained'>Login</LoginButton>
}
<SellerButton>Become a Seller</SellerButton>
<Box style={{marginLeft:'auto'}}>
<Cart style={{padding:'3px 8px',fontSize:24,}} />
<Bell style={{padding:'3px 8px',fontSize:24}}/>
</Box>
<LoginDialog open={open} setOpen={setOpen} setUser={setUser}/>
</Wrapper>;
}
export default CustomButton;