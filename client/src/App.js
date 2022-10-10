
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import DetailView from "./components/Details/DetailView";
import Welcome from "./components/Welcome/Welcome";
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from "./components/Cart/Cart";
import { DataContext } from "./context/Dataprovider";
import { useContext,useEffect,useState } from "react";
import {authenticateLogin} from "./service/api";
import {useSelector} from 'react-redux';

function App() {

  const {loading, products} = useSelector(state=> state.getProducts);

  const [waiting,setWaiting] = useState(true);

  useEffect(()=>{    
      setTimeout(() => {
        if(!loading){
          setWaiting(false);
        }
    })
  },[loading])

  const {setAcc} = useContext(DataContext);
  const [autoLogin,setAutoLogin] = useState(true);
  const [login,setLogin] = useState({});
  const [auth,setAuth] = useState(false);
  
  const set = async(u,p)=>{
    setLogin({username:u,password:p});
  }

  
  const Login = async()=>{
    let response;
    if(autoLogin === true){
      response = await authenticateLogin(login)
    }
    if(response.data.data === 'ok'){
      setAutoLogin(false);
      setAcc(response.data.user);
      setAuth(true);
    }
  }

  

  useEffect(()=>{
    if(autoLogin === true){
        let userCookie = localStorage.getItem('miiraUser');
        let passwordCookie = localStorage.getItem('miiraPassword')
        if(userCookie !== null && passwordCookie !== null){
    set(userCookie,passwordCookie);
    Login();
    }
}
},[login]);

  
  return <BrowserRouter >
  <Routes>
  <Route path="/" element={waiting ? <Welcome /> :<Home />} />
  <Route path="/product/:id" element={<DetailView />} />
  <Route path="/cart" element={<Cart auth={auth} setAuth={setAuth} />} />
  
  </Routes>
  </BrowserRouter>;
}

export default App;
