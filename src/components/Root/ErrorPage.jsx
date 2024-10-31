// ErrorPage.jsx
import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
// import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
//   const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-700">
      <FiAlertTriangle className="text-red-500 w-24 h-24" />
      <h1 className="text-4xl font-bold mt-4">404</h1>
      <p className="text-lg mt-2">Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-200"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
