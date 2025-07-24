import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {




  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl text-center p-6 bg-white shadow-2xl rounded-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Excel Data Analyzer
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-6">
          Upload your Excel or CSV files, visualize your data using charts.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/upload"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition duration-300 shadow-md"
          >
            Upload File
          </Link>
          <Link
            to="/dashboard"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition duration-300 shadow-md"
          >
            View Dashboard
          </Link>
          <Link
            to="/history"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition duration-300 shadow-md"
          >
            History
          </Link>
        </div>
      </div>

      <footer className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Excel Data Analyzer. Built with ❤️
      </footer>
    </div>
  );
};

export default HomePage;
