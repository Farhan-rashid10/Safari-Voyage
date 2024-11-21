import React from 'react';
import { Link } from 'react-router-dom';
import honeyImage from './assets/images/honey.jpg';
import safariImage from './assets/images/safari1.jpg';
import watamuImage from './assets/images/watamu1.jpg';
import familySafariImage from './assets/images/saf.jpg';

const PackageCard = ({ image, name, description, price, rating }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4 bg-white">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
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
  </div>
);

const Packages = () => {
  const packages = [
    { name: 'Romantic Honeymoon', description: 'Unforgettable 7-day beach retreat', image: honeyImage, price: 199, rating: 5 },
    { name: 'Birthday Bash Safari', description: 'Exciting 5-day wildlife adventure', image: safariImage, price: 299, rating: 4 },
    { name: 'Weekend City Escape', description: 'Watamu Luxurious 3-day urban getaway', image: watamuImage, price: 69, rating: 5 },
    { name: 'Family Safari Fun', description: '6-day safari for the whole family', image: familySafariImage, price: 1499, rating: 5 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-2">
        <span className="text-black-800">Recommended</span>{' '}
        <span className="text-orange-500">Themed Packages</span>
      </h1>
      <p className="text-gray-600 mb-8">
        Explore our specially curated themed packages for every occasion. From romantic getaways to thrilling adventures, we've got you covered.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
      {/* View More Button */}
      <div className="mt-8">
        <Link
          to="/packagess"
          className="inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300"
        >
          View More Packages
        </Link>
      </div>
    </div>
  );
};

export default Packages;
