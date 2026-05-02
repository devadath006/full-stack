const express=require('express');
const app=express();
const PORT=4000;

app.use((req,res,next)=>{
    console.log(`${req.method} requesting for ${req.url}`);
    next();
});

app.use(express.json());

app.get('/',function(req,res){
    res.send("middleware here");
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});