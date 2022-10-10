
import { Dialog,TextField, Typography,Button, Alert  } from "@mui/material";
import {Box,styled} from "@mui/system";
import LoginImg from './LoginImg.png';
import { authenticateLogin } from "../../service/api";
import { authenticateNumber } from "../../service/api";
import Register from "./Register";
import { useState,useContext,useEffect } from "react";
import { DataContext } from "../../context/Dataprovider";




const Image = styled(Box)(({theme})=>({
      width:'35%',
      background:'var(--root-primary-color)  center 85% no-repeat',
      padding:'1rem',
      display:'flex',
      justifyContent:'space-between',
      flexDirection:'column',
      alignItems:'flex-start',
      [theme.breakpoints.down('md')]:{
        display:'none',
      }
}));

const FormWrapper = styled(Box)(({theme})=>({
    height:'100%',
    marginTop:20,
    padding:'1rem 2rem',
    width:'65%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    },
    
}))

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
}))

const ImageInLeft = styled('img')`
width:80%;
margin:0 auto;
border-radius:2px;
`;

const SmallText = styled(Typography)`
font-size:0.8rem;
color:rgba(0,0,0,0.7);
`;

const RequestButtons = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
}));

const LoginButton = styled(Button)`
background:var(--root-primary-color);
width:100%;
letter-spacing:1px;
padding:5px 0px;
margin-top:20px;
`;

const RequestOTP = styled(Button)`
background:#fff;
width:100%;
letter-spacing:1px;
color:var(--root-primary-color);
margin-top:20px;`;

const NewAccountButton = styled(Button)`
background:#fff;
margin:130px auto 0px;
color:var(--root-primary-color);
font-weight:500;
text-transform:none;
`;

const AccountInitialValue = {
    login:{
           view:'login',
           heading:'Log In',
           text:'Get access to your Orders, Wishlist and Recommendations.',
    },
    signup:{
        view:'signup',
        heading:`Looks Like you're new here`,
        text:'Signup with your mobile number to get started'
    }
}

const DialogBox = styled(Dialog)`
min-width:1000px;
width:100%;`;

const loginInitialValues = {
    username:'',
    password:''
};
const LoginError = {
    True:{
        error:true,
        attribute:'error',
        helperText:'Please check you Mobile No/email',
    },
    False:{
        error:false,
        attribute:'',
        helperText:'',
    }
}




const LoginDialog = ({open,setOpen})=>{

    
    
    


    const [autoLogin,setAutoLogin] = useState(true);
    const [verifyUser,setVerifyUser] = useState(false);
    const [mobileNo,setMobileNo] = useState('');
    const [registerError,setregisterError] = useState(false);
    const [loginError,setloginError] = useState(LoginError.False);
   
    const [account,setAccount] = useState(AccountInitialValue.login);

    const [login,setlogin] = useState(loginInitialValues);

    const {setAcc} = useContext(DataContext);


    

    const onValueChange = (e)=>{
        setlogin({...login,[e.target.name]:e.target.value});
        setloginError(LoginError.False);
    }

    const Login = async (e)=>{
        let response = await authenticateLogin(login);
        if(response.data.data==='ok'){
            setOpen(false);
            setAutoLogin(false);
            setAcc(response.data.user);
            localStorage.setItem('miiraUser',response.data.user.phone);
            localStorage.setItem('miiraPassword',response.data.user.password);
            
        }
        else{
          setloginError(LoginError.True);
        };
    }





    const VerifyUser = async (e)=>{
        let response = await authenticateNumber(mobileNo);
        console.log(response);
        if(response.data.data==='ok'){
            setVerifyUser(response.data);
        }else if(response.data.data==='exist'){
            setAccount(AccountInitialValue.login);
            setregisterError(true);
        }else{
            setVerifyUser(response.data);
        }
    }


    const handleClose = ()=>{
        setOpen(false);
    }
    const RegisterUser = ()=>{
        setAccount(AccountInitialValue.signup);
    }
    const LoginUser = ()=>{
        setAccount(AccountInitialValue.login);
    }

    

    return<DialogBox className="login-dialog" style={{minWidth:'1200px',position:'fixed',margin:'auto'}} open={open} onClose={handleClose}>
    <Box style={{display:'flex',minHeight:'500px'}}>
    <Image>
    <Box style={{margin:'5px'}}>
    <Typography style={{color:'#fff',fontSize:'1.5rem',letterSpacing:1}}>
    {account.heading}
    </Typography>
    <Typography style={{color:'#fff',marginTop:20,letterSpacing:1}}>
    {account.text}
    </Typography>
    </Box>
    <ImageInLeft src={LoginImg} alt="icon-login" />
    </Image>
    {account.view === 'login' ? <FormWrapper>
    <Box>{ registerError ? <Box style={{overflow:'hidden',borderRadius:2,marginBottom:10}}><Alert onClose={()=>{}} severity="error">This user is already registered. Please Login.</Alert></Box>:''}

    {
        loginError.error ? <StyledTextField error helperText='Please check your Mobile No/Email or password.' id="standard-basic" label=" Enter Email/Mobile No." onChange={(e)=>{onValueChange(e)}} name="username" variant="standard"></StyledTextField> : <StyledTextField id="standard-basic" label=" Enter Email/Mobile No." onChange={(e)=>{onValueChange(e)}} name="username" variant="standard"></StyledTextField>
    }
    <StyledTextField style={{marginTop:20,}} id="standard-basic" label=" Enter Password" type='password' onChange={(e)=>{onValueChange(e)}} name="password" variant="standard"></StyledTextField>
    <SmallText variant="H6">By continuing you agree to MiiraLights's <Box component='span' style={{color:'var(--root-primary-color)'}}>Terms of Use</Box> and <Box component='span' style={{color:'var(--root-primary-color)'}}>Privacy Policy</Box></SmallText>
    </Box>
    <RequestButtons>
    <LoginButton style={{background:'var(--root-primary-color)'}} onClick={()=>{Login()}} variant='contained'>Login</LoginButton>
    <Typography style={{marginTop:15}}>OR</Typography>
    <RequestOTP style={{background:'#fff'}} variant='contained'>Request OTP</RequestOTP>
    </RequestButtons>
    <Box style={{display:'flex',marginTop:'auto'}}>
    <NewAccountButton onClick={()=>{RegisterUser()}}>New To MiiraLights?Create An Account</NewAccountButton>
    </Box>
    
    </FormWrapper> : <FormWrapper>
    {
        verifyUser.data==='ok' ? <Register setOpen={setOpen} phone={verifyUser.phone} />:
    <div><StyledTextField onChange={(e)=>{setMobileNo({phone:`${e.target.value}`})}} id="standard-basic" label=" Enter Mobile Number" variant="standard"></StyledTextField>
    <SmallText variant="H6" style={{marginTop:20}}>By continuing you agree to MiiraLights's <Box component='span' style={{color:'var(--root-primary-color)'}}>Terms of Use</Box> and <Box component='span' style={{color:'var(--root-primary-color)'}}>Privacy Policy</Box></SmallText>
    <LoginButton onClick={()=>VerifyUser()} style={{background:'var(--root-primary-color)'}} variant='contained'>CONTINUE</LoginButton>
    <RequestOTP onClick={()=>{LoginUser()}} style={{background:'#fff'}} variant='contained'>Already Customer?Log In</RequestOTP></div>
    
}
    </FormWrapper>
}
    
    </Box>
    </DialogBox>;
}
export default LoginDialog;