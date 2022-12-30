const express=require('express');
const router=express.Router();

//handle doctors
router.use('/doctors',require('./doctor'));

//handle patients
router.use('/patients',require('./patient'));

//handle reports
router.use('/reports',require('./report'));

module.exports=router;