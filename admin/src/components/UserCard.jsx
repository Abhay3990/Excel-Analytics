import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';

const UserCard = ({ user, onDelete }) => {
  const { backendUrl, aToken } = useContext(AdminContext);
  const [fileCount, setFileCount] = useState(0);

  useEffect(() => {
    axios
      .post(
        backendUrl + '/api/admin/total-files',
        { userId: user._id },
        { headers: { aToken } }
      )
      .then((res) => {
        if (res.data.success) setFileCount(res.data.myTotalFiles);
      });
  }, [user, backendUrl, aToken]);

  return (
    <div className="bg-gray-100 p-4 rounded shadow flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold">{user.name || user.email}</h2>
        <p className="text-gray-600">Files: <span className="font-medium">{fileCount}</span></p>
      </div>
      <div className="flex gap-2">
        <Link to={`/${user._id}`}>
          <button className="bg-green-500 text-white px-4 py-1 rounded">View Files</button>
        </Link>
        <button onClick={() => onDelete(user._id)} className="bg-red-500 text-white px-4 py-1 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;