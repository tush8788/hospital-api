const passport=require('passport');
const jwtStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;
const DoctorDB=require('../models/doctor');
//options 
let opts={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : "Anyvalue"
}
//call passport as middleware
passport.use(new jwtStrategy(opts,async function(jwtPayload,done){
    try{
        //find doctor in db
        let doctor=await DoctorDB.findById(jwtPayload._id);
        //if doctor found then 
        if(doctor){
            return done(null,doctor);
        }
        else{
            return done(null,false);
        }

    }
    catch(err){
        return done(err);
    }
}))

module.exports=passport;