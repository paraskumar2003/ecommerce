import styled from "@emotion/styled";
import {Box} from "@mui/material";
import { bannerImg } from "../../constant/data";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


const Component = styled(Box)(({theme})=>({
    width:'100%',
    margin:'8px 0'
}))

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Banner = ()=>{

    return<Component>
    <Carousel responsive={responsive} infinite={true} autoPlay={true}
        autoPlaySpeed={2000}
        dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container">
    {bannerImg.map(item => <img src={item} style={{width:'100%',height:280}} alt='banner' />)}
      </Carousel>
    </Component>
}
export default Banner;