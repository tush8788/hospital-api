const PatientDB=require('../models/patient');

module.exports.register=async function(req,res){
    try{
        let patient=await PatientDB.findOne({phone:req.body.phone});
        if(patient){
            return res.status(409).json({
                message:"Patient already register",
                patient:patient
            });
        }

        await PatientDB.create(req.body);
        return res.status(200).json({
            message:"Patient register successfully"
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:"Internal Server ERROR"
        })
    }
}