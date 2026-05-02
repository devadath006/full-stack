const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('users list');
});

router.get('/:id',(req,res)=>{
    res.send(`user is: ${req.params.id}`);
});

module.exports=router;