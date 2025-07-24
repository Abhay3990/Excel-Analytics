
import mongoose from "mongoose";
const fileDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel',
    required: true
  },
  fileName: { type: String, required: true },
  headers: { type: [String], required: true },
  rows: { type: [[mongoose.Schema.Types.Mixed]], required: true },
  uploadedAt: { type: Date, default: Date.now }
});



const fileDataModel = mongoose.models.fileData || mongoose.model("fileData", fileDataSchema);
export default fileDataModel;



















