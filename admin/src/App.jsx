import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { AdminContext } from './context/AdminContext';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserFiles from './pages/userFiles';

function App() {
  const { aToken } = useContext(AdminContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />
      {aToken ? (
        <>
          <Navbar />
          <div className="pt-4 sm:pt-6 px-4 sm:px-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/:userId" element={<UserFiles />} />
            </Routes>
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
