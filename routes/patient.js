const express=require('express');
const patientAPI=require('../controller/patient_API');
const passport=require('passport');
const router=express.Router();

//create patient
router.post('/register',passport.authenticate('jwt',{session:false}),patientAPI.register);

//genrate report given patient 
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),patientAPI.genrateReport)

//all reports give patients (patient id store in params)
router.get('/:id/all_reports',passport.authenticate('jwt',{session:false}),patientAPI.allReports);

module.exports=router;