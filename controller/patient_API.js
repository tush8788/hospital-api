const PatientDB=require('../models/patient');
const ReportDB=require('../models/report');
const DoctorDB=require('../models/doctor');

//create / register patient
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

//genrate report patient
module.exports.genrateReport=async function(req,res){
    // console.log("Patient id: ",req.params);
    // console.log("Patient report: ",req.body);
    // console.log("Doctor: ",req.user);

    try{
        const patient=await PatientDB.findById(req.params.id);
        //check patient is avilable in db or not
        if(!patient){
            return res.status(422).json({
                message:"Patient Not Found!"
            })
        }

        let report=await ReportDB.create({
            patient:req.params.id,
            status:req.body.status,
            doctor:req.user.id
        });

        return res.status(200).json({
            message:"Report Genrated!",
            report:report
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:"Internal Server ERROR"
        })
    }
}

//patient all reports 
module.exports.allReports= async function(req,res){
    try{
        let reports=await ReportDB.find({patient:req.params.id}).populate('patient').populate('doctor');
        if(reports){

            //remove password
            for(let i of reports){ 
                i.doctor.password="";
            }

            return res.status(200).json({
                message:"All Reports",
                Reports:reports
            })
        }
        
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:"Internal Server ERROR"
        })
    }
}

//
module.exports.allReportStatusWise=async function(req,res){
    try{
        let Reports=await ReportDB.find({status:req.params.status}).populate('patient').populate('doctor');
        //remove password
            for(let i of Reports){ 
                i.doctor.password="";
            }

            return res.status(200).json({
                message:"All Reports",
                Reports:Reports
            })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:"Internal Server ERROR"
        })
    }
}