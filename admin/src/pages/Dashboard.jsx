import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AdminContext } from '../context/AdminContext';
import UserCard from '../components/UserCard';

const Dashboard = () => {
  const { backendUrl, aToken } = useContext(AdminContext);
  const [dashboard, setDashboard] = useState({ allUsers: [], totalUsers: 0 });

  useEffect(() => {
    axios
      .get(backendUrl + '/api/admin/dashboard', { headers: { aToken } })
      .then((res) => {
        if (res.data.success) setDashboard(res.data.dashboardData);
      })
      .catch((err) => console.log(err));
  }, [backendUrl, aToken]);

  const handleDelete = async (userId) => {
    if (!window.confirm('Are you sure?')) return;
    await axios.post(
      backendUrl + '/api/admin/delete-user',
      { userId },
      { headers: { aToken } }
    );
    setDashboard((prev) => ({
      ...prev,
      allUsers: prev.allUsers.filter((user) => user._id !== userId),
      totalUsers: prev.totalUsers - 1,
    }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Admin Dashboard</h1>

      <div className="bg-white p-4 rounded shadow-md mb-6">
        <p className="text-lg">Total Users: <strong>{dashboard.totalUsers}</strong></p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {dashboard.allUsers.map((user) => (
          <UserCard key={user._id} user={user} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
