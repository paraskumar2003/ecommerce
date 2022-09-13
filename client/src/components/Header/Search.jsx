import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Box,styled } from "@mui/material";

const Search = styled(Box)(({theme})=>({
    padding:'3px 8px',
    background:'#fff',
    width:'45%',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius:2,
}));

const SearchComponent = ()=>{
    return <Search >
    <InputBase style={{width:'100%'}} placeholder="Search For Items..."/>
    <SearchIcon style={{color:'var(--root-dark-pink-color)',}} />
    </Search>;
}
export default SearchComponent;