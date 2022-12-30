const express=require('express');
const passport=require('passport');
const doctorAPI=require('../controller/doctor_API');
const router=express.Router();
//create doctor /register 
router.post('/register',doctorAPI.createDoctor);
//create session /login
router.post('/login',doctorAPI.login);

module.exports=router;