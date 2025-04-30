import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleQuantityChange = (id, qty) => {
    dispatch(updateQuantity({ id, quantity: Number(qty) }));
  };

  const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4 p-2 border">
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>{item.author}</p>
                </div>
                <div>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="w-16 p-1 mr-2 border rounded"
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  />
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="font-bold">Total items: {total}</p>
            <div className="flex space-x-4 mt-2">
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Clear Cart
              </button>
              <Link to="/checkout" className="bg-green-600 text-white px-4 py-2 rounded">
                Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
