

import express from 'express';

import { loginAdmin,getDashboard, totalFilesByUserId,getFilesByUserId,deleteFileById,deleteUserById} from '../controllers/adminControllers.js';
import authAdmin from '../middlewares/authAdmin.js';

const adminRoute = express.Router()

adminRoute.post('/login',loginAdmin)


adminRoute.get('/dashboard',authAdmin,getDashboard)
adminRoute.post("/total-files",authAdmin, totalFilesByUserId);
adminRoute.post("/user-files",authAdmin, getFilesByUserId);
adminRoute.delete("/delete-file/:fileId",authAdmin, deleteFileById);
adminRoute.post("/delete-user",authAdmin, deleteUserById);



export default adminRoute



















