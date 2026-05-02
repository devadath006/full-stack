const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("hello da gpt");
});
app.listen(3000,()=>{
    console.log('Server is runnning on http://localhost:3000');
});