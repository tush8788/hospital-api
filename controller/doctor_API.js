const DoctorDB=require('../models/doctor');

module.exports.createDoctor= async function(req,res){
   // console.log(req.body);
    if(req.body.password != req.body.confrompassword){
        return res.status(401).json({
            message:"Password and Confrom Password Not Match"
        })
    }

    try{
        const doctor=await DoctorDB.findOne({username:req.body.username});

        if(doctor){
            return res.status(409).json({
                message:"Doctor Already present in DB just Login"
            })
        }

        await DoctorDB.create(req.body);
        
        return res.status(201).json({
            message:"Doctor created successfully now just login"
        })

    }catch(err){
        return res.status(500).json({
            message:"Internal Server ERROR"
        })
    }

}