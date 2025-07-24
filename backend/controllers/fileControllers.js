
import fileDataModel from "../models/fileDataModel.js";


const uploadFile = async (req, res) => {
  try {
    const { fileName, headers, rows } = req.body;
    console.log(fileName, headers);
    
    const fileEntry = new fileDataModel({
      userId: req.userId, // coming from your auth middleware
      fileName,
      headers,
      rows
    });

    await fileEntry.save();
    res.json({ success: true, message: 'File uploaded successfully.' });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


const giveHistory = async (req, res) => {
  console.log(req.userId,"under give histrory");
  
  try {
    const file = await fileDataModel
      .find({ userId: req.userId })
      .sort({ uploadedAt: -1 });
    
    
    res.status(200).json(file);
  } catch (err) {
    console.error('Error fetching file history:', err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export {
    uploadFile,
    giveHistory
}









