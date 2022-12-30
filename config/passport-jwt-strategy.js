const passport=require('passport');
const jwtStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;
const DoctorDB=require('../models/doctor');

let opts={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : "Anyvalue"
}

passport.use(new jwtStrategy(opts,async function(jwtPayload,done){
    try{

        let doctor=await DoctorDB.findById(jwtPayload._id);
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