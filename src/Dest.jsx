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
  {
    name: 'Diani Beach',
    description: 'Relax on the white sands of Diani Beach, perfect for a peaceful getaway.',
    price: 'Ksh 12,000',
    imageUrl: '/src/assets/images/diani.jpg',
    rating: 4.7,
  },
  {
    name: 'Nairobi National Park',
    description: 'Experience the thrill of wildlife safaris just minutes away from the city.',
    price: 'Ksh 8,000',
    imageUrl: '/src/assets/images/nai.jpg',
    rating: 4.6,
  },
  {
    name: 'Lamu Island',
    description: 'Step into the serene atmosphere of Lamu, a perfect combination of culture and relaxation.',
    price: 'Ksh 10,500',
    imageUrl: '/src/assets/images/raha.jpg',
    rating: 4.4,
  },
  {
    name: 'Mombasa North Coast',
    description: 'Enjoy stunning beaches and vibrant nightlife in Mombasa North Coast.',
    price: 'Ksh 15,000',
    imageUrl: '/src/assets/images/mombasa.jpg',
    rating: 4.8,
  },
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
  {
    name: 'Maldives',
    description: 'Indulge in the pristine blue waters and luxury resorts of the Maldives.',
    price: '$3,200',
    imageUrl: '/src/assets/images/maldives.jpg',
    rating: 4.8,
  },
  {
    name: 'New York City',
    description: 'Explore the vibrant and bustling New York City in this 7-day adventure.',
    price: '$2,500',
    imageUrl: '/src/assets/images/newyork.jpg',
    rating: 4.7,
  },
  {
    name: 'Santorini',
    description: 'Discover the beautiful landscapes and sunsets of Santorini, Greece.',
    price: '€2,200',
    imageUrl: '/src/assets/images/santorini.jpg',
    rating: 4.6,
  },
];

const DestinationCard = ({ destination }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex">
    <div className="w-1/3 relative">
      <img 
        src={destination.imageUrl} 
        alt={destination.name} 
        className="w-full h-48 object-cover rounded-lg" 
      />
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
        <Link 
          to={`/destination/${encodeURIComponent(destination.name)}`} 
          className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600"
        >
          More Info
        </Link>
      </div>
    </div>
  </div>
);

const Dest = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      {/* Local Destinations */}
      <h2 className="text-3xl font-bold mb-6 text-center">Local Destinations</h2>
      <div className="grid grid-cols-1 gap-8 mb-12">
        {localDestinations.map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
        ))}
      </div>

      {/* International Destinations */}
      <h2 className="text-3xl font-bold mb-6 text-center">International Destinations</h2>
      <div className="grid grid-cols-1 gap-8">
        {internationalDestinations.map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Dest;
