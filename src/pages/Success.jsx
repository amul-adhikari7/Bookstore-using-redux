import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Order Successful!</h1>
      <p className="mb-4">Thank you for your purchase.</p>
      <Link to="/" className="text-blue-500 underline">Back to Home</Link>
    </div>
  );
};

export default Success;
