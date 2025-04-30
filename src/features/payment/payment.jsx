import React from "react";
import EsewaCheckout from "./EsewaCheckout";

const Checkout = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <EsewaCheckout amount={100} productId="BOOK123" />
    </div>
  );
};

export default Checkout;
