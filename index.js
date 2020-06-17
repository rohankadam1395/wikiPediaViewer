const express=require('express');
const bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.json());
app.get('/api',(req,res)=>{
    res.send({data:[0,1,2,3,4,5,6]});
})

app.listen(5500,()=>{
    console.log("Listening on port 5500")
});