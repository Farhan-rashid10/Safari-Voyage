import React from 'react';
import { Link } from 'react-router-dom';
import honeyImage from './assets/images/honey.jpg';
import safariImage from './assets/images/safari1.jpg';
import watamuImage from './assets/images/watamu1.jpg';
import familySafariImage from './assets/images/saf.jpg';
import adventureImage from './assets/images/adventure.jpg';
import luxuryImage from './assets/images/luxury.jpg';
import desertImage from './assets/images/desert.jpg';
import mountainImage from './assets/images/mountain.jpg';

const PackageCard = ({ image, name, description, price, rating }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <Link to={`/packages/${encodeURIComponent(name)}`}>
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
    </Link>
  </div>
);

const Packagess = () => {
  const packages = [
    { name: 'Romantic Honeymoon', description: 'Unforgettable 7-day beach retreat', image: honeyImage, price: 199, rating: 5 },
    { name: 'Birthday Bash Safari', description: 'Exciting 5-day wildlife adventure', image: safariImage, price: 299, rating: 4 },
    { name: 'Weekend City Escape', description: 'Watamu Luxurious 3-day urban getaway', image: watamuImage, price: 69, rating: 5 },
    { name: 'Family Safari Fun', description: '6-day safari for the whole family', image: familySafariImage, price: 1499, rating: 5 },
    { name: 'Adventurous Mountain Climb', description: '7-day mountain climbing experience', image: mountainImage, price: 799, rating: 5 },
    { name: 'Luxury Desert Adventure', description: 'Exclusive 5-day desert exploration', image: desertImage, price: 999, rating: 4 },
    { name: 'Luxury Island Escape', description: 'Relaxing 10-day luxury island vacation', image: luxuryImage, price: 2000, rating: 5 },
    { name: 'Thrilling Adventure Package', description: 'Exciting 7-day extreme sports adventure', image: adventureImage, price: 599, rating: 5 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-2">
        <span className="text-black-800">Our</span>{' '}
        <span className="text-orange-500">Packages</span>
      </h1>
      <p className="text-gray-600 mb-8">
        Explore our specially curated themed packages for every occasion. From romantic getaways to thrilling adventures, we've got you covered.
      </p>

      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {packages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </div>
  );
};

export default Packagess;
