import * as XLSX from 'xlsx';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

export default function FileUploader({ onParse }) {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const {backendUrl} = useContext(AppContext)

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file extension
    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.csv')) {
      return setMessage('❌ Only .xlsx or .csv files are allowed.');
    }

    setUploading(true);
    setMessage('');

    try {
      const reader = new FileReader();
      reader.onload = async (evt) => {
        const wb = XLSX.read(evt.target.result, { type: 'binary' });
        const sheet = wb.Sheets[wb.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        if (data.length < 2) {
          setMessage('❌ The file must contain at least 1 header row and 1 data row.');
          setUploading(false);
          return;
        }

        const headers = data[0];
        const rows = data.slice(1);

        // Send to parent component
        onParse(data);

        console.log(file.name);
        

        // Send to backend
        await axios.post(backendUrl+'/api/files/upload', {
          fileName: file.name,
          headers,
          rows,
          
        }, {
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token') // assumes JWT stored in localStorage
          }
        });
          console.log(" sent on backend ");
          
        setMessage('✅ File uploaded successfully!');
      };

      reader.readAsBinaryString(file);
    } catch (error) {
      console.error('Upload failed:', error);
      setMessage('❌ Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
  <div className="space-y-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm max-w-md">
    <label className="block text-sm font-semibold text-gray-700">
      Upload Excel or CSV file
    </label>

    <input
      type="file"
      accept=".csv,.xlsx"
      onChange={handleUpload}
      className="block w-full text-sm text-gray-700 
        file:mr-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-medium
        file:bg-indigo-600 file:text-white
        hover:file:bg-indigo-700 transition-all duration-200"
    />

    {uploading && (
      <p className="text-sm text-indigo-600 animate-pulse">Uploading...</p>
    )}

    {message && (
      <p
        className={`text-sm ${
          message.startsWith('✅') ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {message}
      </p>
    )}
  </div>
);

}









