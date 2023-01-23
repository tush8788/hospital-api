const express=require('express');
const bodyParser=require('body-parser');
const db=require('./config/mongoose');
const jwtStrategy=require('./config/passport-jwt-strategy');
const dotenv=require('dotenv').config();
const port=process.env.port||8000;

const app=express();

app.set('view engine',"ejs");
app.set('views',"./view");

//convert form (post req) data into json
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('./assets'));

//handle req
app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log("Error in run server :: ",err);
        return;
    }
    console.log(`server is up on ${port} port`);
})