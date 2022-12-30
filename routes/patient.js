const express=require('express');
const patientAPI=require('../controller/patient_API');
const router=express.Router();

router.post('/register',patientAPI.register);

module.exports=router;