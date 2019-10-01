
const express= require('express');

const app=express();

app.get('',(req,res)=>{
    res.send('Hello Express!');
});

app.get('/about',(req,res)=>{
    res.send('Hello About Express!');
});

app.get('/home',(req,res)=>{
    res.send('Hello Home Express!');
});

app.listen(3000,()=>{
    console.log('Server is up on port 3000.');
});


