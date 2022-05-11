require('dotenv').config();
const express=require('express');
const app=express();
const connect=require('./DB/connect');
app.use(express.static('../client'));
app.use(express.json());

// app.use('/api/url',require('./models/url.js'));
app.use('/api/url', require('./routes/url'));
app.use('/get',require('./routes/index'));
const port=5000;
const start=async()=>{
    try{
        await connect(process.env.MONGO_URI);
        app.listen(port,()=>{console.log(`server listening at ${port}`)});
    }catch(error){
        console.log(error);
    }
}
start();