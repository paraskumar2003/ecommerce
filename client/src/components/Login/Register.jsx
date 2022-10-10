import { Box, TextField, styled,Button } from "@mui/material";
import { useContext, useState } from "react";
import { registerUser } from "../../service/api";
import { DataContext } from "../../context/Dataprovider";


const StyledTextField = styled(TextField)(({theme})=>({
    '& label.Mui-focused': {
        color: 'var(--root-primary-color)',
        opacity:'0.7',
        fontWeight:600,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'var(--root-primary-color)',
      },
      width:'100%',  
      marginTop:10, 
}))

const RegisterButton = styled(Button)(({theme})=>({
     width:'100%',
     marginTop:20,
     letterSpacing:1,
}))





const Register = ({phone,setOpen,setUser,err})=>{

  const AccountInitialValue = {
    name:'',
    email:'',
    phone:`${phone}`,
    password:'',
    gstin:''
  }

  const [register,setRegister]=useState(AccountInitialValue);
  const {setAcc}=useContext(DataContext);

  const RegisterUser =async ()=>{
    let response = await registerUser(register);
    if(response.data.status==='ok'){
       setOpen(false);
       setAcc(response.data.user)
       localStorage.setItem('miiraUser',response.data.user.phone);
            localStorage.setItem('miiraPassword',response.data.user.password);
    }
  }
return <Box>
<StyledTextField id="standard-basic" onChange={(e)=>{setRegister({...register,[e.target.name]:e.target.value})}} name="name" label=" Enter Your Name" variant="standard"></StyledTextField>
<StyledTextField id="standard-basic" onChange={(e)=>{setRegister({...register,[e.target.name]:e.target.value})}} name="email" label=" Enter Your Email Address" variant="standard"></StyledTextField>
<StyledTextField id="standard-basic" onChange={(e)=>{setRegister({...register,[e.target.name]:e.target.value})}} name="password" label=" Enter Your Password" variant="standard"></StyledTextField>
<StyledTextField id="standard-basic" onChange={(e)=>{setRegister({...register,[e.target.name]:e.target.value})}} name="gstin" label=" Enter Your GSTIN(Optional)" variant="standard"></StyledTextField>
<StyledTextField id="standard-basic" onChange={(e)=>{setRegister({...register,[e.target.name]:e.target.value})}} name="phone" value={phone} label=" Enter Your Phone/Mobile No." variant="standard" disabled></StyledTextField>
<RegisterButton style={{backgroundColor:'var(--root-primary-color)'}} onClick={()=>RegisterUser()} variant='contained'>CONTINUE</RegisterButton>
</Box>;
}
export default Register;