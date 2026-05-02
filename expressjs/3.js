const express=require('express');
const app=express();
const PORT=4000;

app.get('/',function(req,res){
    res.send('kalla kutta gpt');
})

app.get('/abc',function(req,res){
    const id=req.query.id;
    res.send("abc with id "+id);
})

app.get('/abc/:id',function(req,res){
    const id=req.params.id;
    res.send("abc with params id"+id);
})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});