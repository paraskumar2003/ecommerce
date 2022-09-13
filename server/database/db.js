import mongoose from "mongoose";

const Connection = async (user,password)=>{
    try{
        const URL = `mongodb+srv://${user}:${password}@miiramadhyam.u2ock.mongodb.net/MiiraLights?retryWrites=true&w=majority`;
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log(`Database Connected Sucessfully`);
    }catch(error){
        console.log("Error while connecting database "+error.message);
    }
}

export default Connection;