import { Toolbar, styled,Box, Typography,} from '@mui/material';
import { useState } from 'react';
import CustomButton from './CutomsButtons';
import {Link} from 'react-router-dom';
import ActiveSearch from './ActiveSearchField';


import Profile from './Profile';

import SearchComponent from './Search'
const StyledHeader = styled('header')(({theme})=>({
    width:'100%',
    height:60,
    backgroundColor:'var(--root-primary-color)',
    position:'sticky',
    top:0,
    zIndex:'1111',
    [theme.breakpoints.down('md')]:{
        display:'flex',
    }
}))

const Component = styled(Box)(({theme})=>({
    maxWidth:'1200px',
    width:'100%',
    margin:'0 auto',
    display:'flex',
    alignItems:'center',
    [theme.breakpoints.down('md')]:{
        display:'flex',
    }
}));

const Logo = styled(Typography)(({theme})=>({
    fontSize:'1.5rem',
    letterSpacing:1,
    color:'#fff',
    padding:'3px 24px 3px 3px',
    lineHeight:1,
}))






const Header = ()=>{

    const [search,setSearch] = useState(false)
    return<StyledHeader className='header'>
    {
        search ? <ActiveSearch setSearch={setSearch}/> : <Toolbar>
        <Component>
        <Link style={{textDecoration:'none'}} to={'/'}>
        <Logo>Miira<Box component='span'>Lights</Box></Logo>
        </Link>
        <SearchComponent setSearch={setSearch} />
       
        
        
        <Profile />
        <CustomButton/>
    
        
        </Component>
        </Toolbar>
    }
    
    </StyledHeader>;
}
export default Header;
