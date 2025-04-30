import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const Home = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {books.map((book) => (
        <div key={book.id} className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">{book.title}</h2>
          <p>{book.author}</p>
          <button
            onClick={() => handleAddToCart(book)}
            className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
