const express=require('express');
const doctorAPI=require('../controller/doctor_API');
const router=express.Router();

router.post('/register',doctorAPI.createDoctor);

module.exports=router;