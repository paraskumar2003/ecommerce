import axios from 'axios';

const URL = `http://localhost:8000`;
export const authenticateLogin = async (data)=>{
    try{
      console.log("Ye hai data"+data);
      return await axios.post(`${URL}/login`,data);
    }catch(error){
       console.log("Error with login api "+ error.message);
    }
}

export const authenticateNumber = async(data)=>{
  try{
      console.log(data)
      return await axios.post(`${URL}/verify`,data);
  }catch(error){
     console.log(error.message);
  }
}

export const registerUser = async(data)=>{
  try{
    console.log(data);
    return await axios.post(`${URL}/register`,data);
  }catch(error){
    return 1;
  }
}

export const addToDemand = async(data)=>{
  try{
    console.log(data);
    return await axios.post(`${URL}/addToDemand`,data);
  }catch(error){
    console.log(error.message);
  }
}