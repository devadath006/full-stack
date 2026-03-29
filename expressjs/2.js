const express=require('express');
const app=express();
const PORT=4000;
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to the Home Page<h1>');
});
app.get('/about',(req,res)=>{
    res.send('<h1>Welcome to About Page<h1>');
});
app.get('/contact',(req,res)=>{
    res.send('<h1>Feel free to reach us</h1>');
});
app.listen(PORT,()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
});