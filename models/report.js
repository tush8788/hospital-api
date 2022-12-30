const mongoose=require('mongoose');

const reportSchema=new mongoose.Schema({
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    },
    status:{
        type:String,
        enum:['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine','Positive-Admit'],
        default:'Negative'
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    }
},{
    timestamps:true
})

let Report=mongoose.model('Report',reportSchema);

module.exports=Report;