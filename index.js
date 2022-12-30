const express=require('express');
const bodyParser=require('body-parser');
const db=require('./config/mongoose');
const jwtStrategy=require('./config/passport-jwt-strategy');
const port=8000;

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log("Error in run server :: ",err);
        return;
    }
    console.log(`server is up on ${port} port`);
})