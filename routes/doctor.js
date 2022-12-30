const express=require('express');
const passport=require('passport');
const doctorAPI=require('../controller/doctor_API');
const router=express.Router();

router.post('/register',doctorAPI.createDoctor);
router.post('/login',doctorAPI.login);

module.exports=router;