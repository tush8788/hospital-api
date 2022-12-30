const express=require('express');
const patientAPI=require('../controller/patient_API');
const passport=require('passport');
const router=express.Router();

router.post('/register',patientAPI.register);

router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),patientAPI.genrateReport)

router.get('/:id/all_reports',passport.authenticate('jwt',{session:false}),patientAPI.allReports);

module.exports=router;