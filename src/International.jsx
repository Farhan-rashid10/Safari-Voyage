import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ image, name, category, discount, price, rating }) => (
  <Link to={`/destination/${encodeURIComponent(name)}`} className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer">
    {discount && (
      <div className="absolute top-0 left-0 bg-yellow-400 text-white py-1 px-3 rounded-br-lg font-bold">
        {discount}% OFF
      </div>
    )}
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4 bg-white">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600 text-sm mb-2">({category})</p>
      <div className="flex justify-between items-center">
        <span className="text-green-600 font-bold">${price}</span>
        <div className="flex items-center">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
          <span className="ml-1 text-gray-600">({rating})</span>
        </div>
      </div>
    </div>
  </Link>
);

const International = () => {
  const destinations = [
    { name: 'SEYCHELLES', category: 'Beach', image: '/src/assets/images/raha.jpg', discount: 30, price: 1200, rating: 5 },
    { name: 'MAURITIUS', category: 'Beach', image: '/src/assets/images/maur.jpg', discount: 30, price: 190, rating: 4 },
    { name: 'DUBAI', category: 'Beach', image: '/src/assets/images/dubai.jpg', discount: 30, price: 1280, rating: 5 },
    { name: 'EGYPT', category: 'Pyramids', image: '/src/assets/images/egypt.jpg', discount: 30, price: 300, rating: 4 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-2">
        <span className="text-black-800 ">International</span>{' '}
        <span className="text-orange-500 ">Destinations</span>
      </h1>
      <p className="text-gray-700 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
        Leading Tour Packages Booking website, with over 30,000 hotel rooms worldwide. Book your stays and enjoy your holidays with a distinctive experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>
    </div>
  );
};

export default International;
