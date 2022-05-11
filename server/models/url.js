const mongooe=require('mongoose');

const urlSchema=new mongooe.Schema({
    longUrl:String,
    shortUrl:String,
    shortId:String
});

module.exports=mongooe.model('Url',urlSchema);