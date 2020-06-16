var express=require('express');
var app=express();

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen(5500,()=>{
    console.log("Listening on port 5500")
});