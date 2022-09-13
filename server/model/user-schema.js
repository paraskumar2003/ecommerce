import mongoose from 'mongoose';
import passport from 'passport';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,

    },
    email:{
        type:String,
        trim:true,
    },
    password:{
        type:String,
    },
    phone:{
        type:String,
    },
    gstin:{
        type:String,
    },
    address:{
        type:String,
    },
    pincode:{
        type:String,
    },
    cartItems:{
        type:[Object],
    }
})
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User',userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

export default User;