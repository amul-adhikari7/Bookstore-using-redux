import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        ✅ Payment Successful!
      </h1>
      <p className="text-lg text-gray-700 mb-4">Thank you for your purchase.</p>
      <Link to="/" className="text-blue-600 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;
