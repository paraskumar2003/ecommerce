import {Box, styled, Button} from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";
import { addToDemand } from "../../service/api";

const ImageWrapper = styled(Box)(({theme})=>({
    padding:'1rem 3rem',
    width:'400px',

}))
const Image = styled('img')(({theme})=>({
    width:'100%',
    margin:'0 auto',
    borderRadius:2,
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




const ActionItem = ({product})=>{
    const {acc} = useContext(DataContext);

    const AddToDemand =async ()=>{
        let response = await addToDemand({id:`${product.id}`,user:acc});
        console.log(response.data.response === 'ok')
    }

return <Box>
<ImageWrapper>
<Image  src={product.detailUrl} alt="product" />
</ImageWrapper>
<Box style={{padding:'0 3rem',width:'400px'}}>
<ButtonWrapper>
<StyledButton style={{color:'var(--root-primary-color)',backgroundColor:'#fff'}} variant="contained" onClick={()=>AddToDemand()}>Add To Demand</StyledButton>
<StyledButton style={{backgroundColor:'var(--root-primary-color)',color:'#fff'}} variant="contained">Order Now</StyledButton>
</ButtonWrapper>
</Box>
</Box>
}
export default ActionItem;