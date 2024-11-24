import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeItem }) => {
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-700">Your Cart is Empty</h1>
        <Link to="/" className="text-blue-500 mt-4 inline-block">
          Go Back to Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-700">Your Cart</h1>
      <ul className="space-y-6">
        {cart.map((item, index) => (
          <li
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6"
          >
            {/* Trip Image */}
            <div className="w-full md:w-1/3">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Trip Details */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <p className="text-green-600 font-bold text-lg mt-4">Price: ${item.price}</p>
            </div>

            {/* Remove Button */}
            <div>
              <button
                onClick={() => removeItem(index)}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Continue Booking Button */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600"
        >
          Continue Booking
        </Link>
      </div>
    </div>
  );
};

export default Cart;
