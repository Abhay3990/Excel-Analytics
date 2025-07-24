
import fileDataModel from "../models/fileDataModel.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"

export const loginAdmin = (req,res)=>{
   
    try {
        
        const { email,password} = req.body
       
        if(email===process.env.ADMIN_EMAIL&&password===process.env.ADMIN_PASSWORD){
            const atoken = jwt.sign(email+password , process.env.JWT_SECRET)
            res.json({success:true,atoken,message:"Successfully login "})
        }
        else{
            res.json({success:false,message:"Invalid credential !!!"})
        }
    } catch (error) {
        
        res.json({success:false,message:error.message})
    }
}

export const getDashboard = async (req,res)=>{
    try {
        const allUsers = await userModel.find({}).sort({createdAt:-1}).limit(5)
        const totalUsers = await userModel.countDocuments();

        const dashboardData = {
            allUsers,totalUsers
        }
        res.json({success:true,dashboardData})
    } catch (error) {
        return res.json({success:false,message:error.message})
    }
}

export const totalFilesByUserId = async (req,res)=>{
    try {
        const {userId} = req.body
        const myTotalFiles = await fileDataModel.countDocuments({userId:userId});
        res.json({success:true,myTotalFiles})
    } catch (error) {
        return res.json({success:false,message:error.message})
    }
}



export const getFilesByUserId = async (req,res)=>{
    try {
        const {userId} = req.body
        const myAllFiles = await fileDataModel.find({ userId });
        res.json({success:true,myAllFiles})
    } catch (error) {
        return res.json({success:false,message:error.message})
    }
}


export const deleteUserById = async (req,res)=>{
    try {
        const {userId} = req.body
        await userModel.findByIdAndDelete(userId)
// delete all files associated with user
        await fileDataModel.deleteMany({userId})
        res.json({success:true,message:"User Deleted successfully"})

    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const deleteFileById = async (req,res)=>{
    try {
        const {fileId} = req.params
        await fileDataModel.findByIdAndDelete(fileId)

        res.json({success:true,message:"User Deleted successfully"})

    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

































