const express=require('express');
const app=express();

const homeRoute=require('./routes/home');
const usersRoute=require('./routes/users');

app.use(express.json());

app.use('/',homeRoute);
app.use('/users',usersRoute);

app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000');
});