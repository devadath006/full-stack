const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('HOME PAGE');
});

router.get('/about',(req,res)=>{
    res.send('this is about');
});

module.exports =router;