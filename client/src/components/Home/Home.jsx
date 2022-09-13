import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Banner from "./Banner";
import SlideWithAd from "./SlideWithAd";
import Slide from "./Slide";
import {useSelector,useDispatch} from 'react-redux';
import {getProducts} from '../../redux/Action/productActions';
import { useEffect } from "react";




const Home = ()=>{
    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

   useEffect(()=>{
     dispatch(getProducts())
   },[dispatch])

 



return<Box>
<Navbar />
<Banner />
<SlideWithAd products={products} title={'Deal of the day'} timer={true}/>
<Slide products={products} title={'Best Deals for You'} timer={false} />
<Slide products={products} title={'Recommended for You'} timer={false} />
</Box>;
}
export default Home;