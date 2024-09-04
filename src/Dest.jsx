import React from 'react';
import { Link } from 'react-router-dom';

const localDestinations = [
  {
    name: 'Watamu',
    description: 'Explore the pristine beaches and marine life of Watamu, a hidden gem on the Kenyan coast.',
    price: 'Ksh 13,500',
    imageUrl: '/src/assets/images/watamu.jpg',
    rating: 4.5,
  },
  {
    name: 'Maasai Mara',
    description: 'Discover the iconic Masai Mara, with abundant wildlife and endless plains.',
    price: 'Ksh 14,000',
    imageUrl: '/src/assets/images/masaaimara.jpg',
    rating: 4.5,
  },
  // Add more local destinations...
];

const internationalDestinations = [
  {
    name: 'Dubai',
    description: 'Explore the luxurious city of Dubai with this exclusive 5-day holiday package.',
    price: '$2,000',
    imageUrl: '/src/assets/images/dubai.jpg',
    rating: 4.5,
  },
  {
    name: 'Paris',
    description: 'Experience the romance and culture of Paris with this 4-day city tour.',
    price: '€1,800',
    imageUrl: '/src/assets/images/paris.jpg',
    rating: 4.5,
  },
  // Add more international destinations...
];

const Dest = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      {/* Local Destinations */}
      <h2 className="text-3xl font-bold mb-6 text-center">Local Destinations</h2>
      <div className="grid grid-cols-1 gap-8 mb-12">
        {localDestinations.map((destination, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex">
            <div className="w-1/3 relative">
              <img src={destination.imageUrl} alt={destination.name} className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded shadow text-orange-500 font-bold text-sm">
                {destination.rating} ★
              </div>
            </div>
            <div className="w-2/3 pl-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-700 mb-4">{destination.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-orange-500 text-xl font-bold">{destination.price}</p>
                <Link to={`/destination/${encodeURIComponent(destination.name)}`} className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
                  More Info
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* International Destinations */}
      <h2 className="text-3xl font-bold mb-6 text-center">International Destinations</h2>
      <div className="grid grid-cols-1 gap-8">
        {internationalDestinations.map((destination, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex">
            <div className="w-1/3 relative">
              <img src={destination.imageUrl} alt={destination.name} className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded shadow text-orange-500 font-bold text-sm">
                {destination.rating} ★
              </div>
            </div>
            <div className="w-2/3 pl-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-700 mb-4">{destination.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-orange-500 text-xl font-bold">{destination.price}</p>
                <Link to={`/destination/${encodeURIComponent(destination.name)}`} className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
                  More Info
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dest;
