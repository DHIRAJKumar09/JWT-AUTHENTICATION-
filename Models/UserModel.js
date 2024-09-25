const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    UserType:{
        type:String,
        enum:['admin','user','premium','guest'],default:'user'
    },
    avatar:{
        type:String,
    }
});
const User = mongoose.model('users',UserSchema);
module.exports = {User};