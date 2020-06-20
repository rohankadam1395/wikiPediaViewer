const express=require('express');
const bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.json());

/*
app.get("/",(req,res)=>{
    res.send("Hello");
})*/
app.get('/api',(req,res)=>{
    res.send({data:"Press Enter or click on search"});
});

if(process.env.NODE_ENV==='production'){
    app.use(express.static(__dirname+'client/build'));
    const path=require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}
const port=process.env.PORT||5500;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});