const express=require('express');
const bodyParser=require('body-parser');
const port=8000;

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

// app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log("Error in run server :: ",err);
        return;
    }
    console.log(`server is up on ${port} port`);
})