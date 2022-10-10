import {Box, styled, TextField} from "@mui/material";
import {ArrowBack} from  "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';


const Component = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    width:'100%',
    padding:'0px 4px',
}))

const Input = styled(TextField)(({theme})=>({
    width:'80%',
    color:'white',

}))
const StyledTextField = styled('input')(({theme})=>({
      width:'100%',  
      backgroundColor:'#fff' ,
      padding:'8px 8px 5px 8px',
      fontSize:16,
      fontWeight:500,
      border:'none',
      borderRadius:5,
      outline:'none',
}))

const ActiveSearch = ({setSearch})=>{
    
    return <Component>
    <ArrowBack style={{color:'whitesmoke',width:24,marginRight:5}} onClick={()=>{setSearch(false)}} />
    <StyledTextField focused={true}></StyledTextField>
    <SearchIcon  style={{color:'whitesmoke',width:24,margin:'0px 5px'}} />
    </Component>
}
export default ActiveSearch;