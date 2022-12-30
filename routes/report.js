const express=require('express');
const router=express.Router();
const patientAPI=require('../controller/patient_API');
const passport=require('passport');

//show all report given status (status store in params)
router.get('/:status',passport.authenticate('jwt',{session:false}),patientAPI.allReportStatusWise);

module.exports=router;