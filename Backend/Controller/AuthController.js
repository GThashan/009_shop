import { User } from "../Model/UserModel.js";
import bcrypt from 'bcrypt'

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
        return res.json({status:300,message:"Register Succefull!"})
        
    } catch (error) {
        return res.status(error);
        
    }
}