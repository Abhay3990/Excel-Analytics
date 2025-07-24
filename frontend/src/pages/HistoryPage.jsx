import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

export default function HistoryPage() {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  const {backendUrl} = useContext(AppContext)



  useEffect(() => {
  axios.get(backendUrl+'/api/files/history', {
    headers: { token: localStorage.getItem('token') }
  }).then(res => {
    const data = Array.isArray(res.data) ? res.data : res.data.history || res.data.data || [];
    setHistory(data);
  }).catch(err => {
    console.error('Error fetching history:', err);
    setHistory([]);
  });
}, []);


  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload History</h1>

      {error && <p className="text-red-500">{error}</p>}

      {history.length === 0 ? (
        <p className="text-gray-500">No uploads found.</p>
      ) : (
        <ul className="space-y-3">
          {history.map(item => (
            <li key={item._id} className="p-4 border rounded bg-gray-100 shadow-sm">
              <p className="font-semibold">{item.fileName || 'Unnamed File'}</p>
              <p className="text-sm text-gray-500">{new Date(item.uploadedAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
