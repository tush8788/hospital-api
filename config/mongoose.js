const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
const dotenv=require('dotenv').config();
mongoose.connect(process.env.MONGO_URL||'mongodb://localhost/hospital-api');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error in connect with DB"));

db.once('open',function(){
    console.log("Successfully connected with DB");
})

module.exports=db;