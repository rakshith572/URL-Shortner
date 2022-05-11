const express=require('express');
const router=express.Router();
const shortId=require('shortid');
const validURL=require('valid-url');
const Url=require('../models/url');
const baseUrl="http://localhost:5000";



router.post('/shorten',async(req,res)=>{
    const {longUrl}=req.body;
    if(!validURL.isUri(baseUrl)){
        res.status(400).json('not a valid url');
    }
    const shortid=shortId.generate();
    if(validURL.isUri(longUrl)){

        try{
            let url=await Url.findOne({longUrl});
            if(url){
                // console.log(longUrl);
                res.status(200).send(url);
            }else{
                const shortUrl=baseUrl+'/get/'+shortid;
                url=new Url({
                    longUrl,
                    shortUrl,
                    shortId:shortid
                });
                await url.save();
                res.status(200).send(url);
            }
        }catch(error){
            console.log(error);
            res.status(500).json('server error');
        }
    }else{ 
        res.status(500).json('invalid long URL');

    }
});

module.exports=router;