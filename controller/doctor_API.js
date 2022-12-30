const DoctorDB=require('../models/doctor');
//this librory use for genrate token
const jwt=require('jsonwebtoken');

//create doctor
module.exports.createDoctor= async function(req,res){
    // console.log(req.body);
    try{
        //check password and confrom password match or not
        if(req.body.password != req.body.confrompassword){
            return res.status(401).json({
                message:"Password and Confrom Password Not Match"
            })
        }
        //find doctor in DB
        const doctor=await DoctorDB.findOne({username:req.body.username});
        //check doctor already present in DB or not 
        if(doctor){
            //if docter found in db just back
            return res.status(409).json({
                message:"Doctor Already present in DB just Login"
            })
        }

        //if doctor not found in DB then create new
        await DoctorDB.create(req.body);
        
        return res.status(201).json({
            message:"Doctor created successfully now just login"
        })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"Internal Server ERROR"
        })
    }

}

//login or create session
module.exports.login=async function(req,res){
    try{
        //find Doctor in DB
        let doctor=await DoctorDB.findOne({username:req.body.username});
        //if doctor is not found or password not match just return
        if(!doctor || doctor.password != req.body.password){
            return res.status(422).json({
                message:"Invaild username or password"
            })
        }

        //if every thing is good then genrate token and back
        return res.status(200).json({
            message:"Login Successfull keep safe your token",
            token:jwt.sign(doctor.toJSON(),"Anyvalue",{expiresIn:10000})
        })
    }
    catch(err){
        console.log(err);
        return res.json(500,{meassge:'Error In Delete Posts and associated comment'});
    }
}