import express from 'express';
import multer from 'multer';
import authUser from '../middlewares/authUser.js';
import { uploadFile,giveHistory } from '../controllers/fileControllers.js';

const fileRoute = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

fileRoute.post('/upload', authUser,uploadFile);
fileRoute.get('/history', authUser, giveHistory);

export default fileRoute;








