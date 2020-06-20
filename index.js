const express=require('express');
const bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.json());
app.get('/api',(req,res)=>{
    res.send({data:"Press Enter or click on search"});
})

app.listen(5500,()=>{
    console.log("Listening on port 5500")
});