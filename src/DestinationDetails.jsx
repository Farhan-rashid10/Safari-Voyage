import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const destinations = [
  { 
    name: 'Mombasa North Coast', 
    description: 'Enjoy stunning beaches and vibrant nightlife in Mombasa North Coast.', 
    price: 'Ksh 13,500',
    highlights: ['Free transport', 'Free guide', 'Insurance'],
    image: "/src/assets/images/raha.jpg",
  },
  { 
    name: 'Diani', 
    description: 'Relax on the white sandy beaches of Diani and enjoy luxury resorts.', 
    price: 'Ksh 12,000',
    highlights: ['Free transport', 'Luxury resorts', 'Insurance'],
    image: "/src/assets/images/dinaa.jpg",
  },
  { 
    name: 'Watamu', 
    description: 'Discover coral reefs, marine life, and the serene beauty of Watamu.', 
    price: 'Ksh 14,000',
    highlights: ['Free transport', 'Marine activities', 'Insurance'],
    image: "/src/assets/images/watamu.jpg",
  },
  { 
    name: 'Maasai Mara', 
    description: 'Witness the Great Migration and enjoy a rich cultural experience.', 
    price: 'Ksh 15,000',
    highlights: ['Free safari guide', 'Transport included', 'Insurance'],
    image: "/src/assets/images/masaaimara.jpg",
  },
];

const DestinationDetails = () => {
  const { destinationName } = useParams();
  const decodedName = decodeURIComponent(destinationName.trim().toLowerCase().replace(/-/g, ' '));
  const [cart, setCart] = useState([]); // Initialize cart state

  console.log(`Decoded Name: ${decodedName}`); // Debugging output

  const destination = destinations.find(
    (dest) => dest.name.trim().toLowerCase() === decodedName
  );

  if (!destination) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Destination Not Found</h2>
        <p className="mb-4">The destination you are looking for does not exist.</p>
        <Link to="/" className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
          View All Destinations
        </Link>
      </div>
    );
  }

  // Add destination to the cart
  const handleAddToCart = () => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.name === destination.name)) {
        alert('This trip is already in your cart.');
        return prevCart; // Prevent duplicates
      }
      return [...prevCart, destination];
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        <div className="w-1/3">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-2/3 pl-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{destination.name}</h1>
            <p className="text-gray-700 mb-4">{destination.description}</p>
            <h2 className="text-xl font-bold mb-2">Trip Highlights</h2>
            <ul className="list-disc pl-6 mb-4">
              {destination.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            <p className="text-orange-500 text-2xl font-bold mb-6">{destination.price}</p>
          </div>
          <div className="mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 w-full"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Cart Display */}
      {cart.length > 0 && (
        <div className="mt-8 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          <ul className="list-disc pl-6">
            {cart.map((item, index) => (
              <li key={index} className="mb-2">
                {item.name} - <span className="text-orange-500">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DestinationDetails;
