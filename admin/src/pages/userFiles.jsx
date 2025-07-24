import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AdminContext } from '../context/AdminContext';

const UserFiles = () => {
  const { backendUrl, aToken } = useContext(AdminContext);
  const { userId } = useParams();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios
      .post(backendUrl + '/api/admin/user-files', { userId }, { headers: { aToken } })
      .then((res) => {
        if (res.data.success) setFiles(res.data.myAllFiles);
      })
      .catch((err) => console.log(err));
  }, [userId, backendUrl, aToken]);

  const handleFileDelete = async (fileId) => {
    if (!window.confirm('Delete this file?')) return;
    await axios.delete(backendUrl + `/api/admin/delete-file/${fileId}`, { headers: { aToken } });
    setFiles((prev) => prev.filter((f) => f._id !== fileId));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-indigo-700 mb-4">Files of User</h1>
      {files.length === 0 ? (
        <p className="text-gray-600">No files found.</p>
      ) : (
        <ul className="space-y-4">
          {files.map((file) => (
            <li
              key={file._id}
              className="bg-white p-4 shadow rounded flex justify-between items-center"
            >
              <div>
                <p className="text-lg">{file.fileName || 'Untitled File'}</p>
                <p className="text-sm text-gray-500">
                  {new Date(file.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => handleFileDelete(file._id)}
                className="bg-red-500 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserFiles;