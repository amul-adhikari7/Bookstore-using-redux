import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const Home = () => {
  const bookImages = [
    "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  ];

  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {books.map((book, index) => (
        <div key={book.id} className="p-4 bg-white rounded shadow">
          <img
            src={bookImages[index % bookImages.length]} // cycle through images if books > images
            alt={book.title}
            className="w-full h-48 object-cover rounded mb-2"
          />
          <h2 className="text-lg font-semibold">{book.title}</h2>
          <p className="text-gray-600">{book.author}</p>
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
