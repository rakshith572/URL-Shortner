const express=require('express');
const router=express.Router();
const Url=require('../models/url');

router.get('/:code',async (req,res)=>{
    const code=req.params.code;
    try{
        const url=await Url.findOne({shortId:code});
        res.redirect(url.longUrl);
    }catch(error){
        res.json('url not right');
    }
});
module.exports=router;