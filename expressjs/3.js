const express=require('express');
const app=express();
const PORT=3000;

app.get('/',function(req,res){
    res.send('Hello,World!');
})

app.get('/abc',function(req,res){
    const id=req.query.id
    res.send('welcome back Abc wit id:'+id)
})

app.get('/abc/:id',function(req,res){
    const id=req.params.id
    res.send('Welcome ABC'+id)
})

app.listen(PORT,()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
});