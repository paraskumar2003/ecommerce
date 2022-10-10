import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Banner from "./Banner";
import SlideWithAd from "./SlideWithAd";
import Slide from "./Slide";
import {useSelector,useDispatch} from 'react-redux';
import {getProducts} from '../../redux/Action/productActions';
import { useEffect} from "react";
import Header from "../Header/Header";




const Home = ()=>{
    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

   useEffect(()=>{
     dispatch(getProducts())
   },[dispatch])








return<Box data-aos="fade-in" data-aos-delay="300">
<Header />
<Navbar />
<Banner />
<SlideWithAd products={products} title={'Deal of the day'} timer={true}/>

</Box>;
}
export default Home;