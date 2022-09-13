
import { Box, Table, TableRow,TableBody,TableCell, Typography } from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';
import { useState } from "react";


const ProductDetails = ({product})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const [E,setE] = useState(false);
    


    return <Box style={{paddingLeft:10}}>
    <Typography style={{fontSize:'1.25rem'}}>
    {product.title.longTitle}
    </Typography>
    <Typography style={{marginTop:5,color:'#878787',fontSize:14}}>
    8 Ratings & 2 Reviews
    </Typography>
    <Typography style={{marginTop:10}}>
    <Box component='span' style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
    <Box component='span' style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
    <Box component='span' style={{color:'#388E3C'}}>{product.price.discount}</Box>
    </Typography>
    <Typography>Available Offers</Typography>
    <Box> 
    <Typography style={{fontSize:14,marginTop:10,display:'flex',alignItems:'center'}}><Badge style={{marginRight:10,color:'var(--root-primary-color)'}}/><Box>Get extra 20% off upto 50 on 1 item(s) T&C</Box></Typography>
    <Typography style={{fontSize:14,marginTop:10,display:'flex',alignItems:'center'}}><Badge style={{marginRight:10,color:'var(--root-primary-color)'}}/><Box>Get extra 13% off (price inclusive of discount)T&C</Box></Typography>
    <Typography style={{fontSize:14,marginTop:10,display:'flex',alignItems:'center'}}><Badge style={{marginRight:10,color:'var(--root-primary-color)'}}/><Box>Pay with Flipkart Later and get a gift card worth ₹1000</Box></Typography>
    <Typography style={{fontSize:14,marginTop:10,display:'flex',alignItems:'center'}}><Badge style={{marginRight:10,color:'var(--root-primary-color)'}}/><Box>Buy 2 items for 5% discount and Buy 3 items for more than 10% discount.</Box></Typography>
    <Typography style={{fontSize:14,marginTop:10,display:'flex',alignItems:'center'}}><Badge style={{marginRight:10,color:'var(--root-primary-color)'}}/><Box>5% Cashback offer with Flipkart Axis Bank Card</Box></Typography>
    </Box>
    <Table>
    <TableBody>
    <TableRow>
    <TableCell style={{border:'none',color:'#878787'}}>Delivery</TableCell>
    <TableCell style={{border:'none',fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
    </TableRow>
    <TableRow>
    <TableCell style={{border:'none',color:'#878787'}}>Warranty</TableCell>
    <TableCell style={{border:'none'}}>No Warranty</TableCell>
    </TableRow>
    <TableRow>
    <TableCell style={{border:'none',color:'#878787'}}>Seller</TableCell>
    <TableCell style={{border:'none'}}>
    <Box style={{color:'#2874f0'}} component='span'>SellerFast</Box>
    <Typography>GST Invoice Available</Typography> 
    <Typography>View more sellers starting from ₹{product.price.cost}</Typography> 
    </TableCell>
    </TableRow>
    <TableRow>
    <TableCell style={{border:'none'}}>Description</TableCell>
    <TableCell style={{border:'none'}}>{product.description}</TableCell>
    </TableRow>
    
    </TableBody>
    </Table>
    </Box>
}
export default ProductDetails;