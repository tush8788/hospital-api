const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');

//home page
router.get('/',homeController.home);

//handle doctors
router.use('/doctors',require('./doctor'));

//handle patients
router.use('/patients',require('./patient'));

//handle reports
router.use('/reports',require('./report'));

module.exports=router;