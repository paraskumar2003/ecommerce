import {AppBar, Toolbar, styled,Box, Typography,} from '@mui/material';
import CustomButton from './CutomsButtons';
import {Link} from 'react-router-dom';


import Profile from './Profile';

import SearchComponent from './Search'
const StyledHeader = styled(AppBar)`
background:var(--root-primary-color);
position:sticky;`;

const Component = styled(Box)(({theme})=>({
    maxWidth:'1200px',
    width:'100%',
    margin:'0 auto',
    display:'flex',
    alignItems:'center',
}));

const Logo = styled(Typography)(({theme})=>({
    fontSize:'1.5rem',
    letterSpacing:1,
    color:'#fff',
    padding:'3px 24px 3px 3px',
    lineHeight:1,
}))




const Header = ()=>{
    return<StyledHeader>
    <Toolbar>
    <Component>
    <Link style={{textDecoration:'none'}} to={'/'}>
    <Logo>Miira<Box component='span'>Lights</Box></Logo>
    </Link>
    <SearchComponent />
    
    
    <Profile />
    <CustomButton/>

    
    </Component>
    </Toolbar>
    </StyledHeader>;
}
export default Header;
