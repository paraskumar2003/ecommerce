import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Box,styled } from "@mui/material";
import { useEffect, useState } from 'react';
import { getQuery } from '../../service/api';
import {Link} from 'react-router-dom';



const Search = styled(Box)(({theme})=>({
    padding:'3px 8px',
    background:'#fff',
    width:'45%',
    display:'flex',
    alignItems:'center',
    position:'relative',
    justifyContent:'space-between',
    borderRadius:2,
    [theme.breakpoints.down('md')]:{
        width:'5%',
        backgroundColor:'var(--root-primary-color)',
        position:'fixed',
        right:170
    }
}));

const Icon = styled(SearchIcon)(({theme})=>({
    color:'var(--root-primary-color)',
    [theme.breakpoints.down('md')]:{
        backgroundColor:'var(--root-primary-color)',
        color:'#fff',
        borderRadius:'50%',
        padding:'4px',
        border:'2px solid #fff',
        fontSize:20,
    }
}))

const Input = styled(InputBase)(({theme})=>({
    width:'100%',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}));

const SuggestedItem = styled(Box)(({theme})=>({
    padding:'5px 10px 10px',
    borderBottom:'1px solid rgba(0,0,0,0.1)',
}))

const SearchComponent = ({setSearch})=>{
    
    const [suggestions,setSuggestions] = useState([]);

    const [query,setQuery] = useState({});
    const [field,setField] = useState(false);

    useEffect(()=>{
        if(query){
            if(query.query === ''){
                setField(false);
            }else{
                setField(true);
            }
        }
    },[query])

    useEffect(()=>{
        const getResults = async()=>{
            let response =await getQuery(query);
            setSuggestions(response.data.products);
        };
        getResults();
    },[query])
    console.log(query);
    return <Search >
    <Input placeholder="Search For Items..." onChange={(e)=>setQuery({query:e.target.value})}/>
    <Icon onClick={()=>{setSearch(true)}}  />
    <Box style={{position:'absolute',top:40,left:0,right:0,backgroundColor:'#fff',width:'100%'}}>
    {
        field && suggestions && suggestions.map(item =>{console.log(item); return <SuggestedItem><Link onClick={()=>setQuery(item.longTitle)} style={{textDecoration:'none',color:'inherit'}} to={`/product/${item.id}`}>{item.title.longTitle}</Link></SuggestedItem>})
    }
    </Box>
    </Search>;
}
export default SearchComponent;