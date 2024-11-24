import React from 'react';
import { useParams } from 'react-router-dom';

const destinations = [
  {
    name: 'SEYCHELLES',
    category: 'Beach',
    image: '/src/assets/images/raha.jpg',
    price: 1200,
    rating: 5,
    details: {
      highlights: ['Pristine beaches', 'Luxury resorts', 'Snorkeling and diving'],
      description: 'Experience the paradise of Seychelles, famous for its crystal-clear waters and luxurious resorts.',
      inclusions: ['Accommodation', 'Breakfast', 'Airport Transfers'],
      exclusions: ['Flights', 'Personal Expenses'],
    },
  },
  {
    name: 'MAURITIUS',
    category: 'Beach',
    image: '/src/assets/images/maur.jpg',
    price: 190,
    rating: 4,
    details: {
      highlights: ['Beautiful beaches', 'Water sports', 'Cultural heritage'],
      description: 'Discover Mauritius, a perfect blend of culture, adventure, and pristine beaches.',
      inclusions: ['Accommodation', 'Daily Breakfast', 'City Tour'],
      exclusions: ['Flights', 'Visa Fees'],
    },
  },
  {
    name: 'DUBAI',
    category: 'Beach',
    image: '/src/assets/images/dubai.jpg',
    price: 1280,
    rating: 5,
    details: {
      highlights: ['Luxury shopping', 'Desert safaris', 'Modern architecture'],
      description: 'Dubai offers a mix of ultramodern architecture and rich culture. A perfect destination for everyone.',
      inclusions: ['Hotel Stay', 'City Tours', 'Desert Safari'],
      exclusions: ['Flights', 'Personal Expenses'],
    },
  },
  {
    name: 'EGYPT',
    category: 'Pyramids',
    image: '/src/assets/images/egypt.jpg',
    price: 300,
    rating: 4,
    details: {
      highlights: ['Pyramids of Giza', 'Nile cruises', 'Ancient temples'],
      description: 'Step back in time and explore the rich history and culture of Egypt, home to ancient wonders.',
      inclusions: ['Hotel Stay', 'Guided Tours', 'Airport Transfers'],
      exclusions: ['Flights', 'Visa Fees'],
    },
  },
];

const InternationalDetails = () => {
  const { destinationName } = useParams();

  // Normalize case and trim spaces for consistent matching
  const destination = destinations.find(
    (d) => d.name.trim().toLowerCase() === decodeURIComponent(destinationName.trim().toLowerCase())
  );

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-red-500">Destination Not Found</h1>
        <p className="text-gray-600 mt-4">Sorry, the destination you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
      <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover rounded-lg shadow-md mb-4" />
      <p className="text-gray-700 text-lg mb-6">{destination.details.description}</p>
      <h2 className="text-2xl font-bold mb-4">Trip Highlights</h2>
      <ul className="list-disc pl-6 mb-4">
        {destination.details.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

export default InternationalDetails;
