import axios from 'axios';

const URL = `http://localhost:8000`;
export const authenticateLogin = async (data)=>{
    try{
      return await axios.post(`${URL}/login`,data);
    }catch(error){
      console.log('error');
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

export const addToBag = async(data)=>{
  try{
    return await axios.post(`${URL}/addToBag`,data);
  }catch(error){
  }
}

export const removeFromBag = async(data)=>{
  try{
   return await axios.post(`${URL}/removeFromBag`,data);
  }catch(error){
  }
}

export const getQuery = async(data)=>{
  try{
    console.log(data);
    return await axios.post(`${URL}/getQuery`,data);
  }catch(error){

  }
}