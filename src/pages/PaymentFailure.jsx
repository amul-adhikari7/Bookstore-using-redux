import React from "react";
import { Link } from "react-router-dom";

const PaymentFailure = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
      <h1 className="text-3xl font-bold text-red-700 mb-4">
        ❌ Payment Failed!
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Something went wrong. Please try again.
      </p>
      <Link to="/" className="text-blue-600 underline">
        Go back to Checkout
      </Link>
    </div>
  );
};

export default PaymentFailure;
