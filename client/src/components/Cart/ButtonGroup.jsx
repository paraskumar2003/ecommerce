
import { ButtonGroup, Button, styled, Typography } from "@mui/material";
import { useState } from "react";

const StyledButton = styled(Button)`
border-radius:50%;
border-color:var(--root-primary-color);
background-color:var(--root-primary-color);
color:#fff;`;


const GroupedButton = ()=>{

    const [quantity,setQuantity] = useState(1);

    const handleReduce = ()=>{
        if(quantity>1){
            let num = quantity-1;
            setQuantity(num);
        }
    }

    const handleAdd = ()=>{
            let num = quantity+1;
            setQuantity(num);
    }
    return<ButtonGroup style={{marginTop:10}}>
    <StyledButton style={{backgroundColor:'var(--root-primary-color)',height:30}} onClick={()=>handleReduce()}>-</StyledButton>
    <Button style={{borderColor:'var(--root-primary-color)',color:'var(--root-primary-color)',height:30}}><Typography>{quantity}</Typography></Button>
    <StyledButton style={{backgroundColor:'var(--root-primary-color)',height:30}} onClick={()=>handleAdd()}>+</StyledButton>
    </ButtonGroup>
}
export default GroupedButton;