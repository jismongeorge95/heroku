var express=require('express');
const app=express();
app.get("/",function(req,res)
{
    res.send("welcome")
});
const port=process.env.PORT || 3000
app.listen(3000,function(){
    console.log("port 3000 is using");
});
