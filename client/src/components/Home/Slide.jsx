import { Box, Typography, Button,styled } from "@mui/material";
import Countdown from 'react-countdown'
import Caraousel from 'react-multi-carousel';
import {Link} from 'react-router-dom';

const Component = styled(Box)(({theme})=>({
    backgroundColor:'#fff',
    padding:'8px 16px',
    margin:'8px 8px',
    
}))

const SlideHead = styled(Box)(({theme})=>({
 justifyContent:'space-between',
 alignItems:'end',
 padding:'0px 24px 8px 0px',
 borderBottom:'1px solid rgba(0,0,0,0.1)'
}));

const ViewAll = styled(Button)(({theme})=>({
    padding:'3px 20px',
    fontWeight:500,
    letterSpacing:1,
    backgroundColor:'var(--root-primary-color)',
    height:40,
}));
const SlideTitle = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
}))
const LeftComponent = styled(Box)(({theme})=>({

}))
const Text = styled(Typography)`
  font-size:14px;
  margin-top:5px;
  `;
const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Slide = ({products,title,timer})=>{
    return <Component>
    <LeftComponent>
    <SlideHead style={{display:'flex'}}>
    <SlideTitle>
    <Typography style={{fontSize:'1.375rem',padding:'0px 24px 0px 0px',fontWeight:600}}>{title}</Typography>
    {
        timer && <Countdown style={{color:'rgba(0,0,0,0.6)'}} date={new Date(
            1661754313980 + 86400000)}  />
    }
    </SlideTitle>
    <ViewAll style={{backgroundColor:'var(--root-primary-color)'}}  variant='contained'>View All</ViewAll>
    </SlideHead>
    <Box>
    <Caraousel responsive={responsive}
    draggable={true}
    swipeable={true}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    centerMode={true}
    dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  containerClass="carousel-container">
  
  {
    products.map(product =>(
      <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>
      <Box textAlign='center' style={{padding:'1rem 0'}}>
      <img style={{width:130,height:130}} src={product.url} alt='product'/>
      <Text style={{color:'#212121',fontWeight:600}}>{product.title.shortTitle}</Text>
      <Text style={{color:'var(--root-primary-color)'}}>{product.discount}</Text>
      <Text style={{color:'#212121',opacity:'0.6'}}>{product.tagline}</Text>
      </Box>
      </Link>
      ))
  }
    </Caraousel>
    </Box>
    </LeftComponent>
    <Box></Box>
    </Component>;
}
export default Slide;