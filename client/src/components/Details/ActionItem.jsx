import {Box, styled, Button} from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";
import { addToBag,removeFromBag } from "../../service/api";

const ImageWrapper = styled(Box)(({theme})=>({
    padding:'1rem 3rem',
    maxWidth:'400px',
    [theme.breakpoints.down('md')]:{
        margin:'auto'
    }

}))
const Image = styled('img')(({theme})=>({
    width:'100%',
    margin:'0 auto',
    borderRadius:2,
}))

const ButtonContainer = styled(Box)(({theme})=>({
    [theme.breakpoints.down('md')]:{
        margin:'auto',
    },
    padding:'0 3rem',

}))
const ButtonWrapper = styled(Box)(({theme})=>({
padding:'1rem 0rem',
width:'100%',
display:'flex',
justifyContent:'space-between',
}))

const StyledButton = styled(Button)`
color:'#fff';
width:180px;
font-size:1rem;
letter-spacing:1px;
padding:8px 8px;
`;




const ActionItem = ({product,setAlert})=>{
    const {acc,setAcc} = useContext(DataContext);

    const AddToDemand =async ()=>{
        let response = await addToBag({id:`${product.id}`,user:acc});
        if(response.data.response === 'ok'){
            setAcc(response.data.data);
            setAlert({state:true,severity:'success',message:'Item added to Bag'});
        }else if(response.data.response === 'exist'){
            setAlert({state:true,severity:'warning',message:'Item Already In Bag'});
        }
    }

return <Box>
<ImageWrapper>
<Image  src={product.detailUrl} alt="product" />
</ImageWrapper>
<ButtonContainer>
<ButtonWrapper>
<StyledButton style={{color:'var(--root-primary-color)',backgroundColor:'#fff'}} variant="contained" onClick={()=>AddToDemand()}>Add To Demand</StyledButton>
<StyledButton style={{backgroundColor:'var(--root-primary-color)',color:'#fff'}} variant="contained">Order Now</StyledButton>
</ButtonWrapper>
</ButtonContainer>
</Box>
}
export default ActionItem;