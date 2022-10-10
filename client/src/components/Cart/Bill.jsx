import { Box, Typography,styled } from "@mui/material";
import { useEffect, useState } from "react";





const StyledBox = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    marginBottom:15
}));

const BillEntries = styled(Typography)(({theme})=>({
    fontSize:14,
    color:'rgba(0,0,0,0.8)',

}))

const Bill = ({products})=>{
    const [price,setPrice]=useState(0);
    const [discount,setDiscount]=useState(0);
    
    useEffect(()=>{
         totalAmount();
    },[products]);

    const totalAmount = ()=>{
        let price=0,discount=0;
        if(products){

        
        products.map(item =>{
            console.log(item);
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
            return 1;
        });
        setPrice(price);
        setDiscount(discount);
        console.log(price);
    }
    }

return <Box>
<Box>
<Typography style={{color:'rgba(0,0,0,0.6)',marginBottom:10}}>PRICE DETAILS</Typography>
<StyledBox>
<BillEntries>Price ({products && products.length } item)</BillEntries>
<BillEntries>₹{price}</BillEntries>
</StyledBox>
<StyledBox>
<BillEntries>Discount</BillEntries>
<BillEntries>-₹{discount}</BillEntries>
</StyledBox>
<StyledBox>
<BillEntries>Coupons for you</BillEntries>
<BillEntries>-₹50</BillEntries>
</StyledBox>
<StyledBox>
<BillEntries>Delivery Charges</BillEntries>
<BillEntries>FREE</BillEntries>
</StyledBox>
<StyledBox style={{width:'100%',backgroundColor:'rgba(0,0,0,0.2)',height:1}}></StyledBox>
<StyledBox>
<Typography>Total Amount</Typography>
<Typography>₹{price-discount -50}</Typography>
</StyledBox>
<Typography style={{color:'green',fontSize:14}}>You will save ₹{discount + 50} on this order.</Typography>
</Box>
</Box>
}
export default Bill;
