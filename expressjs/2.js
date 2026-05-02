const express=require('express');
const app=express();
const PORT=9000;

app.get('/',(req,res)=>{
    res.send('ith home thha');
});

app.get('/about',(req,res)=>{
    res.send('ith about thha');
})

app.get('/contact',(req,res)=>{
    res.send('ith contact thha')
});
app.listen(PORT,()=>{
    console.log(`Server is runnin on http://localhost:${PORT}`);
});