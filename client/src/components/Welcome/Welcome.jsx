import { Box, styled } from "@mui/material";

const Component = styled(Box)`
position:absolute;
top:0;
height:100vh;
width:100%;
z-index:1111;
background:#fff;
display:flex;
place-items:center;
justify-content:center;
align-items:center;
`

const Welcome = ()=>{

    return <Component data-aos='fade-in'>
    <img style={{width:100}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIKllja9ypDAIYMRNv6twRAvvNNJXIjInI2owtCQ&s" alt='Welcome' />
    </Component>
}
export default Welcome;