import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { setAToken } = useContext(AdminContext);

  const logout = () => {
    localStorage.removeItem('aToken');
    setAToken(null);
    navigate('/');
  };

  return (
    <header className="flex items-center justify-between h-16 px-6 sm:px-12 border-b border-gray-200 bg-white shadow-sm">
      <h1
        onClick={() => navigate('/')}
        className="text-2xl font-bold text-indigo-600 cursor-pointer"
      >
        Excel Admin
      </h1>
      <button
        onClick={logout}
        className="text-sm px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all"
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;
