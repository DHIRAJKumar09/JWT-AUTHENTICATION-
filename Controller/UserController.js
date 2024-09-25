const {User}  = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
async function registration(req,res){
    const {name,email,password,UserType} =req.body;
    console.log(req.body);
    console.log(req.file);
    const avatar = req.file?req.file.filename:'abd.jpg';
    console.log(avatar);
    try{
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        user = new User({
            name,
            email,
            password:hashedPassword,
            UserType,
            avatar
        });
        await user.save();
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});

        res.status(201).json({
            message:"User registered Successfully",
            user:{name:user.name,email:user.email,UserType:user.UserType,avatar:user.avatar},
            token:token
        })
    }catch(error){
        console.error("Error registering user:",error);
        res.status(500).json({message:"Internal server error"});
    }
}

async function login(req,res){
    const {email, password}= req.body;

    try{
        let user =await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not registered ! please registered first then login"});
        }
        const decodePassword = await bcrypt.compare(password,user.password);
        if(!decodePassword){
            return res.status(400).json({message:"password is not matched , try again"});

        }
        const token = jwt.sign({id:user._id,UserType:user.UserType},process.env.JWT_SECRET,{expireIn:'7d'});
        res.status(200).json({
            message:"Login Successful",
            user:{name:user.name,email:user.email,avatar:user.avatar,UserType:user.UserType},
            token:token,
        });

    }catch(error){
        console.error("error found",error);
    }
}

module.exports = {registration,login};