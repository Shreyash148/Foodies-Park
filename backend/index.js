const express = require('express');
const mongo = require('./db');


const app=express();
mongo();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(express.json());


app.use('/api/',require('./Routes/createUser'));
app.use('/api/',require('./Routes/loginUser'));
app.use('/api/',require('./Routes/foodData'));
app.use('/api/',require('./Routes/handleCart'));

app.listen(5000,()=>{
    console.log("connection successful");
})