import { User } from "../Model/UserModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const RegisterController = async(req,res)=>{
    try {
        const {userName,email,password} = req.body;

        if(!userName|| !email || !password){
            return res.json({status:200,message:"All feild are required"});
        }
        const exitUser = await User.findOne({email});
        if(exitUser){
            return res.json({status:200, message:"User already exit"});
        }

        const hashpassword = await bcrypt.hash(password,10);

        const NewUser = new User({
            userName,
            email,
            password:hashpassword
        })
        await NewUser.save();
        return res.json({status:300,message:"Register Succefull!"});

        
    } catch (error) {
        return res.status(error);
        
    }
}


export const LoginController = async(req,res)=>{
    try {
        const {userName,password} = req.body;
        if(!userName || !password){
            return res.json({status:200,message:"All feild are required!"});
        }

        const exitUser = await User.findOne({userName});
        if(!exitUser){
            return res.json({status:200,message:"User not found"});
        }

        const isMatch = await bcrypt.compare(password,exitUser.password);
        if(!isMatch){
            return res.json({status:200,message:"invalid Creadential"});
        }
        const token = jwt.sign({ id: exitUser._id }, "jsonwebtoken", {
            expiresIn: "7d",
          });
          exitUser.password = undefined;
          res.status(200).send({
            success: true,
            message: "Login Successfully",
            token,
            exitUser,
          });
        
    } catch (error) {
        return res.status(error)
        
    }
}