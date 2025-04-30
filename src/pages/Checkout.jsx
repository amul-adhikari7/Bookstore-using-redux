import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce((sum, item) => sum + item.quantity * 100, 0);
  const [paymentMethod, setPaymentMethod] = useState('esewa');
  const navigate = useNavigate();

  const handleCOD = () => {
    alert("Order placed with Cash on Delivery!");
    navigate('/success');
  };

  const handleEsewa = () => {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://uat.esewa.com.np/epay/main';

    const fields = {
      amt: total,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: total,
      pid: `BOOK${Date.now()}`,
      scd: 'EPAYTEST',
      su: 'http://localhost:5173/success',
      fu: 'http://localhost:5173/checkout',
    };

    for (const key in fields) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = fields[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <ul className="mb-4">
        {cartItems.map(item => (
          <li key={item.id} className="flex justify-between border-b py-2">
            <span>{item.title} x {item.quantity}</span>
            <span>Rs. {item.quantity * 100}</span>
          </li>
        ))}
      </ul>

      <div className="mb-4">
        <h2 className="font-semibold mb-2">Total: Rs. {total}</h2>
        <label className="block mb-1">Select Payment Method:</label>
        <select
          className="border rounded px-3 py-2 w-full"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="esewa">Esewa</option>
          <option value="cod">Cash on Delivery</option>
        </select>
      </div>

      <button
        onClick={paymentMethod === 'esewa' ? handleEsewa : handleCOD}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
