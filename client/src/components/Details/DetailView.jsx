import {Box,Grid, styled} from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetails from "./ProductDetails";
import { Params, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductDetails} from "../../redux/Action/productActions";
import { useEffect } from "react";


const Component = styled(Grid)(({theme})=>({
    padding:'2rem 0px',
    margin:'0 8px',
    backgroundColor:'#fff',
}))

const DetailView = ()=>{

    const {id} = useParams();

    const {product}= useSelector(state=>state.getProductDetails);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProductDetails(id));
       },[dispatch,id]);

   

    return<Box style={{width:'99%',backgroundColor:'#f2f2f2'}}>{
        product && Object.keys(product).length && <Component container>
    <Grid item lg={4} md={4} sm={12} xs={12}>
    <ActionItem product={product} />
    </Grid>
    <Grid item lg={8} md={4} sm={12} xs={12}>
    <ProductDetails product={product} />
    </Grid>
    </Component>}
    </Box>
}
export default DetailView;