import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import Router from './Router/Router.js'
import Connection from './database/db.js';
import cors from 'cors';
dotenv.config();


const app = express();



Connection(process.env.DB_USERNAME,process.env.DB_PASSWORD);



app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);


app.get("/",(req,res)=>{
    res.send(`Hello from backend`);
})

app.listen(8000,()=>{
    console.log(process.env.DB_USERNAME);
    console.log("Rocking at 8000");
})